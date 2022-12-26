/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={184:function(t,e,r){var n,o,i,a;function c(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}t=r.nmd(t),a=function(){return function(){"use strict";var t={d:function(e,r){for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}},e={};function r(t,e){e instanceof Node||(e=n.text("".concat(e))),e instanceof Text&&"clone"in e&&(e=e.clone()),t.append(e)}function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof e&&(e={innerHTML:e}),function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if("function"==typeof t)return t(n,o);if(t instanceof Node)e=t;else{if("string"!=typeof t)throw new Error("Invalid tag, ",l(t));e=document.createElement(t)}return Object.keys(n).forEach((function(t){var o=n[t];if(void 0!==o)switch(t){case"child":r(e,o);break;case"children":if(!Array.isArray(o))throw new Error("children must be an array of Nodes");o.flat().forEach((function(t){r(e,t)}));break;case"attr":Object.keys(o).forEach((function(t){e.setAttribute(t,o[t])}));break;case"style":case"dataset":Object.keys(o).forEach((function(r){e[t][r]=o[r]}));break;default:e[t]=o}})),e}(t,e)}return t.d(e,{default:function(){return n}}),Object.defineProperties(n,{get:{value:function(t){return document.querySelector(t)}},getAll:{value:function(t){return c(document.querySelectorAll(t))}},parse:{value:function(t){var e=document.createElement("div");return e.innerHTML=t,1===e.childElementCount?e.firstElementChild:c(e.children)}},text:{value:function(t){return document.createTextNode(t)}},use:{value:function(t){var e=t,r=!1,n=document.createTextNode(t),o=[n];return Object.defineProperty(n,"value",{set:function(t){e=t,o.forEach((function(e){e.textContent=t}))},get:function(){return e}}),Object.defineProperty(n,"clone",{value:function(){if(!r)return r=!0,n;var t=n.cloneNode();return o.push(t),t}}),n}}}),e.default}()},"object"==l(e)&&"object"==l(t)?t.exports=a():(o=[],void 0===(i="function"==typeof(n=a)?n.apply(e,o):n)||(t.exports=i))}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={id:n,loaded:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),(()=>{"use strict";const t=JSON.parse('{"id":"acode.plugin.tailwindPalette"}');var e=r(184),n=r.n(e);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(){i=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function f(t,e,r,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),c=new L(o||[]);return n(a,"_invoke",{value:S(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var d={};function p(){}function y(){}function v(){}var m={};s(m,c,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(P([])));b&&b!==e&&r.call(b,c)&&(m=b);var w=v.prototype=p.prototype=Object.create(m);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function i(n,a,c,u){var l=h(t[n],t,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==o(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){i("next",t,c,u)}),(function(t){i("throw",t,c,u)})):e.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return i("throw",t,c,u)}))}u(l.arg)}var a;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){i(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function S(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=j(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function j(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function P(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return y.prototype=v,n(w,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:y,configurable:!0}),y.displayName=s(v,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(E.prototype),s(E.prototype,u,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new E(f(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),s(w,l,"Generator"),s(w,c,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=P,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}function a(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function c(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function c(t){a(i,n,o,c,u,"next",t)}function u(t){a(i,n,o,c,u,"throw",t)}c(void 0)}))}}function u(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==o(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===o(i)?i:String(i)),n)}var i}var l=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,r,o,a,l;return e=t,r=[{key:"init",value:(l=c(i().mark((function t(e){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r={name:"Tailwind Palette",description:"Tailwind Color Palette",exec:this.run.bind(this)},editorManager.editor.commands.addCommand(r),e.id="acode-plugin-tailwind-color-palette",e.settitle("Tailwind Color Palette"),this.$page=e,this.$style=n()("style",{textContent:"#acode-plugin-tailwind-color-palette{height:100%;display:flex;justify-content:center;flex-direction:column}#acode-plugin-tailwind-color-palette .outputDiv{height:100px;width:100px;padding:10px;border:none;border-radius:25px;background:#f8fafc;margin:auto;margin-top:15px}#acode-plugin-tailwind-color-palette .colorSelector{outline:none;padding:12px;width:100%;margin-top:15px;font-size:24px;color:var(--secondary-text-color)}#acode-plugin-tailwind-color-palette button{background:var(--button-background-color);color:var(--button-text-color);padding:10px;border:none;border-radius:12px;width:100%;margin-top:20px;font-size:16px}"}),this.$outputDiv=n()("div",{className:"outputDiv"}),this.$colorSelector=n()("select",{className:"colorSelector"}),this.$insertBtn=n()("button",{textContent:"Use this color"}),this.$page.append(this.$outputDiv),this.$page.append(this.$colorSelector),this.$page.append(this.$insertBtn),this.load_colors(),document.head.append(this.$style),this.$insertBtn.onclick=this.insert_color.bind(this),this.$colorSelector.onchange=this.change_color.bind(this);case 16:case"end":return t.stop()}}),t,this)}))),function(t){return l.apply(this,arguments)})},{key:"run",value:(a=c(i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.$page.show();case 1:case"end":return t.stop()}}),t,this)}))),function(){return a.apply(this,arguments)})},{key:"load_colors",value:function(){var t=this;fetch(this.baseUrl+"colors.json").then((function(t){return t.json()})).then((function(e){e.forEach((function(e){var r=n()("option",{value:e.colorCode,textContent:e.className});t.$colorSelector.append(r)}))}))}},{key:"change_color",value:function(){this.$outputDiv.style.background=this.$colorSelector.value}},{key:"insert_color",value:function(){editorManager.editor.insert(this.$colorSelector.value),this.$page.hide()}},{key:"destroy",value:(o=c(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e={name:"Tailwind Palette",description:"Tailwind Color Palette",exec:this.run.bind(this)},editorManager.editor.commands.removeCommand(e);case 2:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)})}],r&&u(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();if(window.acode){var s=new l;acode.setPluginInit(t.id,(function(t,e,r){var n=r.cacheFileUrl,o=r.cacheFile;t.endsWith("/")||(t+="/"),s.baseUrl=t,s.init(e,o,n)})),acode.setPluginUnmount(t.id,(function(){s.destroy()}))}})()})();