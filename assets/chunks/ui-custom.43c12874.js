import{e as r,g as i,i as d,r as l,h as _,w as u,o as p,c as f}from"../app.3c5bf8e7.js";const h=r({__name:"VPCarbonAds",setup(m){const{theme:o}=i(),n=o.value.carbonAds,{isAsideEnabled:s}=d(),a=l();let t=!1;function c(){if(!t){t=!0;const e=document.createElement("script");e.id="_carbonads_js",e.src=`//cdn.carbonads.com/carbon.js?serve=${n.code}&placement=${n.placement}`,e.async=!0,a.value.appendChild(e)}}return n&&_(()=>{s.value?c():u(s,e=>e&&c())}),(e,b)=>(p(),f("div",{class:"VPCarbonAds",ref_key:"container",ref:a},null,512))}});export{h as default};
