exports.ids = [107];
exports.modules = {

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/forms/settings/blog/CommentsForm.vue?vue&type=template&id=1979e1ba&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card-text',[_c('v-text-field',{attrs:{"outlined":"","type":"number","dense":"","label":_vm.$t('forms.labels.commentsLimit')},model:{value:(_vm.comments.commentsLimit),callback:function ($$v) {_vm.$set(_vm.comments, "commentsLimit", $$v)},expression:"comments.commentsLimit"}}),_vm._v(" "),_c('v-text-field',{attrs:{"type":"number","outlined":"","dense":"","label":_vm.$t('forms.labels.repliesLimit')},model:{value:(_vm.comments.repliesLimit),callback:function ($$v) {_vm.$set(_vm.comments, "repliesLimit", $$v)},expression:"comments.repliesLimit"}}),_vm._v(" "),_c('v-switch',{attrs:{"label":_vm.$t('forms.labels.allowComments')},model:{value:(_vm.comments.allow),callback:function ($$v) {_vm.$set(_vm.comments, "allow", $$v)},expression:"comments.allow"}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/forms/settings/blog/CommentsForm.vue?vue&type=template&id=1979e1ba&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/forms/settings/blog/CommentsForm.vue?vue&type=script&lang=js&
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
/* harmony default export */ var CommentsFormvue_type_script_lang_js_ = ({
  props: {
    comments: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/forms/settings/blog/CommentsForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_CommentsFormvue_type_script_lang_js_ = (CommentsFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(25);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var VCard = __webpack_require__(200);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSwitch/VSwitch.js
var VSwitch = __webpack_require__(190);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js
var VTextField = __webpack_require__(23);

// CONCATENATED MODULE: ./components/forms/settings/blog/CommentsForm.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_CommentsFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1979e1ba",
  "0de51e94"
  
)

/* harmony default export */ var CommentsForm = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */




installComponents_default()(component, {VCardText: VCard["d" /* VCardText */],VSwitch: VSwitch["a" /* default */],VTextField: VTextField["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=107.js.map