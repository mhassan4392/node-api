exports.ids = [108];
exports.modules = {

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/forms/settings/blog/LayoutForm.vue?vue&type=template&id=096cd2b4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card-text',[_c('v-select',{attrs:{"outlined":"","dense":"","items":[1, 2, 3, 4],"label":_vm.$t('forms.labels.postColsPerPage')},model:{value:(_vm.layout.postCols),callback:function ($$v) {_vm.$set(_vm.layout, "postCols", $$v)},expression:"layout.postCols"}}),_vm._v(" "),_c('v-switch',{attrs:{"label":_vm.$t('forms.labels.showSidebar')},model:{value:(_vm.layout.sidebar),callback:function ($$v) {_vm.$set(_vm.layout, "sidebar", $$v)},expression:"layout.sidebar"}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/forms/settings/blog/LayoutForm.vue?vue&type=template&id=096cd2b4&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/forms/settings/blog/LayoutForm.vue?vue&type=script&lang=js&
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
/* harmony default export */ var LayoutFormvue_type_script_lang_js_ = ({
  props: {
    layout: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/forms/settings/blog/LayoutForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_LayoutFormvue_type_script_lang_js_ = (LayoutFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(25);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var VCard = __webpack_require__(200);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js + 2 modules
var VSelect = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSwitch/VSwitch.js
var VSwitch = __webpack_require__(190);

// CONCATENATED MODULE: ./components/forms/settings/blog/LayoutForm.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_LayoutFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "096cd2b4",
  "e825c26c"
  
)

/* harmony default export */ var LayoutForm = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */




installComponents_default()(component, {VCardText: VCard["d" /* VCardText */],VSelect: VSelect["a" /* default */],VSwitch: VSwitch["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=108.js.map