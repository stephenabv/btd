"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[125],{9125:function(t,a,c){c.r(a),c.d(a,{default:function(){return g}});var s=c(3396),e=c(7139);const i={class:"container mt-4"},l={class:"row"},n={class:"card"},r=["src"],o={class:"card-body"},d={class:"card-title"},u={class:"card-text"},m={class:"lead"};function h(t,a,c,h,v,f){const p=(0,s.up)("NavbarVue");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(p),(0,s._)("div",i,[(0,s._)("div",l,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(v.items,(t=>((0,s.wg)(),(0,s.iD)("div",{key:t.id,class:"col-sm-6 col-md-4 col-lg-4"},[(0,s._)("div",n,[(0,s._)("img",{src:t.image,alt:"item.name",class:"img-fluid m-3"},null,8,r),(0,s._)("div",o,[(0,s._)("h3",d,(0,e.zw)(t.name),1),(0,s._)("h4",u,"₱"+(0,e.zw)(Number(t.price).toLocaleString()),1),(0,s._)("p",m,(0,e.zw)(t.info),1)])])])))),128))])])])}var v=c(4161),f=c(3982),p={components:{NavbarVue:f.Z},data(){return{items:[]}},methods:{async fetchData(){try{const t=await v.Z.get("http://localhost:3000/api/t-shirt");this.items=t.data}catch(t){console.error(t)}}},mounted(){this.fetchData()}},w=c(89);const _=(0,w.Z)(p,[["render",h],["__scopeId","data-v-bd6e1068"]]);var g=_}}]);
//# sourceMappingURL=125.2d278707.js.map