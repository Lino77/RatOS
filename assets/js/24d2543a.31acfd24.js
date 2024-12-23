"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([["2769"],{29211:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return r},metadata:function(){return o},toc:function(){return u}});var o=t(68392),a=t(52676),i=t(23663);let r={slug:"moonraker-config-changes",title:"Moonraker is now safe to update",authors:["miklschmidt"],tags:["RatOS","Moonraker"]},s=void 0,c={authorsImageUrls:[void 0]},u=[{value:"Major moonraker config and file changes",id:"major-moonraker-config-and-file-changes",level:2},{value:"Checking if your moonraker config is managed",id:"checking-if-your-moonraker-config-is-managed",level:2},{value:"Missing files after update",id:"missing-files-after-update",level:2}];function l(e){let n={code:"code",h2:"h2",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"major-moonraker-config-and-file-changes",children:"Major moonraker config and file changes"}),"\n",(0,a.jsx)(n.p,{children:"As you might know, a couple of weeks ago, I issued a warning about updating moonraker due to a major change that involved file restructuring, config changes and deprecations. I now believe i've ironed out all the kinks, and I can now say that the update is safe to do, as long as you update RatOS first, as usual."}),"\n","\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"There are a few things to note about this update:"})}),"\n",(0,a.jsxs)(n.p,{children:["Users who installed RatOS before 1.2.1 have an unmanaged moonraker config, this means that it's up to the user to manage it and RatOS can't correct it when things need updating. Fear not though, as most of this is automated by moonraker itself. When you update moonraker, make sure to keep an eye on the notifications in the topmenu, there's a chance you might have to follow the instructions in there to finish the config validation. If you're asked to enter a sudo password, the default is ",(0,a.jsx)(n.code,{children:"raspberry"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"checking-if-your-moonraker-config-is-managed",children:"Checking if your moonraker config is managed"}),"\n",(0,a.jsxs)(n.p,{children:["To check if you have a managed config (and thus don't need to do anything besides clicking the update buttons), you can look in your moonraker.conf for ",(0,a.jsx)(n.code,{children:"[include config/moonraker.conf]"}),", if that is present, you have a managed moonraker config. If it's not, you have an unmanaged config, and you'll have to follow the instructions in the notification, if any is present."]}),"\n",(0,a.jsx)(n.h2,{id:"missing-files-after-update",children:"Missing files after update"}),"\n",(0,a.jsxs)(n.p,{children:["If you're missing files after updating (can happen if you do things out of order), you can run the following macro to restore them: ",(0,a.jsx)(n.code,{children:"DELETE_AND_RESTORE_PRINTER_DATA_DIRS"}),". Restart moonraker and reload mainsail after running the macro."]}),"\n",(0,a.jsx)(n.p,{children:"Thank you for bearing with me, and happy printing!"})]})}function d(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},23663:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return r}});var o=t(75271);let a={},i=o.createContext(a);function r(e){let n=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(i.Provider,{value:n},e.children)}},68392:function(e){e.exports=JSON.parse('{"permalink":"/blog/moonraker-config-changes","editUrl":"https://github.com/Rat-OS/RatOS/edit/v2.x/site/blog/2022-10-17-moonraker-config-changes.mdx","source":"@site/blog/2022-10-17-moonraker-config-changes.mdx","title":"Moonraker is now safe to update","description":"Major moonraker config and file changes","date":"2022-10-17T00:00:00.000Z","tags":[{"inline":true,"label":"RatOS","permalink":"/blog/tags/rat-os"},{"inline":true,"label":"Moonraker","permalink":"/blog/tags/moonraker"}],"readingTime":1.42,"hasTruncateMarker":true,"authors":[{"name":"Mikkel Schmidt","title":"Creator of RatOS","url":"https://github.com/miklschmidt","imageURL":"https://github.com/miklschmidt.png","key":"miklschmidt","page":null}],"frontMatter":{"slug":"moonraker-config-changes","title":"Moonraker is now safe to update","authors":["miklschmidt"],"tags":["RatOS","Moonraker"]},"unlisted":false,"prevItem":{"title":"No, you don\'t want to use CAN","permalink":"/blog/no-you-dont-want-to-use-can"},"nextItem":{"title":"RatOS V1.1 Released!","permalink":"/blog/ratos-v1-1-released"}}')}}]);