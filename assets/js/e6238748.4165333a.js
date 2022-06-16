"use strict";(self.webpackChunkkinderheim=self.webpackChunkkinderheim||[]).push([[42845],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return k}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),p=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),h=p(a),k=n,c=h["".concat(u,".").concat(k)]||h[k]||s[k]||i;return a?r.createElement(c,l(l({ref:t},m),{},{components:a})):r.createElement(c,l({ref:t},m))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=h;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},92313:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),l=["components"],o={title:"Vulkan API"},u="[Vulkan API](https://www.khronos.org/vulkan/)",p={unversionedId:"computer-graphics/vulkan",id:"computer-graphics/vulkan",title:"Vulkan API",description:"Links",source:"@site/docs/computer-graphics/vulkan.md",sourceDirName:"computer-graphics",slug:"/computer-graphics/vulkan",permalink:"/kinderheim/computer-graphics/vulkan",draft:!1,editUrl:"https://github.com/ecioran/kinderheim/docs/computer-graphics/vulkan.md",tags:[],version:"current",frontMatter:{title:"Vulkan API"},sidebar:"tutorialSidebar",previous:{title:"SVG",permalink:"/kinderheim/computer-graphics/svg"},next:{title:"WebGL",permalink:"/kinderheim/computer-graphics/webgl"}},m={},s=[{value:"Links",id:"links",level:2}],h={toc:s};function k(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"vulkan-api"},(0,i.kt)("a",{parentName:"h1",href:"https://www.khronos.org/vulkan/"},"Vulkan API")),(0,i.kt)("h2",{id:"links"},"Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/KhronosGroup/Vulkan-Guide"},"Vulkan Guide")," - One stop shop for getting started with the Vulkan API."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://vulkan-tutorial.com/"},"Vulkan Tutorial")," (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Overv/VulkanTutorial"},"Code"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/bwasty/vulkan-tutorial-rs"},"Vulkan Tutorial in Rust")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/amethyst/rendy"},"Rendy")," - Yet another Vulkan based rendering engine."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.saschawillems.de/blog/2020/01/11/vulkan-hardware-database-feature-update/"},"Vulkan hardware database feature update (2020)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/vulkano-rs/vulkano"},"Vulkano")," - Rust wrapper around the Vulkan graphics API."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nvpro-samples.github.io/vk_raytracing_tutorial_KHR/"},"NVIDIA Vulkan Ray Tracing Tutorial")," (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/nvpro-samples/vk_raytracing_tutorial_KHR"},"Code"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/MaikKlein/ash"},"Ash")," - Vulkan bindings for Rust."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/maierfelix/nvk"},"NVK")," - Vulkan API for JavaScript/TypeScript."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/GPUOpen-Drivers/AMDVLK"},"AMD Open Source Driver for Vulkan")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/google/clspv"},"clspv")," - Prototype compiler for a subset of OpenCL C to Vulkan compute shaders."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Raikiri/LegitEngine"},"LegitEngine")," - Rendergraph-based graphical framework for Vulkan."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/doitsujin/dxvk"},"DXVK")," - Vulkan-based translation layer for Direct3D 9/10/11 which allows running 3D applications on Linux using Wine."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/SaschaWillems/Vulkan"},"Examples and demos for the new Vulkan API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/jgbit/vuda"},"VUDA")," - Header-only library based on Vulkan that provides a CUDA Runtime API interface for writing GPU-accelerated applications."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/unknownue/vulkan-tutorial-rust"},"Rust implementation of the Vulkan Tutorial")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/LunarG/gfxreconstruct"},"gfxreconstruct")," - Graphics API Capture and Replay Tools for Reconstructing Graphics Application Behavior."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/LunarG/VulkanSamples"},"Vulkan Samples")," - Collection of Vulkan C++ sample applications. (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/KhronosGroup/Vulkan-Samples"},"Version 2"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/nyorain/vpp"},"vpp")," - Modern C++ vulkan utility library."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/gan74/Yave"},"Yave")," - Yet Another Vulkan Engine."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Yours3lf/rpi-vk-driver"},"RPi-VK-Driver")," - Low level GPU driver for the Broadcom Videocore IV GPU that implements a subset of the Vulkan standard. (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=23584415"},"HN"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/google/amber"},"Amber")," - Multi-API shader test framework."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/KhronosGroup/MoltenVK"},"MoltenVK")," - Vulkan Portability implementation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/KhronosGroup/Vulkan-Hpp"},"Vulkan-Hpp")," - C++ Bindings for Vulkan."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://zeux.io/2020/02/27/writing-an-efficient-vulkan-renderer/"},"Writing an efficient Vulkan renderer (2020)")," (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=24368353"},"HN"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/mackron/vkbind"},"vkbind")," - Single file Vulkan API loader."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/KhronosGroup/Vulkan-Tools"},"Vulkan Ecosystem Components")," - Provides Khronos official Vulkan Tools and Utilities for Windows, Linux, Android, and MacOS."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/EthicalML/vulkan-kompute"},"Vulkan Kompute")," - Blazing fast, mobile-enabled, asynchronous and optimized for advanced GPU data processing usecases."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/aclysma/renderer_prototype"},"renderer_prototype")," - Vulkan renderer built on top of atelier-assets. The objective of this repo is to build a scalable, flexible, data driven renderer."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/David-DiGioia/vulkan-diagrams"},"Vulkan Diagrams")," - Diagrams showing relationships between Vulkan objects and how they're used."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cg-tuwien/TAA-STAR"},"TAA-STAR")," - C++/Vulkan Implementations of State of the Art Temporal Anti-Aliasing Techniques."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/jpbruyere/vkvg"},"vkvg")," - Vulkan 2D graphics library."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://vkguide.dev/"},"Practical guide to graphics programming with Vulkan")," (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/vblanco20-1/vulkan-guide"},"Code"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/LunarG/VulkanTools"},"Vulkan Ecosystem Tools")," - Tools to aid in Vulkan development including useful layers, trace and replay, and tests."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/vsg-dev/VulkanSceneGraph"},"VulkanSceneGraph")," - Modern, cross platform, high performance scene graph library built upon Vulkan graphics/compute API. (",(0,i.kt)("a",{parentName:"li",href:"https://vsg-dev.github.io/VulkanSceneGraph/"},"Web"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/KhronosGroup/Vulkan-Headers"},"Vulkan-Headers")," - Vulkan Header files and API registry."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/inexorgame/vulkan-renderer"},"vulkan-renderer")," - New 3D game engine using modern C++ and Vulkan API."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/googlestadia/performance-layers"},"Vulkan Performance Layers")," - Vulkan layers to measure pipeline performance and analyze frame times."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/datoviz/datoviz"},"Datoviz")," - GPU interactive scientific data visualization with Vulkan. (",(0,i.kt)("a",{parentName:"li",href:"https://datoviz.org/"},"Docs"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ttauri-project/ttauri"},"TTauri GUI library")," - Low Latency GUI on top of Vulkan."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learnvulkan.com/"},"Learn Vulkan")," - Education platform for the graphics programming API known as Vulkan."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/KhronosGroup/Vulkan-ValidationLayers"},"Vulkan Validation Layers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://boilingsteam.com/zink-running-opengl-on-top-of-vulkan-interview-with-mike-blumenkrantz/"},"Zink: Running OpenGL on top of Vulkan - Interview with Mike Blumenkrantz (2021)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/nvpro-samples/vk_order_independent_transparency"},"Different techniques for order-independent transparency in Vulkan")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/GPUOpen-LibrariesAndSDKs/VulkanMemoryAllocator"},"Vulkan Memory Allocator")," - Easy to integrate Vulkan memory allocation library. (",(0,i.kt)("a",{parentName:"li",href:"https://gpuopen.com/vulkan-memory-allocator/"},"Web"),") (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=27903884"},"HN"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Tobski/simple_vulkan_synchronization"},"Simplified Vulkan Synchronization")," - Single-header library with a simplified interface for Vulkan synchronization."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/googlesamples/android-vulkan-tutorials"},"Samples to illustrate Vulkan API on Android")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/charles-lunarg/vk-bootstrap"},"vk-bootstrap")," - Vulkan bootstraping library."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Snektron/vulkan-zig"},"vulkan-zig")," - Vulkan binding generator for Zig."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/zyrolasting/racket-vulkan"},"Racket Vulkan")," - Vulkan API integration and utilities for Racket."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Themaister/Granite"},"Granite")," - Personal Vulkan renderer."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/KhronosGroup/Vulkan-ExtensionLayer"},"Vulkan-ExtensionLayer")," - Layer providing Vulkan features when native support is unavailable."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/KhronosGroup/Vulkan-Docs"},"Vulkan API Specification and related tools")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://msiglreith.gitbook.io/blog/descriptorless-rendering-in-vulkan"},"Descriptorless Rendering in Vulkan (2021)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/google/shaderc"},"Shaderc")," - Collection of tools, libraries, and tests for Vulkan shader compilation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/google/shaderc-rs"},"shaderc-rs")," - Rust bindings for the shaderc library."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/EmbarkStudios/kajiya"},"kajiya")," - Experimental real-time global illumination renderer made with Rust and Vulkan. (",(0,i.kt)("a",{parentName:"li",href:"https://medium.com/embarkstudios/homegrown-rendering-with-rust-1e39068e56a7"},"Homegrown rendering with Rust\n"),") (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=29626406"},"HN"),") (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=29711495"},"HN"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/MomentsInGraphics/vulkan_renderer"},"Toy renderer written in C using Vulkan to perform real-time ray tracing research")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/nyorain/vil"},"VIL")," - Vulkan in-app debugging layer."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/SaschaWillems/Vulkan-glTF-PBR"},"Physical based rendering with Vulkan using glTF 2.0 models")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Ralith/lahar"},"lahar")," - Async-oriented Vulkan helpers."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/gwihlidal/vk-mem-rs"},"vk-mem")," - Rust bindings for AMD Vulkan Memory Allocator (VMA)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/gwihlidal/vk-sync-rs"},"vk-sync")," - Simplified Vulkan synchronization logic, written in rust."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/sjb3d/caldera"},"caldera")," - Vulkan and rust experiments, including a spectral path tracer using Vulkan ray tracing extensions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/sebbbi/rust_test"},"Rust & Vulkan test projects")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/KhronosGroup/Vulkan-MemoryModel"},"Vulkan Memory Model")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/KhronosGroup/Vulkan-Loader"},"Vulkan Ecosystem Components")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/nvpro-samples/gl_vk_meshlet_cadscene"},"Vulkan & OpenGL CAD Mesh Shader Sample")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.collabora.com/news-and-blog/blog/2022/03/23/how-to-write-vulkan-driver-in-2022/"},"How to write a Vulkan driver in 2022")," (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=30781942"},"HN"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/adrien-ben/vulkan-tutorial-rs"},"Vulkan tutorial written in Rust using Ash")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/achirkin/vulkan"},"Vulkan Haskell")," - Low-level low-overhead haskell bindings to vulkan API."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/zeux/niagara"},"Niagara")," - Vulkan renderer written from scratch on stream."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/zeux/volk"},"volk")," - Meta loader for Vulkan API."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/liblava/liblava"},"lava")," - Modern and easy-to-use library for the Vulkan API."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/arcana-engine/sierra"},"Sierra")," - Vulkan-lite GPU API."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Avokadoen/zig_vulkan"},"Zig vulkan renderer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/jpbruyere/vkhelpers"},"Vulkan Helpers")," - Vulkan c helper library."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/TheCherno/Walnut"},"Walnut")," - Simple application framework for Vulkan and Dear ImGui apps."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/KyleMayes/vulkanalia"},"vulkanalia")," - Vulkan bindings for Rust."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/felixdoerre/primus_vk"},"Primus-vk")," - Vulkan GPU-offloading layer."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Joshua-Ashton/vkroots"},"vkroots")," - Framework for writing Vulkan layers."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/nvpro-samples/vk_raytrace"},"Ray tracing glTF scene with Vulkan"))))}k.isMDXComponent=!0}}]);