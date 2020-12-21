exports.ids = [90];
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

/***/ 640:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/sidebar/SidebarNewsletter.vue?vue&type=template&id=6fdfddec&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-card',{staticClass:"mb-8",attrs:{"light":""}},[_c('v-toolbar',{staticClass:"primary white--text"},[_c('v-card-title',[_vm._v("\n        "+_vm._s(_vm.$t('sidebar.newsletter.heading'))+"\n      ")])],1),_vm._v(" "),_c('v-card-text',[_c('base-alert',{attrs:{"display":"sidebar-newsletter"}}),_vm._v(" "),_c('p',{staticClass:"text-left"},[_vm._v(_vm._s(_vm.$t('sidebar.newsletter.text')))]),_vm._v(" "),_c('v-form',{ref:"subscriberSidebarForm",on:{"submit":function($event){$event.preventDefault();return _vm.save($event)}},model:{value:(_vm.valid),callback:function ($$v) {_vm.valid=$$v},expression:"valid"}},[_c('v-text-field',{attrs:{"rounded":"","prepend-inner-icon":"mdi-magnify","outlined":"","dense":"","single-line":"","label":_vm.$t('sidebar.newsletter.subscribeInput.label'),"required":"","rules":[_vm.rules.required, _vm.rules.isEmail]},model:{value:(_vm.item.email),callback:function ($$v) {_vm.$set(_vm.item, "email", $$v)},expression:"item.email"}}),_vm._v(" "),_c('div',{staticClass:"text-center"},[_c('v-btn',{staticClass:"primary white--text mt-3",attrs:{"loading":_vm.$store.state.loading.newsletter,"rounded":"","type":"submit"}},[_c('v-icon',{staticClass:"mr-2"},[_vm._v("mdi-email")]),_vm._v("\n            "+_vm._s(_vm.$t('sidebar.newsletter.button.text'))+"\n          ")],1)],1)],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/sidebar/SidebarNewsletter.vue?vue&type=template&id=6fdfddec&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(38);

// EXTERNAL MODULE: ./mixins/validations.js
var validations = __webpack_require__(493);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sidebar/SidebarNewsletter.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var SidebarNewslettervue_type_script_lang_js_ = ({
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
      this.$refs.subscriberSidebarForm.validate();

      if (this.valid) {
        const payload = {
          subscriber: this.item,
          axios: this.$axios,
          form: this.$refs.subscriberSidebarForm,
          alertDisplay: 'sidebar-newsletter'
        };
        await this.addSubscriber(payload);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/sidebar/SidebarNewsletter.vue?vue&type=script&lang=js&
 /* harmony default export */ var sidebar_SidebarNewslettervue_type_script_lang_js_ = (SidebarNewslettervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(25);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(94);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(183);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(200);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(185);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js
var VTextField = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/VToolbar.js
var VToolbar = __webpack_require__(35);

// CONCATENATED MODULE: ./components/sidebar/SidebarNewsletter.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sidebar_SidebarNewslettervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6fdfddec",
  "272bbe52"
  
)

/* harmony default export */ var SidebarNewsletter = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */









installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardText: components_VCard["d" /* VCardText */],VCardTitle: components_VCard["e" /* VCardTitle */],VForm: VForm["a" /* default */],VIcon: VIcon["a" /* default */],VTextField: VTextField["a" /* default */],VToolbar: VToolbar["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=90.js.map