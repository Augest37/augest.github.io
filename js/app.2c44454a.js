(function(){var e={6126:function(e,t,i){"use strict";var s=i(9242),o=i(3396);const n={class:"header"},a={class:"headlist"},l={key:0,class:"menu",ref:"menu"},c={class:"menu-list"},r=(0,o._)("div",{class:"menu-list-title"},"工具",-1),h=(0,o._)("div",{class:"menu-item"},"app管理",-1),d=(0,o._)("div",{class:"menu-item"},"待定",-1),u=(0,o._)("div",{class:"menu-item"},"待定",-1),p=(0,o._)("div",{class:"header-block"},null,-1),g={class:"view"};function m(e,t,i,m,v,f){const y=(0,o.up)("application-two"),w=(0,o.up)("home"),x=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",n,[(0,o._)("div",a,[(0,o._)("div",{class:"head-item",onClick:t[0]||(t[0]=(...e)=>f.openmenu&&f.openmenu(...e)),id:"menuicon"},[(0,o.Wm)(y,{theme:"filled",size:"22",fill:"#363636"})]),(0,o._)("div",{class:"head-item home",onClick:t[1]||(t[1]=e=>f.goto("/"))},[(0,o.Wm)(w,{class:"homeicon",theme:"filled",size:"22",fill:"#363636"})])]),(0,o.Wm)(s.uT,{name:"fade-slide"},{default:(0,o.w5)((()=>[v.menuisshow?((0,o.wg)(),(0,o.iD)("div",l,[(0,o._)("div",c,[r,h,(0,o._)("div",{class:"menu-item",onClick:t[2]||(t[2]=e=>f.goto("/tools/bulidanswersheet"))},"答题卡生成"),d,u])],512)):(0,o.kq)("",!0)])),_:1})]),p,(0,o._)("div",g,[(0,o.Wm)(x)])],64)}i(7658);var v=i(3644),f=i(1784),y={name:"App",data(){return{menuisshow:!1}},components:{ApplicationTwo:v.Z,Home:f.Z},mounted(){},unmounted(){document.removeEventListener("click",this.closemenu),console.log("销毁")},methods:{goto(e){this.$router.push(e),this.menuisshow=!1,document.removeEventListener("click",this.closemenu),console.log("销毁")},openmenu(){this.menuisshow?(this.menuisshow=!1,document.removeEventListener("click",this.closemenu),console.log("销毁")):(this.menuisshow=!0,document.addEventListener("click",this.closemenu),console.log("添加成功"))},closemenu(e){const t=document.getElementById("menuicon");t.contains(e.target)||this.$refs.menu.contains(e.target)||1==this.menuisshow&&(this.menuisshow=!1,document.removeEventListener("click",this.closemenu),console.log("销毁"))}}},w=i(89);const x=(0,w.Z)(y,[["render",m]]);var C=x,k=i(2483);const _={class:"hello"},b=(0,o._)("h1",null,"hello, world",-1);function P(e,t,i,s,n,a){return(0,o.wg)(),(0,o.iD)("div",_,[b,(0,o._)("button",{class:"button1",type:"primary",onClick:t[0]||(t[0]=e=>a.tiaoZhuan())},"点击回家")])}var W={name:"HelloWorld",methods:{tiaoZhuan(){this.$router.push("/home")}}};const D=(0,w.Z)(W,[["render",P]]);var T=D;const $=(0,o._)("h1",null,"Welcome to Home!",-1),z=[$];function L(e,t,i,s,n,a){return(0,o.wg)(),(0,o.iD)("div",null,z)}var I={name:"Home"};const Z=(0,w.Z)(I,[["render",L]]);var E=Z,M=i(7139);const X={key:0,class:"cover"},Y=(0,o._)("div",{class:"obscure-bg"},[(0,o.Uk)("答题卡生成 "),(0,o._)("div",{class:"title"},"答 题 卡 生 成")],-1),H={class:"filename"},O=["id"],F=["src"];function A(e,t,i,n,a,l){const c=(0,o.up)("file-pdf-one"),r=(0,o.up)("check-one"),h=(0,o.up)("close-one"),d=(0,o.up)("sliding-horizontal"),u=(0,o.up)("edit-tools-box");return(0,o.wg)(),(0,o.iD)("div",{class:"sheeteditor",style:(0,M.j5)({height:a.clientHeight+"px"})},[(0,o._)("input",{type:"file",ref:"uploadpdf",onChange:t[0]||(t[0]=(...e)=>l.handleFileChange&&l.handleFileChange(...e)),accept:".pdf",style:{display:"none"}},null,544),a.canvasVisible?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",X,[Y,(0,o._)("div",{class:"start-btn",onClick:t[1]||(t[1]=(...e)=>l.clickuploadpdf&&l.clickuploadpdf(...e))},"点 击 上 传")])),a.canvasVisible?((0,o.wg)(),(0,o.iD)("div",{key:1,onClick:t[2]||(t[2]=(...e)=>l.clickuploadpdf&&l.clickuploadpdf(...e)),class:"filenameview"},[(0,o.Wm)(c,{theme:"filled",size:"22",fill:"#363636",strokeWidth:1}),(0,o._)("div",H,(0,M.zw)(a.filename),1)])):(0,o.kq)("",!0),a.canvasVisible?((0,o.wg)(),(0,o.iD)("div",{key:2,class:"canvasbox",style:(0,M.j5)({height:a.clientHeight-40+"px"}),ref:"canvasbox"},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.pdfPages,(e=>(0,o.wy)(((0,o.wg)(),(0,o.iD)("canvas",{onMousedown:t[3]||(t[3]=e=>l.MoDown(e)),onMousemove:t[4]||(t[4]=e=>l.MoMove(e)),onMouseup:t[5]||(t[5]=(...e)=>l.MoUp&&l.MoUp(...e)),id:"canvas"+e,key:e,ref_for:!0,ref:"pdfcanvas"},null,40,O)),[[s.F8,e==a.pageNum]]))),128)),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.images,((e,i)=>((0,o.wg)(),(0,o.iD)("div",{class:"dragged-image",key:i,onMousedown:t[11]||(t[11]=e=>l.dragimgdown(e)),onMouseup:t[12]||(t[12]=(...e)=>l.dragimgup&&l.dragimgup(...e)),ref_for:!0,ref:`image-${i}`},[(0,o._)("img",{draggable:"false",src:e,width:"150"},null,8,F),(0,o.Wm)(r,{theme:"outline",size:"22",fill:"#7ed321",strokeWidth:2,style:{position:"absolute",right:"-11px",top:"-9px"},onClick:e=>l.darwimg(i),onMousedown:t[6]||(t[6]=(0,s.iM)((e=>e.stopPropagation()),["prevent"])),onMouseup:t[7]||(t[7]=e=>e.stopPropagation())},null,8,["onClick"]),(0,o.Wm)(h,{theme:"outline",size:"22",fill:"#d0021b",strokeWidth:2,style:{position:"absolute",right:"-11px",top:"24px"},onClick:e=>l.delimg(i),onMousedown:t[8]||(t[8]=(0,s.iM)((e=>e.stopPropagation()),["prevent"])),onMouseup:t[9]||(t[9]=e=>e.stopPropagation())},null,8,["onClick"]),(0,o.Wm)(d,{theme:"outline",size:"22",fill:"#555",strokeWidth:2,style:{position:"absolute",right:"-11px",bottom:"-9px"},onMousedown:(0,s.iM)((e=>l.resizeImgStart(e,i)),["prevent"]),onMousemove:t[10]||(t[10]=e=>e.stopPropagation()),onMouseup:l.stopResize},null,8,["onMousedown","onMouseup"])],32)))),128))],4)):(0,o.kq)("",!0),a.canvasVisible?((0,o.wg)(),(0,o.j4)(u,{key:3})):(0,o.kq)("",!0)],4)}var q=i(8003),j=i(626),R=i(65),N=i(2340),S=i(2013),V=i(6437),B=i(7333),U=i(235),K=i(1164),G=i(5058);const J=e=>((0,o.dD)("data-v-fbe42838"),e=e(),(0,o.Cn)(),e),Q={class:"touch-toolsbox"},ee={class:"toolsbox",ref:"toolsbox"},te={class:"edit-group"},ie={key:0,class:"text-editbox"},se={key:0,class:"pic-editbox"},oe={class:"pics"},ne={key:0,class:"text-editbox"},ae=J((()=>(0,o._)("input",{type:"text",value:"宋体"},null,-1))),le=J((()=>(0,o._)("input",{type:"text",value:"25"},null,-1))),ce={key:0,class:"edit-group zoom"},re={class:"word-view"},he={key:1,class:"edit-group pag"},de={class:"word-view"},ue={class:"edit-group"},pe=J((()=>(0,o._)("div",{class:"textinput",style:{display:"none"}},[(0,o._)("textarea",{id:"edit-textarea"},"\n    ")],-1)));function ge(e,t,i,s,n,a){const l=(0,o.up)("move-one"),c=(0,o.up)("pencil"),r=(0,o.up)("high-light"),h=(0,o.up)("rectangle-one"),d=(0,o.up)("picture-one"),u=(0,o.up)("text-style"),p=(0,o.up)("undo"),g=(0,o.up)("zoom-in"),m=(0,o.up)("zoom-out"),v=(0,o.up)("left"),f=(0,o.up)("right"),y=(0,o.up)("download"),w=(0,o.up)("drag");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",Q,[(0,o._)("div",ee,[(0,o._)("div",te,[(0,o._)("div",{id:"move",class:(0,M.C_)(["move"==e.type?"edit-item active":"edit-item"]),onClick:t[0]||(t[0]=t=>e.switchtools(t))},[(0,o.Wm)(l,{theme:"outline",size:"25",fill:"#eee",strokeWidth:1})],2),(0,o._)("div",{id:"pencil",class:(0,M.C_)(["pencil"==e.type?"edit-item active":"edit-item"]),onClick:t[8]||(t[8]=t=>e.switchtools(t))},[(0,o.Wm)(c,{theme:"outline",size:"25",fill:"#eee",strokeWidth:1}),"pencil"==e.type?((0,o.wg)(),(0,o.iD)("div",ie,[(0,o._)("div",{class:"color-item black",onClick:t[1]||(t[1]=t=>e.getPenColor(t,"#000"))}),(0,o._)("div",{class:"color-item red",onClick:t[2]||(t[2]=t=>e.getPenColor(t,"#f00"))}),(0,o._)("div",{class:"color-item orange",onClick:t[3]||(t[3]=t=>e.getPenColor(t,"#ffa500"))}),(0,o._)("div",{class:"color-item yellow",onClick:t[4]||(t[4]=t=>e.getPenColor(t,"#ff0"))}),(0,o._)("div",{class:"color-item green",onClick:t[5]||(t[5]=t=>e.getPenColor(t,"#90ee90"))}),(0,o._)("div",{class:"color-item blue",onClick:t[6]||(t[6]=t=>e.getPenColor(t,"#87ceeb"))}),(0,o._)("input",{type:"range",value:"2",max:"15",onChange:t[7]||(t[7]=(...t)=>e.changePenWidth&&e.changePenWidth(...t)),id:"penWidth-range"},null,32)])):(0,o.kq)("",!0)],2),(0,o._)("div",{id:"highlight",class:(0,M.C_)(["highlight"==e.type?"edit-item active":"edit-item"]),onClick:t[9]||(t[9]=t=>e.switchtools(t))},[(0,o.Wm)(r,{theme:"outline",size:"25",fill:"#eee",strokeWidth:1})],2),(0,o._)("div",{id:"rect",class:(0,M.C_)(["rect"==e.type?"edit-item active":"edit-item"]),onClick:t[10]||(t[10]=t=>e.switchtools(t))},[(0,o.Wm)(h,{theme:"outline",size:"25",fill:"#eee",strokeWidth:1})],2),(0,o._)("div",{id:"pic",class:(0,M.C_)(["pic"==e.type?"edit-item active":"edit-item"]),onClick:t[15]||(t[15]=t=>e.switchtools(t))},[(0,o.Wm)(d,{theme:"outline",size:"25",fill:"#eee",strokeWidth:1}),"pic"==e.type?((0,o.wg)(),(0,o.iD)("div",se,[(0,o._)("div",oe,[(0,o._)("img",{src:"sheeteditorimg\\img1.jpg",onClick:t[11]||(t[11]=t=>e.selectimg(t))}),(0,o._)("img",{src:"sheeteditorimg\\img2.jpg",onClick:t[12]||(t[12]=t=>e.selectimg(t))}),(0,o._)("img",{src:"sheeteditorimg\\img1.png",onClick:t[13]||(t[13]=t=>e.selectimg(t))}),(0,o._)("img",{src:"sheeteditorimg\\img1.jpg",onClick:t[14]||(t[14]=t=>e.selectimg(t))})])])):(0,o.kq)("",!0)],2),(0,o._)("div",{id:"text",class:(0,M.C_)(["text"==e.type?"edit-item active":"edit-item"]),onClick:t[22]||(t[22]=t=>e.switchtools(t)),style:{display:"none"}},[(0,o.Wm)(u,{theme:"outline",size:"25",fill:"#eee",strokeWidth:1}),"text"==e.type?((0,o.wg)(),(0,o.iD)("div",ne,[(0,o._)("div",{class:"color-item black active",onClick:t[16]||(t[16]=t=>e.getTextColor(t,"#000"))}),(0,o._)("div",{class:"color-item red",onClick:t[17]||(t[17]=t=>e.getTextColor(t,"#f00"))}),(0,o._)("div",{class:"color-item orange",onClick:t[18]||(t[18]=t=>e.getTextColor(t,"#ffa500"))}),(0,o._)("div",{class:"color-item yellow",onClick:t[19]||(t[19]=t=>e.getTextColor(t,"#ff0"))}),(0,o._)("div",{class:"color-item green",onClick:t[20]||(t[20]=t=>e.getTextColor(t,"#90ee90"))}),(0,o._)("div",{class:"color-item blue",onClick:t[21]||(t[21]=t=>e.getTextColor(t,"#87ceeb"))}),ae,le])):(0,o.kq)("",!0)],2),(0,o._)("div",{class:"edit-item",onClick:t[23]||(t[23]=(...t)=>e.$parent.retrue&&e.$parent.retrue(...t))},[(0,o.Wm)(p,{theme:"outline",size:"25",fill:"#eee",strokeWidth:1})])]),e.$parent.canvasVisible?((0,o.wg)(),(0,o.iD)("div",ce,[(0,o._)("div",{class:"edit-item",onClick:t[24]||(t[24]=(...t)=>e.$parent.scaleD&&e.$parent.scaleD(...t))},[(0,o.Wm)(g,{theme:"outline",size:"25",fill:"#eee",strokeWidth:1})]),(0,o._)("div",{class:"edit-item",onClick:t[25]||(t[25]=(...t)=>e.$parent.scaleX&&e.$parent.scaleX(...t))},[(0,o.Wm)(m,{theme:"outline",size:"25",fill:"#eee",strokeWidth:1})]),(0,o._)("div",re,(0,M.zw)(parseInt(100*e.$parent.scaleCount))+"% ",1)])):(0,o.kq)("",!0),e.$parent.canvasVisible?((0,o.wg)(),(0,o.iD)("div",he,[(0,o._)("div",{class:"edit-item",onClick:t[26]||(t[26]=(...t)=>e.$parent.prePage&&e.$parent.prePage(...t))},[(0,o.Wm)(v,{theme:"outline",size:"25",fill:"#eee",strokeWidth:1})]),(0,o._)("div",de,(0,M.zw)(e.$parent.pageNum)+" / "+(0,M.zw)(e.$parent.pdfPages),1),(0,o._)("div",{class:"edit-item",onClick:t[27]||(t[27]=(...t)=>e.$parent.nextPage&&e.$parent.nextPage(...t))},[(0,o.Wm)(f,{theme:"outline",size:"25",fill:"#eee",strokeWidth:1})])])):(0,o.kq)("",!0),(0,o._)("div",ue,[(0,o._)("div",{class:"edit-item",onClick:t[28]||(t[28]=(...t)=>e.$parent.saveEditedImage&&e.$parent.saveEditedImage(...t))},[(0,o.Wm)(y,{theme:"outline",size:"25",fill:"#eee",strokeWidth:1})])]),(0,o._)("div",{class:"box-drag",onMousedown:t[29]||(t[29]=t=>e.dragdown(t)),onMouseup:t[30]||(t[30]=(...t)=>e.dragup&&e.dragup(...t))},[(0,o.Wm)(w,{theme:"outline",size:"25",fill:"#aaa",strokeWidth:1})],32)],512)]),pe],64)}var me=i(9524),ve=i(1795),fe=i(1070),ye=i(4856),we=i(5718),xe=i(2576),Ce=i(650),ke=i(7609),_e=i(8579),be=i(4920),Pe=(0,o.aZ)({data(){return{type:"move",draged:!1,disx:0,disy:0,textColor:"#000",draggedImage:null}},components:{ZoomIn:me.Z,ZoomOut:ve.Z,Pencil:j.Z,Undo:R.Z,RectangleOne:N.Z,MoveOne:fe.Z,HighLight:ye.Z,Left:we.Z,Right:xe.Z,Drag:Ce.Z,Download:ke.Z,TextStyle:_e.Z,PictureOne:be.Z},directives:{drag(e,t){e.onmousedown=function(t){var i=t.pageX-e.offsetLeft,s=t.pageY-e.offsetTop;document.onmousemove=function(t){console.log(t.pageX,t.pageY),e.style.left=t.pageX-i+"px",e.style.top=t.pageY-s+"px"},document.onmouseup=function(){document.onmousemove=document.onmouseup=null}}}},methods:{switchtools(e){this.type=e.currentTarget.id,this.$parent.data_style=this.type},dragdown(e){this.draged=!0;const t=this.$refs.toolsbox;document.addEventListener("mousemove",this.dragmove),this.disx=e.pageX-t.offsetLeft,this.disy=e.pageY-t.offsetTop},dragup(){this.draged=!1;this.$refs.toolsbox;document.removeEventListener("mousemove",this.dragmove)},dragmove(e){if(1==this.draged){const t=this.$refs.toolsbox;t.style.left=e.pageX-this.disx+"px",t.style.top=e.pageY-this.disy+"px"}},getTextColor(e,t){let i=document.querySelectorAll(".color-item"),s=e.currentTarget;i.forEach((e=>e.classList.remove("active"))),s.classList.add("active"),this.textColor=t;let o=document.getElementById("edit-textarea");o.style.color=this.textColor},getPenColor(e,t){let i=document.querySelectorAll(".color-item"),s=e.currentTarget;i.forEach((e=>e.classList.remove("active"))),s.classList.add("active"),this.$parent.penColor=t},changePenWidth(){const e=document.getElementById("penWidth-range");console.log(e.value),this.$parent.penWidth=parseInt(e.value)},selectimg(e){var t=e.currentTarget;console.log(t.src),console.log(this.$parent.images),this.$parent.images.push(t.src),console.log(this.$parent.images)}}});const We=(0,w.Z)(Pe,[["render",ge],["__scopeId","data-v-fbe42838"]]);var De=We,Te={data(){return{images:[],data_style:"move",canvasVisible:!1,pdfDoc:null,pageNum:1,penColor:"#000",hlpenColor:"#000",penWidth:4,hlpenWidth:20,penClick:!1,startAxisX:0,startAxisY:0,controlPointX:0,controlPointY:0,points:[],beginPoint:{x:0,y:0},history:[],historys:[],canvas:null,ctx:null,undo:!1,pdfPages:0,scaleCount:.8,widthTemp:0,heightTemp:0,clientHeight:document.documentElement.clientHeight-145,draged:!1,disx:0,disy:0,canvasX:0,canvasY:0,filename:"",draggedImageDom:null}},components:{Pencil:j.Z,Undo:R.Z,RectangleOne:N.Z,LeftOne:S.Z,RightOne:V.Z,EditToolsBox:De,FilePdfOne:B.Z,CloseOne:U.Z,CheckOne:K.Z,SlidingHorizontal:G.Z},mounted(){window.onresize=()=>{this.clientHeight=document.documentElement.clientHeight-145}},methods:{resizeImgStart(e,t){e.stopPropagation();const i=this.$refs[`image-${t}`][0];this.draggedImageDom=i.querySelector("img"),this.disx=e.pageX,this.disy=this.draggedImageDom.width,window.addEventListener("mousemove",this.imgResize),window.addEventListener("mouseup",this.stopResize)},imgResize(e){this.draggedImageDom&&(this.draggedImageDom.width=this.disy+e.pageX-this.disx)},stopResize(e){e.stopPropagation(),this.disx=0,this.disy=0,this.draggedImageDom=null,window.removeEventListener("mousemove",this.imgResize),window.removeEventListener("mouseup",this.stopResize)},darwimg(e){const t=this.$refs[`image-${e}`][0],i=t.querySelector("img");console.log(i.width);var s=t.offsetLeft,o=t.offsetTop;this.drop(i,s,o),this.delimg(e)},delimg(e){this.images.splice(e,1)},dragimgdown(e){const t=e.currentTarget;this.draggedImageDom=t,t.left=0,t.top=0,window.addEventListener("mousemove",this.dragimgmove),this.disx=e.pageX-t.offsetLeft,this.disy=e.pageY-t.offsetTop},dragimgmove(e){if(this.draggedImageDom){const t=this.draggedImageDom;this.ctx;t.style.left=e.pageX-this.disx+"px",t.style.top=e.pageY-this.disy+"px"}},dragimgup(){this.draggedImageDom;window.removeEventListener("mousemove",this.dragimgmove),this.draggedImageDom=null},drop(e,t,i){const s=this.canvas,o=this.$refs.canvasbox,n=this.ctx;var a=o.scrollTop,l=o.scrollLeft;console.log(a,l);const c=s.offsetLeft,r=s.offsetTop,h=t-c+22,d=i-r+22;console.log(h,d,e.width),n.drawImage(e,h/this.scaleCount,d/this.scaleCount,e.width/this.scaleCount,e.height/this.scaleCount),this.addHistoy()},clickuploadpdf(){this.$refs.uploadpdf.click()},handleFileChange(){this.loadPDF()},async loadPDF(e){q.GlobalWorkerOptions.workerSrc=i(3912);const t=this.$refs.uploadpdf,s=t.files[0];if(s){this.filename=s.name,this.historys=[];const e=new FileReader;this.canvasVisible=!0,e.onload=async e=>{const t=q.getDocument({data:e.target.result});t.promise.then((e=>{this.pdfDoc=e,this.pdfPages=this.pdfDoc.numPages,this.$nextTick((()=>{this.renderPage(this.pageNum)}))}))},e.readAsArrayBuffer(s)}},nextPage(){this.pageNum<this.pdfPages&&this.pageNum++,this.canvas=document.getElementById("canvas"+this.pageNum),this.ctx=this.canvas.getContext("2d"),this.canvas.style.left=this.canvasX,this.canvas.style.top=this.canvasY},prePage(){this.pageNum>1&&this.pageNum--,this.canvas=document.getElementById("canvas"+this.pageNum),this.ctx=this.canvas.getContext("2d"),this.canvas.style.left=this.canvasX,this.canvas.style.top=this.canvasY},renderPage(e){this.historys.push([]);var t="canvas"+e;const i=document.getElementById(t);this.canvas=i;const s=i.getContext("2d");this.ctx=s;const o=this.pdfDoc.getPage(e);o.then((t=>{var o=t.getViewport({scale:1}).width,n=3068/o;o<t.getViewport({scale:1}).height&&(n=1654/o);const a=t.getViewport({scale:n});this.canvas.style.height=a.height*this.scaleCount+"px",this.heightTemp=a.height,this.canvas.height=a.height,this.canvas.style.width=a.width*this.scaleCount+"px",this.widthTemp=a.width,this.canvas.width=a.width;const l={canvasContext:s,viewport:a};t.render(l).promise.then((()=>{this.canvasVisible=!0,this.historys[e-1].push({data:this.ctx.getImageData(0,0,i.width,i.height)}),e<this.pdfPages?this.renderPage(e+1):(this.canvas=document.getElementById("canvas1"),this.ctx=this.canvas.getContext("2d"),this.canvasX=this.canvas.style.left,this.canvasY=this.canvas.style.top)}))}))},saveEditedImage(){for(var e=1;e<=this.pdfPages;e++){const i=document.getElementById("canvas"+e),s=i.toDataURL("image/jpeg"),o=document.createElement("a");o.href=s;var t=new Date;o.download=t.getTime()+"("+e+").jpg",o.click()}},MoDown(e){if("move"==this.data_style){this.draged=!0;const t=this.canvas;this.disx=e.pageX-t.offsetLeft,this.disy=e.pageY-t.offsetTop}else{this.points=[],this.points.push({x:e.pageX,y:e.pageY}),this.beginPoint=this.points[0],this.penClick=!0,this.controlPointX=0,this.controlPointY=0,this.startAxisX=e.pageX,this.startAxisY=e.pageY;this.$refs.canvasbox}},MoUp(){"move"==this.data_style?(this.draged=!1,this.canvasX=this.canvas.style.left,this.canvasY=this.canvas.style.top):(this.penClick=!1,this.addHistoy())},drawLine(e,t,i,s,o){this.ctx.beginPath(),this.ctx.moveTo((e.x-s)/this.scaleCount,(e.y-o)/this.scaleCount),this.ctx.quadraticCurveTo((t.x-s)/this.scaleCount,(t.y-o)/this.scaleCount,(i.x-s)/this.scaleCount,(i.y-o)/this.scaleCount),this.ctx.strokeStyle=this.penColor,this.ctx.lineWidth=this.penWidth,this.ctx.lineCap="round",this.ctx.stroke(),this.ctx.closePath()},MoMove(e){if("move"==this.data_style){if(1==this.draged){const t=this.canvas;t.style.left=e.pageX-this.disx+"px",t.style.top=e.pageY-this.disy+"px"}}else{if(!this.penClick)return;const o=this.canvas,n=this.$refs.canvasbox,a=this.ctx,l=e.pageX,c=e.pageY;var t=n.scrollTop,i=n.scrollLeft;const r=n.offsetLeft+o.offsetLeft-i,h=n.offsetTop+o.offsetTop-t;if("pencil"==this.data_style){var s={x:l,y:c};if(this.points.push(s),this.points.length>2){const e=this.points.slice(-2),t=e[0],i={x:(e[0].x+e[1].x)/2,y:(e[0].y+e[1].y)/2};this.drawLine(this.beginPoint,t,i,r,h),this.beginPoint=i}}else"rect"==this.data_style?(a.beginPath(),a.fillStyle="#000",this.showLastHistory(),a.fillRect((this.startAxisX-r)/this.scaleCount,(this.startAxisY-h)/this.scaleCount,(l-r-this.startAxisX+r)/this.scaleCount,(c-h-this.startAxisY+h)/this.scaleCount),a.closePath()):"highlight"==this.data_style&&(a.beginPath(),this.showLastHistory(),a.moveTo((this.startAxisX-r)/this.scaleCount,(this.startAxisY-h)/this.scaleCount),a.lineTo((l-r)/this.scaleCount,(this.startAxisY-h)/this.scaleCount),a.strokeStyle=this.hlpenColor,a.lineWidth=this.hlpenWidth,a.lineCap="butt",a.stroke(),a.closePath())}},retrue(){var e=this.historys[this.pageNum-1];e&&e.length>1&&(e.pop(),this.showLastHistory()),this.undo=!1},addHistoy(e){const t=this.canvas;this.historys[this.pageNum-1].push({data:this.ctx.getImageData(0,0,t.width,t.height)})},showLastHistory(){var e=this.historys[this.pageNum-1];this.ctx.putImageData(e[e.length-1]["data"],0,0)},scaleD(){2!=this.scaleCount&&(this.scaleCount=parseFloat(this.scaleCount)+.1,this.scaleCount=parseFloat(this.scaleCount).toFixed(1),this.$refs.pdfcanvas.forEach((e=>{var t=this.widthTemp*parseFloat(this.scaleCount),i=this.heightTemp*parseFloat(this.scaleCount);e.style.width=t+"px",e.style.height=i+"px"})))},scaleX(){.1!=this.scaleCount&&(this.scaleCount=parseFloat(this.scaleCount)-.1,this.scaleCount=parseFloat(this.scaleCount).toFixed(1),this.$refs.pdfcanvas.forEach((e=>{var t=this.widthTemp*parseFloat(this.scaleCount),i=this.heightTemp*parseFloat(this.scaleCount);e.style.width=t+"px",e.style.height=i+"px"})))},addimge(e){let t=this.ctx;t.drawImage(e,0,0)}}};const $e=(0,w.Z)(Te,[["render",A]]);var ze=$e;const Le=[{path:"/",name:"HelloWorld",component:T},{path:"/home",name:"Home",component:E},{path:"/tools/bulidanswersheet",name:"BulidAnswerSheet",component:ze}],Ie=(0,k.p7)({history:(0,k.r5)(),routes:Le});var Ze=Ie;i(9744);(0,s.ri)(C).use(Ze).mount("#app")},172:function(){},2001:function(){},3779:function(){},6558:function(){},2258:function(){}},t={};function i(s){var o=t[s];if(void 0!==o)return o.exports;var n=t[s]={exports:{}};return e[s].call(n.exports,n,n.exports,i),n.exports}i.m=e,function(){var e=[];i.O=function(t,s,o,n){if(!s){var a=1/0;for(h=0;h<e.length;h++){s=e[h][0],o=e[h][1],n=e[h][2];for(var l=!0,c=0;c<s.length;c++)(!1&n||a>=n)&&Object.keys(i.O).every((function(e){return i.O[e](s[c])}))?s.splice(c--,1):(l=!1,n<a&&(a=n));if(l){e.splice(h--,1);var r=o();void 0!==r&&(t=r)}}return t}n=n||0;for(var h=e.length;h>0&&e[h-1][2]>n;h--)e[h]=e[h-1];e[h]=[s,o,n]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,s){var o,n,a=s[0],l=s[1],c=s[2],r=0;if(a.some((function(t){return 0!==e[t]}))){for(o in l)i.o(l,o)&&(i.m[o]=l[o]);if(c)var h=c(i)}for(t&&t(s);r<a.length;r++)n=a[r],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return i.O(h)},s=self["webpackChunkaugest"]=self["webpackChunkaugest"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=i.O(void 0,[998],(function(){return i(6126)}));s=i.O(s)})();
//# sourceMappingURL=app.2c44454a.js.map