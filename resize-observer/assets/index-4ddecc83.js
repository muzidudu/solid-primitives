(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();const oe=(e,t)=>e===t,H={equals:oe};let X=te;const y=1,$=2,J={owned:null,cleanups:null,context:null,owner:null};var a=null;let R=null,c=null,d=null,b=null,O=0;function fe(e,t){const n=c,s=a,i=e.length===0,l=i?J:{owned:null,cleanups:null,context:null,owner:t===void 0?s:t},r=i?e:()=>e(()=>A(()=>T(l)));a=l,c=null;try{return E(r,!0)}finally{c=n,a=s}}function W(e,t){t=t?Object.assign({},H,t):H;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.value)),k(n,i));return[he.bind(n),s]}function x(e,t,n){const s=ee(e,t,!1,y);P(s)}function Y(e,t,n){X=ge;const s=ee(e,t,!1,y);(!n||!n.render)&&(s.user=!0),b?b.push(s):P(s)}function ue(e){return E(e,!1)}function A(e){if(c===null)return e();const t=c;c=null;try{return e()}finally{c=t}}function _(e){return a===null||(a.cleanups===null?a.cleanups=[e]:a.cleanups.push(e)),e}function ce(){return c}function he(){if(this.sources&&this.state)if(this.state===y)P(this);else{const e=d;d=null,E(()=>L(this),!1),d=e}if(c){const e=this.observers?this.observers.length:0;c.sources?(c.sources.push(this),c.sourceSlots.push(e)):(c.sources=[this],c.sourceSlots=[e]),this.observers?(this.observers.push(c),this.observerSlots.push(c.sources.length-1)):(this.observers=[c],this.observerSlots=[c.sources.length-1])}return this.value}function k(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&E(()=>{for(let i=0;i<e.observers.length;i+=1){const l=e.observers[i],r=R&&R.running;r&&R.disposed.has(l),(r?!l.tState:!l.state)&&(l.pure?d.push(l):b.push(l),l.observers&&ne(l)),r||(l.state=y)}if(d.length>1e6)throw d=[],new Error},!1)),t}function P(e){if(!e.fn)return;T(e);const t=a,n=c,s=O;c=a=e,ae(e,e.value,s),c=n,a=t}function ae(e,t,n){let s;try{s=e.fn(t)}catch(i){return e.pure&&(e.state=y,e.owned&&e.owned.forEach(T),e.owned=null),e.updatedAt=n+1,se(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?k(e,s):e.value=s,e.updatedAt=n)}function ee(e,t,n,s=y,i){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:a,context:null,pure:n};return a===null||a!==J&&(a.owned?a.owned.push(l):a.owned=[l]),l}function C(e){if(e.state===0)return;if(e.state===$)return L(e);if(e.suspense&&A(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<O);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===y)P(e);else if(e.state===$){const s=d;d=null,E(()=>L(e,t[0]),!1),d=s}}function E(e,t){if(d)return e();let n=!1;t||(d=[]),b?n=!0:b=[],O++;try{const s=e();return de(n),s}catch(s){n||(b=null),d=null,se(s)}}function de(e){if(d&&(te(d),d=null),e)return;const t=b;b=null,t.length&&E(()=>X(t),!1)}function te(e){for(let t=0;t<e.length;t++)C(e[t])}function ge(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:C(s)}for(t=0;t<n;t++)C(e[t])}function L(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];if(s.sources){const i=s.state;i===y?s!==t&&(!s.updatedAt||s.updatedAt<O)&&C(s):i===$&&L(s,t)}}}function ne(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=$,n.pure?d.push(n):b.push(n),n.observers&&ne(n))}}function T(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const l=i.pop(),r=n.observerSlots.pop();s<i.length&&(l.sourceSlots[r]=s,i[s]=l,n.observerSlots[s]=r)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)T(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function se(e){throw e}function j(e,t){return A(()=>e(t||{}))}function pe(e,t,n){let s=n.length,i=t.length,l=s,r=0,o=0,f=t[i-1].nextSibling,u=null;for(;r<i||o<l;){if(t[r]===n[o]){r++,o++;continue}for(;t[i-1]===n[l-1];)i--,l--;if(i===r){const h=l<s?o?n[o-1].nextSibling:n[l-o]:f;for(;o<l;)e.insertBefore(n[o++],h)}else if(l===o)for(;r<i;)(!u||!u.has(t[r]))&&t[r].remove(),r++;else if(t[r]===n[l-1]&&n[o]===t[i-1]){const h=t[--i].nextSibling;e.insertBefore(n[o++],t[r++].nextSibling),e.insertBefore(n[--l],h),t[i]=n[l]}else{if(!u){u=new Map;let g=o;for(;g<l;)u.set(n[g],g++)}const h=u.get(t[r]);if(h!=null)if(o<h&&h<l){let g=r,p=1,m;for(;++g<i&&g<l&&!((m=u.get(t[g]))==null||m!==h+p);)p++;if(p>h-o){const B=t[r];for(;o<h;)e.insertBefore(n[o++],B)}else e.replaceChild(n[o++],t[r++])}else r++;else t[r++].remove()}}}const F="_$DX_DELEGATE";function be(e,t,n,s={}){let i;return fe(l=>{i=l,t===document?e():w(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function ie(e,t,n){let s;const i=()=>{const r=document.createElement("template");return r.innerHTML=e,n?r.content.firstChild.firstChild:r.content.firstChild},l=t?()=>(s||(s=i())).cloneNode(!0):()=>A(()=>document.importNode(s||(s=i()),!0));return l.cloneNode=l,l}function we(e,t=window.document){const n=t[F]||(t[F]=new Set);for(let s=0,i=e.length;s<i;s++){const l=e[s];n.has(l)||(n.add(l),t.addEventListener(l,ve))}}function K(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function ye(e,t,n){return A(()=>e(t,n))}function w(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return N(e,t,s,n);x(i=>N(e,t(),i,n),s)}function ve(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s.call(n,i,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function N(e,t,n,s,i){for(;typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,r=s!==void 0;if(e=r&&n[0]&&n[0].parentNode||e,l==="string"||l==="number")if(l==="number"&&(t=t.toString()),r){let o=n[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),n=S(e,n,s,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||l==="boolean")n=S(e,n,s);else{if(l==="function")return x(()=>{let o=t();for(;typeof o=="function";)o=o();n=N(e,o,n,s)}),()=>n;if(Array.isArray(t)){const o=[],f=n&&Array.isArray(n);if(D(o,t,n,i))return x(()=>n=N(e,o,n,s,!0)),()=>n;if(o.length===0){if(n=S(e,n,s),r)return n}else f?n.length===0?G(e,o,s):pe(e,n,o):(n&&S(e),G(e,o));n=o}else if(t instanceof Node){if(Array.isArray(n)){if(r)return n=S(e,n,s,t);S(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function D(e,t,n,s){let i=!1;for(let l=0,r=t.length;l<r;l++){let o=t[l],f=n&&n[l];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))i=D(e,o,f)||i;else if(typeof o=="function")if(s){for(;typeof o=="function";)o=o();i=D(e,Array.isArray(o)?o:[o],Array.isArray(f)?f:[f])||i}else e.push(o),i=!0;else{const u=String(o);f&&f.nodeType===3?(f.data=u,e.push(f)):e.push(document.createTextNode(u))}}return i}function G(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function S(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let l=!1;for(let r=t.length-1;r>=0;r--){const o=t[r];if(i!==o){const f=o.parentNode===e;!l&&!r?f?e.replaceChild(i,o):e.insertBefore(i,n):f&&o.remove()}else l=!0}}else e.insertBefore(i,n);return[i]}function me(e){return e!==null&&(typeof e=="object"||typeof e=="function")}var Se=e=>e!=null,xe=e=>e.filter(Se),I=e=>typeof e=="function"&&!e.length?e():e,Ae=e=>Array.isArray(e)?e:e?[e]:[];function Z(e,...t){return typeof e=="function"?e(...t):e}var Ee=_;function $e(e,t,n,s){const i=e.length,l=t.length;let r=0;if(!l){for(;r<i;r++)n(e[r]);return}if(!i){for(;r<l;r++)s(t[r]);return}for(;r<l&&t[r]===e[r];r++);let o,f;t=t.slice(r),e=e.slice(r);for(o of t)e.includes(o)||s(o);for(f of e)t.includes(f)||n(f)}function _e(e,t,n,s){return e.addEventListener(t,n,s),Ee(e.removeEventListener.bind(e,t,n,s))}function le(e){const t={...e},n={...e},s={},i=r=>{let o=s[r];if(!o){if(!ce())return t[r];s[r]=o=W(t[r],{internal:!0}),delete t[r]}return o[0]()};for(const r in e)Object.defineProperty(n,r,{get:()=>i(r),enumerable:!0});const l=(r,o)=>{const f=s[r];if(f)return f[1](o);r in t&&(t[r]=Z(o,[t[r]]))};return[n,(r,o)=>{if(me(r)){const f=A(()=>Object.entries(Z(r,n)));ue(()=>{for(const[u,h]of f)l(u,()=>h)})}else l(r,o);return n}]}function Ce(e,t){return le(t())}function Le(e,t){const n=new ResizeObserver(e);return _(n.disconnect.bind(n)),{observe:s=>n.observe(s,t),unobserve:n.unobserve.bind(n)}}function Ne(e,t,n){const s=new WeakMap,{observe:i,unobserve:l}=Le(r=>{for(const o of r){const{contentRect:f,target:u}=o,h=Math.round(f.width),g=Math.round(f.height),p=s.get(u);(!p||p.width!==h||p.height!==g)&&(t(f,u,o),s.set(u,{width:h,height:g}))}},n);Y(r=>{const o=xe(Ae(I(e)));return $e(o,r,i,l),o},[])}const Oe={width:0,height:0};function q(){return{width:window.innerWidth,height:window.innerHeight}}function Pe(){const[e,t]=Ce(Oe,q);return _e(window,"resize",()=>t(q())),e}const Te={width:null,height:null};function Be(e){if(!e)return{...Te};const{width:t,height:n}=e.getBoundingClientRect();return{width:t,height:n}}function Me(e){const[t,n]=le(Be(I(e))),s=new ResizeObserver(([i])=>{const{width:l,height:r}=i.contentRect;n({width:l,height:r})});return _(()=>s.disconnect()),Y(()=>{const i=I(e);i&&(s.observe(i),_(()=>s.unobserve(i)))}),t}const ze=ie('<div class="flex flex-col"><label class="mb-1">:</label><input type="range" min="10" max="400" step="10">'),Re=ie('<div class="box-border flex min-h-screen w-full flex-col items-center justify-center space-y-4 bg-gray-800 p-24 text-white"><div class="center-child min-h-82"><div class="shadow-bg-gray-900 center-child h-24 w-24 rounded-md bg-orange-500 shadow-lg">px x <!>px</div></div><div class="wrapper-h"></div><div class="fixed bottom-4 right-4">window: <!>px x <!>px'),Q=e=>(()=>{const t=ze(),n=t.firstChild,s=n.firstChild,i=n.nextSibling;return w(n,()=>e.name,s),i.$$input=l=>e.setValue(+l.currentTarget.value),x(l=>{const r=e.name,o=e.name;return r!==l._v$&&K(n,"for",l._v$=r),o!==l._v$2&&K(i,"name",l._v$2=o),l},{_v$:void 0,_v$2:void 0}),x(()=>i.value=e.value),t})(),We=()=>{const[e,t]=W(200),[n,s]=W(200);let i;const l=Pe(),r=Me(()=>i);return Ne(()=>i,({width:o,height:f})=>console.log("ResizeObserver event",{width:o,height:f})),(()=>{const o=Re(),f=o.firstChild,u=f.firstChild,h=u.firstChild,g=h.nextSibling;g.nextSibling;const p=f.nextSibling,m=p.nextSibling,B=m.firstChild,V=B.nextSibling,re=V.nextSibling,U=re.nextSibling;return U.nextSibling,ye(v=>i=v,u),w(u,()=>Math.round(r.width??0),h),w(u,()=>Math.round(r.height??0),g),w(p,j(Q,{name:"width",get value(){return e()},setValue:t}),null),w(p,j(Q,{name:"height",get value(){return n()},setValue:s}),null),w(m,()=>Math.round(l.width),V),w(m,()=>Math.round(l.height),U),x(v=>{const M=`${e()}px`,z=`${n()}px`;return M!==v._v$3&&((v._v$3=M)!=null?u.style.setProperty("width",M):u.style.removeProperty("width")),z!==v._v$4&&((v._v$4=z)!=null?u.style.setProperty("height",z):u.style.removeProperty("height")),v},{_v$3:void 0,_v$4:void 0}),o})()};be(()=>j(We,{}),document.getElementById("root"));we(["input"]);
