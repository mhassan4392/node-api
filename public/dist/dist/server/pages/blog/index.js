exports.ids = [27];
exports.modules = {

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/index.vue?vue&type=template&id=2cc3dade&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('blog-posts')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/blog/index.vue?vue&type=template&id=2cc3dade&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var blogvue_type_script_lang_js_ = ({
  scrollToTop: true,
  components: {
    BlogPosts: () => __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 605))
  },
  watch: {
    $route() {
      this.$store.dispatch('post/fetchPosts', {
        axios: this.$axios,
        query: '&status=published&limit=' + this.$store.state.settings.settings.blog.reading.postLimit
      });
    }

  },

  async created() {
    this.$store.state.post.page = 1;
    await this.$store.dispatch('post/fetchPosts', {
      axios: this.$axios,
      query: '&status=published&limit=' + this.$store.state.settings.settings.blog.reading.postLimit
    });
  }

});
// CONCATENATED MODULE: ./pages/blog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_blogvue_type_script_lang_js_ = (blogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(21);

// CONCATENATED MODULE: ./pages/blog/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_blogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2cc3dade",
  "60e5c83e"
  
)

/* harmony default export */ var blog = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map