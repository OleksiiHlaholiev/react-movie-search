(this["webpackJsonpreact-movie-search"]=this["webpackJsonpreact-movie-search"]||[]).push([[0],{18:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},29:function(e,t,c){},31:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(20),r=c.n(s),i=(c(26),c(27),c(7)),o=c.n(i),l=c(10),j=c(4),d=function(){var e=Object(l.a)(o.a.mark((function e(t,c){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,c);case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,e.abrupt("return",a);case 10:throw e.prev=10,e.t0=e.catch(0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,c){return e.apply(this,arguments)}}(),u=function(e,t){var c="".concat("https://api.themoviedb.org/3").concat(e,"?api_key=").concat("62b719d81284900a2580408f52cc3d78").concat(t);return d(c)},h=function(e){var t="/movie/".concat(e);return u(t,"&language=ru-RU")},b=c.p+"static/media/logo.6ce24c58.svg",m=(c(29),c(1)),v=function(e){return Object(m.jsx)("div",{className:"progress-cont",children:Object(m.jsx)("img",{src:b,className:"progress-react",alt:"logo"})})},p=function(e){var t=["\u044f\u043d\u0432\u0430\u0440\u044f","\u0444\u0435\u0432\u0440\u0430\u043b\u044f","\u043c\u0430\u0440\u0442\u0430","\u0430\u043f\u0440\u0435\u043b\u044f","\u043c\u0430\u044f","\u0438\u044e\u043d\u044f","\u0438\u044e\u043b\u044f","\u0430\u0432\u0433\u0443\u0441\u0442\u0430","\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f","\u043e\u043a\u0442\u044f\u0431\u0440\u044f","\u043d\u043e\u044f\u0431\u0440\u044f","\u0434\u0435\u043a\u0430\u0431\u0440\u044f"];return t[e]?t[e]:""},O=c(49),g=(c(18),c(31),c(11));function N(){var e=Object(n.useState)(null),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!1),r=Object(j.a)(s,2),i=r[0],d=r[1],h=Object(n.useState)(1),b=Object(j.a)(h,2),N=b[0],x=b[1],f=Object(n.useState)(""),w=Object(j.a)(f,2),I=w[0],A=w[1],M=Object(n.useState)(""),R=Object(j.a)(M,2),G=R[0],E=R[1],k=!i&&(null===I||void 0===I?void 0:I.length),S=function(){var e=Object(l.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="&query="+I+"&language=ru-RU&page="+N,e.next=4,u("/search/movie",t);case 4:c=e.sent,a(c),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),a(null);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!k){e.next=5;break}return d(!0),e.next=4,S();case 4:d(!1);case 5:case"end":return e.stop()}}),e)})))()}),[I,N]);var U=-1;Object(n.useEffect)((function(){return U=setTimeout((function(){x(1),a(null),A(G)}),500),function(){return clearTimeout(U)}}),[G]);var B=function(e){var t=e&&(null===e||void 0===e?void 0:e.length),c=t?"\u041d\u0430\u0439\u0434\u0435\u043d\u043d\u044b\u0435 \u0444\u0438\u043b\u044c\u043c\u044b":"\u041f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e";return Object(m.jsxs)("div",{className:"search-results",id:"search-results",children:[Object(m.jsx)("h2",{className:"results-title",children:c}),t?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"results-cont",children:null===e||void 0===e?void 0:e.map((function(e,t){return function(e,t){var c,n=e.id,a=e.title,s=e.release_date,r=e.vote_average,i=e.overview,o=e.poster_path;try{var l=new Date(s);c=l.getDate()+" "+p(l.getMonth())+" "+l.getFullYear()}catch(u){c=s}var j=i.length>200?i.slice(0,197)+"...":i,d="".concat(n);return console.log("renderSearchResultItem: ",{linkPathTo:d,id:n}),Object(m.jsxs)("div",{className:"item",children:[Object(m.jsx)("div",{className:"img-cont",children:Object(m.jsx)(g.b,{to:d,className:"link",children:Object(m.jsx)("img",{className:"poster",src:"".concat("https://image.tmdb.org/t/p/w185_and_h278_bestv2/").concat(o),alt:"video img"})})}),Object(m.jsxs)("div",{className:"info-cont",children:[Object(m.jsx)(g.b,{to:d,className:"link name",children:a}),Object(m.jsx)("p",{className:"date",children:c}),Object(m.jsx)("p",{className:"rating",children:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433: ".concat(r)}),Object(m.jsx)("p",{className:"description",children:j}),Object(m.jsx)("p",{className:"detail-info",children:Object(m.jsx)(g.b,{to:d,className:"link",children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"})})]})]},"item-".concat(n))}(e)}))}),y()]}):""]})},T=function(e,t){x(t)},y=function(){var e=c.total_pages,t=c.total_results,n=20*(N-1)+1,a=N===e?t:20*N,s="".concat("Showing"," ").concat(n," ").concat("to"," ").concat(a," ").concat("of"," ").concat(t," ").concat("entries");return e&&t?Object(m.jsxs)("div",{className:"pagination-cont",children:[Object(m.jsx)("span",{className:"pagination__total-info",children:s}),Object(m.jsx)(O.a,{count:e,page:N,onChange:T})]}):""};return console.log("!!!! ",{renderAndRequestCondition:k,data:c,customerSearch:I,isProcess:i}),Object(m.jsx)("section",{className:"movie-search-section",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h1",{children:"React Movie search engine!"}),Object(m.jsx)("form",{id:"search-form",className:"form-cont",name:"search-form",children:Object(m.jsxs)("div",{className:"input-group mb-3",children:[Object(m.jsx)("input",{type:"text",id:"search-input",className:"form-control",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0444\u0438\u043b\u044c\u043c\u0430",value:G,autoComplete:"off",onChange:function(e){var t;return E(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)}}),Object(m.jsx)("div",{className:"input-group-append",children:Object(m.jsx)("span",{className:"btn btn-outline-secondary",children:Object(m.jsx)("i",{className:"icon icon-search",children:Object(m.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk4QzJFNTQzMDZBRTExRTlBOThBODZGRDUwQkM1NzRGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjk4QzJFNTQ0MDZBRTExRTlBOThBODZGRDUwQkM1NzRGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OThDMkU1NDEwNkFFMTFFOUE5OEE4NkZENTBCQzU3NEYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OThDMkU1NDIwNkFFMTFFOUE5OEE4NkZENTBCQzU3NEYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6VhYXgAAAG3ElEQVR42qxX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",alt:"icon-search"})})})})]})}),i?Object(m.jsx)(v,{}):k?B(null===c||void 0===c?void 0:c.results):""]})})}var x=c(3);function f(){var e=Object(x.h)(),t=e.id,c=Object(n.useState)(null),a=Object(j.a)(c,2),s=a[0],r=a[1],i=Object(n.useState)(!0),d=Object(j.a)(i,2),u=d[0],b=d[1];console.log("MovieSearchPageSingleResult: ",{params:e,videoId:t});var O=function(){var e=Object(l.a)(o.a.mark((function e(){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h(t);case 3:c=e.sent,r(c),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),r(null);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,O();case 3:b(!1);case 4:case"end":return e.stop()}}),e)})))()}),[]);var N=function(e){var t,c=e.id,n=e.title,a=e.release_date,s=e.vote_average,r=e.overview,i=e.poster_path;try{var o=new Date(a);t=o.getDate()+" "+p(o.getMonth())+" "+o.getFullYear()}catch(l){t=a}return console.log("renderSearchResultItem: ",{id:c}),Object(m.jsxs)("div",{className:"item",children:[Object(m.jsx)("div",{className:"img-cont",children:Object(m.jsx)("img",{className:"poster",src:"".concat("https://image.tmdb.org/t/p/w300_and_h450_bestv2/").concat(i),alt:"video img"})}),Object(m.jsxs)("div",{className:"info-cont",children:[Object(m.jsx)("h3",{className:"name",children:n}),Object(m.jsx)("p",{className:"date",children:t}),Object(m.jsx)("p",{className:"rating",children:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433: ".concat(s)}),Object(m.jsx)("p",{className:"description",children:r}),Object(m.jsx)("p",{className:"detail-info",children:Object(m.jsx)(g.b,{to:"/search",className:"link go-to-main-btn",children:"\u041d\u0410 \u0413\u041b\u0410\u0412\u041d\u0423\u042e"})})]})]},"item-".concat(c))};return Object(m.jsx)(m.Fragment,{children:u?Object(m.jsx)(v,{}):function(){var e=s.backdrop_path,t="url('".concat("https://image.tmdb.org/t/p/w1400_and_h450_face/").concat(e,"')");return Object(m.jsx)("section",{className:"movie-details-section loaded",style:{backgroundImage:t},children:Object(m.jsx)("div",{className:"bg-cont",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h1",{style:{display:"none"},children:"Detailed information"}),Object(m.jsx)("div",{className:"search-results",children:Object(m.jsx)("div",{className:"results-cont",children:N(s)})})]})})})}()})}function w(){return Object(m.jsx)(g.a,{children:Object(m.jsxs)(x.d,{children:[Object(m.jsx)(x.b,{path:"/react-movie-search",element:Object(m.jsx)(N,{})}),Object(m.jsx)(x.b,{path:"/react-movie-search/:id",element:Object(m.jsx)(f,{})}),Object(m.jsx)(x.b,{path:"*",element:Object(m.jsx)(x.a,{to:"/react-movie-search",replace:!0})})]})})}var I=function(){return Object(m.jsx)("div",{className:"app scroll",children:Object(m.jsx)(w,{})})},A=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,50)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(I,{})}),document.getElementById("root")),A()}},[[36,1,2]]]);
//# sourceMappingURL=main.1d092f6d.chunk.js.map