(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{821:function(e,t,r){"use strict";r.r(t);var l={middleware:["pagePermission"],components:{CrudDataTable:function(){return Promise.all([r.e(0),r.e(1),r.e(2)]).then(r.bind(null,702))}},data:function(){return{headers:[{text:this.$t("crud.table.headers.email"),value:"email"},{text:this.$t("crud.table.headers.actions"),value:"actions",sortable:!1}]}}},n=r(37),d=r(46),o=r.n(d),c=r(428),h=r(680),w=r(426),component=Object(n.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("v-container",[t("v-row",[t("v-col",{attrs:{cols:"12"}},[t("crud-data-table",{attrs:{table:{search:!0,showSelect:!0,heading:this.$t("crud.table.headings.newsletter"),search:!0},actions:{delete:!0},headers:this.headers,"fetch-data":{url:"/api/newsletter",data:"subscribers"},"delete-data":{url:"/api/newsletter/:param",param:"_id",reload:!0},"delete-multiple-data":{url:"/api/newsletter/delete",arrayOf:"_id",reload:!0}}})],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;o()(component,{VCol:c.a,VContainer:h.a,VRow:w.a})}}]);