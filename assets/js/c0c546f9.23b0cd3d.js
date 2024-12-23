"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([["9613"],{66493:function(e,t,r){r.r(t),r.d(t,{default:()=>d,frontMatter:()=>s,metadata:()=>i,assets:()=>m,toc:()=>h,contentTitle:()=>a});var i=JSON.parse('{"id":"toolboards/btt/ebb-42-12","title":"BIGTREETECH EBB42 v1.2","description":"Wiring","source":"@site/versioned_docs/version-2.0.x/toolboards/btt/ebb-42-12.mdx","sourceDirName":"toolboards/btt","slug":"/toolboards/btt/ebb-42-12","permalink":"/docs/2.0.x/toolboards/btt/ebb-42-12","draft":false,"unlisted":false,"editUrl":"https://github.com/Rat-OS/RatOS/edit/v2.x/site/versioned_docs/version-2.0.x/toolboards/btt/ebb-42-12.mdx","tags":[],"version":"2.0.x","frontMatter":{"sidebar_label":"EBB-42 v1.2"},"sidebar":"docsSidebar","previous":{"title":"EBB-42 v1.1","permalink":"/docs/2.0.x/toolboards/btt/ebb-42-11"},"next":{"title":"FLY SHT-36","permalink":"/docs/2.0.x/toolboards/mellow/fly-sht-36"}}'),o=r("52676"),n=r("23663"),l=r("32198");let s={sidebar_label:"EBB-42 v1.2"},a="BIGTREETECH EBB42 v1.2",m={},h=[{value:"Wiring",id:"wiring",level:2},{value:"Firmware installation",id:"firmware-installation",level:2},{value:"I updated klipper and now i get an error!",id:"i-updated-klipper-and-now-i-get-an-error",level:2}];function k(e){let t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"bigtreetech-ebb42-v12",children:"BIGTREETECH EBB42 v1.2"})}),"\n",(0,o.jsx)(t.h2,{id:"wiring",children:"Wiring"}),"\n",(0,o.jsx)(l.Z,{width:"100%",height:null}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:r(951).Z+"",children:"Open Full Size Image"})}),"\n",(0,o.jsx)(t.admonition,{title:"Use a good quality cable",type:"caution",children:(0,o.jsx)(t.p,{children:"Make sure your board is connected to the Pi via a good quality USB 3.1 (or better) braided cable for best performance and durability."})}),"\n",(0,o.jsx)(t.h2,{id:"firmware-installation",children:"Firmware installation"}),"\n",(0,o.jsxs)(t.p,{children:["Follow the steps in the RatOS Configurator at ",(0,o.jsx)(t.a,{href:"http://RatOS.local/configure?step=2",children:"http://RatOS.local/configure?step=2"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"i-updated-klipper-and-now-i-get-an-error",children:"I updated klipper and now i get an error!"}),"\n",(0,o.jsx)(t.p,{children:"When you update klipper you might see an error that looks like this:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Firmware version mismatch between host and guest",src:r(9240).Z+"",width:"849",height:"260"})}),"\n",(0,o.jsxs)(t.p,{children:["This is because klipper made changes to a part of the MCU firmware that we use, and something went wrong while automatically flashing your board. Klipper is telling us that the version of klipper running on the Pi is newer than the version running on the MCU. To fix this, we have to flash the board with a new version of the firmware, Follow the steps in the RatOS Configurator at ",(0,o.jsx)(t.a,{href:"http://RatOS.local/configure?step=2",children:"http://RatOS.local/configure?step=2"}),"."]})]})}function d(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(k,{...e})}):k(e)}},32198:function(e,t,r){r.d(t,{Z:function(){return e1}});var i,o,n,l,s,a,m,h,k,d,p,c,E,f,v,q,g,M,x,u,W,y,b,w,F,H,O,R,S,j,A,B,z,T,C,V,Z,I,P,U,N,_,D,G,L,X,J,K,Y,Q,$,ee,et,er,ei,eo,en,el,es,ea,em,eh,ek,ed,ep,ec,eE,ef,ev,eq,eg,eM,ex,eu,eW,ey,eb,ew,eF,eH,eO,eR,eS,ej,eA,eB,ez,eT,eC,eV,eZ,eI,eP,eU,eN,e_,eD,eG,eL,eX,eJ,eK,eY,eQ,e$=r(75271);function e0(){return(e0=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)({}).hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(null,arguments)}let e1=e=>{let{title:t,titleId:r,...e1}=e;return e$.createElement("svg",e0({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:1328,height:1331,style:{backgroundColor:"#1b1b1d"},viewBox:"-0.5 -0.5 1328 1331","aria-labelledby":r},e1),t?e$.createElement("title",{id:r},t):null,i||(i=e$.createElement("image",{xlinkHref:"https://os.ratrig.com/img/diagram/EBB42.webp",width:437,height:413,x:587.5,y:401.5,preserveAspectRatio:"none",transform:"rotate(90 806.5 608.5)"})),o||(o=e$.createElement("image",{xlinkHref:"https://os.ratrig.com/img/diagram/psu.png",width:514.25,height:280,x:236.5,y:-.5,preserveAspectRatio:"none"})),n||(n=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:6,d:"m733.19 100.72 116.91-.03q10 0 10 10l.03 434.39",opacity:.25,pointerEvents:"stroke"})),l||(l=e$.createElement("path",{fill:"none",stroke:"#545454",strokeMiterlimit:10,strokeWidth:6,d:"m731.19 97.72 116.91-.03q10 0 10 10l.03 434.39",pointerEvents:"stroke"})),s||(s=e$.createElement("image",{xlinkHref:"https://os.ratrig.com/img/diagram/heater-thermistor.png",width:88,height:280,x:882.5,y:1006.5,preserveAspectRatio:"none"})),a||(a=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:6,d:"m733.19 164.56 118.92.04c0-10.4 16-10.39 16 .01l26.96.01q10 0 10 10l.07 375.26",opacity:.25,pointerEvents:"stroke"})),m||(m=e$.createElement("path",{fill:"none",stroke:"#c00",strokeMiterlimit:10,strokeWidth:6,d:"m731.19 161.56 118.92.04c0-10.4 16-10.39 16 .01l26.96.01q10 0 10 10l.07 375.26",pointerEvents:"stroke"})),h||(h=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"m899.96 1025.12.07-95.12q0-10-7.55-10h-3.77q-3.78 0-3.78-10l-.02-120.2",opacity:.25,pointerEvents:"stroke"})),k||(k=e$.createElement("path",{fill:"none",stroke:"#ffbc03",strokeMiterlimit:10,strokeWidth:4,d:"m897.96 1022.12.07-95.12q0-10-7.55-10h-3.77q-3.78 0-3.78-10l-.02-120.2",pointerEvents:"stroke"})),d||(d=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"m909.99 1039.96.04-109.96q0-10 5-10h2.5q2.5 0 2.5-10l-.02-114.96",opacity:.25,pointerEvents:"stroke"})),p||(p=e$.createElement("path",{fill:"none",stroke:"#ffbc03",strokeMiterlimit:10,strokeWidth:4,d:"m907.99 1036.96.04-109.96q0-10 5-10h2.5q2.5 0 2.5-10l-.02-114.96",pointerEvents:"stroke"})),c||(c=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"m954.96 1029.88.04-94.85q0-10-7.48-10h-3.74q-3.75 0-3.75-10v-185.1q0-10-10-10l-130.2-.05",opacity:.25,pointerEvents:"stroke"})),E||(E=e$.createElement("path",{fill:"none",stroke:"#af1bc4",strokeMiterlimit:10,strokeWidth:4,d:"m952.96 1026.88.04-94.85q0-10-7.48-10h-3.74q-3.75 0-3.75-10v-185.1q0-10-10-10l-130.2-.05",pointerEvents:"stroke"})),f||(f=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"m959.98 1029.88.05-104.85q0-10-5-10h-2.5q-2.5 0-2.5-10V700.21q0-10-10-10.01l-140.2-.04",opacity:.25,pointerEvents:"stroke"})),v||(v=e$.createElement("path",{fill:"none",stroke:"#af1bc4",strokeMiterlimit:10,strokeWidth:4,d:"m957.98 1026.88.05-104.85q0-10-5-10h-2.5q-2.5 0-2.5-10V697.21q0-10-10-10.01l-140.2-.04",pointerEvents:"stroke"})),q||(q=e$.createElement("image",{xlinkHref:"https://os.ratrig.com/img/diagram/bltouch.png",width:321,height:184,x:48.5,y:569.5,preserveAspectRatio:"none",transform:"rotate(-180 209.5 662)"})),g||(g=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"m340.86 667.02 164.14.01q10 0 10-10v-46.96q0-10 10-9.99l84.85.06",opacity:.25,pointerEvents:"stroke"})),M||(M=e$.createElement("path",{fill:"none",stroke:"#dbd9d9",strokeMiterlimit:10,strokeWidth:4,d:"m338.86 664.02 164.14.01q10 0 10-10v-46.96q0-10 10-9.99l84.85.06",pointerEvents:"stroke"})),x||(x=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"m346 662.06.02-1.03q.01-1.03 10.01-1.03H499q10 0 10-10v-65.17q0-10 10-10.01l95.8-.03",opacity:.25,pointerEvents:"stroke"})),u||(u=e$.createElement("path",{fill:"none",stroke:"#545454",strokeMiterlimit:10,strokeWidth:4,d:"m344 659.06.02-1.03q.01-1.03 10.01-1.03H497q10 0 10-10v-65.17q0-10 10-10.01l95.8-.03",pointerEvents:"stroke"})),W||(W=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"m340.86 651.94 1.07-.01q1.07 0 1.07 1.04v.51q0 .52 10 .52h140q10 0 10-10v-84.07q0-10 10-10l96.85-.05",opacity:.25,pointerEvents:"stroke"})),y||(y=e$.createElement("path",{fill:"none",stroke:"#ffbc03",strokeMiterlimit:10,strokeWidth:4,d:"m338.86 648.94 1.07-.01q1.07 0 1.07 1.04v.51q0 .52 10 .52h140q10 0 10-10v-84.07q0-10 10-10l96.85-.05",pointerEvents:"stroke"})),b||(b=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"m346 646.97 141 .06q10 0 10-10V530.21q0-10 10-10.01l107.8-.03",opacity:.25,pointerEvents:"stroke"})),w||(w=e$.createElement("path",{fill:"none",stroke:"#c00",strokeMiterlimit:10,strokeWidth:4,d:"m344 643.97 141 .06q10 0 10-10V527.21q0-10 10-10.01l107.8-.03",pointerEvents:"stroke"})),F||(F=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"M344.07 639.98 481 639.1q10-.07 10-10.07v-124.2q0-10 10-10l113.8-.01",opacity:.25,pointerEvents:"stroke"})),H||(H=e$.createElement("path",{fill:"none",stroke:"#994c00",strokeMiterlimit:10,strokeWidth:4,d:"M342.07 636.98 479 636.1q10-.07 10-10.07v-124.2q0-10 10-10l113.8-.01",pointerEvents:"stroke"})),O||(O=e$.createElement("image",{xlinkHref:"https://os.ratrig.com/img/diagram/inductive-probe.png",width:320,height:65,x:62.5,y:410.5,preserveAspectRatio:"none",transform:"rotate(-180 223 443.5)"})),R||(R=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"m616.87 521.91 9.06.01q9.07.01 9.07-9.99v-54.9q0-10-10-10l-250.88-.01",opacity:.25,pointerEvents:"stroke"})),S||(S=e$.createElement("path",{fill:"none",stroke:"#994c00",strokeMiterlimit:10,strokeWidth:4,d:"m614.87 518.91 9.06.01q9.07.01 9.07-9.99v-54.9q0-10-10-10l-250.88-.01",pointerEvents:"stroke"})),j||(j=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"m374.12 444.03 241.91-.03q10 0 10 1.52v36.69q0 10-4.58 9.99h-4.58",opacity:.25,pointerEvents:"stroke"})),A||(A=e$.createElement("path",{fill:"none",stroke:"#39f",strokeMiterlimit:10,strokeWidth:4,d:"m372.12 441.03 241.91-.03q10 0 10 1.52v36.69q0 10-4.58 9.99h-4.58",pointerEvents:"stroke"})),B||(B=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"m370.92 444.03 263.11-.03q10 0 10 10v85.03q0 10-10 10l-20.05-.02",opacity:.25,pointerEvents:"stroke"})),z||(z=e$.createElement("path",{fill:"none",stroke:"#545454",strokeMiterlimit:10,strokeWidth:4,d:"m368.92 441.03 263.11-.03q10 0 10 10v85.03q0 10-10 10l-20.05-.02",pointerEvents:"stroke"})),T||(T=e$.createElement("image",{xlinkHref:"https://os.ratrig.com/img/diagram/axial-fan.png",width:180,height:173,x:671.5,y:1013.5,preserveAspectRatio:"none"})),C||(C=e$.createElement("image",{xlinkHref:"https://os.ratrig.com/img/diagram/blower.png",width:180,height:179,x:491.5,y:950.5,preserveAspectRatio:"none"})),V||(V=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"m785.06 1017 .01-83q0-10 10-10H829q10 0 10-10V784.07q0-10-5.96-10l-5.95-.01",opacity:.25,pointerEvents:"stroke"})),Z||(Z=e$.createElement("path",{fill:"none",stroke:"#545454",strokeMiterlimit:10,strokeWidth:4,d:"m783.06 1014 .01-83q0-10 10-10H827q10 0 10-10V781.07q0-10-5.96-10l-5.95-.01",pointerEvents:"stroke"})),I||(I=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"m764 1017 .03-97.97q0-10 10-10h43.04q10 0 10-10l.02-100.93",opacity:.25,pointerEvents:"stroke"})),P||(P=e$.createElement("path",{fill:"none",stroke:"#c00",strokeMiterlimit:10,strokeWidth:4,d:"m762 1014 .03-97.97q0-10 10-10h43.04q10 0 10-10l.02-100.93",pointerEvents:"stroke"})),U||(U=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"M599.48 953.28V886q0-10 10-10h108.55q10 0 10-10v-24.97q0-10 10-10h28q10 0 10-10v-40q0-10-7.51-10.01l-7.51-.01",opacity:.25,pointerEvents:"stroke"})),N||(N=e$.createElement("path",{fill:"none",stroke:"#545454",strokeMiterlimit:10,strokeWidth:4,d:"M597.48 950.28V883q0-10 10-10h108.55q10 0 10-10v-24.97q0-10 10-10h28q10 0 10-10v-40q0-10-7.51-10.01l-7.51-.01",pointerEvents:"stroke"})),_||(_=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"m584 954 .03-86q0-10 10-10h106q10 0 10-10v-36.83q0-10 10-10l40.98-.01",opacity:.25,pointerEvents:"stroke"})),D||(D=e$.createElement("path",{fill:"none",stroke:"#c00",strokeMiterlimit:10,strokeWidth:4,d:"m582 951 .03-86q0-10 10-10h106q10 0 10-10v-36.83q0-10 10-10l40.98-.01",pointerEvents:"stroke"})),G||(G=e$.createElement("image",{xlinkHref:"https://os.ratrig.com/img/diagram/nema17.png",width:223,height:278,x:1103.5,y:407.5,preserveAspectRatio:"none",transform:"matrix(-1 0 0 1 2431 0)"})),L||(L=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"m977 642.09 73.52-.02q10 0 10 1.52v.75q0 .76 10 .76l95.24-.02",opacity:.25,pointerEvents:"stroke"})),X||(X=e$.createElement("path",{fill:"none",stroke:"#545454",strokeMiterlimit:10,strokeWidth:4,d:"m975 639.09 73.52-.02q10 0 10 1.52v.75q0 .76 10 .76l95.24-.02",pointerEvents:"stroke"})),J||(J=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"m977 669.18 73.03-.01q10 0 10-6.07v-3.03q0-3.04 10-3.04H1159q10 0 10-4.72v-2.36q0-2.36 2.95-2.37h2.96",opacity:.25,pointerEvents:"stroke"})),K||(K=e$.createElement("path",{fill:"none",stroke:"#c00",strokeMiterlimit:10,strokeWidth:4,d:"m975 666.18 73.03-.01q10 0 10-6.07v-3.03q0-3.04 10-3.04H1157q10 0 10-4.72v-2.36q0-2.36 2.95-2.37h2.96",pointerEvents:"stroke"})),Y||(Y=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"m979.89 692.78 77.11.04q10 .01 10-9.99v-6.9q0-6.9 10-6.9h91.03q10 0 10-9.2v-4.61q0-4.6 3.01-4.59l3.01.01",opacity:.25,pointerEvents:"stroke"})),Q||(Q=e$.createElement("path",{fill:"none",stroke:"#98cc54",strokeMiterlimit:10,strokeWidth:4,d:"m977.89 689.78 77.11.04q10 .01 10-9.99v-6.9q0-6.9 10-6.9h91.03q10 0 10-9.2v-4.61q0-4.6 3.01-4.59l3.01.01",pointerEvents:"stroke"})),$||($=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"m979.89 719.88 86.14.05q10 0 10-10v-18.9q0-10 10-10H1177q10 0 10-9.2v-4.61q0-4.6 4.55-4.61l4.54-.02",opacity:.25,pointerEvents:"stroke"})),ee||(ee=e$.createElement("path",{fill:"none",stroke:"#39f",strokeMiterlimit:10,strokeWidth:4,d:"m977.89 716.88 86.14.05q10 0 10-10v-18.9q0-10 10-10H1175q10 0 10-9.2v-4.61q0-4.6 4.55-4.61l4.54-.02",pointerEvents:"stroke"})),et||(et=e$.createElement("image",{xlinkHref:"https://os.ratrig.com/img/diagram/endstop.png",width:49,height:76,x:413.5,y:782.5,preserveAspectRatio:"none",transform:"rotate(90 438.5 821)"})),er||(er=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"m133.88 96.76.01 36.27q.01 10 10.01 10l83.13-.03",opacity:.25,pointerEvents:"stroke"})),ei||(ei=e$.createElement("path",{fill:"none",stroke:"#545454",strokeMiterlimit:10,strokeWidth:4,d:"m131.88 93.76.01 36.27q.01 10 10.01 10l83.13-.03",pointerEvents:"stroke"})),eo||(eo=e$.createElement("path",{fill:"#545454",stroke:"#545454",strokeMiterlimit:10,strokeWidth:4,d:"m232.53 140-10 5 2.5-5-2.5-5Z",pointerEvents:"all"})),en||(en=e$.createElement("path",{fill:"none",d:"M72 42h120v51H72z",pointerEvents:"all"})),el||(el=e$.createElement("text",{x:131.5,y:82,fill:"#FFF",fontFamily:"Oswald",fontSize:32,textAnchor:"middle"},"24V PSU")),es||(es=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"m448.56 799.6.02-66.22q.01-10 10.01-10l173.56-.01",opacity:.25,pointerEvents:"stroke"})),ea||(ea=e$.createElement("path",{fill:"none",stroke:"#c00",strokeMiterlimit:10,strokeWidth:4,d:"m446.56 796.6.02-66.22q.01-10 10.01-10l173.56-.01",pointerEvents:"stroke"})),em||(em=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"m440.5 799.5.02-87.5q0-10 10-10l181.63-.04",opacity:.25,pointerEvents:"stroke"})),eh||(eh=e$.createElement("path",{fill:"none",stroke:"#545454",strokeMiterlimit:10,strokeWidth:4,d:"m438.5 796.5.02-87.5q0-10 10-10l181.63-.04",pointerEvents:"stroke"})),ek||(ek=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"M431 801.02V694q0-10 10-10l191.15.04",opacity:.25,pointerEvents:"stroke"})),ed||(ed=e$.createElement("path",{fill:"none",stroke:"#dbd9d9",strokeMiterlimit:10,strokeWidth:4,d:"M429 798.02V691q0-10 10-10l191.15.04",pointerEvents:"stroke"})),ep||(ep=e$.createElement("path",{fill:"none",d:"M63 330h270v51H63z",pointerEvents:"all"})),ec||(ec=e$.createElement("text",{x:197.5,y:370,fill:"#FFF",fontFamily:"Oswald",fontSize:32,textAnchor:"middle"},"5V INDUCTIVE PROBE")),eE||(eE=e$.createElement("path",{fill:"none",d:"M111 750h129v51H111z",pointerEvents:"all"})),ef||(ef=e$.createElement("text",{x:175,y:790,fill:"#FFF",fontFamily:"Oswald",fontSize:32,textAnchor:"middle"},"BLTOUCH")),ev||(ev=e$.createElement("path",{fill:"none",d:"M363.5 867h150v51h-150z",pointerEvents:"all"})),eq||(eq=e$.createElement("text",{x:438,y:907,fill:"#FFF",fontFamily:"Oswald",fontSize:32,textAnchor:"middle"},"X ENDSTOP")),eg||(eg=e$.createElement("path",{fill:"none",d:"M396 1167h243v51H396z",pointerEvents:"all"})),eM||(eM=e$.createElement("text",{x:517,y:1207,fill:"#FFF",fontFamily:"Oswald",fontSize:32,textAnchor:"middle"},"PART COOLING FAN")),ex||(ex=e$.createElement("path",{fill:"none",d:"M675 1230h165v51H675z",pointerEvents:"all"})),eu||(eu=e$.createElement("text",{x:757,y:1270,fill:"#FFF",fontFamily:"Oswald",fontSize:32,textAnchor:"middle"},"HOTEND FAN")),eW||(eW=e$.createElement("path",{fill:"none",d:"M1020 1263h108v51h-108z",pointerEvents:"all"})),ey||(ey=e$.createElement("text",{x:1073.5,y:1303,fill:"#FFF",fontFamily:"Oswald",fontSize:32,textAnchor:"middle"},"HEATER")),eb||(eb=e$.createElement("path",{fill:"none",d:"M1020 1134h171v51h-171z",pointerEvents:"all"})),ew||(ew=e$.createElement("text",{x:1105,y:1174,fill:"#FFF",fontFamily:"Oswald",fontSize:32,textAnchor:"middle"},"THERMISTOR")),eF||(eF=e$.createElement("path",{fill:"none",d:"M1149 819h141v51h-141z",pointerEvents:"all"})),eH||(eH=e$.createElement("text",{x:1219,y:859,fill:"#FFF",fontFamily:"Oswald",fontSize:32,textAnchor:"middle"},"EXTRUDER")),eO||(eO=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"m364.6 896.37-4.56.02q-4.56.02-4.56-9.98V834q0-10 10-10h25.05",opacity:.25,pointerEvents:"stroke"})),eR||(eR=e$.createElement("path",{fill:"none",stroke:"#545454",strokeMiterlimit:10,strokeWidth:4,d:"m362.6 893.37-4.56.02q-4.56.02-4.56-9.98V831q0-10 10-10h25.05",pointerEvents:"stroke"})),eS||(eS=e$.createElement("path",{fill:"#545454",stroke:"#545454",strokeMiterlimit:10,strokeWidth:4,d:"m396.03 821-10 5 2.5-5-2.5-5Z",pointerEvents:"all"})),ej||(ej=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"m437.61 1165 .01-111.48q0-10 10-10.01l34.41-.01",opacity:.25,pointerEvents:"stroke"})),eA||(eA=e$.createElement("path",{fill:"none",stroke:"#545454",strokeMiterlimit:10,strokeWidth:4,d:"m435.61 1162 .01-111.48q0-10 10-10.01l34.41-.01",pointerEvents:"stroke"})),eB||(eB=e$.createElement("path",{fill:"#545454",stroke:"#545454",strokeMiterlimit:10,strokeWidth:4,d:"m487.53 1040.5-10 5 2.5-5-2.5-5Z",pointerEvents:"all"})),ez||(ez=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"M764 1230v-28.03",opacity:.25,pointerEvents:"stroke"})),eT||(eT=e$.createElement("path",{fill:"none",stroke:"#545454",strokeMiterlimit:10,strokeWidth:4,d:"M762 1227v-28.03",pointerEvents:"stroke"})),eC||(eC=e$.createElement("path",{fill:"#545454",stroke:"#545454",strokeMiterlimit:10,strokeWidth:4,d:"m762 1191.47 5 10-5-2.5-5 2.5Z",pointerEvents:"all"})),eV||(eV=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"m1016.28 1291.24-9.12-.03q-9.13-.04-9.13 9.96v9.42q0 9.41-10 9.41H917q-10 0-10-9.01v-9.02",opacity:.25,pointerEvents:"stroke"})),eZ||(eZ=e$.createElement("path",{fill:"none",stroke:"#545454",strokeMiterlimit:10,strokeWidth:4,d:"m1014.28 1288.24-9.12-.03q-9.13-.04-9.13 9.96v9.42q0 9.41-10 9.41H915q-10 0-10-9.01v-9.02",pointerEvents:"stroke"})),eI||(eI=e$.createElement("path",{fill:"#545454",stroke:"#545454",strokeMiterlimit:10,strokeWidth:4,d:"m905 1291.47 5 10-5-2.5-5 2.5Z",pointerEvents:"all"})),eP||(eP=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"m1103.74 1193.76-.03 20.24q-.02 10-10.02 10H966.03q-10 0-10-4.55v-4.56",opacity:.25,pointerEvents:"stroke"})),eU||(eU=e$.createElement("path",{fill:"none",stroke:"#545454",strokeMiterlimit:10,strokeWidth:4,d:"m1101.74 1190.76-.03 20.24q-.02 10-10.02 10H964.03q-10 0-10-4.55v-4.56",pointerEvents:"stroke"})),eN||(eN=e$.createElement("path",{fill:"#545454",stroke:"#545454",strokeMiterlimit:10,strokeWidth:4,d:"m954.02 1204.39 5.01 10-5-2.5-5 2.51Z",pointerEvents:"all"})),e_||(e_=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"m1218 820-.4-119.03",opacity:.25,pointerEvents:"stroke"})),eD||(eD=e$.createElement("path",{fill:"none",stroke:"#545454",strokeMiterlimit:10,strokeWidth:4,d:"m1216 817-.4-119.03",pointerEvents:"stroke"})),eG||(eG=e$.createElement("path",{fill:"#545454",stroke:"#545454",strokeMiterlimit:10,strokeWidth:4,d:"m1215.54 690.47 5.08 9.96-5.02-2.46-4.98 2.54Z",pointerEvents:"all"})),eL||(eL=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"m111.71 781.76-.01.64q-.01.63-10.01.63H21q-10 0-10-10V662.28q0-10 10-10l18.99.02",opacity:.25,pointerEvents:"stroke"})),eX||(eX=e$.createElement("path",{fill:"none",stroke:"#545454",strokeMiterlimit:10,strokeWidth:4,d:"m109.71 778.76-.01.64q-.01.63-10.01.63H19q-10 0-10-10V659.28q0-10 10-10l18.99.02",pointerEvents:"stroke"})),eJ||(eJ=e$.createElement("path",{fill:"#545454",stroke:"#545454",strokeMiterlimit:10,strokeWidth:4,d:"m45.49 649.3-10 4.99 2.5-4.99-2.5-5.01Z",pointerEvents:"all"})),eK||(eK=e$.createElement("path",{fill:"none",stroke:"#000",strokeMiterlimit:10,strokeWidth:4,d:"m188.66 386.24.03 6.4q.03 6.39-9.97 6.39H33q-10 0-10 10v27.45q0 10 10 10.01l20.03.01",opacity:.25,pointerEvents:"stroke"})),eY||(eY=e$.createElement("path",{fill:"none",stroke:"#545454",strokeMiterlimit:10,strokeWidth:4,d:"m186.66 383.24.03 6.4q.03 6.39-9.97 6.39H31q-10 0-10 10v27.45q0 10 10 10.01l20.03.01",pointerEvents:"stroke"})),eQ||(eQ=e$.createElement("path",{fill:"#545454",stroke:"#545454",strokeMiterlimit:10,strokeWidth:4,d:"m58.53 443.5-10 4.99 2.5-4.99-2.5-5.01Z",pointerEvents:"all"})))}},951:function(e,t,r){r.d(t,{Z:function(){return i}});let i=r.p+"assets/files/ebb42-wiring-1cf583d6ba655b0ed2e258fee274cef7.svg"},9240:function(e,t,r){r.d(t,{Z:function(){return i}});let i=r.p+"assets/images/firmware_version_mismatch-456c9561ecf03b8fc5c498f42ce6a891.png"},23663:function(e,t,r){r.d(t,{Z:function(){return s},a:function(){return l}});var i=r(75271);let o={},n=i.createContext(o);function l(e){let t=i.useContext(n);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);