exports.ids = [36];
exports.modules = {

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/blog/posts/edit/_slug.vue?vue&type=template&id=26300cf8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('crud-edit',{attrs:{"button":"","fetch-data":{
      url: '/api/posts/:param',
      param: _vm.$route.params.slug,
      data: 'post'
    },"edit-data":{
      url: '/api/posts/:param',
      param: '_id',
      formData: true,
      successRedirect: '/dashboard/blog/posts'
    }},scopedSlots:_vm._u([{key:"crud-form",fn:function(ref){
    var post = ref.item;
return [_c('PostForm',{attrs:{"post":post,"edit":true}})]}}])})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/dashboard/blog/posts/edit/_slug.vue?vue&type=template&id=26300cf8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/blog/posts/edit/_slug.vue?vue&type=script&lang=js&
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
  middleware: ['pagePermission'],
  components: {
    CrudEdit: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 500)),
    PostForm: () => __webpack_require__.e(/* import() */ 11).then(__webpack_require__.bind(null, 626))
  },

  async created() {
    await this.$store.dispatch('post/fetchCategories', this.$axios);
    await this.$store.dispatch('post/fetchTags', this.$axios);
  }

});
// CONCATENATED MODULE: ./pages/dashboard/blog/posts/edit/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var edit_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(21);

// CONCATENATED MODULE: ./pages/dashboard/blog/posts/edit/_slug.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  edit_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "26300cf8",
  "2e44544a"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map