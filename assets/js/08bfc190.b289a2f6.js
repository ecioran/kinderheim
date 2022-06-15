"use strict";(self.webpackChunkkinderheim=self.webpackChunkkinderheim||[]).push([[1150],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return c}});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),m=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=m(a),c=i,u=h["".concat(s,".").concat(c)]||h[c]||g[c]||n;return a?r.createElement(u,o(o({ref:t},p),{},{components:a})):r.createElement(u,o({ref:t},p))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var m=2;m<n;m++)o[m]=a[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4497:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return g}});var r=a(7462),i=a(3366),n=(a(7294),a(3905)),o=["components"],l={},s="Logging",m={unversionedId:"programming/logging",id:"programming/logging",title:"Logging",description:"Links",source:"@site/docs/programming/logging.md",sourceDirName:"programming",slug:"/programming/logging",permalink:"/kinderheim/programming/logging",draft:!1,editUrl:"https://github.com/ecioran/kinderheim/docs/programming/logging.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"JSON",permalink:"/kinderheim/programming/json"},next:{title:"Logic programming",permalink:"/kinderheim/programming/logic-programming"}},p={},g=[{value:"Links",id:"links",level:2}],h={toc:g};function c(e){var t=e.components,a=(0,i.Z)(e,o);return(0,n.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"logging"},"Logging"),(0,n.kt)("h2",{id:"links"},"Links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/statsd/statsd"},"StatsD")," - Daemon for easy but powerful stats aggregation."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/rapidloop/statsd-vis"},"statsd-vis")," - Standalone StatsD server with built-in visualization."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://opentracing.io/"},"OpenTracing")," - Vendor-neutral APIs and instrumentation for distributed tracing."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.influxdata.com/time-series-platform/telegraf/"},"Telegraf")," - Open source server agent to help you collect metrics from your stacks, sensors and systems. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/influxdata/telegraf"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/rxi/log.c"},"log.c")," - Simple logging library implemented in C99."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://opentelemetry.io/"},"OpenTelemetry")," - Provides a single set of APIs, libraries, agents, and collector services to capture distributed traces and metrics from your application. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/open-telemetry/opentelemetry-specification"},"OpenTelemetry Specification"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/open-telemetry/opentelemetry.io"},"Web Code"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/magsther/awesome-opentelemetry"},"Awesome"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tech.davis-hansson.com/p/tower/"},"The logging framework isn't a bottleneck, and other lies your laptop tells you (2020)")," (",(0,n.kt)("a",{parentName:"li",href:"https://lobste.rs/s/od1ehi/logging_framework_isn_t_bottleneck_other"},"Lobsters"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/elastic/logstash"},"Logstash")," - Transport and process your logs, events, or other data."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/fluent/fluent-bit"},"Fluent Bit")," - Fast Log Processor and Forwarder for Linux, Embedded Linux, MacOS and BSD."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/allinurl/goaccess"},"GoAccess")," - Real-time web log analyzer and interactive viewer that runs in a terminal in ","*","nix systems or through your browser. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/hectorm/docker-goaccess"},"Docker image"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/b/statsd_spec"},"StatsD Metrics Export Specification")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/logpai/loglizer"},"Loglizer")," - Machine learning-based log analysis toolkit for automated anomaly detection."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/wix/DTXLoggingInfra"},"DTXLoggingInfra")," - Logging infrastructure for Apple platforms."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://henrikwarne.com/2020/07/23/good-logging/"},"Good Logging (2020)")," (",(0,n.kt)("a",{parentName:"li",href:"https://lobste.rs/s/d8dk4r/good_logging"},"Lobsters"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://techbeacon.com/enterprise-it/monitoring-demystified-guide-logging-tracing-metrics"},"Monitoring demystified: A guide for logging, tracing, metrics (2020)")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=24006697"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/grafana/metrictank"},"Metrictank")," - Multi-tenant timeseries platform that can be used as a backend or replacement for Graphite."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ksensehq/eventnative"},"EventNative")," - Open-source data collection framework."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/phuslu/log"},"Phuslu/Log")," - Structured Logging for Humans."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.philipotoole.com/logs-and-time-series-are-not-the-same/"},"Logs and Time Series are not the same (2020)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://slack.engineering/tracing-at-slack-thinking-in-causal-graphs/"},"Tracing at Slack: Thinking in Causal Graphs (2020)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/monzo/slog"},"slog")," - Go library for capturing structured log information."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://sematext.com/blog/logging-levels/"},"Logging Levels: What They Are & How to Choose Them")," (",(0,n.kt)("a",{parentName:"li",href:"https://lobste.rs/s/xilpkm/logging_levels_what_they_are_how_choose"},"Lobsters"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/LukeMathWalker/bunyan"},"bunyan-rs")," - CLI to pretty print logs in bunyan format. A Rust port of the original JavaScript bunyan CLI."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://medium.com/whylabs/data-logging-sampling-versus-profiling-96fa8997f5f5"},"Data Logging: Sampling versus Profiling (2020)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://principal-it.eu/2020/11/unit-tests-for-logging/"},"How to Write Unit Tests for Logging (2020)")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=25057372"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/frankdilo/status/1339485218881748992"},"Backend logging options (2020)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/mozilla/glean"},"Glean SDK")," - Modern cross-platform telemetry. (",(0,n.kt)("a",{parentName:"li",href:"https://mozilla.github.io/glean/book/index.html"},"Docs"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://logflare.app/"},"Logflare")," - Cloudflare, Vercel & Elixir Logging. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Logflare/logflare"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/mingrammer/flog"},"Flog")," - Fake log generator for common log formats."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://engineering.backtrace.io/2021-01-11-stuff-your-logs/"},"Stuff your logs (2021)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/JackBister/logsuck"},"Logsuck")," - Easy log aggregation, indexing and searching."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ekanite/ekanite"},"Ekanite")," - High-performance syslog server with built-in text search."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://khashtamov.com/en/ultimate-guide-to-python-logging/"},"The Ultimate Guide To Python Logging (2021)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tuhrig.de/my-logging-best-practices/"},"My Logging Best Practices (2020)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/open-telemetry/opentelemetry-collector"},"OpenTelemetry Collector")," - Offers a vendor-agnostic implementation on how to receive, process and export telemetry data."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://whylabs.ai/blog/posts/data-logging-sampling-versus-profiling"},"Data Logging: Sampling versus Profiling (2020)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pvk.ca/Blog/2021/01/11/stuff-your-logs/"},"Stuff Your Logs (2021)")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=26510530"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.blog/2021-03-25-how-github-actions-renders-large-scale-logs/"},"How GitHub Actions renders large-scale logs (2021)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/grafana/agent"},"Grafana Agent")," - Prometheus Metrics, Loki Logs, and Tempo Traces, optimized for Grafana Cloud."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.blog/2021-05-26-why-and-how-github-is-adopting-opentelemetry/"},"Why and how GitHub is adopting OpenTelemetry (2021)")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=27294890"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://gcollazo.com/logging-is-important/"},"Logging is important (2021)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/PlatformLab/NanoLog"},"NanoLog")," - Extremely performant nanosecond scale logging system for C++ that exposes a simple printf-like API."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/iximiuz/pq"},"pq")," - Parse and Query log files as time series."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/rcoh/angle-grinder"},"angle-grinder")," - Slice and dice log files on the command line."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/nathanieltornow/ostracon"},"Ostracon")," - Distributed \u201cpersistence-first\u201d shared log."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/deref/exo"},"exo")," - Process manager & log viewer for dev. (",(0,n.kt)("a",{parentName:"li",href:"https://exo.deref.io/"},"Web"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/hauxir/errorpush"},"errorpush")," - Minimalist Sentry alternative using PostgreSQL."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://flume.apache.org/"},"Apache Flume")," - Distributed, reliable, and available service for efficiently collecting, aggregating, and moving large amounts of log data. (",(0,n.kt)("a",{parentName:"li",href:"https://tech.marksblogg.com/minimalist-guide-tutorial-flume.html"},"Minimalist Guide to Flume"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/hyperjumptech/monika"},"Monika")," - Command line application to monitor every part of your web app using a simple JSON configuration file. Get alert not only when your site is down but also when it's slow. (",(0,n.kt)("a",{parentName:"li",href:"https://monika.hyperjump.tech/"},"Web"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tuhrig.de/my-logging-best-practices/"},"My Logging Best Practices (2020)")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=28759492"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://uptrace.dev/"},"Uptrace")," - Cost-effective tracing solution that helps you monitor, understand, and optimize complex distributed systems. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/uptrace/uptrace"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://incident.io/blog/tracing"},"Logs and tracing: not just for production, local development too (2021)")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=29187250"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SigmaHQ/sigma"},"Sigma")," - Generic Signature Format for SIEM Systems."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://sobolevn.me/2020/03/do-not-log"},"Do Not Log (2020)")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=29810389"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://dave.autonoma.ca/blog/2022/01/08/logging-code-smell/"},"Logging is a code smell (2022)")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=29869000"},"HN"),") (",(0,n.kt)("a",{parentName:"li",href:"https://lobste.rs/s/lucopv/logging_is_code_smell"},"Lobsters"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.nearform.com/blog/the-cost-of-logging-in-2022/"},"The Cost of Logging in 2022")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tstack/lnav"},"LNAV")," - Log file navigator."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/roma-glushko/tango"},"Tango")," - Tool to get insights from the server access logs."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://blog.twitter.com/engineering/en_us/topics/infrastructure/2021/logging-at-twitter-updated"},"Logging at Twitter (2021)")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=30393683"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://sirupsen.com/metrics"},"Metrics For Your Web Application's Dashboards (2022)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/chmouel/sugarjazy"},"sugarjazy")," - Parse JSON logs nicely."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/buildsghost/status/1508572689820127233"},"Good log management services (2022)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://hannes.robur.coop/Posts/Monitoring"},"All your metrics belong to influx (2022)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/janestreet/magic-trace"},"magic-trace")," - Collects and displays high-resolution traces of what a process is doing. (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=31121319"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/avito-tech/bioyino"},"Bioyino")," - StatsD server written in Rust."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/honeycombio/refinery"},"Refinery")," - Trace-aware sampling proxy. It collects spans emitted by your application, gathers them into traces, and examines them as a whole."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/quadrantsec/sagan"},"Sagan")," - Open source high performance, real-time log analysis & correlation engine.")))}c.isMDXComponent=!0}}]);