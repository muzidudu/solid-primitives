import {
  Accessor,
  createMemo,
  createResource,
  ResourceFetcherInfo,
  ResourceReturn
} from "solid-js";
import { RequestModifier } from "./modifiers";
import { fetchRequest, Request } from "./request";

export type FetchArgs = [info: RequestInfo] | [info: RequestInfo, init?: RequestInit];

export type DistributeFetcherArgs<
  FetcherArgs extends any[],
  ExtraArgs extends any[]
> = FetcherArgs extends any
  ? ExtraArgs extends any
    ? | [...FetcherArgs, ...ExtraArgs]
      | [Accessor<FetcherArgs | undefined>, ...ExtraArgs]
      | [...{ [n in keyof FetcherArgs]: Accessor<FetcherArgs[n] | undefined> }, ...ExtraArgs]
    : never
  : never;
  
export type FetchOptions<Result, InitialValue, FetcherArgs> = InitialValue extends undefined
  ? {
      initialValue?: InitialValue;
      name?: string;
      fetch?: typeof fetch;
      request?: (requestContext: RequestContext<Result, FetcherArgs>) => void;
      responseHandler?: (response: Response) => any;
      disable?: boolean;
    }
  : {
      initialValue: InitialValue;
      name?: string;
      fetch?: typeof fetch;
      request?: (requestContext: RequestContext<Result, FetcherArgs>) => void;
      responseHandler?: (response: Response) => any;
      disable?: boolean;
    };

export type FetchReturn<T, I> = [
  {
    (): T | I;
    /** if you are using withAbort(), this will contain a boolean to check if the request was aborted */
    aborted?: boolean;
    error: any;
    loading: boolean;
    status: number | null;
    response: Response | null;
    [key: string]: any;
  },
  {
    /** if you are using withAbort(), this callback will allow you to abort the request */
    abort?: () => void;
    mutate: (v: T | I) => T | I;
    refetch: () => void;
  }
];

export type RequestContext<Result, FetcherArgs> = {
  urlAccessor: Accessor<FetcherArgs | undefined>;
  wrapResource: () => ResourceReturn<Result>;
  fetcher?: (requestData: FetcherArgs, info: ResourceFetcherInfo<Result>) => Promise<Result>;
  response?: Response;
  resource?: ResourceReturn<Result>;
  abortController?: AbortController;
  responseHandler?: (response: Response) => Result;
  [key: string]: any;
};

const isOptions = <Result, InitialValue, FetcherArgs>(
  prop: any
): prop is FetchOptions<Result, InitialValue, FetcherArgs> =>
  typeof prop === "object" && ["name", "initialValue", "fetch", "request"].some(key => key in prop);

/**
 * Creates a fetch resource with lightweight modifications
 *
 * ```typescript
 * createFetch<Result, InitialValue, FetcherArgs>(
 *  requestInfo: RequestInfo,
 *  requestInit?: RequestInit,
 *  options?: {
 *    initialValue?: T,
 *    name?: string,
 *    fetch?: typeof fetch,
 *    // disable fetching, e.g. in SSR situations (use `isServer`)
 *    disabled?: boolean
 *  },
 *  modifiers?: (withAbort() | withCache() | ...)[]
 * ): [
 *   Resource<T> & {
 *     status: number | null,
 *     response: Response | null
 *   } & ModifierResourceModifications,
 *   { mutate: (v: T) => T, refetch: () => void } &
 *   ModifierActionModifications
 * ]
 * ```
 *
 * * You can leave out `requestInit` and take the options as second argument
 * * Responses with content-type `application/json` will be handled as JSON
 * * Responses with content-type `text/*` will be handled as text
 * * Everything else will be handled as Blob(); use the Resource.response property for other use cases
 *
 * ## Examples:
 * ```typescript
 * const [value] = createFetch('https://my-url/');
 * const [json, { abort }] = createFetch({ url: 'https://my-url/', method: 'POST', body }, [withAbort()]);
 *
 * ## Available Modifiers:
 * * withAbort() - makes request abortable
 * * withTimeout(ms) - adds a request timeout (works with abort)
 * * withRetry(num) - retries request *num* times
 * * withCache(options) - caches requests
 * * withCatchAll() - catches all errors so you don't need a boundary
 *
 * You can even add your own modifiers.
 * ```
 */
