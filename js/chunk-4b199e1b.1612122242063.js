(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b199e1b"],{"4d4c":function(t,e,o){"use strict";o.d(e,"a",(function(){return n})),o.d(e,"b",(function(){return i}));var n={right:"5px",borderRadius:"5px",backgroundColor:"#616161",width:"5px"},i={borderRadius:"5px",backgroundColor:"rgba(144,147,153,0.9)",padding:"10px;",margin:"10px;",width:"3px"}},afb1:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("base-content",[o("div",{staticClass:"base-markdown-content"},[t.isLottieF?t._e():o("q-skeleton",{attrs:{type:"text",height:"150px"}}),o("lottie-web-cimo",{ref:"lottie_web",attrs:{path:t.defaultOptions.path,loop:t.defaultOptions.loop,"animation-speed":t.defaultOptions.animationSpeed},on:{isLottieFinish:t.handleLottieFinish}}),o("div",{staticClass:"row justify-center",staticStyle:{"margin-left":"10px","margin-right":"10px"}},[o("q-badge",{staticClass:"justify-start",attrs:{color:"secondary"}},[t._v(" Speed: "+t._s(t.defaultOptions.animationSpeed)+" ")]),o("q-slider",{attrs:{min:0,max:3,step:.5,color:"purple",label:""},model:{value:t.defaultOptions.animationSpeed,callback:function(e){t.$set(t.defaultOptions,"animationSpeed",e)},expression:"defaultOptions.animationSpeed"}}),o("q-btn-group",[o("q-btn",{attrs:{color:"accent",icon:"play_arrow"},on:{click:t.play}},[o("q-tooltip",[t._v("播放")])],1),o("q-btn",{attrs:{color:"accent",icon:"pause"},on:{click:t.pause}},[o("q-tooltip",[t._v("暂停")])],1),o("q-btn",{attrs:{color:"accent",icon:"stop"},on:{click:t.stop}},[o("q-tooltip",[t._v("停止")])],1)],1)],1),o("v-md-editor",{attrs:{value:t.content,mode:"preview"}})],1)])},i=[],s=o("b0dd"),a=o("0bf7"),r={name:"my-lottie",components:{LottieWebCimo:a["a"],BaseContent:s["a"]},data:function(){return{defaultOptions:{path:"https://assets1.lottiefiles.com/packages/lf20_gzl797gs.json",loop:!0,animationSpeed:1},anim:{},content:"",test:{},isLottieF:!1}},methods:{play:function(){this.$refs.lottie_web.play()},stop:function(){this.$refs.lottie_web.stop()},pause:function(){this.$refs.lottie_web.pause()},handleLottieFinish:function(t){this.isLottieF=t},getMsg:function(){var t=this,e={url:this.$PUBLIC_PATH+"data/lottieData.md",method:"get",responseType:"text"};this.$fetchData(e).then((function(e){t.content=e.data})).catch((function(t){}))}},created:function(){this.getMsg()}},l=r,c=o("2877"),p=o("fe09"),u=Object(c["a"])(l,n,i,!1,null,null,null);e["default"]=u.exports;u.options.components=Object.assign(Object.create(u.options.components||null),u.options.components||{},{QSkeleton:p["B"],QBadge:p["c"],QSlider:p["D"],QBtnGroup:p["g"],QBtn:p["f"],QTooltip:p["N"]})},b0dd:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"main-content"},[o("q-scroll-area",{ref:"scrollArea",staticStyle:{height:"100%"},attrs:{"thumb-style":t.thumbStyle,visible:!1}},[t._t("default")],2)],1)},i=[],s=(o("dca8"),o("4d4c")),a={name:"BaseContent",data:function(){return{thumbStyle:s["a"],BasePath:""}},props:["position"],methods:{ScrollToPosition:function(t){this.$refs.scrollArea.setScrollPosition(t,300)},getPosition:function(){return this.$refs.scrollArea.getScrollPosition()}},mounted:function(){this.BasePath=this.$route.path,Object.freeze(this.BasePath);var t=window.sessionStorage.getItem(this.$route.path);if(t){var e=JSON.parse(t);this.ScrollToPosition(e.listScrollTop)}},deactivated:function(){window.sessionStorage.setItem(this.BasePath,JSON.stringify({listScrollTop:this.getPosition()}))},activated:function(){var t=window.sessionStorage.getItem(this.$route.path);if(t){var e=JSON.parse(t);this.ScrollToPosition(e.listScrollTop)}},destroyed:function(){sessionStorage.removeItem(this.BasePath)}},r=a,l=o("2877"),c=o("fe09"),p=Object(l["a"])(r,n,i,!1,null,null,null);e["a"]=p.exports;p.options.components=Object.assign(Object.create(p.options.components||null),p.options.components||{},{QScrollArea:c["z"]})}}]);