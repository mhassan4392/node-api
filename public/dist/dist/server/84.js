exports.ids = [84];
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

/***/ 649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/forms/settings/app/AppForm.vue?vue&type=template&id=32d221e4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card-text',[_c('v-row',[_c('v-col',[_c('v-text-field',{attrs:{"label":_vm.$t('forms.labels.title'),"outlined":""},model:{value:(_vm.app.title),callback:function ($$v) {_vm.$set(_vm.app, "title", $$v)},expression:"app.title"}}),_vm._v(" "),_c('div',{staticClass:"my-5"},[_c('base-image-uploader',{attrs:{"id":"app-favicon","width":"100px","image-path":"/uploads/app/","remove-button":{
            text: 'Remove Logo'
          },"label":_vm.$t('forms.labels.logo')},model:{value:(_vm.app.logo),callback:function ($$v) {_vm.$set(_vm.app, "logo", $$v)},expression:"app.logo"}})],1),_vm._v(" "),_c('div',{staticClass:"my-5"},[_c('base-image-uploader',{attrs:{"id":"app-logo","width":"100px","image-path":"/uploads/app/","remove-button":{
            text: 'Remove Favicon'
          },"label":_vm.$t('forms.labels.favicon')},model:{value:(_vm.app.favicon),callback:function ($$v) {_vm.$set(_vm.app, "favicon", $$v)},expression:"app.favicon"}})],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/forms/settings/app/AppForm.vue?vue&type=template&id=32d221e4&

// EXTERNAL MODULE: ./mixins/validations.js
var validations = __webpack_require__(493);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/forms/settings/app/AppForm.vue?vue&type=script&lang=js&
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

/* harmony default export */ var AppFormvue_type_script_lang_js_ = ({
  mixins: [validations["a" /* default */]],
  props: {
    app: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/forms/settings/app/AppForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var app_AppFormvue_type_script_lang_js_ = (AppFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(25);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var VCard = __webpack_require__(200);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(186);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(162);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js
var VTextField = __webpack_require__(23);

// CONCATENATED MODULE: ./components/forms/settings/app/AppForm.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  app_AppFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "10e40df4"
  
)

/* harmony default export */ var AppForm = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */





installComponents_default()(component, {VCardText: VCard["d" /* VCardText */],VCol: VCol["a" /* default */],VRow: VRow["a" /* default */],VTextField: VTextField["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=84.js.map