(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,a,c){},12:function(e,a,c){"use strict";c.r(a);var t=c(5),n=c.n(t),i=c(4),l=c(1);c(10);function r(e,a){for(var c=[],t=e;t<=a;t+=1)c.push(t);return c}var s=c(2),o=c.n(s),j=c(0),d=function(e){var a=e.total,c=e.itemsPerPage,t=e.currentPage,n=e.onChangePage,i=Math.ceil(a/c),l=r(1,Math.ceil(i));return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("ul",{className:"pagination",children:[Object(j.jsx)("li",{className:o()("page-item",{disabled:1===t}),children:Object(j.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":"true",onClick:function(){1!==t&&n(t-1)},children:"\xab"})}),l.map((function(e){return Object(j.jsx)("li",{className:o()("page-item",{active:e===t}),children:Object(j.jsx)("a",{href:"#1",className:"page-link","data-cy":"pageLink",onClick:function(){e!==t&&n(e)},children:e})},e)})),Object(j.jsx)("li",{className:o()("page-item",{disabled:t===i}),children:Object(j.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":t===i,onClick:function(){t!==i&&n(t+1)},children:"\xbb"})})]})})},h=Object(l.memo)(d),b=r(1,42).map((function(e){return"Item ".concat(e)})),u=function(){var e=Object(l.useState)(1),a=Object(i.a)(e,2),c=a[0],t=a[1],n=Object(l.useState)(5),r=Object(i.a)(n,2),s=r[0],o=r[1],d=(c-1)*s,u=b.length<c*s?b.length:c*s,m=b.slice(d,u);return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Items with Pagination"}),Object(j.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(c," (Items ").concat(d+1," - ").concat(u," of ").concat(b.length,")")}),Object(j.jsxs)("div",{className:"form-group row",children:[Object(j.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(j.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:s,onChange:function(e){o(+e.target.value),t(1)},children:[Object(j.jsx)("option",{value:"3",children:"3"}),Object(j.jsx)("option",{value:"5",children:"5"}),Object(j.jsx)("option",{value:"10",children:"10"}),Object(j.jsx)("option",{value:"20",children:"20"})]})}),Object(j.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"Items per page"})]}),Object(j.jsx)(h,{total:b.length,itemsPerPage:s,currentPage:c,onChangePage:t}),Object(j.jsx)("ul",{children:m.map((function(e){return Object(j.jsx)("li",{children:e},e)}))})]})};n.a.render(Object(j.jsx)(u,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.6f9200a3.chunk.js.map