(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{826:function(e,t,r){"use strict";r.r(t);var d={middleware:["pagePermission"],components:{CrudDataTable:function(){return Promise.all([r.e(0),r.e(1),r.e(2)]).then(r.bind(null,702))},CategoryForm:function(){return r.e(91).then(r.bind(null,863))}},data:function(){return{headers:[{text:this.$t("crud.table.headers.title"),value:"title"},{text:this.$t("crud.table.headers.actions"),value:"actions",sortable:!1}],cat:{title:""}}}},l=r(37),o=r(46),n=r.n(o),c=r(428),h=r(680),m=r(426),component=Object(l.a)(d,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("v-container",[t("v-row",[t("v-col",{attrs:{cols:"12"}},[t("crud-data-table",{attrs:{"default-item":this.cat,table:{showSelect:!0,heading:this.$t("crud.table.headings.blog.categories"),search:!0,button:{text:this.$t("crud.table.addNewButtons.blog.categories")}},"add-edit-dialog":{addHeading:this.$t("addEditDialog.headings.add.blog.categories"),editHeading:this.$t("addEditDialog.headings.edit.blog.categories")},headers:this.headers,actions:{edit:!0,delete:!0},"fetch-data":{url:"/api/categories",data:"categories"},"add-data":{url:"/api/categories",reload:!0},"edit-data":{url:"/api/categories/:param",param:"_id",reload:!0},"delete-data":{url:"/api/categories/:param",param:"_id",reload:!0},"delete-multiple-data":{url:"/api/categories/delete",arrayOf:"_id",reload:!0}},scopedSlots:this._u([{key:"crud-form",fn:function(e){var r=e.item;return[t("category-form",{attrs:{item:r}})]}}])})],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;n()(component,{VCol:c.a,VContainer:h.a,VRow:m.a})}}]);