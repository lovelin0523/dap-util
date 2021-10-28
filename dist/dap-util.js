!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Dap=t():e.Dap=t()}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}([function(e,t,r){"use strict";e.exports={formatNumber:function(e){return this.isNumber(e)?e.toString().replace(/(\d)(?=(?:\d{3})+$)/g,"$1,"):e},isNumber:function(e){return"number"==typeof e&&!isNaN(e)},add:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.reduce(function(e,t){var r,n=0,o=0;try{n=e.toString().split(".")[1].length}catch(e){}try{o=t.toString().split(".")[1].length}catch(e){}return(e*(r=Math.pow(10,Math.max(n,o)))+t*r)/r})},subtract:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.reduce(function(e,t){var r,n=0,o=0;try{n=e.toString().split(".")[1].length}catch(e){}try{o=t.toString().split(".")[1].length}catch(e){}return(e*(r=Math.pow(10,Math.max(n,o)))-t*r)/r})},mutiply:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.reduce(function(e,t){var r=0,n=e.toString(),o=t.toString();try{r+=n.split(".")[1].length}catch(e){}try{r+=o.split(".")[1].length}catch(e){}return Number(n.replace(".",""))*Number(o.replace(".",""))/Math.pow(10,r)})},divide:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.reduce(function(e,t){var r=0,n=0,o=e.toString(),i=t.toString();try{r=o.split(".")[1].length}catch(e){}try{n=i.split(".")[1].length}catch(e){}return(o=Number(o.replace(".","")))/(i=Number(i.replace(".","")))*Math.pow(10,n-r)})}}},function(e,t,r){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var o=r(4),i=r(0);e.exports={getElementPoint:function(e,t){if(!this.isElement(e))throw new TypeError("The first argument must be an element");if(this.isElement(t)||(t=document.body),!this.isContains(t,e))throw new Error("The second argument and the first argument have no hierarchical relationship");for(var r=e,n=0,o=0;this.isElement(e)&&this.isContains(t,e)&&t!==e;)n+=e.offsetTop,o+=e.offsetLeft,e=e.offsetParent;return{top:n,left:o,right:t.offsetWidth-o-r.offsetWidth,bottom:t.offsetHeight-n-r.offsetHeight}},isContains:function(e,t){if(!this.isElement(e))throw new TypeError("The first argument must be an element");if(!this.isElement(t))throw new TypeError("The second argument must be an element");return e===t||(e.contains?e.contains(t):e.compareDocumentPosition?!!(16&e.compareDocumentPosition(t)):void 0)},isParentNode:function(e,t){if(!this.isElement(e))throw new TypeError("The first argument must be an element");if(!this.isElement(t))throw new TypeError("The second argument must be an element");return e!==t&&t.parentNode===e},children:function(e,t){if(!this.isElement(e))throw new TypeError("The first argument must be an element");if(t&&"string"!=typeof t)throw new TypeError("The second argument must be a string");var r=e.querySelectorAll(t||"*");return[].concat(n(r)).filter(function(t){return t.parentNode===e})},siblings:function(e,t){if(!this.isElement(e))throw new TypeError("The first argument must be an element");if(t&&"string"!=typeof t)throw new TypeError("The second argument must be a string");if(!e.parentNode)return[];var r=e.parentNode.querySelectorAll(t||"*");return[].concat(n(r)).filter(function(t){return t.parentNode===e.parentNode&&t!=e})},rem2px:function(e){if(!i.isNumber(e))throw new TypeError("The argument must be a number");var t=this.getCssStyle(document.documentElement,"font-size");return i.mutiply(e,parseFloat(t))},px2rem:function(e){if(!i.isNumber(e))throw new TypeError("The argument must be a number");var t=this.getCssStyle(document.documentElement,"font-size");return i.divide(e,parseFloat(t))},width:function(e){"string"==typeof e&&e&&(e=document.body.querySelector(e)),this.isElement(e)||(e=document.body);var t=e.clientWidth,r=parseFloat(this.getCssStyle(e,"padding-left")),n=parseFloat(this.getCssStyle(e,"padding-right"));return i.subtract(t,r,n)},height:function(e){"string"==typeof e&&e&&(e=document.body.querySelector(e)),this.isElement(e)||(e=document.body);var t=e.clientHeight,r=parseFloat(this.getCssStyle(e,"padding-top")),n=parseFloat(this.getCssStyle(e,"padding-bottom"));return i.subtract(t,r,n)},removeClass:function(e,t){if(!this.isElement(e))throw new TypeError("The first argument must be an element");if(!t||"string"!=typeof t)throw new TypeError("The second argument must be a string");var r=e.classList;o.trim(t).split(/\s+/).forEach(function(e,t){r.remove(e)})},addClass:function(e,t){if(!this.isElement(e))throw new TypeError("The first argument must be an element");if(!t||"string"!=typeof t)throw new TypeError("The second argument must be a string");var r=e.classList;o.trim(t).split(/\s+/).forEach(function(e,t){r.add(e)})},hasClass:function(e,t){if(!this.isElement(e))throw new TypeError("The first argument must be an element");if(!t||"string"!=typeof t)throw new TypeError("The second argument must be a string");var r=e.classList;return o.trim(t).split(/\s+/).every(function(e,t){return r.contains(e)})},scrollTopBottomTrigger:function(e,t){var r=this;"string"==typeof e&&e&&(e=document.body.querySelector(e));var n=window;this.isElement(e)&&e!=document.body&&e!=document.documentElement&&(n=e),"function"==typeof e&&(t=e);var o=!0;n.addEventListener("scroll",function(e){if(r.getScrollTop(n)<=0){var s={state:"top",target:n};if(!o)return;"function"==typeof t&&(o=!1,t(s))}else{var a={state:"bottom",target:n},u=0;if(n==window)u=window.innerHeight;else{var c=parseFloat(r.getCssStyle(n,"border-top-width")),l=parseFloat(r.getCssStyle(n,"border-bottom-width"));u=i.subtract(n.offsetHeight,c,l)}if(i.add(r.getScrollTop(n),u)>=r.getScrollHeight(n)&&u!=r.getScrollHeight(n)){if(!o)return;"function"==typeof t&&(o=!1,t(a))}else o=!0}})},getScrollWidth:function(e){"string"==typeof e&&e&&(e=document.body.querySelector(e));return this.isElement(e)&&e!=document.documentElement&&e!=document.body&&e!=window?e.scrollWidth:0==document.documentElement.scrollWidth||0==document.body.scrollWidth?document.documentElement.scrollWidth||document.body.scrollWidth:document.documentElement.scrollWidth>document.body.scrollWidth?document.documentElement.scrollWidth:document.body.scrollWidth},getScrollHeight:function(e){"string"==typeof e&&e&&(e=document.body.querySelector(e));return this.isElement(e)&&e!=document.documentElement&&e!=document.body&&e!=window?e.scrollHeight:0==document.documentElement.scrollHeight||0==document.body.scrollHeight?document.documentElement.scrollHeight||document.body.scrollHeight:document.documentElement.scrollHeight>document.body.scrollHeight?document.documentElement.scrollHeight:document.body.scrollHeight},setScrollTop:function(e){var t=this,r=!1,n=e.el;"string"==typeof n&&n&&(n=document.body.querySelector(n));var o=e.number||0,s=e.time||0;return this.isElement(n)&&n!=document.body&&n!=document.documentElement&&n!=window||(r=!0),new Promise(function(e,a){if(s<=0)r?document.documentElement.scrollTop=document.body.scrollTop=o:n.scrollTop=o,e();else var u=i.divide(s,10),c=t.getScrollTop(n),l=i.divide(i.subtract(o,c),u),d=setInterval(function(){u>0?(u--,r?document.documentElement.scrollTop=document.body.scrollTop=c=i.add(c,l):n.scrollTop=c=i.add(c,l)):(clearInterval(d),e())},10)})},getScrollTop:function(e){"string"==typeof e&&e&&(e=document.body.querySelector(e));return this.isElement(e)&&e!=document.body&&e!=document.documentElement&&e!=window?e.scrollTop:0==document.documentElement.scrollTop||0==document.body.scrollTop?document.documentElement.scrollTop||document.body.scrollTop:document.documentElement.scrollTop>document.body.scrollTop?document.documentElement.scrollTop:document.body.scrollTop},getScrollLeft:function(e){"string"==typeof e&&e&&(e=document.body.querySelector(e));return this.isElement(e)&&e!=document.body&&e!=document.documentElement&&e!=window?e.scrollLeft:0==document.documentElement.scrollLeft||0==document.body.scrollLeft?document.documentElement.scrollLeft||document.body.scrollLeft:document.documentElement.scrollLeft>document.body.scrollLeft?document.documentElement.scrollLeft:document.body.scrollLeft},setScrollLeft:function(e){var t=this,r=!1,n=e.el;"string"==typeof n&&n&&(n=document.body.querySelector(n));var o=e.number||0,s=e.time||0;return this.isElement(n)&&n!=document.body&&n!=document.documentElement&&n!=window||(r=!0),new Promise(function(e,a){if(s<=0)r?document.documentElement.scrollLeft=document.body.scrollLeft=o:n.scrollLeft=o,e();else var u=i.divide(s,10),c=t.getScrollLeft(n),l=i.divide(i.subtract(o,c),u),d=setInterval(function(){u>0?(u--,r?document.documentElement.scrollLeft=document.body.scrollLeft=c=i.add(c,l):n.scrollLeft=c=i.add(c,l)):(clearInterval(d),e())},10)})},getCssStyle:function(e,t){if(!this.isElement(e))throw new TypeError("The first argument must be an element");if(!t||"string"!=typeof t)throw new TypeError("The second argument must be a string");return document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(e)[t]:e.currentStyle[t]},getCssSelector:function(e){if(!e||"string"!=typeof e)throw new TypeError("The argument must be a selector string");if(/^#{1}/.test(e))return{type:"id",value:e.substr(1)};if(/^\./.test(e))return{type:"class",value:e.substr(1)};if(/^\[(.+)\]$/.test(e)){var t="",r=o.trim(e,!0).substring(1,o.trim(e,!0).length-1).split("=");return 1==r.length&&(t=r[0]),2==r.length&&(t={attributeName:r[0],attributeValue:r[1].replace(/\'/g,"").replace(/\"/g,"")}),{type:"attribute",value:t}}return{type:"tag",value:e}},getElementBounding:function(e){"string"==typeof e&&e&&(e=document.body.querySelector(e)),this.isElement(e)||(e=document.body);var t=e.getBoundingClientRect();return{top:t.top,bottom:i.subtract(document.documentElement.clientHeight||window.innerHeight,t.bottom),left:t.left,right:i.subtract(document.documentElement.clientWidth||window.innerWidth,t.right)}},isElement:function(e){return!!(e&&1===e.nodeType&&e instanceof Node)},string2dom:function(e){if(!e||"string"!=typeof e)throw new TypeError("The argument must be an HTML string");var t=document.createElement("div");return t.innerHTML=e,1==t.children.length?t.children[0]:t.children}}},function(e,t,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=r(1);e.exports={judgeAccessTerminalBrowser:function(e){if(!e||"string"!=typeof e)throw new TypeError("The argument must be a string");var t=navigator.userAgent;return"ie"==e.toLocaleLowerCase()?t.indexOf("Trident")>-1:"opera"==e.toLocaleLowerCase()?t.indexOf("Presto")>-1:"webkit"==e.toLocaleLowerCase()?t.indexOf("AppleWebKit")>-1:"gecko"==e.toLocaleLowerCase()?t.indexOf("Gecko")>-1&&-1==t.indexOf("KHTML"):"edge"==e.toLocaleLowerCase()?!!t.match(/Edg\/([\d.]+)/):"mobile"==e.toLocaleLowerCase()?!!t.match(/AppleWebKit.*Mobile.*/):"ios"==e.toLocaleLowerCase()?!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/):"android"==e.toLocaleLowerCase()?t.indexOf("Android")>-1:"iphone"==e.toLocaleLowerCase()?t.indexOf("iPhone")>-1:"ipad"==e.toLocaleLowerCase()?t.indexOf("iPad")>-1:"webapp"==e.toLocaleLowerCase()?-1==t.indexOf("Safari"):"weixin"==e.toLocaleLowerCase()?t.indexOf("MicroMessenger")>-1:"qq"==e.toLocaleLowerCase()?t.indexOf("QQ")>-1:"qqbrowser"==e.toLocaleLowerCase()?t.indexOf("MQQBrowser")>-1:"language"==e.toLocaleLowerCase()?(navigator.browserLanguage||navigator.language).toLocaleLowerCase():"uc"==e.toLocaleLowerCase()?t.indexOf("UCBrowser")>-1:"chrome"==e.toLocaleLowerCase()?t.indexOf("Chrome")>-1:"firefox"==e.toLocaleLowerCase()?t.indexOf("Firefox")>-1:"sougou"==e.toLocaleLowerCase()?t.toLowerCase().indexOf("se 2.x")>-1:"iebrowser"==e.toLocaleLowerCase()?window.ActiveXObject||"ActiveXObject"in window:"windows"==e.toLocaleLowerCase()?t.indexOf("Windows")>-1:"tablet"==e.toLocaleLowerCase()?t.indexOf("iPad")>-1||t.indexOf("Android")>-1&&!/(?:Mobile)/.test(t)||t.indexOf("Firefox")>-1&&/(?:Tablet)/.test(t):"phone"==e.toLocaleLowerCase()?t.indexOf("Android")>-1&&/(?:Mobile)/.test(t)||t.indexOf("iPhone")>-1||/(?:Windows Phone)/.test(t):"windowsphone"==e.toLocaleLowerCase()?/(?:Windows Phone)/.test(t):"mac"==e.toLocaleLowerCase()?/macintosh|mac os x/i.test(t):"win32"==e.toLocaleLowerCase()?t.toLowerCase().indexOf("win32")>-1||t.toLowerCase().indexOf("wow32")>-1:"win64"==e.toLocaleLowerCase()&&(t.toLowerCase().indexOf("win64")>-1||t.toLowerCase().indexOf("wow64")>-1)},matchingText:function(e,t){if(!e||"string"!=typeof e)throw new TypeError("The first argument must be a string");if(!t||"string"!=typeof t)throw new TypeError("The second argument must be a string");var r=null;if("Chinese"==t&&(r=/^[\u4e00-\u9fa5]+$/),"chinese"==t&&(r=/[\u4e00-\u9fa5]/),"email"==t&&(r=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/),"userName"==t&&(r=/^[a-zA-Z0-9_]{4,16}$/),"int+"==t&&(r=/^\d+$/),"int-"==t&&(r=/^-\d+$/),"int"==t&&(r=/^-?\d+$/),"pos"==t&&(r=/^\d*\.?\d+$/),"neg"==t&&(r=/^-\d*\.?\d+$/),"number"==t&&(r=/^-?\d*\.?\d+$/),"phone"==t&&(r=/^1[0-9]\d{9}$/),"idCard"==t&&(r=/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/),"url"==t&&(r=/^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/),"IPv4"==t&&(r=/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/),"hex"==t&&(r=/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/),"date"==t){return/^((\d{4})(-)(\d{2})(-)(\d{2}))$/.test(e)||/^(\d{4})(\/)(\d{2})(\/)(\d{2})$/.test(e)||/^(\d{4})(\.)(\d{2})(\.)(\d{2})$/.test(e)||/^(\d{4})(年)(\d{2})(月)(\d{2})(日)$/.test(e)}if("time"==t&&(r=/^(20|21|22|23|[0-1]\d):[0-5]\d:[0-5]\d$/),"QQ"==t&&(r=/^[1-9][0-9]{4,10}$/),"weixin"==t&&(r=/^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/),"plate"==t&&(r=/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/),!r)throw new Error("The second parameter is out of scope");return r.test(e)},getUrlParams:function(e){if(!e||"string"!=typeof e)throw new TypeError("The argument must be a string");var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),r=window.location.search.substr(1);if(!r){var n=window.location.hash.split("?");2==n.length&&(r=n[1])}var o=r.match(t);return o?decodeURIComponent(o[2]):null},isEmptyObject:function(e){return!!this.isObject(e)&&0==Object.keys(e).length},equal:function(e,t){if((void 0===e?"undefined":n(e))!==(void 0===t?"undefined":n(t)))return!1;if(this.isObject(e)&&this.isObject(t)){e=Object.assign({},e),t=Object.assign({},t);var r=Object.getOwnPropertyNames(e),o=Object.getOwnPropertyNames(t);if(r.length!=o.length)return!1;for(var i=r.length,s=0;s<i;s++){var a=r[s],u=e[a],c=t[a];if(this.isObject(u))return!!this.equal(u,c);if(u!==c)return!1}return!0}return e===t},isObject:function(e){return!("object"!==(void 0===e?"undefined":n(e))||!e)},copyText:function(e){if(!e||"string"!=typeof e)throw new TypeError("No text to copy is defined");var t=o.string2dom("<span>"+e+"</span>");document.body.appendChild(t);var r=document.createRange();r.selectNode(t);var n=window.getSelection();n.rangeCount>0&&n.removeAllRanges(),n.addRange(r),document.execCommand("copy"),document.body.removeChild(t)}}},function(e,t,r){"use strict";var n=r(1),o="_dap-datas";e.exports={remove:function(e,t){if(!n.isElement(e)&&e!=window)throw new TypeError("The first argument must be an element");var r=e[o]||{};void 0===t||null===t||""===t?e[o]={}:(delete r[t],e[o]=r)},has:function(e,t){if(!n.isElement(e)&&e!=window)throw new TypeError("The first argument must be an element");if(void 0===t||null===t||""===t)throw new TypeError("The second parameter must be a unique key");return(e[o]||{}).hasOwnProperty(t)},get:function(e,t){if(!n.isElement(e)&&e!=window)throw new TypeError("The first argument must be an element");var r=e[o]||{};return void 0===t||null===t||""===t?r:r[t]},set:function(e,t,r){if(!n.isElement(e)&&e!=window)throw new TypeError("The first argument must be an element");if(void 0===t||null===t||""===t)throw new TypeError("The second parameter must be a unique key");var i=e[o]||{};i[t]=r,e[o]=i}}},function(e,t,r){"use strict";var n=r(0);e.exports={insert:function(e,t,r){if(!e||"string"!=typeof e)throw new TypeError("The first argument must be a string");if("string"!=typeof t)throw new TypeError("The second argument must be a string");if(!n.isNumber(r))throw new TypeError("The third argument must be a number");if(r<0)throw new Error("The third argument cannot be less than 0");return e.substr(0,r)+t+e.substring(r,e.length)},delete:function(e,t,r){if(!e||"string"!=typeof e)throw new TypeError("The first argument must be a string");if(!n.isNumber(t))throw new TypeError("The second argument must be a number");if(t<0)throw new Error("The second argument cannot be less than 0");if(!n.isNumber(r))throw new TypeError("The third argument must be a number");if(r<0)throw new Error("The third argument cannot be less than 0");return e.substr(0,t)+e.substring(t+r,e.length)},replace:function(e,t,r,o){if(!e||"string"!=typeof e)throw new TypeError("The first argument must be a string");if(!n.isNumber(t))throw new TypeError("The second argument must be a number");if(t<0)throw new Error("The second argument cannot be less than 0");if(!n.isNumber(r))throw new TypeError("The third argument must be a number");if(r<0)throw new Error("The third argument cannot be less than 0");if("string"!=typeof o)throw new TypeError("The fourth argument must be a string");return e.substring(0,t)+o+e.substring(r,e.length)},trim:function(e,t){if("string"!=typeof e)throw new TypeError("The first argument must be a string");var r=e.replace(/(^\s+)|(\s+$)/g,"");return t&&(r=r.replace(/\s/g,"")),r}}},function(e,t,r){"use strict";var n=r(0),o=r(3),i=r(1),s=r(6),a=r(2),u=r(7),c=r(8),l=r(9),d=r(4);e.exports={number:n,data:o,element:i,event:s,common:a,date:u,color:c,file:l,string:d}},function(e,t,r){"use strict";var n=r(3),o=r(1),i=r(2),s=function(e){var t=[];return e.split(/[\s]+/g).forEach(function(e){var r=e.split("."),n={eventName:r[0]};r.length>1&&(n.guid=r[1]),t.push(n)}),t},a=function(e,t,r){for(var o=n.get(e,"dap-defined-events")||{},i=Object.keys(o),s=i.length,a=0;a<s;a++){var u=i[a];o[u].type==t&&(r?u==t+"_"+r&&(e.removeEventListener(o[u].type,o[u].fn,o[u].options),o[u]=void 0):(e.removeEventListener(o[u].type,o[u].fn,o[u].options),o[u]=void 0))}o=function(e){var t={};return Object.keys(e).forEach(function(r){e[r]&&(t[r]=e[r])}),t}(o),n.set(e,"dap-defined-events",o)};e.exports={on:function(e,t,r,a){if(!o.isElement(e)&&e!=window)throw new TypeError("The first argument must be an element node");if(!t||"string"!=typeof t)throw new TypeError("The second argument must be a string");if(!r||"function"!=typeof r)throw new TypeError("The third argument must be a function");i.isObject(a)||(a={}),s(t).forEach(function(t){!function(e,t,r,o,i){var s=n.get(e,"dap-defined-events")||{};r||(r=n.get(e,"dap-event-guid")||0,n.set(e,"dap-event-guid",r+1)),s[r=t+"_"+r]&&s[r].type==t&&e.removeEventListener(t,s[r].fn,s[r].options),e.addEventListener(t,o,i),s[r]={type:t,fn:o,options:i},n.set(e,"dap-defined-events",s)}(e,t.eventName,t.guid,r.bind(e),a)})},off:function(e,t){if(!o.isElement(e)&&e!=window)throw new TypeError("The first argument must be an element node");var r=n.get(e,"dap-defined-events");if(r){if(!t){for(var i=Object.keys(r),u=i.length,c=0;c<u;c++){var l=i[c];e.removeEventListener(r[l].type,r[l].fn,r[l].options)}return n.remove(e,"dap-defined-events"),void n.remove(e,"dap-event-guid")}s(t).forEach(function(t){a(e,t.eventName,t.guid)})}}}},function(e,t,r){"use strict";var n=r(0);e.exports={getPrevMonths:function(e,t){e&&e instanceof Date||(e=new Date),n.isNumber(t)||(t=1);for(var r=[e],o=0;o<t-1;o++){var i=e.getFullYear(),s=e.getMonth();0==s&&(s=12,i--);var a=new Date;a.setMonth(s-1),a.setFullYear(i),r.push(a),e=a}return r},getNextMonths:function(e,t){e&&e instanceof Date||(e=new Date),n.isNumber(t)||(t=1);for(var r=[e],o=0;o<t-1;o++){var i=e.getFullYear(),s=e.getMonth();11==s&&(s=-1,i++);var a=new Date;a.setMonth(s+1),a.setFullYear(i),r.push(a),e=a}return r},getDateAfter:function(e,t){return e&&e instanceof Date||(e=new Date),n.isNumber(t)||(t=1),new Date(e.getTime()+24*t*60*60*1e3)},getDateBefore:function(e,t){return e&&e instanceof Date||(e=new Date),n.isNumber(t)||(t=1),new Date(e.getTime()-24*t*60*60*1e3)},getDays:function(e,t){if(!n.isNumber(e))throw new TypeError("The first parameter must be a number representing the year");if(!n.isNumber(t))throw new TypeError("The second argument must be a number representing the month");return e=parseInt(e),t=parseInt(t),new Date(e,t,0).getDate()}}},function(e,t,r){"use strict";var n=r(2);e.exports={rgb2hsv:function(e){if(!Array.isArray(e)||3!=e.length)throw new TypeError("Invalid argument");var t=0,r=0,n=0,o=e[0]>=255?255:e[0],i=e[1]>=255?255:e[1],s=e[2]>=255?255:e[2];o=o<=0?0:o,i=i<=0?0:i,s=s<=0?0:s;var a=Math.max(o,i,s),u=Math.min(o,i,s);return n=a/255,r=0===a?0:1-u/a,a===u?t=0:a===o&&i>=s?t=(i-s)/(a-u)*60+0:a===o&&i<s?t=(i-s)/(a-u)*60+360:a===i?t=(s-o)/(a-u)*60+120:a===s&&(t=(o-i)/(a-u)*60+240),[t=parseInt(t),r=parseInt(100*r),n=parseInt(100*n)]},hsv2rgb:function(e){if(!Array.isArray(e)||3!=e.length)throw new TypeError("Invalid argument");var t=e[0]>=360||e[0]<=0?0:e[0],r=e[1]>=100?100:e[1];r=r<=0?0:r;var n=e[2]>=100?100:e[2];n=n<=0?0:n,r/=100,n/=100;var o=0,i=0,s=0,a=parseInt(t/60%6),u=t/60-a,c=n*(1-r),l=n*(1-u*r),d=n*(1-(1-u)*r);switch(a){case 0:o=n,i=d,s=c;break;case 1:o=l,i=n,s=c;break;case 2:o=c,i=n,s=d;break;case 3:o=c,i=l,s=n;break;case 4:o=d,i=c,s=n;break;case 5:o=n,i=c,s=l}return[o=parseInt(255*o),i=parseInt(255*i),s=parseInt(255*s)]},rgb2hex:function(e){if(!Array.isArray(e)||3!=e.length)throw new TypeError("Invalid argument");return"#"+((1<<24)+(e[0]<<16)+(e[1]<<8)+e[2]).toString(16).slice(1)},hex2rgb:function(e){if(!e||"string"!=typeof e)throw new TypeError("The argument must be a string");var t=e.toLowerCase();if(!n.matchingText(t,"hex"))throw new TypeError("The argument must be a hexadecimal color value");if(4===t.length){for(var r="#",o=1;o<4;o+=1)r+=t.slice(o,o+1).concat(t.slice(o,o+1));t=r}for(var i=[],s=1;s<7;s+=2)i.push(parseInt("0x"+t.slice(s,s+2)));return i}}},function(e,t,r){"use strict";e.exports={getImageUrl:function(e){if(!(e&&e instanceof File))throw new TypeError("The argument must be a File object");return window.URL.createObjectURL(e)},dataFileToBase64:function(e){return new Promise(function(t,r){e&&e instanceof File||r(new TypeError("The argument must be a File object"));var n=new FileReader;n.readAsDataURL(e),n.onloadend=function(){var e=n.result;t(e)}})},dataBase64toFile:function(e,t){if(!e||"string"!=typeof e)throw new TypeError("The first argument must be a string");if(!t||"string"!=typeof t)throw new TypeError("The second argument must be a string");for(var r=e.split(","),n=r[0].match(/:(.*?);/)[1],o=atob(r[1]),i=o.length,s=new Uint8Array(i);i--;)s[i]=o.charCodeAt(i);return new File([s],t,{type:n})}}}])});