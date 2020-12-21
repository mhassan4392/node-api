exports.ids = [29];
exports.modules = {

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/search/_title.vue?vue&type=template&id=7a660762&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('blog-posts')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/blog/search/_title.vue?vue&type=template&id=7a660762&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/search/_title.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var _titlevue_type_script_lang_js_ = ({
  components: {
    BlogPosts: () => __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 605))
  },
  watch: {
    $route() {
      this.$store.dispatch('post/fetchPosts', {
        axios: this.$axios,
        query: '&search=' + this.$route.params.title + '&status=published&limit=' + this.$store.state.settings.settings.blog.reading.postLimit
      });
    }

  },

  async created() {
    await this.$store.dispatch('post/fetchPosts', {
      axios: this.$axios,
      query: '&search=' + this.$route.params.title + '&status=published&limit=' + this.$store.state.settings.settings.blog.reading.postLimit
    });
  }

});
// CONCATENATED MODULE: ./pages/blog/search/_title.vue?vue&type=script&lang=js&
 /* harmony default export */ var search_titlevue_type_script_lang_js_ = (_titlevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(21);

// CONCATENATED MODULE: ./pages/blog/search/_title.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  search_titlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7a660762",
  "d86f6fe8"
  
)

/* harmony default export */ var _title = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_title.js.map