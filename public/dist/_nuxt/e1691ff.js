(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{836:function(t,e,n){"use strict";n.r(e);var d={components:{CrudDataTable:function(){return Promise.all([n.e(0),n.e(1),n.e(2)]).then(n.bind(null,702))},ContactForm:function(){return n.e(99).then(n.bind(null,874))}},middleware:["pagePermission"],data:function(){return{headers:[{text:this.$t("crud.table.headers.title"),value:"title"},{text:this.$t("crud.table.headers.slug"),value:"slug"},{text:"Translation",value:"traslation"},{text:this.$t("crud.table.headers.detail"),value:"detail"},{text:this.$t("crud.table.headers.icon"),value:"icon"},{text:this.$t("crud.table.headers.actions"),value:"actions",sortable:!1}],item:{title:"",slug:"",translation:"",detail:""}}}},r=n(37),o=n(46),c=n.n(o),l=n(428),h=n(680),f=n(109),m=n(426),component=Object(r.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("crud-data-table",{attrs:{table:{search:!0,showSelect:!0,heading:t.$t("crud.table.headings.utilities.contacts"),button:{text:t.$t("crud.table.addNewButtons.utilities.contacts")}},"add-edit-dialog":{addHeading:t.$t("addEditDialog.headings.add.utilities.contacts"),editHeading:t.$t("addEditDialog.headings.edit.utilities.contacts")},headers:t.headers,"default-item":t.item,actions:{edit:!0,delete:!0},"fetch-data":{url:"/api/contacts",data:"contacts"},"add-data":{url:"/api/contacts",reload:!0},"edit-data":{url:"/api/contacts/:param",param:"_id",reload:!0},"delete-data":{url:"/api/contacts/:param",param:"_id",reload:!0},"delete-multiple-data":{url:"/api/contacts/delete",arrayOf:"_id",reload:!0}},on:{"after-add":function(e){return t.$store.dispatch("contact/fetchContacts",{axios:t.$axios})},"after-edit":function(e){return t.$store.dispatch("contact/fetchContacts",{axios:t.$axios})}},scopedSlots:t._u([{key:"item.icon",fn:function(e){var d=e.item;return[n("v-icon",[t._v(t._s(d.icon))])]}},{key:"crud-form",fn:function(t){var e=t.item;return[n("contact-form",{attrs:{contact:e}})]}}],null,!0)})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCol:l.a,VContainer:h.a,VIcon:f.a,VRow:m.a})}}]);