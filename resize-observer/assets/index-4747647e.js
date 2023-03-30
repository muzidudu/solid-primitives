(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();const ue={context:void 0,registry:void 0},ce=(e,t)=>e===t,he=Symbol("solid-proxy"),ae=Symbol("solid-track"),V={equals:ce};let Q=ne;const v=1,C=2,Y={owned:null,cleanups:null,context:null,owner:null};var a=null;let P=null,c=null,d=null,w=null,N=0;function de(e,t){const n=c,s=a,i=e.length===0,l=i?Y:{owned:null,cleanups:null,context:null,owner:t===void 0?s:t},r=i?e:()=>e(()=>m(()=>M(l)));a=l,c=null;try{return E(r,!0)}finally{c=n,a=s}}function B(e,t){t=t?Object.assign({},V,t):V;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.value)),ee(n,i));return[we.bind(n),s]}function $(e,t,n){const s=te(e,t,!1,v);T(s)}function J(e,t,n){Q=me;const s=te(e,t,!1,v);s.user=!0,w?w.push(s):T(s)}function ge(e){return E(e,!1)}function m(e){if(c===null)return e();const t=c;c=null;try{return e()}finally{c=t}}function pe(e,t,n){const s=Array.isArray(e);let i,l=n&&n.defer;return r=>{let o;if(s){o=Array(e.length);for(let u=0;u<e.length;u++)o[u]=e[u]()}else o=e();if(l){l=!1;return}const f=m(()=>t(o,i,r));return i=o,f}}function be(e){J(()=>m(e))}function k(e){return a===null||(a.cleanups===null?a.cleanups=[e]:a.cleanups.push(e)),e}function we(){if(this.sources&&this.state)if(this.state===v)T(this);else{const e=d;d=null,E(()=>L(this),!1),d=e}if(c){const e=this.observers?this.observers.length:0;c.sources?(c.sources.push(this),c.sourceSlots.push(e)):(c.sources=[this],c.sourceSlots=[e]),this.observers?(this.observers.push(c),this.observerSlots.push(c.sources.length-1)):(this.observers=[c],this.observerSlots=[c.sources.length-1])}return this.value}function ee(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&E(()=>{for(let i=0;i<e.observers.length;i+=1){const l=e.observers[i],r=P&&P.running;r&&P.disposed.has(l),(r?!l.tState:!l.state)&&(l.pure?d.push(l):w.push(l),l.observers&&se(l)),r||(l.state=v)}if(d.length>1e6)throw d=[],new Error},!1)),t}function T(e){if(!e.fn)return;M(e);const t=a,n=c,s=N;c=a=e,ye(e,e.value,s),c=n,a=t}function ye(e,t,n){let s;try{s=e.fn(t)}catch(i){return e.pure&&(e.state=v,e.owned&&e.owned.forEach(M),e.owned=null),e.updatedAt=n+1,ie(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?ee(e,s):e.value=s,e.updatedAt=n)}function te(e,t,n,s=v,i){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:a,context:null,pure:n};return a===null||a!==Y&&(a.owned?a.owned.push(l):a.owned=[l]),l}function _(e){if(e.state===0)return;if(e.state===C)return L(e);if(e.suspense&&m(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<N);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===v)T(e);else if(e.state===C){const s=d;d=null,E(()=>L(e,t[0]),!1),d=s}}function E(e,t){if(d)return e();let n=!1;t||(d=[]),w?n=!0:w=[],N++;try{const s=e();return ve(n),s}catch(s){n||(w=null),d=null,ie(s)}}function ve(e){if(d&&(ne(d),d=null),e)return;const t=w;w=null,t.length&&E(()=>Q(t),!1)}function ne(e){for(let t=0;t<e.length;t++)_(e[t])}function me(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:_(s)}for(t=0;t<n;t++)_(e[t])}function L(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];if(s.sources){const i=s.state;i===v?s!==t&&(!s.updatedAt||s.updatedAt<N)&&_(s):i===C&&L(s,t)}}}function se(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=C,n.pure?d.push(n):w.push(n),n.observers&&se(n))}}function M(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const l=i.pop(),r=n.observerSlots.pop();s<i.length&&(l.sourceSlots[r]=s,i[s]=l,n.observerSlots[s]=r)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)M(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function ie(e){throw e}function z(e,t){return m(()=>e(t||{}))}function Se(e,t,n){let s=n.length,i=t.length,l=s,r=0,o=0,f=t[i-1].nextSibling,u=null;for(;r<i||o<l;){if(t[r]===n[o]){r++,o++;continue}for(;t[i-1]===n[l-1];)i--,l--;if(i===r){const h=l<s?o?n[o-1].nextSibling:n[l-o]:f;for(;o<l;)e.insertBefore(n[o++],h)}else if(l===o)for(;r<i;)(!u||!u.has(t[r]))&&t[r].remove(),r++;else if(t[r]===n[l-1]&&n[o]===t[i-1]){const h=t[--i].nextSibling;e.insertBefore(n[o++],t[r++].nextSibling),e.insertBefore(n[--l],h),t[i]=n[l]}else{if(!u){u=new Map;let g=o;for(;g<l;)u.set(n[g],g++)}const h=u.get(t[r]);if(h!=null)if(o<h&&h<l){let g=r,p=1,b;for(;++g<i&&g<l&&!((b=u.get(t[g]))==null||b!==h+p);)p++;if(p>h-o){const S=t[r];for(;o<h;)e.insertBefore(n[o++],S)}else e.replaceChild(n[o++],t[r++])}else r++;else t[r++].remove()}}}const U="_$DX_DELEGATE";function xe(e,t,n,s={}){let i;return de(l=>{i=l,t===document?e():y(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function le(e,t,n){let s;const i=()=>{const r=document.createElement("template");return r.innerHTML=e,n?r.content.firstChild.firstChild:r.content.firstChild},l=t?()=>(s||(s=i())).cloneNode(!0):()=>m(()=>document.importNode(s||(s=i()),!0));return l.cloneNode=l,l}function Ae(e,t=window.document){const n=t[U]||(t[U]=new Set);for(let s=0,i=e.length;s<i;s++){const l=e[s];n.has(l)||(n.add(l),t.addEventListener(l,Ee))}}function F(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function $e(e,t,n){return m(()=>e(t,n))}function y(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return O(e,t,s,n);$(i=>O(e,t(),i,n),s)}function Ee(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s.call(n,i,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function O(e,t,n,s,i){for(;typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,r=s!==void 0;if(e=r&&n[0]&&n[0].parentNode||e,l==="string"||l==="number")if(l==="number"&&(t=t.toString()),r){let o=n[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),n=A(e,n,s,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||l==="boolean")n=A(e,n,s);else{if(l==="function")return $(()=>{let o=t();for(;typeof o=="function";)o=o();n=O(e,o,n,s)}),()=>n;if(Array.isArray(t)){const o=[],f=n&&Array.isArray(n);if(W(o,t,n,i))return $(()=>n=O(e,o,n,s,!0)),()=>n;if(o.length===0){if(n=A(e,n,s),r)return n}else f?n.length===0?H(e,o,s):Se(e,n,o):(n&&A(e),H(e,o));n=o}else if(t instanceof Node){if(Array.isArray(n)){if(r)return n=A(e,n,s,t);A(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function W(e,t,n,s){let i=!1;for(let l=0,r=t.length;l<r;l++){let o=t[l],f=n&&n[l];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))i=W(e,o,f)||i;else if(typeof o=="function")if(s){for(;typeof o=="function";)o=o();i=W(e,Array.isArray(o)?o:[o],Array.isArray(f)?f:[f])||i}else e.push(o),i=!0;else{const u=String(o);f&&f.nodeType===3?(f.data=u,e.push(f)):e.push(document.createTextNode(u))}}return i}function H(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function A(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let l=!1;for(let r=t.length-1;r>=0;r--){const o=t[r];if(i!==o){const f=o.parentNode===e;!l&&!r?f?e.replaceChild(i,o):e.insertBefore(i,n):f&&o.remove()}else l=!0}}else e.insertBefore(i,n);return[i]}function Ce(e){return e!==null&&(typeof e=="object"||typeof e=="function")}var _e=e=>typeof e=="function"&&!e.length?e():e,K=e=>Array.isArray(e)?e:[e];function G(e,...t){return typeof e=="function"?e(...t):e}var Le=k;function oe(e){const t={...e},n={...e},s=new Map,i=o=>{const f=s.get(o);if(f)return f[0]();const u=B(t[o],{internal:!0});return s.set(o,u),delete t[o],u[0]()},l=(o,f)=>{const u=s.get(o);if(u)return u[1](f);o in t&&(t[o]=G(f,[t[o]]))};for(const o in e)Object.defineProperty(n,o,{get:i.bind(void 0,o)});return[n,(o,f)=>{if(Ce(o)){const u=m(()=>Object.entries(G(o,n)));ge(()=>{for(const[h,g]of u)l(h,()=>g)})}else l(o,f);return n}]}function Oe(e,t){return oe(t())}function Ne(e,t,n,s){const i=e.length,l=t.length;let r=0;if(!l){for(;r<i;r++)n(e[r]);return}if(!i){for(;r<l;r++)s(t[r]);return}for(;r<l&&t[r]===e[r];r++);let o,f;t=t.slice(r),e=e.slice(r);for(o of t)e.includes(o)||s(o);for(f of e)t.includes(f)||n(f)}function Te(e,t,n,s){return e.addEventListener(t,n,s),Le(e.removeEventListener.bind(e,t,n,s))}function Me(e,t){const n=new ResizeObserver(e);return k(n.disconnect.bind(n)),{observe:s=>n.observe(s,t),unobserve:n.unobserve.bind(n)}}function Pe(e,t,n){const s=new WeakMap,{observe:i,unobserve:l}=Me(r,n);function r(f){for(const u of f){const{contentRect:h,target:g}=u,p=Math.round(h.width),b=Math.round(h.height),S=s.get(g);(!S||S.width!==p||S.height!==b)&&(t(h,u.target,u),s.set(g,{width:p,height:b}))}}let o;if(typeof e=="function")o=()=>K(e()).slice();else if(Array.isArray(e)&&he in e)o=()=>(e[ae],e.slice());else{K(e).forEach(i);return}J(pe(o,(f,u=[])=>Ne(f,u,i,l)))}const Be={width:0,height:0};function X(){return{width:window.innerWidth,height:window.innerHeight}}function ze(){const[e,t]=Oe(Be,X);return Te(window,"resize",()=>t(X())),e}const re={width:null,height:null};function Z(e){if(!e)return{...re};const{width:t,height:n}=e.getBoundingClientRect();return{width:t,height:n}}function We(e){const t=typeof e=="function",n=t||ue.context,[s,i]=oe(n?re:Z(e));return n&&be(()=>i(Z(_e(e)))),Pe(t?()=>e()||[]:e,l=>i({width:l.width,height:l.height})),s}const Ie=le('<div class="flex flex-col"><label class="mb-1">:</label><input type="range" min="10" max="400" step="10">'),Re=le('<div class="box-border flex min-h-screen w-full flex-col items-center justify-center space-y-4 bg-gray-800 p-24 text-white"><div class="center-child min-h-82"><div class="shadow-bg-gray-900 center-child h-24 w-24 rounded-md bg-orange-500 shadow-lg">px x <!>px</div></div><div class="wrapper-h"></div><div class="fixed bottom-4 right-4">window: <!>px x <!>px'),q=e=>(()=>{const t=Ie(),n=t.firstChild,s=n.firstChild,i=n.nextSibling;return y(n,()=>e.name,s),i.$$input=l=>e.setValue(+l.currentTarget.value),$(l=>{const r=e.name,o=e.name;return r!==l._v$&&F(n,"for",l._v$=r),o!==l._v$2&&F(i,"name",l._v$2=o),l},{_v$:void 0,_v$2:void 0}),$(()=>i.value=e.value),t})(),je=()=>{const[e,t]=B(200),[n,s]=B(200);let i;const l=ze(),r=We(()=>i);return(()=>{const o=Re(),f=o.firstChild,u=f.firstChild,h=u.firstChild,g=h.nextSibling;g.nextSibling;const p=f.nextSibling,b=p.nextSibling,S=b.firstChild,I=S.nextSibling,fe=I.nextSibling,R=fe.nextSibling;return R.nextSibling,$e(x=>i=x,u),y(u,()=>Math.round(r.width??0),h),y(u,()=>Math.round(r.height??0),g),y(p,z(q,{name:"width",get value(){return e()},setValue:t}),null),y(p,z(q,{name:"height",get value(){return n()},setValue:s}),null),y(b,()=>Math.round(l.width),I),y(b,()=>Math.round(l.height),R),$(x=>{const j=`${e()}px`,D=`${n()}px`;return j!==x._v$3&&u.style.setProperty("width",x._v$3=j),D!==x._v$4&&u.style.setProperty("height",x._v$4=D),x},{_v$3:void 0,_v$4:void 0}),o})()};xe(()=>z(je,{}),document.getElementById("root"));Ae(["input"]);
