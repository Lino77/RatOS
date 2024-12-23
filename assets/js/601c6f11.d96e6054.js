"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([["9505"],{57544:function(e,t,i){i.r(t),i.d(t,{default:()=>h,frontMatter:()=>a,metadata:()=>o,assets:()=>d,toc:()=>l,contentTitle:()=>s});var o=JSON.parse('{"id":"boards/btt/octopus-pro-429","title":"BIGTREETECH Octopus Pro STM32F429","description":"This board is currently not recommended, as it cannot be flashed automatically through USB, that means all firmware updates have to be done by manually moving an SD card back and forth. It is recommended to get the Octopus Pro 446 instead. RatOS compiles the firmware binary for you each time klipper is updated (while the Octopus Pro 429 is connected), you can find the most recent firmware in the Mainsail Machine page under the firmware_binaries folder). Automatic flashing may be possible in the future if SDIO support is implemented in klipper. See this thread//github.com/Klipper3d/klipper/pull/4881#issuecomment-962596510 for more info.","source":"@site/versioned_docs/version-2.0.x/boards/btt/octopus-pro-429.md","sourceDirName":"boards/btt","slug":"/boards/btt/octopus-pro-429","permalink":"/docs/2.0.x/boards/btt/octopus-pro-429","draft":false,"unlisted":false,"editUrl":"https://github.com/Rat-OS/RatOS/edit/v2.x/site/versioned_docs/version-2.0.x/boards/btt/octopus-pro-429.md","tags":[],"version":"2.0.x","frontMatter":{"sidebar_label":"Octopus Pro 429"},"sidebar":"docsSidebar","previous":{"title":"Octopus Max EZ","permalink":"/docs/2.0.x/boards/btt/octopus-max-ez"},"next":{"title":"Octopus Pro 446","permalink":"/docs/2.0.x/boards/btt/octopus-pro-446"}}'),r=i("52676"),n=i("23663");let a={sidebar_label:"Octopus Pro 429"},s="BIGTREETECH Octopus Pro STM32F429",d={},l=[{value:"Wiring",id:"wiring",level:2},{value:"Jumpers",id:"jumpers",level:3},{value:"Firmware installation",id:"firmware-installation",level:2},{value:"I updated klipper and now i get an error!",id:"i-updated-klipper-and-now-i-get-an-error",level:2}];function c(e){let t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",strong:"strong",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"bigtreetech-octopus-pro-stm32f429",children:"BIGTREETECH Octopus Pro STM32F429"})}),"\n",(0,r.jsx)(t.admonition,{title:"Only Partial support",type:"caution",children:(0,r.jsxs)(t.p,{children:["This board is currently not recommended, as it cannot be flashed automatically through USB, that means all firmware updates have to be done by manually moving an SD card back and forth. It is recommended to get the Octopus Pro 446 instead. RatOS compiles the firmware binary for you each time klipper is updated (while the Octopus Pro 429 is connected), you can find the most recent firmware in the Mainsail Machine page under the ",(0,r.jsx)(t.code,{children:"firmware_binaries"})," folder). Automatic flashing may be possible in the future if SDIO support is implemented in klipper. See this thread: ",(0,r.jsx)(t.a,{href:"https://github.com/Klipper3d/klipper/pull/4881#issuecomment-962596510",children:"https://github.com/Klipper3d/klipper/pull/4881#issuecomment-962596510"})," for more info."]})}),"\n",(0,r.jsx)(t.h2,{id:"wiring",children:"Wiring"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{alt:"BTT Octopus Pro STM32F429 Wiring Diagram",src:i(39008).Z+"",width:"2376",height:"1589"}),"\n",(0,r.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:i(73365).Z+"",children:"Open Full Size Image"})]}),"\n",(0,r.jsxs)(t.admonition,{type:"danger",children:[(0,r.jsxs)(t.mdxAdmonitionTitle,{children:["if you use the Ratrig endstop switches and cables, do ",(0,r.jsx)(t.strong,{children:"not"})," blindly plug them in to your Octopus as doing this will short the board's 5V power rail."]}),(0,r.jsx)(t.p,{children:"You will probably have to swap the outer two wires (red and white) on the board end of the cable but double check to make sure your cables match the wiring diagram in both ends.\nOrders shipped after October 2022 should have the correct cables (the connectors on the new cables are white)."})]}),"\n",(0,r.jsx)(t.admonition,{title:"Jumpers",type:"info",children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{alt:"Jumper Symbol",src:i(39799).Z+"",width:"40",height:"16"})," A green square with triangles inside is where you would place a jumper,\nremove all jumpers on the board that are not marked by this symbol."]})}),"\n",(0,r.jsx)(t.h3,{id:"jumpers",children:"Jumpers"}),"\n",(0,r.jsx)(t.p,{children:"The jumpers above the stepper drivers switches stepper driver input power between V_MOT and VIN (ie, board power terminals and motor power terminals).\nIn the configuration shown in the image above, the MOTOR power isn't connected because the jumpers are set to use the board power (VIN).\nIf you wanted to use 48V for example, you would connect your 48V psu to the motor power terminal and switch those jumpers to the other position to use V_MOT instead. Of course you shouldn't do this unless you use high voltage capable 5160 drivers."}),"\n",(0,r.jsx)(t.h2,{id:"firmware-installation",children:"Firmware installation"}),"\n",(0,r.jsx)(t.admonition,{title:"Use a proper cable",type:"caution",children:(0,r.jsxs)(t.p,{children:["Make sure your board is connected to the Pi ",(0,r.jsx)(t.strong,{children:"via the provided USB-C cable"})," (USB-C on the Octopus, USB-A on the Pi)."]})}),"\n",(0,r.jsxs)(t.p,{children:["Follow the steps in the RatOS Configurator at ",(0,r.jsx)(t.a,{href:"http://RatOS.local/configure?step=1",children:"http://RatOS.local/configure?step=1"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"i-updated-klipper-and-now-i-get-an-error",children:"I updated klipper and now i get an error!"}),"\n",(0,r.jsx)(t.p,{children:"When you update klipper you might see an error that looks like this:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Firmware version mismatch between host and guest",src:i(9240).Z+"",width:"849",height:"260"})}),"\n",(0,r.jsxs)(t.p,{children:["This is because klipper made changes to a part of the MCU firmware that we use, and the Octopus Pro 429 cannot be flashed automatically over USB. Klipper is telling us that the version of klipper running on the Pi is newer than the version running on the MCU. To fix this, we have to flash the board with a new version of the firmware, Follow the steps in the RatOS Configurator at ",(0,r.jsx)(t.a,{href:"http://RatOS.local/configure?step=1",children:"http://RatOS.local/configure?step=1"}),"."]})]})}function h(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},73365:function(e,t,i){i.d(t,{Z:function(){return o}});let o=i.p+"assets/files/octopus-pro-wiring-full-3d9d989a41707c83aaebfd75f2ed3846.png"},9240:function(e,t,i){i.d(t,{Z:function(){return o}});let o=i.p+"assets/images/firmware_version_mismatch-456c9561ecf03b8fc5c498f42ce6a891.png"},39799:function(e,t,i){i.d(t,{Z:function(){return o}});let o="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmx1Y2lkPSJsdWNpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjE2Ij48ZyBzdHJva2U9IiM3YWI2NDgiIHN0cm9rZS13aWR0aD0iMyIgZmlsbD0iI2ZmZiIgbHVjaWQ6cGFnZS10YWItaWQ9IjBfMCIgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMiwgLTEyKSI+PHBhdGggZD0iTTQzLjg4IDI3Ljg2aC0yMy43VjIwLjJoMjMuN3Y3LjY2eiIvPjxwYXRoIGQ9Ik00My44OCAyMi4wNmwtMy44NCA0LjItNC4wOC00LjItMy45NCA0LjItMy45OC00LjItNCA0LjItMy44Ny00LjIiLz48L2c+PC9zdmc+"},39008:function(e,t,i){i.d(t,{Z:function(){return o}});let o=i.p+"assets/images/octopus-pro-wiring-85e95969570f598f4bc464231e16d191.png"},23663:function(e,t,i){i.d(t,{Z:function(){return s},a:function(){return a}});var o=i(75271);let r={},n=o.createContext(r);function a(e){let t=o.useContext(n);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);