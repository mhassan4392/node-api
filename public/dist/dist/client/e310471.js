(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{671:function(e,r,t){"use strict";t(78);r.a={data:function(){var e=this;return{valid:!1,rules:{required:function(r){return!!r||e.$t("errorMessages.form.fieldRequired")},confirmPassword:function(r,t){return r===t||e.$t("errorMessages.form.confirmPasswordNotMatch")},isEmail:function(r){return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(r)||e.$t("errorMessages.form.addValidEmail")},passwordMinLength:function(r){return r&&r.length>=8||e.$t("errorMessages.form.passwordLength")},isImage:function(r){return!r||!r.type||(r.type.startsWith("image")||e.$t("errorMessages.form.plzUploadImage"))},imageSize:function(r){return!r||!r.size||(r.size<2048e3||e.$t("errorMessages.form.imageSize"))}}}},methods:{validate:function(){this.$refs.form.validate()}}}},865:function(e,r,t){"use strict";t.r(r);var n={mixins:[t(671).a],props:{image:{type:Object,required:!0}}},o=t(37),l=t(45),m=t.n(l),d=t(77),c=t(418),f=t(669),w=t(416),v=t(104),component=Object(o.a)(n,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-card-text",[t("v-container",[t("v-row",[t("v-col",[t("v-text-field",{attrs:{rules:[e.rules.required],outlined:"",label:e.$t("forms.labels.title")},model:{value:e.image.title,callback:function(r){e.$set(e.image,"title",r)},expression:"image.title"}}),e._v(" "),t("base-image-uploader",{attrs:{id:"image-uploader",label:e.$t("forms.labels.image"),"image-path":"/uploads/images/",rules:[e.rules.required]},model:{value:e.image.image,callback:function(r){e.$set(e.image,"image",r)},expression:"image.image"}})],1)],1)],1)],1)}),[],!1,null,null,null);r.default=component.exports;m()(component,{VCardText:d.b,VCol:c.a,VContainer:f.a,VRow:w.a,VTextField:v.a})}}]);