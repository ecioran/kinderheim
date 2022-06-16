"use strict";(self.webpackChunkkinderheim=self.webpackChunkkinderheim||[]).push([[74246],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,h=m["".concat(c,".").concat(f)]||m[f]||u[f]||i;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},87803:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],l={title:"swc"},c="[swc](https://github.com/swc-project/swc)",s={unversionedId:"web/swc",id:"web/swc",title:"swc",description:"Super-fast TS/JS compiler written in rust",source:"@site/docs/web/swc.md",sourceDirName:"web",slug:"/web/swc",permalink:"/kinderheim/web/swc",draft:!1,editUrl:"https://github.com/ecioran/kinderheim/docs/web/swc.md",tags:[],version:"current",frontMatter:{title:"swc"},sidebar:"tutorialSidebar",previous:{title:"Jekyll",permalink:"/kinderheim/web/static-sites/jekyll"},next:{title:"Vite",permalink:"/kinderheim/web/vite"}},p={},u=[{value:"Links",id:"links",level:2}],m={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"swc"},(0,i.kt)("a",{parentName:"h1",href:"https://github.com/swc-project/swc"},"swc")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Super-fast TS/JS compiler written in rust")),(0,i.kt)("h2",{id:"links"},"Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/swc-project/plugins"},"swc plugins")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://play.swc.rs/"},"swc playground")," (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/swc-project/swc-playground"},"Code"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/egoist/unplugin-swc"},"unplugin-swc")," - SWC plugin for Vite and Rollup."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/aelbore/swc-ast-helpers"},"SWC AST Helpers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/williamtetlow/swc-plugin-console-prefix"},"swc-plugin-console-prefix")," - SWC Transform to prefix logs. Useful for adding file and line number to logs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Karibash/storybook-addon-swc"},"storybook-addon-swc")," - Storybook add-on to enable SWC builds."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/IvanRodriCalleja/swc-viewer"},"SWC Viewer")," - CLI tool that runs a desktop application in order to give a fast visual feedback to swc developers about the transformations they are developing."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://swc-css.netlify.app/"},"SWC CSS Playground")," (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/g-plane/swc-css-playground"},"Code"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/CPTNB/rathernot"},"Rathernot")," - Web Linker. Takes all your web files and smushes them into a single executable binary."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/kwonoj/swc-coverage-instrument"},"SWC-coverage-instrument")," - Istanbuljs compatible SWC coverage instrumentation plugin."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/dprint/dprint-swc-ext"},"dprint-swc-ext")," - Functionality to make swc easier to work with.")))}f.isMDXComponent=!0}}]);