exports.ids = [65];
exports.modules = {

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(543);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("3658ff28", content, true, context)
};

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppShowcase_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(514);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppShowcase_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppShowcase_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppShowcase_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppShowcase_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppShowcase_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".showcase{height:100vh;position:relative;padding:0;margin:0;background-position:50%;background-size:cover}.col-middle{z-index:2}.showcase-title{font-size:2.5rem;margin-bottom:1rem}.showcase-text{font-size:1.2rem;margin-bottom:1rem}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 631:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/AppShowcase.vue?vue&type=template&id=8c0b5b90&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('v-row',{staticClass:"showcase",style:('background-image:url(' + _vm.bgImage + ')'),attrs:{"align":"center"}},[_c('v-overlay',{staticClass:"overlay",attrs:{"absolute":"","color":"black","opacity":0.5,"z-index":"0"}}),_vm._v(" "),_c('v-col',{staticClass:"mx-auto col-middle",attrs:{"cols":"10"}},[_c('v-row',{attrs:{"align":"center"}},[_c('v-col',{staticClass:"text--darken-100 white--text",attrs:{"cols":"12","lg":"7"}},[_c('h1',{staticClass:"showcase-title"},[_vm._v("\n            "+_vm._s(_vm.$t('index.showcase.heading'))+"\n          ")]),_vm._v(" "),_c('p',{staticClass:"showcase-text"},[_vm._v("\n            "+_vm._s(_vm.$t('index.showcase.text'))+"\n          ")]),_vm._v(" "),_c('div',[_c('v-btn',{staticClass:"mr-3",attrs:{"color":"primary","link":"","to":"/blog"}},[_vm._v(_vm._s(_vm.$t('index.showcase.button1.text')))]),_vm._v(" "),_c('v-btn',{attrs:{"color":"secondary","outlined":"","link":"","to":"/about"}},[_vm._v(_vm._s(_vm.$t('index.showcase.button2.text')))])],1)])],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/AppShowcase.vue?vue&type=template&id=8c0b5b90&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AppShowcase.vue?vue&type=script&lang=js&
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

/* harmony default export */ var AppShowcasevue_type_script_lang_js_ = ({
  computed: { ...Object(external_vuex_["mapGetters"])('image', ['getImage']),

    bgImage() {
      if (this.getImage('showcase-background-image')) {
        return this.getImage('showcase-background-image');
      } else {
        return '/showcase.jpg';
      }
    }

  }
});
// CONCATENATED MODULE: ./components/AppShowcase.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AppShowcasevue_type_script_lang_js_ = (AppShowcasevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(25);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(94);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(186);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VOverlay/VOverlay.js
var VOverlay = __webpack_require__(172);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(162);

// CONCATENATED MODULE: ./components/AppShowcase.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(542)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AppShowcasevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "e685057a"
  
)

/* harmony default export */ var AppShowcase = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */





installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCol: VCol["a" /* default */],VOverlay: VOverlay["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=65.js.map