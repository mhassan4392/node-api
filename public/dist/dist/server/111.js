exports.ids = [111];
exports.modules = {

/***/ 641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/sidebar/SidebarCategories.vue?vue&type=template&id=2a569f14&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-card',{staticClass:"mb-8",attrs:{"light":""}},[_c('v-toolbar',{staticClass:"primary white--text"},[_c('v-card-title',[_vm._v("\n        "+_vm._s(_vm.$t('sidebar.categories.heading'))+"Categories\n      ")])],1),_vm._v(" "),(_vm.$store.state.loading.blog.categories)?_c('div',_vm._l((5),function(i){return _c('v-skeleton-loader',{key:i,attrs:{"type":"list-item-avatar, divider"}})}),1):_c('div',_vm._l((_vm.post.categories),function(category,index){return _c('div',{key:index},[_c('v-list-item',{attrs:{"link":"","to":_vm.$i18n.path('/blog/category/' + category.slug)}},[_c('v-list-item-content',[_c('v-list-item-title',{staticClass:"text-left"},[_c('div',[_vm._v(_vm._s(category.title))])])],1)],1)],1)}),0)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/sidebar/SidebarCategories.vue?vue&type=template&id=2a569f14&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sidebar/SidebarCategories.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SidebarCategoriesvue_type_script_lang_js_ = ({
  computed: { ...Object(external_vuex_["mapState"])(['post'])
  },

  created() {
    this.fetchCategories(this.$axios);
  },

  methods: { ...Object(external_vuex_["mapActions"])('post', ['fetchCategories'])
  }
});
// CONCATENATED MODULE: ./components/sidebar/SidebarCategories.vue?vue&type=script&lang=js&
 /* harmony default export */ var sidebar_SidebarCategoriesvue_type_script_lang_js_ = (SidebarCategoriesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(25);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(183);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(200);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(96);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 1 modules
var VList = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSkeletonLoader/VSkeletonLoader.js
var VSkeletonLoader = __webpack_require__(173);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/VToolbar.js
var VToolbar = __webpack_require__(35);

// CONCATENATED MODULE: ./components/sidebar/SidebarCategories.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sidebar_SidebarCategoriesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2a569f14",
  "31e3f8ba"
  
)

/* harmony default export */ var SidebarCategories = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */








installComponents_default()(component, {VCard: VCard["a" /* default */],VCardTitle: components_VCard["e" /* VCardTitle */],VListItem: VListItem["a" /* default */],VListItemContent: VList["g" /* VListItemContent */],VListItemTitle: VList["k" /* VListItemTitle */],VSkeletonLoader: VSkeletonLoader["a" /* default */],VToolbar: VToolbar["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=111.js.map