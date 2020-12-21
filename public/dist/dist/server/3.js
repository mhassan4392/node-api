exports.ids = [3];
exports.modules = {

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/blog/posts/BlogPosts.vue?vue&type=template&id=1d7ebb90&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(!_vm.$store.state.loading.blog.posts)?_c('v-row',[_vm._l((_vm.getPosts),function(post,i){return _c('v-col',{key:i,attrs:{"cols":_vm.getCols}},[_c('blog-post',{attrs:{"post":post}})],1)}),_vm._v(" "),(_vm.postsLength < 1 && !_vm.$store.state.loading.blog.posts)?_c('div',[_c('h2',{staticClass:"display-1 text-center"},[_vm._v("Sorry no posts found")])]):_vm._e()],2):_vm._e(),_vm._ssrNode(" "),(_vm.$store.state.loading.blog.posts)?_c('v-row',_vm._l((_vm.reading.postLimit),function(li){return _c('v-col',{key:li,attrs:{"cols":_vm.getCols}},[_c('v-skeleton-loader',{attrs:{"loading":_vm.$store.state.loading.blog.posts,"type":"card-avatar, article, actions","light":""}})],1)}),1):_vm._e(),_vm._ssrNode(" "),_c('v-row',[_c('v-col',[(_vm.postsLength > 0)?_c('div',{staticClass:"text-center"},[_c('v-pagination',{attrs:{"light":"","length":_vm.length,"total-visible":7,"prev-icon":"mdi-menu-left","next-icon":"mdi-menu-right"},model:{value:(_vm.$store.state.post.page),callback:function ($$v) {_vm.$set(_vm.$store.state.post, "page", $$v)},expression:"$store.state.post.page"}})],1):_vm._e()])],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/blog/posts/BlogPosts.vue?vue&type=template&id=1d7ebb90&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blog/posts/BlogPosts.vue?vue&type=script&lang=js&
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

/* harmony default export */ var BlogPostsvue_type_script_lang_js_ = ({
  components: {
    BlogPost: () => __webpack_require__.e(/* import() */ 94).then(__webpack_require__.bind(null, 645))
  },

  data() {
    return {
      page: this.$route.query.page || 1
    };
  },

  computed: { ...Object(external_vuex_["mapState"])(['post']),
    ...Object(external_vuex_["mapState"])('settings', {
      reading: state => state.settings.blog.reading
    }),

    getCols() {
      const cols = this.$store.state.settings.settings.blog.layout.postCols;

      if (cols === 4) {
        return 3;
      } else if (cols === 3) {
        return 4;
      } else if (cols === 2) {
        return 6;
      } else {
        return 12;
      }
    },

    getPosts() {
      // const posts = this.post.posts.slice(
      //   (this.page - 1) * this.limit,
      //   this.limit * this.page
      // )
      return this.post.posts;
    },

    postsLength() {
      return this.post.posts.length;
    },

    length() {
      return Math.ceil(this.post.count / this.reading.postLimit);
    }

  }
});
// CONCATENATED MODULE: ./components/blog/posts/BlogPosts.vue?vue&type=script&lang=js&
 /* harmony default export */ var posts_BlogPostsvue_type_script_lang_js_ = (BlogPostsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(25);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(186);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VPagination/VPagination.js
var VPagination = __webpack_require__(188);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(162);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSkeletonLoader/VSkeletonLoader.js
var VSkeletonLoader = __webpack_require__(173);

// CONCATENATED MODULE: ./components/blog/posts/BlogPosts.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  posts_BlogPostsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1d7ebb90",
  "1380f03a"
  
)

/* harmony default export */ var BlogPosts = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */





installComponents_default()(component, {VCol: VCol["a" /* default */],VPagination: VPagination["a" /* default */],VRow: VRow["a" /* default */],VSkeletonLoader: VSkeletonLoader["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=3.js.map