exports.ids = [103];
exports.modules = {

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/dashboard/settings/blog/BlogComments.vue?vue&type=template&id=da0bd960&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-row',{attrs:{"no-gutters":""}},[_c('v-col',[_c('crud-edit',{attrs:{"default-item":_vm.comments,"button":"","edit-data":{
          url: '/api/settings/single/blog/comments'
        }},on:{"after-edit":function($event){return _vm.$store.dispatch('settings/fetchSettings', {
            axios: _vm.$axios,
            vuetify: _vm.$vuetify
          })}},scopedSlots:_vm._u([{key:"crud-form",fn:function(ref){
          var item = ref.item;
return [_c('comments-form',{attrs:{"comments":item}})]}}])})],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/dashboard/settings/blog/BlogComments.vue?vue&type=template&id=da0bd960&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dashboard/settings/blog/BlogComments.vue?vue&type=script&lang=js&
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
/* harmony default export */ var BlogCommentsvue_type_script_lang_js_ = ({
  components: {
    CrudEdit: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 500)),
    CommentsForm: () => __webpack_require__.e(/* import() */ 107).then(__webpack_require__.bind(null, 653))
  },
  props: {
    comments: {
      type: Object,
      required: true
    }
  },

  data() {
    return {};
  }

});
// CONCATENATED MODULE: ./components/dashboard/settings/blog/BlogComments.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_BlogCommentsvue_type_script_lang_js_ = (BlogCommentsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(25);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(186);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(162);

// CONCATENATED MODULE: ./components/dashboard/settings/blog/BlogComments.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_BlogCommentsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "da0bd960",
  "1a63a5ed"
  
)

/* harmony default export */ var BlogComments = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VCol: VCol["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=103.js.map