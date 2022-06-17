"use strict";(self.webpackChunkkinderheim=self.webpackChunkkinderheim||[]).push([[36229],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(r),h=a,k=u["".concat(p,".").concat(h)]||u[h]||m[h]||o;return r?n.createElement(k,l(l({ref:t},s),{},{components:r})):n.createElement(k,l({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},33081:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return m}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],i={title:"Electron"},p="[Electron](https://electronjs.org/)",c={unversionedId:"web/electron",id:"web/electron",title:"Electron",description:"React Tauri seems like an interesting alternative for building cross platform apps.",source:"@site/docs/web/electron.md",sourceDirName:"web",slug:"/web/electron",permalink:"/kinderheim/web/electron",draft:!1,editUrl:"https://github.com/ecioran/kinderheim/docs/web/electron.md",tags:[],version:"current",frontMatter:{title:"Electron"},sidebar:"tutorialSidebar",previous:{title:"Deno",permalink:"/kinderheim/web/deno"},next:{title:"esbuild",permalink:"/kinderheim/web/esbuild"}},s={},m=[{value:"Links",id:"links",level:2}],u={toc:m};function h(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"electron"},(0,o.kt)("a",{parentName:"h1",href:"https://electronjs.org/"},"Electron")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/mdtanrikulu/react-tauri"},"React Tauri")," seems like an interesting alternative for building cross platform apps."),(0,o.kt)("h2",{id:"links"},"Links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/@felixrieseberg/defeating-electron-e1464d075528"},"Defeating Electron")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/electron/fiddle"},"Electron Fiddle")," - Easiest way to get started with Electron. (",(0,o.kt)("a",{parentName:"li",href:"https://www.electronjs.org/fiddle"},"Web"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/electron-userland/electron-webpack"},"Electron WebPack")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/sindresorhus/electron-util"},"electron-util")," - Useful utilities for developing Electron apps and modules."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/sindresorhus/electron-boilerplate"},"electron-boilerplate")," - Boilerplate to kickstart creating an app with Electron."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/jlongster/electron-with-server-example"},"electron-with-server-example")," - Example Electron app with a backend server all wired up via IPC."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fabiospampinato/template-electron"},"template-electron")," - Template for starting a new electron app quickly."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/electron-userland/electron-forge"},"Electron Forge")," - Complete tool for creating, publishing, and installing modern Electron applications."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://slack.engineering/rebuilding-slack-on-the-desktop-308d6fe94ae4"},"When a rewrite isn\u2019t: rebuilding Slack on the desktop (2019)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/electron/electron/blob/505e9fc38c541b6987def98b5400edd064983f20/docs/tutorial/performance.md#how"},"Electron Performance Checklist")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/electron/electron-notarize"},"Electron Notarize")," - Notarize your macOS Electron Apps."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/electron-react-boilerplate/electron-react-boilerplate"},"Electron React Boilerplate")," - Uses Electron, React, Redux, React Router, Webpack and React Hot Loader for rapid application development."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kilianvalkhof.com/2019/electron/make-your-electron-app-feel-at-home-everywhere/"},"Make Your Electron App Feel at Home Everywhere (2019)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/karaggeorge/electron-builder-notarize"},"electron-builder-notarize")," - Notarize Electron applications using electron-builder."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.electronjs.org/apps"},"Collection of apps built on Electron")," (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/electron/apps"},"Code"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://desktopappswithelectron.com/"},"Desktop apps with Electron course")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://slack.com/libs/desktop"},"Libraries Slack Desktop Uses")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://seenaburns.com/debugging-electron-memory-usage/"},"Debugging Electron Memory Usage")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://seenaburns.com/2019/01/02/thumbnailing-in-isolate/"},"Thumbnailing in Isolate: Background workers in Electron (2019)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://getloaf.io/blog/why-i-chose-electronjs/"},"Why I chose Electron.js for my side business (2020)")," (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=25136406"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/saltyshiomix/nuxtron"},"Nuxtron")," - Nuxt.js + Electron."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/hyperdivision/hyperupdate"},"hyperupdate")," - P2P Electron updater with binary diffing built in."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/sudhakar3697/electron-alternatives"},"Electron Alternatives")," - Listing cross platform desktop GUI App development options."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://getlotus.app/21-making-electron-apps-feel-native-on-mac"},"Making Electron apps feel native on Mac (2021)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.electronjs.org/blog/webview2"},"WebView2 and Electron (2021)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/cryptagon/portal-windows"},"Portal Windows")," - Render and position native windows as simply as you render and position tooltips in your React app."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/electron/remote"},"electron/remote")," - Bridge JavaScript objects from the main process to the renderer process in Electron."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=28484658"},"Ask HN: How do you create a cross-platform GUI without using Electron? (2021)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/cawa-93/vite-electron-builder"},"Vite Electron Builder Boilerplate v2")," - Secure template for electron applications. Written following the latest safety requirements, recommendations and best practices."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/saltyshiomix/nextron"},"Next.js + Electron")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://datastation.multiprocess.io/blog/2021-10-13-notes-on-running-electron.html"},"Notes on running Electron (2021)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/getstation/electron-chrome-extension"},"Electron Chrome Extension")," - Implementation of Chrome extension APIs for Electron."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nathanbuchar/electron-settings"},"Electron Settings")," - Simple persistent user settings framework for Electron."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://twitter.com/rsms/status/1457946661032849413"},"Electron is very broken way of building cross platform apps (2021)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/megahertz/electron-log"},"electron-log")," - Simple logging module for your Electron application."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/asticode/astilectron"},"astilectron")," - Electron app that provides an API over a TCP socket that allows executing Electron's method as well as capturing Electron's events."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/TheoBr/yerba"},"Yerba")," - Electron Turborepo monorepo with Next.js, Typescript, Vite and more."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reZach/secure-electron-template"},"Best way to build Electron apps with security in mind")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/MarshallOfSound/electron-devtools-installer"},"Electron DevTools Installer")," - Easy way to ensure Chrome DevTools extensions into Electron."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=30810724"},"Ask HN: Why aren't there any real alternatives to Electron? (2022)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/soulehshaikh99/create-svelte-electron-app"},"Create Svelte+Electron App")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/tintinweb/electron-inject"},"Electron Inject")," - Inject JavaScript into closed source electron applications e.g. to enable developer tools for debugging."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/steve981cr/electron-quickstart-mas"},"Electron Quick Start for Mac App Store")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.todesktop.com/"},"ToDesktop")," - Convert your Web App to a Desktop App in 2 minutes. (",(0,o.kt)("a",{parentName:"li",href:"https://twitter.com/ToDesktop"},"Twitter"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ptkdev-boilerplate/svelte-electron-boilerplate"},"Svelte Electron Boilerplate")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ch99q/vite-solid-electron"},"Vite + SolidJS + Electron boilerplate")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/electron-vite/electron-vite-react"},"Electron + Vite + React + Sass + boilerplate"))))}h.isMDXComponent=!0}}]);