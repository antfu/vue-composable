(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{428:function(e,n,r){"use strict";r.r(n);r(11),r(48);var l=r(102),t=r(314),a={name:"cancellable-promise-example",setup:function(){var e=Object(t.k)((function(e){return fetch("https://reqres.in/api/users?delay=".concat(e)).then((function(e){return e.json()}))})),n=e.exec,r=e.loading,a=e.cancel,c=e.error,o=e.cancelled,s=e.result;return{delay:Object(l.ref)(1),exec:n,error:c,loading:r,cancel:a,cancelled:o,result:s}}},c=r(27),o=Object(c.a)(a,(function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",[r("div",[r("label",{attrs:{for:"delayPromise"}},[e._v("Delay seconds")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.delay,expression:"delay"}],attrs:{name:"delayPromise"},domProps:{value:e.delay},on:{input:function(n){n.target.composing||(e.delay=n.target.value)}}})]),e._v(" "),r("div",[r("button",{attrs:{disabled:e.loading},on:{click:function(n){return e.exec(e.delay)}}},[e._v("Execute")]),e._v(" "),r("button",{attrs:{disabled:!e.loading},on:{click:function(n){return e.cancel()}}},[e._v("Cancel")])]),e._v(" "),e.loading?r("div",[e._v("loading...")]):e.cancelled?r("div",[r("p",[e._v("Request cancelled")]),e._v(" "),r("p",[e._v("Result: "+e._s(e.result))]),e._v(" "),r("p",[e._v("Error: "+e._s(e.error))])]):r("div",[r("p",[e._v("Result: "+e._s(e.result))]),e._v(" "),r("p",[e._v("Error: "+e._s(e.error))])])])}),[],!1,null,null,null);n.default=o.exports}}]);