exports.ids = [98];
exports.modules = {

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/crud/CrudDeleteDialog.vue?vue&type=template&id=6217d56f&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',[_c('v-row',[_c('v-dialog',{attrs:{"persistent":_vm.dialog.persistent ? _vm.dialog.persistent : true,"max-width":_vm.dialog.maxWidth ? _vm.dialog.maxWidth : '600px'},model:{value:(_vm.show),callback:function ($$v) {_vm.show=$$v},expression:"show"}},[_c('v-card',{staticClass:"p-10"},[_c('v-card-title',[_vm._v("\n          "+_vm._s(_vm.dialog.title ? _vm.dialog.title : _vm.$t('crud.deleteDialog.title'))+"\n        ")]),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"color":_vm.dialog.cancelButtonColor ? _vm.dialog.cancelButtonColor : 'error'},on:{"click":_vm.closeConfirm}},[_vm._v(_vm._s(_vm.dialog.cancelButtonText
                ? _vm.dialog.cancelButtonText
                : _vm.$t('crud.deleteDialog.closeButton.text')))]),_vm._v(" "),_c('v-btn',{attrs:{"type":"submit","dark":"","color":_vm.dialog.deleteButtonColor ? _vm.dialog.deleteButtonColor : 'success',"loading":_vm.loading.delete},on:{"click":_vm.save}},[_vm._v(_vm._s(_vm.dialog.deleteButtonText
                ? _vm.dialog.deleteButtonText
                : _vm.$t('crud.deleteDialog.deleteButton.text')))])],1)],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/crud/CrudDeleteDialog.vue?vue&type=template&id=6217d56f&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/crud/CrudDeleteDialog.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
/* harmony default export */ var CrudDeleteDialogvue_type_script_lang_js_ = ({
  props: {
    loading: {
      type: Object,
      required: true
    },
    show: {
      type: Boolean,
      default: false
    },
    dialog: {
      type: [Object, Boolean],
      default: () => {
        return {};
      }
    }
  },

  data() {
    return {};
  },

  methods: {
    closeConfirm() {
      this.$emit('close');
    },

    save() {
      this.$emit('success');
    }

  }
});
// CONCATENATED MODULE: ./components/crud/CrudDeleteDialog.vue?vue&type=script&lang=js&
 /* harmony default export */ var crud_CrudDeleteDialogvue_type_script_lang_js_ = (CrudDeleteDialogvue_type_script_lang_js_); 
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

// CONCATENATED MODULE: ./components/crud/CrudDeleteDialog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  crud_CrudDeleteDialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7ca0fb92"
  
)

/* harmony default export */ var CrudDeleteDialog = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */









installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardActions: components_VCard["b" /* VCardActions */],VCardTitle: components_VCard["e" /* VCardTitle */],VContainer: VContainer["a" /* default */],VDialog: VDialog["a" /* default */],VRow: VRow["a" /* default */],VSpacer: VSpacer["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=98.js.map