import{d as r,p as i,o as c,c as l,z as u,M as o,a4 as d,a5 as f,a6 as m,a7 as h,a8 as _,a9 as g,aa as A,ab as y,ac as v,ad as w,J as P,u as b,k as C,ae as E,af as R,ag as x,ah as D}from"./chunks/framework.1625126e.js";import{t as T}from"./chunks/theme.b4c06830.js";const k={class:"google-adsense"},B=u("ins",{class:"adsbygoogle",title:"Google Ads",style:{display:"block","text-align":"center"},"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-6765261154701378","data-ad-slot":"6290453552"},null,-1),G=[B],O=r({__name:"GoogleAdsense",setup(e){return i(()=>{const a=window.adsbygoogle;a==null||a.push({})}),(a,t)=>(c(),l("div",k,G))}});const S={...T,enhanceApp({app:e}){e.component("GoogleAdsense",O)}};function p(e){if(e.extends){const a=p(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const n=p(S),V=r({name:"VitePressApp",setup(){const{site:e}=b();return i(()=>{C(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),E(),R(),x(),n.setup&&n.setup(),()=>D(n.Layout)}});async function j(){const e=L(),a=F();a.provide(f,e);const t=m(e.route);return a.provide(h,t),a.component("Content",_),a.component("ClientOnly",g),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),n.enhanceApp&&await n.enhanceApp({app:a,router:e,siteData:A}),{app:a,router:e,data:t}}function F(){return y(V)}function L(){let e=o,a;return v(t=>{let s=w(t);return e&&(a=s),(e||a===s)&&(s=s.replace(/\.js$/,".lean.js")),o&&(e=!1),P(()=>import(s),[])},n.NotFound)}o&&j().then(({app:e,router:a,data:t})=>{a.go().then(()=>{d(a.route,t.site),e.mount("#app")})});export{j as createApp};
