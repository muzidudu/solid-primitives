(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=s(i);fetch(i.href,o)}})();let z=R;const A=1,b=2,U={owned:null,cleanups:null,context:null,owner:null};var p=null;let P=null,h=null,u=null,m=null,C=0;function k(e,t){const s=h,n=p,i=e.length===0,o=i?U:{owned:null,cleanups:null,context:null,owner:t===void 0?n:t},r=i?e:()=>e(()=>S(()=>N(o)));p=o,h=null;try{return E(r,!0)}finally{h=s,p=n}}function v(e,t,s){const n=se(e,t,!1,A);j(n)}function S(e){if(h===null)return e();const t=h;h=null;try{return e()}finally{h=t}}function ee(e,t,s){let n=e.value;return(!e.comparator||!e.comparator(n,t))&&(e.value=t,e.observers&&e.observers.length&&E(()=>{for(let i=0;i<e.observers.length;i+=1){const o=e.observers[i],r=P&&P.running;r&&P.disposed.has(o),(r?!o.tState:!o.state)&&(o.pure?u.push(o):m.push(o),o.observers&&D(o)),r||(o.state=A)}if(u.length>1e6)throw u=[],new Error},!1)),t}function j(e){if(!e.fn)return;N(e);const t=p,s=h,n=C;h=p=e,te(e,e.value,n),h=s,p=t}function te(e,t,s){let n;try{n=e.fn(t)}catch(i){return e.pure&&(e.state=A,e.owned&&e.owned.forEach(N),e.owned=null),e.updatedAt=s+1,G(i)}(!e.updatedAt||e.updatedAt<=s)&&(e.updatedAt!=null&&"observers"in e?ee(e,n):e.value=n,e.updatedAt=s)}function se(e,t,s,n=A,i){const o={fn:e,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:p,context:null,pure:s};return p===null||p!==U&&(p.owned?p.owned.push(o):p.owned=[o]),o}function F(e){if(e.state===0)return;if(e.state===b)return O(e);if(e.suspense&&S(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<C);)e.state&&t.push(e);for(let s=t.length-1;s>=0;s--)if(e=t[s],e.state===A)j(e);else if(e.state===b){const n=u;u=null,E(()=>O(e,t[0]),!1),u=n}}function E(e,t){if(u)return e();let s=!1;t||(u=[]),m?s=!0:m=[],C++;try{const n=e();return ie(s),n}catch(n){s||(m=null),u=null,G(n)}}function ie(e){if(u&&(R(u),u=null),e)return;const t=m;m=null,t.length&&E(()=>z(t),!1)}function R(e){for(let t=0;t<e.length;t++)F(e[t])}function O(e,t){e.state=0;for(let s=0;s<e.sources.length;s+=1){const n=e.sources[s];if(n.sources){const i=n.state;i===A?n!==t&&(!n.updatedAt||n.updatedAt<C)&&F(n):i===b&&O(n,t)}}}function D(e){for(let t=0;t<e.observers.length;t+=1){const s=e.observers[t];s.state||(s.state=b,s.pure?u.push(s):m.push(s),s.observers&&D(s))}}function N(e){let t;if(e.sources)for(;e.sources.length;){const s=e.sources.pop(),n=e.sourceSlots.pop(),i=s.observers;if(i&&i.length){const o=i.pop(),r=s.observerSlots.pop();n<i.length&&(o.sourceSlots[r]=n,i[n]=o,s.observerSlots[n]=r)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)N(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function G(e){throw e}function ne(e,t){return S(()=>e(t||{}))}function oe(e,t,s){let n=s.length,i=t.length,o=n,r=0,l=0,c=t[i-1].nextSibling,a=null;for(;r<i||l<o;){if(t[r]===s[l]){r++,l++;continue}for(;t[i-1]===s[o-1];)i--,o--;if(i===r){const d=o<n?l?s[l-1].nextSibling:s[o-l]:c;for(;l<o;)e.insertBefore(s[l++],d)}else if(o===l)for(;r<i;)(!a||!a.has(t[r]))&&t[r].remove(),r++;else if(t[r]===s[o-1]&&s[l]===t[i-1]){const d=t[--i].nextSibling;e.insertBefore(s[l++],t[r++].nextSibling),e.insertBefore(s[--o],d),t[i]=s[o]}else{if(!a){a=new Map;let w=l;for(;w<o;)a.set(s[w],w++)}const d=a.get(t[r]);if(d!=null)if(l<d&&d<o){let w=r,T=1,B;for(;++w<i&&w<o&&!((B=a.get(t[w]))==null||B!==d+T);)T++;if(T>d-l){const Z=t[r];for(;l<d;)e.insertBefore(s[l++],Z)}else e.replaceChild(s[l++],t[r++])}else r++;else t[r++].remove()}}}function le(e,t,s,n={}){let i;return k(o=>{i=o,t===document?e():_(t,e(),t.firstChild?null:void 0,s)},n.owner),()=>{i(),t.textContent=""}}function W(e,t,s){let n;const i=()=>{const r=document.createElement("template");return r.innerHTML=e,s?r.content.firstChild.firstChild:r.content.firstChild},o=t?()=>(n||(n=i())).cloneNode(!0):()=>S(()=>document.importNode(n||(n=i()),!0));return o.cloneNode=o,o}function _(e,t,s,n){if(s!==void 0&&!n&&(n=[]),typeof t!="function")return x(e,t,n,s);v(i=>x(e,t(),i,s),n)}function x(e,t,s,n,i){for(;typeof s=="function";)s=s();if(t===s)return s;const o=typeof t,r=n!==void 0;if(e=r&&s[0]&&s[0].parentNode||e,o==="string"||o==="number")if(o==="number"&&(t=t.toString()),r){let l=s[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),s=y(e,s,n,l)}else s!==""&&typeof s=="string"?s=e.firstChild.data=t:s=e.textContent=t;else if(t==null||o==="boolean")s=y(e,s,n);else{if(o==="function")return v(()=>{let l=t();for(;typeof l=="function";)l=l();s=x(e,l,s,n)}),()=>s;if(Array.isArray(t)){const l=[],c=s&&Array.isArray(s);if(L(l,t,s,i))return v(()=>s=x(e,l,s,n,!0)),()=>s;if(l.length===0){if(s=y(e,s,n),r)return s}else c?s.length===0?$(e,l,n):oe(e,s,l):(s&&y(e),$(e,l));s=l}else if(t instanceof Node){if(Array.isArray(s)){if(r)return s=y(e,s,n,t);y(e,s,null,t)}else s==null||s===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);s=t}else console.warn("Unrecognized value. Skipped inserting",t)}return s}function L(e,t,s,n){let i=!1;for(let o=0,r=t.length;o<r;o++){let l=t[o],c=s&&s[o];if(l instanceof Node)e.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))i=L(e,l,c)||i;else if(typeof l=="function")if(n){for(;typeof l=="function";)l=l();i=L(e,Array.isArray(l)?l:[l],Array.isArray(c)?c:[c])||i}else e.push(l),i=!0;else{const a=String(l);c&&c.nodeType===3?(c.data=a,e.push(c)):e.push(document.createTextNode(a))}}return i}function $(e,t,s=null){for(let n=0,i=t.length;n<i;n++)e.insertBefore(t[n],s)}function y(e,t,s,n){if(s===void 0)return e.textContent="";const i=n||document.createTextNode("");if(t.length){let o=!1;for(let r=t.length-1;r>=0;r--){const l=t[r];if(i!==l){const c=l.parentNode===e;!o&&!r?c?e.replaceChild(i,l):e.insertBefore(i,s):c&&l.remove()}else o=!0}}else e.insertBefore(i,s);return[i]}const g=window,I=g.navigator,f=I.userAgent,re=/Android/.test(f),fe=/(win32|win64|windows|wince)/i.test(f),H=/(macintosh|macintel|macppc|mac68k|macos)/i.test(f),K=/iphone/i.test(f),q=/ipad/i.test(f)&&I.maxTouchPoints>1,Q=/ipod/i.test(f),V=K||q||Q,ce=V||H,ue=/Mobi/.test(f),pe=/^(?!.*Seamonkey)(?=.*Firefox).*/i.test(f),J=!!g.opr&&!!g.opr.addons||!!g.opera||/ OPR\//.test(f),ae=/constructor/i.test(g.HTMLElement)||g.safari?.pushNotification+""=="[object SafariRemoteNotification]",de=!!g.document.documentMode,M=!!g.chrome,X=/Edg/.test(f)&&M,he=M&&I.vendor==="Google Inc."&&!J&&!X,ge=/Gecko\/[0-9.]+/.test(f),Y=/Chrome\/[0-9.]+/.test(f),we=/AppleWebKit\/[0-9.]+/.test(f)&&!Y,me=/Opera\/[0-9.]+/.test(f),ye=/Trident\/[0-9.]+/.test(f),Ae=/Edge\/[0-9.]+/.test(f),be=Object.freeze(Object.defineProperty({__proto__:null,isAndroid:re,isAppleDevice:ce,isBlink:Y,isChrome:he,isChromium:M,isEdge:X,isEdgeHTML:Ae,isFirefox:pe,isGecko:ge,isIE:de,isIOS:V,isIPad:q,isIPhone:K,isIPod:Q,isMac:H,isMobile:ue,isOpera:J,isPresto:me,isSafari:ae,isTrident:ye,isWebKit:we,isWindows:fe},Symbol.toStringTag,{value:"Module"})),xe=W('<div class="box-border flex min-h-screen w-full flex-col items-center justify-center space-y-4 bg-gray-800 p-24 text-white"><div class="wrapper-v"><h4>Platform:</h4><ul>'),Ce=W("<li><h5>"),Se=()=>(()=>{const e=xe(),t=e.firstChild,s=t.firstChild,n=s.nextSibling;return _(n,()=>Object.entries(be).map(([i,o])=>(()=>{const r=Ce(),l=r.firstChild;return l.style.setProperty("color",o?"green":"red"),_(l,()=>i.substring(2)),r})())),e})();le(()=>ne(Se,{}),document.getElementById("root"));
