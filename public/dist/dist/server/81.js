exports.ids = [81];
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

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/forms/profile/EditProfileForm.vue?vue&type=template&id=abfd1462&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card-text',[_c('v-container',[_c('v-row',[_c('v-col',{attrs:{"cols":"12"}},[_c('v-text-field',{attrs:{"label":_vm.$t('forms.labels.name'),"outlined":"","dense":"","rules":[_vm.rules.required]},model:{value:(_vm.user.name),callback:function ($$v) {_vm.$set(_vm.user, "name", $$v)},expression:"user.name"}}),_vm._v(" "),_c('v-select',{attrs:{"items":['male', 'female', 'other'],"label":_vm.$t('forms.labels.gender'),"rules":[_vm.rules.required],"outlined":"","dense":""},model:{value:(_vm.user.gender),callback:function ($$v) {_vm.$set(_vm.user, "gender", $$v)},expression:"user.gender"}}),_vm._v(" "),_c('v-menu',{ref:"menu",attrs:{"close-on-content-click":false,"transition":"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:_vm._u([{key:"activator",fn:function(ref){
var on = ref.on;
var attrs = ref.attrs;
return [_c('v-text-field',_vm._g(_vm._b({attrs:{"label":_vm.$t('forms.labels.dateOfBirth'),"outlined":"","dense":""},model:{value:(_vm.date),callback:function ($$v) {_vm.date=$$v},expression:"date"}},'v-text-field',attrs,false),on))]}}]),model:{value:(_vm.menu),callback:function ($$v) {_vm.menu=$$v},expression:"menu"}},[_vm._v(" "),_c('v-date-picker',{ref:"picker",attrs:{"max":new Date().toISOString().substr(0, 10),"min":"1950-01-01"},on:{"change":_vm.save},model:{value:(_vm.date),callback:function ($$v) {_vm.date=$$v},expression:"date"}})],1),_vm._v(" "),_c('v-textarea',{attrs:{"label":_vm.$t('forms.labels.bio'),"outlined":"","dense":""},model:{value:(_vm.user.bio),callback:function ($$v) {_vm.$set(_vm.user, "bio", $$v)},expression:"user.bio"}})],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/forms/profile/EditProfileForm.vue?vue&type=template&id=abfd1462&

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(79);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: ./mixins/validations.js
var validations = __webpack_require__(493);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/forms/profile/EditProfileForm.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var EditProfileFormvue_type_script_lang_js_ = ({
  mixins: [validations["a" /* default */]],
  props: {
    user: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      date: external_moment_default()(this.user.dob).format('YYYY-MM-DD'),
      menu: false
    };
  },

  watch: {
    menu(val) {
      val && setTimeout(() => this.$refs.picker.activePicker = 'YEAR');
    },

    user(to, from) {
      this.date = external_moment_default()(to.dob).format('YYYY-MM-DD');
    },

    date(to, from) {
      this.user.dob = to;
    }

  },
  methods: {
    save(date) {
      this.$refs.menu.save(date);
    }

  }
});
// CONCATENATED MODULE: ./components/forms/profile/EditProfileForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var profile_EditProfileFormvue_type_script_lang_js_ = (EditProfileFormvue_type_script_lang_js_); 
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDatePicker/VDatePicker.js
var VDatePicker = __webpack_require__(178);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/VMenu.js
var VMenu = __webpack_require__(179);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(162);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js + 2 modules
var VSelect = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js
var VTextField = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
var VTextarea = __webpack_require__(193);

// CONCATENATED MODULE: ./components/forms/profile/EditProfileForm.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  profile_EditProfileFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "005a1ef2"
  
)

/* harmony default export */ var EditProfileForm = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */










installComponents_default()(component, {VCardText: VCard["d" /* VCardText */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VDatePicker: VDatePicker["a" /* default */],VMenu: VMenu["a" /* default */],VRow: VRow["a" /* default */],VSelect: VSelect["a" /* default */],VTextField: VTextField["a" /* default */],VTextarea: VTextarea["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=81.js.map