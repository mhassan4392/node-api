exports.ids = [8];
exports.modules = {

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      valid: false,
      rules: {
        required: value => !!value || this.$t('errorMessages.form.fieldRequired'),
        confirmPassword: (value, v2) => value === v2 || this.$t('errorMessages.form.confirmPasswordNotMatch'),
        isEmail: value => // eslint-disable-next-line
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) || this.$t('errorMessages.form.addValidEmail'),
        passwordMinLength: value => value && value.length >= 8 || this.$t('errorMessages.form.passwordLength'),
        isImage: value => {
          if (value && value.type) {
            return value.type.startsWith('image') || this.$t('errorMessages.form.plzUploadImage');
          } else {
            return true;
          }
        },
        imageSize: value => {
          if (value && value.size) {
            return value.size < 2048000 || this.$t('errorMessages.form.imageSize');
          } else {
            return true;
          }
        }
      }
    };
  },

  methods: {
    validate() {
      this.$refs.form.validate();
    }

  }
});

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(537);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("3a4c11e3", content, true, context)
};

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppContact_vue_vue_type_style_index_0_id_4258bc12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(511);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppContact_vue_vue_type_style_index_0_id_4258bc12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppContact_vue_vue_type_style_index_0_id_4258bc12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppContact_vue_vue_type_style_index_0_id_4258bc12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppContact_vue_vue_type_style_index_0_id_4258bc12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppContact_vue_vue_type_style_index_0_id_4258bc12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".address-details[data-v-4258bc12]{border-bottom:1px solid grey}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/AppContact.vue?vue&type=template&id=4258bc12&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"grey darken-3 white--text py-10"},[_c('v-container',[_c('base-alert',{attrs:{"display":"app-contact"}}),_vm._v(" "),_c('v-row',[_c('v-col',{attrs:{"cols":"12","md":"6"}},[_c('h1',[_vm._v(_vm._s(_vm.$t('index.contact.heading')))]),_vm._v(" "),_c('base-divider',{staticClass:"mt-1",attrs:{"width":"100px"}}),_vm._v(" "),_c('p',{staticClass:"py-6"},[_vm._v("\n          "+_vm._s(_vm.$t('index.contact.text'))+"\n        ")]),_vm._v(" "),_c('div',_vm._l((_vm.$store.state.contact.contacts),function(contact,i){return _c('div',{key:i,staticClass:"d-flex align-start address-details mt-4",staticStyle:{"width":"70%"}},[_c('v-avatar',{staticClass:"mr-3",attrs:{"size":"50"}},[_c('v-icon',{staticClass:"primary",attrs:{"size":"30"}},[_vm._v(_vm._s(contact.icon))])],1),_vm._v(" "),_c('div',[_c('h3',[_vm._v(_vm._s(contact.title))]),_vm._v(" "),_c('p',[_vm._v("\n                "+_vm._s(contact.detail)+"\n              ")])])],1)}),0)],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"6"}},[_c('v-form',{ref:"contactForm",on:{"submit":function($event){$event.preventDefault();return _vm.save($event)}},model:{value:(_vm.valid),callback:function ($$v) {_vm.valid=$$v},expression:"valid"}},[_c('v-text-field',{attrs:{"label":_vm.$t('index.contact.nameInput.label'),"outlined":"","rounded":"","dark":"","rules":[_vm.rules.required],"color":"primary"},model:{value:(_vm.item.name),callback:function ($$v) {_vm.$set(_vm.item, "name", $$v)},expression:"item.name"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":_vm.$t('index.contact.emailInput.label'),"outlined":"","rounded":"","dark":"","color":"primary","rules":[_vm.rules.required, _vm.rules.isEmail]},model:{value:(_vm.item.email),callback:function ($$v) {_vm.$set(_vm.item, "email", $$v)},expression:"item.email"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":_vm.$t('index.contact.phoneInput.label'),"outlined":"","dark":"","rounded":"","color":"primary","rules":[_vm.rules.required]},model:{value:(_vm.item.phone),callback:function ($$v) {_vm.$set(_vm.item, "phone", $$v)},expression:"item.phone"}}),_vm._v(" "),_c('v-textarea',{attrs:{"label":_vm.$t('index.contact.messageInput.label'),"outlined":"","dark":"","rounded":"","color":"primary","rules":[_vm.rules.required]},model:{value:(_vm.item.message),callback:function ($$v) {_vm.$set(_vm.item, "message", $$v)},expression:"item.message"}}),_vm._v(" "),_c('div',{staticClass:"text-center"},[_c('v-btn',{attrs:{"rounded":"","type":"submit","loading":_vm.$store.state.loading.inquiry,"large":"","color":"primary px-8"}},[_vm._v(_vm._s(_vm.$t('index.contact.button.text')))])],1)],1)],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/AppContact.vue?vue&type=template&id=4258bc12&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(38);

// EXTERNAL MODULE: ./mixins/validations.js
var validations = __webpack_require__(493);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AppContact.vue?vue&type=script&lang=js&
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


/* harmony default export */ var AppContactvue_type_script_lang_js_ = ({
  mixins: [validations["a" /* default */]],

  data() {
    return {
      item: {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    };
  },

  methods: { ...Object(external_vuex_["mapActions"])('inquiries', ['addInquiry']),

    async save() {
      this.$refs.contactForm.validate();

      if (this.valid) {
        const payload = {
          inquiry: this.item,
          axios: this.$axios,
          form: this.$refs.contactForm
        };
        await this.addInquiry(payload);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/AppContact.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AppContactvue_type_script_lang_js_ = (AppContactvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(25);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(170);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(94);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(186);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(176);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(185);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(162);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js
var VTextField = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(193);

// CONCATENATED MODULE: ./components/AppContact.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(536)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AppContactvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4258bc12",
  "4ab2c57a"
  
)

/* harmony default export */ var AppContact = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */










installComponents_default()(component, {VAvatar: VAvatar["a" /* default */],VBtn: VBtn["a" /* default */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VForm: VForm["a" /* default */],VIcon: VIcon["a" /* default */],VRow: VRow["a" /* default */],VTextField: VTextField["a" /* default */],VTextarea: VTextarea["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=8.js.map