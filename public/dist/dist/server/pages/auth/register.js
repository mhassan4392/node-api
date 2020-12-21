exports.ids = [23];
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

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/auth/register.vue?vue&type=template&id=a3f1e868&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-col',{attrs:{"cols":"11","md":"4","sm":"6"}},[_c('v-card',{staticClass:"py-8 px-5 white black--text"},[_c('h1',{staticClass:"text-center"},[_vm._v(_vm._s(_vm.$t('auth.register.heading')))]),_vm._v(" "),_c('v-card-text',[_c('base-alert',{attrs:{"display":"register-page"}}),_vm._v(" "),_c('v-form',{ref:"form",on:{"submit":function($event){$event.preventDefault();return _vm.register($event)}},model:{value:(_vm.valid),callback:function ($$v) {_vm.valid=$$v},expression:"valid"}},[_c('div',[_c('v-text-field',{attrs:{"color":"primary","prepend-icon":"mdi-account","label":_vm.$t('auth.register.form.labels.name'),"rules":[_vm.rules.required],"light":""},model:{value:(_vm.user.name),callback:function ($$v) {_vm.$set(_vm.user, "name", $$v)},expression:"user.name"}})],1),_vm._v(" "),_c('div',[_c('v-text-field',{attrs:{"color":"primary","prepend-icon":"mdi-email","type":"email","label":_vm.$t('auth.register.form.labels.email'),"rules":[_vm.rules.required, _vm.rules.isEmail],"light":""},model:{value:(_vm.user.email),callback:function ($$v) {_vm.$set(_vm.user, "email", $$v)},expression:"user.email"}})],1),_vm._v(" "),_c('div',[_c('v-text-field',{attrs:{"color":"primary","prepend-icon":"mdi-lock","append-icon":_vm.showPassword ? 'mdi-eye' : 'mdi-eye-off',"type":_vm.showPassword ? 'text' : 'password',"label":_vm.$t('auth.register.form.labels.password'),"rules":[_vm.rules.required, _vm.rules.passwordMinLength],"light":""},on:{"click:append":function($event){_vm.showPassword = !_vm.showPassword}},model:{value:(_vm.user.password),callback:function ($$v) {_vm.$set(_vm.user, "password", $$v)},expression:"user.password"}})],1),_vm._v(" "),_c('div',[_c('v-text-field',{attrs:{"color":"primary","prepend-icon":"mdi-lock","type":"password","label":_vm.$t('auth.register.form.labels.confirmPassword'),"rules":[
              _vm.rules.required,
              _vm.rules.confirmPassword(_vm.confirmPassword, _vm.user.password)
            ],"light":""},model:{value:(_vm.confirmPassword),callback:function ($$v) {_vm.confirmPassword=$$v},expression:"confirmPassword"}})],1),_vm._v(" "),_c('div',[_c('v-btn',{attrs:{"loading":_vm.$store.state.loading.auth.register,"color":"primary","block":"","type":"submit"}},[_vm._v(_vm._s(_vm.$t('auth.register.button.text')))])],1),_vm._v(" "),_c('v-divider')],1),_vm._v(" "),_c('div',{staticClass:"text-center mt-4 black--text"},[_vm._v("\n        "+_vm._s(_vm.$t('auth.register.footerText'))+"\n        "),_c('nuxt-link',{attrs:{"to":"/auth/login"}},[_vm._v(_vm._s(_vm.$t('auth.register.links.goToLogin')))])],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/auth/register.vue?vue&type=template&id=a3f1e868&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(38);

// EXTERNAL MODULE: ./mixins/validations.js
var validations = __webpack_require__(493);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/auth/register.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var registervue_type_script_lang_js_ = ({
  mixins: [validations["a" /* default */]],

  data() {
    return {
      user: {
        name: '',
        email: '',
        role: '',
        password: ''
      },
      confirmPassword: '',
      showPassword: false
    };
  },

  computed: { ...Object(external_vuex_["mapGetters"])('role', ['getRole'])
  },
  methods: {
    async register() {
      try {
        this.$refs.form.validate();

        if (this.valid) {
          this.$store.commit('alert/REMOVE_ALERT');
          this.$store.commit('loading/SET_LOADING', {
            option: 'auth.register',
            value: true
          });
          this.user.role = this.getRole('user') ? this.getRole('user')._id : '';
          await this.$axios.post('/api/auth/register', this.user);
          this.$store.commit('loading/SET_LOADING', {
            option: 'auth.register',
            value: false
          });
          const alert = {
            type: 'success',
            display: 'login-page',
            show: true,
            text: 'successMessages.auth.userRegisterd'
          };
          this.$store.commit('alert/SET_ALERT', alert);
          this.$router.push('/auth/login');
        }
      } catch (e) {
        const alert = {
          type: 'error',
          display: 'register-page',
          show: true,
          text: e.response ? e.response.data.message : e.message
        };
        this.$store.commit('alert/SET_ALERT', alert);
        this.$store.commit('loading/SET_LOADING', {
          option: 'auth.register',
          value: false
        });
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/auth/register.vue?vue&type=script&lang=js&
 /* harmony default export */ var auth_registervue_type_script_lang_js_ = (registervue_type_script_lang_js_); 
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(186);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(165);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(185);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js
var VTextField = __webpack_require__(23);

// CONCATENATED MODULE: ./pages/auth/register.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  auth_registervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "43e785be"
  
)

/* harmony default export */ var register = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */








installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardText: components_VCard["d" /* VCardText */],VCol: VCol["a" /* default */],VDivider: VDivider["a" /* default */],VForm: VForm["a" /* default */],VTextField: VTextField["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=register.js.map