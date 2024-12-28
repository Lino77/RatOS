"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([["6676"],{79294:function(e,t,o){o.r(t),o.d(t,{default:()=>c,frontMatter:()=>s,metadata:()=>r,assets:()=>h,toc:()=>d,contentTitle:()=>a});var r=JSON.parse('{"id":"boards/btt/octopus-pro-h723","title":"BIGTREETECH Octopus Pro STM32H723","description":"When the V1.0 version of this board boots into DFU mode (which happens during firmware updates), the heater pins on HE0 and HE2 will be set to high, meaning your hotend will heat up for the duration of the firmware update process.","source":"@site/docs/boards/btt/octopus-pro-h723.md","sourceDirName":"boards/btt","slug":"/boards/btt/octopus-pro-h723","permalink":"/docs/boards/btt/octopus-pro-h723","draft":false,"unlisted":false,"editUrl":"https://github.com/Rat-OS/RatOS/edit/v2.x/site/docs/boards/btt/octopus-pro-h723.md","tags":[],"version":"current","frontMatter":{"sidebar_label":"Octopus Pro h723"},"sidebar":"docsSidebar","previous":{"title":"Octopus Pro 446","permalink":"/docs/boards/btt/octopus-pro-446"},"next":{"title":"SKR 2 429","permalink":"/docs/boards/btt/skr-2-429"}}'),i=o("52676"),n=o("23663");let s={sidebar_label:"Octopus Pro h723"},a="BIGTREETECH Octopus Pro STM32H723",h={},d=[{value:"Wiring",id:"wiring",level:2},{value:"Jumpers",id:"jumpers",level:3},{value:"Firmware installation",id:"firmware-installation",level:2},{value:"I updated klipper and now i get an error!",id:"i-updated-klipper-and-now-i-get-an-error",level:2}];function l(e){let t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",strong:"strong",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"bigtreetech-octopus-pro-stm32h723",children:"BIGTREETECH Octopus Pro STM32H723"})}),"\n",(0,i.jsx)(t.admonition,{title:"V1.0 of this board can be dangerous, version 1.1 is fine.",type:"danger",children:(0,i.jsxs)(t.p,{children:["When the V1.0 version of this board boots into DFU mode (which happens during firmware updates), the heater pins on HE0 and HE2 will be set to high, meaning your hotend will heat up for the duration of the firmware update process.\nFor this reason automatic firmware updates is disabled by default for the Octopus Pro H723 v1.0 boards in RatOS. You'll have to flash it through the ",(0,i.jsx)(t.a,{href:"http://RatOS.local/configure?step=2",children:"RatOS Configurator"})," when needed,\nand monitor it closely, preferably disconnect the heater from the board. The V1.1 version updates automatically as it does not have this problem.\nSee the ",(0,i.jsx)(t.a,{href:"https://github.com/bigtreetech/BIGTREETECH-OCTOPUS-Pro?tab=readme-ov-file#octopus-pro-v11",children:"Octopus Pro readme"})]})}),"\n",(0,i.jsx)(t.h2,{id:"wiring",children:"Wiring"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"BTT Octopus Pro STM32H723 Wiring Diagram",src:o(41534).Z+"",width:"2376",height:"1589"}),"\n",(0,i.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:o(43796).Z+"",children:"Open Full Size Image"})]}),"\n",(0,i.jsxs)(t.admonition,{type:"danger",children:[(0,i.jsxs)(t.mdxAdmonitionTitle,{children:["if you use the Ratrig endstop switches and cables, do ",(0,i.jsx)(t.strong,{children:"not"})," blindly plug them in to your Octopus as doing this will short the board's 5V power rail."]}),(0,i.jsx)(t.p,{children:"You will probably have to swap the outer two wires (red and white) on the board end of the cable but double check to make sure your cables match the wiring diagram in both ends.\nOrders shipped after October 2022 should have the correct cables (the connectors on the new cables are white)."})]}),"\n",(0,i.jsx)(t.admonition,{title:"Jumpers",type:"info",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Jumper Symbol",src:o(24779).Z+"",width:"40",height:"16"})," A green square with triangles inside is where you would place a jumper,\nremove all jumpers on the board that are not marked by this symbol."]})}),"\n",(0,i.jsx)(t.h3,{id:"jumpers",children:"Jumpers"}),"\n",(0,i.jsx)(t.p,{children:"The jumpers above the stepper drivers switches stepper driver input power between V_MOT and VIN (ie, board power terminals and motor power terminals).\nIn the configuration shown in the image above, the MOTOR power isn't connected because the jumpers are set to use the board power (VIN).\nIf you wanted to use 48V for example, you would connect your 48V psu to the motor power terminal and switch those jumpers to the other position to use V_MOT instead. Of course you shouldn't do this unless you use high voltage capable 5160 drivers."}),"\n",(0,i.jsx)(t.h2,{id:"firmware-installation",children:"Firmware installation"}),"\n",(0,i.jsx)(t.admonition,{title:"Use a proper cable",type:"caution",children:(0,i.jsxs)(t.p,{children:["Make sure your board is connected to the Pi ",(0,i.jsx)(t.strong,{children:"via the provided USB-C cable"})," (USB-C on the Octopus, USB-A on the Pi)."]})}),"\n",(0,i.jsxs)(t.p,{children:["Follow the steps in the RatOS Configurator at ",(0,i.jsx)(t.a,{href:"http://RatOS.local/configure?step=1",children:"http://RatOS.local/configure?step=1"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"i-updated-klipper-and-now-i-get-an-error",children:"I updated klipper and now i get an error!"}),"\n",(0,i.jsx)(t.p,{children:"When you update klipper you might see an error that looks like this:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Firmware version mismatch between host and guest",src:o(9240).Z+"",width:"849",height:"260"})}),"\n",(0,i.jsxs)(t.p,{children:["This is because klipper made changes to a part of the MCU firmware that we use, and something went wrong while automatically flashing your board. Klipper is telling us that the version of klipper running on the Pi is newer than the version running on the MCU. To fix this, we have to flash the board with a new version of the firmware, Follow the steps in the RatOS Configurator at ",(0,i.jsx)(t.a,{href:"http://RatOS.local/configure?step=1",children:"http://RatOS.local/configure?step=1"}),"."]})]})}function c(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},43796:function(e,t,o){o.d(t,{Z:function(){return r}});let r=o.p+"assets/files/octopus-pro-wiring-full-3d9d989a41707c83aaebfd75f2ed3846.png"},24779:function(e,t,o){o.d(t,{Z:function(){return r}});let r="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmx1Y2lkPSJsdWNpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjE2Ij48ZyBzdHJva2U9IiM3YWI2NDgiIHN0cm9rZS13aWR0aD0iMyIgZmlsbD0iI2ZmZiIgbHVjaWQ6cGFnZS10YWItaWQ9IjBfMCIgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMiwgLTEyKSI+PHBhdGggZD0iTTQzLjg4IDI3Ljg2aC0yMy43VjIwLjJoMjMuN3Y3LjY2eiIvPjxwYXRoIGQ9Ik00My44OCAyMi4wNmwtMy44NCA0LjItNC4wOC00LjItMy45NCA0LjItMy45OC00LjItNCA0LjItMy44Ny00LjIiLz48L2c+PC9zdmc+"},41534:function(e,t,o){o.d(t,{Z:function(){return r}});let r=o.p+"assets/images/octopus-pro-wiring-85e95969570f598f4bc464231e16d191.png"},9240:function(e,t,o){o.d(t,{Z:function(){return r}});let r=o.p+"assets/images/firmware_version_mismatch-456c9561ecf03b8fc5c498f42ce6a891.png"},23663:function(e,t,o){o.d(t,{Z:function(){return a},a:function(){return s}});var r=o(75271);let i={},n=r.createContext(i);function s(e){let t=r.useContext(n);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);