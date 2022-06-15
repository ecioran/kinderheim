"use strict";(self.webpackChunkkinderheim=self.webpackChunkkinderheim||[]).push([[7231],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var h=r.createContext({}),l=function(e){var t=r.useContext(h),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return r.createElement(h.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,h=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(a),u=i,f=m["".concat(h,".").concat(u)]||m[u]||c[u]||n;return a?r.createElement(f,o(o({ref:t},p),{},{components:a})):r.createElement(f,o({ref:t},p))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=m;var s={};for(var h in t)hasOwnProperty.call(t,h)&&(s[h]=t[h]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<n;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8798:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return h},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var r=a(7462),i=a(3366),n=(a(7294),a(3905)),o=["components"],s={},h="Speech synthesis",l={unversionedId:"nlp/speech-synthesis",id:"nlp/speech-synthesis",title:"Speech synthesis",description:"Links",source:"@site/docs/nlp/speech-synthesis.md",sourceDirName:"nlp",slug:"/nlp/speech-synthesis",permalink:"/kinderheim/nlp/speech-synthesis",draft:!1,editUrl:"https://github.com/ecioran/kinderheim/docs/nlp/speech-synthesis.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Speech recognition",permalink:"/kinderheim/nlp/speech-recognition"},next:{title:"Virtual assistant",permalink:"/kinderheim/nlp/virtual-assistant"}},p={},c=[{value:"Links",id:"links",level:2}],m={toc:c};function u(e){var t=e.components,a=(0,i.Z)(e,o);return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"speech-synthesis"},"Speech synthesis"),(0,n.kt)("h2",{id:"links"},"Links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/r9y9/deepvoice3_pytorch"},"Deepvoice3 PyTorch")," - PyTorch implementation of convolutional neural networks-based text-to-speech synthesis models."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/r9y9/wavenet_vocoder"},"WaveNet vocoder")," - Can generate high quality raw speech samples conditioned on linguistic or acoustic features."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.papercup.com/"},"Papercup")," - Translate your content into other languages with a voice that sounds like yours."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/basveeling/wavenet"},"WaveNet implementation in Keras")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/NVIDIA/nv-wavenet"},"nv-wavenet")," - CUDA reference implementation of autoregressive WaveNet inference."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/r9y9/tacotron_pytorch"},"PyTorch implementation of Tacotron speech synthesis model")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/golbin/WaveNet"},"Yet another WaveNet implementation in PyTorch")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/NVIDIA/flowtron"},"Flowtron")," - Auto-regressive flow-based generative network for text to speech synthesis."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ai.facebook.com/blog/a-highly-efficient-real-time-text-to-speech-system-deployed-on-cpus/"},"A highly efficient, real-time text-to-speech system deployed on CPUs (2020)")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=23193967"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.sonantic.io/"},"Sonatic")," - Emotionally Expressive Text to Speech."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/descriptinc/melgan-neurips"},"GAN-based Mel-Spectrogram Inversion Network for Text-to-Speech Synthesis")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=23490115"},"Ask HN: My wife might lose the ability to speak in 3 weeks \u2013 how to prepare? (2020)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/lmnt-com/diffwave"},"DiffWave")," - Fast, high-quality neural vocoder and waveform synthesizer."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/andabi/deep-voice-conversion"},"Voice Conversion with Non-Parallel Data")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/xcmyz/speech-synthesis-paper"},"Speech Synthesis Papers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/mindslab-ai/voicefilter"},"VoiceFilter")," - Unofficial PyTorch implementation of Google AI's VoiceFilter system. (",(0,n.kt)("a",{parentName:"li",href:"http://swpark.me/voicefilter/"},"Web"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/as-ideas/ForwardTacotron"},"ForwardTacotron")," - Generating speech in a single forward pass without any attention. (",(0,n.kt)("a",{parentName:"li",href:"https://as-ideas.github.io/ForwardTacotron/"},"Web"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/jik876/hifi-gan"},"HiFi-GAN")," - Generative Adversarial Networks for Efficient and High Fidelity Speech Synthesis."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/PaddlePaddle/Parakeet"},"Parakeet")," - Text-to-speech toolKIT (supporting WaveFlow, ClariNet, WaveNet, Deep Voice 3, Transformer TTS and FastSpeech)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/nateshmbhat/pyttsx3"},"pyttsx3")," - Offline Text To Speech synthesis for python."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/sovaai/sova-tts"},"SOVA TTS")," - Speech syntthesis solution based on Tacotron 2 architecture."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/espeak-ng/espeak-ng"},"eSpeak NG")," - Open source speech synthesizer that supports more than hundred languages and accents."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/rncm-prism/prism-samplernn"},"PRiSM SampleRNN")," - Neural sound synthesis with TensorFlow 2."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/festvox/flite"},"Flite")," - Small fast portable speech synthesis system."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2006.04558"},"FastSpeech 2: Fast and High-Quality End-to-End Text to Speech (2020)")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rishikksh20/FastSpeech2"},"Code"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AppleHolic/FastSpeech2"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://adrienchaton.github.io/neural_granular_synthesis/"},"Neural Granular Sound Synthesis")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/adrienchaton/neural_granular_synthesis"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/creamlab/cleese"},"CLEESE")," - Combinatorial Expressive Speech Engine."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ZENGZHEN-TTS/LVCNet"},"LVCNet: Efficient Condition-Dependent Modeling Network for Waveform Generation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2102.04040"},"LightSpeech: Lightweight and Fast Text to Speech with Neural Architecture Search (2021)")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rishikksh20/LightSpeech"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2106.15561"},"A Survey on Neural Speech Synthesis (2021)")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tts-tutorial/survey"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookresearch/BinauralSpeechSynthesis"},"Binaural Speech Synthesis")," - Code to train a mono-to-binaural neural sound renderer."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/r9y9/nnsvs"},"NN-SVS")," - Neural network-based singing voice synthesis library for research."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/rhasspy/larynx"},"Larynx")," - End to end text to speech system using gruut and onnx, 50 voices, 9 languages."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wellsaidlabs.com/"},"WellSaid Labs")," - Voice Narration. Simplified."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ben-hayes/neural-waveshaping-synthesis"},"Neural Wave shaping Synthesis")," - Efficient neural audio synthesis in the waveform domain. (",(0,n.kt)("a",{parentName:"li",href:"https://benhayes.net/projects/nws/"},"Article"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://galgreshler.github.io/Catch-A-Waveform/"},"Catch-A-Waveform: Learning to Generate Audio from a Single Short Example")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/galgreshler/Catch-A-Waveform"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2011.12206"},"TFGAN: Time and Frequency Domain Based Generative Adversarial Network for High-fidelity Speech Synthesis (2020)")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rishikksh20/TFGAN"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/neosapience/EdiTTS"},"EdiTTS: Score-based Editing for Controllable Text-to-Speech")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2109.15166"},"PortaSpeech: Portable and High-Quality Generative Text-to-Speech (2021)")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/keonlee9420/PortaSpeech"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2104.00355"},"Speech Resynthesis from Discrete Disentangled Self-Supervised Representations (2021)")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookresearch/speech-resynthesis"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2110.09698"},"Neural Lexicon Reader: Reduce Pronunciation Errors in End-to-end TTS by Leveraging External Textual Knowledge (2021)")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/mutiann/neural-lexicon-reader"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Dimev/grail-rs"},"Grail-rs")," - Rust speech synth."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2111.05011"},"RAVE: A variational autoencoder for fast and high-quality neural audio synthesis (2021)")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/caillonantoine/RAVE"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/1912.01219"},"WaveFlow: A Compact Flow-based Model for Raw Audio (2020)")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/L0SG/WaveFlow"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/haoheliu/voicefixer_main"},"VoiceFixer")," - Framework for general speech restoration."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ndarilek/tts-rs"},"TTS-RS")," - High-level Text-To-Speech (TTS) interface supporting various backends."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://cornerbit.tech/speech-synthesis-using-avspeechsynthesizer/"},"Speech synthesis using AVSpeechSynthesizer (2021)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2111.08462"},"Towards Lightweight Controllable Audio Synthesis with Conditional Implicit Neural Representations (2021)")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/janzuiderveld/continuous-audio-representations"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/coqui-ai/TTS"},"TTS")," - Library for advanced Text-to-Speech generation. (",(0,n.kt)("a",{parentName:"li",href:"https://coqui.ai/"},"Web"),") (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=29786132"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Edresson/YourTTS"},"YourTTS: Towards Zero-Shot Multi-Speaker TTS and Zero-Shot Voice Conversion for everyone")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/sc0ty/subsync"},"SubSync")," - Subtitle Speech Synchronizer. (",(0,n.kt)("a",{parentName:"li",href:"http://sc0ty.pl/2019/04/subsync-synchronize-movie-subtitles-with-audio-track/"},"Overview"),") (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=29794153"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2106.03153"},"Meta-StyleSpeech : Multi-Speaker Adaptive Text-to-Speech Generation (2021)")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/keonlee9420/StyleSpeech"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/NATSpeech/NATSpeech"},"NATSpeech")," - Non-Autoregressive Text-to-Speech Framework."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2112.03099"},"VocBench: A Neural Vocoder Benchmark for Speech Synthesis (2021)")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookresearch/vocoder-benchmark"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/as-ideas/TransformerTTS"},"TransformerTTS")," - Text-to-Speech Transformer in TensorFlow 2."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/zzw922cn/awesome-speech-recognition-speech-synthesis-papers"},"Awesome Speech Recognition Speech Synthesis Papers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://erlj.notion.site/Neural-Instrument-Cloning-from-very-few-samples-2cf41d8b630842ee8c7eb55036a1bfd6"},"Neural Instrument Cloning from very few samples (2022)")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/erl-j/neural-instrument-cloning"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2106.07886"},"MLP Singer: Towards Rapid Parallel Korean Singing Voice Synthesis (2021)")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/neosapience/mlp-singer"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/DigitalPhonetics/IMS-Toucan"},"IMS Toucan")," - Toolkit to train state-of-the-art Speech Synthesis models."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tencent-ailab/bddm"},"BDDM: Bilateral Denoising Diffusion Models for Fast and High-quality Speech Synthesis (2022)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Emotional-Text-to-Speech/dl-for-emo-tts"},"Deep Learning for Emotional Text-to-speech")," - Summary on our attempts at using Deep Learning approaches for Emotional Text to Speech."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/rendchevi/nix-tts"},"Nix-TTS")," - Incredibly Lightweight End-to-End Text-to-Speech Model via Non End-to-End Distillation."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/DanRuta/xVA-Synth"},"xVA Synth")," - Machine learning based speech synthesis Electron app, with voices from specific characters from video games."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ieeexplore.ieee.org/document/9413575"},"Bandwidth Extension is All You Need (2021)")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/brentspell/hifi-gan-bwe"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/neonbjb/tortoise-tts"},"TorToiSe")," - Multi-voice TTS system trained with an emphasis on quality."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2005.05106"},"Multi-band MelGAN: Faster Waveform Generation for High-Quality Text-to-Speech (2020)")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AppleHolic/multiband_melgan"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2106.07889"},"UnivNet: A Neural Vocoder with Multi-Resolution Spectrogram Discriminators for High-Fidelity Waveform Generation (2021)")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/mindslab-ai/univnet"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://weilbyte.github.io/tiktok-tts/"},"TikTok TTS")," - Generate the funny TiKTok lady voice (& more) in your browser. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Weilbyte/tiktok-tts"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/oscie57/tiktok-voice"},"TikTok Text-to-speech API")," - Simple Python script to interact with the TikTok TTS API."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://unrealspeech.com/"},"Unreal Speech")," - Text-to-Speech API. Better & 8x Cheaper than AWS.")))}u.isMDXComponent=!0}}]);