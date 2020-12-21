exports.ids = [30];
exports.modules = {

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/tag/_slug.vue?vue&type=template&id=fef70058&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('blog-posts')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/blog/tag/_slug.vue?vue&type=template&id=fef70058&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/tag/_slug.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  components: {
    BlogPosts: () => __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 605))
  },
  watch: {
    $route() {
      this.$store.dispatch('post/fetchPosts', {
        axios: this.$axios,
        query: '&tag=' + this.$route.params.slug + '&status=published&limit=' + this.$store.state.settings.settings.blog.reading.postLimit
      });
    }

  },

  async created() {
    this.$store.state.post.page = 1;
    await this.$store.dispatch('post/fetchPosts', {
      axios: this.$axios,
      query: '&tag=' + this.$route.params.slug + '&status=published&limit=' + this.$store.state.settings.settings.blog.reading.postLimit
    });
  }

});
// CONCATENATED MODULE: ./pages/blog/tag/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var tag_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(21);

// CONCATENATED MODULE: ./pages/blog/tag/_slug.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  tag_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "fef70058",
  "19a32e7e"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map