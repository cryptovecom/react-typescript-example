(this["webpackJsonptypescript-react-boilerplate"]=this["webpackJsonptypescript-react-boilerplate"]||[]).push([[15],{101:function(e,t,n){"use strict";n.d(t,"a",(function(){return R}));var c=n(1),a=n(0),r=n(111),s=n(21),i=n(253),o=n(181),u=i.a.SubMenu,l=i.a.ItemGroup,d=o.a.useBreakpoint,j=function(){var e=d().md;return Object(c.jsxs)(i.a,{mode:e?"horizontal":"inline",children:[Object(c.jsx)(i.a.Item,{children:Object(c.jsx)(s.c,{className:"navbar-item",to:"/",children:"Home"})},"key-home"),Object(c.jsxs)(u,{title:"Services",children:[Object(c.jsxs)(l,{title:"Features",children:[Object(c.jsx)(i.a.Item,{children:Object(c.jsx)(s.c,{to:"/feature1",children:"Option 1"})},"setting:1"),Object(c.jsx)(i.a.Item,{children:Object(c.jsx)(s.c,{to:"/feature2",children:"Option 2"})},"setting:2")]}),Object(c.jsxs)(l,{title:"Demo",children:[Object(c.jsx)(i.a.Item,{children:Object(c.jsx)(s.c,{to:"/demo1",children:"Option 1"})},"setting:3"),Object(c.jsx)(i.a.Item,{children:Object(c.jsx)(s.c,{to:"/demo2",children:"Option 2"})},"setting:4")]})]},"sub1"),Object(c.jsx)(i.a.Item,{children:Object(c.jsx)(s.c,{className:"navbar-item",to:"/about",children:"About"})},"key-about"),Object(c.jsx)(i.a.Item,{children:Object(c.jsx)(s.c,{className:"navbar-item",to:"/contact",children:"Contact"})},"key-contact")]})},b=n(443),h=n(26),p=n(17),m=n(4),x=o.a.useBreakpoint,O={logout:h.c},v=Object(p.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,user:e.auth.user}}),O)((function(e){var t=e.isAuthenticated,n=e.logout,a=e.user,r=x().md,o=Object(c.jsxs)(i.a,{mode:r?"horizontal":"inline",children:[Object(c.jsx)(i.a.Item,{children:Object(c.jsx)(s.c,{className:"navbar-item primary",to:m.a.LOGIN,children:"Sign In"})},"menukey-login"),Object(c.jsx)(i.a.Item,{children:Object(c.jsx)(s.c,{className:"navbar-item",to:m.a.REGISTER,children:"Register"})},"menukey-signup")]}),u=Object(c.jsxs)(i.a,{mode:r?"horizontal":"inline",children:[Object(c.jsx)(i.a.Item,{children:Object(c.jsxs)(s.c,{className:"navbar-item primary",to:m.a.PROFILE,children:["Hi ",Object(c.jsx)("strong",{children:a.username})]})},"menukey-profile"),Object(c.jsx)(i.a.Item,{children:Object(c.jsx)(s.c,{className:"navbar-item primary",to:m.a.HOME,onClick:function(){return n()},children:Object(c.jsxs)("span",{children:[Object(c.jsx)(b.a,{}),"Log Out"]})})},"menukey-login")]});return Object(c.jsx)(c.Fragment,{children:t?u:o})})),f=n(146),g=n(430),y=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],i=t[1];return Object(c.jsx)("div",{className:"navbar-section",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("nav",{className:"navbar",children:[Object(c.jsx)("div",{className:"navbar-logo",children:Object(c.jsx)(s.c,{to:"/",className:"navbar-item",activeClassName:"is-active",children:"REACT TS"})}),Object(c.jsxs)("div",{className:"navbar-menu",children:[Object(c.jsx)("div",{className:"navbar-left-menu",children:Object(c.jsx)(j,{})}),Object(c.jsx)("div",{className:"navbar-right-menu",children:Object(c.jsx)(v,{})})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)(f.a,{className:"navbar-btnBars",type:"primary",onClick:function(){i(!0)},children:Object(c.jsx)("span",{className:"navbar-btnBars-span"})}),Object(c.jsxs)(g.a,{title:"Drawer navbar",placement:"right",closable:!0,onClose:function(){i(!1)},visible:n,children:[Object(c.jsx)(j,{}),Object(c.jsx)(v,{})]})]})]})})})},N=n(444),k=n(445),w=n(446),I=n(447),T=n(441),A=function(){return Object(c.jsx)("div",{className:"footer",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"footer-inner",children:[Object(c.jsx)("div",{className:"footer-logo",children:Object(c.jsx)("a",{href:"/",children:"REACT TS"})}),Object(c.jsxs)("ul",{className:"footer-socials",children:[Object(c.jsx)("li",{children:Object(c.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/tienduy-nguyen",children:Object(c.jsx)(N.a,{})})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.twitter.com/tienduy_nguyen",children:Object(c.jsx)(k.a,{})})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/",children:Object(c.jsx)(w.a,{})})})]}),Object(c.jsx)("div",{className:"copyright",children:"Copyright \xa9 2020 REACT TS"}),Object(c.jsx)(T.a,{children:Object(c.jsx)("div",{className:"go-top",children:Object(c.jsx)(I.a,{})})})]})})})},P=n(416),C=P.a.Header,S=P.a.Content,_=P.a.Footer,R=function(e){var t=e.children;return Object(c.jsxs)(P.a,{className:"main-layout",children:[Object(c.jsx)(C,{children:Object(c.jsx)(y,{})}),Object(c.jsx)(S,{className:"layout-children",children:t}),Object(c.jsx)(_,{children:Object(c.jsx)(A,{})})]})}},130:function(e,t,n){"use strict";n.d(t,"f",(function(){return v})),n.d(t,"e",(function(){return f})),n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return y})),n.d(t,"c",(function(){return N})),n.d(t,"d",(function(){return k})),n.d(t,"g",(function(){return w}));var c=n(11),a=n(12),r=n.n(a),s=n(19),i=n(23),o=n.n(i),u=n(24),l=n(13),d=function(e){return{type:l.f,payload:e}},j=function(e){return{type:l.e,payload:e}},b=function(e){return{type:l.b,payload:e}},h=function(e){return{type:l.d,payload:e}},p=function(e){return{type:l.h,payload:e}},m=function(e){return{type:l.c,payload:e}},x=function(e){return{type:l.g,payload:e}},O=n(84),v=function(){return function(){var e=Object(s.a)(r.a.mark((function e(t){var n,c,a,s,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.get("".concat(u.a.baseAPIUrl,"/api/products"));case 3:n=e.sent,c=n.data,t(d(c)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),i={msg:null===(a=e.t0.response)||void 0===a?void 0:a.statusText,status:null===(s=e.t0.response)||void 0===s?void 0:s.status},t(x(i));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(n){var c,a,s,i,l;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.get("".concat(u.a.baseAPIUrl,"/api/products/").concat(e));case 3:c=t.sent,a=c.data,n(j(a)),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),l={msg:null===(s=t.t0.response)||void 0===s?void 0:s.statusText,status:null===(i=t.t0.response)||void 0===i?void 0:i.status},n(x(l));case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},g=function(){return function(e){e({type:l.a})}},y=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(n){var a,s,i,l;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,"/images/image-default.jpg",a=Object(c.a)(Object(c.a)({},e),{},{id:Object(O.a)(),image_url:e.image_url||"/images/image-default.jpg"}),t.next=5,o.a.post("".concat(u.a.baseAPIUrl,"/api/products"),a);case 5:n(b(a)),n(v()),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),l={msg:null===(s=t.t0.response)||void 0===s?void 0:s.statusText,status:null===(i=t.t0.response)||void 0===i?void 0:i.status},n(x(l));case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},N=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(n){var c,a,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.delete("".concat(u.a.baseAPIUrl,"/api/products/").concat(e));case 3:n(m(e)),n(v()),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),s={msg:null===(c=t.t0.response)||void 0===c?void 0:c.statusText,status:null===(a=t.t0.response)||void 0===a?void 0:a.status},n(x(s));case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},k=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(n){var c,a,s,i,l;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.get("".concat(u.a.baseAPIUrl,"/api/products/").concat(e));case 3:c=t.sent,a=c.data,n(h(a)),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),l={msg:null===(s=t.t0.response)||void 0===s?void 0:s.statusText,status:null===(i=t.t0.response)||void 0===i?void 0:i.status},n(x(l));case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(n){var c,a,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.put("".concat(u.a.baseAPIUrl,"/api/products/").concat(e.id),e);case 3:n(p(e)),n(v()),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),s={msg:null===(c=t.t0.response)||void 0===c?void 0:c.statusText,status:null===(a=t.t0.response)||void 0===a?void 0:a.status},n(x(s));case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}},190:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var c=n(1),a=n(442),r=n(425),s=n(227),i=n(228),o=n(146),u=n(422),l=n(0),d=n(17),j=n(3),b=n(21),h=n(4),p=n(130),m={getProducts:p.f,clearProduct:p.a},x=Object(d.b)((function(e){return{loading:e.products.loading,products:e.products.products}}),m)((function(e){var t=Object(j.g)(),n=e.products,d=e.getProducts,p=e.clearProduct,m=[{title:"Preview",dataIndex:"image_url",render:function(e,t){return O(e,t)}},{title:"Name",dataIndex:"name",sorter:function(e,t){return e.name.localeCompare(t.name)},sortDirections:["descend","ascend"],render:function(e,t){return x(e,t)}},{title:"Brand",dataIndex:"brand",sorter:function(e,t){return e.brand.localeCompare(t.brand)},defaultSortOrder:"descend"}],x=function(e,t){return Object(c.jsx)(b.b,{to:"".concat(h.a.PRODUCTS,"/").concat(t.id),style:{textTransform:"uppercase"},children:e})},O=function(e,t){if(t.id)return Object(c.jsx)(b.b,{to:"".concat(h.a.PRODUCTS,"/").concat(t.id),children:Object(c.jsx)(r.a,{src:e,alt:"Image_sp",style:{maxWidth:"100px"}})})},v=[{}];return Object(l.useEffect)((function(){d()}),[d]),n.map((function(e,t){0===t?v=[{key:t,id:e.id,name:e.name,brand:e.brand,image_url:e.image_url}]:v.push({key:t,id:e.id,name:e.name,brand:e.brand,image_url:e.image_url})})),Object(c.jsx)("div",{className:"main-body-section",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("div",{className:"block-title",children:Object(c.jsx)("h2",{children:"All Smartphones available"})}),Object(c.jsxs)("div",{className:"product-list",children:[Object(c.jsx)(s.a,{gutter:[40,0],className:"mb-1",children:Object(c.jsx)(i.a,{children:Object(c.jsxs)(o.a,{type:"primary",onClick:function(){p(),t.push(h.a.PRODUCT_NEW)},children:[Object(c.jsx)(a.a,{}),"New product"]})})}),Object(c.jsx)(s.a,{gutter:[40,0],children:Object(c.jsx)(i.a,{span:24,children:Object(c.jsx)(u.a,{columns:m,dataSource:v,rowKey:"id"})})})]})]})})}))},431:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),r=n.n(a),s=n(17),i=n(146),o=n(21),u=n(4),l=function(){return Object(c.jsx)("div",{className:"homepage",children:Object(c.jsx)("div",{className:"home-overlay",children:Object(c.jsx)("div",{className:"container homepage-inner",children:Object(c.jsxs)("div",{className:"home-content",children:[Object(c.jsx)("h1",{children:"React Typescript Template"}),Object(c.jsx)("p",{children:"Please login with account & password below."}),Object(c.jsxs)("p",{className:"home-text-light",children:["Account:",Object(c.jsx)("span",{children:" tester"})]}),Object(c.jsxs)("p",{className:"home-text-light",children:["Password: ",Object(c.jsx)("span",{children:" 123456"})]}),Object(c.jsx)("div",{className:"home-button-wrap",children:Object(c.jsx)(i.a,{type:"primary",size:"large",children:Object(c.jsx)(o.b,{to:u.a.LOGIN,className:"button-login-link",children:"Go To Login Page"})})})]})})})})},d=n(190),j=function(){return Object(c.jsx)(d.a,{})},b=Object(s.b)((function(e){return{loading:e.auth.loading,isAuthenticated:e.auth.isAuthenticated}}),{})((function(e){var t=e.loading,n=e.isAuthenticated;return Object(c.jsx)(c.Fragment,{children:!t&&n?Object(c.jsx)(j,{}):Object(c.jsx)(l,{})})})),h=n(101),p=function(){return Object(c.jsx)(h.a,{children:Object(c.jsx)(b,{})})},m=r.a.memo(p);t.default=m}}]);
//# sourceMappingURL=15.fc221629.chunk.js.map