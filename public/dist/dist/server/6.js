exports.ids = [6];
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

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/AppNewsLetter.vue?vue&type=template&id=a702f6c4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_vm._ssrNode("<div class=\"pt-14 pb-6 grey darken-3 white--text\">","</div>",[_c('v-container',[_c('v-row',{attrs:{"justify":"center","align":"center"}},[_c('v-col',{attrs:{"cols":"12","md":"7"}},[_c('h1',{staticClass:"text-center"},[_vm._v(_vm._s(_vm.$t('index.newsletter.heading')))]),_vm._v(" "),_c('base-divider',{staticClass:"mt-2 mb-10",attrs:{"center":"","width":"150px"}}),_vm._v(" "),_c('base-alert',{attrs:{"display":"app-newsletter"}}),_vm._v(" "),_c('v-form',{ref:"subscribeForm",on:{"submit":function($event){$event.preventDefault();return _vm.save($event)}},model:{value:(_vm.valid),callback:function ($$v) {_vm.valid=$$v},expression:"valid"}},[_c('v-text-field',{attrs:{"rules":[_vm.rules.required, _vm.rules.isEmail],"outlined":"","rounded":"","dark":"","color":"primary","label":_vm.$t('index.newsletter.emailInput.label')},scopedSlots:_vm._u([{key:"append-outer",fn:function(){return [_c('v-btn',{staticClass:"primary white--text px-8",staticStyle:{"margin-top":"-18px"},attrs:{"rounded":"","height":"56","loading":_vm.$store.state.loading.newsletter,"type":"submit"}},[_vm._v("\n                  "+_vm._s(_vm.$t('index.newsletter.button.text'))+"\n                ")])]},proxy:true}]),model:{value:(_vm.item.email),callback:function ($$v) {_vm.$set(_vm.item, "email", $$v)},expression:"item.email"}})],1)],1)],1)],1)],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/AppNewsLetter.vue?vue&type=template&id=a702f6c4&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(38);

// EXTERNAL MODULE: ./components/base/BaseAlert.vue + 4 modules
var BaseAlert = __webpack_require__(236);

// EXTERNAL MODULE: ./mixins/validations.js
var validations = __webpack_require__(493);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AppNewsLetter.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var AppNewsLettervue_type_script_lang_js_ = ({
  components: {
    BaseAlert: BaseAlert["default"]
  },
  mixins: [validations["a" /* default */]],

  data() {
    return {
      item: {
        email: ''
      }
    };
  },

  methods: { ...Object(external_vuex_["mapActions"])('newsletter', ['addSubscriber']),

    async save() {
      this.$refs.subscribeForm.validate();

      if (this.valid) {
        const payload = {
          subscriber: this.item,
          axios: this.$axios,
          form: this.$refs.subscribeForm,
          alertDisplay: 'app-newsletter'
        };
        await this.addSubscriber(payload);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/AppNewsLetter.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AppNewsLettervue_type_script_lang_js_ = (AppNewsLettervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(25);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(94);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(186);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(176);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(185);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(162);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js
var VTextField = __webpack_require__(23);

// CONCATENATED MODULE: ./components/AppNewsLetter.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AppNewsLettervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "45c900ef"
  
)

/* harmony default export */ var AppNewsLetter = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */







installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VForm: VForm["a" /* default */],VRow: VRow["a" /* default */],VTextField: VTextField["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=6.js.map