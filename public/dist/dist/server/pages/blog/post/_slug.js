exports.ids = [28];
exports.modules = {

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/post/_slug.vue?vue&type=template&id=27134e5d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.post.post && !_vm.$store.state.loading.blog.post)?_c('v-row',{attrs:{"no-gutters":""}},[_c('v-col',{staticClass:"mb-6",attrs:{"cols":"12"}},[_c('single-post',{attrs:{"post":_vm.post.post}})],1),_vm._v(" "),_c('v-col',{staticClass:"mb-6",attrs:{"cols":"12"}},[(
          _vm.post.post.comment &&
            _vm.$store.state.settings.settings.blog.comments.allow
        )?_c('post-comments',{attrs:{"post":_vm.post.post}}):_c('v-card',[_c('v-card-title',{staticClass:"title"},[_c('h2',[_vm._v("Comments Are Off")])])],1)],1)],1):_vm._e(),_vm._ssrNode(" "),_c('v-row',[_c('v-col',[(_vm.$store.state.loading.blog.post)?_c('post-loader'):_vm._e()],1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/blog/post/_slug.vue?vue&type=template&id=27134e5d&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/post/_slug.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    SinglePost: () => __webpack_require__.e(/* import() */ 68).then(__webpack_require__.bind(null, 606)),
    PostComments: () => __webpack_require__.e(/* import() */ 93).then(__webpack_require__.bind(null, 607)),
    PostLoader: () => __webpack_require__.e(/* import() */ 95).then(__webpack_require__.bind(null, 608))
  },
  computed: { ...Object(external_vuex_["mapState"])(['post'])
  },
  watch: {
    $route() {
      this.$store.dispatch('post/fetchPost', {
        slug: this.$route.params.slug,
        axios: this.$axios,
        updateView: true
      });
    }

  },

  async created() {
    await this.$store.dispatch('post/fetchPost', {
      slug: this.$route.params.slug,
      axios: this.$axios,
      updateView: true
    });
  },

  head() {
    return {
      title: this.post.post ? this.post.post.title : '',
      meta: [{
        name: 'keywords',
        content: this.post.post ? this.post.post.keywords : ''
      }, {
        name: 'description',
        content: this.post.post ? this.post.post.description : ''
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/blog/post/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var post_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(162);

// CONCATENATED MODULE: ./pages/blog/post/_slug.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  post_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2722751f"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */





installComponents_default()(component, {VCard: VCard["a" /* default */],VCardTitle: components_VCard["e" /* VCardTitle */],VCol: VCol["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=_slug.js.map