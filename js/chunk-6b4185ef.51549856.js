(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b4185ef"],{"0f7d":function(n,o,e){"use strict";e("40fa")},"1dde":function(n,o,e){var a=e("d039"),t=e("b622"),u=e("2d00"),i=t("species");n.exports=function(n){return u>=51||!a((function(){var o=[],e=o.constructor={};return e[i]=function(){return{foo:1}},1!==o[n](Boolean).foo}))}},"1fdb":function(n,o,e){"use strict";var a=function(){var n=this,o=n.$createElement,e=n._self._c||o;return e("v-data-table",{staticClass:"elevation-1",attrs:{headers:n.headers,items:n.desserts,"items-per-page":5,"item-key":"model","show-expand":n.show_expand,expanded:n.expanded},on:{"update:expanded":function(o){n.expanded=o}},scopedSlots:n._u([{key:"expanded-item",fn:function(o){var a=o.headers,t=o.item;return[e("td",{attrs:{colspan:a.length}},[e("div",{staticClass:"table_expand"},n._l(n.expands[t.model],(function(o,a){return e("div",{key:a,staticStyle:{display:"flex","flex-direction":"row"}},[e("div",{staticClass:"section_name"},[n._v(n._s(n._f("capitalize")(a))+":")]),o.toString()===o?e("div",{staticStyle:{display:"inline-block"}},["http"==o.substr(0,4)?e("a",{attrs:{href:o,target:"_blank"}},[n._v(n._s(o))]):e("span",[n._v(n._s(o))])]):e("div",{staticStyle:{display:"inline-block"}},["link"===o["type"]?e("a",{attrs:{href:o["href"],target:"_blank"}},[n._v(n._s(o["text"]))]):n._e()])])})),0)])]}},{key:"item",fn:function(o){var a=o.item,t=o.expand,u=o.isExpanded;return[n.show_expand?e("tr",[e("td",[e("div",{staticStyle:{width:"30px",height:"30px"},on:{click:function(n){return t(!u)}}},[e("svg",u?{staticClass:"expand_icon",attrs:{focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true"}}:{attrs:{focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true"}},[e("path",{attrs:{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}})])])]),n._l(Object.keys(a),(function(o,t){return e("td",{key:t,staticClass:"d-block d-sm-table-cell",staticStyle:{"text-align":"center"}},[n._v(" "+n._s(a[o])+" ")])}))],2):e("tr",{staticClass:"v-data-table__mobile-table-row"},n._l(Object.keys(a),(function(o,t){return e("td",{key:t,staticClass:"v-data-table__mobile-row"},[e("div",{staticClass:"v-data-table__mobile-row__header"},[n._v(n._s(o)+":")]),e("div",{staticClass:"v-data-table__mobile-row__cell"},[n._v(n._s(a[o]))])])})),0)]}}])})},t=[],u=(e("d3b7"),e("25f0"),e("fb6a"),e("466d"),e("ac1f"),{name:"DataTable",data:function(){return{expanded:[],singleExpand:!0,show_expand:!0}},props:{headers:{type:Array},desserts:{type:Array},expands:{type:Object}},filters:{capitalize:function(n){return n?(n=n.toString(),n.charAt(0).toUpperCase()+n.slice(1)):""}},methods:{isMobile:function(){var n=navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);return n}},mounted:function(){this.show_expand=!this.isMobile()}}),i=u,m=(e("0f7d"),e("2877")),d=Object(m["a"])(i,a,t,!1,null,"001ed291",null);o["a"]=d.exports},"25f0":function(n,o,e){"use strict";var a=e("6eeb"),t=e("825a"),u=e("d039"),i=e("ad6d"),m="toString",d=RegExp.prototype,r=d[m],s=u((function(){return"/a/b"!=r.call({source:"a",flags:"b"})})),l=r.name!=m;(s||l)&&a(RegExp.prototype,m,(function(){var n=t(this),o=String(n.source),e=n.flags,a=String(void 0===e&&n instanceof RegExp&&!("flags"in d)?i.call(n):e);return"/"+o+"/"+a}),{unsafe:!0})},"40fa":function(n,o,e){},"6a01":function(n,o,e){"use strict";e("721e")},"721e":function(n,o,e){},8418:function(n,o,e){"use strict";var a=e("c04e"),t=e("9bf2"),u=e("5c6c");n.exports=function(n,o,e){var i=a(o);i in n?t.f(n,i,u(0,e)):n[i]=e}},a812:function(n,o,e){"use strict";e.r(o);var a=function(){var n=this,o=n.$createElement,e=n._self._c||o;return e("div",{staticClass:"full_shape_page"},[e("div",{staticStyle:{"max-width":"1330px",margin:"auto"}},[e("div",{staticClass:"page_header",staticStyle:{color:"black"},attrs:{id:"title"}},[n._v(" The synthetic object-level data-subset ")]),e("div",{staticClass:"page_body"},[e("div",{staticClass:"page_section",staticStyle:{color:"black"}},[n._v(" Leaderboard ")]),e("div",{staticClass:"section_contain"},[e("h3",[n._v(" For metric CD (x0.0001) ")]),e("DataTable",{attrs:{headers:n.headers,desserts:n.desserts_cd,expands:n.expands}})],1),e("div",{staticClass:"section_contain"},[e("h3",[n._v(" For metric F-score (%) ")]),e("DataTable",{attrs:{headers:n.headers,desserts:n.desserts_fs,expands:n.expands}})],1),e("div",{staticClass:"section_contain"},[e("h3",[n._v(" For metric NCS (x0.01) ")]),e("DataTable",{attrs:{headers:n.headers,desserts:n.desserts_ncs,expands:n.expands}})],1),e("div",{staticClass:"section_contain"},[e("h3",[n._v(" For metric NFS (x0.01) ")]),e("DataTable",{attrs:{headers:n.headers,desserts:n.desserts_nfs,expands:n.expands}})],1),e("div",{staticClass:"page_section",staticStyle:{color:"black"}},[n._v(" Evaluation Metrics ")]),n._m(0)])])])},t=[function(){var n=this,o=n.$createElement,e=n._self._c||o;return e("div",{staticClass:"section_contain"},[e("p",[n._v(" We evaluate four metrics for surface reconstruction on the synthetic object-level data-subset, Chamfer Distance ("),e("code",{staticClass:"language-plaintext highlighter-rouge"},[n._v("CD")]),n._v("), F-score, Normal Consistency Score ("),e("code",{staticClass:"language-plaintext highlighter-rouge"},[n._v("NCS")]),n._v("), and Neural Feature Similarity ("),e("code",{staticClass:"language-plaintext highlighter-rouge"},[n._v("NFS")]),n._v("). All the metrics for each algorithm are averaged over all surfaces in the data-subset. ")]),e("p",[n._v(" For "),e("code",{staticClass:"language-plaintext highlighter-rouge"},[n._v("CD")]),n._v(" and "),e("code",{staticClass:"language-plaintext highlighter-rouge"},[n._v("NCS")]),n._v(", we sample "),e("code",[n._v("200000")]),n._v(" points from both the reconstructed and Ground Truth surfaces to perform the evaluation. ")]),e("p",[n._v(" For "),e("code",{staticClass:"language-plaintext highlighter-rouge"},[n._v("F-score")]),n._v(", we sample "),e("code",[n._v("200000")]),n._v(" points from both the reconstructed and Ground Truth surfaces to perform the evaluation and set the threshold as "),e("code",[n._v("0.005")]),n._v(". ")])])}],u=e("1fdb"),i={name:"full_shape",components:{DataTable:u["a"]},data:function(){return{headers:[{text:"Algorithms",value:"model",sortable:!1,align:"center"},{text:"Perfect scanning",value:"unu",sortable:!0,align:"center"},{text:"Non-uniform",value:"non",sortable:!0,align:"center"},{text:"Noise@low",value:"no1",sortable:!0,align:"center"},{text:"Noise@middle",value:"no2",sortable:!0,align:"center"},{text:"Noise@high",value:"no3",sortable:!0,align:"center"},{text:"Outlier@low",value:"ou1",sortable:!0,align:"center"},{text:"Outlier@middle",value:"ou2",sortable:!0,align:"center"},{text:"Outlier@high",value:"ou3",sortable:!0,align:"center"},{text:"Missing@low",value:"md1",sortable:!0,align:"center"},{text:"Missing@middle",value:"md2",sortable:!0,align:"center"},{text:"Missing@high",value:"md3",sortable:!0,align:"center"},{text:"Misalign-ment@low",value:"ma1",sortable:!0,align:"center"},{text:"Misalign-ment@middle",value:"ma2",sortable:!0,align:"center"},{text:"Misalign-ment@high",value:"ma3",sortable:!0,align:"center"}],desserts_cd:[{model:"GD",unu:"14.24",non:"14.87",no1:"16.52",no2:"18.20",no3:"29.73",ou1:"103.77",ou2:"123.19",ou3:"155.98",md1:"44.33",md2:"64.15",md3:"110.74",ma1:"16.68",ma2:"21.15",ma3:"39.49"},{model:"BPA",unu:"14.89",non:"17.13",no1:"16.59",no2:"18.58",no3:"29.30",ou1:"14.41",ou2:"14.66",ou3:"16.15",md1:"50.99",md2:"62.55",md3:"121.59",ma1:"16.61",ma2:"20.88",ma3:"42.46"},{model:"SPSR",unu:"14.47",non:"15.36",no1:"15.50",no2:"16.05",no3:"18.16",ou1:"14.35",ou2:"14.71",ou3:"28.60",md1:"200.72",md2:"225.66",md3:"307.75",ma1:"15.69",ma2:"17.24",ma3:"25.96"},{model:"RIMLS",unu:"15.73",non:"16.74",no1:"16.13",no2:"17.17",no3:"25.88",ou1:"17.52",ou2:"126.40",ou3:"223.90",md1:"48.93",md2:"65.36",md3:"113.44",ma1:"17.42",ma2:"21.12",ma3:"41.12"},{model:"SALD",unu:"15.10",non:"14.96",no1:"15.33",no2:"18.77",no3:"27.59",ou1:"16.83",ou2:"53.65",ou3:"145.05",md1:"40.96",md2:"55.63",md3:"105.23",ma1:"15.50",ma2:"20.09",ma3:"37.16"},{model:"IGR",unu:"18.40",non:"18.33",no1:"18.21",no2:"18.57",no3:"19.20",ou1:"49.11",ou2:"43.60",ou3:"67.25",md1:"94.92",md2:"151.53",md3:"223.64",ma1:"19.65",ma2:"20.72",ma3:"25.98"},{model:"OccNet",unu:"201.96",non:"210.80",no1:"209.04",no2:"205.21",no3:"210.01",ou1:"218.23",ou2:"225.85",ou3:"299.09",md1:"220.23",md2:"231.65",md3:"264.24",ma1:"207.90",ma2:"212.51",ma3:"220.07"},{model:"DeepSDF",unu:"229.18",non:"227.42",no1:"241.28",no2:"230.40",no3:"239.63",ou1:"336.64",ou2:"511.36",ou3:"548.08",md1:"372.86",md2:"378.58",md3:"447.27",ma1:"234.42",ma2:"232.16",ma3:"241.64"},{model:"LIG",unu:"23.09",non:"24.03",no1:"23.96",no2:"22.05",no3:"26.27",ou1:"25.34",ou2:"115.38",ou3:"168.64",md1:"52.27",md2:"70.98",md3:"115.09",ma1:"26.03",ma2:"24.30",ma3:"33.34"},{model:"Points2Surf",unu:"17.18",non:"18.81",no1:"17.74",no2:"18.48",no3:"22.63",ou1:"28.25",ou2:"83.91",ou3:"144.02",md1:"80.84",md2:"102.18",md3:"159.02",ma1:"17.82",ma2:"20.36",ma3:"33.98"},{model:"DSE",unu:"14.26",non:"15.34",no1:"16.07",no2:"17.89",no3:"27.61",ou1:"21.32",ou2:"100.37",ou3:"158.73",md1:"50.11",md2:"68.88",md3:"118.86",ma1:"16.06",ma2:"20.06",ma3:"37.98"},{model:"IMLSNets",unu:"22.56",non:"23.17",no1:"22.64",no2:"22.67",no3:"23.73",ou1:"24.35",ou2:"99.95",ou3:"157.23",md1:"54.93",md2:"74.35",md3:"123.95",ma1:"23.24",ma2:"23.77",ma3:"30.76"},{model:"ParseNet",unu:"162.94",non:"161.14",no1:"154.11",no2:"135.84",no3:"139.97",ou1:"157.15",ou2:"176.38",ou3:"213.48",md1:"187.96",md2:"195.98",md3:"248.70",ma1:"141.95",ma2:"136.86",ma3:"141.87"}],desserts_fs:[{model:"GD",unu:"99.66",non:"99.07",no1:"99.09",no2:"98.91",no3:"91.65",ou1:"69.42",ou2:"54.59",ou3:"48.63",md1:"91.48",md2:"87.72",md3:"80.71",ma1:"98.97",ma2:"97.41",ma3:"73.91"},{model:"BPA",unu:"98.70",non:"97.02",no1:"98.63",no2:"98.51",no3:"89.59",ou1:"99.37",ou2:"99.31",ou3:"98.69",md1:"89.98",md2:"87.85",md3:"78.56",ma1:"98.56",ma2:"97.24",ma3:"68.27"},{model:"SPSR",unu:"99.59",non:"99.02",no1:"99.51",no2:"99.46",no3:"99.16",ou1:"99.67",ou2:"99.65",ou3:"97.14",md1:"81.85",md2:"76.91",md3:"65.41",ma1:"99.42",ma2:"99.27",ma3:"91.99"},{model:"RIMLS",unu:"99.27",non:"98.76",no1:"99.36",no2:"99.24",no3:"94.69",ou1:"98.66",ou2:"57.78",ou3:"19.84",md1:"90.78",md2:"87.92",md3:"81.00",ma1:"98.89",ma2:"97.53",ma3:"74.85"},{model:"SALD",unu:"99.45",non:"99.10",no1:"99.54",no2:"98.94",no3:"92.48",ou1:"98.75",ou2:"88.05",ou3:"59.41",md1:"89.43",md2:"85.78",md3:"76.66",ma1:"99.48",ma2:"98.09",ma3:"75.83"},{model:"IGR",unu:"97.54",non:"97.79",no1:"97.87",no2:"97.75",no3:"97.52",ou1:"95.22",ou2:"91.11",ou3:"81.87",md1:"79.30",md2:"70.49",md3:"56.99",ma1:"97.01",ma2:"96.46",ma3:"92.55"},{model:"OccNet",unu:"31.03",non:"29.90",no1:"29.85",no2:"29.77",no3:"27.92",ou1:"26.43",ou2:"23.75",ou3:"15.11",md1:"25.20",md2:"24.52",md3:"21.68",ma1:"31.23",ma2:"29.19",ma3:"26.42"},{model:"DeepSDF",unu:"17.79",non:"18.81",no1:"16.70",no2:"17.08",no3:"15.99",ou1:"12.10",ou2:"4.15",ou3:"3.07",md1:"15.43",md2:"14.06",md3:"13.73",ma1:"18.36",ma2:"17.05",ma3:"14.63"},{model:"LIG",unu:"96.20",non:"95.32",no1:"94.50",no2:"96.99",no3:"93.80",ou1:"96.48",ou2:"76.69",ou3:"57.33",md1:"86.92",md2:"82.43",md3:"73.88",ma1:"93.80",ma2:"95.01",ma3:"84.50"},{model:"Points2Surf",unu:"98.14",non:"97.72",no1:"98.02",no2:"97.39",no3:"94.21",ou1:"92.69",ou2:"72.94",ou3:"50.56",md1:"81.42",md2:"76.46",md3:"66.68",ma1:"97.98",ma2:"96.49",ma3:"82.90"},{model:"DSE",unu:"99.64",non:"98.84",no1:"99.40",no2:"99.17",no3:"92.75",ou1:"95.13",ou2:"52.21",ou3:"30.82",md1:"90.72",md2:"87.71",md3:"80.19",ma1:"99.29",ma2:"98.20",ma3:"75.07"},{model:"IMLSNets",unu:"94.82",non:"94.51",no1:"94.41",no2:"94.36",no3:"94.40",ou1:"94.78",ou2:"64.55",ou3:"38.53",md1:"83.39",md2:"80.01",md3:"72.60",ma1:"94.18",ma2:"94.14",ma3:"87.44"},{model:"ParseNet",unu:"40.52",non:"38.82",no1:"44.80",no2:"44.13",no3:"42.66",ou1:"41.20",ou2:"37.21",ou3:"34.04",md1:"37.12",md2:"41.28",md3:"41.68",ma1:"44.99",ma2:"46.60",ma3:"43.84"}],desserts_ncs:[{model:"GD",unu:"98.57",non:"98.05",no1:"94.00",no2:"87.58",no3:"68.32",ou1:"94.94",ou2:"92.17",ou3:"86.34",md1:"96.44",md2:"95.17",md3:"93.19",ma1:"94.94",ma2:"84.96",ma3:"65.74"},{model:"BPA",unu:"98.37",non:"97.89",no1:"95.36",no2:"91.68",no3:"77.97",ou1:"98.17",ou2:"98.07",ou3:"97.17",md1:"95.18",md2:"94.42",md3:"91.91",ma1:"96.03",ma2:"90.12",ma3:"71.33"},{model:"SPSR",unu:"98.58",non:"98.38",no1:"97.84",no2:"97.03",no3:"93.89",ou1:"98.61",ou2:"98.56",ou3:"97.87",md1:"91.52",md2:"89.99",md3:"85.91",ma1:"97.99",ma2:"96.24",ma3:"91.86"},{model:"RIMLS",unu:"98.19",non:"97.77",no1:"97.36",no2:"95.23",no3:"86.13",ou1:"97.70",ou2:"83.42",ou3:"67.51",md1:"94.43",md2:"93.27",md3:"90.93",ma1:"96.66",ma2:"92.48",ma3:"79.68"},{model:"SALD",unu:"98.67",non:"98.52",no1:"98.07",no2:"96.42",no3:"88.91",ou1:"98.39",ou2:"95.32",ou3:"89.92",md1:"96.17",md2:"95.19",md3:"91.71",ma1:"98.10",ma2:"94.73",ma3:"86.26"},{model:"IGR",unu:"97.62",non:"97.59",no1:"97.64",no2:"97.52",no3:"97.10",ou1:"96.99",ou2:"96.47",ou3:"94.30",md1:"92.86",md2:"90.61",md3:"87.69",ma1:"97.35",ma2:"97.04",ma3:"95.97"},{model:"OccNet",unu:"79.55",non:"79.30",no1:"79.43",no2:"79.64",no3:"79.05",ou1:"79.33",ou2:"78.55",ou3:"74.60",md1:"78.97",md2:"78.43",md3:"77.10",ma1:"79.08",ma2:"79.58",ma3:"78.69"},{model:"DeepSDF",unu:"78.65",non:"79.11",no1:"78.01",no2:"77.78",no3:"78.52",ou1:"74.65",ou2:"73.40",ou3:"75.85",md1:"74.97",md2:"74.52",md3:"72.29",ma1:"78.59",ma2:"78.12",ma3:"77.69"},{model:"LIG",unu:"96.49",non:"95.79",no1:"93.96",no2:"94.22",no3:"88.26",ou1:"96.81",ou2:"91.66",ou3:"87.75",md1:"91.76",md2:"89.56",md3:"85.37",ma1:"93.98",ma2:"92.70",ma3:"87.32"},{model:"Points2Surf",unu:"95.24",non:"95.09",no1:"94.97",no2:"94.62",no3:"93.44",ou1:"94.04",ou2:"87.87",ou3:"83.17",md1:"88.41",md2:"86.36",md3:"82.05",ma1:"95.14",ma2:"94.48",ma3:"90.33"},{model:"DSE",unu:"98.60",non:"97.86",no1:"94.43",no2:"87.79",no3:"71.39",ou1:"94.98",ou2:"77.34",ou3:"73.29",md1:"95.43",md2:"94.40",md3:"92.49",ma1:"95.13",ma2:"86.20",ma3:"68.12"},{model:"IMLSNets",unu:"96.13",non:"95.98",no1:"96.08",no2:"96.02",no3:"95.62",ou1:"95.75",ou2:"87.45",ou3:"79.76",md1:"92.22",md2:"90.48",md3:"86.66",ma1:"95.93",ma2:"95.87",ma3:"93.84"},{model:"ParseNet",unu:"77.71",non:"76.89",no1:"78.55",no2:"80.31",no3:"81.15",ou1:"77.73",ou2:"75.46",ou3:"75.48",md1:"75.10",md2:"75.83",md3:"74.82",ma1:"78.40",ma2:"80.48",ma3:"79.31"}],desserts_nfs:[{model:"GD",unu:"95.22",non:"95.19",no1:"91.57",no2:"84.63",no3:"56.30",ou1:"57.51",ou2:"37.47",ou3:"30.62",md1:"86.87",md2:"82.93",md3:"75.28",ma1:"92.04",ma2:"80.69",ma3:"51.41"},{model:"BPA",unu:"94.10",non:"93.60",no1:"90.71",no2:"87.49",no3:"65.15",ou1:"96.46",ou2:"93.24",ou3:"82.34",md1:"84.23",md2:"80.36",md3:"70.09",ma1:"91.91",ma2:"81.96",ma3:"59.61"},{model:"SPSR",unu:"96.38",non:"96.22",no1:"95.60",no2:"94.98",no3:"91.99",ou1:"96.69",ou2:"96.31",ou3:"90.02",md1:"74.48",md2:"69.34",md3:"55.89",ma1:"95.58",ma2:"94.28",ma3:"87.03"},{model:"RIMLS",unu:"95.01",non:"94.02",no1:"94.19",no2:"92.67",no3:"79.76",ou1:"92.61",ou2:"62.01",ou3:"24.49",md1:"83.71",md2:"79.23",md3:"69.24",ma1:"92.19",ma2:"87.12",ma3:"68.26"},{model:"SALD",unu:"96.11",non:"96.65",no1:"95.66",no2:"89.72",no3:"67.18",ou1:"83.22",ou2:"51.74",ou3:"34.70",md1:"87.38",md2:"84.01",md3:"73.50",ma1:"95.38",ma2:"88.26",ma3:"63.13"},{model:"IGR",unu:"94.71",non:"94.22",no1:"94.37",no2:"94.52",no3:"93.67",ou1:"90.31",ou2:"84.63",ou3:"74.59",md1:"75.56",md2:"68.14",md3:"56.29",ma1:"93.16",ma2:"92.54",ma3:"90.18"},{model:"OccNet",unu:"47.33",non:"46.55",no1:"46.17",no2:"46.03",no3:"45.04",ou1:"44.29",ou2:"42.11",ou3:"30.77",md1:"44.18",md2:"42.46",md3:"39.09",ma1:"46.75",ma2:"45.80",ma3:"43.73"},{model:"DeepSDF",unu:"39.94",non:"40.91",no1:"38.55",no2:"39.29",no3:"38.70",ou1:"31.69",ou2:"16.65",ou3:"11.92",md1:"33.54",md2:"31.59",md3:"28.93",ma1:"39.31",ma2:"39.26",ma3:"37.39"},{model:"LIG",unu:"91.58",non:"90.66",no1:"86.71",no2:"89.55",no3:"81.03",ou1:"89.40",ou2:"66.21",ou3:"46.81",md1:"80.10",md2:"74.98",md3:"66.64",ma1:"85.20",ma2:"84.34",ma3:"77.92"},{model:"Points2Surf",unu:"93.45",non:"93.23",no1:"92.83",no2:"92.59",no3:"90.21",ou1:"86.59",ou2:"63.30",ou3:"41.44",md1:"74.47",md2:"68.53",md3:"57.08",ma1:"92.96",ma2:"91.59",ma3:"83.19"},{model:"DSE",unu:"94.50",non:"94.75",no1:"90.05",no2:"83.53",no3:"57.08",ou1:"85.39",ou2:"42.32",ou3:"27.29",md1:"85.40",md2:"79.62",md3:"71.06",ma1:"89.87",ma2:"76.63",ma3:"52.40"},{model:"IMLSNets",unu:"90.61",non:"90.20",no1:"90.13",no2:"89.97",no3:"89.66",ou1:"89.16",ou2:"52.82",ou3:"29.13",md1:"79.12",md2:"74.59",md3:"65.23",ma1:"89.68",ma2:"89.19",ma3:"85.55"},{model:"ParseNet",unu:"38.54",non:"37.71",no1:"46.21",no2:"49.30",no3:"49.00",ou1:"38.19",ou2:"35.98",ou3:"34.58",md1:"36.52",md2:"38.40",md3:"35.07",ma1:"44.52",ma2:"45.73",ma3:"45.76"}],expands:{GD:{year:"2004",publication:{type:"link",text:"Cohen-Steiner, David and Da, Frank. A greedy Delaunay-based surface reconstruction algorithm. The visual computer, 2004"}},BPA:{year:"1999",publication:{type:"link",text:"Bernardini, Fausto and Mittleman, Joshua and Rushmeier, Holly and Silva, Claudio and Taubin, Gabriel. The ball-pivoting algorithm for surface reconstruction. IEEE transactions on visualization and computer graphics, 1999"}},SPSR:{year:"2013",publication:{type:"link",text:"Kazhdan, Michael and Hoppe, Hugues. Screened poisson surface reconstruction. ACM Transactions on Graphics (ToG), 2013"}},RIMLS:{year:"2009",publication:{type:"link",text:"Oztireli, A Cengiz and Guennebaud, Gael and Gross, Markus. Feature preserving point set surfaces based on non-linear kernel regression. Computer Graphics Forum, 2009"}},SALD:{year:"2021",publication:{type:"link",text:"Atzmon, Matan and Lipman, Yaron. SALD: Sign Agnostic Learning with Derivatives. International Conference on Learning Representations, 2021."}},IGR:{year:"2020",publication:{type:"link",text:"Gropp, Amos and Yariv, Lior and Haim, Niv and Atzmon, Matan and Lipman, Yaron. Implicit Geometric Regularization for Learning Shapes. Proceedings of Machine Learning and Systems, 2020"}},OccNet:{year:"2019",publication:{type:"link",text:"Mescheder L, Oechsle M, Niemeyer M, et al. Occupancy networks: Learning 3d reconstruction in function space. Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, 2019"}},DeepSDF:{year:"2019",publication:{type:"link",text:"Park J J, Florence P, Straub J, et al. Deepsdf: Learning continuous signed distance functions for shape representation. Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, 2019."}},LIG:{year:"2020",publication:{type:"link",text:"Jiang, Chiyu and Sud, Avneesh and Makadia, Ameesh and Huang, Jingwei and Niessner, Matthias and Funkhouser, Thomas. Local implicit grid representations for 3d scenes. Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, 2020."}},Points2Surf:{year:"2020",publication:{type:"link",text:"Erler, Philipp and Guerrero, Paul and Ohrhallinger, Stefan and Mitra, Niloy J and Wimmer, Michael. Points2Surf Learning Implicit Surfaces from Point Clouds. European Conference on Computer Vision, 2020"}},DSE:{year:"2021",publication:{type:"link",text:"Rakotosaona, Marie-Julie and Guerrero, Paul and Aigerman, Noam and Mitra, Niloy J and Ovsjanikov, Maks. Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, 2021 "}},IMLSNet:{year:"2021",publication:{type:"link",text:"Liu, Shi-Lin and Guo, Hao-Xiang and Pan, Hao and Wang, Peng-Shuai and Tong, Xin and Liu, Yang. Deep Implicit Moving Least-Squares Functions for 3D Reconstruction. Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, 2021"}},ParseNet:{year:"2020",publication:{type:"link",text:"Sharma G, Liu D, Maji S, et al. Parsenet: A parametric surface fitting network for 3d point clouds. European Conference on Computer Vision. Springer, Cham, 2020"}}}}},mounted:function(){document.getElementById("title").scrollIntoView()}},m=i,d=(e("6a01"),e("2877")),r=Object(d["a"])(m,a,t,!1,null,"dbe86072",null);o["default"]=r.exports},e8b5:function(n,o,e){var a=e("c6b6");n.exports=Array.isArray||function(n){return"Array"==a(n)}},fb6a:function(n,o,e){"use strict";var a=e("23e7"),t=e("861d"),u=e("e8b5"),i=e("23cb"),m=e("50c4"),d=e("fc6a"),r=e("8418"),s=e("b622"),l=e("1dde"),c=l("slice"),p=s("species"),h=[].slice,f=Math.max;a({target:"Array",proto:!0,forced:!c},{slice:function(n,o){var e,a,s,l=d(this),c=m(l.length),g=i(n,c),v=i(void 0===o?c:o,c);if(u(l)&&(e=l.constructor,"function"!=typeof e||e!==Array&&!u(e.prototype)?t(e)&&(e=e[p],null===e&&(e=void 0)):e=void 0,e===Array||void 0===e))return h.call(l,g,v);for(a=new(void 0===e?Array:e)(f(v-g,0)),s=0;g<v;g++,s++)g in l&&r(a,s,l[g]);return a.length=s,a}})}}]);