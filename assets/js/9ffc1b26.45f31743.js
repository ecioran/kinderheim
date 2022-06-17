"use strict";(self.webpackChunkkinderheim=self.webpackChunkkinderheim||[]).push([[77603],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var m=r.createContext({}),s=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,m=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(a),h=i,f=u["".concat(m,".").concat(h)]||u[h]||c[h]||n;return a?r.createElement(f,o(o({ref:t},p),{},{components:a})):r.createElement(f,o({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=u;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<n;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},72914:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=a(87462),i=a(63366),n=(a(67294),a(3905)),o=["components"],l={title:"JAX"},m="[JAX](https://github.com/google/jax)",s={unversionedId:"machine-learning/libraries/jax",id:"machine-learning/libraries/jax",title:"JAX",description:"Differential Programming with JAX course is nice. Meta Optimal Transport is nice JAX repo to run/study.",source:"@site/docs/machine-learning/libraries/jax.md",sourceDirName:"machine-learning/libraries",slug:"/machine-learning/libraries/jax",permalink:"/kinderheim/machine-learning/libraries/jax",draft:!1,editUrl:"https://github.com/ecioran/kinderheim/docs/machine-learning/libraries/jax.md",tags:[],version:"current",frontMatter:{title:"JAX"},sidebar:"tutorialSidebar",previous:{title:"Datasets",permalink:"/kinderheim/machine-learning/datasets"},next:{title:"Keras",permalink:"/kinderheim/machine-learning/libraries/keras"}},p={},c=[{value:"Links",id:"links",level:2}],u={toc:c};function h(e){var t=e.components,a=(0,i.Z)(e,o);return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"jax"},(0,n.kt)("a",{parentName:"h1",href:"https://github.com/google/jax"},"JAX")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://ericmjl.github.io/dl-workshop/"},"Differential Programming with JAX course")," is nice. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebookresearch/meta-ot"},"Meta Optimal Transport")," is nice JAX repo to run/study."),(0,n.kt)("h2",{id:"links"},"Links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SarthakYadav/audax"},"audax")," - Home for audio ML in JAX. Has common features, learnable frontends, pretrained supervised and self-supervised models."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/dfm/tinygp"},"tinygp")," - Extremely lightweight library for building Gaussian Process models in Python, built on top of jax."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/thomaspinder/GPJax"},"GPJax")," - Didactic Gaussian process package for researchers in Jax."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/deepmind/mctx"},"Mctx")," - Monte Carlo tree search in JAX."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/kingoflolz/swarm-jax"},"Pipelined Swarm Training")," - Swarm training framework using Haiku + JAX + Ray for layer parallel transformer language models on unreliable, heterogeneous nodes."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Hwhitetooth/jax_muzero"},"JAX MuZero")," - JAX implementation of the MuZero agent."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/google-research/jax-influence"},"Jax Influence")," - Scalable implementation of Influence Functions in JaX."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/blackjax-devs/blackjax"},"BlackJAX")," - Library of samplers for JAX that works on CPU as well as GPU. (",(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/blackjax_mcmc"},"Twitter"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/google-research/gpax"},"GPax")," - Jax/Flax codebase for Gaussian processes including meta and multi-task Gaussian processes."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IvanYashchuk/jax-fenics-adjoint"},"jax-fenics-adjoint")," - Differentiable interface to FEniCS/Firedrake for JAX using dolfin-adjoint/pyadjoint."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/brentyi/jax-ekf"},"jax-ekf")," - Generic EKF, with support for non-Euclidean manifolds."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/lucidrains/PaLM-jax"},"PaLM - Jax")," - Implementation of the specific Transformer architecture from PaLM - Scaling Language Modeling with Pathways - in Jax."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/abarcel/haikumodels"},"Pre-trained image classification models for Jax/Haiku")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/google/flaxformer"},"Flaxformer: transformer architectures in JAX/Flax")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/deepmind/kfac-jax"},"KFAC-JAX - Second Order Optimization with Approximate Curvature in JAX")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/danielward27/flowjax"},"flowjax")," - Normalizing flow implementations in jax."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/google-research/jax3d"},"Jax3D")," - Library for neural rendering in Jax and aims to be a nimble NeRF ecosystem."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/lucidrains/DALLE2-jax"},"DALL\xb7E 2 in JAX")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Joshuaalbert/jaxns"},"JAXNS")," - Nested sampling in JAX."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/deepmind/dm_aux"},"AUX")," - Audio processing library in JAX, for JAX."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/DeepMind/status/1517146462571794433"},"Nice DeepMind Jax libraries")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/playlist?list=PLBoQnSflObckOARbMK9Lt98Id0AKcZurq"},"Machine Learning with JAX - From Zero to Hero (2021)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/google/flax"},"Flax")," - Neural network library for JAX designed for flexibility. (",(0,n.kt)("a",{parentName:"li",href:"https://flax.readthedocs.io/en/latest/"},"Docs"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/playlist?list=PLo2EIpI_JMQtQrEduYXbRz4X50mTiOi8S"},"JAX talks by HuggingFace")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/nkandpa2/he_jax"},"Homomorphic Encryption in JAX")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/teddykoker/learning-to-learn-jax"},"JAX implementation of Learning to learn by gradient descent by gradient descent")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ChrisWaites/jax-flows"},"Normalizing Flows in JAX")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/google-research/big_vision"},"Big Vision")," - Designed for training large-scale vision models on Cloud TPU VMs. Based on Jax/Flax libraries."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://kidger.site/thoughts/jax-vs-julia/"},"Jax vs. Julia (Vs PyTorch) (2022)")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=31263516"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/mgrankin/minGPT"},"minGPT in JAX")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/rolandgvc/flaxvision"},"flaxvision")," - Selection of neural network models ported from torchvision for JAX & Flax."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/nshepperd/jax-guided-diffusion"},"JAX version of clip guided diffusion scripts")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/pytorch/functorch"},"Functorch")," - Jax-like composable function transforms for PyTorch. (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=31424588"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/danijar/ninjax"},"Ninjax")," - Module system for JAX that offers full state access and allows to easily combine modules from other libraries."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/awf/functional-transformer"},"Functional Transformer")," - Pure-functional implementation of a machine learning transformer model in Python/JAX."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/dfm/jpu"},"JAX + Units")," - Provides and interface between JAX and Pint to allow JAX to support operations with units."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/noveens/infinite_ae_cf"},"Infinite Recommendation Networks (\u221e-AE) in JAX")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ericmjl.github.io/dl-workshop/"},"Differential Programming with JAX course")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ericmjl/dl-workshop"},"Code"),")")))}h.isMDXComponent=!0}}]);