exports.ids = [73];
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

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/blog/comments/CommentForm.vue?vue&type=template&id=ab09208a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-form',{ref:"commentForm",on:{"submit":function($event){$event.preventDefault();return _vm.add($event)}},model:{value:(_vm.valid),callback:function ($$v) {_vm.valid=$$v},expression:"valid"}},[_c('v-textarea',{attrs:{"label":_vm.$t('comments.form.commentLabel'),"single-line":"","outlined":"","rounded":"","rules":[_vm.rules.required]},model:{value:(_vm.text),callback:function ($$v) {_vm.text=$$v},expression:"text"}}),_vm._v(" "),(!_vm.$auth.loggedIn)?_c('v-text-field',{attrs:{"outlined":"","rounded":"","label":_vm.$t('comments.form.nameLabel'),"rules":[_vm.rules.required]},model:{value:(_vm.name),callback:function ($$v) {_vm.name=$$v},expression:"name"}}):_vm._e(),_vm._v(" "),(!_vm.$auth.loggedIn)?_c('v-text-field',{attrs:{"outlined":"","rounded":"","label":_vm.$t('comments.form.emailLabel'),"rules":[_vm.rules.required, _vm.rules.isEmail]},model:{value:(_vm.email),callback:function ($$v) {_vm.email=$$v},expression:"email"}}):_vm._e(),_vm._v(" "),_c('v-btn',{staticClass:"primary white--text",attrs:{"loading":_vm.loading,"type":"submit","rounded":""}},[_vm._v("\n    "+_vm._s(_vm.$t('comments.form.button.text'))+"\n  ")])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/blog/comments/CommentForm.vue?vue&type=template&id=ab09208a&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(38);

// EXTERNAL MODULE: ./mixins/validations.js
var validations = __webpack_require__(493);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blog/comments/CommentForm.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var CommentFormvue_type_script_lang_js_ = ({
  mixins: [validations["a" /* default */]],
  props: {
    post: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      text: '',
      name: '',
      email: '',
      loading: false
    };
  },

  methods: { ...Object(external_vuex_["mapActions"])('comment', ['addComment']),

    async add() {
      this.$refs.commentForm.validate();

      if (this.valid) {
        let cm = {};

        if (this.$auth.loggedIn) {
          cm = {
            text: this.text,
            post: this.post._id,
            user: this.$auth.user._id,
            slug: this.post.slug
          };
        } else {
          cm = {
            text: this.text,
            post: this.post._id,
            name: this.name,
            email: this.email,
            slug: this.post.slug
          };
        }

        const payload = cm;

        try {
          this.loading = true;
          await this.addComment({
            comment: payload,
            axios: this.$axios
          });
          this.$refs.commentForm.reset();
          this.loading = false;
        } catch (e) {
          this.loading = false;
        }
      }
    }

  }
});
// CONCATENATED MODULE: ./components/blog/comments/CommentForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var comments_CommentFormvue_type_script_lang_js_ = (CommentFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(25);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(94);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(185);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js
var VTextField = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(193);

// CONCATENATED MODULE: ./components/blog/comments/CommentForm.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  comments_CommentFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ab09208a",
  "1b2662ec"
  
)

/* harmony default export */ var CommentForm = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */





installComponents_default()(component, {VBtn: VBtn["a" /* default */],VForm: VForm["a" /* default */],VTextField: VTextField["a" /* default */],VTextarea: VTextarea["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=73.js.map