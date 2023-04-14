(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const pe=(e,n)=>e===n,_={equals:pe};let ne=oe;const m=1,N=2,se={owned:null,cleanups:null,context:null,owner:null};var a=null;let j=null,f=null,h=null,y=null,D=0;function ge(e,n){const t=f,i=a,r=e.length===0,s=r?se:{owned:null,cleanups:null,context:null,owner:n===void 0?i:n},l=r?e:()=>e(()=>w(()=>M(s)));a=s,f=null;try{return v(l,!0)}finally{f=t,a=i}}function X(e,n){n=n?Object.assign({},_,n):_;const t={value:e,observers:null,observerSlots:null,comparator:n.equals||void 0},i=r=>(typeof r=="function"&&(r=r(t.value)),re(t,r));return[ie.bind(t),i]}function H(e,n,t){const i=V(e,n,!1,m);C(i)}function ye(e,n,t){ne=Se;const i=V(e,n,!1,m);(!t||!t.render)&&(i.user=!0),y?y.push(i):C(i)}function P(e,n,t){t=t?Object.assign({},_,t):_;const i=V(e,n,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=t.equals||void 0,C(i),ie.bind(i)}function Y(e){return v(e,!1)}function w(e){if(f===null)return e();const n=f;f=null;try{return e()}finally{f=n}}function me(e){ye(()=>w(e))}function we(e){return a===null||(a.cleanups===null?a.cleanups=[e]:a.cleanups.push(e)),e}function be(e){const n=P(e),t=P(()=>k(n()));return t.toArray=()=>{const i=t();return Array.isArray(i)?i:i!=null?[i]:[]},t}function ie(){if(this.sources&&this.state)if(this.state===m)C(this);else{const e=h;h=null,v(()=>O(this),!1),h=e}if(f){const e=this.observers?this.observers.length:0;f.sources?(f.sources.push(this),f.sourceSlots.push(e)):(f.sources=[this],f.sourceSlots=[e]),this.observers?(this.observers.push(f),this.observerSlots.push(f.sources.length-1)):(this.observers=[f],this.observerSlots=[f.sources.length-1])}return this.value}function re(e,n,t){let i=e.value;return(!e.comparator||!e.comparator(i,n))&&(e.value=n,e.observers&&e.observers.length&&v(()=>{for(let r=0;r<e.observers.length;r+=1){const s=e.observers[r],l=j&&j.running;l&&j.disposed.has(s),(l?!s.tState:!s.state)&&(s.pure?h.push(s):y.push(s),s.observers&&le(s)),l||(s.state=m)}if(h.length>1e6)throw h=[],new Error},!1)),n}function C(e){if(!e.fn)return;M(e);const n=a,t=f,i=D;f=a=e,Ae(e,e.value,i),f=t,a=n}function Ae(e,n,t){let i;try{i=e.fn(n)}catch(r){return e.pure&&(e.state=m,e.owned&&e.owned.forEach(M),e.owned=null),e.updatedAt=t+1,ue(r)}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?re(e,i):e.value=i,e.updatedAt=t)}function V(e,n,t,i=m,r){const s={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:a,context:null,pure:t};return a===null||a!==se&&(a.owned?a.owned.push(s):a.owned=[s]),s}function I(e){if(e.state===0)return;if(e.state===N)return O(e);if(e.suspense&&w(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<D);)e.state&&n.push(e);for(let t=n.length-1;t>=0;t--)if(e=n[t],e.state===m)C(e);else if(e.state===N){const i=h;h=null,v(()=>O(e,n[0]),!1),h=i}}function v(e,n){if(h)return e();let t=!1;n||(h=[]),y?t=!0:y=[],D++;try{const i=e();return Ee(t),i}catch(i){t||(y=null),h=null,ue(i)}}function Ee(e){if(h&&(oe(h),h=null),e)return;const n=y;y=null,n.length&&v(()=>ne(n),!1)}function oe(e){for(let n=0;n<e.length;n++)I(e[n])}function Se(e){let n,t=0;for(n=0;n<e.length;n++){const i=e[n];i.user?e[t++]=i:I(i)}for(n=0;n<t;n++)I(e[n])}function O(e,n){e.state=0;for(let t=0;t<e.sources.length;t+=1){const i=e.sources[t];if(i.sources){const r=i.state;r===m?i!==n&&(!i.updatedAt||i.updatedAt<D)&&I(i):r===N&&O(i,n)}}}function le(e){for(let n=0;n<e.observers.length;n+=1){const t=e.observers[n];t.state||(t.state=N,t.pure?h.push(t):y.push(t),t.observers&&le(t))}}function M(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),i=e.sourceSlots.pop(),r=t.observers;if(r&&r.length){const s=r.pop(),l=t.observerSlots.pop();i<r.length&&(s.sourceSlots[l]=i,r[i]=s,t.observerSlots[i]=l)}}if(e.owned){for(n=e.owned.length-1;n>=0;n--)M(e.owned[n]);e.owned=null}if(e.cleanups){for(n=e.cleanups.length-1;n>=0;n--)e.cleanups[n]();e.cleanups=null}e.state=0,e.context=null}function ue(e){throw e}function k(e){if(typeof e=="function"&&!e.length)return k(e());if(Array.isArray(e)){const n=[];for(let t=0;t<e.length;t++){const i=k(e[t]);Array.isArray(i)?n.push.apply(n,i):n.push(i)}return n}return e}function L(e,n){return w(()=>e(n||{}))}const ve=e=>`Stale read from <${e}>.`;function Te(e){let n=!1;const t=(s,l)=>s[0]===l[0]&&(n?s[1]===l[1]:!s[1]==!l[1])&&s[2]===l[2],i=be(()=>e.children),r=P(()=>{let s=i();Array.isArray(s)||(s=[s]);for(let l=0;l<s.length;l++){const o=s[l].when;if(o)return n=!!s[l].keyed,[l,o,s[l]]}return[-1]},void 0,{equals:t});return P(()=>{const[s,l,o]=r();if(s<0)return e.fallback;const u=o.children;return typeof u=="function"&&u.length>0?w(()=>u(n?l:()=>{if(w(r)[0]!==s)throw ve("Match");return o.when})):u},void 0,void 0)}function J(e){return e}function $e(e,n,t){let i=t.length,r=n.length,s=i,l=0,o=0,u=n[r-1].nextSibling,d=null;for(;l<r||o<s;){if(n[l]===t[o]){l++,o++;continue}for(;n[r-1]===t[s-1];)r--,s--;if(r===l){const p=s<i?o?t[o-1].nextSibling:t[s-o]:u;for(;o<s;)e.insertBefore(t[o++],p)}else if(s===o)for(;l<r;)(!d||!d.has(n[l]))&&n[l].remove(),l++;else if(n[l]===t[s-1]&&t[o]===n[r-1]){const p=n[--r].nextSibling;e.insertBefore(t[o++],n[l++].nextSibling),e.insertBefore(t[--s],p),n[r]=t[s]}else{if(!d){d=new Map;let g=o;for(;g<s;)d.set(t[g],g++)}const p=d.get(n[l]);if(p!=null)if(o<p&&p<s){let g=l,b=1,A;for(;++g<r&&g<s&&!((A=d.get(n[g]))==null||A!==p+b);)b++;if(b>p-o){const $=n[l];for(;o<p;)e.insertBefore(t[o++],$)}else e.replaceChild(t[o++],n[l++])}else l++;else n[l++].remove()}}}const Z="_$DX_DELEGATE";function Ce(e,n,t,i={}){let r;return ge(s=>{r=s,n===document?e():_e(n,e(),n.firstChild?null:void 0,t)},i.owner),()=>{r(),n.textContent=""}}function T(e,n,t){let i;const r=()=>{const l=document.createElement("template");return l.innerHTML=e,t?l.content.firstChild.firstChild:l.content.firstChild},s=n?()=>(i||(i=r())).cloneNode(!0):()=>w(()=>document.importNode(i||(i=r()),!0));return s.cloneNode=s,s}function xe(e,n=window.document){const t=n[Z]||(n[Z]=new Set);for(let i=0,r=e.length;i<r;i++){const s=e[i];t.has(s)||(t.add(s),n.addEventListener(s,Ne))}}function Le(e,n,t){t==null?e.removeAttribute(n):e.setAttribute(n,t)}function x(e,n,t,i){if(i)Array.isArray(t)?(e[`$$${n}`]=t[0],e[`$$${n}Data`]=t[1]):e[`$$${n}`]=t;else if(Array.isArray(t)){const r=t[0];e.addEventListener(n,t[0]=s=>r.call(e,t[1],s))}else e.addEventListener(n,t)}function z(e,n,t){if(!n)return t?Le(e,"style"):n;const i=e.style;if(typeof n=="string")return i.cssText=n;typeof t=="string"&&(i.cssText=t=void 0),t||(t={}),n||(n={});let r,s;for(s in t)n[s]==null&&i.removeProperty(s),delete t[s];for(s in n)r=n[s],r!==t[s]&&(i.setProperty(s,r),t[s]=r);return t}function _e(e,n,t,i){if(t!==void 0&&!i&&(i=[]),typeof n!="function")return B(e,n,i,t);H(r=>B(e,n(),r,t),i)}function Ne(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}});t;){const i=t[n];if(i&&!t.disabled){const r=t[`${n}Data`];if(r!==void 0?i.call(t,r,e):i.call(t,e),e.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function B(e,n,t,i,r){for(;typeof t=="function";)t=t();if(n===t)return t;const s=typeof n,l=i!==void 0;if(e=l&&t[0]&&t[0].parentNode||e,s==="string"||s==="number")if(s==="number"&&(n=n.toString()),l){let o=t[0];o&&o.nodeType===3?o.data=n:o=document.createTextNode(n),t=S(e,t,i,o)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n;else if(n==null||s==="boolean")t=S(e,t,i);else{if(s==="function")return H(()=>{let o=n();for(;typeof o=="function";)o=o();t=B(e,o,t,i)}),()=>t;if(Array.isArray(n)){const o=[],u=t&&Array.isArray(t);if(q(o,n,t,r))return H(()=>t=B(e,o,t,i,!0)),()=>t;if(o.length===0){if(t=S(e,t,i),l)return t}else u?t.length===0?ee(e,o,i):$e(e,t,o):(t&&S(e),ee(e,o));t=o}else if(n instanceof Node){if(Array.isArray(t)){if(l)return t=S(e,t,i,n);S(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}else console.warn("Unrecognized value. Skipped inserting",n)}return t}function q(e,n,t,i){let r=!1;for(let s=0,l=n.length;s<l;s++){let o=n[s],u=t&&t[s];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))r=q(e,o,u)||r;else if(typeof o=="function")if(i){for(;typeof o=="function";)o=o();r=q(e,Array.isArray(o)?o:[o],Array.isArray(u)?u:[u])||r}else e.push(o),r=!0;else{const d=String(o);u&&u.nodeType===3?(u.data=d,e.push(u)):e.push(document.createTextNode(d))}}return r}function ee(e,n,t=null){for(let i=0,r=n.length;i<r;i++)e.insertBefore(n[i],t)}function S(e,n,t,i){if(t===void 0)return e.textContent="";const r=i||document.createTextNode("");if(n.length){let s=!1;for(let l=n.length-1;l>=0;l--){const o=n[l];if(r!==o){const u=o.parentNode===e;!s&&!l?u?e.replaceChild(r,o):e.insertBefore(r,t):u&&o.remove()}else s=!0}}else e.insertBefore(r,t);return[r]}const Pe=250,Ie=9e5,Oe=["mousemove","keydown","wheel","resize","wheel","mousedown","pointerdown","touchstart","touchmove","visibilitychange"],Be=({element:e,events:n=Oe,idleTimeout:t=Ie,promptTimeout:i=0,onActive:r,onIdle:s,onPrompt:l,startManually:o=!1}={})=>{let u=!1;const[d,p]=X(!1),[g,b]=X(!1);let A,$,G=0;function fe(){const c=new Date().getTime(),E=c-G<Pe;return E||(G=c),E}function K(c){fe()||(g()&&r?.(c),d()||U(c))}function ce(){if(u)return;const c=e??document;for(const E of n)c.addEventListener(E,K);u=!0}function U(c){u&&(F(),R(),ae(c))}function F(){typeof A=="number"&&clearTimeout(A),typeof $=="number"&&clearTimeout($)}function ae(c){A=setTimeout(()=>{p(!0),l?.(c),he(c)},t)}function he(c){$=setTimeout(()=>{Y(()=>{b(!0),p(!1)}),s?.(c)},i)}function R(){Y(()=>{b(!1),p(!1)})}function Q(c=new CustomEvent("manualstart")){F(),R(),ce(),U(c)}function W(){F(),R(),de()}function de(){if(!u)return;const c=e??document;for(const E of n)c.removeEventListener(E,K);u=!1}return me(()=>{o||Q(new CustomEvent("mount"))}),we(W),{isIdle:g,isPrompted:d,start:()=>Q(),reset:()=>U(new CustomEvent("manualreset")),stop:W}},De=T("<div>Hiding the data..."),Me=T("<div><p>Are you still there?</p><button>yup"),Ue=T("<h1>Super sensitive data: ******"),Fe=T("<button>stop"),Re=T("<button>start"),je=T("<button>reset"),te={background:"black",color:"white",display:"grid","place-content":"center",height:"100vh",width:"100vw","max-height":"100%","max-width":"100%"},He=()=>{const{isIdle:e,isPrompted:n,start:t,stop:i,reset:r}=Be({onActive:s=>console.log("this event re-activated me ⚡ => ",s),onIdle:s=>console.log("last event before I went to sleep 😴 => ",s),idleTimeout:3e3,promptTimeout:2e3});return L(Te,{get fallback(){return[Ue(),(()=>{const s=Fe();return x(s,"click",i,!0),s})(),(()=>{const s=Re();return x(s,"click",t,!0),s})(),(()=>{const s=je();return x(s,"click",r,!0),s})()]},get children(){return[L(J,{get when(){return e()},get children(){const s=De();return z(s,te),s}}),L(J,{get when(){return n()},get children(){const s=Me(),l=s.firstChild,o=l.nextSibling;return z(s,te),x(o,"click",r,!0),s}})]}})};Ce(()=>L(He,{}),document.getElementById("root"));xe(["click"]);
