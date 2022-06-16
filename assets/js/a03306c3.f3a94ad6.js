"use strict";(self.webpackChunkkinderheim=self.webpackChunkkinderheim||[]).push([[3433],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return c}});var a=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,p=function(e,t){if(null==e)return{};var r,a,p={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var m=a.createContext({}),s=function(e){var t=a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},l=function(e){var t=s(e.components);return a.createElement(m.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,p=e.mdxType,o=e.originalType,m=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(r),c=p,k=u["".concat(m,".").concat(c)]||u[c]||h[c]||o;return r?a.createElement(k,n(n({ref:t},l),{},{components:r})):a.createElement(k,n({ref:t},l))}));function c(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var o=r.length,n=new Array(o);n[0]=u;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:p,n[1]=i;for(var s=2;s<o;s++)n[s]=r[s];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},27342:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return m},default:function(){return c},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return h}});var a=r(87462),p=r(63366),o=(r(67294),r(3905)),n=["components"],i={title:"Prometheus"},m="[Prometheus](https://prometheus.io/)",s={unversionedId:"databases/prometheus",id:"databases/prometheus",title:"Prometheus",description:"Links",source:"@site/docs/databases/prometheus.md",sourceDirName:"databases",slug:"/databases/prometheus",permalink:"/kinderheim/databases/prometheus",draft:!1,editUrl:"https://github.com/ecioran/kinderheim/docs/databases/prometheus.md",tags:[],version:"current",frontMatter:{title:"Prometheus"},sidebar:"tutorialSidebar",previous:{title:"Prisma",permalink:"/kinderheim/databases/prisma"},next:{title:"Redis",permalink:"/kinderheim/databases/redis"}},l={},h=[{value:"Links",id:"links",level:2}],u={toc:h};function c(e){var t=e.components,r=(0,p.Z)(e,n);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prometheus"},(0,o.kt)("a",{parentName:"h1",href:"https://prometheus.io/"},"Prometheus")),(0,o.kt)("h2",{id:"links"},"Links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/thanos-io/thanos"},"Thanos")," - Highly available Prometheus setup with long term storage capabilities.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/vegasbrianc/prometheus"},"Prometheus & Grafana docker-compose stack"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/VictoriaMetrics/VictoriaMetrics"},"VictoriaMetrics")," - High-performance, cost-effective and scalable time series database, long-term remote storage for Prometheus. (",(0,o.kt)("a",{parentName:"p",href:"https://victoriametrics.com/"},"Web"),") (",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/@VictoriaMetrics/first-look-at-perfomance-comparassion-between-influxdb-iox-and-victoriametrics-e590f847935b"},"First look at performance comparison between InfluxDB IOx and VictoriaMetrics"),")")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/cortexproject/cortex"},"Cortex")," - Horizontally scalable, highly available, multi-tenant, long term storage for Prometheus.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/cloudflare/ebpf_exporter"},"Prometheus exporter for custom eBPF metrics"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.rapidloop.com/blog/prometheus-metrics-archiving.html"},"Archiving Prometheus metrics with SOP"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/roaldnefs/awesome-prometheus"},"Awesome Prometheus"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/yolossn/Prometheus-Basics"},"Prometheus Basics")," - Beginner friendly introduction to Prometheus. (",(0,o.kt)("a",{parentName:"p",href:"https://news.ycombinator.com/item?id=23150860"},"HN"),")")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/metalmatze/alertmanager-bot"},"Bot for Prometheus' Alertmanager"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://devopscube.com/setup-prometheus-monitoring-on-kubernetes/"},"How to Setup Prometheus Monitoring On Kubernetes Cluster (2019)"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/jacksontj/promxy"},"Promxy")," - Aggregating proxy to enable HA prometheus.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/ncabatoff/process-exporter"},"process-exporter")," - Prometheus exporter that mines /proc to report on selected processes.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://flightaware.engineering/systems-monitoring-with-prometheus-grafana/"},"Systems Monitoring with Prometheus and Grafana (2020)")," (",(0,o.kt)("a",{parentName:"p",href:"https://news.ycombinator.com/item?id=24126088"},"HN"),")")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://exporterhub.io/"},"ExporterHub")," - Curated List of Prometheus Exporters. (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/NexClipper/exporterhub.io"},"Code"),")")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/nats-io/prometheus-nats-exporter"},"Prometheus NATS Exporter")," - Prometheus exporter for NATS metrics.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/prometheus-community/helm-charts"},"Prometheus Community Kubernetes Helm Charts"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/CrunchyData/postgresql-prometheus-adapter"},"PostgreSQL Prometheus Adapter")," - Remote storage adapter enabling Prometheus to use PostgreSQL as a long-term store for time-series metrics.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://promcat.io/"},"PromCat")," - Resource catalog for enterprise-class Prometheus monitoring.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/inCaller/prometheus_bot"},"Telegram bot for Prometheus alerting"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/prometheus/alertmanager"},"Alertmanager")," - Prometheus Alertmanager.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/siimon/prom-client"},"Prometheus client for node.js"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/prometheus/node_exporter"},"Node exporter")," - Prometheus exporter for hardware and OS metrics exposed by NIX kernels, written in Go with pluggable metric collectors.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenObservability/OpenMetrics"},"OpenMetrics")," - Open standard for transmitting metrics at scale, with support for both text representation and Protocol Buffers. (",(0,o.kt)("a",{parentName:"p",href:"https://openmetrics.io/"},"Web"),")")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/tkestack/kvass"},"Kvass")," - Provides a solution for Prometheus sharding.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://christine.website/blog/prometheus-grafana-loki-nixos-2020-11-20"},"How to Setup Prometheus, Grafana and Loki on NixOS (2020)")," (",(0,o.kt)("a",{parentName:"p",href:"https://lobste.rs/s/cyufgo/how_setup_prometheus_grafana_loki_on"},"Lobsters"),")")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/timescale/promscale"},"Promscale")," - Open-source long-term store for Prometheus data designed for analytics.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/introduction/overview/"},"Prometheus Docs")," (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/prometheus/docs"},"Code"),")")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/samber/awesome-prometheus-alerts"},"Awesome Prometheus Alerts"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://satyanash.net/software/2021/01/04/understanding-prometheus-range-vectors.html"},"Understanding Prometheus Range Vectors (2021)"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/prometheus/exporter-toolkit"},"Prometheus Exporter Toolkit")," - Go library for Prometheus exporters.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/blog/2021/01/08/get-started-with-prometheus-with-these-three-easy-projects/"},"Get started with Prometheus with these three easy projects (2021)"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/chop-dbhi/prometheus-sql"},"Prometheus SQL")," - Service that generates basic metrics for SQL result sets and exposing them as Prometheus metrics.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/m3dbx/prometheus_remote_client_golang"},"promremote")," - Prometheus remote write client written in Go.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/spreadshirt/prometheus-explorer"},"Prometheus Explorer")," - Lightweight metrics explorer for Prometheus, with a focus on on-the-fly analysis. (",(0,o.kt)("a",{parentName:"p",href:"https://lobste.rs/s/tkqcvo/lightweight_metrics_explorer_for"},"Lobsters"),")")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/filodb/FiloDB"},"FiloDB")," - Distributed, Prometheus-compatible, real-time, in-memory, massively scalable, multi-schema time series / event / operational database.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/kube-prometheus"},"kube-prometheus")," - Use Prometheus to monitor Kubernetes and applications running on Kubernetes.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/czerwonk/bird_exporter"},"bird_exporter")," - Metric exporter for bird routing daemon to use with Prometheus.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/burningalchemist/sql_exporter"},"Prometheus SQL Exporter"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://christine.website/blog/aegis-prometheus-2021-04-05"},"Prometheus and Aegis (2021)"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/prymitive/karma"},"karma")," - Alert dashboard for Prometheus Alertmanager.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/cloudflare/pint"},"pint")," - Prometheus rule linter.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://boxkite.ml/en/latest/using/"},"ML data and model drift in Prometheus and Grafana"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://fly.io/blog/measuring-fly/"},"Fly\u2019s Prometheus Metrics")," (",(0,o.kt)("a",{parentName:"p",href:"https://news.ycombinator.com/item?id=27147482"},"HN"),")")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/slok/sloth"},"Sloth")," - Easy and simple Prometheus SLO generator.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/infinityworks/prometheus-example-queries"},"Prometheus Example Queries"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/pyrra-dev/pyrra"},"Pyrra")," - Making SLOs with Prometheus manageable, accessible, and easy to use for everyone.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://blog.timescale.com/blog/a-different-and-often-better-way-to-downsample-your-prometheus-metrics/"},"A different and often better way to downsample your Prometheus metrics (2021)")," (",(0,o.kt)("a",{parentName:"p",href:"https://news.ycombinator.com/item?id=28957501"},"HN"),")")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=2USCcDbbAZc"},"Writing a Prometheus exporter from IDE to deployed in 20 minutes (2021)"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/caarlos0/domain_exporter"},"domain_exporter")," - Exports the expiration time of your domains as prometheus metrics.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/blog/products/operations/introducing-google-cloud-managed-service-for-prometheus"},"Google Cloud Managed Service for Prometheus (2021)")," (",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/rseroter/status/1460309366205153285"},"Tweet"),")")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/GoogleCloudPlatform/prometheus-engine"},"Prometheus Engine for GCP"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/ricoberger/script_exporter"},"script_exporter")," - Prometheus exporter to execute scripts and collect metrics from the output or the exit status.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/piotrkowalczuk/promgrpc"},"promgrpc")," - Prometheus instrumentation library for gRPC powered Go applications.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://clux.github.io/probes/post/2022-01-11-prometheus-ecosystem/"},"Prometheus Stack Review (2022)"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/turbot/steampipe-plugin-prometheus"},"Prometheus Plugin for Steampipe")," - Use SQL to query instances, domains and more from Prometheus.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/prometheus/client_rust"},"Prometheus Rust client library"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/amimof/node-cert-exporter"},"node-cert-exporter")," - Prometheus exporter for x509 certificates written in Go.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://wejick.wordpress.com/2022/01/29/can-i-have-a-smaller-prometheus/"},"Can I have a smaller Prometheus (2022)")," (",(0,o.kt)("a",{parentName:"p",href:"https://lobste.rs/s/mdvdfy/can_i_have_smaller_prometheus"},"Lobsters"),")")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/prometheus-community/ecs_exporter"},"ecs_exporter")," - Prometheus exporter for Amazon Elastic Container Service (ECS).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/chitoku-k/edgerouter-exporter"},"Prometheus exporter for EdgeRouter"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/infracloudio/krius"},"Krius")," - Tool to setup Prometheus, Thanos & friends across multiple clusters easily for scale.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/arriqaaq/scraper"},"Scraper")," - Simple library to scrape and monitor multiple urls and provide prometheus metrics.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/roidelapluie/prometheus-nix-dev"},"Prometheus Development Dev Shell")," - Nix flake to build & run Prometheus.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/cloudworkz/kube-eagle"},"Kube eagle")," - Prometheus exporter created to provide a better overview of your resource allocation and utilization in a Kubernetes cluster.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/oss/mimir/"},"Grafana Mimir")," - Horizontally scalable, highly available, multi-tenant, long-term storage for Prometheus. (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/grafana/mimir"},"Code"),") (",(0,o.kt)("a",{parentName:"p",href:"https://news.ycombinator.com/item?id=30854734"},"HN"),")")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/justwatchcom/sql_exporter"},"Prometheus SQL Exporter")," - Flexible SQL Exporter for Prometheus.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/marigold-dev/prometheus-web"},"prometheus-web")," - Helpers to use the prometheus library with different web frameworks.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/cowprotocol/prometheus-metric-storage"},"Prometheus metric storage")," - Derive macro to instantiate and register prometheus metrics without having to write tons of boilerplate code.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/Lusitaniae/apache_exporter"},"Apache Exporter for Prometheus"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/prometheus/compliance"},"Prometheus Compliance Tests")," - Set of tests to check compliance with various Prometheus interfaces.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/samber/prometheus-query-js"},"prometheus-query")," - JavaScript client for Prometheus query API.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/didi/nightingale"},"Nightingale")," - Enterprise-level cloud-native monitoring system, which can be used as drop-in replacement of Prometheus for alerting and management.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/nghialv/promviz"},"Promviz")," - Visualize the traffic of your clusters in real time from Prometheus data.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/fastly/fastly-exporter"},"Fastly Exporter")," - Prometheus exporter for the Fastly Real-time Analytics API.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/sinkingpoint/prometheus-gravel-gateway"},"Gravel Gateway")," - Prometheus Push Gateway for FAAS applications.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/wywywywy/tesla-prometheus-exporter"},"Tesla Prometheus Exporter"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/lablabs/cloudflare-exporter"},"CloudFlare Prometheus exporter"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/coroot/coroot-node-agent"},"Coroot-node-agent")," - Prometheus exporter based on eBPF that gathers comprehensive container metrics.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/SuperQ/smokeping_prober"},"smokeping_prober")," - Prometheus style smokeping."))))}c.isMDXComponent=!0}}]);