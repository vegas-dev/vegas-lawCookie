// @vegas-VGLawCookie v1.0.1
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).window=e.window||{})}(this,(function(e){"use strict";function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}
/*! js-cookie v3.0.1 | MIT */
function n(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)e[o]=n[o]}return e}var o=function e(t,o){function r(e,r,i){if("undefined"!=typeof document){"number"==typeof(i=n({},o,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var c="";for(var a in i)i[a]&&(c+="; "+a,!0!==i[a]&&(c+="="+i[a].split(";")[0]));return document.cookie=e+"="+t.write(r,e)+c}}return Object.create({set:r,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],o={},r=0;r<n.length;r++){var i=n[r].split("="),c=i.slice(1).join("=");try{var a=decodeURIComponent(i[0]);if(o[a]=t.read(c,a),e===a)break}catch(e){}}return e?o[e]:o}},remove:function(e,t){r(e,"",n({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,n({},this.attributes,t))},withConverter:function(t){return e(n({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(o)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"}),r=function(){function e(t){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.container=document.getElementById("vg-lawCookie"),!this.container)return console.error("Товарищ! Не найдена разметка под куки!"),!1;this.settings=Object.assign({},t),this.init()}var n,r,i;return n=e,(r=[{key:"init",value:function(){var e=this;o.get("lawCookie")||(setTimeout((function(){e.container.classList.add("show")}),500),e.container.querySelector("[data-ls-confirm]").onclick=function(){return e.container.classList.remove("show"),o.set("lawCookie","yes"),!1})}}])&&t(n.prototype,r),i&&t(n,i),Object.defineProperty(n,"prototype",{writable:!1}),e}();document.addEventListener("DOMContentLoaded",(function(){new r})),e.VGLawCookie=r}));
