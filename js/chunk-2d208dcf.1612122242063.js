(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d208dcf"],{a736:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticStyle:{margin:"10px",height:"calc(100vh - 105px)"}},[e("v-md-editor",{attrs:{height:"100%"},model:{value:t.content,callback:function(n){t.content=n},expression:"content"}})],1)},c=[],o={name:"markdown",data:function(){return{content:""}},methods:{getMsg:function(){var t=this,n={url:this.$PUBLIC_PATH+"data/markdownData.md",method:"get",responseType:"text"};this.$fetchData(n).then((function(n){t.content=n.data})).catch((function(t){}))}},created:function(){this.getMsg()}},i=o,s=e("2877"),r=Object(s["a"])(i,a,c,!1,null,null,null);n["default"]=r.exports}}]);