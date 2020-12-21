exports.ids = [93];
exports.modules = {

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/blog/comments/PostComments.vue?vue&type=template&id=767daf2e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-card',{staticClass:"mb-6",attrs:{"light":""}},[_c('v-card-title',[_vm._v("\n      "+_vm._s(_vm.$t('comments.form.heading'))+"\n    ")]),_vm._v(" "),_c('v-card-text',[_c('comment-form',{attrs:{"post":_vm.post}})],1)],1),_vm._ssrNode(" "),_c('v-card',{staticClass:"pb-6",attrs:{"light":""}},[_c('v-card-title',[_vm._v("\n      "+_vm._s(_vm.post.comments.length)+"\n      "+_vm._s(_vm.post.comments.length === 1
          ? _vm.$t('comments.singular')
          : _vm.$t('comments.plural'))+"\n    ")]),_vm._v(" "),_vm._l((_vm.getComments),function(cm,i){return _c('div',{key:i,staticClass:"mx-5 my-6"},[_c('single-comment',{attrs:{"comment":cm}})],1)}),_vm._v(" "),(_vm.getComments.length !== _vm.post.comments.length)?_c('v-btn',{attrs:{"color":"primary","text":"","small":""},on:{"click":function($event){_vm.limit += _vm.$store.state.settings.settings.blog.comments.commentsLimit}}},[_vm._v(_vm._s(_vm.$t('comments.showMoreComments')))]):_vm._e(),_vm._v(" "),(_vm.getComments.length > _vm.getCommentsLength)?_c('v-btn',{attrs:{"color":"primary","text":"","small":""},on:{"click":function($event){_vm.limit = _vm.$store.state.settings.settings.blog.comments.commentsLimit}}},[_vm._v(_vm._s(_vm.$t('comments.showLessComments')))]):_vm._e(),_vm._v(" "),(_vm.post.comments.length !== _vm.getComments.length)?_c('v-btn',{attrs:{"color":"primary","text":"","small":""},on:{"click":function($event){_vm.limit = _vm.post.comments.length}}},[_vm._v(_vm._s(_vm.$t('comments.showAllComments')))]):_vm._e()],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/blog/comments/PostComments.vue?vue&type=template&id=767daf2e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blog/comments/PostComments.vue?vue&type=script&lang=js&
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
/* harmony default export */ var PostCommentsvue_type_script_lang_js_ = ({
  components: {
    CommentForm: () => __webpack_require__.e(/* import() */ 73).then(__webpack_require__.bind(null, 646)),
    SingleComment: () => __webpack_require__.e(/* import() */ 67).then(__webpack_require__.bind(null, 647))
  },
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  },

  data() {
    return {
      limit: this.$store.state.settings.settings.blog.comments.commentsLimit
    };
  },

  computed: {
    getCommentsLength() {
      return this.$store.state.settings.settings.blog.comments.commentsLimit;
    },

    getComments() {
      return this.post.comments.slice(0, this.limit);
    }

  }
});
// CONCATENATED MODULE: ./components/blog/comments/PostComments.vue?vue&type=script&lang=js&
 /* harmony default export */ var comments_PostCommentsvue_type_script_lang_js_ = (PostCommentsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(25);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(94);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(183);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(200);

// CONCATENATED MODULE: ./components/blog/comments/PostComments.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  comments_PostCommentsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "767daf2e",
  "454d9b7d"
  
)

/* harmony default export */ var PostComments = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */





installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardText: components_VCard["d" /* VCardText */],VCardTitle: components_VCard["e" /* VCardTitle */]})


/***/ })

};;
//# sourceMappingURL=93.js.map