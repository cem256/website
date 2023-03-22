import{V as w,_ as k,b,m as S}from"./VImg.91ad7069.js";import{d as y,r as M,B as r,c as e,w as a,b as h,o as d,V as s,f as c,i,C as p,e as o,D as u,a as _,E as g,F as f,G as v,h as x}from"./index.1263c9f5.js";const A="/assets/apple-store-badge.a26fc5b3.svg",L="/assets/f-droid-badge.73346982.png",O={class:"fill-height pt-md-12"},V=o("h1",{class:"text-h4 text-sm-h2 font-weight-bold text-center"},"Download LocalSend",-1),C={class:"text-h6 text-sm-h6 text-center"},D=o("h1",{class:"text-h6 text-sm-h6"},"App Stores",-1),z=o("p",null,"Recommended for most users.",-1),B={key:0},W=o("a",{href:"https://apps.apple.com/us/app/localsend/id1661733229",class:"d-block ma-4"},[o("img",{alt:"Download on the App Store",src:A,height:"64"})],-1),N=[W],P={key:1},I=o("a",{href:"https://play.google.com/store/apps/details?id=org.localsend.localsend_app&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"},[o("img",{alt:"Get it on Google Play",src:"https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png",height:"90",style:{"z-index":"999"}})],-1),$=o("a",{href:"https://f-droid.org/packages/org.localsend.localsend_app"},[o("img",{alt:"Download on the App Store",src:L,height:"90"})],-1),G=[I,$],j=o("h1",{class:"text-h6 text-sm-h6"},"Binaries",-1),E=o("p",null,"Download for offline usage.",-1),F={class:"mt-4"},R=o("h1",{class:"text-h6 text-sm-h6"},"Package Managers",-1),K=o("p",null,"Enjoy automatic updates.",-1),T={class:"mt-4"},q=y({__name:"Download",setup(H){const l=M("Windows"),m={Windows:{binaries:[{name:"MSIX",url:"https://github.com/localsend/localsend/releases/download/v1.8.0/LocalSend-1.8.0.msix"},{name:"ZIP (Portable)",url:"https://github.com/localsend/localsend/releases/download/v1.8.0/LocalSend-1.8.0-windows.zip"}],packageManagers:[{name:"Winget",command:"winget install localsend"},{name:"Scoop",command:"scoop install localsend"}]},MacOS:{binaries:[{name:"DMG",url:"https://github.com/localsend/localsend/releases/download/v1.8.0/LocalSend-1.8.0.dmg"}],packageManagers:[{name:"Nix",command:"nix-shell -p localsend"}]},Linux:{binaries:[{name:"AppImage",url:"https://github.com/localsend/localsend/releases/download/v1.8.0/LocalSend-1.8.0.AppImage"}],packageManagers:[{name:"Flatpak",command:"flatpak install flathub org.localsend.localsend_app"},{name:"AUR",command:"yay -S localsend-bin"},{name:"Nix",command:"nix-shell -p localsend"}]},Android:{binaries:[{name:"APK",url:"https://github.com/localsend/localsend/releases/download/v1.8.0/LocalSend-1.8.0.apk"}],packageManagers:[]},iOS:{binaries:[],packageManagers:[]}};return(U,t)=>(d(),r("div",O,[e(h,null,{default:a(()=>[e(s,{cols:"12"},{default:a(()=>[e(w,{height:"200",src:k})]),_:1}),e(s,{cols:"12"},{default:a(()=>[V]),_:1}),e(s,{cols:"12",class:"pt-12 d-flex justify-center flex-wrap"},{default:a(()=>[e(c,{variant:"tonal",size:"x-large",class:"ma-2",color:l.value==="Windows"?"primary":void 0,onClick:t[0]||(t[0]=n=>l.value="Windows")},{default:a(()=>[i(" Windows ")]),_:1},8,["color"]),e(c,{variant:"tonal",size:"x-large",class:"ma-2",color:l.value==="MacOS"?"primary":void 0,onClick:t[1]||(t[1]=n=>l.value="MacOS")},{default:a(()=>[i(" macOS ")]),_:1},8,["color"]),e(c,{variant:"tonal",size:"x-large",class:"ma-2",color:l.value==="Linux"?"primary":void 0,onClick:t[2]||(t[2]=n=>l.value="Linux")},{default:a(()=>[i(" Linux ")]),_:1},8,["color"]),e(c,{variant:"tonal",size:"x-large",class:"ma-2",color:l.value==="Android"?"primary":void 0,onClick:t[3]||(t[3]=n=>l.value="Android")},{default:a(()=>[i(" Android ")]),_:1},8,["color"]),e(c,{variant:"tonal",size:"x-large",class:"ma-2",color:l.value==="iOS"?"primary":void 0,onClick:t[4]||(t[4]=n=>l.value="iOS")},{default:a(()=>[i(" iOS ")]),_:1},8,["color"])]),_:1}),e(s,{cols:"12"},{default:a(()=>[e(h,{"no-gutters":""},{default:a(()=>[e(s,{cols:"0",md:"3"}),e(s,{cols:"12",md:"6"},{default:a(()=>[e(p,{color:"grey-lighten-3",class:"pa-4",rounded:""},{default:a(()=>[o("h1",C,u(l.value)+" Downloads",1),e(h,{"no-gutters":"",align:"stretch"},{default:a(()=>[l.value!=="Windows"&&l.value!=="Linux"?(d(),_(s,{key:0,cols:"12",md:"4",class:"pa-2"},{default:a(()=>[e(p,{color:"teal-lighten-4",class:"fill-height pa-4",rounded:""},{default:a(()=>[D,z,l.value==="MacOS"||l.value==="iOS"?(d(),r("div",B,N)):l.value==="Android"?(d(),r("div",P,G)):g("",!0)]),_:1})]),_:1})):g("",!0),m[l.value].binaries.length!==0?(d(),_(s,{key:1,cols:"12",md:"4",class:"pa-2"},{default:a(()=>[e(p,{color:"teal-lighten-4 pa-4",class:"fill-height",rounded:""},{default:a(()=>[j,E,(d(!0),r(f,null,v(m[l.value].binaries,n=>(d(),r("div",F,[e(c,{variant:"tonal",color:"teal-darken-4","prepend-icon":x(S),href:n.url},{default:a(()=>[i(u(n.name),1)]),_:2},1032,["prepend-icon","href"])]))),256))]),_:1})]),_:1})):g("",!0),m[l.value].packageManagers.length!==0?(d(),_(s,{key:2,cols:"12",md:"4",class:"pa-2"},{default:a(()=>[e(p,{color:"teal-lighten-4 pa-4",class:"fill-height",rounded:""},{default:a(()=>[R,K,(d(!0),r(f,null,v(m[l.value].packageManagers,n=>(d(),r("div",T,[i(u(n.name)+": ",1),e(p,{color:"teal-lighten-4"},{default:a(()=>[o("code",null,u(n.command),1)]),_:2},1024)]))),256))]),_:1})]),_:1})):g("",!0)]),_:1})]),_:1})]),_:1}),e(s,{cols:"0",md:"3"})]),_:1})]),_:1}),e(s,{cols:"12",class:"d-flex justify-center"},{default:a(()=>[e(c,{variant:"text",size:"x-large",class:"mt-4",color:"primary","prepend-icon":x(b),to:"/"},{default:a(()=>[i(" Homepage ")]),_:1},8,["prepend-icon"])]),_:1})]),_:1})]))}});export{q as default};