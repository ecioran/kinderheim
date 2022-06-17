"use strict";(self.webpackChunkkinderheim=self.webpackChunkkinderheim||[]).push([[75750],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return u}});var r=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,i=function(t,e){if(null==t)return{};var a,r,i={},n=Object.keys(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var l=r.createContext({}),p=function(t){var e=r.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=p(t.components);return r.createElement(l.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,i=t.mdxType,n=t.originalType,l=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),c=p(a),u=i,g=c["".concat(l,".").concat(u)]||c[u]||h[u]||n;return a?r.createElement(g,o(o({ref:e},m),{},{components:a})):r.createElement(g,o({ref:e},m))}));function u(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var n=a.length,o=new Array(n);o[0]=c;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:i,o[1]=s;for(var p=2;p<n;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},78976:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return h}});var r=a(87462),i=a(63366),n=(a(67294),a(3905)),o=["components"],s={},l="SVG",p={unversionedId:"computer-graphics/svg",id:"computer-graphics/svg",title:"SVG",description:"SVGator is nice.",source:"@site/docs/computer-graphics/svg.md",sourceDirName:"computer-graphics",slug:"/computer-graphics/svg",permalink:"/kinderheim/computer-graphics/svg",draft:!1,editUrl:"https://github.com/ecioran/kinderheim/docs/computer-graphics/svg.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Shaders",permalink:"/kinderheim/computer-graphics/shaders"},next:{title:"Vulkan API",permalink:"/kinderheim/computer-graphics/vulkan"}},m={},h=[{value:"Links",id:"links",level:2}],c={toc:h};function u(t){var e=t.components,a=(0,i.Z)(t,o);return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"svg"},"SVG"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.svgator.com/"},"SVGator")," is nice."),(0,n.kt)("h2",{id:"links"},"Links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://zzz.dog/"},"Zdog")," - Flat, round, designer-friendly pseudo-3D engine."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/pshihn/rough"},"Rough.js")," - Create graphics with a hand-drawn, sketchy, appearance. (",(0,n.kt)("a",{parentName:"li",href:"https://roughjs.com/"},"Web"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://blog.prototypr.io/svg-illustrations-as-react-components-f0e7be304eb6"},"SVG illustrations as React Components")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wattenberger.com/guide/scaling-svg"},"Scaling SVG Elements")," (",(0,n.kt)("a",{parentName:"li",href:"https://lobste.rs/s/luuqzc/svg_is_telescope_into_another_world"},"Lobsters"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://gregberge.com/blog/svg-to-react-component-with-svgr"},"Transform SVG into React Components using SVGR (2017)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/twilio-labs/svg-to-react"},"svg-to-react")," - Utility to convert raw SVG files into accessible and extendable React Components."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://css-irl.info/optimising-svgs-for-the-web/"},"Optimising SVGs for the Web (2020)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.getmotion.io/blog/where-are-all-the-animated-svgs/"},"Where are all the animated SVGs? (2020)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.getmotion.io/"},"Motion")," - Free, simple animated SVG editor. (",(0,n.kt)("a",{parentName:"li",href:"https://www.getmotion.io/blog/introducing-motion/"},"Article"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ivanceras.github.io/svgbob-editor/"},"Svgbob Editor")," - Convert your ascii diagram scribbles into happy little SVG."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://vecta.io/"},"Vecta")," - Powerful, online SVG editor for teams."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://openmoji.org/"},"OpenMoji")," - Open source emojis for designers, developers and everyone else. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/hfg-gmuend/openmoji"},"Code"),") (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=28403672"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/afternoon2/svg-matrix-visual-guide"},"Visual Guide To SVG Matrix")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wweb.dev/resources/free-svg-illustrations"},"Curated List Of Websites For Free SVG Illustrations (2019)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://andrew.wang-hoyer.com/experiments/svg-animations/"},"SVG Animations")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ndrwhr/svg-animation-src"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://heredragonsabound.blogspot.com/2020/02/creating-pencil-effect-in-svg.html"},"Creating a Pencil Effect in SVG (2020)")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=22645959"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://maxwellito.github.io/vivus/"},"Vivus")," - JavaScript library to make drawing animation on SVG. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/maxwellito/vivus"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/gliffy/canvas2svg"},"Canvas2Svg")," - Translates HTML5 Canvas draw commands to SVG."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/canvg/canvg"},"canvg")," - JavaScript SVG parser and renderer on Canvas."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/RazrFalcon/resvg"},"resvg")," - SVG rendering library in Rust."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wattenberger.com/blog/gauge"},"Creating a Gauge in React (2020)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://xvg.now.sh/"},"XVG")," - Chrome extension for debugging SVG paths by converting them to outlines and displaying anchors, control points, handles and arc ellipses. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/winkerVSbecks/xvg"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/pshihn/path-data-parser"},"path-data-parser")," - SVG Path Parser."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/pshihn/points-on-path"},"points-on-path")," - Estimate point on a SVG path."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://abookapart.com/products/practical-svg"},"Practical SVG book")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://shihn.ca/posts/2020/roughjs-algorithms/"},"How to emulate hand-drawn shapes / Algorithms behind RoughJS (2020)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://jonneal.dev/svg4everybody/"},"SVG for Everybody")," - Adds external spritemaps support to otherwise SVG-capable browsers. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/jonathantneal/svg4everybody"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://msurguy.github.io/cnc-text-tool/"},"CNC Hershey Font Tool")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/msurguy/cnc-text-tool"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://svg-path-visualizer.netlify.app/"},"SVG Path Visualizer")," - Enter a SVG path data to visualize it and discover all its different commands."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/memononen/nanosvg"},"Nano SVG")," - Simple stupid SVG parser."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.shapedivider.app/"},"Shape Divider App")," - Export a beautiful SVG shape divider."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://yoksel.github.io/url-encoder/"},"URL-encoder for SVG")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/yoksel/url-encoder"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://yoksel.github.io/svg-filters/#/"},"SVG Filters Playground")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/yoksel/svg-filters"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/riccardoscalco/textures"},"Textures.js")," - JavaScript library for creating SVG patterns. (",(0,n.kt)("a",{parentName:"li",href:"https://riccardoscalco.it/textures/"},"Web"),") (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=23673534"},"HN"),") (",(0,n.kt)("a",{parentName:"li",href:"https://observablehq.com/@bradydowling/textures"},"Example"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://paco.im/blog/svg-caching-with-use"},"SVG Caching with <use",">"," (2020)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://dev.to/alexi_be3/benefits-of-svg-10mn"},"Benefits of SVG (2020)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.pixeltrue.com/free-illustrations"},"Free Vector Illustrations")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=24048508"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/balajmarius/svg2jsx"},"svg2jsx")," - Transform SVG into valid JSX."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://datalanguage.com/blog/graphical-uis-with-svg-and-react-part-1-declarative-graphics"},"Graphical UI's with SVG and React (2020)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/svg/svgo"},"SVGO")," - Node.js tool for optimizing SVG files."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://lean-svg.netlify.app/"},"Lean-SVG")," - Optimize SVG and Flatten transforms and shapes. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/upendra-web/lean-svg"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/nornagon/flatten-svg"},"flatten-svg")," - Flatten SVGs into points."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://squircley.app/"},"Squircley")," - SVG Squircle Maker. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/georgedoescode/squircle"},"Code"),") (",(0,n.kt)("a",{parentName:"li",href:"https://codepen.io/simeydotme/pen/oOGmYe"},"Squircles with Vue"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/fabricjs/fabric.js"},"Fabric.js")," - JavaScript Canvas Library, SVG-to-Canvas (& canvas-to-SVG) Parser. (",(0,n.kt)("a",{parentName:"li",href:"http://fabricjs.com/"},"Web"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://yqnn.github.io/svg-path-editor/"},"SVG Path Editor")," - Online editor to create and manipulate SVG paths. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Yqnn/svg-path-editor"},"Code"),") (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=24998532"},"HN"),") (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=30382577"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://svgdiff.now.sh/"},"SVG Diff")," - See the visual difference between two SVGs. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/stipsan/svgdiff"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://people.csail.mit.edu/tzumao/diffvg/"},"diffvg")," - Differentiable Rasterizer for Vector Graphics. (",(0,n.kt)("a",{parentName:"li",href:"https://people.csail.mit.edu/tzumao/diffvg/"},"Paper"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://bjango.com/articles/svgassetcatalogs/"},"Using SVGs in asset catalogs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/WebReflection/uhtml"},"uhtml")," - Micro HTML/SVG render."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wordsandbuttons.online/simple_image_vectorization.html"},"Simple Image Vectorization")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=24957120"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/deeplook/svglib"},"Svglib")," - Pure-Python library for reading and converting SVG."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/bytedance/IconPark"},"IconPark")," - Transform an SVG icon into multiple themes, and generate React icons\uff0cVue icons, SVG icons."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/LingDong-/psvg"},"PSVG")," - Programmable SVG. Introduces programming language features like functions, control flows, and variables."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://getloaf.io/"},"Loaf")," - Animated SVG icon library."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/abey79/vpype"},"vpype")," - Swiss-Army-knife command-line tool for plotter vector graphics."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/rveciana/svg-path-properties"},"svg-path-properties")," - JavaScript alternative to getPointAtLength(t) and getTotalLength() functions. Works with Canvas objects and when Node."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=kBT90nwUb_o"},"Learn SVG through 24 examples (2020)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://flowchart.js.org/"},"flowchart.js")," - Draws simple SVG flow chart diagrams from textual representation of the diagram. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/adrai/flowchart.js"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://bramp.github.io/js-sequence-diagrams/"},"js-sequence-diagrams")," - Draws simple SVG sequence diagrams from textual representation of the diagram. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/bramp/js-sequence-diagrams"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://jakearchibald.github.io/svgomg/"},"SVGOMG")," - Web GUI for SVGO. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/jakearchibald/svgomg"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/andreaferretti/paths-js"},"Paths.js")," - Generate SVG paths for geometric shapes. (",(0,n.kt)("a",{parentName:"li",href:"http://andreaferretti.github.io/paths-js-react-demo/"},"Web"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Kozea/CairoSVG"},"CairoSVG")," - SVG converter based on Cairo. It can export SVG files to PDF, EPS, PS, and PNG files. (",(0,n.kt)("a",{parentName:"li",href:"https://www.courtbouillon.org/cairosvg"},"Web"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://svgcrop.com/"},"SVG Crop")," - Remove blank space from around any SVG instantly."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.aleksandrhovhannisyan.com/blog/svg-tutorial-how-to-code-svg-icons-by-hand/"},"SVG Tutorial: How to Code SVG Icons by Hand (2021)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.svgrepo.com/"},"SVG Repo")," - Free SVG Vectors and Icons."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tanem/svg-injector"},"svg-injector")," - Fast, caching, dynamic inline SVG DOM injection library."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://svgwave.in/"},"SVG Wave")," - Tiny, customizable gradient SVG wave generator. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/anup-a/svgwave"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://css-tricks.com/too-many-svgs-clogging-up-your-markup-try-use/"},"Too Many SVGs Clogging Up Your Markup? Try ",(0,n.kt)("inlineCode",{parentName:"a"},"use"),". (2021)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=emFMHH2Bfvo"},"SVG Explained in 100 Seconds (2021)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/accurat/yogurt-layout"},"Yogurt Layout")," - Small JS layout computation library, to organize space in SVGs and canvases."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://haikei.app/"},"Haikei")," - Generate unique SVG design assets."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pavellaptev.github.io/warp-svg/"},"Warp SVG Online")," - Warp and distort SVG files online. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/PavelLaptev/warp-svg"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.smashingmagazine.com/2021/03/svg-generators/"},"SVG Generators (2021)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=UTHgr6NLeEw"},"Make Awesome SVG Animations with CSS (2021)")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/fireship-io/animated-svg-demo"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.fecolormatrix.com/"},"SVG Color Matrix Mixer")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/felixfbecker/dom-to-svg"},"DOM to SVG"),' - Library to convert a given HTML DOM node into an accessible SVG "screenshot".'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.cassie.codes/posts/swipey-image-grids/"},"Swipey image grids (2021)")," (",(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/cassiecodes/status/1378656290273173509"},"Tweet"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://frontendmasters.com/courses/svg-essentials-animation/"},"SVG Essentials & Animation Course")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/sdras/svg-workshop"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/fontello/svgpath"},"svgpath")," - SVG path low level transformations toolkit."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/thelonious/kld-intersections"},"kld-intersections")," - Library of intersection algorithms covering all SVG shape types."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/shubhamjain/svg-loader"},"SVG Loader")," - Plug 'n Play external SVG loader. (",(0,n.kt)("a",{parentName:"li",href:"https://css-tricks.com/svg-loader-a-different-way-to-work-with-external-svg/"},"Article"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://boringavatars.com/"},"Boring Avatars")," - React library to generate custom avatars. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/boringdesigners/boring-avatars"},"Code"),") (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=27311964"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Jarred-Sumner/svgj"},"svgj")," - Quickly converts .svg files into JSX."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/shrhdk/text-to-svg"},"text-to-svg")," - Convert text to SVG path without native dependence."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/g-harel/blobs"},"Blobs")," - Random blob generation and animation. (",(0,n.kt)("a",{parentName:"li",href:"https://blobs.dev/"},"Web"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/sammycage/lunasvg"},"LunaSVG")," - Standalone SVG rendering library in C++."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/runemadsen/rune.js"},"Rune.js")," - JavaScript library for programming graphic design systems with SVG. (",(0,n.kt)("a",{parentName:"li",href:"http://runemadsen.github.io/rune.js/"},"Web"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://samherbert.net/svg-loaders/"},"SVG Loaders")," - Loading icons and small animations built with pure SVG. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/SamHerbert/SVG-Loaders"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.heropatterns.com/"},"Hero Patterns")," - Free repeatable SVG background patterns for your web projects."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/notoriousb1t/polymorph"},"Polymorph")," - Morph SVG Paths. (",(0,n.kt)("a",{parentName:"li",href:"https://notoriousb1t.github.io/polymorph-docs/"},"Docs"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/naknomum/scribby"},"scribby"),' - JavaScript library which lets users draw simple "scribbles" on a web page.'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.zachleat.com/web/svg-animate/"},"Fire SVG animations (SMIL) when the SVG is visible (2021)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://drauu.netlify.app/"},"Drauu")," - Headless SVG-based drawboard in browser. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/antfu/drauu"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/bumbu/svg-pan-zoom"},"svg-pan-zoom")," - JavaScript library that enables panning and zooming of an SVG in an HTML document, with mouse events or custom JavaScript hooks."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://patterns.helloyes.dev/"},"Basic Pattern Repository")," - Simple patterns for <use",">",". Just SVG - for your delight. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/nachtfunke/basic-pattern-repository"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://cloudfour.com/thinks/svg-icon-stress-test/"},"Which SVG technique performs best for way too many icons? (2021)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/vkottler/svgen"},"svgen")," - Tool for working with scalable vector graphics."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tldraw/svg"},"tldraw/svg")," - SVG utility functions used by tldraw."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.visioncortex.org/vtracer/"},"VTracer")," - Raster to Vector Graphics Converter. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/visioncortex/vtracer"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://fffuel.co/llline/"},"llline")," - Smooth SVG Line/Stroke Generator."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://fffuel.co/"},"fffuel")," - Free SVG generators, web design tools & modern HTML templates."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/scour-project/scour"},"Scour")," - SVG optimizer/cleaner written in Python that reduces the size of scalable vector graphics by optimizing structure and removing unnecessary data."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://yuanchuan.dev/flip-invert-reverse"},"Flip, Invert, and Reverse (2021)")," - 3 kinds of transformations for the SVG path commands."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/yisibl/resvg-js"},"resvg-js")," - High-performance SVG renderer, powered by Rust based resvg and napi-rs."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://svgco.de/"},"SVGcode")," - Convert raster images to SVG vector graphics. (",(0,n.kt)("a",{parentName:"li",href:"https://web.dev/svgcode/"},"Article"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tomayac/SVGcode"},"Code"),") (",(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=kcvfyQh6J-0"},"Video"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/premasagar/pablo"},"Pablo")," - Lightweight, expressive JavaScript SVG library. (",(0,n.kt)("a",{parentName:"li",href:"http://pablojs.com/"},"Web"),") (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=29287595"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/HarryStevens/shape2path"},"shape2path")," - Convert SVG shapes to SVG paths."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/svgdotjs/svg.js"},"SVG.js")," - Lightweight library for manipulating and animating SVG."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://flagicons.lipis.dev/"},"Country Flags in SVG")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/lipis/flag-icons"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://svgsilh.com/"},"SVG Silh")," - Free SVG Image & Icon."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/elrumordelaluz/svgson"},"svgson")," - Transform SVG files to JSON notation."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/romellogoodman/goodgraphics.js"},"goodgraphics")," - Library for scripting SVGs."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Pomax/svg-path-reverse"},"svg-path-reverse")," - SVG path reversal library."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/xyproto/png2svg"},"png2svg")," - Go module and command line utility for converting small PNG images to SVG Tiny 1.2."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/svg/svgo-components"},"SVGO Components")," - Transform SVG into components for various frameworks."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/AldaronLau/foosvg"},"foosvg")," - SVG rendering library in pure Rust."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://blog.maximeheckel.com/posts/cubic-bezier-from-math-to-motion/"},"Cubic B\xe9zier: From Math to Motion (2021)")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=29513750"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/shakiba/svgexport"},"svgexport")," - SVG to PNG/JPEG command-line tool and Node.js module."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/rustyoz/svg"},"svg")," - Go library for parsing svg files."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/neurofuzzy/three-plotter-renderer"},"three-plotter-renderer")," - SVG renderer with occlusion for plotters and SVG editors."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/coastalwhite/WasmSVGGraphics"},"WasmSVGGraphics")," - Rust library for rendering SVG Graphics with WASM."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tinyvg.tech/"},"TinyVG")," - Challenger to the throne of vector graphics. (",(0,n.kt)("a",{parentName:"li",href:"https://zig.news/xq/a-challenger-to-the-throne-of-vector-graphics-svg-is-dead-long-live-tinyvg-4on8"},"Article"),") (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=29629792"},"HN"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/TinyVG/sdk"},"Code"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/TinyVG/specification"},"Spec"),") (",(0,n.kt)("a",{parentName:"li",href:"https://lobste.rs/s/09wnbp/challenger_throne_vector_graphics_svg_is"},"Lobsters"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ssssota/svg2png-wasm"},"svg2png-wasm")," - SVG to PNG converter JS library made with WASM + resvg."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/dai-shi/katachidraw"},"Katachidraw")," - SVG based drawing tool and react-native component."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://yuanchuan.dev/using-mask-as-clip-path"},"Using mask as clip-path (2022)")," (",(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/razvancaliman/status/1494992764676755461"},"Tweet"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/srwiley/oksvg"},"oksvg")," - Partial implementation of SVG 2.0 specification in Go."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://supershields.io/"},"SuperShields")," - Smart, Lua-powered SVG status badges. (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=30451402"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://webkul.github.io/myscale/"},"myScale")," - Quick SVG Icon Resizer. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/webkul/myscale"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://bokub.github.io/gradient-badge/"},"Gradient Badge")," - Badge generator with color gradient support. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/bokub/gradient-badge"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/sammycage/plutosvg"},"PlutoSVG")," - Tiny SVG rendering library in C."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://garden.bradwoods.io/notes/svg-filters"},"How to use SVG filters")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/srwiley/rasterx"},"Rasterx")," - SVG 2.0 path compliant rasterizer that can use either the Go vector or a derivative of the freetype anti-aliaser."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/astraw/svg_stack"},"svg_stack")," - Combine multiple SVG elements into a single SVG element."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tomkwok/svgasm"},"svgasm")," - SVG animation from multiple SVGs or single GIF using tracer."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/fskpf/svg2roughjs"},"svg2rough.js")," - Utilizes Rough.js to convert an SVG to a hand-drawn visualization."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://bjango.com/articles/svgexports/"},"Ideal SVG exports")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/mmmries/chunky_svg"},"Chunky SVG")," - Elixir library for generating SVG images."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/svg-sprite/svg-sprite"},"svg-sprite")," - Low-level Node.js module that takes a bunch of SVG files, optimizes them and bakes them into SVG sprites of several types."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://bjango.com/articles/svgpassthroughprecision/"},"SVG passthrough precision")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=31072816"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/kreuzerk/svg-to-ts"},"SVG to TS")," - Build performant SVG icon libraries by converting raw SVG files to TypeScript that is optimized for modern tree shaking mechanisms."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/w3c/svgwg"},"SVG Working Group specifications")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/thednp/svg-path-commander"},"SVGPathCommander")," - ES6+ JavaScript tools for processing and manipulating SVG path data."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/svgstore/svgstore"},"svgstore")," - Combines multiple SVG files into one."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://iros.github.io/patternfills/"},"Pattern Fills")," - Collection of SVG patterns and build scripts that allow utilizing them in SVG, CSS and D3. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/iros/patternfills"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.smashingmagazine.com/2022/05/magical-svg-techniques/"},"Magical SVG Techniques (2022)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://evilmartians.com/chronicles/how-to-use-p3-colors-in-svg"},"How to use P3 colors with SVGs (2022)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.svgator.com/"},"SVGator")," - Free SVG Animation Creator Online - No Coding."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://svg-generator.netlify.app/"},"SVG Generator")," - Online SVG Graphics Generation with the ability to export to SVG. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Fannon/svg-generator"},"Code"),")")))}u.isMDXComponent=!0}}]);