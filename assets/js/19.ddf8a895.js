(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{328:function(e,t,r){"use strict";r.r(t);var n=r(60),u={name:"web-socket-example",setup:function(){var e=Object(n.n)("wss://javascript.info/article/websocket/demo/hello");return{isOpen:e.isOpen,isClosed:e.isClosed,data:e.data,errored:e.errored,send:e.send,close:e.close}}},a=r(2),o=Object(a.a)(u,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("button",{attrs:{disabled:!e.isOpen},on:{click:e.send}},[e._v("Send")]),e._v(" "),r("button",{attrs:{disabled:!e.isOpen},on:{click:function(t){return e.close(1e3)}}},[e._v("Close")]),e._v(" "),r("p",[e._v("open: "+e._s(e.isOpen))]),e._v(" "),r("p",[e._v("closed: "+e._s(e.isClosed))]),e._v(" "),r("p",[e._v("data: "+e._s(e.data))]),e._v(" "),r("p",[e._v("errored: "+e._s(e.errored))])])}),[],!1,null,null,null);t.default=o.exports},60:function(e,t,r){"use strict";r.d(t,"a",(function(){return z})),r.d(t,"b",(function(){return y})),r.d(t,"c",(function(){return M})),r.d(t,"d",(function(){return P})),r.d(t,"e",(function(){return j})),r.d(t,"f",(function(){return I})),r.d(t,"g",(function(){return H})),r.d(t,"h",(function(){return w})),r.d(t,"i",(function(){return k})),r.d(t,"j",(function(){return R})),r.d(t,"k",(function(){return m})),r.d(t,"l",(function(){return E})),r.d(t,"m",(function(){return L})),r.d(t,"n",(function(){return J}));r(71),r(72),r(73),r(65),r(63),r(74),r(75),r(62),r(76),r(77),r(68);var n=r(69),u=(r(78),r(79),r(80),r(81)),a=(r(64),r(82)),o=r(83),c=r(19),l=r(84),i=r.n(l);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(r,!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e){return Object(c.c)(e)?e:Object(c.g)(e)}var b=function(e){return"function"==typeof e},p=function(e){return d(e)&&b(e.getTime)},d=function(e){return null!==e&&"object"===Object(o.a)(e)};function g(e){return d(e)&&b(e.then)&&b(e.catch)}function O(e){return new Promise((function(t){setTimeout(t,e)}))}function j(e,t,r,n){var u=f(e),a=function(){return u.value.removeEventListener(t,r)};return Object(c.d)((function(){return u.value.addEventListener(t,r,n)})),Object(c.e)(a),a}function m(e){var t=f(e.currentPage),r=f(e.pageSize),n=Object(c.g)(0),u=f(e.total),a=Object(c.a)({get:function(){return n.value},set:function(e){"number"==typeof e&&(n.value=Math.min(e,u.value))}}),o=Object(c.a)({get:function(){return t.value},set:function(e){var r,n,u;"number"==typeof e&&(t.value=(r=e,n=1,u=i.value,r<n?n:r>u?u:r),a.value=(t.value-1)*l.value)}}),l=Object(c.a)({get:function(){return r.value},set:function(e){"number"==typeof e&&(r.value=e)}}),i=Object(c.a)((function(){return Math.ceil(u.value/l.value)}));o.value=t.value;return Object(c.h)([u,l],(function(){o.value>i.value&&(o.value=i.value)}),{lazy:!0}),{pageSize:l,total:u,currentPage:o,offset:a,lastPage:i,next:function(){return++o.value},prev:function(){return--o.value},first:function(){return o.value=1},last:function(){return o.value=i.value}}}function y(e,t){var r=f(e),n=m(v({},{currentPage:1,pageSize:10},{},t,{total:Object(c.a)((function(){return r.value.length}))})),u=Object(c.a)((function(){var e=r.value;return Array.isArray(e)?e.slice(n.offset.value,n.offset.value+n.pageSize.value):[]}));return v({},n,{result:u})}function h(e,t){return x(e,t)}function x(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{isImmediate:!1};return function(){for(var u=arguments.length,a=new Array(u),o=0;o<u;o++)a[o]=arguments[o];var c=this,l=function(){t=void 0,n.isImmediate||e.apply(c,a)},i=n.isImmediate&&void 0===t;void 0!==t&&clearTimeout(t),t=setTimeout(l,r),i&&e.apply(c,a)}}function w(e,t,r){var n=Object(c.g)(0),u=Object(c.g)(0),a=function(e){n.value=e.x,u.value=e.y},o="number"==typeof t?void 0:t;("number"==typeof t?t:r)&&(a=h(a,r));var l=j(e,"mousemove",a,o);return{mouseX:n,mouseY:u,remove:l}}function k(e,t,r){var n=f(e),u=Object(c.g)(n.value&&n.value.clientHeight),a=Object(c.g)(n.value&&n.value.clientWidth),o=function(){u.value=n.value.clientHeight,a.value=n.value.clientWidth},l="number"==typeof t?void 0:t;("number"==typeof t?t:r)&&(o=h(o,r));var i=j(n,"resize",o,l);return{height:u,width:a,remove:i}}function R(e,t,r){var n=f(e),u=Object(c.g)(n.value&&n.value.scrollTop),a=Object(c.g)(n.value&&n.value.scrollLeft),o=function(e){u.value=n.value.scrollTop,a.value=n.value.scrollLeft},l="number"==typeof t?void 0:t;("number"==typeof t?t:r)&&(o=h(o,r));var i=j(n,"scroll",o,l);return{scrollTop:u,scrollLeft:a,remove:i}}function E(e){if(!e)throw new Error("[usePromise] argument can't be '".concat(e,"'"));if("function"!=typeof e)throw new Error("[usePromise] expects function, but received ".concat(Object(o.a)(e)));var t=Object(c.g)(!1),r=Object(c.g)(null),n=Object(c.g)(null),a=Object(c.g)();return{exec:function(){var o=Object(u.a)(regeneratorRuntime.mark((function u(){var o,c,l=arguments;return regeneratorRuntime.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return t.value=!0,r.value=null,n.value=null,o=a.value=e.apply(void 0,l),u.prev=4,u.next=7,o;case 7:return c=u.sent,a.value===o&&(n.value=c),u.abrupt("return",c);case 12:return u.prev=12,u.t0=u.catch(4),a.value===o&&(r.value=u.t0,n.value=null),u.abrupt("return",void 0);case 16:return u.prev=16,a.value===o&&(t.value=!1),u.finish(16);case 19:case"end":return u.stop()}}),u,null,[[4,12,16,19]])})));return function(){return o.apply(this,arguments)}}(),result:n,promise:a,loading:t,error:r}}function P(e){var t=Object(c.g)(!1),r=void 0,n=function(e){return new Promise((function(n,u){r=function(e){t.value=!0,u(e)},e.then(n).catch(u)}))};return v({},E((function(){return n(e.apply(void 0,arguments))})),{cancel:function(e){return r(e)},cancelled:t})}var S=Symbol(void 0),_=Symbol(void 0),T=function(){var e=Object(u.a)(regeneratorRuntime.mark((function e(t,r,u,a){var c,l,i,s,v,f,b,d,j,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=r[S].value,l=-1,i=t.maxRetries||9001,s=t.retryDelay||D,r.retryErrors.value=[],r.isRetrying.value=!1,r.nextRetry.value=void 0,v=void 0;case 8:if(f=!1,b=null,e.prev=10,++l,!g(b=a?u.apply(void 0,Object(n.a)(a)):u())){e.next=17;break}return e.next=16,b;case 16:b=e.sent;case 17:if(!r[_].value){e.next=19;break}return e.abrupt("return",null);case 19:f=!0,e.next=26;break;case 22:e.prev=22,e.t0=e.catch(10),b=null,r.retryErrors.value.push(e.t0);case 26:if(c===r[S].value){e.next=28;break}return e.abrupt("return",b);case 28:if(!f){e.next=32;break}return r.isRetrying.value=!1,r.nextRetry.value=void 0,e.abrupt("return",b);case 32:if(!(l>=i)){e.next=36;break}return r.isRetrying.value=!1,r.nextRetry.value=void 0,e.abrupt("return",Promise.reject(new Error("[useRetry] max retries reached ".concat(i))));case 36:if(r.isRetrying.value=!0,d=Date.now(),!g(j=s(l))){e.next=45;break}return e.next=42,j;case 42:e.t1=e.sent,e.next=46;break;case 45:e.t1=j;case 46:if(m=e.t1,g(j)&&!m){e.next=61;break}if("number"!=typeof m){e.next=52;break}v=m,e.next=57;break;case 52:if(!p(m)){e.next=56;break}v=m.getTime(),e.next=57;break;case 56:throw new Error("[useRetry] invalid value received from options.retryDelay '".concat(Object(o.a)(m),"'"));case 57:if(v<d?r.nextRetry.value=d+v:(r.nextRetry.value=v,v-=d),!(v>0)){e.next=61;break}return e.next=61,O(v);case 61:if(!r[_].value){e.next=63;break}return e.abrupt("return",null);case 63:if(c===r[S].value){e.next=65;break}return e.abrupt("return",b);case 65:if(l<9e3){e.next=8;break}case 66:return e.abrupt("return",null);case 67:case"end":return e.stop()}}),e,null,[[10,22]])})));return function(t,r,n,u){return e.apply(this,arguments)}}();function L(e,t){var r,n=!e||b(e)?{}:e,u=b(e)?e:t;if(!b(e)&&!d(e))throw new Error("[useRetry] options needs to be 'object'");if(u&&!b(u))throw new Error("[useRetry] factory needs to be 'function'");var o=Object(c.g)(!1),l=Object(c.g)(),i=Object(c.g)([]),s={value:!1},f=(r={isRetrying:o,retryCount:Object(c.a)((function(){return i.value.length})),nextRetry:l,retryErrors:i},Object(a.a)(r,S,{value:0}),Object(a.a)(r,_,s),r),p=u?function(){++f[S].value;for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return T(n,f,u,t)}:function(e){return++f[S].value,T(n,f,e,void 0)};return v({},f,{cancel:function(){f.isRetrying.value=!1,f.retryErrors.value.push(new Error("[useRetry] cancelled")),f.nextRetry.value=void 0,s.value=!0},exec:p})}var z=function(e){var t=100*Math.pow(2,e);return t+.2*t*Math.random()},D=function(){return 0};function I(e){var t=Object(c.g)(null),r=Object(c.g)(null),n=!e||!1!==e.isJson,a=!e||!1!==e.parseImmediate,o=E(function(){var e=Object(u.a)(regeneratorRuntime.mark((function e(u,o){var c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(u,o);case 2:if(c=e.sent,!n){e.next=8;break}if(l=c.json().then((function(e){return t.value=e})).catch((function(e){t.value=null,r.value=e})),!a){e.next=8;break}return e.next=8,l;case 8:return e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),l=Object(c.a)((function(){return o.result.value&&o.result.value.status||null})),i=Object(c.a)((function(){return o.result.value&&o.result.value.statusText||null}));return v({},o,{json:t,jsonError:r,status:l,statusText:i})}var C=i.a||globalThis&&globalThis.axios;function M(e){var t=C.create(e),r=Object(c.a)((function(){return t})),n=E(function(){var e=Object(u.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.request(r));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),a=Object(c.a)((function(){return n.result.value&&n.result.value.data||n.error.value&&n.error.value.response&&n.error.value.response.data||null})),o=Object(c.a)((function(){return n.result.value&&n.result.value.status||n.error.value&&n.error.value.response&&n.error.value.response.status||null})),l=Object(c.a)((function(){return n.result.value&&n.result.value.statusText||n.error.value&&n.error.value.response&&n.error.value.response.statusText||null}));return v({},n,{client:r,data:a,status:o,statusText:l})}function J(e,t){var r=new WebSocket(e,t),n=Object(c.g)(null),u=Object(c.g)(),a=Object(c.g)(null),o=Object(c.g)(!1),l=Object(c.g)(!1),i=Object(c.g)(!1);r.addEventListener("message",(function(e){n.value=e,a.value=e.data})),r.addEventListener("error",(function(e){u.value=e,i.value=!0})),r.addEventListener("close",(function(){o.value=!1,l.value=!0})),r.addEventListener("open",(function(){o.value=!0,l.value=!1}));return{ws:r,send:function(e){return r.send(e)},close:function(e,t){r.close(e,t)},messageEvent:n,errorEvent:u,data:a,isOpen:o,isClosed:l,errored:i}}var A=new Map,W=new WeakMap;function H(e,t){var r=!1,n=A.get(e),u=localStorage.getItem(e),a=n&&W.get(n)||!!t&&f(t)||Object(c.g)(null);if(u&&!n)try{a.value=JSON.parse(u),r=!1}catch(t){console.warn("[useLocalStorage] error parsing value from localStorage",e,t)}n||(n={},A.set(e,n),W.set(n,a),Object(c.h)(a,(function(t){void 0!==t?x((function(){return localStorage.setItem(e,JSON.stringify(t))}),100)():localStorage.removeItem(e)}),{deep:!0,lazy:r}));return{storage:a,clear:function(){A.forEach((function(e){var t=W.get(e);t&&(t.value=void 0),W.delete(e)})),A.clear()},remove:function(){A.delete(e),W.delete(n),a.value=void 0}}}}}]);