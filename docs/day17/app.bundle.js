!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=31)}([function(t,n,r){(function(n){var r="object",e=function(t){return t&&t.Math==Math&&t};t.exports=e(typeof globalThis==r&&globalThis)||e(typeof window==r&&window)||e(typeof self==r&&self)||e(typeof n==r&&n)||Function("return this")()}).call(this,r(33))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n,r){var e=r(7),o=r(22),i=r(19);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(0),o=r(18).f,i=r(5),u=r(23),c=r(14),a=r(40),f=r(50);t.exports=function(t,n){var r,l,s,p,v,h=t.target,d=t.global,g=t.stat;if(r=d?e:g?e[h]||c(h,{}):(e[h]||{}).prototype)for(l in n){if(p=n[l],s=t.noTargetGet?(v=o(r,l))&&v.value:r[l],!f(d?l:h+(g?".":"#")+l,t.forced)&&void 0!==s){if(typeof p==typeof s)continue;a(p,s)}(t.sham||s&&s.sham)&&i(p,"sham",!0),u(r,l,p,t)}}},function(t,n,r){var e=r(1);t.exports=!e(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,r){var e=r(12),o=r(2);t.exports=function(t){return e(o(t))}},function(t,n,r){var e=r(3);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,r){var e=r(0),o=r(14),i=r(36),u=e["__core-js_shared__"]||o("__core-js_shared__",{});(t.exports=function(t,n){return u[t]||(u[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.2.1",mode:i?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n,r){var e=r(1),o=r(13),i="".split;t.exports=e(function(){return!Object("z").propertyIsEnumerable(0)})?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(0),o=r(5);t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}},function(t,n,r){var e=r(11),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n,r){var e=r(2);t.exports=function(t){return Object(e(t))}},function(t,n,r){var e=r(0),o=r(10),i=r(25),u=r(56),c=e.Symbol,a=o("wks");t.exports=function(t){return a[t]||(a[t]=u&&c[t]||(u?c:i)("Symbol."+t))}},function(t,n,r){var e=r(7),o=r(34),i=r(19),u=r(8),c=r(20),a=r(4),f=r(21),l=Object.getOwnPropertyDescriptor;n.f=e?l:function(t,n){if(t=u(t),n=c(n,!0),f)try{return l(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(3);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,r){var e=r(7),o=r(1),i=r(35);t.exports=!e&&!o(function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a})},function(t,n,r){var e=r(7),o=r(21),i=r(9),u=r(20),c=Object.defineProperty;n.f=e?c:function(t,n,r){if(i(t),n=u(n,!0),i(r),o)try{return c(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(0),o=r(10),i=r(5),u=r(4),c=r(14),a=r(24),f=r(37),l=f.get,s=f.enforce,p=String(a).split("toString");o("inspectSource",function(t){return a.call(t)}),(t.exports=function(t,n,r,o){var a=!!o&&!!o.unsafe,f=!!o&&!!o.enumerable,l=!!o&&!!o.noTargetGet;"function"==typeof r&&("string"!=typeof n||u(r,"name")||i(r,"name",n),s(r).source=p.join("string"==typeof n?n:"")),t!==e?(a?!l&&t[n]&&(f=!0):delete t[n],f?t[n]=r:i(t,n,r)):f?t[n]=r:c(n,r)})(Function.prototype,"toString",function(){return"function"==typeof this&&l(this).source||a.call(this)})},function(t,n,r){var e=r(10);t.exports=e("native-function-to-string",Function.toString)},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},function(t,n){t.exports={}},function(t,n,r){"use strict";var e=r(1);t.exports=function(t,n){var r=[][t];return!r||!e(function(){r.call(null,n||function(){throw 1},1)})}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,r){"use strict";var e,o,i=r(61),u=RegExp.prototype.exec,c=String.prototype.replace,a=u,f=(e=/a/,o=/b*/g,u.call(e,"a"),u.call(o,"a"),0!==e.lastIndex||0!==o.lastIndex),l=void 0!==/()??/.exec("")[1];(f||l)&&(a=function(t){var n,r,e,o,a=this;return l&&(r=new RegExp("^"+a.source+"$(?!\\s)",i.call(a))),f&&(n=a.lastIndex),e=u.call(a,t),f&&e&&(a.lastIndex=a.global?e.index+e[0].length:n),l&&e&&e.length>1&&c.call(e[0],r,function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(e[o]=void 0)}),e}),t.exports=a},function(t,n){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},function(t,n,r){"use strict";r.r(n);r(32),r(51),r(58),r(59),r(65),r(68);var e=document.getElementById("app"),o=document.createElement("ul");e.append(o);var i=function(t){return t.replace(/^(a |the |an )/i,"").trim()},u=["The Plot in You","The Devil Wears Prada","Pierce the Veil","Norma Jean","The Bled","Say Anything","The Midway State","We Came as Romans","Counterparts","Oh, Sleeper","A Skylit Drive","Anywhere But Here","An Old Dog"].sort(function(t,n){return i(t)>i(n)?1:-1});o.innerHTML=u.map(function(t){return"<li>".concat(t,"</li>")}).join(""),console.log(u)},function(t,n,r){"use strict";var e=r(6),o=r(12),i=r(8),u=r(27),c=[].join,a=o!=Object,f=u("join",",");e({target:"Array",proto:!0,forced:a||f},{join:function(t){return c.call(i(this),void 0===t?",":t)}})},function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:e},function(t,n,r){var e=r(0),o=r(3),i=e.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,n){t.exports=!1},function(t,n,r){var e,o,i,u=r(38),c=r(0),a=r(3),f=r(5),l=r(4),s=r(39),p=r(26),v=c.WeakMap;if(u){var h=new v,d=h.get,g=h.has,y=h.set;e=function(t,n){return y.call(h,t,n),n},o=function(t){return d.call(h,t)||{}},i=function(t){return g.call(h,t)}}else{var x=s("state");p[x]=!0,e=function(t,n){return f(t,x,n),n},o=function(t){return l(t,x)?t[x]:{}},i=function(t){return l(t,x)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!a(n)||(r=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},function(t,n,r){var e=r(0),o=r(24),i=e.WeakMap;t.exports="function"==typeof i&&/native code/.test(o.call(i))},function(t,n,r){var e=r(10),o=r(25),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n,r){var e=r(4),o=r(41),i=r(18),u=r(22);t.exports=function(t,n){for(var r=o(n),c=u.f,a=i.f,f=0;f<r.length;f++){var l=r[f];e(t,l)||c(t,l,a(n,l))}}},function(t,n,r){var e=r(42),o=r(44),i=r(49),u=r(9);t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(u(t)),r=i.f;return r?n.concat(r(t)):n}},function(t,n,r){var e=r(43),o=r(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t])||i(o[t]):e[t]&&e[t][n]||o[t]&&o[t][n]}},function(t,n,r){t.exports=r(0)},function(t,n,r){var e=r(45),o=r(48).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,n,r){var e=r(4),o=r(8),i=r(46).indexOf,u=r(26);t.exports=function(t,n){var r,c=o(t),a=0,f=[];for(r in c)!e(u,r)&&e(c,r)&&f.push(r);for(;n.length>a;)e(c,r=n[a++])&&(~i(f,r)||f.push(r));return f}},function(t,n,r){var e=r(8),o=r(15),i=r(47),u=function(t){return function(n,r,u){var c,a=e(n),f=o(a.length),l=i(u,f);if(t&&r!=r){for(;f>l;)if((c=a[l++])!=c)return!0}else for(;f>l;l++)if((t||l in a)&&a[l]===r)return t||l||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},function(t,n,r){var e=r(11),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(1),o=/#|\.prototype\./,i=function(t,n){var r=c[u(t)];return r==f||r!=a&&("function"==typeof n?e(n):!!n)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,n,r){"use strict";var e=r(6),o=r(52).map;e({target:"Array",proto:!0,forced:!r(57)("map")},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,r){var e=r(53),o=r(12),i=r(16),u=r(15),c=r(54),a=[].push,f=function(t){var n=1==t,r=2==t,f=3==t,l=4==t,s=6==t,p=5==t||s;return function(v,h,d,g){for(var y,x,m=i(v),b=o(m),S=e(h,d,3),w=u(b.length),O=0,j=g||c,E=n?j(v,w):r?j(v,0):void 0;w>O;O++)if((p||O in b)&&(x=S(y=b[O],O,m),t))if(n)E[O]=x;else if(x)switch(t){case 3:return!0;case 5:return y;case 6:return O;case 2:a.call(E,y)}else if(l)return!1;return s?-1:f||l?l:E}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},function(t,n,r){var e=r(28);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 0:return function(){return t.call(n)};case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,r){var e=r(3),o=r(55),i=r(17)("species");t.exports=function(t,n){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?e(r)&&null===(r=r[i])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===n?0:n)}},function(t,n,r){var e=r(13);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,n,r){var e=r(1);t.exports=!!Object.getOwnPropertySymbols&&!e(function(){return!String(Symbol())})},function(t,n,r){var e=r(1),o=r(17)("species");t.exports=function(t){return!e(function(){var n=[];return(n.constructor={})[o]=function(){return{foo:1}},1!==n[t](Boolean).foo})}},function(t,n,r){"use strict";var e=r(6),o=r(28),i=r(16),u=r(1),c=r(27),a=[].sort,f=[1,2,3],l=u(function(){f.sort(void 0)}),s=u(function(){f.sort(null)}),p=c("sort");e({target:"Array",proto:!0,forced:l||!s||p},{sort:function(t){return void 0===t?a.call(i(this)):a.call(i(this),o(t))}})},function(t,n,r){"use strict";var e=r(60),o=r(9),i=r(16),u=r(15),c=r(11),a=r(2),f=r(62),l=r(64),s=Math.max,p=Math.min,v=Math.floor,h=/\$([$&'`]|\d\d?|<[^>]*>)/g,d=/\$([$&'`]|\d\d?)/g;e("replace",2,function(t,n,r){return[function(r,e){var o=a(this),i=null==r?void 0:r[t];return void 0!==i?i.call(r,o,e):n.call(String(o),r,e)},function(t,i){var a=r(n,t,this,i);if(a.done)return a.value;var v=o(t),h=String(this),d="function"==typeof i;d||(i=String(i));var g=v.global;if(g){var y=v.unicode;v.lastIndex=0}for(var x=[];;){var m=l(v,h);if(null===m)break;if(x.push(m),!g)break;""===String(m[0])&&(v.lastIndex=f(h,u(v.lastIndex),y))}for(var b,S="",w=0,O=0;O<x.length;O++){m=x[O];for(var j=String(m[0]),E=s(p(c(m.index),h.length),0),A=[],P=1;P<m.length;P++)A.push(void 0===(b=m[P])?b:String(b));var T=m.groups;if(d){var M=[j].concat(A,E,h);void 0!==T&&M.push(T);var _=String(i.apply(void 0,M))}else _=e(j,h,E,A,T,i);E>=w&&(S+=h.slice(w,E)+_,w=E+j.length)}return S+h.slice(w)}];function e(t,r,e,o,u,c){var a=e+t.length,f=o.length,l=d;return void 0!==u&&(u=i(u),l=h),n.call(c,l,function(n,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,e);case"'":return r.slice(a);case"<":c=u[i.slice(1,-1)];break;default:var l=+i;if(0===l)return n;if(l>f){var s=v(l/10);return 0===s?n:s<=f?void 0===o[s-1]?i.charAt(1):o[s-1]+i.charAt(1):n}c=o[l-1]}return void 0===c?"":c})}})},function(t,n,r){"use strict";var e=r(5),o=r(23),i=r(1),u=r(17),c=r(29),a=u("species"),f=!i(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),l=!i(function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]});t.exports=function(t,n,r,s){var p=u(t),v=!i(function(){var n={};return n[p]=function(){return 7},7!=""[t](n)}),h=v&&!i(function(){var n=!1,r=/a/;return r.exec=function(){return n=!0,null},"split"===t&&(r.constructor={},r.constructor[a]=function(){return r}),r[p](""),!n});if(!v||!h||"replace"===t&&!f||"split"===t&&!l){var d=/./[p],g=r(p,""[t],function(t,n,r,e,o){return n.exec===c?v&&!o?{done:!0,value:d.call(n,r,e)}:{done:!0,value:t.call(r,n,e)}:{done:!1}}),y=g[0],x=g[1];o(String.prototype,t,y),o(RegExp.prototype,p,2==n?function(t,n){return x.call(t,this,n)}:function(t){return x.call(t,this)}),s&&e(RegExp.prototype[p],"sham",!0)}}},function(t,n,r){"use strict";var e=r(9);t.exports=function(){var t=e(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,r){"use strict";var e=r(63).charAt;t.exports=function(t,n,r){return n+(r?e(t,n).length:1)}},function(t,n,r){var e=r(11),o=r(2),i=function(t){return function(n,r){var i,u,c=String(o(n)),a=e(r),f=c.length;return a<0||a>=f?t?"":void 0:(i=c.charCodeAt(a))<55296||i>56319||a+1===f||(u=c.charCodeAt(a+1))<56320||u>57343?t?c.charAt(a):i:t?c.slice(a,a+2):u-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,n,r){var e=r(13),o=r(29);t.exports=function(t,n){var r=t.exec;if("function"==typeof r){var i=r.call(t,n);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==e(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,n)}},function(t,n,r){"use strict";var e=r(6),o=r(66).trim;e({target:"String",proto:!0,forced:r(67)("trim")},{trim:function(){return o(this)}})},function(t,n,r){var e=r(2),o="["+r(30)+"]",i=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),c=function(t){return function(n){var r=String(e(n));return 1&t&&(r=r.replace(i,"")),2&t&&(r=r.replace(u,"")),r}};t.exports={start:c(1),end:c(2),trim:c(3)}},function(t,n,r){var e=r(1),o=r(30);t.exports=function(t){return e(function(){return!!o[t]()||"​᠎"!="​᠎"[t]()||o[t].name!==t})}},function(t,n,r){}]);