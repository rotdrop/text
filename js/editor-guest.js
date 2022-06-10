"use strict";(self.webpackChunk_nextcloud_text=self.webpackChunk_nextcloud_text||[]).push([["editor-guest"],{89532:(n,e,t)=>{t.d(e,{Z:()=>o});var s=t(87537),a=t.n(s),r=t(23645),i=t.n(r)()(a());i.push([n.id,".avatar[data-v-759e121d],.avatar-wrapper[data-v-759e121d]{border-radius:50%;width:var(--size);height:var(--size);text-align:center;color:#fff;line-height:var(--size);font-size:var(--font-size);font-weight:normal}","",{version:3,sources:["webpack://./src/components/AvatarWrapper.vue"],names:[],mappings:"AAyDA,0DACC,iBAAA,CACA,iBAAA,CACA,kBAAA,CACA,iBAAA,CACA,UAAA,CACA,uBAAA,CACA,0BAAA,CACA,kBAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.avatar, .avatar-wrapper {\n\tborder-radius: 50%;\n\twidth: var(--size);\n\theight: var(--size);\n\ttext-align: center;\n\tcolor: #ffffff;\n\tline-height: var(--size);\n\tfont-size: var(--font-size);\n\tfont-weight: normal;\n}\n"],sourceRoot:""}]);const o=i},294:(n,e,t)=>{t.d(e,{Z:()=>o});var s=t(87537),a=t.n(s),r=t(23645),i=t.n(r)()(a());i.push([n.id,"form.guest-name-dialog[data-v-0c3dae98]{display:flex;align-items:center;padding:6px}form.guest-name-dialog[data-v-0c3dae98] img{margin:0 !important}form.guest-name-dialog input[type=text][data-v-0c3dae98]{flex-grow:1}form.guest-name-dialog label[data-v-0c3dae98]{padding-right:3px;height:32px}","",{version:3,sources:["webpack://./src/components/GuestNameDialog.vue"],names:[],mappings:"AAmGA,wCACC,YAAA,CACA,kBAAA,CACA,WAAA,CAEA,4CACC,mBAAA,CAGD,yDACC,WAAA,CAED,8CACC,iBAAA,CACA,WAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nform.guest-name-dialog {\n\tdisplay: flex;\n\talign-items: center;\n\tpadding: 6px;\n\n\t&::v-deep img {\n\t\tmargin: 0 !important;\n\t}\n\n\tinput[type=text] {\n\t\tflex-grow: 1;\n\t}\n\tlabel {\n\t\tpadding-right: 3px;\n\t\theight: 32px;\n\t}\n}\n"],sourceRoot:""}]);const o=i},26224:(n,e,t)=>{t.d(e,{Z:()=>x});var s=t(28017);function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,s)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}const o={name:"AvatarWrapper",components:{Avatar:t.n(s)()},props:{session:{type:Object,required:!0},size:{type:Number,default:function(){return 32}}},computed:{sessionAvatarStyle:function(){return r(r({},this.sessionBackgroundStyle),{},{"border-color":this.session.color,"border-width":"2px","border-style":"solid","--size":this.size+"px","--font-size":this.size/2+"px"})},sessionBackgroundStyle:function(){return{"background-color":this.session.userId?this.session.color+" !important":"#b9b9b9"}},guestInitial:function(){return""===this.session.guestName?"?":this.session.guestName.slice(0,1).toUpperCase()}}};var u=t(93379),l=t.n(u),c=t(7795),p=t.n(c),d=t(90569),m=t.n(d),A=t(3565),g=t.n(A),f=t(19216),v=t.n(f),h=t(44589),b=t.n(h),C=t(89532),y={};y.styleTagTransform=b(),y.setAttributes=g(),y.insert=m().bind(null,"head"),y.domAPI=p(),y.insertStyleElement=v();l()(C.Z,y);C.Z&&C.Z.locals&&C.Z.locals;const x=(0,t(51900).Z)(o,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"avatar-wrapper",style:n.sessionAvatarStyle},[n.session.userId?t("Avatar",{attrs:{user:n.session.userId?n.session.userId:n.session.guestName,"is-guest":null===n.session.userId,"disable-menu":!0,"show-user-status":!1,"disable-tooltip":!0,size:n.size}}):t("div",{staticClass:"avatar",style:n.sessionBackgroundStyle},[n._v("\n\t\t"+n._s(n.guestInitial)+"\n\t")])],1)}),[],!1,null,"759e121d",null).exports},52818:(n,e,t)=>{t.r(e),t.d(e,{default:()=>w});var s=t(15168),a=t.n(s),r=t(79753),i=t(26224),o=t(13721);const u={name:"GuestNameDialog",components:{AvatarWrapper:i.Z},directives:{tooltip:a()},mixins:[o.BG],props:{session:{type:Object,required:!0}},data:function(){return{guestName:"",guestNameBuffered:""}},computed:{avatarUrl:function(){var n=(0,r.generateUrl)("/avatar/guest/{user}/{size}",{user:this.guestNameBuffered,size:32});return window.location.protocol+"//"+window.location.host+n}},beforeMount:function(){this.guestName=this.$syncService.session.guestName,this.updateBufferedGuestName()},methods:{setGuestName:function(){var n=this,e=this.$syncService.session.guestName;this.$syncService.updateSession(this.guestName).then((function(){localStorage.setItem("nick",n.guestName),n.updateBufferedGuestName()})).catch((function(t){n.guestName=e}))},updateBufferedGuestName:function(){this.guestNameBuffered=this.guestName}}};var l=t(93379),c=t.n(l),p=t(7795),d=t.n(p),m=t(90569),A=t.n(m),g=t(3565),f=t.n(g),v=t(19216),h=t.n(v),b=t(44589),C=t.n(b),y=t(294),x={};x.styleTagTransform=C(),x.setAttributes=f(),x.insert=A().bind(null,"head"),x.domAPI=d(),x.insertStyleElement=h();c()(y.Z,x);y.Z&&y.Z.locals&&y.Z.locals;const w=(0,t(51900).Z)(u,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("form",{directives:[{name:"tooltip",rawName:"v-tooltip",value:n.t("text","Enter your name so other people can see who is editing"),expression:"t('text', 'Enter your name so other people can see who is editing')"}],staticClass:"guest-name-dialog",on:{submit:function(e){return e.preventDefault(),n.setGuestName()}}},[t("label",[t("AvatarWrapper",{attrs:{session:n.session,size:32}})],1),n._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:n.guestName,expression:"guestName"}],attrs:{type:"text","aria-label":n.t("text","Edit guest name"),placeholder:n.t("text","Guest")},domProps:{value:n.guestName},on:{input:function(e){e.target.composing||(n.guestName=e.target.value)}}}),n._v(" "),t("input",{staticClass:"icon-confirm",attrs:{type:"submit","aria-label":n.t("text","Save guest name"),value:""}})])}),[],!1,null,"0c3dae98",null).exports}}]);
//# sourceMappingURL=editor-guest.js.map?v=9f473134e6b2ac9fb90c