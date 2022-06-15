"use strict";(self.webpackChunkkinderheim=self.webpackChunkkinderheim||[]).push([[762],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return c}});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),h=p(r),c=i,d=h["".concat(s,".").concat(c)]||h[c]||u[c]||n;return r?a.createElement(d,o(o({ref:t},m),{},{components:r})):a.createElement(d,o({ref:t},m))}));function c(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<n;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3493:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=r(7462),i=r(3366),n=(r(7294),r(3905)),o=["components"],l={title:"WireGuard"},s="[WireGuard](https://openwrt.org/docs/guide-user/services/vpn/wireguard)",p={unversionedId:"networking/vpn/wireguard",id:"networking/vpn/wireguard",title:"WireGuard",description:"Links",source:"@site/docs/networking/vpn/wireguard.md",sourceDirName:"networking/vpn",slug:"/networking/vpn/wireguard",permalink:"/kinderheim/networking/vpn/wireguard",draft:!1,editUrl:"https://github.com/ecioran/kinderheim/docs/networking/vpn/wireguard.md",tags:[],version:"current",frontMatter:{title:"WireGuard"},sidebar:"tutorialSidebar",previous:{title:"VPN",permalink:"/kinderheim/networking/vpn/"},next:{title:"WebSocket",permalink:"/kinderheim/networking/websocket"}},m={},u=[{value:"Links",id:"links",level:2}],h={toc:u};function c(e){var t=e.components,r=(0,i.Z)(e,o);return(0,n.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"wireguard"},(0,n.kt)("a",{parentName:"h1",href:"https://openwrt.org/docs/guide-user/services/vpn/wireguard"},"WireGuard")),(0,n.kt)("h2",{id:"links"},"Links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.wireguard.com/papers/wireguard.pdf"},"WireGuard White Paper")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.wireguard.com/install/"},"WireGuard clients")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/WireGuard/wireguard-go"},"Go Implementation of WireGuard")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://git.zx2c4.com/wireguard-ios"},"WireGuard iOS/macOS apps code")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=19186795"},"HN: WireGuard for MacOS (2019)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/pirate/wireguard-docs"},"Missing Wireguard Documentation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/adrianmihalko/raspberrypiwireguard"},"Install and configure WireGuard on Raspberry Pi (and others)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/cloudflare/boringtun"},"boringtun")," - Implementation of the WireGuard protocol designed for portability and speed."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=21741133"},"HN: WireGuard is in net-next (2019)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=22724768"},"HN: WireGuard 1.0.0 (2020)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://miguelmota.com/blog/getting-started-with-wireguard/"},"Getting Started with WireGuard")," (",(0,n.kt)("a",{parentName:"li",href:"https://lobste.rs/s/zozvm1/getting_started_with_wireguard"},"Lobsters"),") (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=22788584"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tailscale.com/blog/why-not-why-not-wireguard/"},'Why not "Why not WireGuard?" (2020)')," (",(0,n.kt)("a",{parentName:"li",href:"https://lobste.rs/s/y51k7h/why_not_why_not_wireguard"},"Lobsters"),") (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=28897890"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://genneko.github.io/playing-with-bsd/networking/freebsd-wireguard-jail/"},"Building a WireGuard Jail with the FreeBSD's Standard Tools (2020)")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=23004061"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/stellarproject/guard"},"guard")," - GRPC server for managing wireguard tunnels."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/subspacecommunity/subspace"},"Subspace")," - Simple WireGuard VPN server GUI. (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=23243248"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ViRb3/wgcf"},"wgcf")," - Generate WireGuard profile from Cloudflare Warp account."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/WireGuard/comments/gqmnjq/success_stories/"},"Success Wireguard stories?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/WireGuard/wireguard-rs"},"wireguard-rs")," - Rust Implementation of WireGuard."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.eisfunke.com/article/docker-wireguard-systemd.html"},"Simple WireGuard Docker network setup")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=24583512"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/burghardt/easy-wg-quick"},"Create Wireguard configuration for hub and peers with ease")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=24812199"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/naggie/dsnet"},"dsnet")," - Simple command to manage a centralised wireguard VPN."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://gitlab.com/ncmncm/wireguard-bounce-server/"},"Wireguard Bounce Server")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=25447805"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://fly.io/blog/ipv6-wireguard-peering/"},"IPv6 WireGuard Peering (2020)")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=25513828"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/edomora97/wireguard-manager"},"wireguard-manager")," - Build and manage a network of servers that provides a distributed VPN using wireguard."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rachelbythebay.com/w/2020/12/24/wg/"},"WireGuard: great protocol, but skip the Mac app (2020)")," (",(0,n.kt)("a",{parentName:"li",href:"https://lobste.rs/s/ns7pdp/wireguard_great_protocol_skip_mac_app"},"Lobsters"),") (",(0,n.kt)("a",{parentName:"li",href:"https://lists.zx2c4.com/pipermail/wireguard/2020-December/006226.html"},"Response"),") (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=25533263"},"HN"),") (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=25759477"},"HN 2"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/EmbarkStudios/wg-ui"},"WireGuard UI")," - Basic, self-contained management service for WireGuard with a self-serve web UI."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://christine.website/blog/my-wireguard-setup-2021-02-06"},"My Automagic NixOS Wireguard Setup (2021)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/complexorganizations/wireguard-manager"},"WireGuard Manager")," - Self-hosted Wireguard Manager."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/squat/kilo"},"Kilo")," - Multi-cloud network overlay built on WireGuard and designed for Kubernetes. (",(0,n.kt)("a",{parentName:"li",href:"https://kilo.squat.ai/"},"Web"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://fly.io/blog/ssh-and-user-mode-ip-wireguard/"},"SSH and User-mode IP WireGuard (2021)")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=26315695"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/davidsbond/tailscale-controller"},"tailscale-controller")," - Kubernetes controller for managing the installation of Tailscale on individual nodes."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/juanfont/headscale"},"Headscale")," - Open source implementation of the Tailscale coordination server. (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=28572013"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tonarino/innernet"},"innernet")," - Private network system that uses WireGuard under the hood. (",(0,n.kt)("a",{parentName:"li",href:"https://blog.tonari.no/introducing-innernet"},"Article"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apognu/wgctl"},"wgctl")," - WireGuard control utility."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/githubixx/ansible-role-wireguard"},"Ansible Wireguard Role")," - Ansible role for installing WireGuard VPN. Supports Ubuntu, Debian, Archlinx, Fedora and CentOS."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://mediamachine.io/blog/tailscale-on-aws-with-terraform-tutorial/"},"Tutorial: Tailscale on AWS with Terraform (2021)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tailscale.com/blog/2021-06-taildrop-was-easy/"},"Taildrop was kind of easy, actually (2021)")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=27480281"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/wiretrustee/wiretrustee"},"Wiretrustee")," - Connect your devices into a single secure private WireGuard-based mesh network. (",(0,n.kt)("a",{parentName:"li",href:"https://wiretrustee.com/"},"Web"),") (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=27672715"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://utcc.utoronto.ca/~cks/space/blog/sysadmin/WireGuardProvisioningChallenge"},"The WireGuard VPN challenge of provisioning clients (2021)")," (",(0,n.kt)("a",{parentName:"li",href:"https://lobste.rs/s/fynvif/wireguard_vpn_challenge_provisioning"},"Lobsters"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/k4yt3x/wg-meshconf"},"wg-meshconf")," - WireGuard full mesh configuration generator."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://gist.github.com/jc00ke/06ab088b9f889b551ef3fea7b970b97d"},"Tailscale IP address by hostname with jq")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/elghazal-a/autowire"},"Autowire")," - Automatically configure Wireguard interfaces in distributed system. It supports Consul as backend."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://deepsource.io/blog/tailscale-at-deepsource/"},"Tailscale at DeepSource (2021)")," (",(0,n.kt)("a",{parentName:"li",href:"https://lobste.rs/s/fbdiwx/tailscale_at_deepsource"},"Lobsters"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/WeeJeWel/wg-easy"},"WireGuard Easy")," - Easiest way to run WireGuard VPN + Web-based Admin UI."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/firezone/firezone"},"Firezone")," - Open-source WireGuard-based alternative to OpenVPN AS. (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=28683231"},"HN"),") (",(0,n.kt)("a",{parentName:"li",href:"https://www.firezone.dev/"},"Web"),") (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=31539386"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Place1/wg-access-server"},"wg-access-server")," - All-in-one WireGuard VPN solution with a web UI. (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=28719488"},"HN"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/freifunkMUC/wg-access-server"},"Active Fork"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rossedman.io/blog/computers/scale-homelab-with-tailscale/"},"Build A Portable Lab In The Cloud Using Tailscale, Terraform and DigitalOcean (2021)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tailscale/pam"},"Tailscale PAM Module")," - Allows you to SSH using your Tailscale credentials."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/aramperes/onetun"},"onetun")," - Cross-platform, user-space WireGuard port-forwarder that requires no system network configurations. (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=28884938"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://blog.ipfire.org/post/why-not-wireguard"},"Why Not WireGuard (2020)")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=28896351"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/davidsbond/terraform-provider-tailscale"},"Terraform Provider Tailscale")," - Terraform provider implementation for interacting with the Tailscale API."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tailscale.com/kb/1106/taildrop/"},"Taildrop")," - Feature that makes it easy to send files between your personal devices on a Tailscale network."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://blog.thinkst.com/2021/11/building-wiregate-wireguard-front-to.html"},"Building WireGate: A WireGuard front to detect compromised keys (2021)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/gravitl/netmaker"},"Netmaker")," - Platform for creating and managing fast, secure, and dynamic virtual overlay networks using WireGuard. (",(0,n.kt)("a",{parentName:"li",href:"https://netmaker.org/"},"Docs"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/h44z/wg-portal"},"WireGuard Portal")," - WireGuard Configuration Portal with LDAP connection."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/jwhited/wgsd"},"wgsd")," - CoreDNS plugin that provides WireGuard peer information via DNS-SD semantics."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.jordanwhited.com/posts/wireguard-endpoint-discovery-nat-traversal/"},"WireGuard Endpoint Discovery and NAT Traversal using DNS-SD (2020)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/WireGuard/wgctrl-go"},"wgctrl")," - Enables control of WireGuard devices on multiple platforms."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/malcolmseyd/natpunch-go"},"natpunch-go")," - NAT puncher for Wireguard mesh networking."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/IAmStoxe/wirehole"},"WireHole")," - Combination of WireGuard, Pi-hole, and Unbound in a docker-compose project."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/yinheli/udppunch"},"udppunch")," - udp punch for wireguard, inspired by natpunch-go."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://fly.io/blog/our-user-mode-wireguard-year/"},"Our User-Mode WireGuard Year \xb7 Fly (2022)")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=30275905"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/WireGuard/wireguard-linux"},"WireGuard Linux Code")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/costela/wesher"},"wesher")," - WireGuard overlay mesh network manager."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/whitequark/infra-vpn"},"Automation for WireGuard VPN tunnels")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ngoduykhanh/wireguard-ui"},"WireGuard Web UI Code")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/mikeroyal/WireGuard-Guide"},"WireGuard Guide")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/octeep/wireproxy"},"wireproxy")," - Wireguard client that exposes itself as a socks5 proxy or tunnels. (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=30816135"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.procustodibus.com/blog/2022/03/wireguard-dns-config-for-systemd/"},"WireGuard DNS Configuration for Systemd")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=30727893"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/trombik/esp_wireguard"},"esp_wireguard")," - WireGuard Implementation for ESP-IDF."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://kiwiziti.com/~matt/wireguard/"},"You may not need Cloudflare Tunnel. Linux is fine (2022)")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=30953744"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tailscale.com/blog/series-b/"},"Tailscale raises $100M to fix the Internet (2022)")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=31259950"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/HarvsG/WireGuardMeshes"},"Compare WireGuard Mesh Tools")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/kbknapp/wireguard_exporter"},"wireguard_exporter")," - Prometheus exporter for WireGuard."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/angristan/wireguard-install"},"WireGuard installer")," - WireGuard VPN installer for Linux servers.")))}c.isMDXComponent=!0}}]);