(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{906:function(r,t,e){"use strict";e.r(t);e(29);var l={props:{reply:{type:Object,required:!0}},computed:{avatarName:function(){return this.reply.user?"":this.reply.name.substr(0,1)}}},n=e(37),c=e(46),o=e.n(c),v=e(203),m=e(103),y=e(78),d=e(148),f=e(180),h=e(426),component=Object(n.a)(l,(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("v-card",{staticClass:"mr-3 my-5",attrs:{light:""}},[e("v-card-title",[e("v-avatar",{staticClass:"mr-2 white--text",attrs:{color:"primary"}},[r.reply.user?e("v-img",{attrs:{alt:"Avatar",src:"http://localhost:5000/uploads/users/"+r.reply.user.avatar},scopedSlots:r._u([{key:"placeholder",fn:function(){return[e("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[e("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)]},proxy:!0}],null,!1,3042438443)}):e("span",[r._v("\n        "+r._s(r.avatarName)+"\n      ")])],1),r._v(" "),e("small",[r._v(r._s(r.reply.user?r.reply.user.name:r.reply.name))])],1),r._v(" "),e("v-card-text",[r._v("\n    "+r._s(r.reply.text)+"\n  ")])],1)}),[],!1,null,"50f7c7fe",null);t.default=component.exports;o()(component,{VAvatar:v.a,VCard:m.a,VCardText:y.b,VCardTitle:y.c,VImg:d.a,VProgressCircular:f.a,VRow:h.a})}}]);