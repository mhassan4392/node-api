(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{827:function(t,e,d){"use strict";d.r(e);var r={middleware:["pagePermission"],components:{CrudDataTable:function(){return Promise.all([d.e(0),d.e(1),d.e(2)]).then(d.bind(null,702))}},data:function(){return{headers:[{text:this.$t("crud.table.headers.title"),value:"title"},{text:this.$t("crud.table.headers.avatar"),value:"avatar"},{text:this.$t("crud.table.headers.views"),value:"views"},{text:this.$t("crud.table.headers.status"),value:"status"},{text:this.$t("crud.table.headers.comments"),value:"comments"},{text:this.$t("crud.table.headers.actions"),value:"actions",sortable:!1}],item:{title:"",avatar:null,category:"",body:"",excerpt:"",tags:[],status:"",featured:!1,comment:!0,keywords:"",description:""}}}},l=d(37),o=d(46),n=d.n(o),c=d(203),m=d(84),h=d(428),v=d(680),f=d(148),w=d(426),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",[d("v-container",[d("v-row",[d("v-col",{attrs:{cols:"12"}},[d("crud-data-table",{attrs:{"default-item":t.item,table:{showSelect:!0,heading:t.$t("crud.table.headings.blog.posts"),button:{text:t.$t("crud.table.addNewButtons.blog.posts")}},headers:t.headers,"add-edit-dialog":{addHeading:t.$t("addEditDialog.headings.add.blog.posts"),editHeading:t.$t("addEditDialog.headings.edit.blog.posts")},actions:{edit:!0,delete:!0},"fetch-data":{url:"/api/posts?page=1&limit=1000",data:"posts"},"add-data":{redirect:!0,url:"/dashboard/blog/posts/add"},"edit-data":{redirect:!0,url:"/dashboard/blog/posts/edit/:param",param:"slug"},"delete-data":{url:"/api/posts/:param",param:"_id",reload:!0},"delete-multiple-data":{url:"/api/posts/delete",arrayOf:"_id",reload:!0}},scopedSlots:t._u([{key:"item.avatar",fn:function(t){var i=t.item;return[d("v-avatar",{staticClass:"my-2",attrs:{size:"100",rounded:""}},[d("v-img",{attrs:{src:"http://68.183.159.113/uploads/posts/"+i.avatar}})],1)]}},{key:"item.comments",fn:function(e){var i=e.item;return[d("v-btn",{attrs:{link:"",rounded:"",color:"primary",small:"",to:"/dashboard/blog/comments/"+i._id}},[t._v(t._s(i.comments.length)+"\n              "+t._s(1===i.comments.length?t.$t("comments.singular"):t.$t("comments.plural")))])]}}],null,!0)})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;n()(component,{VAvatar:c.a,VBtn:m.a,VCol:h.a,VContainer:v.a,VImg:f.a,VRow:w.a})}}]);