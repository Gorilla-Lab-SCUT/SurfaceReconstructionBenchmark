(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f5cd282"],{"5d99":function(t,e,s){},dc92:function(t,e,s){"use strict";s("5d99")},f74d:function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{width:"100vw",height:"100vh",margin:"auto"}},[s("div",{staticClass:"introduction_page ",attrs:{id:"title"}},[s("section",{staticClass:"paper section"},[s("h1",{staticStyle:{color:"black","margin-left":"200px"},attrs:{id:"RecSynscene"}},[t._v("Reconstruction results on the Synthetic Data of Scene Surfaces")]),s("div",{staticStyle:{"margin-bottom":"30px"}},[s("div",{staticStyle:{display:"flex",width:"100%","flex-wrap":"wrap","justify-content":"center","padding-left":"200px","padding-right":"200px"}},t._l(t.meshes,(function(e,o){return s("div",{key:o,staticClass:"mesh_line_scene"},[s("div",{ref:"mesh",refInFor:!0,attrs:{data_id:o}},[e["is_show"]?s("div",[s("model-ply",{staticStyle:{height:"600px !important"},attrs:{rotation:t.rotation,lights:t.lights,src:e["src"],backgroundColor:16777215,width:600,height:600,is_pc:e["is_pc"],point_size:1e-5},on:{"on-load":t.onLoad}})],1):s("div",{staticStyle:{width:"600px",height:"600px"}})]),s("div",{staticStyle:{"text-align":"center",width:"100%",height:"30px"}},[t._v(t._s(e["name"]))])])})),0)])])])])},i=[],n=(s("e360"),s("a042")),c={data:function(){return{rotation:{x:0,y:0,z:0},lights:[{type:"HemisphereLight",position:{x:0,y:0,z:-10},skyColor:16777215,groundColor:65793,intensity:1},{type:"DirectionalLight",position:{x:0,y:0,z:10},skyColor:16777215,groundColor:16777215,intensity:.7}],meshes:[{src:"./static/scene/3D_front_Bedroom-515_p90_0.005_pcs.ply",is_pc:!0,name:"Input PC",is_show:!1},{src:"./static/scene/3D_front_Bedroom-515_p90.ply",is_pc:!1,name:"GT",is_show:!1},{src:"./static/scene/3D_front_Bedroom-515_p90_GD.ply",is_pc:!1,name:"GD",is_show:!1},{src:"./static/scene/3D_front_Bedroom-515_p90_BPA.ply",is_pc:!1,name:"BPA",is_show:!1},{src:"./static/scene/3D_front_Bedroom-515_p90_SPSR.ply",is_pc:!1,name:"SPSR",is_show:!1},{src:"./static/scene/3D_front_Bedroom-515_p90_RIMLS.ply",is_pc:!1,name:"RIMLS",is_show:!1},{src:"./static/scene/3D_front_Bedroom-515_p90_SALD.ply",is_pc:!1,name:"SALD",is_show:!1},{src:"./static/scene/3D_front_Bedroom-515_p90_IGR.ply",is_pc:!1,name:"IGR",is_show:!1},{src:"./static/scene/3D_front_Bedroom-515_p90_OccNet.ply",is_pc:!1,name:"OccNet",is_show:!1},{src:"./static/scene/3D_front_Bedroom-515_p90_LIG.ply",is_pc:!1,name:"LIG",is_show:!1},{src:"./static/scene/3D_front_Bedroom-515_p90_Points2Surf.ply",is_pc:!1,name:"Points2Surf",is_show:!1},{src:"./static/scene/3D_front_Bedroom-515_p90_DSE.ply",is_pc:!1,name:"DSE",is_show:!1},{src:"./static/scene/3D_front_Bedroom-515_p90_IMLSNets.ply",is_pc:!1,name:"IMLSNets",is_show:!1}]}},methods:{onLoad:function(){this.rotate()},rotate:function(){this.rotation.z+=1e-4,requestAnimationFrame(this.rotate)},handleScroll:function(){this.lazyLoading()},lazyLoading:function(){for(var t=0;t<this.$refs.mesh.length;t++){var e=this.$refs.mesh[t],s=parseInt(e.attributes["data_id"].value);console.log(document.getElementById("APP_BODY").clientHeight),e.offsetTop>document.getElementById("APP_BODY").scrollTop+document.getElementById("APP_BODY").clientHeight||e.offsetTop+e.offsetHeight<document.getElementById("APP_BODY").scrollTop?this.meshes[s]["is_show"]=!1:this.meshes[s]["is_show"]=!0}console.log(this.meshes)}},components:{ModelPly:n["a"]},mounted:function(){document.getElementById("title").scrollIntoView(),this.lazyLoading(),window.addEventListener("scroll",this.handleScroll,!0)}},r=c,a=(s("dc92"),s("2877")),_=Object(a["a"])(r,o,i,!1,null,null,null);e["default"]=_.exports}}]);