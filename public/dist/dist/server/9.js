exports.ids = [9];
exports.modules = {

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(547);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("f50893bc", content, true, context)
};

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(516);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".tip-tap-editor-dark .v-toolbar__content{background-color:#1e1e1e!important;width:100%}.tip-tap-editor-dark .tiptap-vuetify-editor__content{color:#fff!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 648:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/AppEditor.vue?vue&type=template&id=787702b0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('tiptap-vuetify',{class:_vm.dark ? 'tip-tap-editor-dark' : '',attrs:{"value":_vm.value,"extensions":_vm.extensions,"rules":[_vm.rules.required],"placeholder":_vm.placeholder},on:{"input":function($event){return _vm.$emit('input', arguments[0])}}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/AppEditor.vue?vue&type=template&id=787702b0&

// EXTERNAL MODULE: ./node_modules/tiptap-vuetify/dist/bundle-umd.js
var bundle_umd = __webpack_require__(215);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(38);

// EXTERNAL MODULE: ./mixins/validations.js
var validations = __webpack_require__(493);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AppEditor.vue?vue&type=script&lang=js&
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
// import the component and the necessary extensions



/* harmony default export */ var AppEditorvue_type_script_lang_js_ = ({
  components: {
    TiptapVuetify: bundle_umd["TiptapVuetify"]
  },
  mixins: [validations["a" /* default */]],
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Body'
    }
  },
  data: vm => ({
    extensions: [bundle_umd["History"], bundle_umd["Blockquote"], bundle_umd["Link"], bundle_umd["Underline"], bundle_umd["Strike"], bundle_umd["Italic"], bundle_umd["Image"], bundle_umd["ListItem"], bundle_umd["BulletList"], bundle_umd["OrderedList"], [bundle_umd["Heading"], {
      options: {
        levels: [1, 2, 3]
      }
    }], bundle_umd["Bold"], bundle_umd["Link"], bundle_umd["Code"], bundle_umd["HorizontalRule"], bundle_umd["Paragraph"], bundle_umd["HardBreak"]]
  }),
  computed: { ...Object(external_vuex_["mapState"])('settings', {
      dark: state => state.settings.theme.theme.dark
    })
  }
});
// CONCATENATED MODULE: ./components/AppEditor.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AppEditorvue_type_script_lang_js_ = (AppEditorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(21);

// CONCATENATED MODULE: ./components/AppEditor.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(546)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AppEditorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "10da7683"
  
)

/* harmony default export */ var AppEditor = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=9.js.map