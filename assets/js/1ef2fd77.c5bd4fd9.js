"use strict";(self.webpackChunkkinderheim=self.webpackChunkkinderheim||[]).push([[6106],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return c}});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var m=r.createContext({}),p=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(m.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,m=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(a),c=i,b=u["".concat(m,".").concat(c)]||u[c]||h[c]||n;return a?r.createElement(b,l(l({ref:t},s),{},{components:a})):r.createElement(b,l({ref:t},s))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=u;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<n;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},84117:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return m},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return h}});var r=a(87462),i=a(63366),n=(a(67294),a(3905)),l=["components"],o={},m="WebGL",p={unversionedId:"computer-graphics/webgl",id:"computer-graphics/webgl",title:"WebGL",description:"WebGL2 Fundamentals is great read.",source:"@site/docs/computer-graphics/webgl.md",sourceDirName:"computer-graphics",slug:"/computer-graphics/webgl",permalink:"/kinderheim/computer-graphics/webgl",draft:!1,editUrl:"https://github.com/ecioran/kinderheim/docs/computer-graphics/webgl.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Vulkan API",permalink:"/kinderheim/computer-graphics/vulkan"},next:{title:"WebGPU",permalink:"/kinderheim/computer-graphics/webgpu"}},s={},h=[{value:"Links",id:"links",level:2}],u={toc:h};function c(e){var t=e.components,a=(0,i.Z)(e,l);return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"webgl"},"WebGL"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://webgl2fundamentals.org/"},"WebGL2 Fundamentals")," is great read."),(0,n.kt)("h2",{id:"links"},"Links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://learnwebgl.brown37.net/"},"Learn WebGL")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.khronos.org/webgl/"},"WebGL Overview")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/KhronosGroup/WebGL"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://paveldogreat.github.io/WebGL-Fluid-Simulation/"},"WebGL Fluid Simulation")," - Play with fluids in your browser (works even on mobile). ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/PavelDoGreat/WebGL-Fluid-Simulation"},"Code"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/mattdesl/workshop-webgl-glsl/"},"Workshop on WebGL and GLSL")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://avin.github.io/sketches/086_love_cube.html"},"Love Cube")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://avin.github.io/sketches/"},"Sketches by Avin Grape")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/oframe/ogl"},"OGL")," - Minimal WebGL framework."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/infamous/glas"},"glas")," - WebGL in WebAssembly with AssemblyScript."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://alain.xyz/blog/raw-webgl"},"Raw WebGL")," - Overview on how to write a WebGL application. Learn what key data structures and types are needed to draw in WebGL."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://nickdesaulniers.github.io/RawWebGL/#/7"},"Raw WebGL slides")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tympanus.net/codrops/2019/12/20/how-to-create-the-apple-fifth-avenue-cube-in-webgl/"},"How to Create the Apple Fifth Avenue Cube in WebGL (2019)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://moments.epic.net/#home"},"Moments of Happiness")," - Series of WebGL experiments developed to make you smile."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/toji/webgl-quake3"},"WebGL Quake 3 Renderer")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/huww98/TimeChart"},"Time Chart")," - Chart library specialized for large-scale time-series data, built on WebGL."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/danchitnis/webgl-plot"},"webgl-plot")," - High-performance 2D graphs using native WebGL."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/servo/surfman"},"surfman")," - Low-level, cross-platform Rust library for managing surfaces, blocks of image data in GPU memory."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://webglfundamentals.org/"},"WebGL Fundamentals")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gfxfundamentals/webgl-fundamentals"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://jamie-wong.com/2016/07/15/ray-marching-signed-distance-functions/"},"Ray Marching and Signed Distance Functions (2016)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.goodreads.com/book/show/16269927-webgl-programming-guide"},"Webgl Programming Guide: Interactive 3D Graphics Programming with Webgl (2013)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=YyqBdN71nFs"},"Bringing webgl to react - Paul Henschel (2020)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://xem.github.io/articles/webgl-guide.html"},"WebGL guide")," - Complete, summarized WebGL tutorial, with tiny interactive demos in each chapter. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/xem/webgl-guide"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tchayen/webgl-maps"},"WebGL map renderer written from scratch")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tchayen.github.io/ttf-file-parsing"},"TTF file parsing (2019)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tchayen.github.io/brief-explanation-of-webgl"},"Brief explanation of WebGL (2018)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.notion.so/WebGL-with-Three-js-Program-0d9a048f1a4e4573880f7de77b11789f"},"WebGL with Three.js Program")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://avikdas.com/2020/07/08/barebones-webgl-in-75-lines-of-code.html"},"Barebones WebGL in 75 lines of code (2020)")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=23770711"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://gfxprose.blogspot.com/2020/07/cool-webgl-stuff-2020-07-16.html"},"Cool WebGL stuff (2020)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://frontendmasters.com/courses/webgl-shaders/"},"Advanced Creative Coding with WebGL and Shaders on top of ThreeJS (2020)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://medium.com/@martinRenou/real-time-rendering-of-water-caustics-59cda1d74aa"},"Real-time rendering of water caustics (2020)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/amandaghassaei/OrigamiSimulator"},"OrigamiSimulator")," - Realtime WebGL origami simulator. (",(0,n.kt)("a",{parentName:"li",href:"https://origamisimulator.org/"},"Web"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://medium.com/14islands/progressive-enhancement-with-webgl-and-react-71cd19e66d4"},"Progressive Enhancement with WebGL and React (2020)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Twinklebear/webgl-volume-raycaster"},"WebGL Volume Raycaster")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/evanw/glfx.js"},"glfx.js")," - Image effects library for JavaScript using WebGL."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/greggman/twgl.js"},"TWGL")," - Tiny WebGL helper Library."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/anvaka/w-gl"},"w-gl")," - Simple WebGL renderer."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://moonbridge.app/"},"Moonbridge")," - Simple and fun way to create your own WebGL experiment."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/munsocket/gl-bench"},"gl-bench")," - WebGL performance monitor that showing percentage of GPU/CPU load."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://webgl2fundamentals.org/"},"WebGL2 Fundamentals")," - WebGL2 from the ground up. No magic. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gfxfundamentals/webgl2-fundamentals"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/lume/lume"},"Lume")," - Create CSS3D/WebGL applications declaratively with HTML. Give regular DOM elements shadow and lighting. (",(0,n.kt)("a",{parentName:"li",href:"https://lume.io/"},"Web"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://michaelmoroz.github.io/Reintegration-Tracking/"},"WebGL Fluid Dynamics: Reintegration Tracking (2020)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/neefrehman/manyworlds"},"manyworlds")," - Scifi-inspired study of signed distanced functions and noise fields in WebGL."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/evanw/webgl-path-tracing"},"WebGL Path Tracing")," - Path tracing in GLSL using WebGL. (",(0,n.kt)("a",{parentName:"li",href:"http://madebyevan.com/webgl-path-tracing/"},"Web"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/PAIR-code/scatter-gl"},"ScatterGL")," - Interactive 3D / 2D webgl-accelerated scatter plot point renderer. (",(0,n.kt)("a",{parentName:"li",href:"https://pair-code.github.io/scatter-gl/"},"Web"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tdhooper/glsl-marching-cubes"},"WebGL Signed Distance Function Mesher")," - Extract an STL from a glsl distance function."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/oguzeroglu/ROYGBIV"},"ROYGBIV")," - 3D engine for the Web. Using WebGL."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/vanruesc/rabbit-hole"},"Rabbit Hole")," - Volumetric terrain engine for WebGL."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/regl-project/regl"},"Regl")," - Fast functional WebGL."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Reon90/redcube"},"RedCube.js")," - WebGL2 rendering library."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://hugodaniel.com/posts/high-level-webgl-low-level-tags/"},"High-level WebGL. Low-level tags. (2021)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://webglfundamentals.org/webgl/lessons/resources/webgl-state-diagram.html"},"WebGL State Diagram")," - Visual representation of most of WebGL's internal state."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://hugodaniel.com/posts/infinite-grid-with-just-one-square/"},"Infinite grid with just one square (2021)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/BabylonJS/Spector.js"},"SpectorJS")," - Explore and Troubleshoot your WebGL scenes with ease. (",(0,n.kt)("a",{parentName:"li",href:"https://spector.babylonjs.com/"},"Web"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://luma.gl/"},"luma.gl")," - High-performance toolkit for WebGL-based data visualization. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/visgl/luma.gl"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/FMS-Cat/condition"},"Condition")," - 64KB WebGL Intro."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/vuoro/sahti"},"Sahti")," - Write a WebGL 2 command, use it like a component."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/passiomatic/sunny-land"},"Sunny Land")," - WebGL Playground platformer."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.khronos.org/files/webgl20-reference-guide.pdf"},"WebGL 2.0 API Quick Reference Guide")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://omar-shehata.medium.com/how-to-render-outlines-in-webgl-8253c14724f9"},"How to render outlines in WebGL (2021)")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/OmarShehata/webgl-outlines"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://magamig.github.io/posts/real-time-video-convolution-using-webgl/"},"Real-Time Video Convolution using WebGL (2021)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/creativelifeform/three-nebula"},"Three Nebula")," - WebGL based 3D particle system engine for three. (",(0,n.kt)("a",{parentName:"li",href:"https://three-nebula.org/"},"Web"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/greggman/webgl-lint"},"WebGL Lint")," - Checks your WebGL usage for common issues."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ayamflow/ogl-tools"},"ogl-tools")," - WebGL tools for use with the OGL library."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/greggman/webgl-memory"},"WebGL-Memory")," - Library to track webgl-memory."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Faboolea/shaders-on-scroll"},"Smooth WebGL Shader Transformations on Scroll")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/potree/potree"},"Potree")," - WebGL point cloud viewer for large datasets."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tsherif/picogl.js"},"PicoGL.js")," - Minimal WebGL 2 rendering library."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/plepers/nanogl"},"nanogl")," - WebGL micro framework."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Wumpf/blub"},"Blub")," - 3D fluid simulation experiments in Rust, using WebGPU-rs."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.construct.net/en/blogs/ashleys-blog-2/porting-webgl-shaders-webgpu-1576"},"Porting WebGL Shaders to WebGPU (2021)")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=29001270"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/sghall/react-vertex"},"React Vertex")," - Hooks-based WebGL library for React. (",(0,n.kt)("a",{parentName:"li",href:"https://react-vertex.com/"},"Docs"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/rreusser/regl-gpu-lines"},"regl-gpu-lines")," - Pure GPU instanced, screen-projected lines for regl."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/vaneenige/phenomenon"},"Phenomenon")," - Fast 2kB low-level WebGL API."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://madebyevan.com/webgl-water/"},"WebGL Water")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/evanw/webgl-water"},"Code"),") (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=29376037"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/rdeits/meshcat-python"},"MeshCat Python")," - Python Bindings to the MeshCat WebGL viewer."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/rdeits/MeshCat.jl"},"MeshCat.jl")," - Julia bindings to the MeshCat WebGL viewer."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/kripken/webgl-worker"},"WebGLWorker")," - Lets you write WebGL code in a web worker, as if WebGL were implemented there."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/hiloteam/Hilo3d"},"Hilo3D")," - 3D WebGL Rendering Engine."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/jagenjo/Canvas2DtoWebGL"},"Canvas2DtoWebGL.js")," - Ports (almost) all Canvas2D functions to the GPU so it can be mixed with a WebGL canvas."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tsherif/webgl2examples"},"WebGL 2 Examples")," - Rendering algorithms implemented in raw WebGL 2."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/xem/W"},"W")," - Micro WebGL2 framework with a ton of features. (",(0,n.kt)("a",{parentName:"li",href:"https://xem.github.io/W/"},"Docs"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://chinedufn.com/3d-webgl-basic-water-tutorial/"},"WebGL + Rust: Basic Water Tutorial (2019)")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/chinedufn/webgl-water-tutorial"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/figma/webgl-profiler"},"WebGL Profiler")," - GPU-side profiler for WebGL using EXT_disjoint_timer_query."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/toji/web-texture-tool"},"Web Texture Tool")," - Texture loading utility for WebGL and WebGPU."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/bbc/VideoContext"},"VideoContext")," - Experimental HTML5 & WebGL video composition and rendering API."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pixijs.com/"},"PixiJS")," - HTML5 Creation Engine: Create beautiful digital content with the fastest, most flexible 2D WebGL renderer. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/pixijs/pixijs"},"Code"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/kittykatattack/learningPixi"},"Learning Pixi"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/cginternals/webgl-operate"},"webgl-operate")," - TypeScript based WebGL rendering framework."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/uber-web/math.gl"},"math.gl")," - 3D/WebGL math library."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/akella/fake3d"},"Fake 3D Image Effect with WebGL"),' - Interactive "fake" 3D effect for images with plain WebGL.'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://phqb.github.io/circle_drawing/"},"Drawing with circles")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=30530376"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/flekschas/regl-scatterplot"},"WebGl 2D Scatterplot with Regl")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://engineering.squarespace.com/blog/2022/how-we-use-webgl-at-squarespace-877l9-8lyaw"},"WebGL Usage Patterns at Squarespace (2022)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://persepolis.getty.edu/"},"Persepolis of ancient Persia rendered in WebGL")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=30965352"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/toji/gl-matrix"},"glMatrix")," - JavaScript Matrix and Vector library for High Performance WebGL apps."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/PixelsCommander/HTML-GL"},"HTML GL"),' - Solves "the slow DOM problem" by creating WebGL representations of DOM elements and hiding actual DOM after.'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/antvis/g"},"G")," - Powerful rendering engine implemented with Canvas2D / SVG / WebGL / WebGPU."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/google/neuroglancer"},"Neuroglancer")," - WebGL-based viewer for volumetric data."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/luruke/aladino"},"Aladino"),' - Tiny dependency-free JS library that allows to enhance your site using "shader effects".'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://flak.tedunangst.com/post/css-vs-webgl-cubes"},"CSS vs WebGL cubes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/raphamorim/react-ape"},"React Ape")," - React Renderer to build UI interfaces using canvas/WebGL."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/andykswong/mugl"},"mugl")," - Micro WebGL Library for JavaScript and WebAssembly."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/yiwenl/Sketches"},"Collection of WebGL sketches")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/mapbox/earcut"},"Earcut")," - Fastest and smallest JavaScript polygon triangulation library for your WebGL apps.")))}c.isMDXComponent=!0}}]);