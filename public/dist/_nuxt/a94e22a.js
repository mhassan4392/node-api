(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{890:function(t,e,r){"use strict";r.r(e);r(15),r(12),r(10),r(9),r(11);var o=r(1),n=r(68);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={computed:l({},Object(n.d)(["post"])),created:function(){this.fetchCategories(this.$axios)},methods:l({},Object(n.b)("post",["fetchCategories"]))},v=r(37),f=r(46),O=r.n(f),y=r(103),h=r(78),j=r(140),m=r(69),w=r(675),C=r(61),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-card",{staticClass:"mb-8",attrs:{light:""}},[r("v-toolbar",{staticClass:"primary white--text"},[r("v-card-title",[t._v("\n        "+t._s(t.$t("sidebar.categories.heading"))+"Categories\n      ")])],1),t._v(" "),t.$store.state.loading.blog.categories?r("div",t._l(5,(function(i){return r("v-skeleton-loader",{key:i,attrs:{type:"list-item-avatar, divider"}})})),1):r("div",t._l(t.post.categories,(function(e,o){return r("div",{key:o},[r("v-list-item",{attrs:{link:"",to:t.$i18n.path("/blog/category/"+e.slug)}},[r("v-list-item-content",[r("v-list-item-title",{staticClass:"text-left"},[r("div",[t._v(t._s(e.title))])])],1)],1)],1)})),0)],1)],1)}),[],!1,null,"2a569f14",null);e.default=component.exports;O()(component,{VCard:y.a,VCardTitle:h.c,VListItem:j.a,VListItemContent:m.a,VListItemTitle:m.c,VSkeletonLoader:w.a,VToolbar:C.a})}}]);