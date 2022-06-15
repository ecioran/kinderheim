"use strict";(self.webpackChunkkinderheim=self.webpackChunkkinderheim||[]).push([[5502],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return u}});var i=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=i.createContext({}),p=function(e){var t=i.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},l=function(e){var t=p(e.components);return i.createElement(m.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,f=c["".concat(m,".").concat(u)]||c[u]||h[u]||o;return a?i.createElement(f,n(n({ref:t},l),{},{components:a})):i.createElement(f,n({ref:t},l))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,n=new Array(o);n[0]=c;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:r,n[1]=s;for(var p=2;p<o;p++)n[p]=a[p];return i.createElement.apply(null,n)}return i.createElement.apply(null,a)}c.displayName="MDXCreateElement"},78273:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return m},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return h}});var i=a(87462),r=a(63366),o=(a(67294),a(3905)),n=["components"],s={},m="Compression",p={unversionedId:"computer-science/algorithms/compression",id:"computer-science/algorithms/compression",title:"Compression",description:"compress & L4 are nice Go packages for compression. Brotli is amazing.",source:"@site/docs/computer-science/algorithms/compression.md",sourceDirName:"computer-science/algorithms",slug:"/computer-science/algorithms/compression",permalink:"/kinderheim/computer-science/algorithms/compression",draft:!1,editUrl:"https://github.com/ecioran/kinderheim/docs/computer-science/algorithms/compression.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Algorithms",permalink:"/kinderheim/computer-science/algorithms/"},next:{title:"Automata theory",permalink:"/kinderheim/computer-science/automata-theory"}},l={},h=[{value:"Notes",id:"notes",level:2},{value:"Links",id:"links",level:2}],c={toc:h};function u(e){var t=e.components,a=(0,r.Z)(e,n);return(0,o.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"compression"},"Compression"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/klauspost/compress"},"compress")," & ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pierrec/lz4"},"L4")," are nice Go packages for compression. ",(0,o.kt)("a",{parentName:"p",href:"http://brotli.org/"},"Brotli")," is amazing."),(0,o.kt)("h2",{id:"notes"},"Notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://twitter.com/michaelvillar/status/1445079263208787969"},"Can compress PNG images well with pngquant.")),(0,o.kt)("li",{parentName:"ul"},"LZ4 compression is fast")),(0,o.kt)("h2",{id:"links"},"Links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebook/zstd"},"Zstandard")," - Fast real-time compression algorithm. (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=24714854"},"HN"),") (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=25455314"},"HN 2"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/richox/orz"},"Orz")," - General purpose data compressor written in rust."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Cyan4973/FiniteStateEntropy"},"FiniteStateEntropy")," - New Generation Entropy coders."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/google/snappy"},"Snappy")," - Fast compressor/decompressor."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Brooooooklyn/snappy"},"Snappy Node")," - Fastest Snappy compression library in Node.js."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/upx/upx"},"UPX")," - Advanced executable file compressor."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/beatgammit/gzip-js"},"gzip-js")," - Pure JavaScript implementation of the GZIP file format."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Blosc/c-blosc"},"Blosc")," - Blocking, shuffling and lossless compression library. (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=23484342"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/drbh/wasm-flate"},"wasm-flate")," - Fastest compression and decompression in the browser."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/madler/zlib"},"zlib")," - General purpose data compression library."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/zlib-ng/zlib-ng"},"zlib-ng")," - zlib data compression library for the next generation systems."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/lz4/lz4"},"LZ4")," - Extremely Fast Compression Algorithm. (",(0,o.kt)("a",{parentName:"li",href:"https://lz4.github.io/lz4/"},"Web"),") (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=25915274"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://ticki.github.io/blog/how-lz4-works/"},"How LZ4 works (2016)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.springer.com/gp/book/9781848829022"},"Handbook of Data Compression (2010)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/rleiwang/svb"},"Faster integer compression in Go with SIMD using StreamVByte codec")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dropbox/fast_rsync"},"fast_rsync")," - Optimized implementation of librsync in pure Rust."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/vurtun/sdefl"},"SDefl")," - Small bare bone lossless compression library in ANSI C (ISO C90) that implements the Deflate (RFC 1951) compressed data format specification standard."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/vasi/pixz"},"Pixz")," - Parallel, indexed xz compressor."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://colin-scott.github.io/personal_website/research/nsdi15.pdf"},"Flywheel: Google\u2019s Data Compression Proxy for the Mobile Web")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/xiph/opus"},"Opus")," - Codec for interactive speech and audio transmission over the Internet."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nmoinvaz/minizip"},"minizip")," - Zip manipulation library written in C that is supported on Windows, macOS, and Linux."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://etbe.coker.com.au/2020/06/06/comparing-compression/"},"Comparing zstd/gzip/bzip2/lzma/xz Compression (2020)")," (",(0,o.kt)("a",{parentName:"li",href:"https://lobste.rs/s/wd79sy/comparing_zstd_gzip_bzip2_lzma_xz"},"Lobsters"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/LLNL/zfp"},"ZFP")," - Compressed format for representing multidimensional floating-point and integer arrays."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fab-jul/L3C-PyTorch"},'PyTorch Implementation of the CVPR\'19 Paper "Practical Full Resolution Learned Lossless Image Compression"')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://textsynth.org/sms.html"},"Lossless compression of English messages using GPT-2")," (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=23618465"},"HN"),") (",(0,o.kt)("a",{parentName:"li",href:"https://bellard.org/nncp/gpt2tc.html"},"Code"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://bellard.org/nncp/"},"NNCP: Lossless Data Compression with Neural Networks (2019)")," (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=27244004"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://brennan.io/2020/09/22/compression-curves/"},"Visualizing gzip compression with Python (2020)")," (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=24563372"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://go-compression.github.io/"},"The Hitchhiker's Guide to Compression")," (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/go-compression/go-compression.github.io"},"Code"),") (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=24691422"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/richgel999/miniz"},"Miniz")," - Single C source file zlib-replacement library."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://mattmahoney.net/dc/rationale.html"},"Rationale for a Large Text Compression Benchmark (2009)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/emmanuel-marty/lzsa"},"LZSA")," - Byte-aligned, efficient lossless packer that is optimized for fast decompression on 8-bit micros."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/madler/pigz"},"pigz")," - Parallel implementation of gzip for modern multi-processor, multi-core machines."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/schnaader/precomp-cpp"},"Precomp")," - Command line precompressor that can be used to further compress files that are already compressed."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nodeca/pako"},"pako")," - High speed zlib port to javascript, works in browser & node.js."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.usenix.org/conference/nsdi17/technical-sessions/presentation/horn"},"A System to Transparently Compress Hundreds of Petabytes of Image")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/flanglet/kanzi-go"},"Kanzi")," - Modern, modular, expendable and efficient lossless data compressor implemented in Go."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://marknelson.us/posts/2014/10/19/data-compression-with-arithmetic-coding.html"},"Data Compression With Arithmetic Coding (2014)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/golang/snappy"},"Snappy")," - Snappy compression format in the Go programming language."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://caseymuratori.com/blog_0015"},"Semantic Compression (2014)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/101arrowz/fflate"},"fflate")," - High performance (de)compression in an 8kB package."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/wolfpld/etcpak"},"etcpak")," - Extremely fast Ericsson Texture Compression and S3 Texture Compression (DXT1/DXT5) utility."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/google/zopfli"},"Zopfli Compression Algorithm")," - Compression library programmed in C to perform very good, but slow, deflate or zlib compression."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Blosc/python-blosc"},"python-blosc")," - Python wrapper for the extremely fast Blosc compression library."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/kuba--/zip"},"zip")," - Portable, simple zip library written in C."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dev.l1x.be/posts/2021/03/08/compressing-data-with-parquet/"},"Compressing data with Parquet (2021)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://bilalonureskili.com/files/LTC_en.pdf"},"Lossless Text Compression")," (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=26722960"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/InterDigitalInc/CompressAI"},"CompressAI")," - PyTorch library and evaluation platform for end-to-end compression research."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/minio/zipindex"},"zipindex")," - Package for indexing zip files and storing a compressed index."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2103.03123"},"COIN: COmpression with Implicit Neural representations (2021)")," (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/EmilienDupont/coin"},"Code"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/guzba/zippy"},"Zippy")," - Pure Nim implementation of deflate, zlib, gzip and zip."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/getsentry/ezip2dmg"},"ezip2dmg")," - Simple wrapper utility to decompress an encrypted ZIP into a newly mounted encrypted DMG."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://maxhalford.github.io/blog/text-classification-by-compression/"},"Text Classification by Data Compression (2021)")," (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=27440093"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://photo.stackexchange.com/questions/125283/two-exactly-the-same-jpg-images-with-one-image-more-than-twice-the-file-size-of"},"JPEG compression algorithm explained")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookresearch/NeuralCompression"},"NeuralCompression")," - Python repository dedicated to research of neural networks that compress data."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2107.09202"},"Compressing Multisets with Large Alphabets (2021)")," (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookresearch/multiset-compression"},"Code"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/vrmiguel/ouch"},"Ouch")," - Easy and painless way of compressing and decompressing files in the terminal."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/OrlovEvgeny/TinyJPG"},"TinyJPG")," - Filesystem watcher and image compress."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tech.marksblogg.com/snappy-s2-compression-golang.html"},"Faster Compression with Snappy's S2 Extension (2021)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tech.marksblogg.com/faster-zip-decompression-unzip-deflate-zlib-crc32-adler32-7zip-archiver.html"},"Faster ZIP Decompression (2019)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tech.marksblogg.com/minimalist-guide-compression.html"},"Minimalist Guide to Lossless Compression (2019)")," (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=29529137"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Bulat-Ziganshin/FA"},"FreeArc'Next")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Bulat-Ziganshin/Compression-Research"},"Experiments with compression-related algorithms")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/imager-io/imager"},"Imager")," - Automated image compression for efficiently distributing images on the web. (",(0,o.kt)("a",{parentName:"li",href:"https://imager.io/"},"Web"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/atomicobject/heatshrink"},"Heatshrink")," - Data compression library for embedded/real-time systems. (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=28687589"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/openvinotoolkit/nncf"},"Neural Network Compression Framework (NNCF)")," - Provides a suite of advanced algorithms for Neural Networks inference optimization in OpenVINO with minimal accuracy drop."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ebiggers/libdeflate"},"libdeflate")," - Heavily optimized library for DEFLATE/zlib/gzip compression and decompression."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Gottox/sltar"},"sltar")," - Minimal implementation of tar."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/bbqsrc/box"},"Box")," - Open Standard Archive Format, akin to zip or 7z but without the legacy baggage."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/gecko0307/box"},"Box in D")," - Simple archive format with UTF-8 filenames."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://code.lag.net/robey/bitbottle"},"Bitbottle")," - Modern archive format. (",(0,o.kt)("a",{parentName:"li",href:"https://lobste.rs/s/ywxuxj/bitbottle_modern_archive_file_format"},"Lobsters"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/libarchive/libarchive"},"libarchive")," - Multi-format archive and compression library. (",(0,o.kt)("a",{parentName:"li",href:"http://www.libarchive.org/"},"Web"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/cloudflare/zlib"},"zlib by Cloudflare")," - Cloudflare fork of zlib with massive performance improvements."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/GunnarFarneback/Inflate.jl"},"Inflate.jl")," - Julia implementation of zlib decompression."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Frommi/miniz_oxide"},"miniz_oxide")," - Rust replacement for the miniz deflate/zlib encoder/decoder."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Jarred-Sumner/hop"},"Hop")," - 25x faster than unzip and 10x faster than tar at reading individual files. (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=29178710"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/BuzonIO/zipfly"},"Buzon")," - Writing large ZIP archives without memory inflation. (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=29291381"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://phoboslab.org/log/2021/12/qoi-specification"},"The QOI File Format Specification (2021)")," (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=29625084"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://phoboslab.org/log/2021/11/qoi-fast-lossless-image-compression"},"QOI: Lossless Image Compression in O(n) Time (2021)")," (",(0,o.kt)("a",{parentName:"li",href:"https://twitter.com/phoboslab/status/1463451635540180992"},"Tweet"),") (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=29328750"},"HN"),") (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/phoboslab/qoi"},"Code"),") (",(0,o.kt)("a",{parentName:"li",href:"https://lobste.rs/s/1hafjp/lossless_image_compression_o_n_time"},"Lobsters"),") (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=29661498"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/floooh/qoiview"},"qoiview")," - QOI image viewer on top of the Sokol headers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/whentze/qoi_rs"},"qoi_rs")," - Rust port of the Quite Okay Image format."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/steven-joruk/qoi"},"QOI")," - Rust implementation of the \u201cQuite OK Image\u201d format for fast, lossless image compression."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/MasterQ32/zig-qoi"},"zig-qoi")," - Implementation of the Quite-OK-Image format for Zig."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/xfmoulet/qoi"},"QOI Go")," - Pure Go encoder/decoder of the QOI image format."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/zakarumych/rapid-qoi"},"QOI Rust")," - Fast implementation of QOI format in Rust."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://notes.eatonphil.com/implementing-zip-in-go-unzipping.html"},"Implementing zip archiving in Golang: unzipping (2021)")," (",(0,o.kt)("a",{parentName:"li",href:"https://lobste.rs/s/0vrgbm/implementing_zip_archiving_golang"},"Lobsters"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/main--/rust-lz-fear"},"lz-fear")," - Fast pure-rust no-unsafe implementation of LZ4 compression and decompression."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ttay.me/blog/gzip_investigations/"},"Decompressing a Gzip File by Hand")," (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=29336271"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/librsync/librsync"},"librsync")," - Remote delta-compression library."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/mwlon/quantile-compression"},"Quantile Compression")," - Lossless compressor and decompressor for numerical data using quantiles. (",(0,o.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/rust/comments/r2oinm/quantile_compression_qcompress_a_new_compression/"},"Reddit"),") (",(0,o.kt)("a",{parentName:"li",href:"https://graphallthethings.com/posts/quantile-compression"},"Article"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/101arrowz/fzstd"},"fzstd")," - High performance Zstandard decompression in a pure JavaScript, 8kB package."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/BurntSushi/rust-snappy"},"snap")," - Snappy compression implemented in Rust (including the Snappy frame format)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/umgefahren/image-comp-lib-rust"},"Image Compression Algorithm in Rust")," - New lossless image compression algorithm."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nola-a/mjpeg2http"},"mjpeg2http")," - Pure C Mjpeg-over-HTTP server. (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=29980660"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dgryski/go-tsz"},"go-tsz")," - Time series compression algorithm from Facebook's Gorilla paper."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/JayXon/Leanify"},"Leanify")," - Lightweight lossless file minifier/optimizer. It removes unnecessary data (debug information, comments, metadata, etc.) and recompress the file to reduce file size."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/google/brotli"},"Brotli")," - Generic-purpose lossless compression algorithm that compresses data using a combination of a modern variant of the LZ77 algorithm. (",(0,o.kt)("a",{parentName:"li",href:"http://brotli.org/"},"Web"),") (",(0,o.kt)("a",{parentName:"li",href:"https://twitter.com/chordbug/status/1529814459501490176"},"Visualizing Brotli Decompression"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/yisibl/brotli-js"},"Brotli JS")," - Google brotli binding to Node.js via Rust and napi-rs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/pieroxy/lz-string"},"lz-string")," - LZ-based compression algorithm for JavaScript."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dropbox/divans"},"divANS")," - Crate meant to be used for generic data compression."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kevincox.ca/2022/03/01/dictionary-compression/"},"Dictionary Compression (2022)")," (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=30517656"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nullprogram.com/blog/2022/03/07/"},"Compressing and embedding a Wordle word list (2022)")," (",(0,o.kt)("a",{parentName:"li",href:"https://lobste.rs/s/smtr5t/compressing_embedding_wordle_word_list"},"Lobsters"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/haskell/zlib"},"zlib")," - Compression and decompression in the gzip and zlib format."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://qoiformat.org/"},"QOI \u2014 The Quite OK Image Format")," (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=30885668"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Nexxkinn/littleZip"},"littleZip")," - Memory-friendly basic zip compression, decompression, and single file extraction for deno framework."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nika-begiashvili/libarchivejs"},"Libarchivejs")," - Archive tool for browser which can extract various types of compression."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Siguza/lz4dec"},"lz4dec")," - LZ4 block decompressor written in arm64 assembly."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=74co_YG39Bw"},"Packing Bits For Compression (2022)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.lcevc.org/how-lcevc-works/"},"How LCEVC works \u2013 A new approach to video compression")," (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=30905736"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/bokuweb/zstd-wasm"},"zstd-wasm")," - Zstandard for browser, Node.js and Deno."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/jermp/data_compression_course"},"Crash Course on Data Compression")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://snufk.in/blog/silly-compression.html"},"Silly Image Compression Idea (2022)")," (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=30979085"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/gen2brain/go-unarr"},"go-unarr")," - Go bindings for unarr (decompression library for RAR, TAR, ZIP and 7z archives)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nih-at/libzip"},"libzip")," - C library for reading, creating, and modifying zip archives."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.mjt.me.uk/posts/smallest-png/"},"The smallest 256x256 single-color PNG file, and where you've seen it")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fhanau/Efficient-Compression-Tool"},"Efficient Compression Tool")," - C++ file optimizer. It supports PNG, JPEG, GZIP and ZIP files."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/antelle/wasm-image-compressor"},"WASM PNG Image compressor")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ImageOptim/libimagequant"},"libimagequant")," - Palette quantization library that powers pngquant and other PNG optimizers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/lemire/streamvbyte"},"StreamVByte")," - Fast integer compression in C using the StreamVByte codec."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/kspalaiologos/bzip3"},"BZip3")," - Better, faster and stronger spiritual successor to BZip2."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.timescale.com/blog/time-series-compression-algorithms-explained/"},"Time-series compression algorithms, explained (2020)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nigeltao.github.io/blog/2022/zstandard-part-1-concepts.html"},"Zstandard Worked Example")," (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=31411714"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://snufk.in/blog/silly-compression-text.html"},"Silly Lossy Text Compression Idea (2022)")," (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=31435978"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/inikep/lizard"},"Lizard")," - Efficient compression with fast decompression. (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=31500640"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/polygonplanet/lzbase62"},"lzbase62")," - LZ77(LZSS) based compression algorithm in base62 for JavaScript."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://jakearchibald.com/2021/serving-sharp-images-to-high-density-screens/"},"Halve the size of images by optimising for high density displays (2021)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://siipo.la/blog/whats-the-best-lossless-image-format-comparing-png-webp-avif-and-jpeg-xl"},"What\u2019s the best lossless image format? (2021)")," (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=31657006"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/tovacinni/awesome-3d-compression"},"Survey of 3D Compression and Streaming")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/alextanhongpin/compress.js"},"compress.js")," - Simple JavaScript based client-side image compression algorithm.")))}u.isMDXComponent=!0}}]);