"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([["6729"],{19147:function(e,n,o){o.r(n),o.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>r,assets:()=>c,toc:()=>l,contentTitle:()=>s});var r=JSON.parse('{"id":"troubleshooting","title":"Troubleshooting","description":"My steppers are running backwards!","source":"@site/versioned_docs/version-2.0.x/troubleshooting.md","sourceDirName":".","slug":"/troubleshooting","permalink":"/docs/2.0.x/troubleshooting","draft":false,"unlisted":false,"editUrl":"https://github.com/Rat-OS/RatOS/edit/v2.x/site/versioned_docs/version-2.0.x/troubleshooting.md","tags":[],"version":"2.0.x","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Voron V2.4 (BETA)","permalink":"/docs/2.0.x/printers/voron-v24"},"next":{"title":"Manual Firmware Compilation","permalink":"/docs/2.0.x/manual-firmware-compilation"}}'),t=o("52676"),i=o("23663");let a={},s="Troubleshooting",c={},l=[{value:"My steppers are running backwards!",id:"my-steppers-are-running-backwards",level:2},{value:"Everytime i update my changes are gone.",id:"everytime-i-update-my-changes-are-gone",level:2},{value:"Klipper says the MCU is unable to connect",id:"klipper-says-the-mcu-is-unable-to-connect",level:2},{value:"I updated klipper and now i get an error!",id:"i-updated-klipper-and-now-i-get-an-error",level:2},{value:"Unparsed config option &#39;config_path: ~/klipper_config&#39; detected in section [server]",id:"unparsed-config-option-config_path-klipper_config-detected-in-section-server",level:2},{value:"Section &#39;gcode_shell_command generate_shaper_graph_x&#39; (or others) is not a valid config section",id:"section-gcode_shell_command-generate_shaper_graph_x-or-others-is-not-a-valid-config-section",level:2},{value:"Connection to moonraker failed",id:"connection-to-moonraker-failed",level:2},{value:"Get help",id:"get-help",level:2}];function d(e){let n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"troubleshooting",children:"Troubleshooting"})}),"\n",(0,t.jsx)(n.h2,{id:"my-steppers-are-running-backwards",children:"My steppers are running backwards!"}),"\n",(0,t.jsxs)(n.p,{children:["Refer to the stepper section at the top of printer.cfg, you can add or remove ",(0,t.jsx)(n.code,{children:"!"})," in front of the dir_pin to reverse the direction of that particular stepper."]}),"\n",(0,t.jsx)(n.h2,{id:"everytime-i-update-my-changes-are-gone",children:"Everytime i update my changes are gone."}),"\n",(0,t.jsxs)(n.p,{children:["You're not supposed to change ",(0,t.jsx)(n.em,{children:"any"})," files inside the managed RatOS config/ folder. You should ",(0,t.jsx)(n.em,{children:"only"})," change your printer.cfg, if you need to change settings refer to the ",(0,t.jsx)(n.a,{href:"/docs/configuration/includes-and-overrides",children:"Inlcudes & Overrides Documentation"})," section.\n",(0,t.jsx)(n.img,{alt:"Hands off the RatOS Managed Config Folder!",src:o(8076).Z+"",width:"894",height:"590"})]}),"\n",(0,t.jsx)(n.h2,{id:"klipper-says-the-mcu-is-unable-to-connect",children:"Klipper says the MCU is unable to connect"}),"\n",(0,t.jsxs)(n.p,{children:["Double check your USB connection, try another cable (the one that comes with the board usually works), and check that your firmware was flashed correctly (refer to the guide for your board).\nIf you need to flash new firmware (for example autoflashing will not work if you upgrade klipper before flashing your board and it's properly connected), use the ",(0,t.jsx)(n.code,{children:"COMPILE_BINARIES"})," macro to generate new firmware binaries for all supported boards. Then download the binary for your board from the ",(0,t.jsx)(n.code,{children:"firmware_binaries"})," folder in the Machine tab, and flash it via SD card."]}),"\n",(0,t.jsx)(n.h2,{id:"i-updated-klipper-and-now-i-get-an-error",children:"I updated klipper and now i get an error!"}),"\n",(0,t.jsx)(n.p,{children:"When you update klipper you might see an error that looks like this:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Firmware version mismatch between host and guest",src:o(9240).Z+"",width:"849",height:"260"})}),"\n",(0,t.jsxs)(n.p,{children:["This is because klipper made changes to a part of the MCU firmware that we use. Klipper is telling us that the version of klipper running on the Pi is newer than the version running on the MCU. To fix this, we have to flash the board with a new version of the firmware. For convenience, and ease of use, the newest firmware is compiled and put in the ",(0,t.jsx)(n.code,{children:"firmware_binaries"})," folder which you can find in the ",(0,t.jsx)(n.code,{children:"MACHINE"})," tab in Mainsail. You can use this to flash your MCU the same way you did initially, via SD Card. RatOS attempts to flash supported boards automatically when klipper is updated. If you're getting this error you're probably using a board which does not support automatic flashing via USB. It's also possible that you updated klipper without having your board flashed and connected. In that case, use the ",(0,t.jsx)(n.code,{children:"COMPILE_BINARIES"})," macro to generate new firmware binaries for all supported boards. Then download the binary for your board from the ",(0,t.jsx)(n.code,{children:"firmware_binaries"})," folder in the Machine tab, and flash that via SD card."]}),"\n",(0,t.jsx)(n.h2,{id:"unparsed-config-option-config_path-klipper_config-detected-in-section-server",children:"Unparsed config option 'config_path: ~/klipper_config' detected in section [server]"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"Unparsed config option",src:o(45601).Z+"",width:"1000",height:"692"}),"\nThis happens because moonraker has moved ",(0,t.jsx)(n.code,{children:"config_path"})," and ",(0,t.jsx)(n.code,{children:"log_path"})," from the ",(0,t.jsx)(n.code,{children:"[server]"})," section to the ",(0,t.jsx)(n.code,{children:"[file_manager]"})," section. You can fix this by moving those to options into the ",(0,t.jsx)(n.code,{children:"[file_manager]"})," (create it if it doesn't already exist) in moonraker.conf."]}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-properties",children:"[server]\nhost = 0.0.0.0\nport = 7125\nenable_debug_logging = False\nconfig_path = ~/klipper_config\nlog_path = ~/klipper_logs\n"})}),"\n",(0,t.jsx)(n.p,{children:"becomes"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-properties",children:"[server]\nhost = 0.0.0.0\nport = 7125\nenable_debug_logging = False\n\n[file_manager]\nconfig_path = ~/klipper_config\nlog_path = ~/klipper_logs\n"})}),"\n",(0,t.jsx)(n.p,{children:"You may have to ssh into your raspberry pi and edit the file with nano:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"ssh pi@ratos.local\nnano ~/klipper_config/moonraker.conf\n"})}),"\n",(0,t.jsx)(n.p,{children:"Use ctrl+o to write your changes to moonraker.conf and then ctrl+x to exit nano. Then run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo systemctl restart moonraker\n"})}),"\n",(0,t.jsx)(n.p,{children:"And you should be back in action."}),"\n",(0,t.jsx)(n.h2,{id:"section-gcode_shell_command-generate_shaper_graph_x-or-others-is-not-a-valid-config-section",children:"Section 'gcode_shell_command generate_shaper_graph_x' (or others) is not a valid config section"}),"\n",(0,t.jsxs)(n.p,{children:["This happens if you hard reset klipper through mainsail, to relink the extensions go to the configurator at ",(0,t.jsx)(n.a,{href:"http://ratos.local/configure",children:"http://ratos.local/configure"}),', click the "Actions" dropdown menu in the top right and pick "Symlink klippy extensions". Then go back to mainsail and restart the klipper service by clicking on the power icon in the top right corner, then the refresh icon next to "Klipper" under "Service controls". You should now be back in action.']}),"\n",(0,t.jsx)(n.h2,{id:"connection-to-moonraker-failed",children:"Connection to moonraker failed"}),"\n",(0,t.jsxs)(n.p,{children:["If you see the mainsail interface but you get an error about the connecting to moonraker, the connection to the pi is fine, but you're using a non standard IPv4 or IPv6 range that is not whitelisted in moonraker (only standard local ip ranges are whitelisted for security reasons). Try using the ip address of your pi (look it up in your routers admin interface) instead of ratos.local, or fix it by adding your IP range in CIDR notation to the ",(0,t.jsx)(n.code,{children:"[authorization]"})," section in ~/klipper_config/moonraker.conf on the pi. You can do that through SSH, by running:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"ssh ratos.local\nnano ~/klipper_config/moonraker.conf\nsudo systemctl restart moonraker\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Alternatively you can delete the entire ",(0,t.jsx)(n.code,{children:"[authorization]"})," section, which will allow anyone to connect to moonraker (this is insecure, so do not do this if your network is open to - our your pi is reachable by - the outside world)"]}),"\n",(0,t.jsx)(n.h2,{id:"get-help",children:"Get help"}),"\n",(0,t.jsx)(n.p,{children:"For further support check out the RatOS-support and klipper channels on Discord. Use the invite link below to join."}),"\n",(0,t.jsx)("a",{href:"https://discord.gg/ratrig",class:"button button--primary",children:"Join the Unnofficial RatRig Discord Community"})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8076:function(e,n,o){o.d(n,{Z:function(){return r}});let r=o.p+"assets/images/config-folder-783bb1478f027bfd6ad4aab7505bc287.png"},9240:function(e,n,o){o.d(n,{Z:function(){return r}});let r=o.p+"assets/images/firmware_version_mismatch-456c9561ecf03b8fc5c498f42ce6a891.png"},45601:function(e,n,o){o.d(n,{Z:function(){return r}});let r=o.p+"assets/images/moonraker_unparsed_config-eb4c0f2b6c16094920135b33fe1192f3.png"},23663:function(e,n,o){o.d(n,{Z:function(){return s},a:function(){return a}});var r=o(75271);let t={},i=r.createContext(t);function a(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);