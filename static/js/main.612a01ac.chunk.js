(this["webpackJsonpemployee-directory-react"]=this["webpackJsonpemployee-directory-react"]||[]).push([[0],{127:function(e,t,n){},128:function(e,t,n){},136:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(12),s=n.n(r),l=(n(127),n(128),n(73)),i=n(18),j=n(74),o=n.n(j),b=n(90),u=n(7),h=n(9);function d(e){var t=e.nameSearch,n=e.handleNameChange;e.handleSubmit;return Object(h.jsx)("div",{className:"searchForm",children:Object(h.jsxs)("form",{children:[Object(h.jsx)("label",{for:"employee search",children:"Search for employee: "}),Object(h.jsx)("input",{placeholder:"Employee name",type:"text",value:t,onChange:n})]})})}var O=n(24),m=n(192),f=n(195),x=n(190),p=n(191),g=n(193),v=n(194),y=n(101),N=n(91),S=Object(O.a)({table:{minWidth:650}});function E(){var e=S(),t=Object(c.useState)(""),n=Object(u.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(),j=Object(u.a)(s,2),O=j[0],E=j[1];function C(e){var t=e.split("-"),n=t[0];return[t[1],t[2].split("T")[0],n].join("-")}Object(c.useEffect)((function(){(function(){var e=Object(b.a)(o.a.mark((function e(t){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://randomuser.me/api/?results=100&nat=us",e.prev=1,e.next=4,fetch("https://randomuser.me/api/?results=100&nat=us");case 4:return n=e.sent,e.next=7,n.json();case 7:c=e.sent,console.log(c),E(c.results),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}})()()}),[]),Object(c.useEffect)((function(){var e;(e=console).log.apply(e,["names"].concat(Object(i.a)(O)))}));if(Object(c.useEffect)((function(){console.log(a)})),O)var F=[{field:"name.first",sort:"asc"}];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(d,{handleNameChange:function(e){console.log(e.target.value),r(e.target.value)},nameSearch:a}),Object(h.jsx)("div",{className:"table",children:Object(h.jsxs)(p.a,{component:y.a,children:[Object(h.jsx)(N.a,Object(l.a)(Object(l.a)({},O),{},{sortModel:F})),Object(h.jsxs)(m.a,{className:e.table,"aria-label":"simple table",children:[Object(h.jsx)(g.a,{children:Object(h.jsxs)(v.a,{children:[Object(h.jsx)(x.a,{align:"left",children:"Image"}),Object(h.jsx)(x.a,{align:"left",children:"Name"}),Object(h.jsx)(x.a,{align:"left",children:"Phone"}),Object(h.jsx)(x.a,{align:"left",children:"Email"}),Object(h.jsx)(x.a,{align:"left",children:"DOB"})]})}),Object(h.jsx)(f.a,{children:O?O.map((function(e){return Object(h.jsxs)(v.a,{children:[Object(h.jsx)(x.a,{children:Object(h.jsx)("img",{src:e.picture.thumbnail,alt:"photo for ".concat(e.name.first," ").concat(e.name.last)})}),Object(h.jsxs)(x.a,{children:[e.name.first," ",e.name.last]}),Object(h.jsx)(x.a,{children:e.cell}),Object(h.jsx)(x.a,{children:e.email}),Object(h.jsx)(x.a,{children:C(e.dob.date)})]},e.index)})):""})]})]})})]})}function C(){return Object(h.jsx)("div",{className:"header",children:Object(h.jsx)("h1",{children:"Employee Directory"})})}var F=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(C,{}),Object(h.jsx)(E,{})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,197)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(F,{})}),document.getElementById("root")),k()}},[[136,1,2]]]);
//# sourceMappingURL=main.612a01ac.chunk.js.map