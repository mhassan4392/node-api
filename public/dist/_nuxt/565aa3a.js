(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{671:function(e,r,t){"use strict";t(78);r.a={data:function(){var e=this;return{valid:!1,rules:{required:function(r){return!!r||e.$t("errorMessages.form.fieldRequired")},confirmPassword:function(r,t){return r===t||e.$t("errorMessages.form.confirmPasswordNotMatch")},isEmail:function(r){return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(r)||e.$t("errorMessages.form.addValidEmail")},passwordMinLength:function(r){return r&&r.length>=8||e.$t("errorMessages.form.passwordLength")},isImage:function(r){return!r||!r.type||(r.type.startsWith("image")||e.$t("errorMessages.form.plzUploadImage"))},imageSize:function(r){return!r||!r.size||(r.size<2048e3||e.$t("errorMessages.form.imageSize"))}}}},methods:{validate:function(){this.$refs.form.validate()}}}},869:function(e,r,t){"use strict";t.r(r);var o={mixins:[t(671).a],props:{user:{type:Object,required:!0}}},n=t(37),l=t(45),c=t.n(l),d=t(77),f=t(418),m=t(669),w=t(416),component=Object(n.a)(o,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-card-text",[t("v-container",[t("v-row",[t("v-col",{attrs:{cols:"12"}},[t("base-image-uploader",{attrs:{label:e.$t("forms.labels.avatar"),"image-path":"http://localhost:5000/uploads/users/",rules:[e.rules.required]},model:{value:e.user.avatar,callback:function(r){e.$set(e.user,"avatar",r)},expression:"user.avatar"}})],1)],1)],1)],1)}),[],!1,null,null,null);r.default=component.exports;c()(component,{VCardText:d.b,VCol:f.a,VContainer:m.a,VRow:w.a})}}]);