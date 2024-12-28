"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([["5975"],{40560:function(e,t,i){i.r(t),i.d(t,{default:()=>c,frontMatter:()=>a,metadata:()=>n,assets:()=>d,toc:()=>l,contentTitle:()=>s});var n=JSON.parse('{"id":"boards/btt/octopus-11-407","title":"BIGTREETECH Octopus v1.1 w/ STM32F407","description":"Wiring","source":"@site/versioned_docs/version-1.2.x/boards/btt/octopus-11-407.md","sourceDirName":"boards/btt","slug":"/boards/btt/octopus-11-407","permalink":"/docs/1.2.x/boards/btt/octopus-11-407","draft":false,"unlisted":false,"editUrl":"https://github.com/Rat-OS/RatOS/edit/v2.x/site/versioned_docs/version-1.2.x/boards/btt/octopus-11-407.md","tags":[],"version":"1.2.x","frontMatter":{"sidebar_label":"Octopus v1.1 F407"},"sidebar":"docsSidebar","previous":{"title":"Manual Firmware Compilation","permalink":"/docs/1.2.x/manual-firmware-compilation"},"next":{"title":"Octopus v1.1","permalink":"/docs/1.2.x/boards/btt/octopus-11"}}'),o=i("52676"),r=i("23663");let a={sidebar_label:"Octopus v1.1 F407"},s="BIGTREETECH Octopus v1.1 w/ STM32F407",d={},l=[{value:"Wiring",id:"wiring",level:2},{value:"Firmware installation",id:"firmware-installation",level:2},{value:"Manual firmware upgrade",id:"manual-firmware-upgrade",level:2},{value:"SD Card",id:"sd-card",level:3},{value:"Flashing via USB",id:"flashing-via-usb",level:3}];function h(e){let t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"bigtreetech-octopus-v11-w-stm32f407",children:"BIGTREETECH Octopus v1.1 w/ STM32F407"})}),"\n",(0,o.jsx)(t.h2,{id:"wiring",children:"Wiring"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.img,{alt:"BTT Octopus V1.1 Wiring Diagram",src:i(22434).Z+"",width:"2348",height:"1560"}),"\n",(0,o.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:i(12762).Z+"",children:"Open Full Size Image"})]}),"\n",(0,o.jsxs)(t.admonition,{type:"danger",children:[(0,o.jsxs)(t.mdxAdmonitionTitle,{children:["if you use the Ratrig endstop switches and cables, do ",(0,o.jsx)(t.strong,{children:"not"})," blindly plug them in to your Octopus as doing this will short the board's 3.3V power rail."]}),(0,o.jsx)(t.p,{children:"You will probably have to swap the outer two wires (red and white) on the board end of the cable but double check to make sure."})]}),"\n",(0,o.jsx)(t.admonition,{title:"Jumpers",type:"info",children:(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.img,{alt:"Jumper Symbol",src:i(59289).Z+"",width:"40",height:"16"})," A green square with triangles inside is where you would place a jumper,\nremove all jumpers on the board that are not marked by this symbol."]})}),"\n",(0,o.jsx)(t.h2,{id:"firmware-installation",children:"Firmware installation"}),"\n",(0,o.jsx)(t.admonition,{title:"Use a proper cable",type:"caution",children:(0,o.jsxs)(t.p,{children:["Make sure your board is connected to the Pi ",(0,o.jsx)(t.strong,{children:"via the provided USB-C cable"})," (USB-C on the Octopus, USB-A on the Pi)."]})}),"\n",(0,o.jsxs)(t.p,{children:["Download the ",(0,o.jsx)(t.code,{children:"firmware-btt-octopus-11-407.bin"})," from the ",(0,o.jsx)(t.code,{children:"firmware_binaries"})," folder found on the Machine page of ",(0,o.jsx)(t.a,{href:"http://RatOS.local/",children:"Mainsail"}),", copy it onto the SD card that goes into your control board and call it ",(0,o.jsx)(t.code,{children:"firmware.bin"}),", then insert the SD card in to the control board. Here are the steps in chronological order:"]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Navigate to ",(0,o.jsx)(t.a,{href:"http://RatOS.local/",children:"http://RatOS.local/"})]}),"\n",(0,o.jsx)(t.li,{children:"Open Machine page"}),"\n",(0,o.jsxs)(t.li,{children:["Open ",(0,o.jsx)(t.code,{children:"firmware_binaries"})," folder"]}),"\n",(0,o.jsxs)(t.li,{children:["Download ",(0,o.jsx)(t.code,{children:"firmware-btt-octopus-11-407.bin"})]}),"\n",(0,o.jsx)(t.li,{children:"Format the sd card for your board to FAT16 (sometimes just called FAT), or FAT32 with a clustersize of 8kb or 4kb."}),"\n",(0,o.jsxs)(t.li,{children:["Copy ",(0,o.jsx)(t.code,{children:"firmware-btt-octopus-11-407.bin"})," onto the sd card for your board"]}),"\n",(0,o.jsxs)(t.li,{children:["Rename ",(0,o.jsx)(t.code,{children:"firmware-btt-octopus-11-407.bin"})," to ",(0,o.jsx)(t.code,{children:"firmware.bin"}),". Please be wary of file extensions! If the file doesn't already show .bin, don't add it!"]}),"\n",(0,o.jsx)(t.li,{children:"Safely eject the SD card through your operating system."}),"\n",(0,o.jsx)(t.li,{children:"Physically take out the sd card and insert it into your control board."}),"\n",(0,o.jsx)(t.li,{children:"Power cycle your printer or control board. Remember to shut the pi down properly before you cut power to your Pi (you can do that through Mainsail using the dropdown menu in the top right corner)."}),"\n",(0,o.jsxs)(t.li,{children:["Verify that the firmware has been flashed and ",(0,o.jsx)(t.strong,{children:"do not leave the sd card in the board after successful flashing"})]}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["If you don't know how to make Windows Explorer show file extensions, see ",(0,o.jsx)(t.a,{href:"https://www.howtogeek.com/205086/beginner-how-to-make-windows-show-file-extensions/",children:"this article on HowToGeek"})]})}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"You can verify if the board flashed correctly by checking if the firmware.bin file has been changed to firmware.CUR on the SD card. If you have trouble flashing the control board, start unplugging your wires beginning with the endstops, sometimes faulty wiring can cause the board to not boot properly."})}),"\n",(0,o.jsx)(t.admonition,{title:"Do not leave the SD card in the board",type:"danger",children:(0,o.jsxs)(t.p,{children:["Once you have verifed the board has been succesfully flashed, ",(0,o.jsx)(t.strong,{children:"do not"})," reinsert the SD card. If the SD card remains in the board, the automatic flashing will not work."]})}),"\n",(0,o.jsxs)(t.p,{children:["If you're going through initial setup please continue in the ",(0,o.jsx)(t.a,{href:"/docs/installation#setting-up-your-printer",children:"installation guide"})]}),"\n",(0,o.jsx)(t.h2,{id:"manual-firmware-upgrade",children:"Manual firmware upgrade"}),"\n",(0,o.jsx)(t.p,{children:"Sometimes klipper makes changes to the microcontroller code and thus your MCU need to be reflashed with new firmware. You can do that in 2 ways."}),"\n",(0,o.jsx)(t.admonition,{title:"Automatic firmware updates",type:"info",children:(0,o.jsx)(t.p,{children:"RatOS automatically flashes the newest firmware to your\nOctopus v1.1 when klipper is updated (if the klipper firmware has previously been flashed).\nYou shouldn't need any of the steps below unless that fails."})}),"\n",(0,o.jsx)(t.h3,{id:"sd-card",children:"SD Card"}),"\n",(0,o.jsxs)(t.p,{children:["If you're not used to the command line or haven't used SSH before, the easiest way is to download the firmware file from Mainsail and put that onto an SD card (renaming it to firmware.bin). Everytime klipper is updated, the firmware for the connected board is compiled and put into the ",(0,o.jsx)(t.code,{children:"firmware-binaries"}),' folder which you can find under the "Machine" tab. The process for this is the same as in the ',(0,o.jsx)(t.a,{href:"#firmware-installation",children:"Firmware Installation"})," step."]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"You can verify if the board flashed correctly by checking if the firmware.bin file has been changed to firmware.CUR on the SD card. If you have trouble flashing the motherboard, start unplugging your wires beginning with the endstops, sometimes faulty wiring can cause the board to not boot properly."})}),"\n",(0,o.jsx)(t.admonition,{title:"Do not leave the SD card in the board",type:"danger",children:(0,o.jsxs)(t.p,{children:["Once you have verifed the board has been succesfully flashed, ",(0,o.jsx)(t.strong,{children:"do not"})," reinsert the SD card. If the SD card remains in the board, the automatic flashing will not work."]})}),"\n",(0,o.jsx)(t.h3,{id:"flashing-via-usb",children:"Flashing via USB"}),"\n",(0,o.jsxs)(t.p,{children:["Another option is to SSH into the pi using something like PuTTy or ",(0,o.jsx)(t.code,{children:"ssh pi@RatOS.local"})," via the commandline on OS X and Linux machines. Execute ",(0,o.jsx)(t.code,{children:"sudo ~/klipper_config/config/boards/btt-octopus-11-407/make-and-flash-mcu.sh"})," and the Pi will compile the klipper firmware and flash the board for you."]}),"\n",(0,o.jsx)(t.admonition,{type:"caution",children:(0,o.jsx)(t.p,{children:"Be sure to remove the SD card from the board before attempting to flash, if one is in there."})})]})}function c(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},12762:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/files/octopus-11-wiring-full-6a19a1ea9e006b089a71d756741f989d.png"},59289:function(e,t,i){i.d(t,{Z:function(){return n}});let n="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmx1Y2lkPSJsdWNpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjE2Ij48ZyBzdHJva2U9IiM3YWI2NDgiIHN0cm9rZS13aWR0aD0iMyIgZmlsbD0iI2ZmZiIgbHVjaWQ6cGFnZS10YWItaWQ9IjBfMCIgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMiwgLTEyKSI+PHBhdGggZD0iTTQzLjg4IDI3Ljg2aC0yMy43VjIwLjJoMjMuN3Y3LjY2eiIvPjxwYXRoIGQ9Ik00My44OCAyMi4wNmwtMy44NCA0LjItNC4wOC00LjItMy45NCA0LjItMy45OC00LjItNCA0LjItMy44Ny00LjIiLz48L2c+PC9zdmc+"},22434:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/octopus-11-wiring-19beb1b4b4719f7327a629b125c1dade.png"},23663:function(e,t,i){i.d(t,{Z:function(){return s},a:function(){return a}});var n=i(75271);let o={},r=n.createContext(o);function a(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);