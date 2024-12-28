"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([["8068"],{94994:function(e,t,r){r.r(t),r.d(t,{default:()=>c,frontMatter:()=>d,metadata:()=>i,assets:()=>a,toc:()=>h,contentTitle:()=>l});var i=JSON.parse('{"id":"configuration/macros","title":"Configuring RatOS Macros","description":"RatOS comes with a bunch of flexible predefined macro\'s that can be customized via variables. In your printer.cfg at the bottom of the Macro\'s section, you\'ll notice this:","source":"@site/versioned_docs/version-1.2.x/configuration/macros.md","sourceDirName":"configuration","slug":"/configuration/macros","permalink":"/docs/1.2.x/configuration/macros","draft":false,"unlisted":false,"editUrl":"https://github.com/Rat-OS/RatOS/edit/v2.x/site/versioned_docs/version-1.2.x/configuration/macros.md","tags":[],"version":"1.2.x","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Includes & Overrides","permalink":"/docs/1.2.x/configuration/includes-and-overrides"},"next":{"title":"Connecting a 4028 fan","permalink":"/docs/1.2.x/guides/4028"}}'),n=r("52676"),s=r("23663");let d={},l="Configuring RatOS Macros",a={},h=[{value:"Relative Extrusion",id:"relative-extrusion",level:3},{value:"Preheat Extruder",id:"preheat-extruder",level:3},{value:"Bed Mesh Calibration",id:"bed-mesh-calibration",level:3},{value:"Nozzle Priming",id:"nozzle-priming",level:3},{value:"Parking",id:"parking",level:3},{value:"Speed",id:"speed",level:3},{value:"Skew profile",id:"skew-profile",level:3}];function o(e){let t={code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"configuring-ratos-macros",children:"Configuring RatOS Macros"})}),"\n",(0,n.jsx)(t.p,{children:"RatOS comes with a bunch of flexible predefined macro's that can be customized via variables. In your printer.cfg at the bottom of the Macro's section, you'll notice this:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-properties",children:"### MACRO CONFIGURATION\n[gcode_macro RatOS]\n....\n"})}),"\n",(0,n.jsx)(t.p,{children:"This is a macro that serves as a place to store variables that all the RatOS macro's refer to when they're executed. Here's a list of the available variables and what they do."}),"\n",(0,n.jsx)(t.h3,{id:"relative-extrusion",children:"Relative Extrusion"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Possible Values"}),(0,n.jsx)(t.th,{children:"Default"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"variable_relative_extrusion"}),(0,n.jsx)(t.td,{children:"True / False"}),(0,n.jsx)(t.td,{children:"False"})]})})]}),"\n",(0,n.jsx)(t.p,{children:"Controls which extrusion mode START_PRINT ends in. Which value you use here depends on your slicer configuration, in other words this variable should always correspond to the extrusion mode setting in your slicer. It is recommended to configure your slicer for relative extrusion and set this variable to True."}),"\n",(0,n.jsx)(t.h3,{id:"preheat-extruder",children:"Preheat Extruder"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Possible Values"}),(0,n.jsx)(t.th,{children:"Default"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"variable_preheat_extruder"}),(0,n.jsx)(t.td,{children:"True / False"}),(0,n.jsx)(t.td,{children:"True"})]})})]}),"\n",(0,n.jsx)(t.p,{children:"Enables or disables preheating of the nozzle to 150 degrees during the START_PRINT macro. There are several benefits to preheating the nozzle."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Gives the bed additional time to diffuse the heat"}),"\n",(0,n.jsx)(t.li,{children:"Softens plastic that may be stuck in the nozzle so it doesn't block your probe from triggering."}),"\n",(0,n.jsx)(t.li,{children:"If using a non thermally compensated inductive probe, it makes the temperature and thus the offset of the probe more predictable and consistent."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"bed-mesh-calibration",children:"Bed Mesh Calibration"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Possible Values"}),(0,n.jsx)(t.th,{children:"Default"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"variable_calibrate_bed_mesh"}),(0,n.jsx)(t.td,{children:"True / False"}),(0,n.jsx)(t.td,{children:"True"})]})})]}),"\n",(0,n.jsxs)(t.p,{children:['Whether or not to calibrate a bed mesh before each print. If you prefer calibrating your bed mesh manually instead of on each print, you can disable it by setting this to False. With bed meshing disabled you must have a mesh saved under the "ratos" profile, use BED_MESH_CALIBRATE PROFILE=ratos and SAVE_CONFIG to calibrate and save a mesh.\nIf you want to implement additional mesh handling logic you can override the ',(0,n.jsx)(t.code,{children:"_START_PRINT_BED_MESH"})," macro in your printer.cfg ",(0,n.jsx)(t.code,{children:"USER OVERRIDES"})," section."]}),"\n",(0,n.jsx)(t.h3,{id:"nozzle-priming",children:"Nozzle Priming"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Possible Values"}),(0,n.jsx)(t.th,{children:"Default"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"variable_nozzle_priming"}),(0,n.jsx)(t.td,{children:'"primeline" / "primeblob" / False'}),(0,n.jsx)(t.td,{children:'"primeline"'})]})})]}),"\n",(0,n.jsx)(t.p,{children:'Whether or not to prime the nozzle during the START_PRINT macro. "primeline" will make START_PRINT draw a short line to prime the nozzle. "primeblob" will put a small blob at the edge of the bed that is intended to wrap around the nozzle, then lifts the toolhead out of it while extruding a small line, effective for cleaning the nozzle and it\'s easy to clean up.'}),"\n",(0,n.jsx)(t.h3,{id:"parking",children:"Parking"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Possible Values"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"variable_start_print_park_in"}),(0,n.jsx)(t.td,{children:'"back" / "center" / "front"'}),(0,n.jsx)(t.td,{children:'"back"'}),(0,n.jsx)(t.td,{children:"Where to park the toolhead during final nozzle heating."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"variable_start_print_park_x"}),(0,n.jsx)(t.td,{children:"number / undefined"}),(0,n.jsx)(t.td,{children:"undefined"}),(0,n.jsx)(t.td,{children:"Custom X coordinate to park the toolhead during final nozzle heating."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"variable_start_print_park_z_height"}),(0,n.jsx)(t.td,{children:"number"}),(0,n.jsx)(t.td,{children:"50"}),(0,n.jsx)(t.td,{children:"The z height at which to park the toolhead during final nozzle heating."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"variable_end_print_park_in"}),(0,n.jsx)(t.td,{children:'"back" / "center" / "front"'}),(0,n.jsx)(t.td,{children:'"back"'}),(0,n.jsx)(t.td,{children:"Where to park the toolhead after ending or canceling a print."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"variable_end_print_park_x"}),(0,n.jsx)(t.td,{children:"number / undefined"}),(0,n.jsx)(t.td,{children:"undefined"}),(0,n.jsx)(t.td,{children:"Custom X coordinate to park the toolhead after ending or canceling a print."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"variable_pause_print_park_in"}),(0,n.jsx)(t.td,{children:'"back" / "center" / "front"'}),(0,n.jsx)(t.td,{children:'"back"'}),(0,n.jsx)(t.td,{children:"Where to park the toolhead when pausing a print."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"variable_pause_print_park_x"}),(0,n.jsx)(t.td,{children:"number / undefined"}),(0,n.jsx)(t.td,{children:"undefined"}),(0,n.jsx)(t.td,{children:"Custom X coordinate to park the toolhead when pausing a print."})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"speed",children:"Speed"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Possible Values"}),(0,n.jsx)(t.th,{children:"Default"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"variable_macro_travel_speed"}),(0,n.jsx)(t.td,{children:"number"}),(0,n.jsx)(t.td,{children:"300"})]})})]}),"\n",(0,n.jsx)(t.p,{children:"Travel speed to use for gcode moves in RatOS Macro's in mm/s."}),"\n",(0,n.jsx)(t.h3,{id:"skew-profile",children:"Skew profile"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Possible Values"}),(0,n.jsx)(t.th,{children:"Default"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"variable_skew_profile"}),(0,n.jsx)(t.td,{children:"string or undefined"}),(0,n.jsx)(t.td,{children:'"my_skew_Profile"'})]})})]}),"\n",(0,n.jsx)(t.p,{children:"Use this if you have calibrated and saved a skew profile that you want to load in the START_PRINT macro. To activate it, set the variable to the name of your saved skew profile."})]})}function c(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},23663:function(e,t,r){r.d(t,{Z:function(){return l},a:function(){return d}});var i=r(75271);let n={},s=i.createContext(n);function d(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);