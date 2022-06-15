"use strict";(self.webpackChunkkinderheim=self.webpackChunkkinderheim||[]).push([[3525],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return k}});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(a),k=i,b=u["".concat(l,".").concat(k)]||u[k]||m[k]||n;return a?r.createElement(b,p(p({ref:t},s),{},{components:a})):r.createElement(b,p({ref:t},s))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,p=new Array(n);p[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,p[1]=o;for(var c=2;c<n;c++)p[c]=a[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},65356:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return m}});var r=a(87462),i=a(63366),n=(a(67294),a(3905)),p=["components"],o={title:"Webpack"},l="[Webpack](https://webpack.js.org/)",c={unversionedId:"web/webpack",id:"web/webpack",title:"Webpack",description:"swc/esbuild/vite are faster alternatives.",source:"@site/docs/web/webpack.md",sourceDirName:"web",slug:"/web/webpack",permalink:"/kinderheim/web/webpack",draft:!1,editUrl:"https://github.com/ecioran/kinderheim/docs/web/webpack.md",tags:[],version:"current",frontMatter:{title:"Webpack"},sidebar:"tutorialSidebar",previous:{title:"WebAssembly",permalink:"/kinderheim/web/webassembly"},next:{title:"WebRTC",permalink:"/kinderheim/web/webrtc"}},s={},m=[{value:"Plugins",id:"plugins",level:2},{value:"Links",id:"links",level:2}],u={toc:m};function k(e){var t=e.components,a=(0,i.Z)(e,p);return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"webpack"},(0,n.kt)("a",{parentName:"h1",href:"https://webpack.js.org/"},"Webpack")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/swc-project/swc"},"swc"),"/",(0,n.kt)("a",{parentName:"p",href:"https://github.com/evanw/esbuild"},"esbuild"),"/",(0,n.kt)("a",{parentName:"p",href:"https://vitejs.dev/"},"vite")," are faster alternatives."),(0,n.kt)("h2",{id:"plugins"},"Plugins"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/fabiospampinato/webpack-summary"},"Webpack Summary")," - Webpack plugin for displaying a short summary at the end of the build process."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SimenB/add-asset-html-webpack-plugin"},"add-asset-html-webpack-plugin")," - Add a JavaScript or CSS asset to the HTML generated by html-webpack-plugin."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/rubenspgcavalcante/webpack-extension-reloader"},"Webpack Extension Reloader")," - Webpack plugin to automatically reload browser extensions during development."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/pmmmwh/react-refresh-webpack-plugin"},"React Refresh Webpack Plugin"),' - Enable "Fast Refresh" (also previously known as Hot Reloading) for React components. (',(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/0xca0a/status/1216696377369145344"},"Tweet"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/TypeStrong/ts-loader"},"ts-loader")," - TypeScript loader for webpack."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ScriptedAlchemy/webpack-external-import"},"Webpack External Import")," - Import() other chunks and modules from third parties, or other webpack builds themselves! At runtime."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/stephencookdev/speed-measure-webpack-plugin"},"Speed Measure Plugin")," - See how fast (or not) your plugins and loaders are, so you can optimise your builds."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/theKashey/react-imported-component"},"react-imported-component")," - Bundler-independent solution for SSR-friendly code-splitting."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/maraisr/configs-webpack-plugin"},"Configs Webpack Plugin")," - Simplified AoT runtime config solution for your webpack builds."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/GoogleChromeLabs/worker-plugin"},"worker-plugin")," - Automatically bundle & compile Web Workers within Webpack."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/GoogleChromeLabs/critters"},"Critters")," - Webpack plugin to inline your critical CSS and lazy-load the rest."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/developit/optimize-plugin"},"Optimize Plugin")," - Optimize your code for modern browsers."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/sorrycc/esbuild-webpack-plugin"},"esbuild-webpack-plugin")," - Use esbuild as minifier for webpack."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/JetBrains/svg-sprite-loader"},"SVG sprite loader")," - Webpack loader for creating SVG sprites."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/sysgears/webpack-virtual-modules"},"Webpack Virtual Modules")," - Plugin that allows for dynamical generation of in-memory virtual modules for JavaScript builds created with webpack."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/dazuaz/responsive-loader"},"responsive-loader")," - Webpack loader for responsive images.")),(0,n.kt)("h2",{id:"links"},"Links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://survivejs.com/webpack/"},"Webpack: From apprentice to master book")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/iamakulov/awesome-webpack-perf"},"Awesome Webpack Perf")," - Curated list of webpack tools and plugins that help make the web faster."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=YHH6fWE0AdM&t=0s&list=PLB17qI-lepyhGQCeq1bGawXeftOYMZtRj&index=4"},"Building a Platform: Webpack and the Future by Sean Larkin (2018)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/KidkArolis/jetpack"},"Jetpack")," - Wraps webpack to create a smoother developer experience."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/GoogleChromeLabs/webpack-libs-optimizations"},"Optimize your libraries with webpack")," - Using a library in your webpack project? Use these tips to make your bundle smaller."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.robinwieruch.de/webpack-advanced-setup-tutorial/"},"How to set up an advanced Webpack application (2019)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/FormidableLabs/inspectpack"},"inspectpack")," - Inspection tool for Webpack frontend JavaScript bundles."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://createapp.dev/"},"webpack autoconf")," - Tool to create personalized and optimized webpack.config.js"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/web/fundamentals/performance/webpack/"},"Web Performance Optimization with webpack")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=Osuwky6rRiA"},"Building a Great Developer Experience: The Road to Parcel Version 2 (2019)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/smooth-code/bundle-analyzer"},"Webpack Bundle Analyzer")," - Keep your webpack bundle optimized over time."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/webpack-contrib/webpack-bundle-analyzer"},"Webpack Bundle Analyzer 2")," - Webpack plugin and CLI utility that represents bundle content as convenient interactive zoomable treemap."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/mixer/webpack-bundle-compare"},"@mixer/webpack-bundle-compare")," - Tool for comparing webpack bundle stats."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/sokra/slides"},"Tobias Koppers's presentations")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/module-federation/module-federation-examples"},"Webpack Module Federation Examples")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://medium.com/@adevnadia/webpack-and-yarn-magic-against-duplicates-in-bundles-52b5e1a5e2e2"},"Webpack and yarn magic against duplicates in bundles (2020)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/webpack/webpack-cli"},"Webpack CLI")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://webpack.js.org/blog/2020-10-10-webpack-5-release/"},"Webpack 5")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=24741529"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.taniarascia.com/how-to-use-webpack/"},"How to Set Up webpack 5 from Scratch (2020)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/survivejs/webpack-merge"},"webpack-merge")," - Provides a merge function that concatenates arrays and merges objects creating a new object."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/privatenumber/esbuild-loader"},"esbuild-loader")," - Speed up your Webpack build with esbuild."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/webpack-contrib/eslint-webpack-plugin"},"ESLint plugin for webpack")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/neutrinojs/webpack-chain"},"webpack-chain")," - Chaining API to generate and simplify the modification of Webpack configurations."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/webpack/webpack.js.org"},"Webpack site code")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://marlom.dev/advanced-react-and-webpack-configuration"},"Advanced React and Webpack configuration (2020)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.ginkonote.com/users/flo/articles/tips-for-wepack-optimizations@javascript"},"Tips to Optimize Webpack (2020)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/smelukov/statoscope"},"Statoscope")," - Analyzes webpack stats and supplies the UI to display. (",(0,n.kt)("a",{parentName:"li",href:"https://statoscope.tech/"},"Web"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/shellscape/webpack-nano"},"webpack-nano")," - Tiny Webpack CLI."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://primalskill.blog/how-to-migrate-an-app-from-webpack-to-snowpack"},"How to Migrate an App From Webpack to Snowpack (2021)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://blog.replit.com/vite"},"Why we switched from Webpack to Vite (2021)")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=26972400"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/Joelbdenning/status/1441146336003325956"},"Get autocompletion for your webpack config with one line of code")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://lihautan.com/building-a-simplified-webpack-clone/"},"Building a simplified webpack clone")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://engineering.tines.com/blog/understanding-why-our-build-got-15x-slower-with-webpack"},"Understanding why our build got 15x slower with Webpack 5 (2021)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.ebey.me/blog/webpack-federation-ssr"},"Webpack Federation SSR (2021)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/originjs/webpack-to-vite"},"Webpack to Vite")," - Convert a Webpack project to a Vite project."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/fz6m/parcel-css-loader"},"parcel-css-loader")," - Speed up your Webpack build with parcel CSS.")))}k.isMDXComponent=!0}}]);