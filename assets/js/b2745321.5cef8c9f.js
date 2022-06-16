"use strict";(self.webpackChunkkinderheim=self.webpackChunkkinderheim||[]).push([[42055],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),k=c(a),h=i,b=k["".concat(l,".").concat(h)]||k[h]||m[h]||o;return a?r.createElement(b,n(n({ref:t},p),{},{components:a})):r.createElement(b,n({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,n=new Array(o);n[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,n[1]=s;for(var c=2;c<o;c++)n[c]=a[c];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},71692:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var r=a(87462),i=a(63366),o=(a(67294),a(3905)),n=["components"],s={title:"WebSocket"},l="[WebSocket](https://en.wikipedia.org/wiki/WebSocket)",c={unversionedId:"networking/websocket",id:"networking/websocket",title:"WebSocket",description:"soketi, Tungstenite & tinyws are great. Using WebSockets with Cloudflare Workers is awesome.",source:"@site/docs/networking/websocket.md",sourceDirName:"networking",slug:"/networking/websocket",permalink:"/kinderheim/networking/websocket",draft:!1,editUrl:"https://github.com/ecioran/kinderheim/docs/networking/websocket.md",tags:[],version:"current",frontMatter:{title:"WebSocket"},sidebar:"tutorialSidebar",previous:{title:"WireGuard",permalink:"/kinderheim/networking/vpn/wireguard"},next:{title:"Wi-Fi",permalink:"/kinderheim/networking/wifi"}},p={},m=[{value:"Links",id:"links",level:2}],k={toc:m};function h(e){var t=e.components,a=(0,i.Z)(e,n);return(0,o.kt)("wrapper",(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"websocket"},(0,o.kt)("a",{parentName:"h1",href:"https://en.wikipedia.org/wiki/WebSocket"},"WebSocket")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/soketi/soketi"},"soketi"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snapview/tungstenite-rs"},"Tungstenite")," & ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tinyhttp/tinyws"},"tinyws")," are great. ",(0,o.kt)("a",{parentName:"p",href:"https://developers.cloudflare.com/workers/learning/using-websockets/"},"Using WebSockets with Cloudflare Workers")," is awesome."),(0,o.kt)("h2",{id:"links"},"Links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/joewalnes/websocketd"},"websocketd")," - Turn any program that uses STDIN/STDOUT into a WebSocket server. Like inetd, but for WebSockets. (",(0,o.kt)("a",{parentName:"li",href:"http://websocketd.com/"},"Web"),") (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=29656456"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/uNetworking/uWebSockets"},"\xb5WebSockets")," - Simple, secure & standards compliant web I/O for the most demanding of applications."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/uNetworking/uSockets"},"\xb5Sockets")," - Cross-platform async networking and eventing foundation library written in standard C."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/uNetworking/uWebSockets.js"},"\xb5WebSockets")," - JavaScript web server."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/lukeed/sockette"},"Sockette")," - Cutest little WebSocket wrapper."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://hacks.mozilla.org/2019/10/firefoxs-new-websocket-inspector/"},"Firefox\u2019s New WebSocket Inspector (2019)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.blog/2019/12/18/websockets-for-fun-and-profit/"},"WebSockets for fun and profit (2019)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://gbws.io/articles/million-websocket-and-go/"},"Million WebSockets and Go (2017)")," (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=21865715"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Palakis/obs-websocket"},"WebSockets API for OBS Studio")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/vi/websocat"},"websocat")," - Command-line client for WebSockets, like netcat (or curl) for ws:// with advanced socat-like functions."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/facundofarias/awesome-websockets"},"Awesome WebSockets")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/sockjs/sockjs-client"},"SockJS client")," - WebSocket emulation - JS client."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/@stestagg/stealing-secrets-from-developers-using-websockets-254f98d577a0"},"Stealing Secrets from Developers using Websockets (2020)")," (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=23256458"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/lambdaisland/funnel"},"Funnel")," - Transit-over-WebSocket Message Relay."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dcharbonnier/hydrated-ws"},"hydrated-ws")," - Toolbox for websockets clients, reconnecting websockets, channels muxing websockets, authentication, json-rpc over websockets."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/leartgjoni/go-chat-api"},"Chat built in Go using Websockets and Redis Pub/Sub")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/retransmit/prism"},"Retransmit")," - HTTP and WebSockets API Gateway. (",(0,o.kt)("a",{parentName:"li",href:"https://retransmit.io/docs/"},"Docs"),") (",(0,o.kt)("a",{parentName:"li",href:"https://lobste.rs/s/5sm4io/http_websocket_api_gateway"},"Lobsters"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stribny.name/blog/2020/07/real-time-data-streaming-using-fastapi-and-websockets"},"Real-time data streaming using FastAPI and WebSockets (2020)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/osnr/reactions-spreadsheet"},"reactions-spreadsheet")," - Tiny multiplayer spreadsheet where you can react to cells."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.stackbuilders.com/news/strongly-typed-realtime-programming-with-typescript"},"Strongly Typed Realtime Programming with TypeScript (2020)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/theturtle32/WebSocket-Node"},"WebSocket Client & Server Implementation for Node")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://the-guild.dev/blog/graphql-over-websockets"},"GraphQL over WebSockets (2020)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/tatsuhiro-t/wslay"},"Wslay")," - WebSocket library written in C."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/snapview/tungstenite-rs"},"Tungstenite")," - Lightweight stream-based WebSocket implementation for Rust."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/snapview/tokio-tungstenite"},"tokio-tungstenite")," - Asynchronous WebSockets for Tokio stack."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/brendonferreira/golive"},"GoLive")," - Reactive HTML Server Side over WebSockets."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/pladaria/reconnecting-websocket"},"Reconnecting WebSocket")," - Reconnecting WebSocket. For Web, React Native, cli (Node.js)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/websocket-client/websocket-client"},"websocket-client")," - WebSocket client for python."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/aaugustin/websockets"},"websockets")," - Library for building WebSocket servers and clients in Python."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cookie.engineer/weblog/articles/implementers-guide-to-websockets.html"},"Implementer's Guide to WebSockets")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/bradtraversy/chatcord"},"ChatCord App")," - Real time chat app with websockets using Node.js, Express and Socket.io with Vanilla JS on the frontend with a custom UI."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/anephenix/sarus"},"Sarus")," - WebSocket JavaScript library. (",(0,o.kt)("a",{parentName:"li",href:"https://sarus.anephenix.com/"},"Web"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://alistapart.com/article/the-future-of-web-software-is-html-over-websockets/"},"The future of web software is HTML over WebSockets (2021)")," (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=26265999"},"HN"),") (",(0,o.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/coding/comments/lsq2dw/the_future_of_web_software_is_html_over_websockets/"},"Reddit"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Theldus/wsServer"},"wsServer")," - Tiny WebSocket server library written in C."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/pusher/websockets-from-scratch-tutorial"},"WebSockets From Scratch")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.asyncapi.com/blog/websocket-part1"},"WebSocket, Shrek, and AsyncAPI - An Opinionated Intro (2021)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/anycable/anycable-go"},"AnyCable-Go WebSocket Server")," - WebSocket server for AnyCable."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/susam/lab/tree/master/web/sockets"},"From Sockets to WebSockets")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/emulbreh/wscat"},"wscat")," - curl for websockets."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/novnc/websockify"},"websockify")," - WebSocket to TCP proxy/bridge."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ably.com/topic/websockets-vs-http"},"WebSockets vs. HTTP")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/schollz/wscat"},"wscat")," - cat things into a websocket server."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/tinyhttp/tinyws"},"tinyws")," - Tiny WebSocket middleware for Node.js."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/jamsocket/jamsocket"},"Jamsocket")," - Lightweight framework for building WebSocket-based application backends. (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/jamsocket/service-template"},"Template"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ninjasource/embedded-websocket"},"embedded-websocket")," - Lightweight rust websocket library for embedded systems no_std."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/owulveryck/cortical"},"Cortical")," - Browser sends events through websockets, Cortical dispatch them to processing unit, concurently."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://making.close.com/posts/reliable-websockets/"},"How We Improved Reliability of our WebSocket Connections (2021)")," (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=29026740"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/cloudflare/websocket-template"},"Example template for working with the WebSocketPair API in Cloudflare Workers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/websockets/ws"},"ws")," - Simple to use, blazing fast and thoroughly tested WebSocket client and server for Node.js."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/GlebRadchenko/DNWebSocket"},"DNWebSocket")," - WebSocket(RFC-6455) library written using Swift."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/local-first-web/relay"},"localfirst/relay")," - Tiny relay server that bridges two WebSocket connections, allowing the clients to talk directly to each other."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/WebReflection/bidi-sse"},"Bidirectional Server-sent Events")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/miguelgrinberg/python-socketio"},"python-socketio")," - Python Socket.IO server and client."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/jjxxs/websocket-ts"},"websocket-ts")," - Convenient TypeScript-first client-websocket for browsers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/feross/simple-websocket"},"simple-websocket")," - Simple, EventEmitter API for WebSockets."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/yjs/y-websocket"},"y-websocket")," - WebSocket Provider for Yjs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.adama-lang.org/blog/woe-of-websocket/"},"Woe be unto you for using a WebSocket (2021)")," (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=29651447"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://twitter.com/bernhardsson/status/1473784120136421384"},"Are WebSockets the best way to push messages from the backend to web clients (2021)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/xencodes/realsync"},"RealSync")," - Execute Server Functions from Client side. (",(0,o.kt)("a",{parentName:"li",href:"https://xen.codes/execute-async-server-function-from-client-side"},"Article"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/antfu/birpc"},"birpc")," - Message-based two-way remote procedure call."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/alexkrkn/lambda-websocket-client"},"React client for a real time chat app powered by a WebSocket")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ably.com/blog/introducing-the-websocket-handbook"},"The WebSocket Handbook")," (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=29893242"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/erebe/wstunnel"},"wstunnel")," - Tunneling over WebSocket protocol - Static binary available."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/PalindromeLabs/STEWS"},"STEWS")," - Security Tool for Enumerating WebSockets."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/PalindromeLabs/awesome-websocket-security"},"Awesome WebSockets Security")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/joewalnes/reconnecting-websocket"},"ReconnectingWebSocket")," - Small decorator for the JavaScript WebSocket API that automatically reconnects."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fasthttp/websocket"},"Fasthttp Gorilla WebSocket")," - Gorilla WebSocket implementation for fasthttp."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/crossbario/autobahn-testsuite"},"Autobahn|Testsuite")," - Fully automated test suite to verify client and server implementations of The WebSocket Protocol."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dgrr/fastws"},"fastws")," - Fast WebSocket implementation for fasthttp and net/http. Supporting concurrent R/W operations by default."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://germano.dev/sse-websockets/"},"Server-Sent Events: the alternative to WebSockets you should be using (2022)")," (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=30312897"},"HN"),") (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tyrion/sse-websockets-demo"},"Code"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/github/stable-socket"},"StableSocket")," - Web socket that reconnects."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.mnot.net/blog/2022/02/20/websockets"},"Server-Sent Events, WebSockets, and HTTP (2022)")," (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=30403438"},"HN"),") (",(0,o.kt)("a",{parentName:"li",href:"https://lobste.rs/s/x5w6zl/server_sent_events_websockets_http"},"Lobsters"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/libp2p/js-libp2p-websockets"},"js-libp2p-websockets")," - JavaScript implementation of the WebSockets module that libp2p uses and that implements the interface-transport interface."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/golang/comments/td5m22/properly_implement_websockets_with_gokit/"},"Properly implement WebSockets in Go")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/soketi/soketi"},"soketi")," - Simple, fast, and resilient open-source WebSockets server. (",(0,o.kt)("a",{parentName:"li",href:"https://soketi.app/"},"Web"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/deepsourcelabs/nuxt-websocket"},"Nuxt WebSocket")," - Tiny Nuxt.js module for WebSocket interactions."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/PrivateRookie/ws-tool"},"ws-tool")," - Easy to use websocket client/server toolkit, supporting blocking/async IO."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/gopherjs/websocket"},"websocket")," - Provides high and low-level bindings for the browser's WebSocket API."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.ahmadrosid.com/blog/rust-websocket"},"Web Socket for Productivity in Rust (2022)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/gbaranski/ezsockets"},"ezsockets")," - Composable WebSockets made easy, for Rust."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://socket.io/"},"Socket.IO")," - Bidirectional and low-latency communication for every platform. (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/socketio/socket.io"},"Code"),") (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/socketio/socket.io-protocol"},"Spec"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://multiplayer.dev/"},"Realtime | Supabase")," - Offer basically Phoenix Channels and Presence as a service. (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=30992587"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/tarndt/wasmws"},"wasmws")," - WASM Websockets for Go applications."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/rerun-io/ewebsock"},"ewebsock")," - Rust Websocket client that compiles to both native and web."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ThePrimeagen/tyrone-biggums"},"Websocket comparisons")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/websockets/bufferutil"},"bufferutil")," - WebSocket buffer utils."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/observing/thor"},"Thor")," - WebSocket benchmarking/load generator."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/davidpdrsn/axum-typed-websockets"},"Axum Typed WebSockets")," - axum::extract::ws with type safe messages."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/warmcat/libwebsockets"},"Libwebsockets")," - Simple-to-use, pure C library providing client and server for http/1, http/2, websockets, MQTT and other protocols in a security-minded, lightweight, configurable, scalable and flexible way. (",(0,o.kt)("a",{parentName:"li",href:"https://libwebsockets.org/"},"Web"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/karlseguin/websocket.zig"},"Zig WebSocket server"))))}h.isMDXComponent=!0}}]);