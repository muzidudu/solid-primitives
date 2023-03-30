(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const ee=(e,t)=>e===t,v={equals:ee};let G=X;const w=1,C=2,H={owned:null,cleanups:null,context:null,owner:null};var a=null;let P=null,f=null,c=null,p=null,_=0;function te(e,t){const n=f,s=a,r=e.length===0,o=r?H:{owned:null,cleanups:null,context:null,owner:t===void 0?s:t},i=r?e:()=>e(()=>y(()=>L(o)));a=o,f=null;try{return S(i,!0)}finally{f=n,a=s}}function V(e,t){t=t?Object.assign({},v,t):v;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=r=>(typeof r=="function"&&(r=r(n.value)),W(n,r));return[Q.bind(n),s]}function D(e,t,n){const s=R(e,t,!1,w);m(s)}function K(e,t,n){G=le;const s=R(e,t,!1,w);s.user=!0,p?p.push(s):m(s)}function $(e,t,n){n=n?Object.assign({},v,n):v;const s=R(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,m(s),Q.bind(s)}function y(e){if(f===null)return e();const t=f;f=null;try{return e()}finally{f=t}}function ne(e){K(()=>y(e))}function se(e){const t=$(e),n=$(()=>M(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}function Q(){if(this.sources&&this.state)if(this.state===w)m(this);else{const e=c;c=null,S(()=>N(this),!1),c=e}if(f){const e=this.observers?this.observers.length:0;f.sources?(f.sources.push(this),f.sourceSlots.push(e)):(f.sources=[this],f.sourceSlots=[e]),this.observers?(this.observers.push(f),this.observerSlots.push(f.sources.length-1)):(this.observers=[f],this.observerSlots=[f.sources.length-1])}return this.value}function W(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&S(()=>{for(let r=0;r<e.observers.length;r+=1){const o=e.observers[r],i=P&&P.running;i&&P.disposed.has(o),(i?!o.tState:!o.state)&&(o.pure?c.push(o):p.push(o),o.observers&&J(o)),i||(o.state=w)}if(c.length>1e6)throw c=[],new Error},!1)),t}function m(e){if(!e.fn)return;L(e);const t=a,n=f,s=_;f=a=e,oe(e,e.value,s),f=n,a=t}function oe(e,t,n){let s;try{s=e.fn(t)}catch(r){return e.pure&&(e.state=w,e.owned&&e.owned.forEach(L),e.owned=null),e.updatedAt=n+1,Y(r)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?W(e,s):e.value=s,e.updatedAt=n)}function R(e,t,n,s=w,r){const o={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:a,context:null,pure:n};return a===null||a!==H&&(a.owned?a.owned.push(o):a.owned=[o]),o}function x(e){if(e.state===0)return;if(e.state===C)return N(e);if(e.suspense&&y(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<_);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===w)m(e);else if(e.state===C){const s=c;c=null,S(()=>N(e,t[0]),!1),c=s}}function S(e,t){if(c)return e();let n=!1;t||(c=[]),p?n=!0:p=[],_++;try{const s=e();return re(n),s}catch(s){n||(p=null),c=null,Y(s)}}function re(e){if(c&&(X(c),c=null),e)return;const t=p;p=null,t.length&&S(()=>G(t),!1)}function X(e){for(let t=0;t<e.length;t++)x(e[t])}function le(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:x(s)}for(t=0;t<n;t++)x(e[t])}function N(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];if(s.sources){const r=s.state;r===w?s!==t&&(!s.updatedAt||s.updatedAt<_)&&x(s):r===C&&N(s,t)}}}function J(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=C,n.pure?c.push(n):p.push(n),n.observers&&J(n))}}function L(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const o=r.pop(),i=n.observerSlots.pop();s<r.length&&(o.sourceSlots[i]=s,r[s]=o,n.observerSlots[s]=i)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)L(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function Y(e){throw e}function M(e){if(typeof e=="function"&&!e.length)return M(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=M(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function g(e,t){return y(()=>e(t||{}))}const ie=e=>`Stale read from <${e}>.`;function ue(e){let t=!1;const n=(o,i)=>o[0]===i[0]&&(t?o[1]===i[1]:!o[1]==!i[1])&&o[2]===i[2],s=se(()=>e.children),r=$(()=>{let o=s();Array.isArray(o)||(o=[o]);for(let i=0;i<o.length;i++){const l=o[i].when;if(l)return t=!!o[i].keyed,[i,l,o[i]]}return[-1]},void 0,{equals:n});return $(()=>{const[o,i,l]=r();if(o<0)return e.fallback;const u=l.children;return typeof u=="function"&&u.length>0?y(()=>u(t?i:()=>{if(y(r)[0]!==o)throw ie("Match");return l.when})):u},void 0,void 0)}function B(e){return e}function fe(e,t,n){let s=n.length,r=t.length,o=s,i=0,l=0,u=t[r-1].nextSibling,h=null;for(;i<r||l<o;){if(t[i]===n[l]){i++,l++;continue}for(;t[r-1]===n[o-1];)r--,o--;if(r===i){const d=o<s?l?n[l-1].nextSibling:n[o-l]:u;for(;l<o;)e.insertBefore(n[l++],d)}else if(o===l)for(;i<r;)(!h||!h.has(t[i]))&&t[i].remove(),i++;else if(t[i]===n[o-1]&&n[l]===t[r-1]){const d=t[--r].nextSibling;e.insertBefore(n[l++],t[i++].nextSibling),e.insertBefore(n[--o],d),t[r]=n[o]}else{if(!h){h=new Map;let A=l;for(;A<o;)h.set(n[A],A++)}const d=h.get(t[i]);if(d!=null)if(l<d&&d<o){let A=i,O=1,F;for(;++A<r&&A<o&&!((F=h.get(t[A]))==null||F!==d+O);)O++;if(O>d-l){const z=t[i];for(;l<d;)e.insertBefore(n[l++],z)}else e.replaceChild(n[l++],t[i++])}else i++;else t[i++].remove()}}}const I="_$DX_DELEGATE";function ce(e,t,n,s={}){let r;return te(o=>{r=o,t===document?e():Z(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{r(),t.textContent=""}}function E(e,t,n){let s;const r=()=>{const i=document.createElement("template");return i.innerHTML=e,n?i.content.firstChild.firstChild:i.content.firstChild},o=t?()=>(s||(s=r())).cloneNode(!0):()=>y(()=>document.importNode(s||(s=r()),!0));return o.cloneNode=o,o}function ae(e,t=window.document){const n=t[I]||(t[I]=new Set);for(let s=0,r=e.length;s<r;s++){const o=e[s];n.has(o)||(n.add(o),t.addEventListener(o,he))}}function j(e,t,n){return y(()=>e(t,n))}function Z(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return T(e,t,s,n);D(r=>T(e,t(),r,n),s)}function he(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const s=n[t];if(s&&!n.disabled){const r=n[`${t}Data`];if(r!==void 0?s.call(n,r,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function T(e,t,n,s,r){for(;typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,i=s!==void 0;if(e=i&&n[0]&&n[0].parentNode||e,o==="string"||o==="number")if(o==="number"&&(t=t.toString()),i){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=b(e,n,s,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||o==="boolean")n=b(e,n,s);else{if(o==="function")return D(()=>{let l=t();for(;typeof l=="function";)l=l();n=T(e,l,n,s)}),()=>n;if(Array.isArray(t)){const l=[],u=n&&Array.isArray(n);if(U(l,t,n,r))return D(()=>n=T(e,l,n,s,!0)),()=>n;if(l.length===0){if(n=b(e,n,s),i)return n}else u?n.length===0?q(e,l,s):fe(e,n,l):(n&&b(e),q(e,l));n=l}else if(t instanceof Node){if(Array.isArray(n)){if(i)return n=b(e,n,s,t);b(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function U(e,t,n,s){let r=!1;for(let o=0,i=t.length;o<i;o++){let l=t[o],u=n&&n[o];if(l instanceof Node)e.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))r=U(e,l,u)||r;else if(typeof l=="function")if(s){for(;typeof l=="function";)l=l();r=U(e,Array.isArray(l)?l:[l],Array.isArray(u)?u:[u])||r}else e.push(l),r=!0;else{const h=String(l);u&&u.nodeType===3?(u.data=h,e.push(u)):e.push(document.createTextNode(h))}}return r}function q(e,t,n=null){for(let s=0,r=t.length;s<r;s++)e.insertBefore(t[s],n)}function b(e,t,n,s){if(n===void 0)return e.textContent="";const r=s||document.createTextNode("");if(t.length){let o=!1;for(let i=t.length-1;i>=0;i--){const l=t[i];if(r!==l){const u=l.parentNode===e;!o&&!i?u?e.replaceChild(r,l):e.insertBefore(r,n):u&&l.remove()}else o=!0}}else e.insertBefore(r,n);return[r]}const de=(e,t)=>{t()&&ne(()=>{e.hasAttribute("autofocus")&&setTimeout(()=>{e.focus()})})},k=e=>{K(()=>{const t=e();t&&setTimeout(()=>t.focus())})};const pe=E("<button autofocus>directive"),ge=E("<button>ref"),ye=E("<button>ref signal"),we=E('<div class="m-4 flex gap-4"><button>toggle'),Ae=E("<button>no autofocus"),be=()=>(()=>{const e=pe();return j(de,e,()=>!0),e})(),me=()=>{let e;return k(()=>e),(()=>{const t=ge(),n=e;return typeof n=="function"?j(n,t):e=t,t})()},Se=()=>{const[e,t]=V();return k(e),(()=>{const n=ye();return j(t,n),n})()},Ee=()=>{const[e,t]=V(0);return(()=>{const n=we(),s=n.firstChild;return s.$$click=()=>t((e()+1)%6),Z(n,g(ue,{get fallback(){return Ae()},get children(){return[g(B,{get when(){return e()===0},get children(){return g(be,{})}}),g(B,{get when(){return e()===2},get children(){return g(me,{})}}),g(B,{get when(){return e()===4},get children(){return g(Se,{})}})]}}),null),n})()};ce(()=>g(Ee,{}),document.getElementById("root"));ae(["click"]);
