(this.webpackJsonpfacebookmessanger=this.webpackJsonpfacebookmessanger||[]).push([[0],{33:function(e,a,t){e.exports=t(45)},38:function(e,a,t){},39:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(11),c=t.n(r),s=(t(38),t(29)),l=t(23),m=t(68),u=t(66),i=t(65),g=t(64),p=(t(39),t(67)),d=t(62),h=t(63);var f=function(e){var a=e.message,t=e.username===a.username;return o.a.createElement("div",{className:"message_card ".concat(t&&"message_user")},o.a.createElement(p.a,{className:t?"message_usercard":"message_guestcard"},o.a.createElement(d.a,null,o.a.createElement(h.a,{component:"h2",color:"white",variant:"h5"},a.username,":",a.text))))};t(44);var E=function(){var e=Object(n.useState)(""),a=Object(l.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)([{username:"Manoj",text:"Hey guys what's up"}]),p=Object(l.a)(c,2),d=p[0],h=p[1],E=Object(n.useState)(""),b=Object(l.a)(E,2),v=b[0],w=b[1];return Object(n.useEffect)((function(){w(prompt("Please enter your name"))}),[]),console.log(t),console.log(d),o.a.createElement("div",{className:"App"},o.a.createElement("img",{src:"https://logodownload.org/wp-content/uploads/2017/04/facebook-messenger-logo-0.png",heigth:"60px",width:"70px"}),o.a.createElement("h1",null,"Facebook messenger"),o.a.createElement("h2",null,"Hey ",v,", welcome to Messenger App!"),o.a.createElement("form",null,o.a.createElement(m.a,null,o.a.createElement(u.a,null,"Enter message..."),o.a.createElement(i.a,{value:t,onChange:function(e){return r(e.target.value)}}),o.a.createElement(g.a,{disabled:!t,variant:"contained",color:"primary",type:"submit",onClick:function(e){""!==t&&(e.preventDefault(),h([].concat(Object(s.a)(d),[{username:v,text:t}])),r(""))}},"Send Message"))),d.map((function(e){return o.a.createElement(f,{username:v,message:e})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.9f8ac356.chunk.js.map