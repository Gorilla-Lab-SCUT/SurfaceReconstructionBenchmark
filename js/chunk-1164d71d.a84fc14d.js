(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1164d71d"],{a38c:function(t,s,i){},a439:function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticStyle:{width:"100vw",height:"100vh",margin:"auto"}},[i("div",{staticClass:"introduction_page ",attrs:{id:"title"}},[i("section",{staticClass:"paper section"},[i("h1",{staticStyle:{color:"black","margin-left":"200px"},attrs:{id:"RecSynscene"}},[t._v("Reconstruction results on the Real-Scanned Data")]),i("div",{staticStyle:{"margin-bottom":"30px"}},[i("div",{staticStyle:{display:"flex",width:"100%","flex-wrap":"wrap","justify-content":"center","padding-left":"200px","padding-right":"200px"}},t._l(t.meshes,(function(s,e){return i("div",{key:e,staticClass:"mesh_line_obj"},[i("div",{ref:"mesh",refInFor:!0,attrs:{data_id:e}},[s["is_show"]?i("div",[i("model-ply",{staticStyle:{height:"300px !important"},attrs:{rotation:t.rotation,lights:t.lights,src:s["src"],width:300,height:300,is_pc:s["is_pc"],point_size:.001},on:{"on-load":t.onLoad}})],1):i("div",{staticStyle:{width:"300px",height:"300px"}})]),i("div",{staticStyle:{"text-align":"center",width:"100%",height:"30px"}},[t._v(t._s(s["name"]))])])})),0)])])])])},a=[],p=(i("e360"),i("a042")),c={data:function(){return{rotation:{x:0,y:0,z:0},lights:[{type:"HemisphereLight",position:{x:1,y:1,z:1},skyColor:16777215,groundColor:0,intensity:1},{type:"DirectionalLight",position:{x:-1,y:-1,z:-1},skyColor:16777215,groundColor:0,intensity:.7}],meshes:[{src:"./static/realobj/tap2_pcd_SPSR_simp.ply",is_pc:!0,name:"Input PC",is_show:!1},{src:"./static/realobj/tap2_pcd_SPSR_simp.ply",is_pc:!1,name:"GT",is_show:!1},{src:"./static/realobj/tap2_pcd_SPSR_simp.ply",is_pc:!0,name:"Input PC",is_show:!1},{src:"./static/realobj/tap2_pcd_SPSR_simp.ply",is_pc:!1,name:"GT",is_show:!1},{src:"./static/realobj/tap2_pcd_SPSR_simp.ply",is_pc:!0,name:"Input PC",is_show:!1},{src:"./static/realobj/tap2_pcd_SPSR_simp.ply",is_pc:!1,name:"GT",is_show:!1},{src:"./static/realobj/tap2_pcd_SPSR_simp.ply",is_pc:!0,name:"Input PC",is_show:!1},{src:"./static/realobj/tap2_pcd_SPSR_simp.ply",is_pc:!1,name:"GT",is_show:!1},{src:"./static/realobj/tap2_pcd_SPSR_simp.ply",is_pc:!0,name:"Input PC",is_show:!1},{src:"./static/realobj/tap2_pcd_SPSR_simp.ply",is_pc:!1,name:"GT",is_show:!1},{src:"./static/realobj/tap2_pcd_SPSR_simp.ply",is_pc:!0,name:"Input PC",is_show:!1},{src:"./static/realobj/tap2_pcd_SPSR_simp.ply",is_pc:!1,name:"GT",is_show:!1},{src:"./static/realobj/tap2_pcd_SPSR_simp.ply",is_pc:!0,name:"Input PC",is_show:!1},{src:"./static/realobj/tap2_pcd_SPSR_simp.ply",is_pc:!1,name:"GT",is_show:!1},{src:"./static/realobj/tap2_pcd_SPSR_simp.ply",is_pc:!0,name:"Input PC",is_show:!1},{src:"./static/realobj/tap2_pcd_SPSR_simp.ply",is_pc:!1,name:"GT",is_show:!1},{src:"./static/realobj/tap2_pcd_SPSR_simp.ply",is_pc:!0,name:"Input PC",is_show:!1},{src:"./static/realobj/tap2_pcd_SPSR_simp.ply",is_pc:!1,name:"GT",is_show:!1},{src:"./static/realobj/tap2_pcd_SPSR_simp.ply",is_pc:!0,name:"Input PC",is_show:!1},{src:"./static/realobj/tap2_pcd_SPSR_simp.ply",is_pc:!1,name:"GT",is_show:!1},{src:"./static/realobj/tap2_pcd_SPSR_simp.ply",is_pc:!0,name:"Input PC",is_show:!1},{src:"./static/realobj/tap2_pcd_SPSR_simp.ply",is_pc:!1,name:"GT",is_show:!1}]}},methods:{onLoad:function(){this.rotate()},rotate:function(){this.rotation.y+=1e-4,requestAnimationFrame(this.rotate)},handleScroll:function(){this.lazyLoading()},lazyLoading:function(){for(var t=0;t<this.$refs.mesh.length;t++){var s=this.$refs.mesh[t],i=parseInt(s.attributes["data_id"].value);console.log(document.getElementById("APP_BODY").clientHeight),s.offsetTop>document.getElementById("APP_BODY").scrollTop+document.getElementById("APP_BODY").clientHeight||s.offsetTop+s.offsetHeight<document.getElementById("APP_BODY").scrollTop?this.meshes[i]["is_show"]=!1:this.meshes[i]["is_show"]=!0}console.log(this.meshes)}},components:{ModelPly:p["a"]},mounted:function(){document.getElementById("title").scrollIntoView(),this.lazyLoading(),window.addEventListener("scroll",this.handleScroll,!0)}},o=c,n=(i("be9f"),i("2877")),_=Object(n["a"])(o,e,a,!1,null,null,null);s["default"]=_.exports},be9f:function(t,s,i){"use strict";i("a38c")}}]);