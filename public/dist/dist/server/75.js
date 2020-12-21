exports.ids = [75];
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

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/forms/RoleForm.vue?vue&type=template&id=7e706ab8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card-text',[_c('v-container',[_c('v-row',[_c('v-col',[_c('v-text-field',{attrs:{"label":_vm.$t('forms.labels.title'),"outlined":"","disabled":!_vm.notAllowedToChange,"rules":[_vm.rules.required]},model:{value:(_vm.role.title),callback:function ($$v) {_vm.$set(_vm.role, "title", $$v)},expression:"role.title"}}),_vm._v(" "),(_vm.notAdmin)?_c('div',[_c('h2',{staticClass:"mb-5 mt-2"},[_vm._v("Page Permissions")]),_vm._v(" "),_vm._l((_vm.routes),function(route,index){return _c('div',{key:index,staticClass:"mt-4"},[(_vm.checkPossibility(route.name ? route.name : route.path))?_c('div',[_c('v-switch',{attrs:{"value":_vm.getName(route.name ? route.name : route.path),"label":_vm.getName(route.name ? route.name : route.path)},model:{value:(_vm.role.pagePermissions),callback:function ($$v) {_vm.$set(_vm.role, "pagePermissions", $$v)},expression:"role.pagePermissions"}}),_vm._v(" "),_vm._l((route.children),function(rout,inde){return _c('div',{key:inde},[(
                    _vm.getName(rout.name ? rout.name : rout.path) !==
                      _vm.getName(route.name ? route.name : route.path)
                  )?_c('div',[_c('v-switch',{attrs:{"value":rout.name ? rout.name : rout.path,"label":rout.name ? rout.name : rout.path},model:{value:(_vm.role.pagePermissions),callback:function ($$v) {_vm.$set(_vm.role, "pagePermissions", $$v)},expression:"role.pagePermissions"}})],1):_vm._e(),_vm._v(" "),_vm._l((rout.children),function(rou,ind){return _c('div',{key:ind},[(
                      _vm.getName(rout.name ? rout.name : rout.path) !==
                        _vm.getName(rou.name ? rou.name : rou.path)
                    )?_c('div',[_c('v-switch',{attrs:{"value":rou.name ? rou.name : rou.path,"label":rou.name ? rou.name : rou.path},model:{value:(_vm.role.pagePermissions),callback:function ($$v) {_vm.$set(_vm.role, "pagePermissions", $$v)},expression:"role.pagePermissions"}})],1):_vm._e(),_vm._v(" "),_vm._l((rou.children),function(ro,i){return _c('div',{key:i},[_c('v-switch',{attrs:{"value":ro.name ? ro.name : ro.path,"label":ro.name ? ro.name : ro.path},model:{value:(_vm.role.pagePermissions),callback:function ($$v) {_vm.$set(_vm.role, "pagePermissions", $$v)},expression:"role.pagePermissions"}})],1)})],2)})],2)})],2):_vm._e()])})],2):_vm._e()],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/forms/RoleForm.vue?vue&type=template&id=7e706ab8&

// EXTERNAL MODULE: ./mixins/validations.js
var validations = __webpack_require__(493);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/forms/RoleForm.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var RoleFormvue_type_script_lang_js_ = ({
  mixins: [validations["a" /* default */]],
  props: {
    role: {
      type: Object,
      required: true
    },
    edit: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      routes: this.$router.options.routes
    };
  },

  computed: {
    notAllowedToChange() {
      if (this.role && this.role.title && (this.role.title === 'admin' || this.role.title === 'user')) {
        return false;
      }

      return true;
    },

    notAdmin() {
      if (this.role && this.role.title && this.role.title === 'admin') {
        return false;
      }

      return true;
    }

  },
  methods: {
    getName(name) {
      let n;

      if (name.startsWith('/')) {
        n = name.replace('/', '');
      } else {
        n = name;
      }

      return n;
    },

    checkPossibility(route) {
      if (route.startsWith('/dashboard')) {
        return true;
      }

      return false;
    }

  }
});
// CONCATENATED MODULE: ./components/forms/RoleForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var forms_RoleFormvue_type_script_lang_js_ = (RoleFormvue_type_script_lang_js_); 
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSwitch/VSwitch.js
var VSwitch = __webpack_require__(190);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js
var VTextField = __webpack_require__(23);

// CONCATENATED MODULE: ./components/forms/RoleForm.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  forms_RoleFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3afcc3f5"
  
)

/* harmony default export */ var RoleForm = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */







installComponents_default()(component, {VCardText: VCard["d" /* VCardText */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */],VSwitch: VSwitch["a" /* default */],VTextField: VTextField["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=75.js.map