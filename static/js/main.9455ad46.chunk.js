(this.webpackJsonpdelayedcaptions=this.webpackJsonpdelayedcaptions||[]).push([[0],{16:function(e,t,n){e.exports=n(37)},21:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(9),o=n.n(c),u=(n(21),n(2)),i=n(3),l=n(4);function s(){var e=Object(i.a)(["\n    height: 30px;\n    width: 50%;\n    border-radius: 5px;\n"]);return s=function(){return e},e}function f(){var e=Object(i.a)(["\n    margin: 0px;\n    margin-right: 30px;\n    color: #bf9a78;\n"]);return f=function(){return e},e}function d(){var e=Object(i.a)(["\n    display: flex;\n    margin: 20px 0px;\n    justify-content: center;\n"]);return d=function(){return e},e}var p=l.a.form(d()),m=l.a.h3(f()),b=l.a.input(s()),v=function(e){var t=Object(r.useState)(""),n=Object(u.a)(t,2),c=n[0],o=n[1];return a.a.createElement(p,{onSubmit:function(t){e.setUrl(c),t.preventDefault()}},a.a.createElement(m,null,"Video Url:"),a.a.createElement(b,{placeholder:"Enter here video url",onChange:function(e){o(e.target.value)}}))},h=n(12),g=n(5),E=n.n(g),x=n(6);function j(e){return O.apply(this,arguments)}function O(){return(O=Object(x.a)(E.a.mark((function e(t){var n,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return","");case 2:return e.next=4,fetch("https://video.google.com/timedtext?lang=en&v=".concat(t));case 4:return n=e.sent,e.next=7,n.text();case 7:if(r=w(r=e.sent)){e.next=12;break}return console.log("Error, video doesnt have captions "),e.abrupt("return","");case 12:return e.abrupt("return",r);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){for(var t=[],n=(new DOMParser).parseFromString(e,"text/xml").getElementsByTagName("text"),r=0;r<n.length;r++)t.push({start:Number(n[r].getAttribute("start")),duration:Number(n[r].getAttribute("dur")),text:n[r].textContent.replace("&#39;","'").replace("&quot;",'"')});return t}function y(){var e=Object(i.a)(["\n    padding: 32px;\n    background-color: hotpink;\n    font-size: 24px;\n    border-radius: 4px;\n    color: black;\n    font-weight: bold;\n"]);return y=function(){return e},e}function A(){var e=Object(i.a)(["\n    margin: 0px;\n    color: #bf9a78;\n"]);return A=function(){return e},e}function k(){var e=Object(i.a)(["\n    display: flex;\n"]);return k=function(){return e},e}function S(){var e=Object(i.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n"]);return S=function(){return e},e}var C=l.a.div(S()),T=l.a.div(k()),N=l.a.h3(A()),D=l.a.div(y()),I=function(e){var t=Object(r.useState)([]),n=Object(u.a)(t,2),c=n[0],o=n[1],i=Object(r.useState)("HOLA"),l=Object(u.a)(i,2),s=l[0],f=l[1],d=Object(r.useState)(2),p=Object(u.a)(d,2),m=p[0],b=p[1];return Object(r.useEffect)((function(){function t(){return(t=Object(x.a)(E.a.mark((function t(){var n;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j(e.id);case 2:n=t.sent,o(n),console.log("FETCHING DATAAAAAAA REEEEEEEEEE");case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.id]),Object(r.useEffect)((function(){!function(e){var t,n=Object(h.a)(c);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(r.start+r.duration>=e-m)return f(r.text),!0}}catch(a){n.e(a)}finally{n.f()}}(e.currentTime)}),[e.currentTime,c,m]),a.a.createElement(C,null,a.a.createElement(T,null,a.a.createElement(N,null,"Delay (sg) : "),a.a.createElement("input",{type:"number",min:"0",max:"60",value:m,onChange:function(e){return b(e.target.value)}})),a.a.createElement(D,null,s))},W=n(13);function q(){var e=Object(i.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]);return q=function(){return e},e}var B=l.a.div(q()),M=window.innerWidth>420?700:window.innerWidth,P=function(e){var t=Object(r.useState)(0),n=Object(u.a)(t,2),c=n[0],o=n[1],i=Object(r.useState)(!1),l=Object(u.a)(i,2),s=l[0],f=l[1],d={height:426,width:M,playerVars:{autoplay:1,controls:1}};return a.a.createElement(B,null,a.a.createElement(W.a,{videoId:e.id,opts:d,onReady:function(e){console.log("todo ok")},onStateChange:function(e){1===e.data?f(!0):f(!1),o(e.target.getCurrentTime())},onPlay:function(e){setInterval((function(){s&&o(e.target.getCurrentTime())}),500)}}),a.a.createElement(I,{id:e.id,currentTime:c}))};var U=function(){var e=Object(r.useState)("https://www.youtube.com/watch?v=sP2qqMegNKA"),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(""),i=Object(u.a)(o,2),l=i[0],s=i[1];return Object(r.useEffect)((function(){var e=function(e){return e?e.split("=")[1].split("&")[0]:""}(n);s(e)}),[n]),a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"AppContainer"},a.a.createElement(v,{setUrl:c}),a.a.createElement(P,{id:l})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.9455ad46.chunk.js.map