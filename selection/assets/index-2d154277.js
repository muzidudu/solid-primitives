(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();const ie=(e,t)=>e===t,j={equals:ie};let Q=Y;const S=1,A=2,W={owned:null,cleanups:null,context:null,owner:null};var p=null;let R=null,d=null,h=null,b=null,L=0;function oe(e,t){const n=d,s=p,l=e.length===0,i=l?W:{owned:null,cleanups:null,context:null,owner:t===void 0?s:t},r=l?e:()=>e(()=>_(()=>O(i)));p=i,d=null;try{return x(r,!0)}finally{d=n,p=s}}function N(e,t){t=t?Object.assign({},j,t):j;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=l=>(typeof l=="function"&&(l=l(n.value)),X(n,l));return[ce.bind(n),s]}function B(e,t,n){const s=J(e,t,!1,S);P(s)}function M(e,t,n){Q=ae;const s=J(e,t,!1,S);s.user=!0,b?b.push(s):P(s)}function _(e){if(d===null)return e();const t=d;d=null;try{return e()}finally{d=t}}function re(e){return p===null||(p.cleanups===null?p.cleanups=[e]:p.cleanups.push(e)),e}function ce(){if(this.sources&&this.state)if(this.state===S)P(this);else{const e=h;h=null,x(()=>$(this),!1),h=e}if(d){const e=this.observers?this.observers.length:0;d.sources?(d.sources.push(this),d.sourceSlots.push(e)):(d.sources=[this],d.sourceSlots=[e]),this.observers?(this.observers.push(d),this.observerSlots.push(d.sources.length-1)):(this.observers=[d],this.observerSlots=[d.sources.length-1])}return this.value}function X(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&x(()=>{for(let l=0;l<e.observers.length;l+=1){const i=e.observers[l],r=R&&R.running;r&&R.disposed.has(i),(r?!i.tState:!i.state)&&(i.pure?h.push(i):b.push(i),i.observers&&Z(i)),r||(i.state=S)}if(h.length>1e6)throw h=[],new Error},!1)),t}function P(e){if(!e.fn)return;O(e);const t=p,n=d,s=L;d=p=e,ue(e,e.value,s),d=n,p=t}function ue(e,t,n){let s;try{s=e.fn(t)}catch(l){return e.pure&&(e.state=S,e.owned&&e.owned.forEach(O),e.owned=null),e.updatedAt=n+1,z(l)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?X(e,s):e.value=s,e.updatedAt=n)}function J(e,t,n,s=S,l){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:p,context:null,pure:n};return p===null||p!==W&&(p.owned?p.owned.push(i):p.owned=[i]),i}function C(e){if(e.state===0)return;if(e.state===A)return $(e);if(e.suspense&&_(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<L);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===S)P(e);else if(e.state===A){const s=h;h=null,x(()=>$(e,t[0]),!1),h=s}}function x(e,t){if(h)return e();let n=!1;t||(h=[]),b?n=!0:b=[],L++;try{const s=e();return fe(n),s}catch(s){n||(b=null),h=null,z(s)}}function fe(e){if(h&&(Y(h),h=null),e)return;const t=b;b=null,t.length&&x(()=>Q(t),!1)}function Y(e){for(let t=0;t<e.length;t++)C(e[t])}function ae(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:C(s)}for(t=0;t<n;t++)C(e[t])}function $(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];if(s.sources){const l=s.state;l===S?s!==t&&(!s.updatedAt||s.updatedAt<L)&&C(s):l===A&&$(s,t)}}}function Z(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=A,n.pure?h.push(n):b.push(n),n.observers&&Z(n))}}function O(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),l=n.observers;if(l&&l.length){const i=l.pop(),r=n.observerSlots.pop();s<l.length&&(i.sourceSlots[r]=s,l[s]=i,n.observerSlots[s]=r)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)O(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function z(e){throw e}function de(e,t){return _(()=>e(t||{}))}function pe(e,t,n){let s=n.length,l=t.length,i=s,r=0,o=0,u=t[l-1].nextSibling,c=null;for(;r<l||o<i;){if(t[r]===n[o]){r++,o++;continue}for(;t[l-1]===n[i-1];)l--,i--;if(l===r){const f=i<s?o?n[o-1].nextSibling:n[i-o]:u;for(;o<i;)e.insertBefore(n[o++],f)}else if(i===o)for(;r<l;)(!c||!c.has(t[r]))&&t[r].remove(),r++;else if(t[r]===n[i-1]&&n[o]===t[l-1]){const f=t[--l].nextSibling;e.insertBefore(n[o++],t[r++].nextSibling),e.insertBefore(n[--i],f),t[l]=n[i]}else{if(!c){c=new Map;let a=o;for(;a<i;)c.set(n[a],a++)}const f=c.get(t[r]);if(f!=null)if(o<f&&f<i){let a=r,m=1,g;for(;++a<l&&a<i&&!((g=c.get(t[a]))==null||g!==f+m);)m++;if(m>f-o){const y=t[r];for(;o<f;)e.insertBefore(n[o++],y)}else e.replaceChild(n[o++],t[r++])}else r++;else t[r++].remove()}}}const F="_$DX_DELEGATE";function he(e,t,n,s={}){let l;return oe(i=>{l=i,t===document?e():E(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{l(),t.textContent=""}}function ge(e,t,n){let s;const l=()=>{const r=document.createElement("template");return r.innerHTML=e,n?r.content.firstChild.firstChild:r.content.firstChild},i=t?()=>(s||(s=l())).cloneNode(!0):()=>_(()=>document.importNode(s||(s=l()),!0));return i.cloneNode=i,i}function me(e,t=window.document){const n=t[F]||(t[F]=new Set);for(let s=0,l=e.length;s<l;s++){const i=e[s];n.has(i)||(n.add(i),t.addEventListener(i,be))}}function E(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return T(e,t,s,n);B(l=>T(e,t(),l,n),s)}function be(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const s=n[t];if(s&&!n.disabled){const l=n[`${t}Data`];if(l!==void 0?s.call(n,l,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function T(e,t,n,s,l){for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,r=s!==void 0;if(e=r&&n[0]&&n[0].parentNode||e,i==="string"||i==="number")if(i==="number"&&(t=t.toString()),r){let o=n[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),n=v(e,n,s,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||i==="boolean")n=v(e,n,s);else{if(i==="function")return B(()=>{let o=t();for(;typeof o=="function";)o=o();n=T(e,o,n,s)}),()=>n;if(Array.isArray(t)){const o=[],u=n&&Array.isArray(n);if(H(o,t,n,l))return B(()=>n=T(e,o,n,s,!0)),()=>n;if(o.length===0){if(n=v(e,n,s),r)return n}else u?n.length===0?q(e,o,s):pe(e,n,o):(n&&v(e),q(e,o));n=o}else if(t instanceof Node){if(Array.isArray(n)){if(r)return n=v(e,n,s,t);v(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function H(e,t,n,s){let l=!1;for(let i=0,r=t.length;i<r;i++){let o=t[i],u=n&&n[i];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))l=H(e,o,u)||l;else if(typeof o=="function")if(s){for(;typeof o=="function";)o=o();l=H(e,Array.isArray(o)?o:[o],Array.isArray(u)?u:[u])||l}else e.push(o),l=!0;else{const c=String(o);u&&u.nodeType===3?(u.data=c,e.push(u)):e.push(document.createTextNode(c))}}return l}function q(e,t,n=null){for(let s=0,l=t.length;s<l;s++)e.insertBefore(t[s],n)}function v(e,t,n,s){if(n===void 0)return e.textContent="";const l=s||document.createTextNode("");if(t.length){let i=!1;for(let r=t.length-1;r>=0;r--){const o=t[r];if(l!==o){const u=o.parentNode===e;!i&&!r?u?e.replaceChild(l,o):e.insertBefore(l,n):u&&o.remove()}else i=!0}}else e.insertBefore(l,n);return[l]}const G=e=>{const t=[],n=s=>{s instanceof Text&&t.push(s),s.firstChild&&n(s.firstChild),s.nextSibling&&n(s.nextSibling)};return n(e),t},Se=(e,t)=>e+t.data.length,V=(e,t,n)=>{const s=n.indexOf(e);return s===-1?NaN:n.slice(0,s).reduce(Se,0)+t},k=e=>e===null||e.contentEditable==="true"?e:k(e.parentNode||null),K=(e,t)=>t.reduce(([n,s],l)=>n?[n,s]:s<=l.data.length?[l,s]:[null,s-l.data.length],[null,e]),ye=()=>{const[e,t]=N([null,NaN,NaN]),[n,s]=N([null,NaN,NaN]),l=()=>{const i=document.activeElement;if(i instanceof HTMLInputElement||i instanceof HTMLTextAreaElement)return t([i,i.selectionStart??NaN,i.selectionEnd??NaN]);const r=window.getSelection();if(!r?.rangeCount)return t([null,NaN,NaN]);const o=r.getRangeAt(0),u=k(o.commonAncestorContainer);if(!u)return t([null,NaN,NaN]);const c=G(u),f=V(o.startContainer,o.startOffset,c),a=o.collapsed?f:V(o.endContainer,o.endOffset,c);t([u,f,a])};return l(),M(()=>{document.addEventListener("selectionchange",l),document.addEventListener("click",l),document.addEventListener("keyup",l),re(()=>{document.removeEventListener("selectionchange",l),document.removeEventListener("click",l),document.removeEventListener("keyup",l)})}),M(()=>{const[i,r,o]=n(),u=window.getSelection();if(i===null)u?.rangeCount&&u.removeAllRanges();else if(i instanceof HTMLInputElement||i instanceof HTMLTextAreaElement)document.activeElement!==i&&i.focus(),i.setSelectionRange(r,o);else{u?.removeAllRanges();const c=document.createRange(),f=G(i),[a,m]=K(r,f),[g,y]=r===o?[a,m]:K(o,f);a&&g&&m!==-1&&y!==-1&&(c.setStart(a,m),c.setEnd(g,y),u?.addRange(c))}}),[e,s]};const ve=ge('<div class="box-border flex min-h-screen w-full flex-col items-center justify-center space-y-4 bg-gray-800 p-24 text-white"><div class="wrapper-v items-start"><h4>Selection</h4><input type="text" value="test"><br><textarea>test</textarea><div contenteditable>t<b>e</b><i>s</i>t</div></div><div><h5>Selected:</h5><span> <!>-</div><div><h5>Manipulate selection</h5><select><option value="null">no element</option><option value="input[type=text]">text input</option><option value="textarea">text area</option><option value="div[contenteditable]">contentEditable div</option></select> <input type="number" min="-1" max="4" value="-1">-<input type="number" min="-1" max="4" value="-1"> '),we=()=>{const[e,t]=ye(),[n,s]=N("null"),[l,i]=N(-1),[r,o]=N(-1),u=c=>c===null?"null":c instanceof Text?`[Text: "${c.data}"]`:`<${c.nodeName.toLowerCase()}${Array.from(c.attributes).map(f=>" "+f.name+(f.value===""?"":'="'+f.value+'"')).join("")}>`;return M(()=>{const c=document.querySelector(n()),f=l(),a=r();(f<0||f>4||a<0||a>4)&&t([c,NaN,NaN]),t([c,f,a])}),(()=>{const c=ve(),f=c.firstChild,a=f.nextSibling,m=a.firstChild,g=m.nextSibling,y=g.firstChild,U=y.nextSibling;U.nextSibling;const ee=a.nextSibling,te=ee.firstChild,D=te.nextSibling,ne=D.nextSibling,I=ne.nextSibling,se=I.nextSibling,le=se.nextSibling;return E(g,()=>u(e()[0]),y),E(g,()=>e()[1],U),E(g,()=>e()[2],null),D.addEventListener("change",w=>{s(w.currentTarget.value)}),I.$$input=w=>i(w.currentTarget.valueAsNumber),le.$$input=w=>o(w.currentTarget.valueAsNumber),c})()};he(()=>de(we,{}),document.getElementById("root"));me(["input"]);
