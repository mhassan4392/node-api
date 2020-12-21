exports.ids = [35];
exports.modules = {

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/blog/posts/add.vue?vue&type=template&id=0cd225b8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('crud-add',{attrs:{"button":"","default-item":_vm.post,"add-data":{
      url: '/api/posts',
      formData: true,
      successRedirect: '/dashboard/blog/posts'
    }},scopedSlots:_vm._u([{key:"crud-form",fn:function(ref){
    var item = ref.item;
return [_c('PostForm',{attrs:{"post":item,"edit":false}})]}}])})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/dashboard/blog/posts/add.vue?vue&type=template&id=0cd225b8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/blog/posts/add.vue?vue&type=script&lang=js&
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
/* harmony default export */ var addvue_type_script_lang_js_ = ({
  middleware: ['pagePermission'],
  components: {
    CrudAdd: () => __webpack_require__.e(/* import() */ 72).then(__webpack_require__.bind(null, 501)),
    PostForm: () => __webpack_require__.e(/* import() */ 11).then(__webpack_require__.bind(null, 626))
  },

  data() {
    return {
      post: {
        title: '',
        avatar: null,
        category: '',
        body: '',
        excerpt: '',
        tags: [],
        status: '',
        featured: false,
        comment: true,
        keywords: '',
        description: ''
      }
    };
  },

  async created() {
    await this.$store.dispatch('post/fetchCategories', this.$axios);
    await this.$store.dispatch('post/fetchTags', this.$axios);
  }

});
// CONCATENATED MODULE: ./pages/dashboard/blog/posts/add.vue?vue&type=script&lang=js&
 /* harmony default export */ var posts_addvue_type_script_lang_js_ = (addvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(21);

// CONCATENATED MODULE: ./pages/dashboard/blog/posts/add.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  posts_addvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0cd225b8",
  "25c9ce6c"
  
)

/* harmony default export */ var add = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=add.js.map