(this.webpackJsonpjoblister=this.webpackJsonpjoblister||[]).push([[0],{29:function(t,e,n){t.exports=n(52)},52:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(23),o=n.n(c),l=n(4),i=n(10),u=n.n(i),s=n(5),f=n(24),d=n(25),b=["https://api.github.com/repos/frontendbr/vagas/issues?per_page=100","https://api.github.com/repos/backend-br/vagas/issues?per_page=100","https://api.github.com/repos/androiddevbr/vagas/issues?per_page=100","https://api.github.com/repos/phpdevbr/vagas/issues?per_page=100","https://api.github.com/repos/react-brasil/vagas/issues?per_page=100"],p=n.n(d).a.create({}),m={getAll:function(){var t=Object(f.a)(u.a.mark((function t(){var e,n,r,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=[],n=Object(s.a)(b),t.prev=2,n.s();case 4:if((r=n.n()).done){t.next=10;break}return a=r.value,t.next=8,p.get(a).then((function(t){var n,r=Object(s.a)(t.data);try{for(r.s();!(n=r.n()).done;){var a=n.value;e.push(a)}}catch(c){r.e(c)}finally{r.f()}}));case 8:t.next=4;break;case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(2),n.e(t.t0);case 15:return t.prev=15,n.f(),t.finish(15);case 18:return t.abrupt("return",e);case 19:case"end":return t.stop()}}),t,null,[[2,12,15,18]])})));return function(){return t.apply(this,arguments)}}()},g=Object(r.createContext)(),h=function(t){var e=Object(r.useState)([]),n=Object(l.a)(e,2),c=n[0],o=n[1],i=Object(r.useState)([]),u=Object(l.a)(i,2),s=u[0],f=u[1],d=Object(r.useState)(!0),b=Object(l.a)(d,2),p=b[0],h=b[1];Object(r.useEffect)((function(){h(!0),m.getAll().then((function(t){f(t),o(t),h(!1)}))}),[]);var v={jobs:c,setJobs:o,cjobs:s,setCjobs:f,loading:p};return a.a.createElement(g.Provider,Object.assign({value:v},t))},v=function(){return Object(r.useContext)(g)},j=n(1),x=n(2);function E(){var t=Object(j.a)(["\n    * {\n        margin: 0;\n        padding: 0;\n    }\n    \n    html, body, #root {\n        width: 100%;\n        height: 100%;\n    }\n"]);return E=function(){return t},t}var O=Object(x.a)(E());function y(){var t=Object(j.a)(["\n    width: 100%;\n    height: 70px;\n\tmargin-bottom: 30px;\n    background-color: #a0b7db;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    .logo {\n        font-size: 2rem;\n\t\tcursor:pointer;\n    }\n\n\toutline: 0;\n\tuser-select: none;\n"]);return y=function(){return t},t}var w=x.c.div(y());function k(){return a.a.createElement(w,null,a.a.createElement("p",{className:"logo"},"JobLister"))}function S(){var t=Object(j.a)(["\n    width: 100%;\n\theight: 35px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\tbackground-color: #adb5bd;\n\t\n    .copyrights {\n\t\tfont-size: 1.1rem;\n\t\tcursor:pointer;\n    }\n\ta {\n        text-decoration: none;\n        color: inherit;\n    }\n\n\n\toutline: 0;\n\tuser-select: none;\n\n  \tleft: 0;\n  \tbottom: 0;\n"]);return S=function(){return t},t}var C=x.c.div(S());function _(){return a.a.createElement(C,null,a.a.createElement("a",{href:"https://github.com/Bufige",target:"_blank"},a.a.createElement("div",{class:"copyright"},"\xa92020 Copyright Leonardo Igor")))}var L=n(6);function B(){var t=Object(j.a)(["\n    display: table;\n\ttable-layout: auto;\n\tmargin: 10px 0;\n    width: 100%;\n\n\tborder-collapse: collapse;\n  \tborder-radius: 1em;\n  \toverflow: hidden;\n\n\tth, td {\n  \t\tpadding: 1em;\n  \t\tbackground: #ddd;\n  \t\tborder-bottom: 2px solid white; \n\t}\n\ttr { \n    \tdisplay: table-row; \n\t}\n\ttd { \n    \tdisplay: table-cell;\n\t}\n\ttfoot {\n\t\tdisplay: table-header-group;\n    \tvertical-align: middle;\n    \tborder-color: inherit;\n\t\tjustify-content: center;\n\t\ttd {\n\t\t\tjustify-content: center;\n\t\t\tpadding: 0;\n\t\t\tbackground: inherit;\n\t\t\tborder-bottom: 0;\n\t\t\tmargin-top: 30px;\n\t\t}\n\t}\n"]);return B=function(){return t},t}var D=x.c.table(B());function z(){var t=Object(j.a)(["\n\tposition: relative;\n    padding: 8px 5px;\n    background-color: #313131;\n    color: #999;\n    border-width: 1px 1px 2px 1px;\n    border-style: solid;\n    border-color: #222;\n    border-radius: 5px;\n    text-transform: uppercase;\n    font-weight: 700;\n    font-size: .75em;\n    line-height: 1em;\n    box-shadow: 1px 1px 0 rgba(0,0,0,0.5);\n\n\tmargin: 5px 5px;\n\t.close {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tright: 0;\n\t}\n\t:hover {\n\t\tcursor: pointer;\n\t}\n\tuser-select: none\n"]);return z=function(){return t},t}var J=x.c.div(z());function P(t){return a.a.createElement(J,{onClick:function(){return t.onSelect&&t.onSelect(t.text)}},t.text,t.onClose&&a.a.createElement("div",{class:"close",onClick:t.onClose},"X"))}function A(){var t=Object(j.a)(["\n\ttext-decoration: underline;\n\tcolor: inherit;\n\tfont-size: 1.2rem;\n"]);return A=function(){return t},t}function N(){var t=Object(j.a)(["display:flex;flex-wrap: wrap;"]);return N=function(){return t},t}function T(){var t=Object(j.a)(["text-align: left;"]);return T=function(){return t},t}function I(){var t=Object(j.a)(["\n    text-align: center;\n    align-items:center;\n\t.tags {\n\t\tdisplay: flex;\n\t\t","\n"]);return I=function(){return t},t}function W(){var t=Object(j.a)(["\n\theight: 100px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    align-items: center;\n"]);return W=function(){return t},t}var F=x.c.tr(W()),M=x.c.td(I(),(function(t){return t.logo&&Object(x.b)(T())||t.labels&&Object(x.b)(N())})),X=x.c.a(A());function $(t){var e=t.job;return a.a.createElement(F,null,a.a.createElement(M,null,a.a.createElement(X,{href:e.html_url,target:"_blank"},e.title)),a.a.createElement(M,{labels:!0},a.a.createElement("div",{className:"tags"},e.labels.map((function(t,e){return a.a.createElement(P,{text:t.name,key:e})})))),a.a.createElement(M,null,new Date(e.created_at).toLocaleString()))}function q(){var t=Object(j.a)(["\n\tdisplay: flex;\n\twidth: 32px;\n\theight: 32px;\n\tborder-radius: 50%;\n\tbackground-color: #b5c7c5;\n    text-decoration: none;\n    text-align: center;\n    line-height: 30px;\n    font-size: 14px;\n    cursor: pointer;\n    user-select: none;\n\talign-items: center;\n\tjustify-content: center;\n\n\tmargin-left: 5px;\n\ttransition: transform .2s ease-in-out;\n\t:hover {\n\t\ttransform: scale(1.1);\n\t}\n\tcursor: pointer;\n\n\t&.selected {\n\t\tbackground-color: #3bb33b;\n        color: white;\n\t}\n"]);return q=function(){return t},t}function G(){var t=Object(j.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\tmargin-top: 25px;\n"]);return G=function(){return t},t}var H=x.c.div(G()),K=x.c.div(q());function Q(t){var e=t.perPage||10,n=t.currentPage||0,c=function(t,e){for(var n=[],r=0;r<t.length;)n.push(t.slice(r,r+=e));return n}(t.data,e),o=c.length,l=[0];return n-2>0&&l.push(n-2),n-1>0&&l.push(n-1),n>0&&l.push(n),n+1<o&&l.push(n+1),n+2<o&&l.push(n+2),n+3<o&&l.push(o-1),Object(r.useEffect)((function(){t.onSelect(n,c[n])}),[]),a.a.createElement(H,null,l.map((function(e,r){return a.a.createElement(K,{className:n===e&&"selected",key:r,onClick:function(){return n=e,void(t.onSelect&&t.onSelect(n,c[n]));var n}},e+1)})))}function R(){var t=v(),e=t.cjobs,n=(t.setCjobs,Object(r.useState)(0)),c=Object(l.a)(n,2),o=c[0],i=c[1],u=Object(r.useState)([]),s=Object(l.a)(u,2),f=s[0],d=s[1];return Object(r.useEffect)((function(){if(i((function(t){return 0})),e){var t=function(t,e){for(var n=[],r=0;r<t.length;)n.push(t.slice(r,r+=e));return n}(e,10);t.length&&d(Object(L.a)(t[o]))}}),[e]),e.length>0&&a.a.createElement(D,null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Title"),a.a.createElement("th",null,"Tags"),a.a.createElement("th",null,"Date"))),a.a.createElement("tbody",null,f.map((function(t,e){return a.a.createElement($,{key:e,job:t})}))),a.a.createElement("tfoot",null,a.a.createElement("tr",null,a.a.createElement("td",{colSpan:"3"},a.a.createElement(Q,{data:e,onSelect:function(t,e){i(t),d(Object(L.a)(e))},perPage:10,currentPage:o})))))}function U(){var t=Object(j.a)(["\n    text-align: center;\n\tborder-radius: 3px;\n\tbackground-color: #d0def5;\n    cursor: pointer;\n    user-select: none;\n    border: 1px solid #fff;\n    border-radius: 8px;\n    padding: 6px 15px;\n\toutline: 0;\n"]);return U=function(){return t},t}x.c.button(U());function V(){var t=Object(j.a)(["\n\ttext-align: center;\n\tmargin: 15px 0;\n"]);return V=function(){return t},t}function Y(){var t=Object(j.a)(["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n"]);return Y=function(){return t},t}function Z(){var t=Object(j.a)(["\n    width: 100%;\n    height: 100%;\n\tborder: solid 2px grey;\n\tborder-radius: 10px;\n\tpadding-left: 10px;\n"]);return Z=function(){return t},t}function tt(){var t=Object(j.a)(["\n\twidth: 100%;\n\theight: 25px;\n\tdisplay: flex;\n\talign-items: center;\n\t\n"]);return tt=function(){return t},t}function et(){var t=Object(j.a)(["\n    margin: 0 auto;\n\twidth: 50%;\n\tmargin-bottom: 75px;\n\n\t@media(max-width: 800px) {\n\t\twidth: 85%;\n\t}\n"]);return et=function(){return t},t}function nt(){var t=Object(j.a)(["\n    width: 100%;\n    display: flex;\n\ti {\n\t\tcursor: pointer;\n\t\tmargin-left: 10px;\n\t}\n"]);return nt=function(){return t},t}var rt=x.c.div(nt()),at=x.c.div(et()),ct=x.c.div(tt()),ot=x.c.input(Z()),lt=x.c.div(Y()),it=x.c.h3(V());function ut(){var t=Object(r.useState)([]),e=Object(l.a)(t,2),n=e[0],c=e[1],o=Object(r.useState)([]),i=Object(l.a)(o,2),u=i[0],f=i[1],d=Object(r.useState)(),b=Object(l.a)(d,2),p=b[0],m=b[1],g=Object(r.useState)(!0),h=Object(l.a)(g,2),j=h[0],x=(h[1],v()),E=x.jobs,O=x.cjobs,y=x.setCjobs,w=(x.setJobs,function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.text,n=void 0===e?void 0:e,r=t.tags,a=void 0===r?[]:r,c=t.orderBy,o=void 0===c?0:c;if(n===a&&n===o&&0===a.length)y(Object(L.a)(E));else{var l=E;if(n){var i=n.toLowerCase().replace(/\s+/g," ").trim().split(" ");l=l.filter((function(t){var e,n=!1,r=!1,a=t.title.toLowerCase(),c=t.body.toLowerCase(),o=Object(s.a)(i);try{for(o.s();!(e=o.n()).done;){var l=e.value;if(a.includes(l)){n=!0;break}}}catch(b){o.e(b)}finally{o.f()}var u,f=Object(s.a)(i);try{for(f.s();!(u=f.n()).done;){var d=u.value;if(c.includes(d)){r=!0;break}}}catch(b){f.e(b)}finally{f.f()}return n||r}))}a.length>0&&(l=l.filter((function(t){var e=[];t.labels.forEach((function(t){e.push(t.name.toLowerCase())}));var n,r=!0,c=Object(s.a)(a);try{for(c.s();!(n=c.n()).done;){var o=n.value;if(!(r=e.includes(o)))break}}catch(l){c.e(l)}finally{c.f()}return r}))),o?l.sort((function(t,e){return new Date(e.created_at)-new Date(t.created_at)})):l.sort((function(t,e){return new Date(t.created_at)-new Date(e.created_at)})),y(Object(L.a)(l))}}),k=function(t){var e=u;e.includes(t)?e=e.filter((function(e){return e!==t})):e.push(t),f(Object(L.a)(e)),w({text:p,tags:e,orderBy:j})};return Object(r.useEffect)((function(){var t=[];E.forEach((function(e){e.labels.forEach((function(e){t.push(e.name.toLowerCase())}))})),(t=Array.from(new Set(t))).sort(),c(t)}),[O,E]),a.a.createElement(rt,null,a.a.createElement(at,null,a.a.createElement(ct,null,a.a.createElement(ot,{value:p,onChange:function(t){return m(t.target.value)}}),a.a.createElement("i",{class:"fas fa-search fa-lg",onClick:function(t){w({text:p,orderBy:j})}}),a.a.createElement("i",{class:"fas fa-eraser fa-lg",onClick:function(){y(E),f([]),m("")}})),a.a.createElement(it,null,"All available tags"),a.a.createElement(lt,null,n&&n.map((function(t,e){return a.a.createElement(P,{key:e,text:t,onSelect:k})}))),u.length>0&&a.a.createElement(a.a.Fragment,null,a.a.createElement(it,null,"Selected Tags"),a.a.createElement(lt,null,u&&u.map((function(t,e){return a.a.createElement(P,{text:t,key:e,onSelect:k})})))),a.a.createElement(it,null,"Showing ",O.length," of ",E.length)))}function st(){var t=Object(j.a)(["\n  \tmargin: 0;\n  \tposition: absolute;\n  \ttop: 50%;\n  \tleft: 50%;\n  \t-ms-transform: translate(-50%, -50%);\n  \ttransform: translate(-50%, -50%);\n"]);return st=function(){return t},t}function ft(){var t=Object(j.a)(["\n\n"]);return ft=function(){return t},t}var dt=x.c.div(ft()),bt=x.c.div(st());function pt(t){var e=v().loading;return console.log(e),e?a.a.createElement(bt,null,a.a.createElement("i",{class:"fas fa-spinner fa-spin fa-4x"})):a.a.createElement(dt,null,a.a.createElement(ut,null),a.a.createElement(R,null))}function mt(){return a.a.createElement(h,null,a.a.createElement(O,null),a.a.createElement(k,null),a.a.createElement(pt,null),a.a.createElement(_,null))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(mt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.8474e7f6.chunk.js.map