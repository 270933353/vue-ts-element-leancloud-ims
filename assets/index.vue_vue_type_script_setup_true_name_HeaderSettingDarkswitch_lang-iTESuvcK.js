import{a as i,a1 as p,a2 as y,n as L,o as m,g,w as e,e as a,c as C,h as V,F as B,b as D,M as d,U as N,i as h,E as f,P as S,Q as I,t as M,K as T,O as A,A as F,u as U,B as z,a3 as K}from"./index-vpA-h1lW.js";const O={class:"dropdown"},R=i({__name:"index",setup(v){const n=p(),{t:s}=p(),o=y(),l=L(()=>o.language),r=[{label:"简体中文",value:"zhCn"},{label:"English",value:"en"}],u=t=>{try{n.locale.value=t,o.setLanguage(t),window.location.reload(),d({type:"success",message:s("changeLanguage.success")}),setTimeout(()=>{d({type:"success",message:s("changeLanguage.success")})},5e3)}catch(c){N(()=>{d({type:"error",message:s("changeLanguage.fail")+" "+c})})}};return(t,c)=>{const w=h,k=f,x=A,E=S,b=I;return m(),g(b,{class:"btn",onCommand:u},{dropdown:e(()=>[a(E,null,{default:e(()=>[(m(),C(B,null,V(r,_=>a(x,{key:_.value,command:_.value,disabled:l.value===_.value},{default:e(()=>[T(M(_.label),1)]),_:2},1032,["command","disabled"])),64))]),_:1})]),default:e(()=>[D("div",O,[a(k,null,{default:e(()=>[a(w,{name:"language"})]),_:1})])]),_:1})}}}),P="var(--el-color-black)",j=i({__name:"index",setup(v){let n=F(!1);const s=()=>{let o=document.documentElement;n.value?o.className="dark":o.className=""};return(o,l)=>{const r=h,u=f,t=K;return m(),g(t,{class:"mt-2",modelValue:U(n),"onUpdate:modelValue":l[0]||(l[0]=c=>z(n)?n.value=c:n=c),"inline-prompt":"","active-color":P,onChange:s},{"inactive-action":e(()=>[a(u,null,{default:e(()=>[a(r,{name:"light",style:{"margin-top":"2px"}})]),_:1})]),"active-action":e(()=>[a(u,null,{default:e(()=>[a(r,{name:"dark",style:{"margin-top":"2px"}})]),_:1})]),_:1},8,["modelValue"])}}});export{j as _,R as a};
