exports.ids = [100];
exports.modules = {

/***/ 638:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/crud/CrudViewDialog.vue?vue&type=template&id=6024e97a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',[_c('v-row',[_c('v-dialog',{attrs:{"scrollable":"","persistent":_vm.dialog.persistent ? _vm.dialog.persistent : true,"fullscreen":_vm.dialog.fullScreen,"max-width":_vm.dialog.maxWidth ? _vm.dialog.maxWidth : '600px',"retain-focus":false},model:{value:(_vm.show),callback:function ($$v) {_vm.show=$$v},expression:"show"}},[_c('v-card',[_c('v-card-title',[_vm._v("\n          "+_vm._s(_vm.dialog.heading ? _vm.dialog.heading : this.$t('crud.viewDialog.view'))+"\n        ")]),_vm._v(" "),_c('v-card-text',[_vm._t("view")],2),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"color":_vm.dialog.closeButtonColor ? _vm.dialog.closeButtonColor : 'error'},on:{"click":_vm.closeDialog}},[_vm._v(_vm._s(_vm.dialog.closeButtonText
                ? _vm.dialog.closeButtonText
                : this.$t('crud.viewDialog.closeButton.text')))])],1)],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/crud/CrudViewDialog.vue?vue&type=template&id=6024e97a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/crud/CrudViewDialog.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CrudViewDialogvue_type_script_lang_js_ = ({
  props: {
    show: {
      type: Boolean,
      default: false
    },
    dialog: {
      type: [Object, Boolean],
      default: () => {}
    }
  },

  data() {
    return {};
  },

  methods: {
    // close dialog
    closeDialog() {
      this.$emit('close');
    }

  }
});
// CONCATENATED MODULE: ./components/crud/CrudViewDialog.vue?vue&type=script&lang=js&
 /* harmony default export */ var crud_CrudViewDialogvue_type_script_lang_js_ = (CrudViewDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(25);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(94);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(183);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(200);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(176);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(85);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(162);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(174);

// CONCATENATED MODULE: ./components/crud/CrudViewDialog.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  crud_CrudViewDialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6254e9b1"
  
)

/* harmony default export */ var CrudViewDialog = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */










installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardActions: components_VCard["b" /* VCardActions */],VCardText: components_VCard["d" /* VCardText */],VCardTitle: components_VCard["e" /* VCardTitle */],VContainer: VContainer["a" /* default */],VDialog: VDialog["a" /* default */],VRow: VRow["a" /* default */],VSpacer: VSpacer["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=100.js.map