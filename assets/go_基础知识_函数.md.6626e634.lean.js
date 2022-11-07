import{_ as n,c as a,d as l,e as p,o,r as e}from"./app.f2558618.js";const u=JSON.parse('{"title":"Go \u8BED\u8A00\u7B14\u8BB0\uFF1A\u51FD\u6570","description":"Go \u51FD\u6570\u58F0\u660E\uFF0C\u4E3B\u8981\u5305\u542B func \u5173\u952E\u5B57\uFF0C \u8FD4\u56DE\u503C\u7C7B\u578B return_type","frontmatter":{"title":"Go \u8BED\u8A00\u7B14\u8BB0\uFF1A\u51FD\u6570","head":[["meta",{"property":"og:title","content":"Go \u8BED\u8A00\u7B14\u8BB0\uFF1A\u51FD\u6570"}],["meta",{"name":"description","content":"Go \u51FD\u6570\u58F0\u660E\uFF0C\u4E3B\u8981\u5305\u542B func \u5173\u952E\u5B57\uFF0C \u8FD4\u56DE\u503C\u7C7B\u578B return_type"}],["meta",{"name":"keywords","content":"Go,\u51FD\u6570\u5B9A\u4E49,\u51FD\u6570\u8FD4\u56DE\u503C,\u51FD\u6570\u53EF\u53D8\u53C2\u6570,\u51FD\u6570\u4F5C\u7528\u57DF,\u533F\u540D\u51FD\u6570"}],["meta",{"property":"og:description","content":"Go \u51FD\u6570\u58F0\u660E\uFF0C\u4E3B\u8981\u5305\u542B func \u5173\u952E\u5B57\uFF0C \u8FD4\u56DE\u503C\u7C7B\u578B return_type"}],["meta",{"property":"og:url","content":"https://wiki.sanoon.me/go/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E5%87%BD%E6%95%B0"}],["link",{"rel":"canonical","href":"https://wiki.sanoon.me/go/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E5%87%BD%E6%95%B0"}]]},"headers":[{"level":2,"title":"\u51FD\u6570\u5B9A\u4E49","slug":"\u51FD\u6570\u5B9A\u4E49","link":"#\u51FD\u6570\u5B9A\u4E49","children":[]},{"level":2,"title":"Go \u51FD\u6570\u4E0D\u652F\u6301\u91CD\u8F7D","slug":"go-\u51FD\u6570\u4E0D\u652F\u6301\u91CD\u8F7D","link":"#go-\u51FD\u6570\u4E0D\u652F\u6301\u91CD\u8F7D","children":[]},{"level":2,"title":"\u51FD\u6570\u8FD4\u56DE\u503C","slug":"\u51FD\u6570\u8FD4\u56DE\u503C","link":"#\u51FD\u6570\u8FD4\u56DE\u503C","children":[]},{"level":2,"title":"\u51FD\u6570\u8FD4\u56DE\u503C\u7684\u63A5\u6536","slug":"\u51FD\u6570\u8FD4\u56DE\u503C\u7684\u63A5\u6536","link":"#\u51FD\u6570\u8FD4\u56DE\u503C\u7684\u63A5\u6536","children":[]},{"level":2,"title":"\u51FD\u6570\u7C7B\u578B","slug":"\u51FD\u6570\u7C7B\u578B","link":"#\u51FD\u6570\u7C7B\u578B","children":[]},{"level":2,"title":"\u53EF\u53D8\u53C2\u6570","slug":"\u53EF\u53D8\u53C2\u6570","link":"#\u53EF\u53D8\u53C2\u6570","children":[]},{"level":2,"title":"main \u51FD\u6570 \u548C init \u51FD\u6570","slug":"main-\u51FD\u6570-\u548C-init-\u51FD\u6570","link":"#main-\u51FD\u6570-\u548C-init-\u51FD\u6570","children":[]},{"level":2,"title":"\u51FD\u6570\u4F5C\u7528\u57DF","slug":"\u51FD\u6570\u4F5C\u7528\u57DF","link":"#\u51FD\u6570\u4F5C\u7528\u57DF","children":[]},{"level":2,"title":"\u533F\u540D\u51FD\u6570","slug":"\u533F\u540D\u51FD\u6570","link":"#\u533F\u540D\u51FD\u6570","children":[]},{"level":2,"title":"\u95ED\u5305","slug":"\u95ED\u5305","link":"#\u95ED\u5305","children":[]},{"level":2,"title":"\u4E0A\u8FF0\u7684 f := calculate()  \u64CD\u4F5C\uFF0C\u4F1A\u5C06\u51FD\u6570\u53D8\u91CF\u8D4B\u503C\u7ED9\u53D8\u91CF f\uFF0C f \u5C31\u6B64\u6210\u4E3A\u4E86\u4E00\u4E2A\u95ED\u5305\uFF0Cf \u4FDD\u5B58\u7740\u5BF9 x \u7684\u5F15\u7528\uFF0C\u7531\u4E8E f \u6709\u7740\u6307\u5411 x \u7684\u6307\u9488\uFF0C\u56E0\u6B64\u540E\u9762\u91CD\u590D\u8C03\u7528 f \u65F6\uFF0Cf \u6307\u5411 x \u7684\u503C\u8FD8\u662F\u4E0A\u4E00\u6B21\u7684\u7ED3\u679C\uFF0C\u5BFC\u81F4\u4E86 x \u9003\u9038\u4E86\uFF0C\u751F\u547D\u5468\u671F\u6CA1\u6709\u7ED3\u675F\u3002\u800C\u591A\u6B21\u8C03\u7528 calculate()(x) \u65B9\u6CD5\u662F\u5206\u522B\u8FD4\u56DE\u4E86\u4E0D\u540C\u7684\u95ED\u5305\uFF0C\u56E0\u6B64\u51FD\u6570\u4F53\u5185\u7684 x \u4E0D\u4F1A\u5BF9\u4E0B\u4E00\u4E2A\u95ED\u5305\u4EA7\u751F\u5F71\u54CD\uFF0C\u56E0\u4E3A\u4ED6\u4EEC\u662F\u4E0D\u540C\u7684\u95ED\u5305","slug":"\u4E0A\u8FF0\u7684-f-calculate-\u64CD\u4F5C\uFF0C\u4F1A\u5C06\u51FD\u6570\u53D8\u91CF\u8D4B\u503C\u7ED9\u53D8\u91CF-f\uFF0C-f-\u5C31\u6B64\u6210\u4E3A\u4E86\u4E00\u4E2A\u95ED\u5305\uFF0Cf-\u4FDD\u5B58\u7740\u5BF9-x-\u7684\u5F15\u7528\uFF0C\u7531\u4E8E-f-\u6709\u7740\u6307\u5411-x-\u7684\u6307\u9488\uFF0C\u56E0\u6B64\u540E\u9762\u91CD\u590D\u8C03\u7528-f-\u65F6\uFF0Cf-\u6307\u5411-x-\u7684\u503C\u8FD8\u662F\u4E0A\u4E00\u6B21\u7684\u7ED3\u679C\uFF0C\u5BFC\u81F4\u4E86-x-\u9003\u9038\u4E86\uFF0C\u751F\u547D\u5468\u671F\u6CA1\u6709\u7ED3\u675F\u3002\u800C\u591A\u6B21\u8C03\u7528-calculate-x-\u65B9\u6CD5\u662F\u5206\u522B\u8FD4\u56DE\u4E86\u4E0D\u540C\u7684\u95ED\u5305\uFF0C\u56E0\u6B64\u51FD\u6570\u4F53\u5185\u7684-x-\u4E0D\u4F1A\u5BF9\u4E0B\u4E00\u4E2A\u95ED\u5305\u4EA7\u751F\u5F71\u54CD\uFF0C\u56E0\u4E3A\u4ED6\u4EEC\u662F\u4E0D\u540C\u7684\u95ED\u5305","link":"#\u4E0A\u8FF0\u7684-f-calculate-\u64CD\u4F5C\uFF0C\u4F1A\u5C06\u51FD\u6570\u53D8\u91CF\u8D4B\u503C\u7ED9\u53D8\u91CF-f\uFF0C-f-\u5C31\u6B64\u6210\u4E3A\u4E86\u4E00\u4E2A\u95ED\u5305\uFF0Cf-\u4FDD\u5B58\u7740\u5BF9-x-\u7684\u5F15\u7528\uFF0C\u7531\u4E8E-f-\u6709\u7740\u6307\u5411-x-\u7684\u6307\u9488\uFF0C\u56E0\u6B64\u540E\u9762\u91CD\u590D\u8C03\u7528-f-\u65F6\uFF0Cf-\u6307\u5411-x-\u7684\u503C\u8FD8\u662F\u4E0A\u4E00\u6B21\u7684\u7ED3\u679C\uFF0C\u5BFC\u81F4\u4E86-x-\u9003\u9038\u4E86\uFF0C\u751F\u547D\u5468\u671F\u6CA1\u6709\u7ED3\u675F\u3002\u800C\u591A\u6B21\u8C03\u7528-calculate-x-\u65B9\u6CD5\u662F\u5206\u522B\u8FD4\u56DE\u4E86\u4E0D\u540C\u7684\u95ED\u5305\uFF0C\u56E0\u6B64\u51FD\u6570\u4F53\u5185\u7684-x-\u4E0D\u4F1A\u5BF9\u4E0B\u4E00\u4E2A\u95ED\u5305\u4EA7\u751F\u5F71\u54CD\uFF0C\u56E0\u4E3A\u4ED6\u4EEC\u662F\u4E0D\u540C\u7684\u95ED\u5305","children":[]}],"relativePath":"go/\u57FA\u7840\u77E5\u8BC6/\u51FD\u6570.md","lastUpdated":1667810702000}'),c={name:"go/\u57FA\u7840\u77E5\u8BC6/\u51FD\u6570.md"},t=p("",30);function r(D,y,F,A,C,i){const s=e("GoogleAdsense");return o(),a("div",null,[t,l(s)])}const f=n(c,[["render",r]]);export{u as __pageData,f as default};
