(this["webpackJsonpmovie-search-react"]=this["webpackJsonpmovie-search-react"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var a=c(0),r=c(5),n=c(6),s=c(10),i=c(9),l=c(1),o=c.n(l),u=c(7),b=c.n(u),j=(c(16),c(3)),d=c.n(j),h=c(8),m=c(4);function p(e){var t=e.movie;return Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("img",{className:"card--image",src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/".concat(t.poster_path),alt:t.title+" poster"}),Object(a.jsxs)("div",{className:"card--content",children:[Object(a.jsx)("h3",{className:"card--title",children:t.title}),Object(a.jsx)("p",{children:Object(a.jsxs)("small",{children:["RELEASE DATE: ",t.release_date]})}),Object(a.jsx)("p",{children:Object(a.jsxs)("small",{children:["RATING: ",t.vote_average]})}),Object(a.jsx)("p",{className:"card--desc",children:t.overview})]})]})}function v(){var e=Object(l.useState)(""),t=Object(m.a)(e,2),c=t[0],r=t[1],n=Object(l.useState)([]),s=Object(m.a)(n,2),i=s[0],o=s[1],u=function(){var e=Object(h.a)(d.a.mark((function e(t){var a,r,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),"9a0be1650dcd306c9a81526bfbe64b5c",a="https://api.themoviedb.org/3/search/movie?api_key=".concat("9a0be1650dcd306c9a81526bfbe64b5c","&language=en-US&query=").concat(c,"&page=1&include_adult=false"),e.prev=3,e.next=6,fetch(a);case 6:return r=e.sent,e.next=9,r.json();case 9:n=e.sent,o(n.results),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),console.err(e.t0);case 16:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("form",{className:"form",onSubmit:u,children:[Object(a.jsx)("label",{htmlFor:"query",className:"label",children:"Movie Name"}),Object(a.jsx)("input",{type:"text",className:"input",name:"query",placeholder:"i.e. Fight Club",value:c,onChange:function(e){return r(e.target.value)}}),Object(a.jsx)("button",{className:"button",type:"submit",children:"Search"})]}),Object(a.jsx)("div",{className:"card-list",children:i.filter((function(e){return e.poster_path})).map((function(e){return Object(a.jsx)(p,{movie:e},e.id)}))})]})}var O=function(e){Object(s.a)(c,e);var t=Object(i.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(n.a)(c,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h1",{className:"title",children:"React Movie Search"}),Object(a.jsx)(v,{})]})}}]),c}(o.a.Component);b.a.render(Object(a.jsx)(O,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.fda26319.chunk.js.map