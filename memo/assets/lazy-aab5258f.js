import{c as l,a as p,i as c,b as r,S as i,d as h,t as s,e as _}from"./index-95ee88da.js";import{c as g}from"./index-27744b85.js";const d=s('<div class="select-none bg-orange-200 p-4 text-gray-800">in component: '),C=s('<button class="btn">component: '),b=s('<button class="btn">effect: '),w=s('<button class="btn">increase'),S=s("<p>count: <!>;"),E=s("<p>calc ran times: "),k=s("<p>count in effect: "),[f,x]=l(0),[F,O]=l(0),[y,v]=l(0),a=p(()=>g(()=>(O(e=>e+1),f()))),z=()=>(()=>{const e=d();return e.firstChild,c(e,a,null),e})(),L=()=>(_(()=>{console.log("in effect",a()),v(a())}),[]),T=()=>{const[e,m]=l(!1),[o,$]=l(!1);return[(()=>{const t=C();return t.firstChild,t.$$click=()=>m(n=>!n),c(t,()=>e()?"ON":"OFF",null),t})(),(()=>{const t=b();return t.firstChild,t.$$click=()=>$(n=>!n),c(t,()=>o()?"ON":"OFF",null),t})(),(()=>{const t=w();return t.$$click=()=>x(n=>n+1),t})(),(()=>{const t=S(),n=t.firstChild,u=n.nextSibling;return u.nextSibling,c(t,f,u),t})(),(()=>{const t=E();return t.firstChild,c(t,F,null),t})(),r(i,{get when(){return e()},get children(){return r(z,{})}}),r(i,{get when(){return o()},get children(){const t=k();return t.firstChild,c(t,y,null),t}}),r(i,{get when(){return o()},get children(){return r(L,{})}})]};h(["click"]);export{T as default};
