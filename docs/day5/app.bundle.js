!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=31)}([function(t,n,r){(function(n){var r="object",e=function(t){return t&&t.Math==Math&&t};t.exports=e(typeof globalThis==r&&globalThis)||e(typeof window==r&&window)||e(typeof self==r&&self)||e(typeof n==r&&n)||Function("return this")()}).call(this,r(33))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(4),o=r(12),i=r(18);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(1);t.exports=!e(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n,r){var e=r(2);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,r){var e=r(0),o=r(13),i=r(36),u=e["__core-js_shared__"]||o("__core-js_shared__",{});(t.exports=function(t,n){return u[t]||(u[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.2.1",mode:i?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n,r){var e=r(0),o=r(7),i=r(25),u=r(47),c=e.Symbol,f=o("wks");t.exports=function(t){return f[t]||(f[t]=u&&c[t]||(u?c:i)("Symbol."+t))}},function(t,n,r){var e=r(19),o=r(11);t.exports=function(t){return e(o(t))}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,r){var e=r(4),o=r(21),i=r(6),u=r(20),c=Object.defineProperty;n.f=e?c:function(t,n,r){if(i(t),n=u(n,!0),i(r),o)try{return c(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(0),o=r(3);t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}},function(t,n){t.exports={}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,r){var e=r(0),o=r(17).f,i=r(3),u=r(35),c=r(13),f=r(39),a=r(45);t.exports=function(t,n){var r,s,l,p,v,d=t.target,y=t.global,h=t.stat;if(r=y?e:h?e[d]||c(d,{}):(e[d]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(v=o(r,s))&&v.value:r[s],!a(y?s:d+(h?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;f(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),u(r,s,p,t)}}},function(t,n,r){var e=r(4),o=r(34),i=r(18),u=r(9),c=r(20),f=r(5),a=r(21),s=Object.getOwnPropertyDescriptor;n.f=e?s:function(t,n){if(t=u(t),n=c(n,!0),a)try{return s(t,n)}catch(t){}if(f(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(1),o=r(10),i="".split;t.exports=e(function(){return!Object("z").propertyIsEnumerable(0)})?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,r){var e=r(2);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,r){var e=r(4),o=r(1),i=r(22);t.exports=!e&&!o(function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a})},function(t,n,r){var e=r(0),o=r(2),i=e.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,n,r){var e=r(7);t.exports=e("native-function-to-string",Function.toString)},function(t,n,r){var e=r(7),o=r(25),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},function(t,n,r){var e=r(41),o=r(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t])||i(o[t]):e[t]&&e[t][n]||o[t]&&o[t][n]}},function(t,n,r){var e=r(5),o=r(9),i=r(28).indexOf,u=r(14);t.exports=function(t,n){var r,c=o(t),f=0,a=[];for(r in c)!e(u,r)&&e(c,r)&&a.push(r);for(;n.length>f;)e(c,r=n[f++])&&(~i(a,r)||a.push(r));return a}},function(t,n,r){var e=r(9),o=r(29),i=r(43),u=function(t){return function(n,r,u){var c,f=e(n),a=o(f.length),s=i(u,a);if(t&&r!=r){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},function(t,n,r){var e=r(30),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n,r){"use strict";r.r(n);r(32),r(52),r(56),r(66);var e=document.getElementById("app"),o=document.createElement("div");o.classList.add("panels");for(var i=0;i<5;i++){var u=document.createElement("div");u.classList.add("panel","panel".concat(i+1));var c=document.createElement("p");c.textContent="Upper Text";var f=document.createElement("p");f.textContent="Panel".concat(i+1);var a=document.createElement("p");a.textContent="Bottom Text",u.append(c,f,a),o.append(u)}e.append(o);var s=document.querySelectorAll(".panel");function l(){this.classList.toggle("open")}function p(t){t.propertyName.includes("flex")&&this.classList.toggle("is-active")}s.forEach(function(t){return t.addEventListener("click",l)}),s.forEach(function(t){return t.addEventListener("transitionend",p)})},function(t,n,r){"use strict";var e=r(16),o=r(28).includes,i=r(46);e({target:"Array",proto:!0},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:e},function(t,n,r){var e=r(0),o=r(7),i=r(3),u=r(5),c=r(13),f=r(23),a=r(37),s=a.get,l=a.enforce,p=String(f).split("toString");o("inspectSource",function(t){return f.call(t)}),(t.exports=function(t,n,r,o){var f=!!o&&!!o.unsafe,a=!!o&&!!o.enumerable,s=!!o&&!!o.noTargetGet;"function"==typeof r&&("string"!=typeof n||u(r,"name")||i(r,"name",n),l(r).source=p.join("string"==typeof n?n:"")),t!==e?(f?!s&&t[n]&&(a=!0):delete t[n],a?t[n]=r:i(t,n,r)):a?t[n]=r:c(n,r)})(Function.prototype,"toString",function(){return"function"==typeof this&&s(this).source||f.call(this)})},function(t,n){t.exports=!1},function(t,n,r){var e,o,i,u=r(38),c=r(0),f=r(2),a=r(3),s=r(5),l=r(24),p=r(14),v=c.WeakMap;if(u){var d=new v,y=d.get,h=d.has,x=d.set;e=function(t,n){return x.call(d,t,n),n},o=function(t){return y.call(d,t)||{}},i=function(t){return h.call(d,t)}}else{var g=l("state");p[g]=!0,e=function(t,n){return a(t,g,n),n},o=function(t){return s(t,g)?t[g]:{}},i=function(t){return s(t,g)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!f(n)||(r=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},function(t,n,r){var e=r(0),o=r(23),i=e.WeakMap;t.exports="function"==typeof i&&/native code/.test(o.call(i))},function(t,n,r){var e=r(5),o=r(40),i=r(17),u=r(12);t.exports=function(t,n){for(var r=o(n),c=u.f,f=i.f,a=0;a<r.length;a++){var s=r[a];e(t,s)||c(t,s,f(n,s))}}},function(t,n,r){var e=r(26),o=r(42),i=r(44),u=r(6);t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(u(t)),r=i.f;return r?n.concat(r(t)):n}},function(t,n,r){t.exports=r(0)},function(t,n,r){var e=r(27),o=r(15).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,n,r){var e=r(30),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(1),o=/#|\.prototype\./,i=function(t,n){var r=c[u(t)];return r==a||r!=f&&("function"==typeof n?e(n):!!n)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},f=i.NATIVE="N",a=i.POLYFILL="P";t.exports=i},function(t,n,r){var e=r(8),o=r(48),i=r(3),u=e("unscopables"),c=Array.prototype;null==c[u]&&i(c,u,o(null)),t.exports=function(t){c[u][t]=!0}},function(t,n,r){var e=r(1);t.exports=!!Object.getOwnPropertySymbols&&!e(function(){return!String(Symbol())})},function(t,n,r){var e=r(6),o=r(49),i=r(15),u=r(14),c=r(51),f=r(22),a=r(24)("IE_PROTO"),s=function(){},l=function(){var t,n=f("iframe"),r=i.length;for(n.style.display="none",c.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),l=t.F;r--;)delete l.prototype[i[r]];return l()};t.exports=Object.create||function(t,n){var r;return null!==t?(s.prototype=e(t),r=new s,s.prototype=null,r[a]=t):r=l(),void 0===n?r:o(r,n)},u[a]=!0},function(t,n,r){var e=r(4),o=r(12),i=r(6),u=r(50);t.exports=e?Object.defineProperties:function(t,n){i(t);for(var r,e=u(n),c=e.length,f=0;c>f;)o.f(t,r=e[f++],n[r]);return t}},function(t,n,r){var e=r(27),o=r(15);t.exports=Object.keys||function(t){return e(t,o)}},function(t,n,r){var e=r(26);t.exports=e("document","documentElement")},function(t,n,r){"use strict";var e=r(16),o=r(53),i=r(11);e({target:"String",proto:!0,forced:!r(55)("includes")},{includes:function(t){return!!~String(i(this)).indexOf(o(t),arguments.length>1?arguments[1]:void 0)}})},function(t,n,r){var e=r(54);t.exports=function(t){if(e(t))throw TypeError("The method doesn't accept regular expressions");return t}},function(t,n,r){var e=r(2),o=r(10),i=r(8)("match");t.exports=function(t){var n;return e(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))}},function(t,n,r){var e=r(8)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(r){try{return n[e]=!1,"/./"[t](n)}catch(t){}}return!1}},function(t,n,r){var e=r(0),o=r(57),i=r(58),u=r(3);for(var c in o){var f=e[c],a=f&&f.prototype;if(a&&a.forEach!==i)try{u(a,"forEach",i)}catch(t){a.forEach=i}}},function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,n,r){"use strict";var e=r(59).forEach,o=r(65);t.exports=o("forEach")?function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},function(t,n,r){var e=r(60),o=r(19),i=r(62),u=r(29),c=r(63),f=[].push,a=function(t){var n=1==t,r=2==t,a=3==t,s=4==t,l=6==t,p=5==t||l;return function(v,d,y,h){for(var x,g,m=i(v),b=o(m),S=e(d,y,3),O=u(b.length),L=0,w=h||c,E=n?w(v,O):r?w(v,0):void 0;O>L;L++)if((p||L in b)&&(g=S(x=b[L],L,m),t))if(n)E[L]=g;else if(g)switch(t){case 3:return!0;case 5:return x;case 6:return L;case 2:f.call(E,x)}else if(s)return!1;return l?-1:a||s?s:E}};t.exports={forEach:a(0),map:a(1),filter:a(2),some:a(3),every:a(4),find:a(5),findIndex:a(6)}},function(t,n,r){var e=r(61);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 0:return function(){return t.call(n)};case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,r){var e=r(11);t.exports=function(t){return Object(e(t))}},function(t,n,r){var e=r(2),o=r(64),i=r(8)("species");t.exports=function(t,n){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?e(r)&&null===(r=r[i])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===n?0:n)}},function(t,n,r){var e=r(10);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,n,r){"use strict";var e=r(1);t.exports=function(t,n){var r=[][t];return!r||!e(function(){r.call(null,n||function(){throw 1},1)})}},function(t,n,r){}]);