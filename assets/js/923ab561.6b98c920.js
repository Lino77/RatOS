"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([["2341"],{82678:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>r,assets:()=>d,toc:()=>c,contentTitle:()=>s});var r=JSON.parse('{"id":"configuration/includes-and-overrides","title":"Includes & Overrides","description":"RatOS uses a modular configuration that heavily takes advantage of the config file include and merge logic in Klipper. For this reason, the order of includes and overrides are very important, do not change the order of the configuration unless you know what you\'re doing.","source":"@site/docs/configuration/includes-and-overrides.md","sourceDirName":"configuration","slug":"/configuration/includes-and-overrides","permalink":"/docs/configuration/includes-and-overrides","draft":false,"unlisted":false,"editUrl":"https://github.com/Rat-OS/RatOS/edit/v2.x/site/docs/configuration/includes-and-overrides.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"Toolboard Configuration","permalink":"/docs/configuration/toolboards"},"next":{"title":"Beacon Contact","permalink":"/docs/configuration/beacon_contact"}}'),o=t("52676"),i=t("23663");let a={sidebar_position:3},s="Includes & Overrides",d={},c=[{value:"All RatOS really does is change the klipper defaults",id:"all-ratos-really-does-is-change-the-klipper-defaults",level:2},{value:"Overriding parameters",id:"overriding-parameters",level:2},{value:"Overriding pins",id:"overriding-pins",level:2}];function l(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"includes--overrides",children:"Includes & Overrides"})}),"\n",(0,o.jsxs)(n.p,{children:["RatOS uses a modular configuration that heavily takes advantage of the config file include and merge logic in Klipper. For this reason, the order of includes and overrides are very important, do ",(0,o.jsx)(n.strong,{children:"not"})," change the order of the configuration unless you know what you're doing."]}),"\n",(0,o.jsx)(n.h2,{id:"all-ratos-really-does-is-change-the-klipper-defaults",children:"All RatOS really does is change the klipper defaults"}),"\n",(0,o.jsxs)(n.p,{children:["Imagine that each ",(0,o.jsx)(n.code,{children:"[include]"})," section is simply replaced by the contents of the included file, you can go and check out the contents of the included file if you want to know the RatOS defaults, but they are just that, defaults. Everything that comes after that overrides those defaults, much in the same way that the RatOS configuration itself overrides the klipper defaults."]}),"\n",(0,o.jsx)(n.h2,{id:"overriding-parameters",children:"Overriding parameters"}),"\n",(0,o.jsxs)(n.p,{children:["You can override any setting in RatOS, to do so you just copy the section and the parameter you need to change, and paste it in your printer.cfg in the ",(0,o.jsx)(n.code,{children:"USER OVERRIDES"})," section. Let's say we wanted to increase the probe count and speed of the bed mesh on a 500mm V-Core 3."]}),"\n",(0,o.jsxs)(n.p,{children:["We're only interested in the ",(0,o.jsx)(n.code,{children:"probe_count"})," setting, so all we need to do is go back to printer.cfg, scroll down to the ",(0,o.jsx)(n.code,{children:"USER OVERRIDES"})," comment section and put in the following:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-properties",metastring:'title="printer.cfg"',children:"############################\n### USER OVERRIDES\n### Anything custom ...\n############################\n\n[bed_mesh]\nprobe_count: 11,11\nspeed: 100\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This works for any section (including gcode macros) and any parameter. You only need to override the parts you're interested in. You can have the same section defined multiple times, they will all get merged by klipper when it reads the config, with the last parameters taking precedence. This makes for a super powerful way to build your config! Refer to the ",(0,o.jsx)(n.a,{href:"https://www.klipper3d.org/Config_Reference.html",children:"klipper config reference"})," for all the cool things you can do."]}),"\n",(0,o.jsx)(n.h2,{id:"overriding-pins",children:"Overriding pins"}),"\n",(0,o.jsxs)(n.p,{children:["Many assume that to override a pin in some part of the documentation, they have to override the boards pin map. This is not the case and is counterproductive. The board pin alias only exists as a way to abstract the printer config from the control board, you don't need to care about this abstraction when configuring your own printer, just use the boards pin names directly. For example, let's say i want to change my controller_fan pin to ",(0,o.jsx)(n.code,{children:"PA8"}),". All i would have to do is this:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-properties",metastring:'title="printer.cfg"',children:"############################\n### USER OVERRIDES\n### Anything custom ...\n############################\n\n[controller_fan controller_fan]\npin: PA8\n"})}),"\n",(0,o.jsx)(n.p,{children:"Now the controller fan will use PA8 instead of whatever is configured in the board pin map. Easy!"})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},23663:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return a}});var r=t(75271);let o={},i=r.createContext(o);function a(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);