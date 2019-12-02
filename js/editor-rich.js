(window.textWebpackJsonp=window.textWebpackJsonp||[]).push([[192],{12:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o}));
/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
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
var i=["text/markdown"],o=["text/plain","application/cmd","application/javascript","application/json","application/xml","application/x-empty","application/x-msdos-program","application/x-php","application/x-pearl","application/x-text","application/yaml"],r=[].concat(i,o)},303:function(t,e,n){"use strict";var i=n(49);n.n(i).a},304:function(t,e,n){(t.exports=n(153)(!1)).push([t.i,"\n#rich-workspace[data-v-f1bb69d0] {\n\tpadding: 0 60px;\n\tmin-height: 90px;\n\ttext-align: left;\n}\n.empty-workspace[data-v-f1bb69d0] {\n\tmargin-top: 54px;\n\tcolor: var(--color-text-maxcontrast);\n\theight: 0;\n}\n#rich-workspace[data-v-f1bb69d0] div[contenteditable=false] {\n\twidth: 100%;\n\tpadding: 0px;\n\tbackground-color: var(--color-main-background);\n\topacity: 1;\n\tborder: none;\n}\n#rich-workspace[data-v-f1bb69d0] #editor-container {\n\theight: 100%;\n\tposition: unset !important;\n}\n#rich-workspace[data-v-f1bb69d0] #editor-wrapper {\n\tposition: unset !important;\n}\n#rich-workspace[data-v-f1bb69d0] #editor-wrapper .ProseMirror {\n\tpadding: 0px;\n\tmargin: 0;\n}\n#rich-workspace[data-v-f1bb69d0] .menubar .menubar-icons {\n\tmargin-left: 0;\n}\n#rich-workspace[data-v-f1bb69d0] .editor__content {\n\tmargin: 0;\n}\n@media only screen and (max-width: 1024px) {\n#rich-workspace[data-v-f1bb69d0]:not(.focus) {\n\t\tmax-height: 30vh;\n\t\tposition: relative;\n\t\toverflow: hidden;\n}\n#rich-workspace[data-v-f1bb69d0]:not(.focus):not(.icon-loading):after {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\tz-index: 1;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\tpointer-events: none;\n\t\tbackground-image: linear-gradient(to bottom, rgba(0,0,0, 0), var(--color-main-background));\n\t\twidth: 100%;\n\t\theight: 4em;\n}\n}\n\n",""])},335:function(t,e,n){var i=n(623);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(154).default)("197758a8",i,!0,{})},336:function(t,e,n){var i=n(625);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(154).default)("422f6cc2",i,!0,{})},49:function(t,e,n){var i=n(304);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(154).default)("5b9550ee",i,!0,{})},50:function(e,n,i){"use strict";var o=i(29),r=i.n(o),a=i(30),c=i(12),s=!!document.getElementById("isPublic"),l=Object(a.generateOcsUrl)("apps/text"+(s?"/public":""),2)+"workspace",u={name:"RichWorkspace",components:{EditorWrapper:function(){return Promise.all([i.e(0),i.e(188),i.e(197),i.e(186),i.e(189)]).then(i.bind(null,307))}},props:{path:{type:String,required:!0}},data:function(){return{focus:!1,file:null,loaded:!1,ready:!1,autofocus:!1}},computed:{shareToken:function(){return document.getElementById("sharingToken")?document.getElementById("sharingToken").value:null}},watch:{path:function(){this.getFileInfo()}},mounted:function(){return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:this.getFileInfo();case 1:case"end":return t.stop()}}),null,this)},methods:{getFileInfo:function(){var t=this;this.loaded=!1,this.autofocus=!1,this.ready=!1;var e={path:this.path};s&&(e.shareToken=this.shareToken),r.a.get(l,{params:e}).then((function(e){var n=e.data.ocs.data;t.file=n.file,t.editing=!0,t.loaded=!0})).catch((function(){t.file=null,t.loaded=!0,t.ready=!0}))},createNew:function(){var t=this;this.creating||(this.creating=!0,window.FileList.createFile("README.md",{scrollTo:!1,animate:!1}).then((function(e,n){t.getFileInfo(),t.autofocus=!0,t.creating=!1})))}}},d=(i(303),i(31)),f=Object(d.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{"icon-loading":!t.loaded||!t.ready,focus:t.focus},attrs:{id:"rich-workspace"}},[!t.file||t.autofocus&&!t.ready?n("div",{staticClass:"empty-workspace",on:{click:t.createNew}},[n("p",{staticClass:"placeholder"},[t._v("\n\t\t\t"+t._s(t.t("text","Add notes, lists or links …"))+"\n\t\t")])]):t._e(),t._v(" "),t.file?n("EditorWrapper",{directives:[{name:"show",rawName:"v-show",value:t.ready,expression:"ready"}],key:t.file.id,attrs:{"file-id":t.file.id,"relative-path":t.file.path,"share-token":t.shareToken,active:!0,autohide:!0,mime:t.file.mimetype,autofocus:t.autofocus},on:{ready:function(e){t.ready=!0},focus:function(e){t.focus=!0},blur:function(e){t.focus=!1}}}):t._e()],1)}),[],!1,null,"f1bb69d0",null).exports;i.d(n,"b",(function(){return p})),i.d(n,"c",(function(){return h})),i.d(n,"d",(function(){return b})),i.d(n,"a",(function(){return m}));
/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
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
var p=function(t,e){var n,i;return regeneratorRuntime.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,regeneratorRuntime.awrap(r()({method:"PROPFIND",url:Object(a.generateRemoteUrl)("dav/files/".concat(t).concat(e)),headers:{requesttoken:OC.requestToken,"content-Type":"text/xml"},data:'<?xml version="1.0"?>\n<d:propfind  xmlns:d="DAV:" xmlns:oc="http://owncloud.org/ns" xmlns:nc="http://nextcloud.org/ns" xmlns:ocs="http://open-collaboration-services.org/ns">\n  <d:prop>\n    <d:getlastmodified />\n    <d:getetag />\n    <d:getcontenttype />\n    <d:resourcetype />\n    <oc:fileid />\n    <oc:permissions />\n    <oc:size />\n    <d:getcontentlength />\n    <nc:has-preview />\n    <nc:mount-type />\n    <nc:is-encrypted />\n    <ocs:share-permissions />\n    <oc:tags />\n    <oc:favorite />\n    <oc:comments-unread />\n    <oc:owner-id />\n    <oc:owner-display-name />\n    <oc:share-types />\n  </d:prop>\n</d:propfind>'}));case 2:return n=o.sent,i=OCA.Files.App.fileList.filesClient._client.parseMultiStatus(n.data),o.abrupt("return",i.map((function(t){var e=OCA.Files.App.fileList.filesClient._parseFileInfo(t);return e.href=t.href,e})));case 5:case"end":return o.stop()}}))},b=function(){var e={attach:function(e){var n=e.fileList;"files"!==n.id&&"files.public"!==n.id||e.addMenuEntry({id:"file",displayName:t("text","New text document"),templateName:t("text","New text document")+".md",iconClass:"icon-filetype-text",fileType:"file",actionHandler:function(t){n.createFile(t).then((function(t,e){var i=new OCA.Files.FileInfoModel(e);void 0!==OCA.Viewer?OCA.Files.fileActions.triggerAction("view",i,n):void 0===OCA.Viewer&&OCA.Files.fileActions.triggerAction("Edit with text app",i,n)}))}})}};OC.Plugins.register("OCA.Files.NewFileMenu",e)},h=function(){var e=document.getElementById("sharingToken")?document.getElementById("sharingToken").value:null,n=document.getElementById("dir").value;if(!e||""!==n){var o=document.createElement("div");o.id="text-viewer-fallback",document.body.appendChild(o);for(var r=function(n){return OCA.Files.fileActions.register(n,"Edit with text app",OC.PERMISSION_UPDATE|OC.PERMISSION_READ,OC.imagePath("core","actions/rename"),(function(t){var n=window.FileList.findFile(t);Promise.all([i.e(0).then(i.bind(null,306)),Promise.all([i.e(0),i.e(199),i.e(194)]).then(i.bind(null,634))]).then((function(i){var r=window.FileList.getCurrentDirectory()+"/"+t,a=i[0].default;a.prototype.t=window.t,a.prototype.n=window.n,a.prototype.OCA=window.OCA;var c=i[1].default;new a({render:function(t){return t(c,{props:{fileId:n?n.id:null,active:!0,shareToken:e,relativePath:r,mimeType:n.mimetype}})}}).$mount(o)}))}),t("text","Edit"))},a=0;a<c.a.length;a++)r(c.a[a]),OCA.Files.fileActions.setDefault(c.a[a],"Edit with text app")}},m={el:null,attach:function(t){"files"!==t.id&&"files.public"!==t.id||(this.el=document.createElement("div"),t.registerHeader({id:"workspace",el:this.el,render:this.render.bind(this),priority:10}))},render:function(t){var e=this;i.e(0).then(i.bind(null,306)).then((function(n){var i=n.default;e.el.id="files-workspace-wrapper",i.prototype.t=window.t,i.prototype.n=window.n,i.prototype.OCA=window.OCA;var o=new(i.extend(f))({propsData:{path:t.getCurrentDirectory()}}).$mount(e.el);t.$el.on("changeDirectory",(function(t){o.path=t.dir.toString()}))}))}}},622:function(t,e,n){"use strict";var i=n(335);n.n(i).a},623:function(t,e,n){(t.exports=n(153)(!1)).push([t.i,".menubar[data-v-58a92139]{position:fixed;position:-webkit-sticky;position:sticky;top:0;display:flex;z-index:10010;background-color:var(--color-main-background-translucent);height:44px}.menubar.autohide[data-v-58a92139]{visibility:hidden;opacity:0;transition:visibility 0.2s 0.4s, opacity 0.2s 0.4s}.menubar.autohide.is-focused[data-v-58a92139]{visibility:visible;opacity:1}.menubar .menubar-icons[data-v-58a92139]{flex-grow:1;margin-left:calc((100% - 660px) / 2)}@media (max-width: 660px){.menubar .menubar-icons[data-v-58a92139]{margin-left:0}}.menubar button[data-v-58a92139]{width:44px;height:44px;margin:0;background-size:16px;border:0;background-color:transparent;opacity:.5;color:var(--color-main-text);background-position:center center;vertical-align:top}.menubar button[data-v-58a92139]:hover,.menubar button[data-v-58a92139]:focus,.menubar button[data-v-58a92139]:active{background-color:var(--color-background-dark)}.menubar button.is-active[data-v-58a92139],.menubar button[data-v-58a92139]:hover,.menubar button[data-v-58a92139]:focus{opacity:1}.menubar button.icon-undo[data-v-58a92139],.menubar button.icon-redo[data-v-58a92139]{opacity:.4}.menubar .submenu[data-v-58a92139]{display:inline-block;width:44px;height:44px;position:relative;vertical-align:top}\n",""])},624:function(t,e,n){"use strict";var i=n(336);n.n(i).a},625:function(t,e,n){(t.exports=n(153)(!1)).push([t.i,".menububble[data-v-b937b670]{position:absolute;display:flex;z-index:10020;background:var(--color-main-background-translucent);box-shadow:0 1px 5px var(--color-box-shadow);border-radius:5px;padding:0.3rem;margin-bottom:0.5rem;visibility:hidden;opacity:0;transform:translateX(-50%);transition:opacity 0.2s, visibility 0.2s}.menububble.is-active[data-v-b937b670]{opacity:1;visibility:visible}.menububble__button[data-v-b937b670]{display:inline-flex;border:0;padding:0.2rem 0.5rem;margin-right:0.2rem;border-radius:3px;cursor:pointer}.menububble__button[data-v-b937b670]:last-child{margin-right:0}.menububble__form[data-v-b937b670]{display:flex;align-items:center}.menububble__input[data-v-b937b670]{font:inherit;border:none;background:transparent;min-width:150px}\n",""])},632:function(e,n,i){"use strict";i.r(n);var o=i(316),r=i(319),a=i.n(r),c=[{label:t("text","Undo"),class:"icon-undo",isActive:function(t){},action:function(t){return t.undo()}},{label:t("text","Redo"),class:"icon-redo",isActive:function(t){},action:function(t){return t.redo()}},{label:t("text","Bold"),class:"icon-bold",isActive:function(t){return t.strong()},action:function(t){return t.strong()}},{label:t("text","Italic"),class:"icon-italic",isActive:function(t){return t.em()},action:function(t){return t.em()}},{label:t("text","Strikethrough"),class:"icon-strike",isActive:function(t){return t.strike()},action:function(t){return t.strike()}},{label:t("text","Paragraph"),class:"icon-paragraph",isActive:function(t){},action:function(t){return t.paragraph()}},{label:t("text","Headings"),visible:!1,children:[{label:t("text","Heading 1"),class:"icon-h1",isActive:function(t){return t.heading({level:1})},action:function(t){return t.heading({level:1})}},{label:t("text","Heading 2"),class:"icon-h2",isActive:function(t){return t.heading({level:2})},action:function(t){return t.heading({level:2})}},{label:t("text","Heading 3"),class:"icon-h3",isActive:function(t){return t.heading({level:3})},action:function(t){return t.heading({level:3})}},{label:t("text","Heading 4"),class:"icon-h4",isActive:function(t){return t.heading({level:4})},action:function(t){return t.heading({level:4})}},{label:t("text","Heading 5"),class:"icon-h5",isActive:function(t){return t.heading({level:5})},action:function(t){return t.heading({level:5})}},{label:t("text","Heading 6"),class:"icon-h6",isActive:function(t){return t.heading({level:6})},action:function(t){return t.heading({level:6})}}]},{label:t("text","Unordered list"),class:"icon-ul",isActive:function(t){return t.bullet_list()},action:function(t){return t.bullet_list_item()}},{label:t("text","Ordered list"),class:"icon-ol",isActive:function(t){return t.ordered_list()},action:function(t){return t.ordered_list()}},{label:t("text","ToDo list"),class:"icon-checkmark",isActive:function(t){return!1},action:function(t){return t.todo_item()}},{label:t("text","Blockquote"),class:"icon-quote",isActive:function(t){return t.blockquote()},action:function(t){return t.blockquote()}},{label:t("text","Code block"),class:"icon-code",isActive:function(t){return t.code_block()},action:function(t){return t.code_block()}}],s=i(50),l=i(619),u=i.n(l),d=i(620),f=i.n(d),p=i(334),b=i.n(p),h=i(621),m=i.n(h);function v(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var n=[],i=!0,o=!1,r=void 0;try{for(var a,c=t[Symbol.iterator]();!(i=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);i=!0);}catch(t){o=!0,r=t}finally{try{i||null==c.return||c.return()}finally{if(o)throw r}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function g(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var k={name:"MenuBar",components:{EditorMenuBar:o.c,ActionButton:f.a,PopoverMenu:b.a,Actions:u.a},directives:{Tooltip:a.a,ClickOutside:m.a},props:{editor:{type:Object,required:!1,default:null},isRichEditor:{type:Boolean,default:!0},autohide:{type:Boolean,default:!1}},data:function(){return{windowWidth:0,windowHeight:0,forceRecompute:0,submenuVisibility:{},icons:g(c)}},computed:{isPublic:function(){return document.getElementById("isPublic")&&"1"===document.getElementById("isPublic").value},isHiddenInMenu:function(){var t=this;return function(e){return e-t.iconCount>=0}},getIconClasses:function(){return function(t,e){var n={"is-active":e.isActive(t)};return n[e.class]=!0,n}},isChildMenuVisible:function(){var t=this;return function(e){return!!t.submenuVisibility.hasOwnProperty(e.label)&&t.submenuVisibility[e.label]}},allIcons:function(){var e=this;return this.isPublic?this.icons:[].concat(g(this.icons),[{label:t("text","Insert image"),class:"icon-image",isActive:function(){},action:function(t){e.showImagePrompt(t.image)}}])},childPopoverMenu:function(){var t=this;return function(e,n,i,o){var r=[],a=function(a){r.push({text:i[a].label,icon:i[a].class,action:function(){i[a].action(n),t.hideChildMenu(o)},active:i[a].isActive(e)})};for(var c in i)a(c);return r}},childIconClass:function(){return function(t,e){for(var n in e){var i=e[n];if(i.isActive(t))return i.class}return"icon-h1"}},iconCount:function(){this.forceRecompute,this.windowWidth;var t=this.$refs.menubar&&this.$refs.menubar.clientWidth>100?this.$refs.menubar.clientWidth:this.windowWidth-200,e=Math.max(Math.floor(t/44)-2,0);return e}},beforeMount:function(){this.redrawMenuBar()},mounted:function(){window.addEventListener("resize",this.getWindowWidth)},beforeDestroy:function(){window.removeEventListener("resize",this.getWindowWidth)},methods:{redrawMenuBar:function(){var t=this;this.$nextTick((function(){t.getWindowWidth(),t.forceRecompute++}))},clickIcon:function(t,e){return e.action(t)},getWindowWidth:function(t){this.windowWidth=document.documentElement.clientWidth},getWindowHeight:function(t){this.windowHeight=document.documentElement.clientHeight},hideChildMenu:function(t){this.$set(this.submenuVisibility,t.label,!1)},toggleChildMenu:function(t){var e=!!this.submenuVisibility.hasOwnProperty(t.label)&&this.submenuVisibility[t.label];this.$set(this.submenuVisibility,t.label,!e)},showImagePrompt:function(t){var e=OC.getCurrentUser();if(e){var n=t;OC.dialogs.filepicker("Insert an image",(function(t){Object(s.b)(e.uid,t).then((function(t){var e=t[0];console.debug(e);var i=OC.generateUrl("/core/preview?")+"fileId=".concat(e.id,"&x=1024&y=1024&a=true"),o=OC.generateUrl("/f/"+e.id),r={mimetype:e.mimetype,hasPreview:e.hasPreview,fileId:e.id},a=(e.hasPreview?i:o)+"#"+Object.entries(r).map((function(t){var e=v(t,2),n=e[0],i=e[1];return"".concat(n,"=").concat(encodeURIComponent(i))})).join("&");n({src:a,alt:e.name})}))}),!1,[],!0)}}}},w=(i(622),i(31)),y=Object(w.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("EditorMenuBar",{attrs:{editor:t.editor},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.commands,o=e.isActive,r=e.focused;return[n("div",{staticClass:"menubar",class:{"is-focused":r,autohide:t.autohide}},[t.isRichEditor?n("div",{ref:"menubar",staticClass:"menubar-icons"},[t._l(t.allIcons,(function(e,r){return[e.class?n("button",{directives:[{name:"show",rawName:"v-show",value:r<t.iconCount,expression:"$index < iconCount"}],key:e.label,class:t.getIconClasses(o,e),attrs:{title:e.label},on:{click:function(n){return t.clickIcon(i,e)}}}):[n("div",{directives:[{name:"show",rawName:"v-show",value:r<t.iconCount,expression:"$index < iconCount"},{name:"click-outside",rawName:"v-click-outside",value:function(){return t.hideChildMenu(e)},expression:"() => hideChildMenu(icon)"}],key:e.label,staticClass:"submenu"},[n("button",{class:t.childIconClass(o,e.children),attrs:{title:e.label},on:{click:function(n){return n.preventDefault(),t.toggleChildMenu(e)}}}),t._v(" "),n("div",{staticClass:"popovermenu menu-center",class:{open:t.isChildMenuVisible(e)}},[n("PopoverMenu",{attrs:{menu:t.childPopoverMenu(o,i,e.children,e)}})],1)])]]})),t._v(" "),n("Actions",[t._l(t.allIcons,(function(e,o){return[e.class&&t.isHiddenInMenu(o)?n("ActionButton",{key:e.class,attrs:{icon:e.class},on:{click:function(n){return t.clickIcon(i,e)}}},[t._v("\n\t\t\t\t\t\t"+t._s(e.label)+"\n\t\t\t\t\t")]):!e.class&&t.isHiddenInMenu(o)?t._l(e.children,(function(e){return n("ActionButton",{key:e.class,attrs:{icon:e.class},on:{click:function(n){return t.clickIcon(i,e)}}},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.label)+"\n\t\t\t\t\t\t")])})):t._e()]}))],2)],2):t._e(),t._v(" "),t._t("default",[t._v("\n\t\t\tLeft side\n\t\t")])],2)]}}],null,!0)})}),[],!1,null,"58a92139",null);n.default=y.exports},635:function(t,e,n){"use strict";n.r(e);var i=n(316),o=n(319),r=n.n(o),a={name:"MenuBubble",components:{EditorMenuBubble:i.d},directives:{tooltip:r.a},props:{editor:{type:Object,required:!1,default:null}},data:function(){return{linkUrl:null,linkMenuIsActive:!1}},methods:{showLinkMenu:function(t){var e=this;this.linkUrl=t.href,this.linkMenuIsActive=!0,this.$nextTick((function(){e.$refs.linkInput.focus()}))},hideLinkMenu:function(){this.linkUrl=null,this.linkMenuIsActive=!1},setLinkUrl:function(t,e){!e||e.match(/^[a-zA-Z]+:\/\//)||e.match(/^\//)||(e="https://"+e),t({href:e}),this.hideLinkMenu()}}},c=(n(624),n(31)),s=Object(c.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("EditorMenuBubble",{staticClass:"menububble",attrs:{editor:t.editor},on:{hide:t.hideLinkMenu},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.commands,o=e.isActive,r=e.getMarkAttrs,a=e.menu;return[n("div",{staticClass:"menububble",class:{"is-active":a.isActive},style:"left: "+a.left+"px; bottom: "+a.bottom+"px;"},[t.linkMenuIsActive?n("form",{staticClass:"menububble__form",on:{submit:function(e){return e.preventDefault(),t.setLinkUrl(i.link,t.linkUrl)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.linkUrl,expression:"linkUrl"}],ref:"linkInput",staticClass:"menububble__input",attrs:{type:"text",placeholder:"https://"},domProps:{value:t.linkUrl},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.hideLinkMenu(e)},input:function(e){e.target.composing||(t.linkUrl=e.target.value)}}}),t._v(" "),n("button",{staticClass:"menububble__button icon-confirm",attrs:{type:"button"},on:{click:function(e){return t.setLinkUrl(i.link,t.linkUrl)}}})]):[n("button",{staticClass:"menububble__button",class:{"is-active":o.link()},on:{click:function(e){t.showLinkMenu(r("link"))}}},[n("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:o.link()?"Update Link":"Add Link",expression:"isActive.link() ? 'Update Link' : 'Add Link'"}],staticClass:"icon-link"}),t._v(" "),n("span",[t._v(t._s(t.t("text","Add link")))])])]],2)]}}])})}),[],!1,null,"b937b670",null);e.default=s.exports}}]);
//# sourceMappingURL=editor-rich.js.map?v=a0a2e88ecab676f61b75