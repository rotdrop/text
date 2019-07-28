(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{360:function(t,n,e){"use strict";var i=e(69);e.n(i).a},361:function(t,n,e){(t.exports=e(44)(!1)).push([t.i,".session-list[data-v-3938a18e] {\n  position: relative;\n}\n.session-list[data-v-3938a18e] .popovermenu {\n    margin-right: -4px;\n}\n.session-list[data-v-3938a18e] .popovermenu img {\n      padding: 0;\n      width: 32px !important;\n      height: 32px !important;\n      margin: 6px;\n      border-radius: 50%;\n}\n.avatar-list[data-v-3938a18e] {\n  display: inline-flex;\n  flex-direction: row-reverse;\n}\n.avatar-list .avatardiv[data-v-3938a18e],\n  .avatar-list[data-v-3938a18e] .avatardiv {\n    width: 36px;\n    height: 36px;\n    margin-right: -8px;\n    border: 2px solid var(--color-main-background);\n    background-color: var(--color-main-background) !important;\n    box-sizing: content-box !important;\n}\n.avatar-list .avatardiv.icon-more[data-v-3938a18e],\n    .avatar-list[data-v-3938a18e] .avatardiv.icon-more {\n      width: 32px;\n      height: 32px;\n      opacity: .5;\n      background-color: var(--color-background-dark) !important;\n      cursor: pointer;\n}\n.popovermenu[data-v-3938a18e] {\n  display: block;\n}\n",""])},363:function(t,e,i){"use strict";i.r(e);var a=i(85),o=i.n(a),s=i(63),r=i.n(s),c=i(49),l=i.n(c);function d(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var u={name:"SessionList",components:{Avatar:o.a,PopoverMenu:r.a},directives:{tooltip:l.a},props:{sessions:{type:Object,default:function(){return{}}}},data:function(){return{popoverVisible:"",myName:""}},computed:{editorsTooltip:function(){if(this.sessionsPopover.length>0){var t=this.activeSessions.slice(0,3).map(function(t){return t.guestName?t.guestName:t.displayName}).join(", "),e=this.activeSessions.slice(3).length;return t+" "+n("text","and %n other editor","and %n other editors",e)}return this.activeSessions.slice(0,3).map(function(t){return t.guestName?t.guestName:t.displayName}).join(", ")},avatarUrl:function(){return function(t){var n=t.guestName?t.guestName:t.userId,e=!!t.guestName,i=OC.generateUrl(e?"/avatar/guest/{user}/{size}":"/avatar/{user}/{size}",{user:n,size:32});return window.location.protocol+"//"+window.location.host+i}},activeSessions:function(){return Object.values(this.sessions).filter(function(t){return t.lastContact>Date.now()/1e3-30&&!t.isCurrent&&null!==t.userId})},sessionStyle:function(){return function(t){return{opacity:t.lastContact>Date.now()/1e3-10?1:.5}}},sessionsVisible:function(){return this.activeSessions.slice(0,3)},sessionsPopover:function(){var t=this;return d(this.activeSessions.slice(3).map(function(n){return{href:"#",icon:t.avatarUrl(n),text:n.guestName?n.guestName:n.displayName}}))}},methods:{}},p=(i(360),i(5)),f=Object(p.a)(u,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"session-list"},[e("div",{directives:[{name:"tooltip",rawName:"v-tooltip.left",value:t.editorsTooltip,expression:"editorsTooltip",modifiers:{left:!0}}],staticClass:"avatar-list",on:{click:function(n){t.popoverVisible=!t.popoverVisible}}},[t.sessionsPopover.length>0?e("div",{staticClass:"avatardiv icon-more"}):t._e(),t._v(" "),t._l(t.sessionsVisible,function(n){return e("avatar",{key:n.id,style:t.sessionStyle(n),attrs:{url:t.avatarUrl(n),"disable-tooltip":!0,size:32}})})],2),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.popoverVisible,expression:"popoverVisible"}],staticClass:"popovermenu menu-right"},[e("popover-menu",{attrs:{menu:t.sessionsPopover}}),t._v(" "),t._t("default")],2)])},[],!1,null,"3938a18e",null);e.default=f.exports},63:function(t,n,e){window,t.exports=function(t){var n={};function e(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,e),a.l=!0,a.exports}return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)e.d(i,a,function(n){return t[n]}.bind(null,a));return i},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/dist/",e(e.s=23)}([function(t,n,e){"use strict";function i(t,n,e,i,a,o,s,r){var c,l="function"==typeof t?t.options:t;if(n&&(l.render=n,l.staticRenderFns=e,l._compiled=!0),i&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=c):a&&(c=r?function(){a.call(this,this.$root.$options.shadowRoot)}:a),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(t,n){return c.call(n),d(t,n)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,c):[c]}return{exports:t,options:l}}e.d(n,"a",function(){return i})},function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var e=function(t,n){var e,i,a,o=t[1]||"",s=t[3];if(!s)return o;if(n&&"function"==typeof btoa){var r=(e=s,i=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),"/*# ".concat(a," */")),c=s.sources.map(function(t){return"/*# sourceURL=".concat(s.sourceRoot).concat(t," */")});return[o].concat(c).concat([r]).join("\n")}return[o].join("\n")}(n,t);return n[2]?"@media ".concat(n[2],"{").concat(e,"}"):e}).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},a=0;a<this.length;a++){var o=this[a][0];null!=o&&(i[o]=!0)}for(var s=0;s<t.length;s++){var r=t[s];null!=r[0]&&i[r[0]]||(e&&!r[2]?r[2]=e:e&&(r[2]="(".concat(r[2],") and (").concat(e,")")),n.push(r))}},n}},function(t,n,e){"use strict";function i(t,n){for(var e=[],i={},a=0;a<n.length;a++){var o=n[a],s=o[0],r={id:t+":"+a,css:o[1],media:o[2],sourceMap:o[3]};i[s]?i[s].parts.push(r):e.push(i[s]={id:s,parts:[r]})}return e}e.r(n),e.d(n,"default",function(){return m});var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},s=a&&(document.head||document.getElementsByTagName("head")[0]),r=null,c=0,l=!1,d=function(){},u=null,p="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(t,n,e,a){l=e,u=a||{};var s=i(t,n);return v(s),function(n){for(var e=[],a=0;a<s.length;a++){var r=s[a];(c=o[r.id]).refs--,e.push(c)}for(n?v(s=i(t,n)):s=[],a=0;a<e.length;a++){var c;if(0===(c=e[a]).refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete o[c.id]}}}}function v(t){for(var n=0;n<t.length;n++){var e=t[n],i=o[e.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](e.parts[a]);for(;a<e.parts.length;a++)i.parts.push(h(e.parts[a]));i.parts.length>e.parts.length&&(i.parts.length=e.parts.length)}else{var s=[];for(a=0;a<e.parts.length;a++)s.push(h(e.parts[a]));o[e.id]={id:e.id,refs:1,parts:s}}}}function b(){var t=document.createElement("style");return t.type="text/css",s.appendChild(t),t}function h(t){var n,e,i=document.querySelector("style["+p+'~="'+t.id+'"]');if(i){if(l)return d;i.parentNode.removeChild(i)}if(f){var a=c++;i=r||(r=b()),n=x.bind(null,i,a,!1),e=x.bind(null,i,a,!0)}else i=b(),n=function(t,n){var e=n.css,i=n.media,a=n.sourceMap;if(i&&t.setAttribute("media",i),u.ssrId&&t.setAttribute(p,n.id),a&&(e+="\n/*# sourceURL="+a.sources[0]+" */",e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}.bind(null,i),e=function(){i.parentNode.removeChild(i)};return n(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;n(t=i)}else e()}}var g,y=(g=[],function(t,n){return g[t]=n,g.filter(Boolean).join("\n")});function x(t,n,e,i){var a=e?"":i.css;if(t.styleSheet)t.styleSheet.cssText=y(n,a);else{var o=document.createTextNode(a),s=t.childNodes;s[n]&&t.removeChild(s[n]),s.length?t.insertBefore(o,s[n]):t.appendChild(o)}}},,,,,,,,,,,,,,function(t,n,e){var i=e(37);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals),(0,e(2).default)("6d914181",i,!0,{})},function(t,n,e){var i=e(39);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals),(0,e(2).default)("c5024e26",i,!0,{})},function(t,n,e){var i=e(41);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals),(0,e(2).default)("7947401e",i,!0,{})},,,,,function(t,n,e){"use strict";e.r(n);var i={name:"PopoverMenuItem",props:{item:{type:Object,required:!0,default:function(){return{key:"nextcloud-link",href:"https://nextcloud.com",icon:"icon-links",text:"Nextcloud"}},validator:function(t){return!t.input||-1!==["text","checkbox"].indexOf(t.input)}}},computed:{key:function(){return this.item.key?this.item.key:Math.round(16*Math.random()*1e6).toString(16)},iconIsUrl:function(){try{return new URL(this.item.icon),!0}catch(t){return!1}}},methods:{action:function(t){this.item.action&&this.item.action(t)}}},a=(e(36),e(38),e(0)),o={name:"PopoverMenu",components:{PopoverMenuItem:Object(a.a)(i,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("li",[t.item.href?e("a",{staticClass:"focusable",attrs:{href:t.item.href?t.item.href:"#",target:t.item.target?t.item.target:"",download:t.item.download,rel:"noreferrer noopener"},on:{click:t.action}},[t.iconIsUrl?e("img",{attrs:{src:t.item.icon}}):e("span",{class:t.item.icon}),t._v(" "),t.item.text&&t.item.longtext?e("p",[e("strong",{staticClass:"menuitem-text"},[t._v("\n\t\t\t\t"+t._s(t.item.text)+"\n\t\t\t")]),e("br"),t._v(" "),e("span",{staticClass:"menuitem-text-detail"},[t._v("\n\t\t\t\t"+t._s(t.item.longtext)+"\n\t\t\t")])]):t.item.text?e("span",[t._v("\n\t\t\t"+t._s(t.item.text)+"\n\t\t")]):t.item.longtext?e("p",[t._v("\n\t\t\t"+t._s(t.item.longtext)+"\n\t\t")]):t._e()]):t.item.input?e("span",{staticClass:"menuitem",class:{active:t.item.active}},["checkbox"!==t.item.input?e("span",{class:t.item.icon}):t._e(),t._v(" "),"text"===t.item.input?e("form",{class:t.item.input,on:{submit:function(n){return n.preventDefault(),t.item.action(n)}}},[e("input",{attrs:{type:t.item.input,placeholder:t.item.text,required:""},domProps:{value:t.item.value}}),t._v(" "),e("input",{staticClass:"icon-confirm",attrs:{type:"submit",value:""}})]):["checkbox"===t.item.input?e("input",{directives:[{name:"model",rawName:"v-model",value:t.item.model,expression:"item.model"}],class:t.item.input,attrs:{id:t.key,type:"checkbox"},domProps:{checked:Array.isArray(t.item.model)?t._i(t.item.model,null)>-1:t.item.model},on:{change:[function(n){var e=t.item.model,i=n.target,a=!!i.checked;if(Array.isArray(e)){var o=t._i(e,null);i.checked?o<0&&t.$set(t.item,"model",e.concat([null])):o>-1&&t.$set(t.item,"model",e.slice(0,o).concat(e.slice(o+1)))}else t.$set(t.item,"model",a)},t.item.action]}}):"radio"===t.item.input?e("input",{directives:[{name:"model",rawName:"v-model",value:t.item.model,expression:"item.model"}],class:t.item.input,attrs:{id:t.key,type:"radio"},domProps:{checked:t._q(t.item.model,null)},on:{change:[function(n){return t.$set(t.item,"model",null)},t.item.action]}}):e("input",{directives:[{name:"model",rawName:"v-model",value:t.item.model,expression:"item.model"}],class:t.item.input,attrs:{id:t.key,type:t.item.input},domProps:{value:t.item.model},on:{change:t.item.action,input:function(n){n.target.composing||t.$set(t.item,"model",n.target.value)}}}),t._v(" "),e("label",{attrs:{for:t.key},on:{click:function(n){return n.stopPropagation(),n.preventDefault(),t.item.action(n)}}},[t._v("\n\t\t\t\t"+t._s(t.item.text)+"\n\t\t\t")])]],2):t.item.action?e("button",{staticClass:"menuitem focusable",class:{active:t.item.active},attrs:{disabled:t.item.disabled},on:{click:function(n){return n.stopPropagation(),n.preventDefault(),t.item.action(n)}}},[e("span",{class:t.item.icon}),t._v(" "),t.item.text&&t.item.longtext?e("p",[e("strong",{staticClass:"menuitem-text"},[t._v("\n\t\t\t\t"+t._s(t.item.text)+"\n\t\t\t")]),e("br"),t._v(" "),e("span",{staticClass:"menuitem-text-detail"},[t._v("\n\t\t\t\t"+t._s(t.item.longtext)+"\n\t\t\t")])]):t.item.text?e("span",[t._v("\n\t\t\t"+t._s(t.item.text)+"\n\t\t")]):t.item.longtext?e("p",[t._v("\n\t\t\t"+t._s(t.item.longtext)+"\n\t\t")]):t._e()]):e("span",{staticClass:"menuitem",class:{active:t.item.active}},[e("span",{class:t.item.icon}),t._v(" "),t.item.text&&t.item.longtext?e("p",[e("strong",{staticClass:"menuitem-text"},[t._v("\n\t\t\t\t"+t._s(t.item.text)+"\n\t\t\t")]),e("br"),t._v(" "),e("span",{staticClass:"menuitem-text-detail"},[t._v("\n\t\t\t\t"+t._s(t.item.longtext)+"\n\t\t\t")])]):t.item.text?e("span",[t._v("\n\t\t\t"+t._s(t.item.text)+"\n\t\t")]):t.item.longtext?e("p",[t._v("\n\t\t\t"+t._s(t.item.longtext)+"\n\t\t")]):t._e()])])},[],!1,null,"8dc4efb0",null).exports},props:{menu:{type:Array,default:function(){return[{href:"https://nextcloud.com",icon:"icon-links",text:"Nextcloud"}]},required:!0}}},s=(e(40),Object(a.a)(o,function(){var t=this.$createElement,n=this._self._c||t;return n("ul",this._l(this.menu,function(t,e){return n("PopoverMenuItem",{key:e,attrs:{item:t}})}),1)},[],!1,null,"2f982451",null).exports);e.d(n,"PopoverMenu",function(){return s}),
/**
 * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
n.default=s},,,,,,,,,,,,,function(t,n,e){"use strict";var i=e(16);e.n(i).a},function(t,n,e){(t.exports=e(1)(!1)).push([t.i,"\nbutton.menuitem[data-v-8dc4efb0] {\n\ttext-align: left;\n}\nbutton.menuitem *[data-v-8dc4efb0] {\n\tcursor: pointer;\n}\nbutton.menuitem[data-v-8dc4efb0]:disabled {\n\topacity: 0.5 !important;\n\tcursor: default;\n}\nbutton.menuitem:disabled *[data-v-8dc4efb0] {\n\tcursor: default;\n}\n.menuitem.active[data-v-8dc4efb0] {\n\tbox-shadow: inset 2px 0 var(--color-primary);\n\tborder-radius: 0;\n}\n",""])},function(t,n,e){"use strict";var i=e(17);e.n(i).a},function(t,n,e){(t.exports=e(1)(!1)).push([t.i,"@charset \"UTF-8\";\n/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\nli[data-v-8dc4efb0] {\n  display: flex;\n  flex: 0 0 auto;\n  /* css hack, only first not hidden */\n}\nli.hidden[data-v-8dc4efb0] {\n    display: none;\n}\nli > button[data-v-8dc4efb0],\n  li > a[data-v-8dc4efb0],\n  li > .menuitem[data-v-8dc4efb0] {\n    cursor: pointer;\n    line-height: 44px;\n    border: 0;\n    border-radius: 0;\n    background-color: transparent;\n    display: flex;\n    align-items: flex-start;\n    height: auto;\n    margin: 0;\n    padding: 0;\n    font-weight: normal;\n    box-shadow: none;\n    width: 100%;\n    color: var(--color-main-text);\n    white-space: nowrap;\n    opacity: 0.7;\n    /* prevent .action class to break the design */\n    /* Add padding if contains icon+text */\n    /* DEPRECATED! old img in popover fallback\n\t\t\t* TODO: to remove */\n    /* checkbox/radio fixes */\n    /* no margin if hidden span before */\n    /* Inputs inside popover supports text, submit & reset */\n}\nli > button span[class^='icon-'][data-v-8dc4efb0],\n    li > button span[class*=' icon-'][data-v-8dc4efb0], li > button[class^='icon-'][data-v-8dc4efb0], li > button[class*=' icon-'][data-v-8dc4efb0],\n    li > a span[class^='icon-'][data-v-8dc4efb0],\n    li > a span[class*=' icon-'][data-v-8dc4efb0],\n    li > a[class^='icon-'][data-v-8dc4efb0],\n    li > a[class*=' icon-'][data-v-8dc4efb0],\n    li > .menuitem span[class^='icon-'][data-v-8dc4efb0],\n    li > .menuitem span[class*=' icon-'][data-v-8dc4efb0],\n    li > .menuitem[class^='icon-'][data-v-8dc4efb0],\n    li > .menuitem[class*=' icon-'][data-v-8dc4efb0] {\n      min-width: 0;\n      /* Overwrite icons*/\n      min-height: 0;\n      background-position: 14px center;\n      background-size: 16px;\n}\nli > button span[class^='icon-'][data-v-8dc4efb0],\n    li > button span[class*=' icon-'][data-v-8dc4efb0],\n    li > a span[class^='icon-'][data-v-8dc4efb0],\n    li > a span[class*=' icon-'][data-v-8dc4efb0],\n    li > .menuitem span[class^='icon-'][data-v-8dc4efb0],\n    li > .menuitem span[class*=' icon-'][data-v-8dc4efb0] {\n      /* Keep padding to define the width to\n\t\t\t\tassure correct position of a possible text */\n      padding: 22px 0 22px 44px;\n}\nli > button:not([class^='icon-']):not([class*='icon-']) > span[data-v-8dc4efb0]:not([class^='icon-']):not([class*='icon-']):first-child,\n    li > button:not([class^='icon-']):not([class*='icon-']) > input[data-v-8dc4efb0]:not([class^='icon-']):not([class*='icon-']):first-child,\n    li > button:not([class^='icon-']):not([class*='icon-']) > form[data-v-8dc4efb0]:not([class^='icon-']):not([class*='icon-']):first-child,\n    li > a:not([class^='icon-']):not([class*='icon-']) > span[data-v-8dc4efb0]:not([class^='icon-']):not([class*='icon-']):first-child,\n    li > a:not([class^='icon-']):not([class*='icon-']) > input[data-v-8dc4efb0]:not([class^='icon-']):not([class*='icon-']):first-child,\n    li > a:not([class^='icon-']):not([class*='icon-']) > form[data-v-8dc4efb0]:not([class^='icon-']):not([class*='icon-']):first-child,\n    li > .menuitem:not([class^='icon-']):not([class*='icon-']) > span[data-v-8dc4efb0]:not([class^='icon-']):not([class*='icon-']):first-child,\n    li > .menuitem:not([class^='icon-']):not([class*='icon-']) > input[data-v-8dc4efb0]:not([class^='icon-']):not([class*='icon-']):first-child,\n    li > .menuitem:not([class^='icon-']):not([class*='icon-']) > form[data-v-8dc4efb0]:not([class^='icon-']):not([class*='icon-']):first-child {\n      margin-left: 44px;\n}\nli > button[class^='icon-'][data-v-8dc4efb0], li > button[class*=' icon-'][data-v-8dc4efb0],\n    li > a[class^='icon-'][data-v-8dc4efb0],\n    li > a[class*=' icon-'][data-v-8dc4efb0],\n    li > .menuitem[class^='icon-'][data-v-8dc4efb0],\n    li > .menuitem[class*=' icon-'][data-v-8dc4efb0] {\n      padding: 0 14px 0 44px;\n}\nli > button[data-v-8dc4efb0]:not(:disabled):hover, li > button[data-v-8dc4efb0]:not(:disabled):focus, li > button:not(:disabled).active[data-v-8dc4efb0],\n    li > a[data-v-8dc4efb0]:not(:disabled):hover,\n    li > a[data-v-8dc4efb0]:not(:disabled):focus,\n    li > a:not(:disabled).active[data-v-8dc4efb0],\n    li > .menuitem[data-v-8dc4efb0]:not(:disabled):hover,\n    li > .menuitem[data-v-8dc4efb0]:not(:disabled):focus,\n    li > .menuitem:not(:disabled).active[data-v-8dc4efb0] {\n      opacity: 1 !important;\n}\nli > button.action[data-v-8dc4efb0],\n    li > a.action[data-v-8dc4efb0],\n    li > .menuitem.action[data-v-8dc4efb0] {\n      padding: inherit !important;\n}\nli > button > span[data-v-8dc4efb0],\n    li > a > span[data-v-8dc4efb0],\n    li > .menuitem > span[data-v-8dc4efb0] {\n      cursor: pointer;\n      white-space: nowrap;\n}\nli > button > p[data-v-8dc4efb0],\n    li > a > p[data-v-8dc4efb0],\n    li > .menuitem > p[data-v-8dc4efb0] {\n      width: 150px;\n      line-height: 1.6em;\n      padding: 8px 0;\n      white-space: normal;\n}\nli > button > select[data-v-8dc4efb0],\n    li > a > select[data-v-8dc4efb0],\n    li > .menuitem > select[data-v-8dc4efb0] {\n      margin: 0;\n      margin-left: 6px;\n}\nli > button[data-v-8dc4efb0]:not(:empty),\n    li > a[data-v-8dc4efb0]:not(:empty),\n    li > .menuitem[data-v-8dc4efb0]:not(:empty) {\n      padding-right: 14px !important;\n}\nli > button > img[data-v-8dc4efb0],\n    li > a > img[data-v-8dc4efb0],\n    li > .menuitem > img[data-v-8dc4efb0] {\n      width: 16px;\n      padding: 14px;\n}\nli > button > input.radio + label[data-v-8dc4efb0],\n    li > button > input.checkbox + label[data-v-8dc4efb0],\n    li > a > input.radio + label[data-v-8dc4efb0],\n    li > a > input.checkbox + label[data-v-8dc4efb0],\n    li > .menuitem > input.radio + label[data-v-8dc4efb0],\n    li > .menuitem > input.checkbox + label[data-v-8dc4efb0] {\n      padding: 0 !important;\n      width: 100%;\n}\nli > button > input.checkbox + label[data-v-8dc4efb0]::before,\n    li > a > input.checkbox + label[data-v-8dc4efb0]::before,\n    li > .menuitem > input.checkbox + label[data-v-8dc4efb0]::before {\n      margin: -2px 13px 0;\n}\nli > button > input.radio + label[data-v-8dc4efb0]::before,\n    li > a > input.radio + label[data-v-8dc4efb0]::before,\n    li > .menuitem > input.radio + label[data-v-8dc4efb0]::before {\n      margin: -2px 12px 0;\n}\nli > button > input[data-v-8dc4efb0]:not([type=radio]):not([type=checkbox]):not([type=image]),\n    li > a > input[data-v-8dc4efb0]:not([type=radio]):not([type=checkbox]):not([type=image]),\n    li > .menuitem > input[data-v-8dc4efb0]:not([type=radio]):not([type=checkbox]):not([type=image]) {\n      width: 150px;\n}\nli > button form[data-v-8dc4efb0],\n    li > a form[data-v-8dc4efb0],\n    li > .menuitem form[data-v-8dc4efb0] {\n      display: flex;\n      flex: 1 1 auto;\n      /* put a small space between text and form\n\t\t\t\tif there is an element before */\n}\nli > button form[data-v-8dc4efb0]:not(:first-child),\n      li > a form[data-v-8dc4efb0]:not(:first-child),\n      li > .menuitem form[data-v-8dc4efb0]:not(:first-child) {\n        margin-left: 5px;\n}\nli > button > span.hidden + form[data-v-8dc4efb0],\n    li > button > span[style*='display:none'] + form[data-v-8dc4efb0],\n    li > a > span.hidden + form[data-v-8dc4efb0],\n    li > a > span[style*='display:none'] + form[data-v-8dc4efb0],\n    li > .menuitem > span.hidden + form[data-v-8dc4efb0],\n    li > .menuitem > span[style*='display:none'] + form[data-v-8dc4efb0] {\n      margin-left: 0;\n}\nli > button input[data-v-8dc4efb0],\n    li > a input[data-v-8dc4efb0],\n    li > .menuitem input[data-v-8dc4efb0] {\n      min-width: 44px;\n      max-height: 40px;\n      /* twice the element margin-y */\n      margin: 2px 0;\n      flex: 1 1 auto;\n}\nli > button input[data-v-8dc4efb0]:not(:first-child),\n      li > a input[data-v-8dc4efb0]:not(:first-child),\n      li > .menuitem input[data-v-8dc4efb0]:not(:first-child) {\n        margin-left: 5px;\n}\nli:not(.hidden):not([style*='display:none']):first-of-type > button > form[data-v-8dc4efb0], li:not(.hidden):not([style*='display:none']):first-of-type > button > input[data-v-8dc4efb0], li:not(.hidden):not([style*='display:none']):first-of-type > a > form[data-v-8dc4efb0], li:not(.hidden):not([style*='display:none']):first-of-type > a > input[data-v-8dc4efb0], li:not(.hidden):not([style*='display:none']):first-of-type > .menuitem > form[data-v-8dc4efb0], li:not(.hidden):not([style*='display:none']):first-of-type > .menuitem > input[data-v-8dc4efb0] {\n    margin-top: 12px;\n}\nli:not(.hidden):not([style*='display:none']):last-of-type > button > form[data-v-8dc4efb0], li:not(.hidden):not([style*='display:none']):last-of-type > button > input[data-v-8dc4efb0], li:not(.hidden):not([style*='display:none']):last-of-type > a > form[data-v-8dc4efb0], li:not(.hidden):not([style*='display:none']):last-of-type > a > input[data-v-8dc4efb0], li:not(.hidden):not([style*='display:none']):last-of-type > .menuitem > form[data-v-8dc4efb0], li:not(.hidden):not([style*='display:none']):last-of-type > .menuitem > input[data-v-8dc4efb0] {\n    margin-bottom: 12px;\n}\nli > button[data-v-8dc4efb0] {\n    padding: 0;\n}\nli > button span[data-v-8dc4efb0] {\n      opacity: 1;\n}\n",""])},function(t,n,e){"use strict";var i=e(18);e.n(i).a},function(t,n,e){(t.exports=e(1)(!1)).push([t.i,'@charset "UTF-8";\n/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\nul[data-v-2f982451] {\n  display: flex;\n  flex-direction: column;\n}\n',""])}])},69:function(t,n,e){var i=e(361);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,e(45).default)("0f1e3ffa",i,!0,{})}}]);
//# sourceMappingURL=editor-collab.js.map?v=deb35210196ab6c35719