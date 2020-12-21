exports.ids = [114];
exports.modules = {

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/sidebar/SidebarSocialMedia.vue?vue&type=template&id=0212d531&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-card',{staticClass:"mb-8",attrs:{"light":""}},[_c('v-toolbar',{staticClass:"primary white--text"},[_c('v-card-title',[_vm._v("\n        "+_vm._s(_vm.$t('sidebar.socialMedia.heading'))+"\n      ")])],1),_vm._v(" "),_c('v-card-text',[(_vm.$store.state.loading.menu.menus)?_c('div',_vm._l((5),function(i){return _c('v-skeleton-loader',{key:i,attrs:{"type":"list-item-avatar"}})}),1):_c('div',[_c('p',{staticClass:"mb-1 mt-3"},[_vm._v("\n          "+_vm._s(_vm.$t('sidebar.socialMedia.text'))+"\n        ")]),_vm._v(" "),_c('div',{staticClass:"text-center"},_vm._l((_vm.getMenu('social-media-links', _vm.$auth)),function(icon,i){return _c('v-btn',{key:i,staticClass:"mt-8 mx-2",attrs:{"text":"","to":icon.route,"rounded":"","fab":"","target":"_blank"}},[_c('v-icon',{attrs:{"size":"30"}},[_vm._v(_vm._s(icon.icon))])],1)}),1)])])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/sidebar/SidebarSocialMedia.vue?vue&type=template&id=0212d531&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sidebar/SidebarSocialMedia.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SidebarSocialMediavue_type_script_lang_js_ = ({
  computed: { ...Object(external_vuex_["mapGetters"])('menu', ['getMenu'])
  }
});
// CONCATENATED MODULE: ./components/sidebar/SidebarSocialMedia.vue?vue&type=script&lang=js&
 /* harmony default export */ var sidebar_SidebarSocialMediavue_type_script_lang_js_ = (SidebarSocialMediavue_type_script_lang_js_); 
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSkeletonLoader/VSkeletonLoader.js
var VSkeletonLoader = __webpack_require__(173);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/VToolbar.js
var VToolbar = __webpack_require__(35);

// CONCATENATED MODULE: ./components/sidebar/SidebarSocialMedia.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sidebar_SidebarSocialMediavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0212d531",
  "c0c8136e"
  
)

/* harmony default export */ var SidebarSocialMedia = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */








installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardText: components_VCard["d" /* VCardText */],VCardTitle: components_VCard["e" /* VCardTitle */],VIcon: VIcon["a" /* default */],VSkeletonLoader: VSkeletonLoader["a" /* default */],VToolbar: VToolbar["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=114.js.map