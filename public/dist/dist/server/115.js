exports.ids = [115];
exports.modules = {

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/sidebar/SidebarTags.vue?vue&type=template&id=582678b3&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-card',{staticClass:"mb-8",attrs:{"light":""}},[_c('v-toolbar',{staticClass:"primary white--text"},[_c('v-card-title',[_vm._v("\n        "+_vm._s(_vm.$t('sidebar.tags.heading'))+"\n      ")])],1),_vm._v(" "),_c('v-card-text',[(_vm.$store.state.loading.blog.tags)?_c('div',_vm._l((5),function(i){return _c('v-skeleton-loader',{key:i,attrs:{"type":"list-item-avatar, divider"}})}),1):_c('div',_vm._l((_vm.post.tags),function(tag,index){return _c('span',{key:index},[_c('v-chip',{staticClass:"mr-2 mb-2",attrs:{"link":"","to":_vm.$i18n.path('/blog/tag/' + tag.slug),"color":"primary"}},[_vm._v("\n            "+_vm._s(tag.title)+"\n          ")])],1)}),0)])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/sidebar/SidebarTags.vue?vue&type=template&id=582678b3&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sidebar/SidebarTags.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SidebarTagsvue_type_script_lang_js_ = ({
  computed: { ...Object(external_vuex_["mapState"])(['post'])
  },

  created() {
    this.fetchTags(this.$axios);
  },

  methods: { ...Object(external_vuex_["mapActions"])('post', ['fetchTags'])
  }
});
// CONCATENATED MODULE: ./components/sidebar/SidebarTags.vue?vue&type=script&lang=js&
 /* harmony default export */ var sidebar_SidebarTagsvue_type_script_lang_js_ = (SidebarTagsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(25);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(183);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(200);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(139);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSkeletonLoader/VSkeletonLoader.js
var VSkeletonLoader = __webpack_require__(173);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/VToolbar.js
var VToolbar = __webpack_require__(35);

// CONCATENATED MODULE: ./components/sidebar/SidebarTags.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sidebar_SidebarTagsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "582678b3",
  "3353c692"
  
)

/* harmony default export */ var SidebarTags = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */







installComponents_default()(component, {VCard: VCard["a" /* default */],VCardText: components_VCard["d" /* VCardText */],VCardTitle: components_VCard["e" /* VCardTitle */],VChip: VChip["a" /* default */],VSkeletonLoader: VSkeletonLoader["a" /* default */],VToolbar: VToolbar["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=115.js.map