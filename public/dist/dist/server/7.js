exports.ids = [7];
exports.modules = {

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/AppSocialMedia.vue?vue&type=template&id=33aa27d6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_vm._ssrNode("<div"+(_vm._ssrClass("py-10",!_vm.accent ? 'white black--text' : 'accent white--text'))+">","</div>",[_c('v-row',{attrs:{"justify":"center","align":"center"}},[_c('v-col',{staticClass:"text-center",attrs:{"cols":"12","md":"5"}},[_c('h1',{staticClass:"text-center"},[_vm._v(_vm._s(_vm.$t('index.socialMedia.heading')))]),_vm._v(" "),_c('base-divider',{staticClass:"mt-2 mb-4",attrs:{"center":"","width":"120px"}}),_vm._v(" "),_c('p',[_vm._v("\n          "+_vm._s(_vm.$t('index.socialMedia.text'))+"\n        ")]),_vm._v(" "),_vm._l((_vm.getMenu('social-media-links', _vm.$auth)),function(icon,i){return _c('v-btn',{key:i,staticClass:"mt-8 mx-4",attrs:{"color":!_vm.accent ? 'black' : 'white',"text":"","to":icon.route,"rounded":"","fab":"","target":"_blank"}},[_c('v-icon',{attrs:{"size":"40"}},[_vm._v(_vm._s(icon.icon))])],1)})],2)],1)],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/AppSocialMedia.vue?vue&type=template&id=33aa27d6&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AppSocialMedia.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var AppSocialMediavue_type_script_lang_js_ = ({
  props: {
    accent: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      icons: [{
        icon: 'mdi-facebook',
        link: 'facebook.com'
      }, {
        icon: 'mdi-twitter',
        link: 'twiiter.com'
      }, {
        icon: 'mdi-instagram',
        link: 'instagram.com'
      }, {
        icon: 'mdi-linkedin',
        link: 'linkedin.com'
      }]
    };
  },

  computed: { ...Object(external_vuex_["mapGetters"])('menu', ['getMenu', 'checkPermission', 'checkLog'])
  }
});
// CONCATENATED MODULE: ./components/AppSocialMedia.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AppSocialMediavue_type_script_lang_js_ = (AppSocialMediavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(25);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(94);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(186);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(162);

// CONCATENATED MODULE: ./components/AppSocialMedia.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AppSocialMediavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0eaf7151"
  
)

/* harmony default export */ var AppSocialMedia = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */





installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCol: VCol["a" /* default */],VIcon: VIcon["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=7.js.map