(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{881:function(t,e,r){"use strict";r.r(e);r(15),r(12),r(10),r(9),r(11);var o=r(1),n=r(68);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={computed:l({},Object(n.d)(["post"])),created:function(){this.fetchFeaturedPosts({axios:this.$axios})},methods:l({},Object(n.b)("post",["fetchFeaturedPosts"]))},v=r(37),f=r(45),O=r.n(f),m=r(102),h=r(77),y=r(147),j=r(139),w=r(201),P=r(69),_=r(664),k=r(61),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-card",{staticClass:"mb-8",attrs:{light:""}},[r("v-toolbar",{staticClass:"primary white--text"},[r("v-card-title",[t._v("\n        "+t._s(t.$t("sidebar.featuredPosts.heading"))+"\n      ")])],1),t._v(" "),t.$store.state.loading.blog.featuredPosts?r("div",t._l(3,(function(i){return r("v-skeleton-loader",{key:i,attrs:{type:"list-item-avatar, divider"}})})),1):r("div",t._l(t.post.featuredPosts,(function(e,o){return r("div",{key:o},[r("v-list-item",{attrs:{link:"",to:t.$i18n.path("/blog/post/"+e.slug)}},[r("v-list-item-avatar",{attrs:{size:"80",rounded:"",color:"grey darken-3"}},[r("v-img",{staticClass:"elevation-6",attrs:{alt:"",src:"http://localhost:5000/uploads/posts/"+e.avatar}})],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{staticClass:"text-left"},[r("h4",[t._v(t._s(e.title))]),t._v(" "),r("small",[t._v(t._s(e.created))])])],1)],1)],1)})),0)],1)],1)}),[],!1,null,"d7d344e8",null);e.default=component.exports;O()(component,{VCard:m.a,VCardTitle:h.c,VImg:y.a,VListItem:j.a,VListItemAvatar:w.a,VListItemContent:P.a,VListItemTitle:P.c,VSkeletonLoader:_.a,VToolbar:k.a})}}]);