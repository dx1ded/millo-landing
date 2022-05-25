(()=>{var e={187:e=>{"use strict";var t,n="object"==typeof Reflect?Reflect:null,r=n&&"function"==typeof n.apply?n.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};t=n&&"function"==typeof n.ownKeys?n.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var o=Number.isNaN||function(e){return e!=e};function i(){i.init.call(this)}e.exports=i,e.exports.once=function(e,t){return new Promise((function(n,r){function o(n){e.removeListener(t,i),r(n)}function i(){"function"==typeof e.removeListener&&e.removeListener("error",o),n([].slice.call(arguments))}h(e,t,i,{once:!0}),"error"!==t&&function(e,t,n){"function"==typeof e.on&&h(e,"error",t,n)}(e,o,{once:!0})}))},i.EventEmitter=i,i.prototype._events=void 0,i.prototype._eventsCount=0,i.prototype._maxListeners=void 0;var s=10;function u(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function c(e){return void 0===e._maxListeners?i.defaultMaxListeners:e._maxListeners}function a(e,t,n,r){var o,i,s,a;if(u(n),void 0===(i=e._events)?(i=e._events=Object.create(null),e._eventsCount=0):(void 0!==i.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),i=e._events),s=i[t]),void 0===s)s=i[t]=n,++e._eventsCount;else if("function"==typeof s?s=i[t]=r?[n,s]:[s,n]:r?s.unshift(n):s.push(n),(o=c(e))>0&&s.length>o&&!s.warned){s.warned=!0;var f=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");f.name="MaxListenersExceededWarning",f.emitter=e,f.type=t,f.count=s.length,a=f,console&&console.warn&&console.warn(a)}return e}function f(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function l(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},o=f.bind(r);return o.listener=n,r.wrapFn=o,o}function p(e,t,n){var r=e._events;if(void 0===r)return[];var o=r[t];return void 0===o?[]:"function"==typeof o?n?[o.listener||o]:[o]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(o):v(o,o.length)}function d(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function v(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}function h(e,t,n,r){if("function"==typeof e.on)r.once?e.once(t,n):e.on(t,n);else{if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function o(i){r.once&&e.removeEventListener(t,o),n(i)}))}}Object.defineProperty(i,"defaultMaxListeners",{enumerable:!0,get:function(){return s},set:function(e){if("number"!=typeof e||e<0||o(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");s=e}}),i.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},i.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||o(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},i.prototype.getMaxListeners=function(){return c(this)},i.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var o="error"===e,i=this._events;if(void 0!==i)o=o&&void 0===i.error;else if(!o)return!1;if(o){var s;if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var u=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw u.context=s,u}var c=i[e];if(void 0===c)return!1;if("function"==typeof c)r(c,this,t);else{var a=c.length,f=v(c,a);for(n=0;n<a;++n)r(f[n],this,t)}return!0},i.prototype.addListener=function(e,t){return a(this,e,t,!1)},i.prototype.on=i.prototype.addListener,i.prototype.prependListener=function(e,t){return a(this,e,t,!0)},i.prototype.once=function(e,t){return u(t),this.on(e,l(this,e,t)),this},i.prototype.prependOnceListener=function(e,t){return u(t),this.prependListener(e,l(this,e,t)),this},i.prototype.removeListener=function(e,t){var n,r,o,i,s;if(u(t),void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(o=-1,i=n.length-1;i>=0;i--)if(n[i]===t||n[i].listener===t){s=n[i].listener,o=i;break}if(o<0)return this;0===o?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,o),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,s||t)}return this},i.prototype.off=i.prototype.removeListener,i.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var o,i=Object.keys(n);for(r=0;r<i.length;++r)"removeListener"!==(o=i[r])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},i.prototype.listeners=function(e){return p(this,e,!0)},i.prototype.rawListeners=function(e){return p(this,e,!1)},i.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):d.call(e,t)},i.prototype.listenerCount=d,i.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}},202:function(){!function(){"use strict";function e(e){var t=!0,n=!1,r=null,o={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function i(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function s(e){var t=e.type,n=e.tagName;return!("INPUT"!==n||!o[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}function u(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function c(e){e.hasAttribute("data-focus-visible-added")&&(e.classList.remove("focus-visible"),e.removeAttribute("data-focus-visible-added"))}function a(n){n.metaKey||n.altKey||n.ctrlKey||(i(e.activeElement)&&u(e.activeElement),t=!0)}function f(e){t=!1}function l(e){i(e.target)&&(t||s(e.target))&&u(e.target)}function p(e){i(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(r),r=window.setTimeout((function(){n=!1}),100),c(e.target))}function d(e){"hidden"===document.visibilityState&&(n&&(t=!0),v())}function v(){document.addEventListener("mousemove",m),document.addEventListener("mousedown",m),document.addEventListener("mouseup",m),document.addEventListener("pointermove",m),document.addEventListener("pointerdown",m),document.addEventListener("pointerup",m),document.addEventListener("touchmove",m),document.addEventListener("touchstart",m),document.addEventListener("touchend",m)}function h(){document.removeEventListener("mousemove",m),document.removeEventListener("mousedown",m),document.removeEventListener("mouseup",m),document.removeEventListener("pointermove",m),document.removeEventListener("pointerdown",m),document.removeEventListener("pointerup",m),document.removeEventListener("touchmove",m),document.removeEventListener("touchstart",m),document.removeEventListener("touchend",m)}function m(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,h())}document.addEventListener("keydown",a,!0),document.addEventListener("mousedown",f,!0),document.addEventListener("pointerdown",f,!0),document.addEventListener("touchstart",f,!0),document.addEventListener("visibilitychange",d,!0),v(),e.addEventListener("focus",l,!0),e.addEventListener("blur",p,!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}()},33:(e,t,n)=>{var r=n(927),o=n(919);function i(e,t){o(t).each((function(t,n){void 0===e[t]&&(e[t]=n)}))}e.exports=function(e,t){1==arguments.length&&(t=e,e={});function n(e){t(null,o(e.coords).clone().set("timestamp",e.timestamp).get())}t=r(t),i(e,{timeout:5e3,maximumAge:6e4,enableHighAccuracy:!0}),navigator.geolocation.getCurrentPosition(n,t,e)}},927:e=>{function t(e){var t=!1;return function(){if(!t)return t=!0,e.apply(this,arguments)}}e.exports=t,t.proto=t((function(){Object.defineProperty(Function.prototype,"once",{value:function(){return t(this)},configurable:!0})}))},919:e=>{function t(e,n){if(!(this instanceof t))return new t(e,n);this.obj=e||{},this.par=n}function n(e){return function(){return e.apply(this,arguments),this}}e.exports=t,t.prototype.use=n((function(e){this.obj=e(this.obj)})),t.prototype.set=n((function(e,t){this.obj[e]=t})),t.prototype.get=function(e){return e?this.obj[e]:this.obj},t.prototype.sub=function(e){var n=this.obj;return n[e]||(n[e]={}),t(n[e],this)},t.prototype.tmp=function(){return t({},this)},t.prototype.out=function(){return this.par},t.prototype.keys=function(){return Object.keys(this.obj)},t.prototype.parEach=n((function(e){var t=this;t.par.keys().forEach((function(n){e.call(t,n,t.par.get(n))}))})),t.prototype.each=n((function(e){var t=this;t.keys().forEach((function(n){e.call(t,n,t.get(n))}))})),t.prototype.clone=function(){return this.tmp({}).parEach((function(e,t){this.set(e,t)}))}},788:(e,t,n)=>{var r=n(33),o=n(187).EventEmitter,i=n(539).inherits;function s(){if(!(this instanceof s))return new s;o.call(this),this.iframe=document.createElement("iframe"),this._position=null,this._radius=.004}e.exports=s,i(s,o),s.prototype.radius=function(e){return this._radius=e,this},s.prototype.position=function(e,t){return this._position={latitude:e,longitude:t},this.emit("position",this._position),this},s.prototype.show=function(){var e=this,t=e.iframe,n=e._radius;function o(r,o){if(r)return e.emit("error",r);e.emit("position",o);var i=o.longitude,s=o.latitude;t.src="http://www.openstreetmap.org/export/embed.html?layer=mapnik&bbox="+[i-n/2,s-n/4,i+n/2,s+n/4].join(",")+"&marker="+[s,i].join(",")}return e._position?o(null,e._position):r((function(e,t){o(e,t)})),t}},496:e=>{"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},384:e=>{e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},539:(e,t,n)=>{var r=/%[sdj%]/g;t.format=function(e){if(!m(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(s(arguments[n]));return t.join(" ")}n=1;for(var o=arguments,i=o.length,u=String(e).replace(r,(function(e){if("%%"===e)return"%";if(n>=i)return e;switch(e){case"%s":return String(o[n++]);case"%d":return Number(o[n++]);case"%j":try{return JSON.stringify(o[n++])}catch(e){return"[Circular]"}default:return e}})),c=o[n];n<i;c=o[++n])v(c)||!g(c)?u+=" "+c:u+=" "+s(c);return u},t.deprecate=function(e,r){if(y(n.g.process))return function(){return t.deprecate(e,r).apply(this,arguments)};if(!0===process.noDeprecation)return e;var o=!1;return function(){if(!o){if(process.throwDeprecation)throw new Error(r);process.traceDeprecation?console.trace(r):console.error(r),o=!0}return e.apply(this,arguments)}};var o,i={};function s(e,n){var r={seen:[],stylize:c};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),d(n)?r.showHidden=n:n&&t._extend(r,n),y(r.showHidden)&&(r.showHidden=!1),y(r.depth)&&(r.depth=2),y(r.colors)&&(r.colors=!1),y(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=u),a(r,e,r.depth)}function u(e,t){var n=s.styles[t];return n?"["+s.colors[n][0]+"m"+e+"["+s.colors[n][1]+"m":e}function c(e,t){return e}function a(e,n,r){if(e.customInspect&&n&&L(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,e);return m(o)||(o=a(e,o,r)),o}var i=function(e,t){if(y(t))return e.stylize("undefined","undefined");if(m(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}if(h(t))return e.stylize(""+t,"number");if(d(t))return e.stylize(""+t,"boolean");if(v(t))return e.stylize("null","null")}(e,n);if(i)return i;var s=Object.keys(n),u=function(e){var t={};return e.forEach((function(e,n){t[e]=!0})),t}(s);if(e.showHidden&&(s=Object.getOwnPropertyNames(n)),E(n)&&(s.indexOf("message")>=0||s.indexOf("description")>=0))return f(n);if(0===s.length){if(L(n)){var c=n.name?": "+n.name:"";return e.stylize("[Function"+c+"]","special")}if(b(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(w(n))return e.stylize(Date.prototype.toString.call(n),"date");if(E(n))return f(n)}var g,j="",_=!1,O=["{","}"];(p(n)&&(_=!0,O=["[","]"]),L(n))&&(j=" [Function"+(n.name?": "+n.name:"")+"]");return b(n)&&(j=" "+RegExp.prototype.toString.call(n)),w(n)&&(j=" "+Date.prototype.toUTCString.call(n)),E(n)&&(j=" "+f(n)),0!==s.length||_&&0!=n.length?r<0?b(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special"):(e.seen.push(n),g=_?function(e,t,n,r,o){for(var i=[],s=0,u=t.length;s<u;++s)S(t,String(s))?i.push(l(e,t,n,r,String(s),!0)):i.push("");return o.forEach((function(o){o.match(/^\d+$/)||i.push(l(e,t,n,r,o,!0))})),i}(e,n,r,u,s):s.map((function(t){return l(e,n,r,u,t,_)})),e.seen.pop(),function(e,t,n){if(e.reduce((function(e,t){return t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1];return n[0]+t+" "+e.join(", ")+" "+n[1]}(g,j,O)):O[0]+j+O[1]}function f(e){return"["+Error.prototype.toString.call(e)+"]"}function l(e,t,n,r,o,i){var s,u,c;if((c=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]}).get?u=c.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):c.set&&(u=e.stylize("[Setter]","special")),S(r,o)||(s="["+o+"]"),u||(e.seen.indexOf(c.value)<0?(u=v(n)?a(e,c.value,null):a(e,c.value,n-1)).indexOf("\n")>-1&&(u=i?u.split("\n").map((function(e){return"  "+e})).join("\n").substr(2):"\n"+u.split("\n").map((function(e){return"   "+e})).join("\n")):u=e.stylize("[Circular]","special")),y(s)){if(i&&o.match(/^\d+$/))return u;(s=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=e.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=e.stylize(s,"string"))}return s+": "+u}function p(e){return Array.isArray(e)}function d(e){return"boolean"==typeof e}function v(e){return null===e}function h(e){return"number"==typeof e}function m(e){return"string"==typeof e}function y(e){return void 0===e}function b(e){return g(e)&&"[object RegExp]"===j(e)}function g(e){return"object"==typeof e&&null!==e}function w(e){return g(e)&&"[object Date]"===j(e)}function E(e){return g(e)&&("[object Error]"===j(e)||e instanceof Error)}function L(e){return"function"==typeof e}function j(e){return Object.prototype.toString.call(e)}function _(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(e){if(y(o)&&(o=process.env.NODE_DEBUG||""),e=e.toUpperCase(),!i[e])if(new RegExp("\\b"+e+"\\b","i").test(o)){var n=process.pid;i[e]=function(){var r=t.format.apply(t,arguments);console.error("%s %d: %s",e,n,r)}}else i[e]=function(){};return i[e]},t.inspect=s,s.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},s.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=p,t.isBoolean=d,t.isNull=v,t.isNullOrUndefined=function(e){return null==e},t.isNumber=h,t.isString=m,t.isSymbol=function(e){return"symbol"==typeof e},t.isUndefined=y,t.isRegExp=b,t.isObject=g,t.isDate=w,t.isError=E,t.isFunction=L,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=n(384);var O=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function x(){var e=new Date,t=[_(e.getHours()),_(e.getMinutes()),_(e.getSeconds())].join(":");return[e.getDate(),O[e.getMonth()],t].join(" ")}function S(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){console.log("%s - %s",x(),t.format.apply(t,arguments))},t.inherits=n(496),t._extend=function(e,t){if(!t||!g(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(202);var e=n(788),t=n.n(e),r=document.querySelector("section#contacts").querySelector(".content__map"),o=t()().position(50.49086958127457,30.406033669958415).radius(.008);r.append(o.show());var i=document.querySelector("section#shops").querySelector(".content__map"),s=t()().position(50.49086958127457,30.406033669958415).radius(.008);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}i.append(s.show());var f=function(){function e(t){var n,r,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o=function(e,t){t.preventDefault(),i.tabs.forEach((function(e){return e.classList.remove(i.tabActiveClassName)})),i.sections.forEach((function(e){return e.removeAttribute("data-active")})),t.target.classList.add(i.tabActiveClassName),e.setAttribute("data-active","true")},(r="clickHandler")in(n=this)?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this.tabs=t.querySelectorAll(".tabs__item"),this.sections=c(this.tabs).map((function(e){var t=e.getAttribute("href");return document.querySelector(t)})),this.tabActiveClassName="tabs__item--active",this.init()}var t,n,r;return t=e,(n=[{key:"init",value:function(){var e=this;this.tabs.forEach((function(t){var n=document.querySelector(t.getAttribute("href"));t.addEventListener("click",e.clickHandler.bind(e,n))}))}}])&&a(t.prototype,n),r&&a(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();new f(document.querySelector(".tabs__container"))})()})();