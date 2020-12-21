exports.ids = [63];
exports.modules = {

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/page/_slug.vue?vue&type=template&id=da243794&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('page-showcase',{attrs:{"heading":_vm.page && _vm.page.title ? _vm.page.title : '',"text":_vm.page && _vm.page.excerpt ? _vm.page.excerpt : ''}}),_vm._ssrNode(" "),_c('v-container',[_c('v-row',[_c('v-col',{attrs:{"cols":"8"}},[(_vm.$store.state.loading.page)?_c('v-skeleton-loader',{attrs:{"type":"card-avatar, article, card-actions, card-avatar, article, card-actions","loading":""}}):_vm._e(),_vm._v(" "),(!_vm.$store.state.loading.page && _vm.page)?_c('v-card',[(_vm.page.body)?_c('v-card-text',[_c('div',{domProps:{"innerHTML":_vm._s(_vm.page.body)}}),_vm._v(" "),(!_vm.$store.state.loading.page && !_vm.page)?_c('h1',[_vm._v("Page Not Found")]):_vm._e()]):_vm._e()],1):_vm._e()],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"4"}},[_c('app-sidebar')],1)],1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/page/_slug.vue?vue&type=template&id=da243794&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/page/_slug.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  components: {
    AppSidebar: () => __webpack_require__.e(/* import() */ 14).then(__webpack_require__.bind(null, 604)),
    PageShowcase: () => __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, 598))
  },
  computed: { ...Object(external_vuex_["mapState"])({
      page: state => state.page.page
    })
  },
  watch: {
    $route() {
      this.fetchPage({
        axios: this.$axios,
        pageSlug: this.$route.params.slug
      });
    }

  },

  created() {
    this.fetchPage({
      axios: this.$axios,
      pageSlug: this.$route.params.slug
    });
  },

  methods: { ...Object(external_vuex_["mapActions"])('page', ['fetchPage'])
  }
});
// CONCATENATED MODULE: ./pages/page/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var page_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(25);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(183);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(200);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(186);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(176);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(162);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSkeletonLoader/VSkeletonLoader.js
var VSkeletonLoader = __webpack_require__(173);

// CONCATENATED MODULE: ./pages/page/_slug.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  page_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "125855a3"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */







installComponents_default()(component, {VCard: VCard["a" /* default */],VCardText: components_VCard["d" /* VCardText */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */],VSkeletonLoader: VSkeletonLoader["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=_slug.js.map