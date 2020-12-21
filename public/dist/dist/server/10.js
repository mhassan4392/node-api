exports.ids = [10];
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

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/forms/PageForm.vue?vue&type=template&id=9a67ebaa&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',[_c('v-row',[_c('v-col',{attrs:{"cols":"12","lg":"6"}},[_c('v-text-field',{attrs:{"label":_vm.$t('forms.labels.title'),"rules":[_vm.rules.required],"outlined":"","dense":""},model:{value:(_vm.page.title),callback:function ($$v) {_vm.$set(_vm.page, "title", $$v)},expression:"page.title"}}),_vm._v(" "),_c('v-select',{attrs:{"items":['published', 'draft'],"label":_vm.$t('forms.labels.status'),"rules":[_vm.rules.required],"outlined":"","dense":""},model:{value:(_vm.page.status),callback:function ($$v) {_vm.$set(_vm.page, "status", $$v)},expression:"page.status"}}),_vm._v(" "),_c('v-textarea',{attrs:{"label":_vm.$t('forms.labels.excerpt'),"outlined":"","dense":""},model:{value:(_vm.page.excerpt),callback:function ($$v) {_vm.$set(_vm.page, "excerpt", $$v)},expression:"page.excerpt"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","lg":"6"}},[_c('v-switch',{attrs:{"label":_vm.$t('forms.labels.showSidebar')},model:{value:(_vm.page.showSidebar),callback:function ($$v) {_vm.$set(_vm.page, "showSidebar", $$v)},expression:"page.showSidebar"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":_vm.$t('forms.labels.keywords'),"outlined":"","dense":""},model:{value:(_vm.page.keywords),callback:function ($$v) {_vm.$set(_vm.page, "keywords", $$v)},expression:"page.keywords"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":_vm.$t('forms.labels.description'),"outlined":"","dense":""},model:{value:(_vm.page.description),callback:function ($$v) {_vm.$set(_vm.page, "description", $$v)},expression:"page.description"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12"}}),_vm._v(" "),_c('v-col',{staticClass:"black--text mx-auto",attrs:{"cols":"12"}},[_c('app-editor',{model:{value:(_vm.page.body),callback:function ($$v) {_vm.$set(_vm.page, "body", $$v)},expression:"page.body"}})],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/forms/PageForm.vue?vue&type=template&id=9a67ebaa&

// EXTERNAL MODULE: ./mixins/validations.js
var validations = __webpack_require__(493);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/forms/PageForm.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var PageFormvue_type_script_lang_js_ = ({
  components: {
    AppEditor: () => __webpack_require__.e(/* import() */ 9).then(__webpack_require__.bind(null, 648))
  },
  mixins: [validations["a" /* default */]],
  props: {
    page: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/forms/PageForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var forms_PageFormvue_type_script_lang_js_ = (PageFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(25);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(186);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(176);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(162);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js + 2 modules
var VSelect = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSwitch/VSwitch.js
var VSwitch = __webpack_require__(190);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js
var VTextField = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(193);

// CONCATENATED MODULE: ./components/forms/PageForm.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  forms_PageFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "41a87d0e"
  
)

/* harmony default export */ var PageForm = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */








installComponents_default()(component, {VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */],VSelect: VSelect["a" /* default */],VSwitch: VSwitch["a" /* default */],VTextField: VTextField["a" /* default */],VTextarea: VTextarea["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=10.js.map