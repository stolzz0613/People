(this.webpackJsonppeople=this.webpackJsonppeople||[]).push([[0],{11:function(e,a,t){},13:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(3),s=t.n(l),i=(t(11),t(5)),o=t(4),m=t(1),c=t.n(m),u=function(e){var a=e.dato,t=c()(a.birthDate).format("MM/DD/YYYY"),r=c()().format("MM/DD/YYYY"),l=c()(r).format("YYYY")-c()(t).format("YYYY"),s=30*parseInt(c()(t).format("MM"))+parseInt(c()(t).format("DD"))-(30*parseInt(c()(r).format("MM"))+parseInt(c()(r).format("DD")));return n.a.createElement("div",{className:"card shadow bg-info m-3"},n.a.createElement("div",{className:"card-body"},n.a.createElement("p",null,a.firstName),n.a.createElement("p",null,"Fecha de nacimiento: ",t),n.a.createElement("p",null,"Edad: ",l," a\xf1os"),s<0?n.a.createElement("p",null,"Tiempo restante: ",s+365," dias"):n.a.createElement("p",null,"Tiempo restante: ",s," dias")))},p=function(e){var a=e.people;return n.a.createElement("div",{className:"row mt-5"},a.map((function(e){return n.a.createElement(u,{dato:e})})))};var N=function(){var e=Object(r.useState)(!1),a=Object(i.a)(e,2),t=a[0],l=a[1];return n.a.createElement("div",{className:"container p-5"},n.a.createElement("div",{className:"row align-items-center mx-lg-n5"},n.a.createElement("div",{className:"col",style:{width:"200px"}},n.a.createElement("h1",null," Personas "),n.a.createElement("button",{className:"btn btn-primary",onClick:function(){l(!t)}},"Mostrar / Ocultar Nombres")),t?n.a.createElement(p,{people:o.a}):null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e){e.exports=JSON.parse('{"a":[{"firstName":"Milena","lastName":"Ospina","birthDate":"2008-01-13"},{"firstName":"Andr\xe9s","lastName":"Torres","birthDate":"1995-12-03"},{"firstName":"Carlos","lastName":"Castro","birthDate":"1957-06-16"},{"firstName":"Alexander","lastName":"Ovalle","birthDate":"1975-04-23"},{"firstName":"Niko","lastName":"Nishida","birthDate":"1987-02-02"},{"firstName":"Laura","lastName":"Zuluaga","birthDate":"1961-08-27"},{"firstName":"Ana","lastName":"Aguilar","birthDate":"2010-11-19"},{"firstName":"Sebasti\xe1n","lastName":"Perez","birthDate":"2001-09-09"},{"firstName":"Lina","lastName":"Jaramillo","birthDate":"1930-07-04"},{"firstName":"David","lastName":"Arango","birthDate":"1954-03-14"}]}')},6:function(e,a,t){e.exports=t(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.c111dc7a.chunk.js.map