(this["webpackJsonptest-frontend-hv"]=this["webpackJsonptest-frontend-hv"]||[]).push([[0],{13:function(e,a,t){e.exports={ellipsis:"AboutMe_ellipsis__1KwPb",wrapper:"AboutMe_wrapper__3AxcF",profileImg:"AboutMe_profileImg__1D_GE",extLink:"AboutMe_extLink__2qfIn",title:"AboutMe_title__3x2M0"}},14:function(e,a,t){e.exports={ellipsis:"PaginatedCharacterGrid_ellipsis__26OcO",paginator:"PaginatedCharacterGrid_paginator__2aQNy",characters:"PaginatedCharacterGrid_characters__1ArBJ",message:"PaginatedCharacterGrid_message__3vfVt",error:"PaginatedCharacterGrid_error__1rjTq"}},23:function(e,a,t){e.exports={wrapper:"CustomImage_wrapper__32VtU",loadError:"CustomImage_loadError__1f_Nu"}},26:function(e,a,t){e.exports={App:"App_App__15LM-"}},27:function(e,a,t){e.exports={ellipsis:"HeaderMenu_ellipsis__8Kdjz",menu:"HeaderMenu_menu__tAUXR"}},30:function(e,a,t){e.exports={ellipsis:"PaginationManager_ellipsis__23IkY",pagination:"PaginationManager_pagination__1srVm"}},31:function(e,a,t){e.exports={logo:"ReactAnimatedLogo_logo__3QFYv","logo-spin":"ReactAnimatedLogo_logo-spin__QxTN4"}},32:function(e,a,t){e.exports={content:"Home_content__OGPl9"}},50:function(e,a,t){},51:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),r=t(25),s=t.n(r),i=t(9),o=t(3),l=t(26),p=t.n(l),d=t(10),j=t(33),m="https://rickandmortyapi.com/api/character",b="lastCharacters",h=function(){return JSON.parse(localStorage.getItem(b)||"{}")},g=function(e,a){return localStorage.setItem(b,JSON.stringify(Object(j.a)({response:e},{pageNumber:a})))},u=function(e){var a=h(),t=a.response,n=a.pageNumber;return t&&n===e?new Promise((function(e,a){return e(t)})):fetch("".concat(m,"?page=").concat(e)).then((function(e){return e.json()})).then((function(a){return g(a,e),a}))},_=h,x=t(27),O=t.n(x),f=t(0),v=function(e){var a=e.activePage,t=Object(n.useState)(1),c=Object(d.a)(t,2),r=c[0],s=c[1];return Object(n.useEffect)((function(){var e;s((null===(e=_())||void 0===e?void 0:e.pageNumber)||1)}),[a]),Object(f.jsxs)("header",{className:O.a.menu,"data-testid":"menu",children:[Object(f.jsx)(i.b,{to:"/",className:a?"":"disabled",children:"Home"}),Object(f.jsx)(i.b,{to:r&&r>1?"/characters?page=".concat(r):"/characters",className:"characters"===a?"disabled":"",children:"Characters"})]})},N=t(22),C=t.n(N),w=t(29),P=t(15),I=t(11),k=t(23),L=t.n(k),S=function(e){var a=e.img,t=e.altText,c=e.className,r=void 0===c?"":c,s=Object(n.useState)(""),i=Object(d.a)(s,2),o=i[0],l=i[1];return Object(f.jsx)("div",{className:"".concat(L.a.wrapper," ").concat(r," ").concat(o),children:Object(f.jsx)("img",{src:a,alt:t,onError:function(e){l(L.a.loadError)}})})},A=t(7),E=t.n(A),M=function(e){var a=e.character;return Object(f.jsxs)("div",{className:E.a.wrapper,onClick:function(){return console.log(a)},children:[Object(f.jsxs)("div",{className:E.a.header,children:[Object(f.jsx)(S,{img:a.image,altText:a.name,className:E.a.headerImg}),Object(f.jsxs)("div",{className:"".concat(E.a["personal-info"]," ").concat(E.a.ellipsis),children:[Object(f.jsx)("span",{className:"".concat(E.a.name," ").concat(E.a.ellipsis),children:a.name}),Object(f.jsx)("a",{className:"".concat(E.a.location," ").concat(E.a.ellipsis),href:a.location.url,children:a.location.name})]})]}),Object(f.jsx)(S,{img:a.image,altText:a.name,className:E.a.mainImg}),Object(f.jsx)("div",{className:E.a.tags,children:["status","species","type","gender"].map((function(e,t){var n=a[e];return"unknown"!==n&&""!==n?Object(f.jsx)("span",{"data-testid":"".concat(a.id,"-tag-").concat(e),children:"#".concat(n)},"".concat(a.id,"-tag-").concat(e)):null}))}),Object(f.jsxs)("span",{className:E.a.date,children:["CREATED ",new Date(a.created).toLocaleDateString()]})]})},F=t(30),T=t.n(F),y=function(e){var a=e.endpoint,t=e.pageNumber,n=e.prev,c=e.next,r=e.lastPage;return Object(f.jsxs)("div",{className:T.a.pagination,children:[Object(f.jsx)(i.b,{to:"".concat(a),className:n?"":"disabled","data-testid":"first-page",children:"First"}),Object(f.jsx)(i.b,{to:"".concat(a,"?page=").concat(t-1),className:n?"":"disabled","data-testid":"prev-page",children:Object(f.jsx)(I.a,{icon:P.a})}),Object(f.jsxs)("span",{children:["Page ",t]}),Object(f.jsx)(i.b,{to:"".concat(a,"?page=").concat(t+1),className:c?"":"disabled","data-testid":"next-page",children:Object(f.jsx)(I.a,{icon:P.b})}),Object(f.jsx)(i.b,{to:"".concat(a,"?page=").concat(r),className:c?"":"disabled","data-testid":"last-page",children:"Last"})]})},G=t(14),D=t.n(G),J=function(){var e=Object(n.useState)([]),a=Object(d.a)(e,2),t=a[0],r=a[1],s=Object(n.useState)({}),i=Object(d.a)(s,2),l=i[0],p=i[1],j=Object(n.useState)(!0),m=Object(d.a)(j,2),b=m[0],h=m[1],g=Object(n.useState)(""),_=Object(d.a)(g,2),x=_[0],O=_[1],v=new URLSearchParams(Object(o.f)().search),N=parseInt("".concat(v.get("page")))||1;return Object(n.useEffect)((function(){h(!0),O(""),function(){var e=Object(w.a)(C.a.mark((function e(){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u(N);case 3:a=e.sent,h(!1),r(a.results),p(a.info),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),e.t0?O("".concat(e.t0)):O("Something has gone wrong :(");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}()()}),[N]),Object(f.jsx)(c.a.Fragment,{children:x?Object(f.jsxs)("div",{className:"".concat(D.a.message," ").concat(D.a.error),children:[Object(f.jsx)(I.a,{icon:P.c}),Object(f.jsx)("span",{children:x})]}):Object(f.jsxs)("div",{className:D.a.paginator,"data-testid":"paginated-grid",children:[Object(f.jsx)(y,{endpoint:"/characters",pageNumber:N,prev:l.prev,next:l.next,lastPage:l.pages}),Object(f.jsx)("div",{className:D.a.characters,children:b?Object(f.jsx)("div",{className:D.a.message,children:"Loading..."}):t.map((function(e){return Object(f.jsx)(M,{character:e,"data-testid":"character-".concat(e.id)},e.id)}))}),Object(f.jsx)(y,{endpoint:"/characters",pageNumber:N,prev:l.prev,next:l.next,lastPage:l.pages})]})})},H=function(){return Object(f.jsxs)(c.a.Fragment,{children:[Object(f.jsx)(v,{activePage:"characters"}),Object(f.jsx)(J,{})]})},R=t(24),B=t(13),K=t.n(B);var Q=function(){return Object(f.jsxs)("div",{className:K.a.wrapper,children:[Object(f.jsx)(S,{img:"https://bit.ly/3dWvrIK",altText:"my photo",className:K.a.profileImg}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{className:"".concat(K.a.extLink," ").concat(K.a.title),children:"Javier Picatoste Zangr\xf3niz"}),Object(f.jsxs)("span",{className:K.a.extLink,children:[Object(f.jsx)(I.a,{icon:R.b}),Object(f.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/in/javier-picatoste/",rel:"noreferrer",children:"Linkedin"})]}),Object(f.jsxs)("span",{className:K.a.extLink,children:[Object(f.jsx)(I.a,{icon:R.a}),Object(f.jsx)("a",{target:"_blank",href:"https://github.com/jpicatos/test-frontend-hv",rel:"noreferrer",children:"This proyect code"})]})]})]})},U=t.p+"static/media/logo.6ce24c58.svg",V=t(31),Y=t.n(V),q=function(){return Object(f.jsx)("img",{src:U,className:Y.a.logo,alt:"logo","data-testid":"logo"})},z=t(32),X=t.n(z),W=function(){return Object(f.jsxs)(c.a.Fragment,{children:[Object(f.jsx)(v,{}),Object(f.jsxs)("div",{className:X.a.content,children:[Object(f.jsx)(Q,{}),Object(f.jsx)(q,{})]})]})},Z=function(){return Object(f.jsx)("div",{className:p.a.App,children:Object(f.jsx)(i.a,{basename:"/test-frontend-hv",children:Object(f.jsxs)(o.c,{children:[Object(f.jsx)(o.a,{exact:!0,path:"/",component:W}),Object(f.jsx)(o.a,{path:"/characters",component:H})]})})})},$=(t(50),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,52)).then((function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,r=a.getLCP,s=a.getTTFB;t(e),n(e),c(e),r(e),s(e)}))});s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(Z,{})}),document.getElementById("root")),$(console.log)},7:function(e,a,t){e.exports={ellipsis:"CharacterComponent_ellipsis__3kCtY",wrapper:"CharacterComponent_wrapper__230ul",header:"CharacterComponent_header__6Ci5F",headerImg:"CharacterComponent_headerImg__3moam","personal-info":"CharacterComponent_personal-info__1LbvX",name:"CharacterComponent_name__21aIu",location:"CharacterComponent_location__1H3PO",mainImg:"CharacterComponent_mainImg__2T7Si",tags:"CharacterComponent_tags__1OEDG",date:"CharacterComponent_date__1Elkf"}}},[[51,1,2]]]);
//# sourceMappingURL=main.f94c7a78.chunk.js.map