exports.ids = [69];
exports.modules = {

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(541);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("3fbd6f2e", content, true, context)
};

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CrudAddEditDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(513);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CrudAddEditDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CrudAddEditDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CrudAddEditDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CrudAddEditDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CrudAddEditDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".crud-card{overflow-x:hidden!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/crud/CrudAddEditDialog.vue?vue&type=template&id=1e78bb71&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',[_c('v-row',[_c('v-dialog',{attrs:{"scrollable":"","persistent":_vm.dialog.persistent ? _vm.dialog.persistent : true,"fullscreen":_vm.dialog.fullScreen,"max-width":_vm.dialog.maxWidth ? _vm.dialog.maxWidth : '600px',"retain-focus":false},model:{value:(_vm.show),callback:function ($$v) {_vm.show=$$v},expression:"show"}},[_c('v-card',{staticClass:"crud-card"},[_c('v-card-title',[_vm._v("\n          "+_vm._s(_vm.heading)+"\n        ")]),_vm._v(" "),_c('v-card-text',[_c('v-form',{ref:"form",attrs:{"id":"itemForm","enctype":"multipart/form-data"},on:{"submit":function($event){$event.preventDefault();return _vm.saveDialog($event)}},model:{value:(_vm.valid),callback:function ($$v) {_vm.valid=$$v},expression:"valid"}},[_vm._t("form")],2)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"color":_vm.dialog.cancelButtonColor ? _vm.dialog.cancelButtonColor : 'error'},on:{"click":_vm.closeDialog}},[_vm._v(_vm._s(_vm.dialog.cancelButtonText
                ? _vm.dialog.cancelButtonText
                : _vm.$t('crud.addEditDialog.closeButton.text')))]),_vm._v(" "),_c('v-btn',{attrs:{"type":"submit","color":_vm.addEditButtonColor,"loading":_vm.edit ? _vm.loading.edit : _vm.loading.add},on:{"click":_vm.saveDialog}},[_vm._v(_vm._s(_vm.addEditButtonText))])],1)],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/crud/CrudAddEditDialog.vue?vue&type=template&id=1e78bb71&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/crud/CrudAddEditDialog.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//
/* harmony default export */ var CrudAddEditDialogvue_type_script_lang_js_ = ({
  props: {
    show: {
      type: Boolean,
      default: false
    },
    edit: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Object,
      required: true
    },
    dialog: {
      type: [Object, Boolean],
      default: () => {}
    }
  },

  data() {
    return {
      valid: false
    };
  },

  computed: {
    heading() {
      if (this.edit) {
        if (this.dialog.editHeading) {
          return this.dialog.editHeading;
        } else {
          return this.$t('crud.addEditDialog.editHeading');
        }
      } else if (this.dialog.addHeading) {
        return this.dialog.addHeading;
      } else {
        return this.$t('crud.addEditDialog.addHeading');
      }
    },

    addEditButtonText() {
      if (this.edit) {
        if (this.dialog.editButtonText) {
          return this.dialog.editButtonText;
        } else {
          return this.$t('crud.addEditDialog.editButton.text');
        }
      } else if (this.dialog.addButtonText) {
        return this.dialog.addButtonText;
      } else {
        return this.$t('crud.addEditDialog.addButton.text');
      }
    },

    addEditButtonColor() {
      if (this.edit) {
        if (this.dialog.editButtonColor) {
          return this.dialog.editButtonColor;
        } else {
          return 'success';
        }
      } else if (this.dialog.addButtonColor) {
        return this.dialog.addButtonColor;
      } else {
        return 'success';
      }
    }

  },
  watch: {
    show(to) {
      if (to && this.$refs.form) {
        this.$refs.form.resetValidation();
      }
    }

  },
  methods: {
    // close dialog
    closeDialog() {
      this.$refs.form.resetValidation(); // this.$refs.form.reset()

      this.$emit('close');
    },

    // save or submit dialog
    saveDialog() {
      this.$refs.form.validate();

      if (this.valid) {
        if (this.edit) {
          this.$emit('editItem', this.$refs.form);
        } else {
          this.$emit('saveItem', this.$refs.form, document.getElementById('itemForm'));
        }
      }
    }

  }
});
// CONCATENATED MODULE: ./components/crud/CrudAddEditDialog.vue?vue&type=script&lang=js&
 /* harmony default export */ var crud_CrudAddEditDialogvue_type_script_lang_js_ = (CrudAddEditDialogvue_type_script_lang_js_); 
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(185);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(162);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(174);

// CONCATENATED MODULE: ./components/crud/CrudAddEditDialog.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(540)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  crud_CrudAddEditDialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "066443bf"
  
)

/* harmony default export */ var CrudAddEditDialog = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */











installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardActions: components_VCard["b" /* VCardActions */],VCardText: components_VCard["d" /* VCardText */],VCardTitle: components_VCard["e" /* VCardTitle */],VContainer: VContainer["a" /* default */],VDialog: VDialog["a" /* default */],VForm: VForm["a" /* default */],VRow: VRow["a" /* default */],VSpacer: VSpacer["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=69.js.map