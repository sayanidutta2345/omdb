(this["webpackJsonpomdb-ui"]=this["webpackJsonpomdb-ui"]||[]).push([[0],{27:function(e,t,a){e.exports=a(57)},33:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(25),c=a.n(l),o=(a(32),a(10)),m=a(1),u=(a(33),a(7)),i=a(11),s=a.n(i),E=r.a.memo((function(e){var t=e.movie,a=Object(m.f)();return r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"card",style:{width:"18rem",margin:"auto"}},r.a.createElement("div",{className:"bd-placeholder-img card-img-top",style:{width:"18rem",height:"18rem",overflow:"hidden"}},r.a.createElement("img",{src:t.Poster,style:{width:"18rem"},alt:"Poster"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t.Title),r.a.createElement("p",{className:"card-text"}," Year : ",t.Year," , Type: ",t.Type," "),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){a.push("/details/".concat(t.imdbID))}},"View"))),r.a.createElement("br",null))}));function d(e){var t=e.elements||[],a=e.component;return r.a.createElement("div",{className:"row"},t.map((function(e){return t=e,r.a.createElement(a,{movie:t,key:t.imdbID});var t})))}a(56);function b(e){var t=e.value;return r.a.createElement("div",{className:"background"},r.a.createElement("input",{className:"search clear-margin-top",type:"text",value:t,onChange:function(t){return e.onChange(t.target.value)}}),r.a.createElement("button",{className:"btn btn-success clear-margin-top",onClick:function(){return e.onSubmit(t)}},"Search"))}var h={headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS"}};function p(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)([]),o=Object(u.a)(c,2),m=o[0],i=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{value:a,onChange:l,onSubmit:function(e){var t="".concat("http://localhost:3001","/omdb/search?title=").concat(e);s.a.get(t,h).then((function(e){return function(e){e&&e.data&&e.data.Search instanceof Array&&i(e.data.Search)}(e)})).catch((function(e){return console.error(e)}))}}),r.a.createElement("br",null),r.a.createElement(d,{elements:m,component:E}))}function f(e){return r.a.createElement("button",{onClick:e.f}," Details Page! ")}function g(){var e=Object(m.g)(),t=Object(n.useState)({}),a=Object(u.a)(t,2),l=a[0],c=a[1],o=Object(n.useEffect)((function(){var t="".concat("http://localhost:3001","/omdb/imdb/").concat(e.imdbID);s.a.get(t,h).then((function(e){console.log(e.data),c(e.data)})).catch((function(e){return console.log(e)}))}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null," "),r.a.createElement(f,{f:o}),r.a.createElement("p",null," "),r.a.createElement("img",{src:l.Poster,alt:"movie.Title "}),r.a.createElement("p",null,r.a.createElement("b",null,"Title:"),"     ",l.Title," "),r.a.createElement("p",null,r.a.createElement("b",null,"Imdb:"),"      ",l.imdbID),r.a.createElement("p",null,r.a.createElement("b",null,"Actors:"),"    ",l.Actors),r.a.createElement("p",null,r.a.createElement("b",null,"Awards:"),"    ",l.Awards),r.a.createElement("p",null,r.a.createElement("b",null,"Director:"),"  ",l.Director),r.a.createElement("p",null,r.a.createElement("b",null,"Genre:"),"     ",l.Genre),r.a.createElement("p",null,r.a.createElement("b",null,"Country:"),"   ",l.Country),r.a.createElement("p",null,r.a.createElement("b",null,"Language:"),"  ",l.Language))}function v(e){return r.a.createElement("button",{onClick:e.incrementCounter}," Details Page! ")}function w(e){return r.a.createElement("p",null," Count = ",e.value," ")}function C(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),a=t[0],l=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null," Hello World "),r.a.createElement(v,{incrementCounter:function(){l(a+1)}}),r.a.createElement(w,{value:a}))}var O=function(){return r.a.createElement("div",{className:"container-fluid remove-padding"},r.a.createElement(o.a,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/search",component:p}),r.a.createElement(m.a,{path:"/details/:imdbID",component:g}),r.a.createElement(m.a,{path:"/",component:C}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.90f8c837.chunk.js.map