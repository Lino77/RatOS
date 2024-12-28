"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([["8282"],{41951:function(e,r,t){t.r(r),t.d(r,{default:()=>f,frontMatter:()=>o,metadata:()=>n,assets:()=>l,toc:()=>s,contentTitle:()=>c});var n=JSON.parse('{"id":"configuration/chamber_filter","title":"Chamber Filter Control","description":"RatOS includes built-in chamber filter control functionality.","source":"@site/docs/configuration/chamber_filter.md","sourceDirName":"configuration","slug":"/configuration/chamber_filter","permalink":"/docs/configuration/chamber_filter","draft":false,"unlisted":false,"editUrl":"https://github.com/Rat-OS/RatOS/edit/v2.x/site/docs/configuration/chamber_filter.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Calibration Macros","permalink":"/docs/configuration/calibration"},"next":{"title":"Chamber Heater Control","permalink":"/docs/configuration/chamber_heater"}}'),i=t("52676"),a=t("23663");let o={},c="Chamber Filter Control",l={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Macro Hooks",id:"macro-hooks",level:2}];function d(e){let r={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"chamber-filter-control",children:"Chamber Filter Control"})}),"\n",(0,i.jsx)(r.p,{children:"RatOS includes built-in chamber filter control functionality."}),"\n",(0,i.jsx)(r.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(r.p,{children:["To use the chamber control feature, you only need to configure a generic fan named ",(0,i.jsx)(r.code,{children:"filter"}),":"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"[fan_generic filter]\n"})}),"\n",(0,i.jsx)(r.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(r.p,{children:"This feature is enabled by default and requires no additional configuration. However, you can customize the settings in your printer.cfg if desired:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:'[gcode_macro RatOS]\nvariable_chamber_filter_enable: True                     # True|False = enable chamber filter control\nvariable_chamber_filter_speed: 1.0                       # float = chamber filter fan speed.\nvariable_chamber_filter_disable_speed: 1.0               # float = chamber filter fan speed after the print has finished.\nvariable_chamber_filter_enable_at: "after_print_start"   # before_print_start|after_print_start|print_end = when to enable the filter\nvariable_chamber_filter_disable_period: 300              # int = disable fan after X seconds after the print ends\nvariable_chamber_filter_disable_bed_temp: 0              # int = wait for X\xb0C bed temp after the print ends before disabling the filter\n'})}),"\n",(0,i.jsx)(r.h2,{id:"macro-hooks",children:"Macro Hooks"}),"\n",(0,i.jsx)(r.p,{children:"The chamber filter control includes two customizable macro hooks:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:'[gcode_macro _CHAMBER_FILTER_TURN_ON]\ngcode:\n	# parameters\n	{% set at = params.AT|default(\'\')|lower %}\n\n	# config\n	{% set chamber_filter_speed = printer["gcode_macro RatOS"].chamber_filter_speed|default(0)|float %}\n	{% if at == "print_end" %}\n		{% set chamber_filter_speed = printer["gcode_macro RatOS"].chamber_filter_disable_speed|default(0)|float %}\n	{% endif %}\n\n	# reset timer\n	UPDATE_DELAYED_GCODE ID=_CHAMBER_FILTER_OFF_TIMER DURATION=0\n\n	# turn filter fan on\n	SET_FAN_SPEED FAN=filter SPEED={chamber_filter_speed}\n'})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"[gcode_macro _CHAMBER_FILTER_TURN_OFF]\ngcode:\n    # Turn filter fan off\n    SET_FAN_SPEED FAN=filter SPEED=0\n"})})]})}function f(e={}){let{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},23663:function(e,r,t){t.d(r,{Z:function(){return c},a:function(){return o}});var n=t(75271);let i={},a=n.createContext(i);function o(e){let r=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);