/*! For license information please see editor-rich.js.LICENSE.txt */
(self.webpackChunktext=self.webpackChunktext||[]).push([["editor-rich"],{16952:(n,e,i)=>{"use strict";i.d(e,{h0:()=>j,Lz:()=>E,YZ:()=>O,tH:()=>M});var o=i(74411),a=i(4820),r=i(79753),c=i(27594);function s(n,t,e,i,o,a,r){try{var c=n[a](r),s=c.value}catch(n){return void e(n)}c.done?t(s):Promise.resolve(s).then(i,o)}var l=!!document.getElementById("isPublic"),A=(0,r.generateOcsUrl)("apps/text"+(l?"/public":"")+"/workspace",2);const d={name:"RichWorkspace",components:{EditorWrapper:function(){return Promise.all([i.e("vendors"),i.e("editor")]).then(i.bind(i,99206))}},props:{path:{type:String,required:!0}},data:function(){return{focus:!1,folder:null,file:null,loaded:!1,ready:!1,autofocus:!1,darkTheme:OCA.Accessibility&&"dark"===OCA.Accessibility.theme,enabled:OCA.Text.RichWorkspaceEnabled}},computed:{shareToken:function(){return document.getElementById("sharingToken")?document.getElementById("sharingToken").value:null},canCreate:function(){return!!(this.folder&&this.folder.permissions&OC.PERMISSION_CREATE)},showEmptyWorkspace:function(){return(!this.file||this.autofocus&&!this.ready)&&this.canCreate}},watch:{path:function(){this.getFileInfo()},focus:function(n){n||document.querySelector("#editor").scrollTo(0,0)}},mounted:function(){var n,t=this;return(n=regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.enabled&&t.getFileInfo(),(0,c.subscribe)("Text::showRichWorkspace",(function(){t.enabled=!0,t.getFileInfo()})),(0,c.subscribe)("Text::hideRichWorkspace",(function(){t.enabled=!1}));case 3:case"end":return n.stop()}}),n)})),function(){var t=this,e=arguments;return new Promise((function(i,o){var a=n.apply(t,e);function r(n){s(a,i,o,r,c,"next",n)}function c(n){s(a,i,o,r,c,"throw",n)}r(void 0)}))})()},methods:{unfocus:function(){},reset:function(){var n=this;this.file=null,this.focus=!1,this.$nextTick((function(){n.creating=!1,n.getFileInfo()}))},getFileInfo:function(){var n=this;this.loaded=!1,this.autofocus=!1,this.ready=!1;var t={path:this.path};return l&&(t.shareToken=this.shareToken),a.default.get(A,{params:t}).then((function(t){var e=t.data.ocs.data;return n.folder=e.folder||null,n.file=e.file,n.editing=!0,n.loaded=!0,!0})).catch((function(t){return t.response.data.ocs&&t.response.data.ocs.data.folder?n.folder=t.response.data.ocs.data.folder:n.folder=null,n.file=null,n.loaded=!0,n.ready=!0,n.creating=!1,!1}))},createNew:function(){var n=this;this.creating||(this.creating=!0,this.getFileInfo().then((function(t){n.autofocus=!0,t||window.FileList.createFile("Readme.md",{scrollTo:!1,animate:!1}).then((function(t,e){n.getFileInfo()}))})))}}};var u=i(93379),h=i.n(u),p=i(7795),f=i.n(p),m=i(90569),C=i.n(m),v=i(3565),b=i.n(v),g=i(19216),k=i.n(g),x=i(44589),y=i.n(x),w=i(71586),I={};I.styleTagTransform=y(),I.setAttributes=b(),I.insert=C().bind(null,"head"),I.domAPI=f(),I.insertStyleElement=k();h()(w.Z,I);w.Z&&w.Z.locals&&w.Z.locals;const B=(0,i(51900).Z)(d,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return n.enabled?e("div",{class:{"icon-loading":!n.loaded||!n.ready,focus:n.focus,dark:n.darkTheme,creatable:n.canCreate},attrs:{id:"rich-workspace"}},[n.showEmptyWorkspace?e("div",{staticClass:"empty-workspace",on:{click:n.createNew}},[e("p",{staticClass:"placeholder"},[n._v("\n\t\t\t"+n._s(n.t("text","Add notes, lists or links …"))+"\n\t\t")])]):n._e(),n._v(" "),n.file?e("EditorWrapper",{directives:[{name:"show",rawName:"v-show",value:n.ready,expression:"ready"}],key:n.file.id,attrs:{"file-id":n.file.id,"relative-path":n.file.path,"share-token":n.shareToken,active:!0,autohide:!0,mime:n.file.mimetype,autofocus:n.autofocus},on:{ready:function(t){n.ready=!0},focus:function(t){n.focus=!0},blur:n.unfocus,error:n.reset}}):n._e()],1):n._e()}),[],!1,null,"7feeeb6a",null).exports;var P=i(23895),D="Edit with text app",E=function(n,t){var e=n.split("/"),i=t.split("/");for(e.pop();e[0]===i[0];)e.shift(),i.shift();var o=e.fill("..").concat(i),a=t.split("/");return o.length<a.length?o.join("/"):t},M=function(){var n={attach:function(n){var e=n.fileList;"files"!==e.id&&"files.public"!==e.id||n.addMenuEntry({id:"file",displayName:t("text","New text document"),templateName:t("text","New text document")+".md",iconClass:"icon-filetype-text",fileType:"file",actionHandler:function(n){e.createFile(n).then((function(n,t){var i=new OCA.Files.FileInfoModel(t);void 0!==OCA.Viewer?OCA.Files.fileActions.triggerAction("view",i,e):void 0===OCA.Viewer&&OCA.Files.fileActions.triggerAction(D,i,e)}))}})}};OC.Plugins.register("OCA.Files.NewFileMenu",n)},O=function(){var n=document.getElementById("sharingToken")?document.getElementById("sharingToken").value:null,e=document.getElementById("dir").value;if(!n||""!==e){var a=document.createElement("div");a.id="text-viewer-fallback",document.body.appendChild(a);for(var c=function(e){return OCA.Files.fileActions.register(e,D,OC.PERMISSION_UPDATE|OC.PERMISSION_READ,(0,r.imagePath)("core","actions/rename"),(function(t){var e=window.FileList.findFile(t);Promise.all([Promise.resolve().then(i.bind(i,20144)),Promise.all([i.e("vendors"),i.e("files-modal")]).then(i.bind(i,19886))]).then((function(i){var o=window.FileList.getCurrentDirectory()+"/"+t,r=i[0].default;r.prototype.t=window.t,r.prototype.n=window.n,r.prototype.OCA=window.OCA;var c=i[1].default;new r({render:function(t){return t(c,{props:{fileId:e?e.id:null,active:!0,shareToken:n,relativePath:o,mimeType:e.mimetype}})}}).$mount(a)}))}),t("text","Edit"))},s=0;s<o.SP.length;s++)c(o.SP[s]),OCA.Files.fileActions.setDefault(o.SP[s],D)}},j={el:null,attach:function(n){"files"!==n.id&&"files.public"!==n.id||(this.el=document.createElement("div"),n.registerHeader({id:"workspace",el:this.el,render:this.render.bind(this),priority:10}))},render:function(n){var t=this;"files"!==n.id&&"files.public"!==n.id||Promise.resolve().then(i.bind(i,20144)).then((function(e){var i=e.default;t.el.id="files-workspace-wrapper",i.prototype.t=window.t,i.prototype.n=window.n,i.prototype.OCA=window.OCA;var o=new(i.extend(B))({propsData:{path:n.getCurrentDirectory()},store:P.Z}).$mount(t.el);n.$el.on("urlChanged",(function(n){o.path=n.dir.toString()})),n.$el.on("changeDirectory",(function(n){o.path=n.dir.toString()}))}))}}},74411:(n,t,e)=>{"use strict";e.d(t,{SP:()=>a,lF:()=>i,w_:()=>o});var i=["text/markdown"],o=["text/plain","application/cmd","application/x-empty","application/x-msdos-program","application/javascript","application/json","application/x-perl","application/x-php","application/x-tex","application/xml","application/yaml","text/css","text/csv","text/html","text/org","text/x-c","text/x-c++src","text/x-h","text/x-java-source","text/x-ldif","text/x-python","text/x-shellscript"],a=[].concat(i,o)},83737:(n,t,e)=>{"use strict";e.d(t,{Z:()=>c});var i=e(87537),o=e.n(i),a=e(23645),r=e.n(a)()(o());r.push([n.id,'.menubar[data-v-171a6c90]{--background-blur: blur(10px);position:fixed;position:-webkit-sticky;position:sticky;top:0;display:flex;justify-content:flex-end;z-index:10021;background-color:var(--color-main-background-translucent);-webkit-backdrop-filter:var(--background-blur);backdrop-filter:var(--background-blur);min-height:50px;padding-top:3px;padding-bottom:3px}.menubar.autohide[data-v-171a6c90]{visibility:hidden;opacity:0;transition:visibility .2s .4s,opacity .2s .4s}.menubar.autohide.is-focused[data-v-171a6c90]{visibility:visible;opacity:1}.menubar .menubar-icons[data-v-171a6c90]{flex-grow:1;margin-left:calc((100% - 660px)/2)}@media(max-width: 660px){.menubar .menubar-icons[data-v-171a6c90]{margin-left:0}}.menubar[data-v-171a6c90] .action-item__menu ul{max-height:calc(100vh - 88px);overflow:scroll}.menubar button[data-v-171a6c90]{position:relative;width:44px;height:44px;margin:0;background-size:16px;border:0;background-color:transparent;opacity:.5;color:var(--color-main-text);background-position:center center;vertical-align:top}.menubar button[data-v-171a6c90]:hover,.menubar button[data-v-171a6c90]:focus,.menubar button[data-v-171a6c90]:active{background-color:var(--color-background-dark)}.menubar button.is-active[data-v-171a6c90]::before{transform:translateX(-50%);border-radius:100%;position:absolute;background:var(--color-primary-element);bottom:3px;height:6px;width:6px;content:"";left:50%}.menubar button.is-active[data-v-171a6c90],.menubar button[data-v-171a6c90]:hover,.menubar button[data-v-171a6c90]:focus{opacity:1}.menubar button.icon-undo[data-v-171a6c90],.menubar button.icon-redo[data-v-171a6c90]{opacity:.8}.menubar button.icon-undo[data-v-171a6c90]:disabled,.menubar button.icon-redo[data-v-171a6c90]:disabled{opacity:.4}.menubar .submenu[data-v-171a6c90],.menubar .menuitem-emoji[data-v-171a6c90]{display:inline-block;width:44px;height:44px;position:relative;vertical-align:top}',"",{version:3,sources:["webpack://./src/components/MenuBar.vue"],names:[],mappings:"AAyWA,0BACC,6BAAA,CACA,cAAA,CACA,uBAAA,CACA,eAAA,CACA,KAAA,CACA,YAAA,CACA,wBAAA,CACA,aAAA,CACA,yDAAA,CACA,8CAAA,CACA,sCAAA,CACA,eAAA,CACA,eAAA,CACA,kBAAA,CAEA,mCACC,iBAAA,CACA,SAAA,CACA,6CAAA,CACA,8CACC,kBAAA,CACA,SAAA,CAGF,yCACC,WAAA,CACA,kCAAA,CAED,yBACC,yCACC,aAAA,CAAA,CAGF,gDACC,6BAAA,CACA,eAAA,CAIF,iCACC,iBAAA,CACA,UAAA,CACA,WAAA,CACA,QAAA,CACA,oBAAA,CACA,QAAA,CACA,4BAAA,CACA,UAAA,CACA,4BAAA,CACA,iCAAA,CACA,kBAAA,CACA,sHACC,6CAAA,CAGD,mDACC,0BAAA,CACA,kBAAA,CACA,iBAAA,CACA,uCAAA,CACA,UAAA,CACA,UAAA,CACA,SAAA,CACA,UAAA,CACA,QAAA,CAGD,yHAGC,SAAA,CAGD,sFAEC,UAAA,CAEA,wGACC,UAAA,CAKH,6EACC,oBAAA,CACA,UAAA,CACA,WAAA,CACA,iBAAA,CACA,kBAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.menubar {\n\t--background-blur: blur(10px);\n\tposition: fixed;\n\tposition: -webkit-sticky;\n\tposition: sticky;\n\ttop: 0;\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\tz-index: 10021; // above modal-header and menububble so menubar is always on top\n\tbackground-color: var(--color-main-background-translucent);\n\t-webkit-backdrop-filter: var(--background-blur);\n\tbackdrop-filter: var(--background-blur);\n\tmin-height: 50px; // important for mobile so that the buttons are always inside the container\n\tpadding-top:3px;\n\tpadding-bottom: 3px;\n\n\t&.autohide {\n\t\tvisibility: hidden;\n\t\topacity: 0;\n\t\ttransition: visibility 0.2s 0.4s, opacity 0.2s 0.4s;\n\t\t&.is-focused {\n\t\t\tvisibility: visible;\n\t\t\topacity: 1;\n\t\t}\n\t}\n\t.menubar-icons {\n\t\tflex-grow: 1;\n\t\tmargin-left: calc((100% - 660px) / 2);\n\t}\n\t@media (max-width: 660px) {\n\t\t.menubar-icons {\n\t\t\tmargin-left: 0;\n\t\t}\n\t}\n\t&::v-deep .action-item__menu ul {\n\t\tmax-height: calc(100vh - 88px);\n\t\toverflow: scroll;\n\t}\n}\n\n.menubar button {\n\tposition: relative;\n\twidth: 44px;\n\theight: 44px;\n\tmargin: 0;\n\tbackground-size: 16px;\n\tborder: 0;\n\tbackground-color: transparent;\n\topacity: .5;\n\tcolor: var(--color-main-text);\n\tbackground-position: center center;\n\tvertical-align: top;\n\t&:hover, &:focus, &:active {\n\t\tbackground-color: var(--color-background-dark);\n\t}\n\n\t&.is-active::before {\n\t\ttransform: translateX(-50%);\n\t\tborder-radius: 100%;\n\t\tposition: absolute;\n\t\tbackground: var(--color-primary-element);\n\t\tbottom: 3px;\n\t\theight: 6px;\n\t\twidth: 6px;\n\t\tcontent: '';\n\t\tleft: 50%;\n\n\t}\n\t&.is-active,\n\t&:hover,\n\t&:focus {\n\t\topacity: 1;\n\t}\n\n\t&.icon-undo,\n\t&.icon-redo {\n\t\topacity: .8;\n\n\t\t&:disabled {\n\t\t\topacity: .4;\n\t\t}\n\t}\n}\n\n.menubar .submenu, .menubar .menuitem-emoji {\n\tdisplay: inline-block;\n\twidth: 44px;\n\theight: 44px;\n\tposition: relative;\n\tvertical-align: top;\n}\n"],sourceRoot:""}]);const c=r},71586:(n,t,e)=>{"use strict";e.d(t,{Z:()=>c});var i=e(87537),o=e.n(i),a=e(23645),r=e.n(a)()(o());r.push([n.id,'#rich-workspace[data-v-7feeeb6a]{padding:0 50px;margin-bottom:-24px;text-align:left;max-height:0;transition:max-height .5s cubic-bezier(0, 1, 0, 1);z-index:61;position:relative}#rich-workspace.creatable[data-v-7feeeb6a]{min-height:90px}#rich-workspace[data-v-7feeeb6a]:only-child{margin-bottom:0}.empty-workspace[data-v-7feeeb6a]{padding-top:43px;color:var(--color-text-maxcontrast);height:0}#rich-workspace[data-v-7feeeb6a] div[contenteditable=false]{width:100%;padding:0px;background-color:var(--color-main-background);opacity:1;border:none}#rich-workspace[data-v-7feeeb6a] #editor-container{height:100%;position:unset !important;top:auto !important}#rich-workspace[data-v-7feeeb6a] #editor-wrapper{position:unset !important;overflow:visible}#rich-workspace[data-v-7feeeb6a] #editor{overflow:scroll !important;max-height:calc(40vh - 40px)}#rich-workspace[data-v-7feeeb6a] .content-wrapper{padding-left:10px}#rich-workspace[data-v-7feeeb6a] #editor-wrapper .ProseMirror{padding:0px;margin:0}#rich-workspace[data-v-7feeeb6a] .menubar{z-index:61;margin-bottom:-10px}#rich-workspace[data-v-7feeeb6a] .menubar .menubar-icons{margin-left:0}#rich-workspace[data-v-7feeeb6a] .editor__content{margin:0}#rich-workspace.focus[data-v-7feeeb6a]{max-height:50vh}#rich-workspace[data-v-7feeeb6a]:not(.focus){max-height:30vh;position:relative;overflow:hidden}#rich-workspace[data-v-7feeeb6a]:not(.focus):not(.icon-loading):after{content:"";position:absolute;z-index:1;bottom:0;left:0;pointer-events:none;background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0), var(--color-main-background));width:100%;height:4em}#rich-workspace.dark[data-v-7feeeb6a]:not(.focus):not(.icon-loading):after{background-image:linear-gradient(to bottom, rgba(0, 0, 0, 0), var(--color-main-background))}@media only screen and (max-width: 1024px){#rich-workspace[data-v-7feeeb6a]:not(.focus){max-height:30vh}}html.ie #rich-workspace[data-v-7feeeb6a] #editor-container{position:initial}html.ie #rich-workspace[data-v-7feeeb6a] #editor-wrapper{position:relative !important;top:auto !important}html.ie #rich-workspace[data-v-7feeeb6a] #editor{display:flex;flex-direction:column;overflow:hidden !important}html.ie #rich-workspace[data-v-7feeeb6a] .menubar{position:relative;overflow:hidden;flex-shrink:0;height:44px;top:auto}html.ie #rich-workspace[data-v-7feeeb6a] #editor>div:nth-child(2){min-height:44px;overflow-x:hidden;overflow-y:auto;flex-shrink:1}',"",{version:3,sources:["webpack://./src/views/RichWorkspace.vue"],names:[],mappings:"AA0KA,iCACC,cAAA,CAEA,mBAAA,CACA,eAAA,CACA,YAAA,CACA,kDAAA,CACA,UAAA,CACA,iBAAA,CACA,2CACC,eAAA,CAKF,4CACC,eAAA,CAGD,kCACC,gBAAA,CACA,mCAAA,CACA,QAAA,CAGD,4DACC,UAAA,CACA,WAAA,CACA,6CAAA,CACA,SAAA,CACA,WAAA,CAGD,mDACC,WAAA,CACA,yBAAA,CACA,mBAAA,CAGD,iDACC,yBAAA,CACA,gBAAA,CAGD,yCACC,0BAAA,CACA,4BAAA,CAGD,kDACC,iBAAA,CAGD,8DACC,WAAA,CACA,QAAA,CAGD,0CACC,UAAA,CAEA,mBAAA,CAGD,yDACC,aAAA,CAGD,kDACC,QAAA,CAGD,uCACC,eAAA,CAGD,6CACC,eAAA,CACA,iBAAA,CACA,eAAA,CAGD,sEACC,UAAA,CACA,iBAAA,CACA,SAAA,CACA,QAAA,CACA,MAAA,CACA,mBAAA,CACA,iGAAA,CACA,UAAA,CACA,UAAA,CAGD,2EACC,2FAAA,CAGD,2CACC,6CACC,eAAA,CAAA,CAMA,2DACC,gBAAA,CAGD,yDACC,4BAAA,CACA,mBAAA,CAGD,iDACC,YAAA,CACA,qBAAA,CACA,0BAAA,CAGD,kDACC,iBAAA,CACA,eAAA,CACA,aAAA,CACA,WAAA,CACA,QAAA,CAGD,kEACC,eAAA,CACA,iBAAA,CACA,eAAA,CACA,aAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n#rich-workspace {\n\tpadding: 0 50px;\n\t/* Slightly reduce vertical space */\n\tmargin-bottom: -24px;\n\ttext-align: left;\n\tmax-height: 0;\n\ttransition: max-height 0.5s cubic-bezier(0, 1, 0, 1);\n\tz-index: 61;\n\tposition: relative;\n\t&.creatable {\n\t\tmin-height: 90px;\n\t}\n}\n\n/* For subfolders, where there are no Recommendations */\n#rich-workspace:only-child {\n\tmargin-bottom: 0;\n}\n\n.empty-workspace {\n\tpadding-top: 43px;\n\tcolor: var(--color-text-maxcontrast);\n\theight: 0;\n}\n\n#rich-workspace::v-deep div[contenteditable=false] {\n\twidth: 100%;\n\tpadding: 0px;\n\tbackground-color: var(--color-main-background);\n\topacity: 1;\n\tborder: none;\n}\n\n#rich-workspace::v-deep #editor-container {\n\theight: 100%;\n\tposition: unset !important;\n\ttop: auto !important;\n}\n\n#rich-workspace::v-deep #editor-wrapper {\n\tposition: unset !important;\n\toverflow: visible;\n}\n\n#rich-workspace::v-deep #editor {\n\toverflow: scroll !important;\n\tmax-height: calc(40vh - 40px);\n}\n\n#rich-workspace::v-deep .content-wrapper {\n\tpadding-left: 10px;\n}\n\n#rich-workspace::v-deep #editor-wrapper .ProseMirror {\n\tpadding: 0px;\n\tmargin: 0;\n}\n\n#rich-workspace::v-deep .menubar {\n\tz-index: 61;\n\t/* Slightly reduce vertical space */\n\tmargin-bottom: -10px;\n}\n\n#rich-workspace::v-deep .menubar .menubar-icons {\n\tmargin-left: 0;\n}\n\n#rich-workspace::v-deep .editor__content {\n\tmargin: 0;\n}\n\n#rich-workspace.focus {\n\tmax-height: 50vh;\n}\n\n#rich-workspace:not(.focus) {\n\tmax-height: 30vh;\n\tposition: relative;\n\toverflow: hidden;\n}\n\n#rich-workspace:not(.focus):not(.icon-loading):after {\n\tcontent: '';\n\tposition: absolute;\n\tz-index: 1;\n\tbottom: 0;\n\tleft: 0;\n\tpointer-events: none;\n\tbackground-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), var(--color-main-background));\n\twidth: 100%;\n\theight: 4em;\n}\n\n#rich-workspace.dark:not(.focus):not(.icon-loading):after {\n\tbackground-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), var(--color-main-background));\n}\n\n@media only screen and (max-width: 1024px) {\n\t#rich-workspace:not(.focus) {\n\t\tmax-height: 30vh;\n\t}\n}\n\nhtml.ie {\n\t#rich-workspace::v-deep {\n\t\t#editor-container {\n\t\t\tposition: initial;\n\t\t}\n\n\t\t#editor-wrapper {\n\t\t\tposition: relative !important;\n\t\t\ttop: auto !important;\n\t\t}\n\n\t\t#editor {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\toverflow: hidden !important;\n\t\t}\n\n\t\t.menubar {\n\t\t\tposition: relative;\n\t\t\toverflow: hidden;\n\t\t\tflex-shrink: 0;\n\t\t\theight: 44px;\n\t\t\ttop: auto;\n\t\t}\n\n\t\t#editor > div:nth-child(2) {\n\t\t\tmin-height: 44px;\n\t\t\toverflow-x: hidden;\n\t\t\toverflow-y: auto;\n\t\t\tflex-shrink: 1;\n\t\t}\n\t}\n}\n\n"],sourceRoot:""}]);const c=r},62774:(n,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>R});var o=i(15168),a=i.n(o);const r=[{label:t("text","Undo"),keyChar:"z",keyModifiers:["ctrl"],class:"icon-undo",isDisabled:function(n){return 0===n.undoDepth()},action:function(n){return n.undo()}},{label:t("text","Redo"),keyChar:"y",keyModifiers:["ctrl"],class:"icon-redo",isDisabled:function(n){return 0===n.redoDepth()},action:function(n){return n.redo()}},{label:t("text","Bold"),keyChar:"b",keyModifiers:["ctrl"],class:"icon-bold",isActive:"strong",action:function(n){return n.toggleBold()}},{label:t("text","Italic"),keyChar:"i",keyModifiers:["ctrl"],class:"icon-italic",isActive:"em",action:function(n){return n.toggleItalic()}},{label:t("text","Strikethrough"),keyChar:"d",keyModifiers:["ctrl"],class:"icon-strike",isActive:"strike",action:function(n){return n.toggleStrike()}},{label:t("text","Headings"),keyChar:"1…6",keyModifiers:["ctrl","shift"],visible:!1,children:[{label:t("text","Heading 1"),class:"icon-h1",isActive:["heading",{level:1}],action:function(n){return n.toggleHeading({level:1})}},{label:t("text","Heading 2"),class:"icon-h2",isActive:["heading",{level:2}],action:function(n){return n.toggleHeading({level:2})}},{label:t("text","Heading 3"),class:"icon-h3",isActive:["heading",{level:3}],action:function(n){return n.toggleHeading({level:3})}},{label:t("text","Heading 4"),class:"icon-h4",isActive:["heading",{level:4}],action:function(n){return n.toggleHeading({level:4})}},{label:t("text","Heading 5"),class:"icon-h5",isActive:["heading",{level:5}],action:function(n){return n.toggleHeading({level:5})}},{label:t("text","Heading 6"),class:"icon-h6",isActive:["heading",{level:6}],action:function(n){return n.toggleHeading({level:6})}}]},{label:t("text","Unordered list"),keyChar:"8",keyModifiers:["ctrl","shift"],class:"icon-ul",isActive:"bulletList",action:function(n){return n.bulletListItem()}},{label:t("text","Ordered list"),keyChar:"9",keyModifiers:["ctrl","shift"],class:"icon-ol",isActive:"orderedList",action:function(n){return n.toggleOrderedList()}},{label:t("text","ToDo list"),class:"icon-checkmark",action:function(n){return n.todo_item()}},{label:t("text","Blockquote"),keyChar:">",keyModifiers:["ctrl"],class:"icon-quote",isActive:"blockquote",action:function(n){return n.toggleBlockquote()}},{label:t("text","Code block"),class:"icon-code",isActive:"codeBlock",action:function(n){return n.toggleCodeBlock()}},{label:t("text","Emoji picker"),class:"icon-emoji",action:function(n,t){return n.insertContent(t)}}];var c=i(16952),s=i(88052),l=i(79440),A=i.n(l),d=i(56286),u=i.n(d),h=i(26533),p=i.n(h),f=i(64056),m=i.n(f),C=i(2649),v=i.n(C),b=i(22200);function g(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==e)return;var i,o,a=[],r=!0,c=!1;try{for(e=e.call(n);!(r=(i=e.next()).done)&&(a.push(i.value),!t||a.length!==t);r=!0);}catch(n){c=!0,o=n}finally{try{r||null==e.return||e.return()}finally{if(c)throw o}}return a}(n,t)||x(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(n){return function(n){if(Array.isArray(n))return y(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||x(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(n,t){if(n){if("string"==typeof n)return y(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?y(n,t):void 0}}function y(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,i=new Array(t);e<t;e++)i[e]=n[e];return i}const w={name:"MenuBar",components:{ActionButton:u(),PopoverMenu:p(),Actions:A(),EmojiPicker:m()},directives:{Tooltip:a(),ClickOutside:v()},mixins:[s.Z],props:{editor:{type:Object,required:!0},isRichEditor:{type:Boolean,default:!0},autohide:{type:Boolean,default:!1},isPublic:{type:Boolean,default:!1},filePath:{type:String,required:!1,default:""}},data:function(){return{windowWidth:0,windowHeight:0,forceRecompute:0,submenuVisibility:{},lastImagePath:null,icons:k(r)}},computed:{isHiddenInMenu:function(){var n=this;return function(t){return t-n.iconCount>=0}},getIconClasses:function(){var n=this;return function(t){var e={};return e[t.class]=!0,e["is-active"]=n.isActive(t),e}},isActive:function(){var n=this;return function(t){var e,i=t.isActive;if(!i)return!1;var o=Array.isArray(i)?i:[i];return(e=n.editor).isActive.apply(e,k(o))}},disabled:function(){return function(n){return!1}},isChildMenuVisible:function(){var n=this;return function(t){return!!Object.prototype.hasOwnProperty.call(n.submenuVisibility,t.label)&&n.submenuVisibility[t.label]}},allIcons:function(){var n=this;return this.isPublic?this.icons:[].concat(k(this.icons),[{label:t("text","Insert image"),class:"icon-image",action:function(t){return n.showImagePrompt(t.setImage)}}])},childPopoverMenu:function(){var n=this;return function(t,e){return t.map((function(t){return{text:t.label,icon:t.class,active:n.isActive(t),action:function(){t.action(n.editor.commands),n.hideChildMenu(e)}}}))}},childIconClasses:function(){var n=this;return function(t){var e=n.childIcon(t);return n.getIconClasses(e)}},childIcon:function(){var n=this;return function(t){return t.find((function(t){return n.isActive(t)}))||t[0]}},iconCount:function(){this.forceRecompute,this.windowWidth;var n=this.$refs.menubar&&this.$refs.menubar.clientWidth>200?this.$refs.menubar.clientWidth:200,t=Math.max(Math.floor(n/44)-2,0);return t-1},imagePath:function(){return this.lastImagePath||this.filePath.split("/").slice(0,-1).join("/")}},mounted:function(){var n=this;window.addEventListener("resize",this.getWindowWidth),this.checkInterval=setInterval((function(){var t=n.$refs.menubar&&n.$refs.menubar.clientWidth>0;n.isRichEditor&&t&&n.redrawMenuBar(),n.isRichEditor&&!t||clearInterval(n.checkInterval)}),100)},beforeDestroy:function(){window.removeEventListener("resize",this.getWindowWidth)},methods:{redrawMenuBar:function(){var n=this;this.$nextTick((function(){n.getWindowWidth(),n.forceRecompute++}))},clickIcon:function(n){var t=n.action(this.editor.chain().focus());t&&t.run()},getWindowWidth:function(n){this.windowWidth=document.documentElement.clientWidth},getWindowHeight:function(n){this.windowHeight=document.documentElement.clientHeight},hideChildMenu:function(n){this.$set(this.submenuVisibility,n.label,!1)},toggleChildMenu:function(n){var t=!!Object.prototype.hasOwnProperty.call(this.submenuVisibility,n.label)&&this.submenuVisibility[n.label];this.$set(this.submenuVisibility,n.label,!t)},showImagePrompt:function(n){var e=this;if((0,b.getCurrentUser)()){var i=n;OC.dialogs.filepicker(t("text","Insert an image"),(function(n){OC.Files.getClient().getFileInfo(n).then((function(n,t){e.lastImagePath=t.path;var o={mimetype:t.mimetype,hasPreview:t.hasPreview},a=(0,c.Lz)(e.filePath,"".concat(t.path,"/").concat(t.name)).split("/").map(encodeURIComponent).join("/"),r=Object.entries(o).map((function(n){var t=g(n,2),e=t[0],i=t[1];return"".concat(e,"=").concat(encodeURIComponent(i))})).join("&"),s="".concat(a,"?fileId=").concat(t.id,"#").concat(r);i({src:s,alt:t.name}).run()}))}),!1,[],!0,void 0,this.imagePath)}},showLinkPrompt:function(n){var t=this;if((0,b.getCurrentUser)()){var e=n;OC.dialogs.filepicker("Insert a link",(function(n){OC.Files.getClient().getFileInfo(n).then((function(n,i){t.lastLinkPath=i.path;var o=t.optimalPathTo("".concat(i.path,"/").concat(i.name)).split("/").map(encodeURIComponent).join("/"),a="".concat(o,"?fileId=").concat(i.id);e({href:a})}))}),!1,[],!0,void 0,this.linkPath)}},optimalPathTo:function(n){var t=n.split("/"),e=this.relativePathTo(n).split("/");return e.length<t.length?e.join("/"):n},relativePathTo:function(n){var t=this.filePath.split("/"),e=n.split("/");for(t.pop();t[0]===e[0];)t.shift(),e.shift();return t.fill("..").concat(e).join("/")},addEmoji:function(n,t){n.action(this.editor.chain().focus(),t).run()},keysString:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i={ctrl:t("text","Ctrl"),alt:t("text","Alt"),shift:t("text","Shift")};return Object.entries(i).filter((function(n){var t=g(n,2),i=t[0];t[1];return e.includes(i)})).map((function(n){var t=g(n,2);t[0];return t[1]})).concat(n.toUpperCase()).join("+")},getKeys:function(n){return n.keyChar&&!this.isMobile?"(".concat(this.keysString(n.keyChar,n.keyModifiers),")"):""},getLabelAndKeys:function(n){return[n.label,this.getKeys(n)].join(" ")}}};var I=i(93379),B=i.n(I),P=i(7795),D=i.n(P),E=i(90569),M=i.n(E),O=i(3565),j=i.n(O),S=i(19216),T=i.n(S),W=i(44589),_=i.n(W),F=i(83737),G={};G.styleTagTransform=_(),G.setAttributes=j(),G.insert=M().bind(null,"head"),G.domAPI=D(),G.insertStyleElement=T();B()(F.Z,G);F.Z&&F.Z.locals&&F.Z.locals;const R=(0,i(51900).Z)(w,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"menubar",class:{"is-focused":n.editor.focused,autohide:n.autohide}},[n.isRichEditor?e("div",{ref:"menubar",staticClass:"menubar-icons"},[n._l(n.allIcons,(function(t,i){return["icon-emoji"===t.class?e("EmojiPicker",{key:t.label,staticClass:"menuitem-emoji",on:{select:function(e){return n.addEmoji(t,e)}}},[e("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:n.t("text","Insert emoji"),expression:"t('text', 'Insert emoji')"}],staticClass:"icon-emoji",attrs:{"aria-label":n.t("text","Insert emoji"),"aria-haspopup":!0}})]):t.class?e("button",{directives:[{name:"show",rawName:"v-show",value:i<n.iconCount,expression:"$index < iconCount"},{name:"tooltip",rawName:"v-tooltip",value:n.getLabelAndKeys(t),expression:"getLabelAndKeys(icon)"}],key:t.label,class:n.getIconClasses(t),attrs:{disabled:n.disabled(t)},on:{click:function(e){return n.clickIcon(t)}}}):[e("div",{directives:[{name:"show",rawName:"v-show",value:i<n.iconCount||!t.class,expression:"$index < iconCount || !icon.class"},{name:"click-outside",rawName:"v-click-outside",value:function(){return n.hideChildMenu(t)},expression:"() => hideChildMenu(icon)"}],key:t.label,staticClass:"submenu"},[e("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:n.getLabelAndKeys(t),expression:"getLabelAndKeys(icon)"}],class:n.childIconClasses(t.children),on:{click:function(e){return e.preventDefault(),n.toggleChildMenu(t)}}}),n._v(" "),e("div",{staticClass:"popovermenu menu-center",class:{open:n.isChildMenuVisible(t)}},[e("PopoverMenu",{attrs:{menu:n.childPopoverMenu(t.children,t)}})],1)])]]})),n._v(" "),e("Actions",[n._l(n.allIcons,(function(t,i){return[t.class&&n.isHiddenInMenu(i)&&"icon-emoji"!==t.class?e("ActionButton",{directives:[{name:"tooltip",rawName:"v-tooltip",value:n.getKeys(t),expression:"getKeys(icon)"}],key:t.class,attrs:{icon:t.class,"close-after-click":!0},on:{click:function(e){return n.clickIcon(t)}}},[n._v("\n\t\t\t\t\t"+n._s(t.label)+"\n\t\t\t\t")]):n._e()]}))],2)],2):n._e(),n._v(" "),n._t("default",(function(){return[n._v("\n\t\tLeft side\n\t")]}))],2)}),[],!1,null,"171a6c90",null).exports}}]);
//# sourceMappingURL=editor-rich.js.map?v=86502217e94e50f85b30