export function createFetch<
  Result,
  InitialValue = undefined,
  FetcherArgs extends any[] = FetchArgs
>(...fetcherArgs: FetcherArgs): FetchReturn<Result, InitialValue>;
export function createFetch<
  Result,
  InitialValue = undefined,
  FetcherArgs extends any[] = FetchArgs
>(
  ...args: DistributeFetcherArgs<FetcherArgs, [modifiers: RequestModifier[] | [options: FetchOptions<Result, InitialValue, FetcherArgs> & { request: never, initialValue: never }, modifiers?: RequestModifier[]]]>
): FetchReturn<Result, InitialValue>;
export function createFetch<
  Result,
  InitialValue,
  FetcherArgs extends any[] = FetchArgs
>(
  ...args: DistributeFetcherArgs<FetcherArgs, [options: FetchOptions<Result, InitialValue, FetcherArgs> & { request: never, initialValue: InitialValue }, modifiers?: RequestModifier[]]>
): FetchReturn<Result, InitialValue>;
export function createFetch<
  Result,
  InitialValue,
  FetcherArgs extends any[], 
>(
  ...args: DistributeFetcherArgs<FetcherArgs, [modifiers: RequestModifier[] | [options: FetchOptions<Result, InitialValue, FetcherArgs> & { initialValue?: undefined }, modifiers?: RequestModifier[]]]>
): FetcherArgs extends FetchArgs ? never : FetchReturn<Result, InitialValue>;
export function createFetch<
  Result,
  InitialValue,
  FetcherArgs extends any[]
>(
  ...args: DistributeFetcherArgs<FetcherArgs, [options: FetchOptions<Result, InitialValue, FetcherArgs>] | [options: FetchOptions<Result, InitialValue, FetcherArgs>, modifiers?: RequestModifier[]]>
): FetchReturn<Result, InitialValue>;
export function createFetch<
  Result,
  InitialValue extends Result,
  FetcherArgs extends any[] = [info: RequestInfo, init?: RequestInit]
>(...args: any[]): FetchReturn<Result, InitialValue> {
  const options = ([args[2], args[1]].find(isOptions) || {}) as FetchOptions<
    Result,
    InitialValue,
    FetcherArgs
  >;
  const urlAccessor: Accessor<FetcherArgs | undefined> = createMemo(() => {
    if (options.disable) {
      return undefined;
    }
    const info: RequestInfo | undefined =
      typeof args[0] === "function"
        ? (args[0] as Accessor<FetcherArgs | FetcherArgs[0]>)()
        : args[0];
    if (!info) {
      return undefined;
    }
    const init =
      typeof args[1] === "function"
        ? (args[1] as Accessor<FetcherArgs[1]>)()
        : isOptions(args[1])
        ? undefined
        : (args[1] as RequestInit);
    return [info, init] as FetcherArgs;
  });
  const modifiers: (Request<FetcherArgs> | RequestModifier)[] = ((): RequestModifier[] => {
    for (let l = args.length - 1; l >= 1; l--) {
      if (Array.isArray(args[l])) {
        return args[l];
      }
    }
    return [];
  })();
  modifiers.unshift((options.request || fetchRequest(options.fetch)) as Request<FetcherArgs>);
  let index = 0;
  const fetchContext: RequestContext<Result, FetcherArgs> = {
    urlAccessor,
    responseHandler: options.responseHandler,
    wrapResource: () => {
      const modifier = modifiers[index++];
      typeof modifier === "function" && (modifier as RequestModifier)(fetchContext);
      if (!fetchContext.resource) {
        fetchContext.resource = createResource(
          fetchContext.urlAccessor,
          fetchContext.fetcher!,
          options as any
        ) as ResourceReturn<Result>;
      }
      return fetchContext.resource!;
    }
  };
  fetchContext.wrapResource();
  return fetchContext.resource as unknown as FetchReturn<Result, InitialValue>;
};
