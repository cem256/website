import{b as N,c as O,m as E}from"./mdi.be1be72f.js";import{_ as W}from"./PageLayout.vue_vue_type_script_setup_true_lang.783cbd36.js";import{k as F,m as H,l as j,n as K,p as X,q,s as J,v as Q,x as Y,y as Z,z as ee,A as ae,B as te,C as se,D as oe,r as $,E as U,F as z,G as ne,H as G,b as l,I as le,J as re,K as I,L as ie,d as ce,M as de,c as ue,N as P,w as n,o as c,a as f,O as y,P as x,e as S,f as m,t as i,g as u,Q as T,R,h as A,i as w,V as me,S as pe}from"./index.083b9c5a.js";import"./logo-512.8e81b8c9.js";async function ge(){return await fetch("https://api.github.com/repos/localsend/localsend/releases",{method:"GET",headers:{Accept:"application/vnd.github+json"}}).then(b=>{if(b.ok)return b.json().then(g=>g[0].assets)})}const ve=F()({name:"VSnackbar",props:{multiLine:Boolean,timeout:{type:[Number,String],default:5e3},vertical:Boolean,...H({location:"bottom"}),...j(),...K(),...X(),...q(),...J(Q({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},emits:{"update:modelValue":a=>!0},setup(a,b){let{slots:g}=b;const s=Y(a,"modelValue"),{locationStyles:V}=Z(a),{positionClasses:C}=ee(a),{scopeId:d}=ae(),{themeClasses:p}=te(a),{colorClasses:v,colorStyles:k,variantClasses:L}=se(a),{roundedClasses:t}=oe(a),r=$();U(s,o),U(()=>a.timeout,o),z(()=>{s.value&&o()});let e=-1;function o(){window.clearTimeout(e);const h=Number(a.timeout);!s.value||h===-1||(e=window.setTimeout(()=>{s.value=!1},h))}function _(){window.clearTimeout(e)}return ne(()=>{const[h]=G.filterProps(a);return l(G,I({ref:r,class:["v-snackbar",{"v-snackbar--active":s.value,"v-snackbar--multi-line":a.multiLine&&!a.vertical,"v-snackbar--vertical":a.vertical},C.value]},h,{modelValue:s.value,"onUpdate:modelValue":M=>s.value=M,contentProps:I({class:["v-snackbar__wrapper",p.value,v.value,t.value,L.value],style:[V.value,k.value],onPointerenter:_,onPointerleave:o},h.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",_disableGlobalStack:!0},d),{default:()=>[le(!1,"v-snackbar"),g.default&&l("div",{class:"v-snackbar__content",role:"status","aria-live":"polite"},[g.default()]),g.actions&&l(re,{defaults:{VBtn:{variant:"text",ripple:!1}}},{default:()=>[l("div",{class:"v-snackbar__actions"},[g.actions()])]})],activator:g.activator})}),ie({},r)}}),fe={class:"text-h6 text-sm-h6 text-center"},he={class:"text-h6 text-sm-h6"},be=["innerHTML"],ke={class:"text-h6 text-sm-h6"},_e={class:"d-block mb-4"},we={class:"text-h6 text-sm-h6"},ye={style:{"font-size":"0.8em"}},xe=["onClick"],Ve=m("span",{class:"text-grey-darken-1"},">",-1),Ce=m("br",null,null,-1);var D=(a=>(a.windows="Windows",a.macos="macOS",a.linux="Linux",a.android="Android",a.ios="iOS",a))(D||{});const Ae=ce({__name:"Download",setup(a){const{t:b}=de();function g(){const t=navigator.userAgent,e=["Win","Macintosh","X11","Android","iP"].findIndex(o=>t.includes(o));return e!==-1?Object.values(D)[e]:"Windows"}const s=$(g()),V=`<br><a href="https://apps.apple.com/us/app/localsend/id1661733229">
    <img alt="Download on the App Store" src="${new URL("/assets/apple-store-badge.a26fc5b3.svg",self.location).href}" height="64">
</a>`,C={name:"Nix",commands:["nix-shell -p localsend","pkgs.localsend # Config"]},d=$({}),p="https://github.com/localsend/localsend/releases",v=ue(()=>{var t,r,e,o,_,h,M,B;return{Windows:{stores:[],binaries:[{name:"EXE",url:(t=d.value.exe)!=null?t:p},{name:"MSIX",url:(r=d.value.msix)!=null?r:p},{name:b("download.zip"),url:(e=d.value.zip)!=null?e:p}],packageManagers:[{name:"Winget",commands:["winget install localsend"]},{name:"Chocolatey",commands:["choco install localsend"]},{name:"Scoop",commands:["scoop bucket add extras; scoop install localsend"]}]},macOS:{stores:[V],binaries:[{name:"DMG",url:(o=d.value.dmg)!=null?o:p}],packageManagers:[{name:"Homebrew",commands:["brew tap localsend/localsend","brew install localsend"]},C]},Linux:{stores:[],binaries:[{name:"TAR",url:(_=d.value.gz)!=null?_:p},{name:"DEB",url:(h=d.value.deb)!=null?h:p},{name:"AppImage",url:(M=d.value.AppImage)!=null?M:p}],packageManagers:[{name:"Flathub",commands:["flatpak install flathub org.localsend.localsend_app","flatpak run org.localsend.localsend_app"]},{name:"AUR",commands:["yay -S localsend-bin"]},C]},Android:{stores:[`<br><a href='https://play.google.com/store/apps/details?id=org.localsend.localsend_app&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
          <img alt='Get it on Google Play'
               src="${new URL("/assets/google-play-badge.b1c3a8f0.svg",self.location).href}"
               height="60"
          />
        </a>`,`<a href="https://f-droid.org/packages/org.localsend.localsend_app">
          <img alt="Get it on F-Droid" src="${new URL("/assets/f-droid-badge.ba946fc0.svg",self.location).href}" height="60">
        </a>`,`<a href="https://www.amazon.com/dp/B0BW6MP732">
          <img alt="Get it on F-Droid" src="${new URL("/assets/amazon-store-badge.2ffd8e9c.svg",self.location).href}" height="59">
        </a>`],binaries:[{name:"APK",url:(B=d.value.apk)!=null?B:p}],packageManagers:[]},iOS:{stores:[V],binaries:[],packageManagers:[]}}}),k=$(!1);function L(t){navigator.clipboard.writeText(t),k.value=!0}return z(async()=>{const t=await ge();d.value=t.reduce((r,e)=>{const o=e.name.split(".").pop();return o&&(r[o]=e.browser_download_url),r},{})}),(t,r)=>(c(),P(W,{"sub-title":t.$t("download.title")},{tabs:n(()=>[l(S,{cols:"12",class:"pt-6 d-flex justify-center flex-wrap"},{default:n(()=>[(c(),f(x,null,y(D,e=>l(A,{key:e,variant:"tonal",size:"x-large",class:"ma-2 text-none",color:s.value===e?"primary":void 0,onClick:o=>s.value=e},{default:n(()=>[w(i(e),1)]),_:2},1032,["color","onClick"])),64))]),_:1})]),content:n(()=>[m("h1",fe,i(t.$t("download.subTitle",{os:s.value})),1),l(me,{"no-gutters":"",align:"stretch",class:"mt-2"},{default:n(()=>[u(v)[s.value].stores.length!==0?(c(),P(S,{key:0,cols:"12",md:"4",class:"pa-2"},{default:n(()=>[l(T,{color:"teal-lighten-4",class:"fill-height pa-4",rounded:""},{default:n(()=>[m("h1",he,i(t.$t("download.appStores")),1),m("p",null,i(t.$t("download.appStoresDescription")),1),(c(!0),f(x,null,y(u(v)[s.value].stores,(e,o)=>(c(),f("div",{key:o,innerHTML:e},null,8,be))),128))]),_:1})]),_:1})):R("",!0),u(v)[s.value].binaries.length!==0?(c(),P(S,{key:1,cols:"12",md:"4",class:"pa-2"},{default:n(()=>[l(T,{color:"teal-lighten-4 pa-4",class:"fill-height",rounded:""},{default:n(()=>[m("h1",ke,i(t.$t("download.binaries")),1),m("p",_e,i(t.$t("download.binariesDescription")),1),(c(!0),f(x,null,y(u(v)[s.value].binaries,e=>(c(),f("div",{key:e.name,class:"mt-2"},[l(A,{variant:"text","prepend-icon":u(E),href:e.url},{default:n(()=>[w(i(e.name),1)]),_:2},1032,["prepend-icon","href"])]))),128)),l(A,{variant:"text","prepend-icon":u(N),class:"mt-2",href:"https://github.com/localsend/localsend/releases"},{default:n(()=>[w(i(t.$t("download.allReleases")),1)]),_:1},8,["prepend-icon"])]),_:1})]),_:1})):R("",!0),u(v)[s.value].packageManagers.length!==0?(c(),P(S,{key:2,cols:"12",md:u(v)[s.value].stores.length!==0?4:8,class:"pa-2"},{default:n(()=>[l(T,{color:"teal-lighten-4 pa-4",class:"fill-height",rounded:""},{default:n(()=>[m("h1",we,i(t.$t("download.packageManagers")),1),m("p",null,i(t.$t("download.packageManagersDescription")),1),(c(!0),f(x,null,y(u(v)[s.value].packageManagers,e=>(c(),f("div",{key:e.name,class:"mt-4"},[m("b",null,i(e.name)+":",1),l(T,{color:"teal-lighten-4"},{default:n(()=>[m("code",ye,[(c(!0),f(x,null,y(e.commands,(o,_)=>(c(),f("span",{key:_,class:"copy-text",onClick:()=>L(o)},[Ve,w(" "+i(o),1),Ce],8,xe))),128))])]),_:2},1024)]))),128))]),_:1})]),_:1},8,["md"])):R("",!0)]),_:1}),l(ve,{modelValue:k.value,"onUpdate:modelValue":r[1]||(r[1]=e=>k.value=e)},{actions:n(()=>[l(A,{variant:"text",onClick:r[0]||(r[0]=e=>k.value=!1)},{default:n(()=>[l(pe,null,{default:n(()=>[w(i(u(O)),1)]),_:1})]),_:1})]),default:n(()=>[w(i(u(b)("download.copiedToClipboard"))+" ",1)]),_:1},8,["modelValue"])]),_:1},8,["sub-title"]))}});export{Ae as default};