(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{840:function(t,e,r){"use strict";r.r(e);r(28);var n=r(8),o={middleware:["pagePermission"],components:{CrudEdit:function(){return r.e(3).then(r.bind(null,704))},PostForm:function(){return Promise.all([r.e(0),r.e(13)]).then(r.bind(null,877))}},created:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("post/fetchCategories",t.$axios);case 2:return e.next=4,t.$store.dispatch("post/fetchTags",t.$axios);case 4:case"end":return e.stop()}}),e)})))()}},c=r(37),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("crud-edit",{attrs:{button:"","fetch-data":{url:"/api/posts/:param",param:this.$route.params.slug,data:"post"},"edit-data":{url:"/api/posts/:param",param:"_id",formData:!0,successRedirect:"/dashboard/blog/posts"}},scopedSlots:this._u([{key:"crud-form",fn:function(t){var r=t.item;return[e("PostForm",{attrs:{post:r,edit:!0}})]}}])})],1)}),[],!1,null,"26300cf8",null);e.default=component.exports}}]);