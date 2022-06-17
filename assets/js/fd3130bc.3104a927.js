"use strict";(self.webpackChunkkinderheim=self.webpackChunkkinderheim||[]).push([[4061],{3905:function(e,a,t){t.d(a,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=r.createContext({}),s=function(e){var a=r.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},p=function(e){var a=s(e.components);return r.createElement(c.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(t),d=n,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return t?r.createElement(h,l(l({ref:a},p),{},{components:t})):r.createElement(h,l({ref:a},p))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},86088:function(e,a,t){t.r(a),t.d(a,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return m}});var r=t(87462),n=t(63366),i=(t(67294),t(3905)),l=["components"],o={title:"Load balancing"},c="[Load balancing](<https://en.wikipedia.org/wiki/Load_balancing_(computing)>)",s={unversionedId:"distributed-systems/load-balancing",id:"distributed-systems/load-balancing",title:"Load balancing",description:"Links",source:"@site/docs/distributed-systems/load-balancing.md",sourceDirName:"distributed-systems",slug:"/distributed-systems/load-balancing",permalink:"/kinderheim/distributed-systems/load-balancing",draft:!1,editUrl:"https://github.com/ecioran/kinderheim/docs/distributed-systems/load-balancing.md",tags:[],version:"current",frontMatter:{title:"Load balancing"},sidebar:"tutorialSidebar",previous:{title:"Conflict-free replicated data type",permalink:"/kinderheim/distributed-systems/crdt"},next:{title:"Message queue",permalink:"/kinderheim/distributed-systems/message-queue/"}},p={},m=[{value:"Links",id:"links",level:2}],u={toc:m};function d(e){var a=e.components,t=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"load-balancing"},(0,i.kt)("a",{parentName:"h1",href:"https://en.wikipedia.org/wiki/Load_balancing_(computing)"},"Load balancing")),(0,i.kt)("h2",{id:"links"},"Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/yyyar/gobetween"},"gobetween")," - Modern & minimalistic load balancer for the \u0421loud era."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/github/glb-director"},"GitHub Load Balancer Director (GLB)")," - Set of components that provide a scalable set of stateless Layer 4 load balancer servers capable of line rate packet processing in bare metal datacenter environments, and is used in production to serve all traffic from GitHub's datacenters."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/google/seesaw"},"Seesaw")," - Linux Virtual Server (LVS) based load balancing platform."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/baidu/bfe"},"bfe")," - Open-source layer 7 load balancer derived from proprietary Baidu FrontEnd."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/@bparli/adventures-in-rust-and-load-balancers-73a0bc61a192"},"Adventures in Rust and Load Balancers (2019)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.haproxy.com/user-spotlight-series/inside-the-github-load-balancer/"},"Inside the GitHub Load Balancer (2020)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/thomseddon/traefik-forward-auth"},"Traefik Forward Auth")," - Minimal forward authentication service that provides OAuth/SSO login and authentication for the traefik reverse proxy/load balancer."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/haproxy/haproxy"},"HAProxy")," - Reliable, High Performance TCP/HTTP Load Balancer. (",(0,i.kt)("a",{parentName:"li",href:"http://www.haproxy.org/"},"Web"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.cloudflare.com/high-availability-load-balancers-with-maglev/"},"High Availability Load Balancers with Maglev (2020)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.envoyproxy.io/examining-load-balancing-algorithms-with-envoy-1be643ea121c"},"Examining Load Balancing Algorithms with Envoy (2020)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/bparli/convey"},"Convey")," - Layer 4 load balancer with dynamic configuration loading."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/copyconstruct/status/1293796261414371330"},"Dropbox posts on load balancing")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cristaloleg/awesome-load-balancing"},"Awesome Load Balancing")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/vulcand/vulcand"},"Vulcand")," - Programmatic load balancer backed by Etcd."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=24661903"},"Ask HN: What is an acceptable latency for a web load balancer? (2020)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/dropbox/kglb"},"KgLb")," - L4 a load balancer built on top of linux ip virtual server (ip_vs)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=kpvbOzHUakA"},"Tyler McMullen - Load Balancing is Impossible (2016)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://iximiuz.com/en/posts/traefik-canary-deployments-with-weighted-load-balancing/"},"Traefik: canary deployments with weighted load balancing (2020)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/gojek/weaver"},"Weaver")," - Layer-7 Load Balancer with Dynamic Sharding Strategies. It is a modern HTTP reverse proxy with advanced features."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wtarreau.blogspot.com/2006/11/making-applications-scalable-with-load.html"},"Making applications scalable with Load Balancing (2006)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/metallb/metallb"},"MetalLB")," - Load-balancer implementation for bare metal Kubernetes clusters, using standard routing protocols. (",(0,i.kt)("a",{parentName:"li",href:"https://www.metallb.org/"},"Docs"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.algolia.com/blog/one-year-load-balancing/"},"One Year of Load Balancing (2020)")," (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=25289751"},"HN"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/katran"},"Katran")," - High performance layer 4 load balancer."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/acouvreur/traefik-ondemand-plugin"},"Traefik Ondemand Plugin")," - Traefik plugin to scale containers on demand."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/daperture-load-balancer.html"},"Deterministic Aperture: A distributed, load balancing algorithm (2019)")," (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=25596645"},"HN"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/dhcplb"},"dhcplb")," - Facebook's implementation of a load balancer for DHCP."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/minio/sidekick"},"sidekick")," - High Performance HTTP Sidecar Load Balancer."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.stefan-koch.name/2021/05/02/load-balancing-auto-scaling-open-source-haproxy"},"Load Balancing and Auto Scaling with Open Source HAProxy (2021)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://bparli.medium.com/adventures-in-rust-and-load-balancers-73a0bc61a192"},"Rust and Load Balancers (2019)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/NicolasLM/nucleon"},"Nucleon")," - Dynamic TCP load balancer written in Rust. It has the ability to insert and remove backend servers on the fly."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/v-byte-cpu/wirez"},"wirez")," - Simple socks5 round-robin load balancer."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Netflix/eureka"},"Eureka")," - AWS Service registry for resilient mid-tier load balancing and failover."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://aws.amazon.com/builders-library/using-load-shedding-to-avoid-overload/"},"Using load shedding to avoid overload")," (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=28818622"},"HN"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.setops.co/blog/aws-communism-part-1-how-we-cut-our-load-balancing-cost"},"AWS Communism: How we cut our Load Balancing cost by more than 96% (2021)")," (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=28917947"},"HN"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.manning.com/books/istio-in-action"},"Istio in Action Book (2018)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://faun.pub/testing-client-side-load-balancing-strategies-9d99246d99dc"},"Testing Client-Side Load Balancing Strategies (2021)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=UInZ9yViUS0"},"Load Shedding for Evil Wizards - Tony Allen (2021)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.solo.io/blog/istios-networking-in-depth/"},"Istio's networking: an in-depth look at traffic and architecture (2021)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/steel-load-balancer/slb"},"slb")," - Load-balancer made from steel."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://lafikl.notion.site/A-deep-dive-on-load-balancing-algorithms-4e6211ec7f7846238c38f3819212457c"},"A deep dive on load balancing algorithms")," (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=29252656"},"HN"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/repenno/envoybigbook"},"Envoy Proxy Big Book of Examples")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.solo.io/blog/ebpf-for-service-mesh/"},"eBPF for Service Mesh? Yes, but Envoy Proxy is here to stay (2021)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/samaritan-proxy/samaritan"},"Samaritan")," - Client side L4 or L7 proxy, written in Go, with the aim to provide high availability and load balancing."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ZhiyuanYaoJ/SimLB"},"Data Center Layer-4 Load Balancer Simulator")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ContentSquare/chproxy"},"Chproxy")," - ClickHouse HTTP proxy and load balancer."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/domschrei/mallob"},"Mallob")," - Malleable Load Balancer. Multitasking Agile Logic Blackbox. Award-winning SAT solving for the cloud.")))}d.isMDXComponent=!0}}]);