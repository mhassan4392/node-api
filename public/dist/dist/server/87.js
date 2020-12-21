exports.ids = [87];
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

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/forms/utilities/ContactForm.vue?vue&type=template&id=f26f0ef2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card-text',[_c('v-container',[_c('v-row',[_c('v-col',[_c('v-text-field',{attrs:{"rules":[_vm.rules.required],"outlined":"","label":_vm.$t('forms.labels.title')},model:{value:(_vm.contact.title),callback:function ($$v) {_vm.$set(_vm.contact, "title", $$v)},expression:"contact.title"}}),_vm._v(" "),_c('v-text-field',{attrs:{"outlined":"","label":_vm.$t('forms.labels.translation')},model:{value:(_vm.contact.translation),callback:function ($$v) {_vm.$set(_vm.contact, "translation", $$v)},expression:"contact.translation"}}),_vm._v(" "),_c('v-text-field',{attrs:{"rules":[_vm.rules.required],"outlined":"","label":_vm.$t('forms.labels.detail')},model:{value:(_vm.contact.detail),callback:function ($$v) {_vm.$set(_vm.contact, "detail", $$v)},expression:"contact.detail"}}),_vm._v(" "),_c('v-text-field',{attrs:{"rules":[_vm.rules.required],"outlined":"","label":_vm.$t('forms.labels.icon')},model:{value:(_vm.contact.icon),callback:function ($$v) {_vm.$set(_vm.contact, "icon", $$v)},expression:"contact.icon"}})],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/forms/utilities/ContactForm.vue?vue&type=template&id=f26f0ef2&

// EXTERNAL MODULE: ./mixins/validations.js
var validations = __webpack_require__(493);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/forms/utilities/ContactForm.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ContactFormvue_type_script_lang_js_ = ({
  mixins: [validations["a" /* default */]],
  props: {
    contact: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/forms/utilities/ContactForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var utilities_ContactFormvue_type_script_lang_js_ = (ContactFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(25);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var VCard = __webpack_require__(200);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(186);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(176);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(162);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js
var VTextField = __webpack_require__(23);

// CONCATENATED MODULE: ./components/forms/utilities/ContactForm.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  utilities_ContactFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "36c9fd18"
  
)

/* harmony default export */ var ContactForm = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */






installComponents_default()(component, {VCardText: VCard["d" /* VCardText */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */],VTextField: VTextField["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=87.js.map