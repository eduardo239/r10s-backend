(function(){"use strict";var e={301:function(e,t,a){a.d(t,{I:function(){return r}});var n=a(5503),o=a(7263);const l={apiKey:"AIzaSyA73c_5kg-h6L4zdZZNMkgcqrskRvm_h5Y",authDomain:"vue-r10s.firebaseapp.com",databaseURL:"vue-r10s",projectId:{NODE_ENV:"production",VUE_APP_FIREBASE_API_KEY:"AIzaSyA73c_5kg-h6L4zdZZNMkgcqrskRvm_h5Y",VUE_APP_FIREBASE_AUTH_DOMAIN:"vue-r10s.firebaseapp.com",VUE_APP_FIREBASE_DATABASE_URL:"vue-r10s",VUE_APP_FIREBASE_STORAGE_BUCKET:"vue-r10s.appspot.com",VUE_APP_FIREBASE_MESSAGING_SENDER_ID:"864584359651",VUE_APP_FIREBASE_APP_ID:"1:864584359651:web:5fa58aa261056576b16fd6",BASE_URL:"/r10s/"}.VUE_APP_FIREBASE_PROJECT_ID,storageBucket:"vue-r10s.appspot.com",messagingSenderId:"864584359651",appId:"1:864584359651:web:5fa58aa261056576b16fd6",measurementId:{NODE_ENV:"production",VUE_APP_FIREBASE_API_KEY:"AIzaSyA73c_5kg-h6L4zdZZNMkgcqrskRvm_h5Y",VUE_APP_FIREBASE_AUTH_DOMAIN:"vue-r10s.firebaseapp.com",VUE_APP_FIREBASE_DATABASE_URL:"vue-r10s",VUE_APP_FIREBASE_STORAGE_BUCKET:"vue-r10s.appspot.com",VUE_APP_FIREBASE_MESSAGING_SENDER_ID:"864584359651",VUE_APP_FIREBASE_APP_ID:"1:864584359651:web:5fa58aa261056576b16fd6",BASE_URL:"/r10s/"}.VUE_APP_FIREBASE_MEASUREMENT_ID},r=((0,n.ZF)(l),(0,o.v0)())},9355:function(e,t,a){a.d(t,{OH:function(){return o},Sm:function(){return l},aQ:function(){return n},ih:function(){return s},tp:function(){return r}});const n="JAVASCRIPT",o="PYTHON",l="CPP",r="JAVA",s=[{id:0,name:n},{id:1,name:o},{id:2,name:l},{id:3,name:r}]},6901:function(e,t,a){var n=a(9963),o=a(9876),l=a(6252);function r(e,t,a,n,o,r){const s=(0,l.up)("main-menu"),u=(0,l.up)("router-view"),i=(0,l.up)("n-layout"),c=(0,l.up)("n-config-provider");return(0,l.wg)(),(0,l.j4)(c,{theme:e.darkTheme,hljs:e.hljs},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{style:{"min-height":"100vh","max-width":"1000px",margin:"0 auto",padding:"1rem"}},{default:(0,l.w5)((()=>[(0,l.Wm)(s),(0,l.Wm)(u)])),_:1})])),_:1},8,["theme","hljs"])}var s=a(2262),u=a(301),i=a(5220),c=a(6469),d=a(6035),m=a(5029);const p=["src"];function g(e,t,a,n,o,r){const s=(0,l.up)("router-link"),u=(0,l.up)("n-space"),i=(0,l.up)("n-button"),c=(0,l.up)("n-avatar");return(0,l.wg)(),(0,l.j4)(u,{class:"main-menu",justify:"space-between",align:"center"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(s,{to:"/"},{default:(0,l.w5)((()=>[(0,l._)("img",{src:e.R10SLogo,class:"logo",alt:"challenge your knowledge"},null,8,p)])),_:1})])),_:1}),(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(s,{class:"main-menu__button",to:"/"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{text:"",type:"primary"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Home ")])),_:1})])),_:1}),(0,l.Wm)(s,{class:"main-menu__button",to:"/challenges"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{text:"",type:"primary"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Challenges ")])),_:1})])),_:1}),e.user.loggedIn?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(s,{key:0,class:"main-menu__button",to:"/auth"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{text:"",type:"primary"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Sign In ")])),_:1})])),_:1})),e.user.loggedIn?((0,l.wg)(),(0,l.j4)(s,{key:1,class:"main-menu__button",to:"/admin/all"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{text:"",type:"error"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Admin ")])),_:1})])),_:1})):(0,l.kq)("",!0)])),_:1}),(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[e.user.loggedIn?((0,l.wg)(),(0,l.j4)(s,{key:0,class:"main-menu__button",to:`/profile/${e.user.user.uid}`},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{round:"",size:"small",src:"https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"})])),_:1},8,["to"])):(0,l.kq)("",!0)])),_:1})])),_:1})}var h=a(3408),f=a(4257),w=a(776),_=a(9122),y=a(7981),v=a.p+"img/logo-no-background.baf4fb21.png",b=(0,l.aZ)({component:{NButton:h.ZP,NAvatar:f.Z,NText:w.Z,NH1:_.qg,NSpace:y.Z},setup(){const e=(0,i.L)();return{user:e,R10SLogo:v}},methods:{...(0,o.nv)(i.L,["logOutFirebase"])}}),W=a(3744);const Z=(0,W.Z)(b,[["render",g]]);var k=Z,I=a(7802),U=a.n(I),A=a(6344),E=a.n(A),N=a(4006),P=a.n(N),S=a(308),C=a.n(S),B=a(7721),$=a.n(B);U().registerLanguage("javascript",E()),U().registerLanguage("cpp",P()),U().registerLanguage("python",C()),U().registerLanguage("java",$());var R=(0,l.aZ)({components:{MainMenu:k,NLayout:d.ZP},setup(){const e=(0,s.iH)({}),t=(0,i.L)(),a=(0,c.K)();return{user:t,course:a,formRef:e,darkTheme:m.$,hljs:U()}},methods:{...(0,o.nv)(i.L,["logOutFirebase","fetchUserFirebase"])},computed:{_user(){return this.user}},mounted(){u.I.onAuthStateChanged((e=>{this?.user?this.fetchUserFirebase(e):console.log(2)}))}});const j=(0,W.Z)(R,[["render",r]]);var L=j,D=a(2201);const F=["src"];function x(e,t,a,n,o,r){const s=(0,l.up)("n-h2"),u=(0,l.up)("n-space"),i=(0,l.up)("n-h3"),c=(0,l.up)("n-p"),d=(0,l.up)("n-list-item"),m=(0,l.up)("n-list"),p=(0,l.up)("n-button"),g=(0,l.up)("router-link"),h=(0,l.up)("n-card"),f=(0,l.up)("n-layout");return(0,l.wg)(),(0,l.j4)(u,{vertical:""},{default:(0,l.w5)((()=>[(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[(0,l.Wm)(h,null,{default:(0,l.w5)((()=>[(0,l.Wm)(u,{vertical:""},{default:(0,l.w5)((()=>[(0,l.Wm)(s,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Definition of challenge")])),_:1}),(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l._)("img",{src:n.image,alt:"Challenge",class:"poster"},null,8,F)])),_:1}),(0,l.Wm)(m,null,{default:(0,l.w5)((()=>[(0,l.Wm)(i,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Noun")])),_:1}),(0,l.Wm)(d,null,{default:(0,l.w5)((()=>[(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Uk)("1 A call or summons to engage in any contest, as of skill, strength, etc.")])),_:1})])),_:1}),(0,l.Wm)(d,null,{default:(0,l.w5)((()=>[(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Uk)("2 Something that by its nature or character serves as a call to battle, contest, special effort, etc.:.")])),_:1})])),_:1})])),_:1})])),_:1}),(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(g,{to:"/challenges"},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{type:"primary"},{default:(0,l.w5)((()=>[(0,l.Uk)(" See the Challenges ")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}var T=a(8668),O=a(8984),M=a(4663),V=a(8354),z=a.p+"img/pic1.ec7552bd.jpg",H={components:{NCard:T.ZP,NList:O.ZP,NListItem:M.Z,NButton:h.ZP,NP:V.Z,NH2:_.kn,NH3:_.Fj,NLayout:d.ZP,NSpace:y.Z},setup(){const e=(0,i.L)();return{user:e,image:z}},methods:{},computed:{}};const q=(0,W.Z)(H,[["render",x]]);var G=q;function K(e,t,a,n,o,r){const s=(0,l.up)("add-challenge"),u=(0,l.up)("n-tab-pane"),i=(0,l.up)("all-challenges"),c=(0,l.up)("n-tabs"),d=(0,l.up)("n-card");return(0,l.wg)(),(0,l.j4)(d,{title:"Admin Page",style:{"margin-bottom":"16px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{type:"line",animated:""},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{name:"add-challenge",tab:"Add Challenge"},{default:(0,l.w5)((()=>[(0,l.Wm)(s)])),_:1}),(0,l.Wm)(u,{name:"all-challenge",tab:"All Challenges"},{default:(0,l.w5)((()=>[(0,l.Wm)(i)])),_:1}),(0,l.Wm)(u,{name:"all-users",tab:"All Users"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Qilixiang ")])),_:1})])),_:1})])),_:1})}var Q=a(104),Y=a(3874);const J={style:{overflow:"auto",padding:"1rem"}};function X(e,t,a,n,o,r){const s=(0,l.up)("n-input"),u=(0,l.up)("n-form-item-gi"),i=(0,l.up)("n-select"),c=(0,l.up)("n-dynamic-input"),d=(0,l.up)("n-input-number"),m=(0,l.up)("n-button"),p=(0,l.up)("n-gi"),g=(0,l.up)("n-grid"),h=(0,l.up)("n-form"),f=(0,l.up)("n-space"),w=(0,l.up)("n-text"),_=(0,l.up)("n-h2"),y=(0,l.up)("n-code");return(0,l.wg)(),(0,l.j4)(g,{"x-gap":12,cols:2},{default:(0,l.w5)((()=>[(0,l.Wm)(p,null,{default:(0,l.w5)((()=>[(0,l.Wm)(f,{justify:"center",span:"0 400:1 600:2 800:3"},{default:(0,l.w5)((()=>[(0,l.Wm)(h,{class:"form-container",ref:"formRef",model:e.model,size:"medium","label-placement":"top"},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{"x-gap":12,cols:1},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{label:"Question",path:"question"},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{value:e.model.question,"onUpdate:value":t[0]||(t[0]=t=>e.model.question=t),placeholder:"Question ...",type:"textarea",autosize:{minRows:3,maxRows:20}},null,8,["value"])])),_:1}),(0,l.Wm)(u,{label:"Select the language",path:"language"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{value:e.model.language,"onUpdate:value":t[1]||(t[1]=t=>e.model.language=t),placeholder:"Select the Language",options:e.languageOptions.map((e=>({label:e.name,value:e.name})))},null,8,["value","options"])])),_:1}),(0,l.Wm)(u,{label:"Insert the code here",path:"code"},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{value:e.model.code,"onUpdate:value":t[2]||(t[2]=t=>e.model.code=t),placeholder:"Code ...",type:"textarea",autosize:{minRows:10,maxRows:1e3}},null,8,["value"])])),_:1}),(0,l.Wm)(u,{label:"Insert the answer here",path:"answers"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{value:e.model.answers,"onUpdate:value":t[3]||(t[3]=t=>e.model.answers=t),placeholder:"Please type here",min:3,max:6},null,8,["value"])])),_:1}),(0,l.Wm)(u,{label:"Select the right answer",path:"correct"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{value:e.model.correct,"onUpdate:value":t[4]||(t[4]=t=>e.model.correct=t),placeholder:"Select the Language",options:e.model.answers.map((e=>({label:e,value:e})))},null,8,["value","options"])])),_:1}),(0,l.Wm)(u,{label:"Select the difficulty (min=1, max=10)",path:"difficulty"},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{"default-value":1,min:1,max:10,style:{width:"100%"},value:e.model.difficulty,"onUpdate:value":t[5]||(t[5]=t=>e.model.difficulty=t),clearable:""},null,8,["value"])])),_:1}),(0,l.Wm)(p,null,{default:(0,l.w5)((()=>[(0,l.Wm)(m,{type:"primary",onClick:t[6]||(t[6]=t=>e.addToMongoDB(e.model))},{default:(0,l.w5)((()=>[(0,l.Uk)(" Salvar ")])),_:1})])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})])),_:1}),(0,l.Wm)(p,null,{default:(0,l.w5)((()=>[(0,l.Wm)(f,{justify:"center"},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{"align-text":"",style:{padding:"1rem 1rem 0"}},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{type:"warning"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Code ")])),_:1})])),_:1})])),_:1}),(0,l._)("div",J,[(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[(0,l.Wm)(y,{class:"code",code:e.model.code,language:e.model.language},null,8,["code","language"])])),_:1})])])),_:1})])),_:1})}var ee=a(9355),te=a(4433),ae=a(7596),ne=a(9772),oe=a(2341),le=a(8757),re=a(7631),se=a(381),ue=a(1123),ie=(0,l.aZ)({components:{NGrid:te.Z,NGi:ae.ZP,NH2:_.kn,NSpace:y.Z,NForm:ne.Z,NFormItemGi:oe.ZP,NInput:le.Z,NInputNumber:re.Z,NDynamicInput:se.Z,NCode:ue.Z},setup(){const e=(0,s.iH)(null),t=(0,i.L)();return{user:t,formRef:e,languageOptions:ee.ih,model:(0,s.iH)({question:"",answers:["1","2","3"],difficulty:1})}},methods:{...(0,o.nv)(c.K,["add","addToMongoDB"])},computed:{}});const ce=(0,W.Z)(ie,[["render",X]]);var de=ce;function me(e,t,a,n,o,r){const s=(0,l.up)("n-space"),u=(0,l.up)("n-data-table"),i=(0,l.up)("n-gi"),c=(0,l.up)("n-grid");return(0,l.wg)(),(0,l.j4)(c,{"x-gap":"12",cols:"1"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,null,{default:(0,l.w5)((()=>[(0,l.Wm)(s,{justify:"center"}),(0,l.Wm)(u,{columns:e.columns,data:e.course.courses,pagination:e.pagination,bordered:!1},null,8,["columns","data","pagination"])])),_:1})])),_:1})}a(7658);var pe=a(6225);const ge=({view:e,remove:t})=>[{title:"ID",key:"_id"},{title:"Question",key:"question",render(t){return(0,l.h)(h.ZP,{strong:!0,round:!0,type:"success",size:"small",onClick:()=>e(t)},{default:()=>"Ver mais"})}},{title:"Language",key:"language"},{title:"Alternatives",key:"answers.length"},{title:"Action",key:"actions",render(t){return(0,l.h)(h.ZP,{strong:!0,round:!0,type:"success",size:"small",onClick:()=>e(t)},{default:()=>"Ver mais"})}},{title:"Remove",key:"remove",render(e){return(0,l.h)(h.ZP,{strong:!0,tertiary:!1,type:"error",round:!0,size:"small",onClick:()=>t(e._id)},{default:()=>"Remover"})}}];var he=(0,l.aZ)({components:{NDataTable:pe.Z,NGrid:te.Z,NGi:ae.ZP,NSpace:y.Z},setup(){const e=(0,s.iH)({answers:[]}),t=(0,s.iH)(null),a=(0,c.K)(),n=(0,D.tv)();return{formRef:e,answerRef:t,course:a,columns:ge({view(e){n.push(`/challenge-description/${e._id}`)},remove(e){const t=e;a.removeChallengeyByIdMDB(t)}}),pagination:!0}},methods:{...(0,o.nv)(c.K,[])},computed:{},mounted(){this.course.getChallengesMDB()}});const fe=(0,W.Z)(he,[["render",me]]);var we=fe,_e=(0,l.aZ)({components:{AddChallenge:de,AllChallenges:we,NCard:T.ZP,NTabs:Q.Z,NTabPane:Y.Z}});const ye=(0,W.Z)(_e,[["render",K]]);var ve=ye;function be(e,t,a,n,o,r){const s=(0,l.up)("n-button"),u=(0,l.up)("router-link"),i=(0,l.up)("n-space"),c=(0,l.up)("n-layout-sider"),d=(0,l.up)("router-view"),m=(0,l.up)("n-layout-content"),p=(0,l.up)("n-layout");return(0,l.wg)(),(0,l.j4)(i,{vertical:""},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{"has-sider":""},{default:(0,l.w5)((()=>[e.user.loggedIn?((0,l.wg)(),(0,l.j4)(c,{key:0,bordered:"","content-style":"padding: 24px;"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{vertical:""},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{to:`/profile/${e.user.user.uid}`},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{strong:"",secondary:"",block:"",type:"success"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Profile ")])),_:1})])),_:1},8,["to"]),(0,l.Wm)(u,{to:"/profile/edit"},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{strong:"",secondary:"",block:"",type:"success"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Edit ")])),_:1})])),_:1}),e.user.loggedIn?((0,l.wg)(),(0,l.j4)(u,{key:0,to:"/"},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{strong:"",secondary:"",block:"",type:"error",onClick:e.logOutFirebase},{default:(0,l.w5)((()=>[(0,l.Uk)(" Exit ")])),_:1},8,["onClick"])])),_:1})):(0,l.kq)("",!0)])),_:1})])),_:1})):(0,l.kq)("",!0),(0,l.Wm)(m,null,{default:(0,l.w5)((()=>[(0,l.Wm)(d)])),_:1})])),_:1})])),_:1})}var We=a(347),Ze=a(8764),ke=(0,l.aZ)({components:{NLayout:d.ZP,NLayoutSider:We.Z,NButton:h.ZP,NLayoutContent:Ze.Z,NSpace:y.Z},setup(){const e=(0,s.iH)({}),t=(0,c.K)(),a=(0,i.L)();return{user:a,course:t,formRef:e}},methods:{...(0,o.nv)(i.L,["getChallengesByUID","logOutFirebase"])},computed:{...(0,o.rn)(c.K,["totalChallenges"])},mounted(){this.course.getChallengesMDB()},created(){this.$watch((()=>this.user.loggedIn),(()=>{this.user.loggedIn&&this.user.getChallengesByUID(this.user.user.uid)}),{immediate:!0})}});const Ie=(0,W.Z)(ke,[["render",be]]);var Ue=Ie,Ae=a(3577);function Ee(e,t,a,n,o,r){const s=(0,l.up)("upload-image"),u=(0,l.up)("n-form-item-gi"),i=(0,l.up)("n-input"),c=(0,l.up)("n-button"),d=(0,l.up)("n-gi"),m=(0,l.up)("n-grid"),p=(0,l.up)("n-form"),g=(0,l.up)("n-card"),h=(0,l.up)("n-space");return(0,l.wg)(),(0,l.j4)(h,{vertical:""},{default:(0,l.w5)((()=>[(0,l.Uk)((0,Ae.zw)(e.user.user.email)+" "+(0,Ae.zw)(e.user.user.uid)+" ",1),(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[(0,l.Wm)(p,{ref:"formRef",model:e.model,size:"medium","label-placement":"top"},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{"x-gap":"12",cols:1},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{label:"Upload Avatar",path:"avatar"},{default:(0,l.w5)((()=>[(0,l.Wm)(s)])),_:1}),(0,l.Wm)(u,{label:"Nome",path:"name"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{value:e.model.name,"onUpdate:value":t[0]||(t[0]=t=>e.model.name=t),placeholder:"Input",type:"text"},null,8,["value"])])),_:1}),(0,l.Wm)(u,{label:"Email",path:"email"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{value:e.model.email,"onUpdate:value":t[1]||(t[1]=t=>e.model.email=t),placeholder:"Input",type:"text"},null,8,["value"])])),_:1}),(0,l.Wm)(u,{label:"Senha",path:"password"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{value:e.model.password,"onUpdate:value":t[2]||(t[2]=t=>e.model.password=t),type:"password"},null,8,["value"])])),_:1}),(0,l.Wm)(u,{label:"Confirmar Senha",path:"password2"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{value:e.model.password2,"onUpdate:value":t[3]||(t[3]=t=>e.model.password2=t),type:"password"},null,8,["value"])])),_:1}),(0,l.Wm)(d,null,{default:(0,l.w5)((()=>[(0,l.Wm)(c,{type:"primary",block:"",secondary:"",strong:"",onClick:t[4]||(t[4]=t=>e.updateUserFirebase(e.model))},{default:(0,l.w5)((()=>[(0,l.Uk)(" Registrar ")])),_:1})])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})])),_:1})}const Ne={style:{"margin-bottom":"12px"}};function Pe(e,t,a,n,o,r){const s=(0,l.up)("archive-icon"),u=(0,l.up)("n-icon"),i=(0,l.up)("n-text"),c=(0,l.up)("n-p"),d=(0,l.up)("n-upload-dragger"),m=(0,l.up)("n-upload");return(0,l.wg)(),(0,l.j4)(m,{multiple:"","directory-dnd":"",action:"https://www.mocky.io/v2/5e4bafc63100007100d8b70f",max:5},{default:(0,l.w5)((()=>[(0,l.Wm)(d,null,{default:(0,l.w5)((()=>[(0,l._)("div",Ne,[(0,l.Wm)(u,{size:"48",depth:3},{default:(0,l.w5)((()=>[(0,l.Wm)(s)])),_:1})]),(0,l.Wm)(i,{style:{"font-size":"1rem"}},{default:(0,l.w5)((()=>[(0,l.Uk)(" Click or drag a file to this area to upload ")])),_:1}),(0,l.Wm)(c,{depth:"3",style:{margin:"8px 0 0 0"}},{default:(0,l.w5)((()=>[(0,l.Uk)(" Strictly prohibit from uploading sensitive information. ")])),_:1})])),_:1})])),_:1})}var Se=a(352),Ce=a(8073),Be=a(8115),$e=a(2429),Re=(0,l.aZ)({components:{ArchiveIcon:Se.Z,NUpload:Ce.Z,NP:V.Z,NText:w.Z,NIcon:Be.g,NUploadDragger:$e.Z}});const je=(0,W.Z)(Re,[["render",Pe]]);var Le=je,De=(0,l.aZ)({components:{UploadImage:Le,NForm:ne.Z,NButton:h.ZP,NGi:ae.ZP,NGrid:te.Z,NSpace:y.Z},setup(){const e=(0,s.iH)({answers:[]}),t=(0,i.L)();return{user:t,formRef:e,model:(0,s.iH)({name:"",email:"",password:"",password2:""})}},methods:{...(0,o.nv)(i.L,["updateUserFirebase"])},computed:{},mounted(){}});const Fe=(0,W.Z)(De,[["render",Ee]]);var xe=Fe;function Te(e,t,a,n,o,r){const s=(0,l.up)("n-list-item"),u=(0,l.up)("n-list"),i=(0,l.up)("n-space");return(0,l.wg)(),(0,l.j4)(i,{vertical:""},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{hoverable:"",clickable:""},{default:(0,l.w5)((()=>[(0,l.Wm)(s,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" total challenges")])),_:1}),(0,l.Wm)(s,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" my completed challenges")])),_:1}),(0,l.Wm)(s,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" correct challenges")])),_:1}),(0,l.Wm)(s,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" % completed challenges")])),_:1})])),_:1})])),_:1})}var Oe=(0,l.aZ)({components:{NSpace:y.Z,NList:O.ZP,NListItem:M.Z}});const Me=(0,W.Z)(Oe,[["render",Te]]);var Ve=Me;const ze=[{path:"/",name:"home",component:G},{path:"/auth",name:"auth",component:()=>a.e(443).then(a.bind(a,8590))},{path:"/sign-up",name:"sign-up",component:()=>a.e(443).then(a.bind(a,4896))},{path:"/admin",name:"admin-home",component:ve,children:[{path:"add",component:de},{path:"all",component:we}]},{path:"/challenges",name:"challenges",component:()=>a.e(443).then(a.bind(a,3304))},{path:"/challenge-description/:challengeId",name:"challenge-description-by-id",component:()=>a.e(443).then(a.bind(a,1308))},{path:"/challenge/:challengeId",name:"challenge-by-id",component:()=>a.e(443).then(a.bind(a,9837))},{path:"/profile",name:"profile",component:Ue,children:[{path:"edit",component:xe},{path:":uid",component:Ve}]}],He=(0,D.p7)({history:(0,D.PO)("/r10s/"),routes:ze});var qe=He,Ge=a(6441);const Ke=(0,o.WB)();(0,n.ri)(L).use(Ke).use(Ge.Z).use(qe).mount("#app")},6469:function(e,t,a){a.d(t,{K:function(){return i}});var n=a(196),o=a(9876);const l="http://localhost:8082/",r="courses",s="http://localhost:3000/api/",u="challenges",i=(0,o.Q_)("course",{state:()=>({challenges:[],challengesTotalPages:1,courses:[],course:null,error:"",loading:!1}),getters:{allCourses(e){return 0===e.courses.length?[]:e.courses},allChallenges(e){return 0===e.courses.length?[]:e.courses},courseById(e){return e.course},totalChallenges(e){return e.courses.length},getChallenge(e){return e.course}},actions:{async add(e){try{const t=await n.Z.post(`${l}${r}`,e);this.course=t.data;const a=t.status;200===a&&this.getCourses()}catch(t){console.log(t)}},async remove(e){try{const t=await n.Z["delete"](`${l}${r}/${e}`),a=t.status;200===a&&this.getCourses()}catch(t){console.log(t)}},async getCourses(){try{const e=await n.Z.get(`${l}${r}`);this.courses=e.data}catch(e){console.log(e)}},async getCourseById(e){try{const t=await n.Z.get(`${l}${r}/${e}`);this.course=t.data}catch(t){console.log(t)}},async addToMongoDB(e){try{const t=await n.Z.post(`${s}${u}`,e);this.course=t.data;const a=t.status;200===a&&this.getChallengesMDB()}catch(t){this.error=t.message}},async getChallengesMDB(){try{const e=await n.Z.get(`${s}${u}`);200===e.status?this.courses=e.data.challenges:this.courses=[]}catch(e){this.error=e.message}},async getAllChallengesByPageMDB({page:e,_limit:t}){this.loading=!0;try{const a=await n.Z.get(`${s}${u}?page=${e}&limit=${t}`);200===a.status?(this.courses=a.data.challenges,this.challengesTotalPages=a.data.totalPages):(this.courses=[],this.challengesTotalPages=1)}catch(a){this.error=a.message}finally{this.loading=!1}},async getChallengeByIdMDB(e){try{const t=await n.Z.get(`${s}${u}/${e}`);this.course=t.data}catch(t){this.error=t.message}},async removeChallengeyByIdMDB(e){this.loading=!0;try{const t=await n.Z["delete"](`${s}${u}/${e}`),a=t.status;200===a&&this.getChallengesMDB()}catch(t){console.log(t)}finally{this.loading=!1}},resetCourse(){this.course=null}}})},5220:function(e,t,a){a.d(t,{L:function(){return d}});var n=a(301),o=a(9876),l=a(7263),r=a(196);const s="http://localhost:3000/api/",u="http://localhost:8082/",i="users",c="user-challenges",d=(0,o.Q_)("user",{state:()=>({user:null,users:[],loggedIn:!1,error:"",userTotalChallenges:0,alreadyFinished:!1}),getters:{getUser(e){return e.user},allUsers(e){return e.users.reverse()},isUserLoggedIn(e){return e.loggedIn}},actions:{async signIn(e){const t=await r.Z.get(`${u}${i}`,e),a=t.data.filter((t=>t.email===e.email));a.length>0?(this.user=a[0],this.loggedIn=!0):this.user=null},async signUp(e){try{await r.Z.post(`${u}users`,e)}catch(t){this.error=t}},async signUpFirebase({email:e,password:t,name:a}){this.error="";try{const r=await(0,l.Xb)(n.I,e,t),s=r.user.uid;try{const t={email:e,name:a,uid:s};await this.postNewUserMongoDB(t)}catch(o){console.error(o)}if(!r)throw new Error("Unable to register user");this.user=r.user}catch(o){this.error=o.message}},async signInFirebase({email:e,password:t}){this.error="";try{const a=await(0,l.e5)(n.I,e,t);if(!a)throw new Error("Login failed");this.user=a.user,a.user.displayName=e}catch(a){this.error=a.message}},async updateUserFirebase(){console.log("todo")},async logOutFirebase(){await(0,l.w7)(n.I),this.user=null,this.loggedIn=!1},async fetchUserFirebase(e){this.loggedIn=null!==e,this.user=e?{...e}:null},async postNewUserMongoDB(e){try{await r.Z.post(`${s}${i}`,e)}catch(t){console.log(t)}},async googleSignIn(){},async getUsers(){try{const e=await r.Z.get(`${u}users`);this.users=e.data}catch(e){console.log(e)}},async getUserById(e){const t=await r.Z.get(`${u}${i}`),a=t.data.filter((t=>t.id===e));if(a.length>0){this.user=a[0];try{const e=await r.Z.get(`${u}${i}`);this.users=e.data}catch(n){console.log(n)}}},async updateUserById(e,t){await this.getUserById(e);try{const a=await r.Z.put(`${u}${i}/${e}`,t),n=a.status;200===n&&(this.getUsers(),this.user=a.data)}catch(a){console.log(a)}},logout(){this.user=null,this.loggedIn=!1},closeErrorMessage(){this.error=""},async postNewAnswer(e){try{await r.Z.post(`${s}${c}`,e)}catch(t){this.error=t}},async getChallengesByUID(e){try{const t=await r.Z.get(`${s}${c}/uid/${e}`);200===t.status&&(this.userTotalChallenges=t.data.length)}catch(t){this.error=t}},async getChallengesByUIDAndCID(e,t){try{const a=await r.Z.get(`${s}${c}/uid/${e}/cid/${t}`);200===a.status&&(a.data.length>0?this.alreadyFinished=!0:this.alreadyFinished=!1)}catch(a){this.error=a}}}})}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var l=t[n]={exports:{}};return e[n](l,l.exports,a),l.exports}a.m=e,function(){var e=[];a.O=function(t,n,o,l){if(!n){var r=1/0;for(c=0;c<e.length;c++){n=e[c][0],o=e[c][1],l=e[c][2];for(var s=!0,u=0;u<n.length;u++)(!1&l||r>=l)&&Object.keys(a.O).every((function(e){return a.O[e](n[u])}))?n.splice(u--,1):(s=!1,l<r&&(r=l));if(s){e.splice(c--,1);var i=o();void 0!==i&&(t=i)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[n,o,l]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,n){return a.f[n](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/about.73ecaf0a.js"}}(),function(){a.miniCssF=function(e){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="app-escola2:";a.l=function(n,o,l,r){if(e[n])e[n].push(o);else{var s,u;if(void 0!==l)for(var i=document.getElementsByTagName("script"),c=0;c<i.length;c++){var d=i[c];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+l){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",t+l),s.src=n),e[n]=[o];var m=function(t,a){s.onerror=s.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(a)})),t)return t(a)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/r10s/"}(),function(){var e={143:0};a.f.j=function(t,n){var o=a.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var l=new Promise((function(a,n){o=e[t]=[a,n]}));n.push(o[2]=l);var r=a.p+a.u(t),s=new Error,u=function(n){if(a.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var l=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+l+": "+r+")",s.name="ChunkLoadError",s.type=l,s.request=r,o[1](s)}};a.l(r,u,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,l,r=n[0],s=n[1],u=n[2],i=0;if(r.some((function(t){return 0!==e[t]}))){for(o in s)a.o(s,o)&&(a.m[o]=s[o]);if(u)var c=u(a)}for(t&&t(n);i<r.length;i++)l=r[i],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(c)},n=self["webpackChunkapp_escola2"]=self["webpackChunkapp_escola2"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(6901)}));n=a.O(n)})();
//# sourceMappingURL=app.a7d85579.js.map