"use strict";(self.webpackChunkkinderheim=self.webpackChunkkinderheim||[]).push([[37954],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),m=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=m(a),h=n,d=u["".concat(p,".").concat(h)]||u[h]||s[h]||i;return a?r.createElement(d,o(o({ref:t},c),{},{components:a})):r.createElement(d,o({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var m=2;m<i;m++)o[m]=a[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},16275:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return s}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),o=["components"],l={},p="Procedural generation",m={unversionedId:"computer-graphics/procedural-generation",id:"computer-graphics/procedural-generation",title:"Procedural generation",description:"Links",source:"@site/docs/computer-graphics/procedural-generation.md",sourceDirName:"computer-graphics",slug:"/computer-graphics/procedural-generation",permalink:"/kinderheim/computer-graphics/procedural-generation",draft:!1,editUrl:"https://github.com/ecioran/kinderheim/docs/computer-graphics/procedural-generation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OpenGL",permalink:"/kinderheim/computer-graphics/opengl"},next:{title:"Ray tracing",permalink:"/kinderheim/computer-graphics/ray-tracing"}},c={},s=[{value:"Links",id:"links",level:2}],u={toc:s};function h(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"procedural-generation"},"Procedural generation"),(0,i.kt)("h2",{id:"links"},"Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/mxgmn/WaveFunctionCollapse"},"WaveFunctionCollapse")," - Bitmap & tilemap generation from a single example with the help of ideas from quantum mechanics."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/marian42/wavefunctioncollapse"},"Wave Function Collapse")," - Infinite, procedurally generated city, assembled out of blocks using the Wave Function Collapse algorithm with backtracking."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://mineralexistence.com/intro_to_wfc.html"},"Introduction to the Wave Function Collapse Algorithm")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/mattdesl/canvas-sketch"},"canvas-sketch")," - Framework for making generative artwork in JavaScript and the browser. (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mattdesl/canvas-sketch-cli"},"CLI"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/shawnridgeway/wfc"},"Go port of the Wave Function Collapse algorithm")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/TheBerkin/rant"},"Rant")," - All-purpose procedural text engine that is most simply described as the opposite of Regex."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tinkersynth.com/"},"TinkerSynth")," - Create and purchase unique generative art."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://v-os.ca/cartographer"},"Cartographer")," - Procedurally generated persistent multiplayer exploration game."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=NfizT369g60"},"Procedural World Generation of Ubisoft\u2019s Far Cry 5 (2019)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://joy.recurse.com/posts/465-a-two-dimensional-maze-generator-in-c"},"A two-dimensional maze generator in C++")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/magnificus/Procedural-Cities"},"Procedural-Cities")," - Aims to provide a framework and a solid implementation of different techniques for generating complete seamless procedural cities with interiors for all buildings."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/AdrianMargel/glyphs"},"Glyphs")," - Procedurally generated glyphs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://watabou.itch.io/"},"Oleg Dolya's generators")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://voyager3.tumblr.com/"},"Voyager3")," - Explorations into procedural village and landscape generation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=rNuDkDhadfU"},"3D World Generation in JS (2020)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.redblobgames.com/x/2022-voronoi-maps-tutorial/"},"Voronoi maps tutorial")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://roberthodgin.com/project/meander"},"Meander")," - Procedural system for generating historical maps of rivers that never existed. (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=23341917"},"HN"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=JMUtQcJE2Pw"},"Atmospheric Scattering (and also just faking it) (2020)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/LingDong-/shan-shui-inf"},"Shan, Shui")," - Procedurally generated Chinese landscape painting. (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=23469233"},"HN"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/LingDong-/ndwfc"},"NDWFC")," - Wave Function Collapse implementation with infinite canvas in arbitrary number of dimensions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://maps.probabletrain.com/#/"},"City Map Generator")," (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ProbableTrain/MapGenerator"},"Code"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dungeonscrawl.com/"},"Dungeon Scrawl")," - Dungeon scrawling tool."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://mostlymaths.net/2020/06/iris-sketch.html/"},"Generative Iris (2020)")," (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=23592665"},"HN"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://roguetemple.com/z/hyper/dev.php"},"How to create a game using hyperbolic geometry?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://roberthodgin.com/project/akari-lanterns"},"Akari Lanterns")," - System for creating paper lanterns in the style of Noguchi."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://store.steampowered.com/app/1291340/Townscaper/"},"Townscaper")," - Building game inspired by the design of Scandinavian cities. (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=23937551"},"HN"),") (",(0,i.kt)("a",{parentName:"li",href:"https://www.bloomberg.com/news/articles/2020-07-24/the-video-game-where-you-build-an-empty-town"},"Article"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ship.shapewright.com/"},"ShapeWright.com")," - Procedurally generated space ships."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://arpitbhayani.me/blogs/1d-terrain"},"1D Procedural Terrain Generation (2020)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/DasEtwas/enginesound"},"enginesound")," - Procedural engine sound generator controlled via GUI or CLI."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/klangner/mapgen.rs"},"Game Map Generator")," - Generate procedural maps for games."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=qh9vyoMviJI"},"Speech Generation in a Procedurally Generated World (2019)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=LRp9vLk7amg"},"The Secret Behind Unexplored: Cyclic Dungeon Generation (2021)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.ludomotion.com/blogs/level-generation/index.html"},"Level Generation in Unexplored 2 (2019)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.ludomotion.com/blogs/tiles-to-curves/index.html"},"Tiles to Curves Or, Fun with Voronoi Graphs (2019)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/s-macke/VoxelSpace"},"Voxel Space")," - Terrain rendering algorithm in less than 20 lines of code."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://fishdraw.glitch.me/"},"fishdraw")," - Procedurally generated fish drawings. (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/LingDong-/fishdraw"},"Code"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wwwtyro.net/2021/09/24/rounded-box.html"},"Procedurally generating a rounded box mesh (2021)")," (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=28677064"},"HN"),") (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/wwwtyro/rounded-box-figures"},"Code"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.boristhebrave.com/2021/10/31/constraint-based-tile-generators/"},"Constraint-Based Tile Generators (2021)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=uA6BDOUzWnM"},"Procedural Mandala Pattern VEX tutorial (2020)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/croquelois/procedural-terrain"},"procedural-terrain")," - Procedural terrain generation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/dandrino/terrain-erosion-3-ways"},"Three Ways of Generating Terrain with Erosion Features")," (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=29724597"},"HN"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/krychu/wfc"},"Wave Function Collapse library in pure C")," (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=29806885"},"HN"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ijdykeman.github.io/ml/2017/10/12/wang-tile-procedural-generation.html"},"Procedural Worlds from Simple Tiles (2017)")," (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=29866062"},"HN"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ijdykeman.github.io/procedural_generation/2019/11/08/generate-worlds-algorithm.html"},"The Constrained Tile Placement Algorithm behind Generate Worlds (2019)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ijdykeman.github.io/procedural_generation/2019/05/17/introducing-generate-worlds.html"},"Introducing Generate Worlds for Procedural Generation without Code (2019)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/alan-luo/planetprocedural"},"Little Planet Procedural")," - 2d procedural planet generator inspired by No Man's Sky."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://watabou.github.io/city-generator/"},"City Generator")," (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=30338074"},"HN"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/pixray/pixray"},"Pixray")," - Image generation system."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/kettle11/open_world_game"},"Terrain generation experiment")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://jason.today/little-worlds"},"Little Procedural Pixel Worlds")," (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=31481581"},"HN"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://plant.jim-fx.com/"},"Plantarium")," - Tool for the procedural generation of 3D plants. (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/jim-fx/plantarium"},"Code"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/rant-lang/rant"},"Rant")," - Dynamically-typed, multi-paradigm templating language designed primarily for procedural generation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/SamiPerttu/funutd"},"FunUTD")," - 3-D procedural texture library running on the CPU.")))}h.isMDXComponent=!0}}]);