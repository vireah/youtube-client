!function(t){var n={};function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(i,o,function(n){return t[n]}.bind(null,o));return i},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=5)}([function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){"use strict";(function(t){e.d(n,"a",function(){return r});var i=e(2),o=e(3);class r{constructor(){this.state={url:"0"}}async start(n){t.console.log("waaaaath",n),this.state.url=`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&type=video&part=snippet&maxResults=15&q='+ ${n}`;const e=new i.a(this.state),r=await e.getClipNames(),a=await e.getViewCount();new o.a(r,a).render()}}}).call(this,e(0))},function(t,n,e){"use strict";(function(t){e.d(n,"a",function(){return i});class i{constructor(t){this.state=t,this.views={}}static extractClipNames(n){return t.console.log(n.items.map(t=>t.snippet)),n.items.map(t=>t.snippet)}async getClipNames(){const{url:n}=this.state,e=await fetch(n);t.console.log(n);const o=await e.json();return i.extractClipNames(o)}async getViewCount(){const{url:n}=this.state,e=await fetch(n),i=(await e.json()).items.map(t=>t.id.videoId).join(","),o=await fetch(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&id=${i}&part=snippet,statistics`),r=await o.json();return t.console.log("w",r),r.items.map(t=>t.statistics)}}}).call(this,e(0))},function(t,n,e){"use strict";var i=e(4);e(6);n.a=i.a},function(t,n,e){"use strict";(function(t){e.d(n,"a",function(){return i});class i{constructor(t,n){this.data=t,this.viewCount=n}render(){t.console.log("jj",this.viewCount);const n={key:"AIzaSyC7FaETWWZQX7Z3A-qpjZ9yF1FG2Yh41DQ",type:"video",part:"snippet",count:"12"},e='<div class="imageBox">\n    <div class="title"><a href="" target="_blank"></a></div>\n    </div>\n    <div class="text">\n      <div class="info">\n        <div class="info-container">\n          <div class="iconBox">\n            <img src="../src/img/user.png" alt="Channel name">\n          </div>\n          <div class="channelData"></div>\n        </div>\n        <div class="info-container">\n          <div class="iconBox">\n            <img src="../src/img/date.png" alt="Channel date">\n          </div>\n          <div class="channelData"></div>\n        </div>\n        <div class="info-container">\n          <div class="iconBox">\n            <img src="../src/img/views.png" alt="Channel views">\n          </div>\n          <div class="channelData"></div>\n        </div>\n      </div>\n      <div class="description"></div>\n    </div>',i=document.createElement("div");function o(t,n,e){const i=t.querySelector(".imageBox"),o=n.thumbnails.medium.url;i.style=`background: url(${o}) no-repeat;`;const r=i.querySelector("a");r.href=`https://www.youtube.com/watch?v=${n.id}`,r.innerHTML=n.title;const a=t.querySelectorAll(".channelData");a[0].innerHTML=n.channelTitle;const s=n.publishedAt.split("T")[0];a[1].innerHTML=s,a[2].innerHTML=e.viewCount;const c=t.querySelector(".description"),l=n.description.slice(0,100);c.textContent=`${l}...`}document.body.appendChild(i),i.innerHTML='<main>\n      <div class="form">\n      </div>\n      <div class="slider">\n        \n\n        <div class="slide" id=\'slide2\'>\n          <div class="page">\n            <div class="resultBox">\n              <div class="components"></div>\n            </div>\n          </div>\n        </div>\n\n        <div class="slide" id=\'slide3\'>\n          <div class="page">\n            <div class="resultBox">\n              <div class="components"></div>\n            </div>\n          </div>\n        </div>\n\n        <div class="slide" id=\'slide4\'>\n          <div class="page">\n            <div class="resultBox">\n              <div class="components"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <button class="control1" id="previous">Previous</button>\n      <button class="control2" id="next">Next</button>\n    </main>';const r=document.querySelectorAll(".slide");let a=0;const s=document.getElementById("next"),c=document.getElementById("previous");function l(t){r[a].className="slide",a=(t+r.length)%r.length,r[a].className="slide showing"}function d(){l(a+1)}function u(t,n){const i=document.createElement("div");i.className="note",t%4!=2&&t%4!=3||(i.className+=" hide"),n.appendChild(i),i.innerHTML=e}s.addEventListener("click",()=>{d()}),c.addEventListener("click",()=>{l(a-1)}),function(t,e){const i=document.querySelectorAll(".components");if("undefined"!==i.textContent){let t=0;for(let e=0,o=n.count;e<o;e+=1)u(e,i[t]),e%4==3&&(t+=1)}const r=document.querySelectorAll(".note");for(let i=0,a=n.count;i<a;i+=1)o(r[i],t[i],e[i]);d()}(this.data,this.viewCount)}}}).call(this,e(0))},function(t,n,e){"use strict";e.r(n);const i=new(e(1).a),o=document.createElement("div");document.body.appendChild(o),o.innerHTML='<div class="wrap">\n<div class="search">\n    <input type="text" id="name" class="searchTerm" placeholder="What are you looking for?">\n    \n</div>\n</div>"';const r=document.createElement("div");o.appendChild(r),r.innerHTML='<div class="wrap">\n\n    <button type="submit" class="searchButton" onclick="app.start()">\n        <i class="fa fa-search"></i>\n    </button>',r.addEventListener("click",()=>{const t=document.getElementById("name").value;i.start(t)})},function(t,n,e){var i=e(7);"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(9)(i,o);i.locals&&(t.exports=i.locals)},function(t,n,e){(n=t.exports=e(8)(!1)).push([t.i,"@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);",""]),n.push([t.i,"ul {\n  list-style: none;\n}\n\nul li {\n  background-color: aqua;\n  padding: 10px;\n}\n.search {\n  width: 100%;\n  position: relative\n}\n\n.searchTerm {\n  float: left;\n  width: 100%;\n  border: 3px solid #00B4CC;\n  padding: 5px;\n  height: 20px;\n  border-radius: 5px;\n  outline: none;\n  color: #9DBFAF;\n  margin-top: 72px;\n}\n\n.searchTerm:focus{\n  color: #00B4CC;\n}\n\n.searchButton {\n  position: absolute;  \n  right: -50px;\n  width: 40px;\n  height: 36px;\n  border: 1px solid #00B4CC;\n  background: #00B4CC;\n  text-align: center;\n  color: #fff;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 20px;\n}\n\n.wrap{\n  width: 30%;\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\nbody {\n\tbackground-color: #344555;\n\tfont-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n\tmin-height: 100vh;\n  margin: 0;\n}\n\n.slide {\n\t\tfloat: left;\n\t\tbox-sizing: border-box;\n\t\tbackground-size: 100% auto;\n\t\tbackground-attachment: fixed;\n\t\tbackground-position: center center;\n    user-select: none;\n    -webkit-transition: opacity 1s;\n    -moz-transition: opacity 1s;\n    -o-transition: opacity 1s;\n    transition: opacity 1s;\n}\n.slide {\n  display: none;\n}\n\n.showing {\n  display: block;\n}\n\n.form {\n\twidth: 1200px;\n\theight: 40px;\n\tmargin: 0 auto;\n}\n.fieldBox {\n\tmargin: 0 auto;\n\twidth: 50%;\n\theight: 100%;\n}\n#textField {\n\twidth: 100%;\n\theight: 25px;\n\tfont-size: 18px;\n\tpadding: 0 5px;\n\tborder-radius: 10px;\n}\n#button {\n\tpadding: 5px 15px;;\n\tborder-radius: 4px;\n\tmargin-left: 10px;\n}\n\n.resultBox {\n\tposition: relative;\n\tleft: 0px;\n\ttop: 20px;\n\twidth: 1200px;\n\theight: 90%;\n\tmargin: 0 auto;\n\tmargin-top: 40px;\n}\n\n.components {\n\twidth: 100%;\n\theight: 85%;\n\tmargin: 0 auto;\n\tpadding-top: 50px;\n}\n.note {\n\tfloat: left;\n\tmargin-left: 40px;\n\twidth: 250px;\n\theight: 400px;\n\tbackground-color: white;\n\tborder-radius: 3px;\n\tpadding: 5px;\n\tbackground-size: cover;\n\tbackground-attachment: fixed;\n\tword-wrap: break-word;\n}\n#note0 {\n\tmargin-left: 0;\n}\n.imageBox {\n\twidth: 100%;\n\theight: 40%;\n}\n.title {\n\tpadding-top: 5px;\n\tposition: relative;\n\ttop: 30px;\n\tleft: 0px;\n\tmin-height: 40px;\n\tbackground-color: rgba(2, 134, 2, 0.699);\n\ttext-align: center;\n}\na {\n\tcolor: white;\n\tfont-size: 16px;\n}\na:hover {\n\tcolor: blue;\n}\n.text {\n\twidth: 100%;\n\theight: 50%;\n\tpadding: 10px 0 20px 0;\n\tfont-size: 14px;\n}\n.info {\n\twidth: 90%;\n\theight: 50%;\n\tpadding-left: 20px;\n\tfont-size: 14px;\n}\n.info-container {\n\tmargin-top: 10px;\n\twidth: 80%;\n\theight: 33%;\n}\n.iconBox {\n\tfloat: left;\n\twidth: 20%;\n}\n.channelData {\n\tdisplay: table-cell;\n  vertical-align: middle;\n}\n.channelData {\n\tfloat: left;\n\ttext-align: center;\n\twidth: 80%;\n}\n.description {\n\tmargin-top: 20px;\n\tpadding-bottom: 3px;\n\theight: 90px;\n}\n.control1 {\n  position: absolute;\n  left: 52%;\n  margin-left: -50px;\n  bottom: 20px;\n  text-align: center;\n}\n.control2 {\n  position: absolute;\n  left: 48%;\n  margin-left: -50px;\n  bottom: 20px;\n  text-align: center;\n}\n@media (max-width: 800px) {\n\t.hide {\n\t\tdisplay: none;\n\t}\n\t#radio2, #radio3 {\n\t\tdisplay: inline-block;\n\t}\n\t.form {\n\t\twidth: 600px;\n\t}\n\t.resultBox {\n\t\twidth: 800px;\n\t}\n\t.components {\n\t\twidth: 80%;\n\t}\n}\n\n@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n\t.form {\n\t\tmargin: 0 auto;\n\t\tmargin-top: 20px;\n\t\twidth: 70%;\n\t\theight: 150px;\n\t}\n\t.fieldBox {\n\t\twidth: 80%;\n\t}\n\t#textField {\n\t\theight: 100px;\n\t\twidth: 90%;\n\t\tfont-size: 50px;\n\t}\n\t.slide, .page {\n\t\theight: 100%;\n\t}\n\t.note {\n\t\twidth: 50%;\n\t\theight: 70%;\n\t\tmargin: 0 auto;\n\t\tmargin-left: 12%;\n\t}\n\t.imageBox {\n\t\tbackground-size: cover !important;\n\t}\n\t.title {\n\t\tmin-width: 20%;\n\t}\n\t.title a {\n\t\tfont-size: 36px;\n\t}\n\t.text, .info {\n\t\tfont-size: 30px;\n\t}\n\t.text {\n\t\tmargin-top: 40px;\n\t}\n\t.iconBox img {\n\t\twidth: 50px;\n  }\n}\n",""])},function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var e=function(t,n){var e=t[1]||"",i=t[3];if(!i)return e;if(n&&"function"==typeof btoa){var o=(a=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),r=i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"});return[e].concat(r).concat([o]).join("\n")}var a;return[e].join("\n")}(n,t);return n[2]?"@media "+n[2]+"{"+e+"}":e}).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];null!=r&&(i[r]=!0)}for(o=0;o<t.length;o++){var a=t[o];null!=a[0]&&i[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),n.push(a))}},n}},function(t,n,e){var i,o,r={},a=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=i.apply(this,arguments)),o}),s=function(t){var n={};return function(t,e){if("function"==typeof t)return t();if(void 0===n[t]){var i=function(t,n){return n?n.querySelector(t):document.querySelector(t)}.call(this,t,e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}n[t]=i}return n[t]}}(),c=null,l=0,d=[],u=e(10);function p(t,n){for(var e=0;e<t.length;e++){var i=t[e],o=r[i.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](i.parts[a]);for(;a<i.parts.length;a++)o.parts.push(x(i.parts[a],n))}else{var s=[];for(a=0;a<i.parts.length;a++)s.push(x(i.parts[a],n));r[i.id]={id:i.id,refs:1,parts:s}}}}function f(t,n){for(var e=[],i={},o=0;o<t.length;o++){var r=t[o],a=n.base?r[0]+n.base:r[0],s={css:r[1],media:r[2],sourceMap:r[3]};i[a]?i[a].parts.push(s):e.push(i[a]={id:a,parts:[s]})}return e}function h(t,n){var e=s(t.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=d[d.length-1];if("top"===t.insertAt)i?i.nextSibling?e.insertBefore(n,i.nextSibling):e.appendChild(n):e.insertBefore(n,e.firstChild),d.push(n);else if("bottom"===t.insertAt)e.appendChild(n);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(t.insertAt.before,e);e.insertBefore(n,o)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var n=d.indexOf(t);n>=0&&d.splice(n,1)}function m(t){var n=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var i=function(){0;return e.nc}();i&&(t.attrs.nonce=i)}return g(n,t.attrs),h(t,n),n}function g(t,n){Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])})}function x(t,n){var e,i,o,r;if(n.transform&&t.css){if(!(r="function"==typeof n.transform?n.transform(t.css):n.transform.default(t.css)))return function(){};t.css=r}if(n.singleton){var a=l++;e=c||(c=m(n)),i=y.bind(null,e,a,!1),o=y.bind(null,e,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(t){var n=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",g(n,t.attrs),h(t,n),n}(n),i=function(t,n,e){var i=e.css,o=e.sourceMap,r=void 0===n.convertToAbsoluteUrls&&o;(n.convertToAbsoluteUrls||r)&&(i=u(i));o&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([i],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,e,n),o=function(){v(e),e.href&&URL.revokeObjectURL(e.href)}):(e=m(n),i=function(t,n){var e=n.css,i=n.media;i&&t.setAttribute("media",i);if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}.bind(null,e),o=function(){v(e)});return i(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;i(t=n)}else o()}}t.exports=function(t,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=a()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var e=f(t,n);return p(e,n),function(t){for(var i=[],o=0;o<e.length;o++){var a=e[o];(s=r[a.id]).refs--,i.push(s)}t&&p(f(t,n),n);for(o=0;o<i.length;o++){var s;if(0===(s=i[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete r[s.id]}}}};var b,w=(b=[],function(t,n){return b[t]=n,b.filter(Boolean).join("\n")});function y(t,n,e,i){var o=e?"":i.css;if(t.styleSheet)t.styleSheet.cssText=w(n,o);else{var r=document.createTextNode(o),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(r,a[n]):t.appendChild(r)}}},function(t,n){t.exports=function(t){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var e=n.protocol+"//"+n.host,i=e+n.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,n){var o,r=n.trim().replace(/^"(.*)"$/,function(t,n){return n}).replace(/^'(.*)'$/,function(t,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?t:(o=0===r.indexOf("//")?r:0===r.indexOf("/")?e+r:i+r.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}]);
//# sourceMappingURL=app.bundle.js.map