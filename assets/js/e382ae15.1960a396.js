"use strict";(self.webpackChunkkinderheim=self.webpackChunkkinderheim||[]).push([[7010],{3905:function(e,t,i){i.d(t,{Zo:function(){return s},kt:function(){return h}});var r=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function p(e,t){if(null==e)return{};var i,r,a=function(e,t){if(null==e)return{};var i,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},s=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=m(i),h=a,f=u["".concat(l,".").concat(h)]||u[h]||c[h]||n;return i?r.createElement(f,o(o({ref:t},s),{},{components:i})):r.createElement(f,o({ref:t},s))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,o=new Array(n);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var m=2;m<n;m++)o[m]=i[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}u.displayName="MDXCreateElement"},1533:function(e,t,i){i.r(t),i.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return c}});var r=i(7462),a=i(3366),n=(i(7294),i(3905)),o=["components"],p={title:"ActivityPub"},l="[ActivityPub](https://en.wikipedia.org/wiki/ActivityPub)",m={unversionedId:"networking/activitypub",id:"networking/activitypub",title:"ActivityPub",description:"Links",source:"@site/docs/networking/activitypub.md",sourceDirName:"networking",slug:"/networking/activitypub",permalink:"/kinderheim/networking/activitypub",draft:!1,editUrl:"https://github.com/ecioran/kinderheim/docs/networking/activitypub.md",tags:[],version:"current",frontMatter:{title:"ActivityPub"},sidebar:"tutorialSidebar",previous:{title:"Networking",permalink:"/kinderheim/networking/"},next:{title:"Authentication",permalink:"/kinderheim/networking/authentication"}},s={},c=[{value:"Links",id:"links",level:2}],u={toc:c};function h(e){var t=e.components,i=(0,a.Z)(e,o);return(0,n.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"activitypub"},(0,n.kt)("a",{parentName:"h1",href:"https://en.wikipedia.org/wiki/ActivityPub"},"ActivityPub")),(0,n.kt)("h2",{id:"links"},"Links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tinysubversions.com/notes/reading-activitypub/"},"A highly opinionated guide to learning about ActivityPub (2019)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.kyefox.com/2020/04/09/activitypub-could-be-the-future/"},"ActivityPub Could Be The Future (2020)")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=22864029"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://read.as/"},"Read.as")," - Long-form ActivityPub-enabled reader. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/writeas/Read.as"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/alexwennerberg/gourami"},"gourami")," - Intentionally small, lightweight ActivityPub microblogging service. (",(0,n.kt)("a",{parentName:"li",href:"https://lobste.rs/s/n8fcyi/gourami_intentionally_small"},"Lobsters"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://kyefox.com/2020/04/09/activitypub-could-be-the-future/"},"ActivityPub Could Be The Future (2020)")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=23852036"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Plume-org/Plume"},"Plume")," - Federated blogging engine, based on ActivityPub. (",(0,n.kt)("a",{parentName:"li",href:"https://joinplu.me/"},"Web"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://socialhub.activitypub.rocks/t/guide-for-new-activitypub-implementers/479"},"Guide for new ActivityPub implementers (2020)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://epicyon.net/"},"Epicyon")," - ActivityPub protocol compliant federated social network server."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://join-lemmy.org/"},"Lemmy")," - Link aggregator for the fediverse. Alternative to Reddit. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/LemmyNet/lemmy"},"Code"),") (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=23664067"},"HN"),") (",(0,n.kt)("a",{parentName:"li",href:"https://dev.lemmy.ml/communities"},"Communities"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/LemmyNet/lemmy-ui"},"Lemmy UI code"),") (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=28453165"},"HN"),") (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=29266003"},"HN"),") (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=31712332"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/forgefed/forgefed"},"ForgeFed")," - Extension to ActivityPub for web-based Git services federation."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://w3c.github.io/activitypub/"},"ActivityPub spec")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/w3c/activitypub"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://lobste.rs/s/ig0vsd/ask_does_lobster_have_any_plan_join#c_p6gfj9"},"Issues with ActivityPub (2020)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://fediverse.party/en/post/fediverse-in-2020"},"Fediverse in 2020")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=25849533"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://fediverse.party/"},"Fediverse.Party")," - Explore federated networks. (",(0,n.kt)("a",{parentName:"li",href:"https://fediverse.party/en/miscellaneous"},"Explore"),") (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=27009468"},"HN"),") (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=31247145"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://lobste.rs/s/ojnuyg/project_idea_feedback_on_activitypub_for"},'Project idea feedback on "ActivityPub but for sandboxed general purpose computation" (2021)')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://fedidb.org/"},"FediDB")," - Developer Tools for ActivityPub. (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=26539292"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/toddsundsted/ktistec"},"Ktistec")," - Single user ActivityPub Server."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tsileo/microblog.pub"},"microblog.pub")," - Self-hosted, single-user, ActivityPub powered microblog."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/foranetworks/protocol"},"Fora Protocol")," - ActivityPub with governance."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/superseriousbusiness/gotosocial"},"GoToSocial")," - ActivityPub social network server, written in Go."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/go-fed/activity"},"activity")," - Complete ActivityStreams-based ontologies plus middleware handlers implementing ActivityPub in Go."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://fchan.xyz/"},"FChan")," - Federated image board based on ActivityPub. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/FChannel0/FChannel-Server"},"Server"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/misskey-dev/misskey"},"Misskey")," - Alternative Fediverse software that also uses ActivityPub. (",(0,n.kt)("a",{parentName:"li",href:"https://www.paritybit.ca/blog/mastodon-is-dead-long-live-misskey"},"Mastodon Is Dead, Long Live Misskey"),") (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=28994074"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/emilebosch/awesome-fediverse"},"Awesome Fediverse")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/immers-space/immers"},"Immers Server")," - ActivityPub federated social media server for the metaverse."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://deadsuperhero.com/new-fediverse-architecture/"},"Towards a Greater Federated Architecture (2022)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/pubcast/pubcast"},"Pubcast")," - ActivityPub based podcasting platform."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://framatube.org/w/4294a720-f263-4ea4-9392-cf9cea4d5277"},"What Is the Fediverse?")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=31192737"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://hyperspace.marquiskurt.net/"},"Hyperspace")," - Fluffiest client for the Fediverse. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/hyperspacedev"},"GitHub"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/BasixKOR/awesome-activitypub"},"Awesome ActivityPub")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/LemmyNet/activitypub-federation-rust"},"Activitypub-Federation")," - High-level framework for ActivityPub federation in Rust, extracted from Lemmy.")))}h.isMDXComponent=!0}}]);