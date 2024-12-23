"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([["453"],{91594:function(e,t,r){r.r(t),r.d(t,{default:()=>p,frontMatter:()=>s,metadata:()=>i,assets:()=>h,toc:()=>m,contentTitle:()=>a});var i=JSON.parse('{"id":"toolboards/btt/ebb-36-11","title":"BIGTREETECH EBB36 v1.1","description":"When this board boots into DFU mode (which happens during firmware updates), the heater pin will be set to high, meaning your hotend will heat up for the duration of the firmware update process.","source":"@site/versioned_docs/version-2.0.x/toolboards/btt/ebb-36-11.mdx","sourceDirName":"toolboards/btt","slug":"/toolboards/btt/ebb-36-11","permalink":"/docs/2.0.x/toolboards/btt/ebb-36-11","draft":false,"unlisted":false,"editUrl":"https://github.com/Rat-OS/RatOS/edit/v2.x/site/versioned_docs/version-2.0.x/toolboards/btt/ebb-36-11.mdx","tags":[],"version":"2.0.x","frontMatter":{"sidebar_label":"EBB-36 v1.1"},"sidebar":"docsSidebar","previous":{"title":"EBB-36 v1.0","permalink":"/docs/2.0.x/toolboards/btt/ebb-36-10"},"next":{"title":"EBB-36 v1.2","permalink":"/docs/2.0.x/toolboards/btt/ebb-36-12"}}'),o=r("52676"),n=r("23663"),l=r("99207");let s={sidebar_label:"EBB-36 v1.1"},a="BIGTREETECH EBB36 v1.1",h={},m=[{value:"Wiring",id:"wiring",level:2},{value:"Firmware installation",id:"firmware-installation",level:2},{value:"I updated klipper and now i get an error!",id:"i-updated-klipper-and-now-i-get-an-error",level:2}];function d(e){let t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"bigtreetech-ebb36-v11",children:"BIGTREETECH EBB36 v1.1"})}),"\n",(0,o.jsx)(t.admonition,{title:"This board can be dangerous",type:"danger",children:(0,o.jsxs)(t.p,{children:["When this board boots into DFU mode (which happens during firmware updates), the heater pin will be set to high, meaning your hotend will heat up for the duration of the firmware update process.\nFor this reason automatic firmware updates is disabled by default for the BTT EBB v1.1 boards in RatOS. You'll have to flash it through the ",(0,o.jsx)(t.a,{href:"http://RatOS.local/configure?step=2",children:"RatOS Configurator"})," when needed.\nSee page 14 and 15 in the ",(0,o.jsx)(t.a,{href:"https://github.com/bigtreetech/EBB/blob/master/EBB%20CAN%20V1.1%20(STM32G0B1)/EBB42%20CAN%20V1.1/BIGTREETECH%20EBB42%20CAN%20V1.1%20User%20Manual.pdf",children:"BTT EBB v1.1 manual"})]})}),"\n",(0,o.jsx)(t.h2,{id:"wiring",children:"Wiring"}),"\n",(0,o.jsx)(l.Z,{width:"100%",height:null}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:r(13300).Z+"",children:"Open Full Size Image"})}),"\n",(0,o.jsx)(t.admonition,{title:"Use a good quality cable",type:"caution",children:(0,o.jsx)(t.p,{children:"Make sure your board is connected to the Pi via a good quality USB 3.1 (or better) braided cable for best performance and durability."})}),"\n",(0,o.jsx)(t.h2,{id:"firmware-installation",children:"Firmware installation"}),"\n",(0,o.jsxs)(t.p,{children:["Follow the steps in the RatOS Configurator at ",(0,o.jsx)(t.a,{href:"http://RatOS.local/configure?step=2",children:"http://RatOS.local/configure?step=2"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"i-updated-klipper-and-now-i-get-an-error",children:"I updated klipper and now i get an error!"}),"\n",(0,o.jsx)(t.p,{children:"When you update klipper you might see an error that looks like this:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Firmware version mismatch between host and guest",src:r(9240).Z+"",width:"849",height:"260"})}),"\n",(0,o.jsxs)(t.p,{children:["This is because klipper made changes to a part of the MCU firmware that we use, and something went wrong while automatically flashing your board. Klipper is telling us that the version of klipper running on the Pi is newer than the version running on the MCU. To fix this, we have to flash the board with a new version of the firmware, Follow the steps in the RatOS Configurator at ",(0,o.jsx)(t.a,{href:"http://RatOS.local/configure?step=2",children:"http://RatOS.local/configure?step=2"}),"."]})]})}function p(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},99207:function(e,t,r){r.d(t,{Z:function(){return e1}});var i,o,n,l,s,a,h,m,d,p,k,c,E,f,v,q,M,g,u,b,x,W,y,w,F,H,B,O,R,S,j,T,V,A,C,z,Z,U,I,N,P,D,_,G,L,X,Q,J,K,Y,$,ee,et,er,ei,eo,en,el,es,ea,eh,em,ed,ep,ek,ec,eE,ef,ev,eq,eM,eg,eu,eb,ex,eW,ey,ew,eF,eH,eB,eO,eR,eS,ej,eT,eV,eA,eC,ez,eZ,eU,eI,eN,eP,eD,e_,eG,eL,eX,eQ,eJ,eK,eY,e$=r(75271);function e0(){return(e0=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)({}).hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(null,arguments)}let e1=e=>{let{title:t,titleId:r,...e1}=e;return e$.createElement("svg",e0({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:1478,height:1055,style:{backgroundColor:"#1b1b1d"},viewBox:"-0.5 -0.5 1478 1055","aria-labelledby":r},e1),t?e$.createElement("title",{id:r},t):null,i||(i=e$.createElement("image",{xlinkHref:"https://os.ratrig.com/img/diagram/EBB36.webp",width:531,height:413,x:536.5,y:263.5,preserveAspectRatio:"none"})),o||(o=e$.createElement("image",{xlinkHref:"https://os.ratrig.com/img/diagram/psu.png",width:514.25,height:280,x:962.5,y:-.5,preserveAspectRatio:"none",transform:"rotate(-180 1220.12 140)"})),n||(n=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:6,d:"m985.06 185.28-170.06.05q-10 0-10 10l.03 113.8",opacity:.25,pointerEvents:"stroke"})),l||(l=e$.createElement("path",{fill:"none",stroke:"#545454",strokeMiterlimit:10,strokeWidth:6,d:"m983.06 182.28-170.06.05q-10 0-10 10l.03 113.8",pointerEvents:"stroke"})),s||(s=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:6,d:"m985.06 121.44-139.23-.02q-10 0-10 10v45.9c10.4 0 10.4 16 0 16v115.81",opacity:.25,pointerEvents:"stroke"})),a||(a=e$.createElement("path",{fill:"none",stroke:"#c00",strokeMiterlimit:10,strokeWidth:6,d:"m983.06 118.44-139.23-.02q-10 0-10 10v45.9c10.4 0 10.4 16 0 16v115.81",pointerEvents:"stroke"})),h||(h=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"M1031.12 762.04 924 762q-10 0-10-10V628.08q0-10-2.98-10.01l-2.97-.02",opacity:.25,pointerEvents:"stroke"})),m||(m=e$.createElement("path",{fill:"none",stroke:"#ffbc03",strokeMiterlimit:10,strokeWidth:4,d:"M1029.12 759.04 922 759q-10 0-10-10V625.08q0-10-2.98-10.01l-2.97-.02",pointerEvents:"stroke"})),d||(d=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"m1028.04 749.98-73.87.02q-10 0-10-10l-.02-124.84",opacity:.25,pointerEvents:"stroke"})),p||(p=e$.createElement("path",{fill:"none",stroke:"#ffbc03",strokeMiterlimit:10,strokeWidth:4,d:"m1026.04 746.98-73.87.02q-10 0-10-10l-.02-124.84",pointerEvents:"stroke"})),k||(k=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"m1035.88 707.04-55.88-.03Q970 707 970 697V589q0-10-10-10H750q-10 0-10 10v33.92q0 10-8.9 10h-8.9",opacity:.25,pointerEvents:"stroke"})),c||(c=e$.createElement("path",{fill:"none",stroke:"#af1bc4",strokeMiterlimit:10,strokeWidth:4,d:"m1033.88 704.04-55.88-.03Q968 704 968 694V586q0-10-10-10H748q-10 0-10 10v33.92q0 10-8.9 10h-8.9",pointerEvents:"stroke"})),E||(E=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"m1035.88 702.02.02-1.01q.02-1.01-9.98-1.01H1002q-10 0-10-10V571q0-10-10-10H732.17q-10 0-10 10l.03 35.07",opacity:.25,pointerEvents:"stroke"})),f||(f=e$.createElement("path",{fill:"none",stroke:"#af1bc4",strokeMiterlimit:10,strokeWidth:4,d:"m1033.88 699.02.02-1.01q.02-1.01-9.98-1.01H1000q-10 0-10-10V568q0-10-10-10H730.17q-10 0-10 10l.03 35.07",pointerEvents:"stroke"})),v||(v=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"M354.86 901.02 436 901q10 0 10-10V676q0-10 10-10h82q10 0 10.01-10l.02-35.06",opacity:.25,pointerEvents:"stroke"})),q||(q=e$.createElement("path",{fill:"none",stroke:"#dbd9d9",strokeMiterlimit:10,strokeWidth:4,d:"M352.86 898.02 434 898q10 0 10-10V673q0-10 10-10h82q10 0 10.01-10l.02-35.06",pointerEvents:"stroke"})),M||(M=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"m360 896.06 80 .02c0-7.8 12-7.8 12 0h7.5q7.5 0 7.5-10V691q0-10 10-10h84.92q10 0 10-10v-47.17",opacity:.25,pointerEvents:"stroke"})),g||(g=e$.createElement("path",{fill:"none",stroke:"#545454",strokeMiterlimit:10,strokeWidth:4,d:"m358 893.06 80 .02c0-7.8 12-7.8 12 0h7.5q7.5 0 7.5-10V688q0-10 10-10h84.92q10 0 10-10v-47.17",pointerEvents:"stroke"})),u||(u=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"m347.16 887.96 92.84.03c0-7.8 12-7.8 12 0h9c0-7.8 12-7.79 12 .01h7.5q7.5 0 7.5-10V706q0-10 10-10h94.17q10 0 10-10l.02-65.06",opacity:.25,pointerEvents:"stroke"})),b||(b=e$.createElement("path",{fill:"none",stroke:"#ffbc03",strokeMiterlimit:10,strokeWidth:4,d:"m345.16 884.96 92.84.03c0-7.8 12-7.8 12 0h9c0-7.8 12-7.79 12 .01h7.5q7.5 0 7.5-10V703q0-10 10-10h94.17q10 0 10-10l.02-65.06",pointerEvents:"stroke"})),x||(x=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"m360 880.97 80 .02c0-7.8 12-7.8 12 0h9c0-7.8 12-7.8 12 0h9c0-7.8 12-7.79 12 .01h7.5q7.5 0 7.5-10V721q0-10 10-10h100q10 0 10-10v-80",opacity:.25,pointerEvents:"stroke"})),W||(W=e$.createElement("path",{fill:"none",stroke:"#c00",strokeMiterlimit:10,strokeWidth:4,d:"m358 877.97 80 .02c0-7.8 12-7.8 12 0h9c0-7.8 12-7.8 12 0h9c0-7.8 12-7.79 12 .01h7.5q7.5 0 7.5-10V718q0-10 10-10h100q10 0 10-10v-80",pointerEvents:"stroke"})),y||(y=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"m358.07 873.98 81.93.01c0-7.8 12-7.8 12 0h9c0-7.8 12-7.8 12 0h9c0-7.8 12-7.79 12 .01h9c0-7.8 12-7.8 12 0h6q6 0 6-10V736q0-10 10-10h106q10 0 10-10v-88q0-10 1.5-10h1.5",opacity:.25,pointerEvents:"stroke"})),w||(w=e$.createElement("path",{fill:"none",stroke:"#994c00",strokeMiterlimit:10,strokeWidth:4,d:"m356.07 870.98 81.93.01c0-7.8 12-7.8 12 0h9c0-7.8 12-7.8 12 0h9c0-7.8 12-7.79 12 .01h9c0-7.8 12-7.8 12 0h6q6 0 6-10V733q0-10 10-10h106q10 0 10-10v-88q0-10 1.5-10h1.5",pointerEvents:"stroke"})),F||(F=e$.createElement("image",{xlinkHref:"https://os.ratrig.com/img/diagram/inductive-probe.png",width:320,height:65,x:80.5,y:569.5,preserveAspectRatio:"none",transform:"rotate(-180 241 602.5)"})),H||(H=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"m628.74 620.94-.04-7.47q-.03-7.47-10.03-7.47l-226.55.02",opacity:.25,pointerEvents:"stroke"})),B||(B=e$.createElement("path",{fill:"none",stroke:"#994c00",strokeMiterlimit:10,strokeWidth:4,d:"m626.74 617.94-.04-7.47q-.03-7.47-10.03-7.47l-226.55.02",pointerEvents:"stroke"})),O||(O=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"m392.12 603.03-.02-1.52q-.02-1.51 9.98-1.51h241.09q10 0 10 9.03v9.02",opacity:.25,pointerEvents:"stroke"})),R||(R=e$.createElement("path",{fill:"none",stroke:"#39f",strokeMiterlimit:10,strokeWidth:4,d:"m390.12 600.03-.02-1.52q-.02-1.51 9.98-1.51h241.09q10 0 10 9.03v9.02",pointerEvents:"stroke"})),S||(S=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"M388.92 603.03v4.48q0 4.49 10 4.49h193.25q10 0 10.01 3.03l.01 3.02",opacity:.25,pointerEvents:"stroke"})),j||(j=e$.createElement("path",{fill:"none",stroke:"#545454",strokeMiterlimit:10,strokeWidth:4,d:"M386.92 600.03v4.48q0 4.49 10 4.49h193.25q10 0 10.01 3.03l.01 3.02",pointerEvents:"stroke"})),T||(T=e$.createElement("image",{xlinkHref:"https://os.ratrig.com/img/diagram/axial-fan.png",width:180,height:173,x:779.5,y:791.5,preserveAspectRatio:"none"})),V||(V=e$.createElement("image",{xlinkHref:"https://os.ratrig.com/img/diagram/blower.png",width:180,height:179,x:575.5,y:764.5,preserveAspectRatio:"none"})),A||(A=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"m893.06 795 .02-166.92q0-10-10-10l-31.85-.03",opacity:.25,pointerEvents:"stroke"})),C||(C=e$.createElement("path",{fill:"none",stroke:"#545454",strokeMiterlimit:10,strokeWidth:4,d:"m891.06 792 .02-166.92q0-10-10-10l-31.85-.03",pointerEvents:"stroke"})),z||(z=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"M872 795V654.92q0-10-10-10.01l-10.77-.02",opacity:.25,pointerEvents:"stroke"})),Z||(Z=e$.createElement("path",{fill:"none",stroke:"#c00",strokeMiterlimit:10,strokeWidth:4,d:"M870 792V651.92q0-10-10-10.01l-10.77-.02",pointerEvents:"stroke"})),U||(U=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"m683.48 767.28.01-28.28q.01-10 10.01-10H790q10 0 10-10v-88.08q0-10-7.57-9.99l-7.58.01",opacity:.25,pointerEvents:"stroke"})),I||(I=e$.createElement("path",{fill:"none",stroke:"#545454",strokeMiterlimit:10,strokeWidth:4,d:"m681.48 764.28.01-28.28q.01-10 10.01-10H788q10 0 10-10v-88.08q0-10-7.57-9.99l-7.58.01",pointerEvents:"stroke"})),N||(N=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"M668 768v-47q0-10 10-10h97q10 0 10-10v-56",opacity:.25,pointerEvents:"stroke"})),P||(P=e$.createElement("path",{fill:"none",stroke:"#c00",strokeMiterlimit:10,strokeWidth:4,d:"M666 765v-47q0-10 10-10h97q10 0 10-10v-56",pointerEvents:"stroke"})),D||(D=e$.createElement("image",{xlinkHref:"https://os.ratrig.com/img/diagram/nema17.png",width:223,height:278,x:335.5,y:41.5,preserveAspectRatio:"none",transform:"matrix(-1 0 0 1 895 0)"})),_||(_=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"m595.82 399.16.01-29.16q0-10-10-10h-178q-10 0-10.01-10l-.06-70.92",opacity:.25,pointerEvents:"stroke"})),G||(G=e$.createElement("path",{fill:"none",stroke:"#545454",strokeMiterlimit:10,strokeWidth:4,d:"m593.82 396.16.01-29.16q0-10-10-10h-178q-10 0-10.01-10l-.06-70.92",pointerEvents:"stroke"})),L||(L=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"m611.22 380.99-.04-25.99q-.01-10-10.01-10H416.92q-10 0-10-10l-.01-53.42",opacity:.25,pointerEvents:"stroke"})),X||(X=e$.createElement("path",{fill:"none",stroke:"#c00",strokeMiterlimit:10,strokeWidth:4,d:"m609.22 377.99-.04-25.99q-.01-10-10.01-10H414.92q-10 0-10-10l-.01-53.42",pointerEvents:"stroke"})),Q||(Q=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"m631.93 362.82-.01-22.82q0-10-10-10H426.08q-10 0-10-10l-.03-35.36",opacity:.25,pointerEvents:"stroke"})),J||(J=e$.createElement("path",{fill:"none",stroke:"#98cc54",strokeMiterlimit:10,strokeWidth:4,d:"m629.93 359.82-.01-22.82q0-10-10-10H424.08q-10 0-10-10l-.03-35.36",pointerEvents:"stroke"})),K||(K=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"m649.98 342.17.01-17.17q.01-10-9.99-10H438.08q-10 0-9.99-9.2v-9.21",opacity:.25,pointerEvents:"stroke"})),Y||(Y=e$.createElement("path",{fill:"none",stroke:"#39f",strokeMiterlimit:10,strokeWidth:4,d:"m647.98 339.17.01-17.17q.01-10-9.99-10H436.08q-10 0-9.99-9.2v-9.21",pointerEvents:"stroke"})),$||($=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"m1232 390-2.96-95.04",opacity:.25,pointerEvents:"stroke"})),ee||(ee=e$.createElement("path",{fill:"none",stroke:"#545454",strokeMiterlimit:10,strokeWidth:4,d:"m1230 387-2.96-95.04",pointerEvents:"stroke"})),et||(et=e$.createElement("path",{fill:"#545454",stroke:"#545454",strokeMiterlimit:10,strokeWidth:4,d:"m1226.7 284.47 5.45 9.76-5.11-2.27-4.88 2.72Z",pointerEvents:"all"})),er||(er=e$.createElement("path",{fill:"none",d:"M1200 387h120v51h-120z",pointerEvents:"all"})),ei||(ei=e$.createElement("text",{x:1259.5,y:427,fill:"#FFF",fontFamily:"Oswald",fontSize:32,textAnchor:"middle"},"24V PSU")),eo||(eo=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"m469.98 467.99 80.19.01q10 0 10 10l.07 107.01",opacity:.25,pointerEvents:"stroke"})),en||(en=e$.createElement("path",{fill:"none",stroke:"#c00",strokeMiterlimit:10,strokeWidth:4,d:"m467.98 464.99 80.19.01q10 0 10 10l.07 107.01",pointerEvents:"stroke"})),el||(el=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"M474 461h100.08q10 0 10.01 10l.05 114.01",opacity:.25,pointerEvents:"stroke"})),es||(es=e$.createElement("path",{fill:"none",stroke:"#545454",strokeMiterlimit:10,strokeWidth:4,d:"M472 458h100.08q10 0 10.01 10l.05 114.01",pointerEvents:"stroke"})),ea||(ea=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"m469.98 453.02 122.19-.02q10 0 10 10l.02 122.01",opacity:.25,pointerEvents:"stroke"})),eh||(eh=e$.createElement("path",{fill:"none",stroke:"#dbd9d9",strokeMiterlimit:10,strokeWidth:4,d:"m467.98 450.02 122.19-.02q10 0 10 10l.02 122.01",pointerEvents:"stroke"})),em||(em=e$.createElement("path",{fill:"none",d:"M88.5 651h270v51h-270z",pointerEvents:"all"})),ed||(ed=e$.createElement("text",{x:223,y:691,fill:"#FFF",fontFamily:"Oswald",fontSize:32,textAnchor:"middle"},"5V INDUCTIVE PROBE")),ep||(ep=e$.createElement("path",{fill:"none",d:"M88.5 768h129v51h-129z",pointerEvents:"all"})),ek||(ek=e$.createElement("text",{x:152.5,y:808,fill:"#FFF",fontFamily:"Oswald",fontSize:32,textAnchor:"middle"},"BLTOUCH")),ec||(ec=e$.createElement("path",{fill:"none",d:"M200 435h150v51H200z",pointerEvents:"all"})),eE||(eE=e$.createElement("text",{x:274.5,y:475,fill:"#FFF",fontFamily:"Oswald",fontSize:32,textAnchor:"middle"},"X ENDSTOP")),ef||(ef=e$.createElement("path",{fill:"none",d:"M492 1002h243v51H492z",pointerEvents:"all"})),ev||(ev=e$.createElement("text",{x:613,y:1042,fill:"#FFF",fontFamily:"Oswald",fontSize:32,textAnchor:"middle"},"PART COOLING FAN")),eq||(eq=e$.createElement("path",{fill:"none",d:"M789 999h165v51H789z",pointerEvents:"all"})),eM||(eM=e$.createElement("text",{x:871,y:1039,fill:"#FFF",fontFamily:"Oswald",fontSize:32,textAnchor:"middle"},"HOTEND FAN")),eg||(eg=e$.createElement("path",{fill:"none",d:"M1212 849h108v51h-108z",pointerEvents:"all"})),eu||(eu=e$.createElement("text",{x:1265.5,y:889,fill:"#FFF",fontFamily:"Oswald",fontSize:32,textAnchor:"middle"},"HEATER")),eb||(eb=e$.createElement("path",{fill:"none",d:"M1149 612h171v51h-171z",pointerEvents:"all"})),ex||(ex=e$.createElement("text",{x:1234,y:652,fill:"#FFF",fontFamily:"Oswald",fontSize:32,textAnchor:"middle"},"THERMISTOR")),eW||(eW=e$.createElement("path",{fill:"none",d:"M200 315h141v51H200z",pointerEvents:"all"})),ey||(ey=e$.createElement("text",{x:270,y:355,fill:"#FFF",fontFamily:"Oswald",fontSize:32,textAnchor:"middle"},"EXTRUDER")),ew||(ew=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"M352 461.38h61.86",opacity:.25,pointerEvents:"stroke"})),eF||(eF=e$.createElement("path",{fill:"none",stroke:"#545454",strokeMiterlimit:10,strokeWidth:4,d:"M350 458.38h61.86",pointerEvents:"stroke"})),eH||(eH=e$.createElement("path",{fill:"#545454",stroke:"#545454",strokeMiterlimit:10,strokeWidth:4,d:"m419.36 458.38-10 5 2.5-5-2.5-5Z",pointerEvents:"all"})),eB||(eB=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"M615.5 1005v-19q0-10 10-10H658q10 0 10-8.51v-8.52",opacity:.25,pointerEvents:"stroke"})),eO||(eO=e$.createElement("path",{fill:"none",stroke:"#545454",strokeMiterlimit:10,strokeWidth:4,d:"M613.5 1002v-19q0-10 10-10H656q10 0 10-8.51v-8.52",pointerEvents:"stroke"})),eR||(eR=e$.createElement("path",{fill:"#545454",stroke:"#545454",strokeMiterlimit:10,strokeWidth:4,d:"m666 948.47 5 10-5-2.5-5 2.5Z",pointerEvents:"all"})),eS||(eS=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"m871.19 1003.89.22-23.93",opacity:.25,pointerEvents:"stroke"})),ej||(ej=e$.createElement("path",{fill:"none",stroke:"#545454",strokeMiterlimit:10,strokeWidth:4,d:"m869.19 1000.89.22-23.93",pointerEvents:"stroke"})),eT||(eT=e$.createElement("path",{fill:"#545454",stroke:"#545454",strokeMiterlimit:10,strokeWidth:4,d:"m869.78 969.47 4.51 10.23-4.88-2.74-5.11 2.25Z",pointerEvents:"all"})),eV||(eV=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"M1268 852v-27.5q0-10-8.79-10h-4.4q-4.39 0-4.41-10l-.02-13.33",opacity:.25,pointerEvents:"stroke"})),eA||(eA=e$.createElement("path",{fill:"none",stroke:"#545454",strokeMiterlimit:10,strokeWidth:4,d:"M1266 849v-27.5q0-10-8.79-10h-4.4q-4.39 0-4.41-10l-.02-13.33",pointerEvents:"stroke"})),eC||(eC=e$.createElement("path",{fill:"#545454",stroke:"#545454",strokeMiterlimit:10,strokeWidth:4,d:"m1248.37 780.67 5.01 9.99-5-2.49-5 2.51Z",pointerEvents:"all"})),ez||(ez=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"M1238 666v29q0 10-7.43 10l-7.44.01",opacity:.25,pointerEvents:"stroke"})),eZ||(eZ=e$.createElement("path",{fill:"none",stroke:"#545454",strokeMiterlimit:10,strokeWidth:4,d:"M1236 663v29q0 10-7.43 10l-7.44.01",pointerEvents:"stroke"})),eU||(eU=e$.createElement("path",{fill:"#545454",stroke:"#545454",strokeMiterlimit:10,strokeWidth:4,d:"m1213.63 702.01 10-5-2.5 5 2.5 5Z",pointerEvents:"all"})),eI||(eI=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"M254 318V202q0-10 10-10h62.03",opacity:.25,pointerEvents:"stroke"})),eN||(eN=e$.createElement("path",{fill:"none",stroke:"#545454",strokeMiterlimit:10,strokeWidth:4,d:"M252 315V199q0-10 10-10h62.03",pointerEvents:"stroke"})),eP||(eP=e$.createElement("path",{fill:"#545454",stroke:"#545454",strokeMiterlimit:10,strokeWidth:4,d:"m331.53 189-10 5 2.5-5-2.5-5Z",pointerEvents:"all"})),eD||(eD=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"M90.5 796.5H21q-10 0-10 10v69.83q0 10 10 10l32.99-.02",opacity:.25,pointerEvents:"stroke"})),e_||(e_=e$.createElement("path",{fill:"none",stroke:"#545454",strokeMiterlimit:10,strokeWidth:4,d:"M88.5 793.5H19q-10 0-10 10v69.83q0 10 10 10l32.99-.02",pointerEvents:"stroke"})),eG||(eG=e$.createElement("path",{fill:"#545454",stroke:"#545454",strokeMiterlimit:10,strokeWidth:4,d:"m59.49 883.31-10 5 2.5-5-2.5-5Z",pointerEvents:"all"})),eL||(eL=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"M90.5 684H54q-10 0-10-10v-58.5q0-10 10-10h17.03",opacity:.25,pointerEvents:"stroke"})),eX||(eX=e$.createElement("path",{fill:"none",stroke:"#545454",strokeMiterlimit:10,strokeWidth:4,d:"M88.5 681H52q-10 0-10-10v-58.5q0-10 10-10h17.03",pointerEvents:"stroke"})),eQ||(eQ=e$.createElement("path",{fill:"#545454",stroke:"#545454",strokeMiterlimit:10,strokeWidth:4,d:"m76.53 602.5-10 5 2.5-5-2.5-5Z",pointerEvents:"all"})),eJ||(eJ=e$.createElement("image",{xlinkHref:"https://os.ratrig.com/img/diagram/heater-thermistor.png",width:88,height:280,x:1109.5,y:589.5,preserveAspectRatio:"none",transform:"rotate(-90 1154 730)"})),eK||(eK=e$.createElement("image",{xlinkHref:"https://os.ratrig.com/img/diagram/bltouch.png",width:321,height:184,x:62.5,y:803.5,preserveAspectRatio:"none",transform:"rotate(-180 223.5 896)"})),eY||(eY=e$.createElement("image",{xlinkHref:"https://os.ratrig.com/img/diagram/endstop.png",width:49,height:76,x:422.5,y:419.5,preserveAspectRatio:"none",transform:"rotate(-180 447.5 458)"})))}},13300:function(e,t,r){r.d(t,{Z:function(){return i}});let i=r.p+"assets/files/ebb36-wiring-4792eb9a3e493a7a3e085b44e962e470.svg"},9240:function(e,t,r){r.d(t,{Z:function(){return i}});let i=r.p+"assets/images/firmware_version_mismatch-456c9561ecf03b8fc5c498f42ce6a891.png"},23663:function(e,t,r){r.d(t,{Z:function(){return s},a:function(){return l}});var i=r(75271);let o={},n=i.createContext(o);function l(e){let t=i.useContext(n);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);