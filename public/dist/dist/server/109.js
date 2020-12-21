exports.ids = [109];
exports.modules = {

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/forms/settings/blog/ReadingForm.vue?vue&type=template&id=49930f1c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card-text',[_c('v-text-field',{attrs:{"type":"number","outlined":"","dense":"","label":"Blog Posts Limit"},model:{value:(_vm.reading.postLimit),callback:function ($$v) {_vm.$set(_vm.reading, "postLimit", $$v)},expression:"reading.postLimit"}}),_vm._v(" "),_c('v-text-field',{attrs:{"type":"number","outlined":"","dense":"","label":"Featured Posts Limit"},model:{value:(_vm.reading.featurePostLimit),callback:function ($$v) {_vm.$set(_vm.reading, "featurePostLimit", $$v)},expression:"reading.featurePostLimit"}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/forms/settings/blog/ReadingForm.vue?vue&type=template&id=49930f1c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/forms/settings/blog/ReadingForm.vue?vue&type=script&lang=js&
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
/* harmony default export */ var ReadingFormvue_type_script_lang_js_ = ({
  props: {
    reading: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/forms/settings/blog/ReadingForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_ReadingFormvue_type_script_lang_js_ = (ReadingFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(25);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var VCard = __webpack_require__(200);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js
var VTextField = __webpack_require__(23);

// CONCATENATED MODULE: ./components/forms/settings/blog/ReadingForm.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_ReadingFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "49930f1c",
  "15e55c64"
  
)

/* harmony default export */ var ReadingForm = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VCardText: VCard["d" /* VCardText */],VTextField: VTextField["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=109.js.map