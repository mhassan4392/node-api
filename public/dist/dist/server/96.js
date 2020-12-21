exports.ids = [96];
exports.modules = {

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/blog/replies/CommentReplies.vue?vue&type=template&id=9018c79c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ml-16 mt-6"},[_vm._l((_vm.getReplies),function(reply,i){return _vm._ssrNode("<div light data-v-9018c79c>","</div>",[_c('single-reply',{attrs:{"reply":reply}})],1)}),_vm._ssrNode(" "),(_vm.getReplies.length !== _vm.replies.length)?_c('v-btn',{attrs:{"color":"primary","text":"","small":""},on:{"click":function($event){_vm.limit += 5}}},[_vm._v(_vm._s(_vm.$t('replies.showMoreReplies')))]):_vm._e(),_vm._ssrNode(" "),(_vm.getReplies.length > _vm.getRepliesLength)?_c('v-btn',{attrs:{"color":"primary","text":"","small":""},on:{"click":function($event){_vm.limit = 5}}},[_vm._v(_vm._s(_vm.$t('replies.showLessReplies')))]):_vm._e(),_vm._ssrNode(" "),(_vm.replies.length !== _vm.getReplies.length)?_c('v-btn',{attrs:{"color":"primary","text":"","small":""},on:{"click":function($event){_vm.limit = _vm.replies.length}}},[_vm._v(_vm._s(_vm.$t('replies.showAllReplies')))]):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/blog/replies/CommentReplies.vue?vue&type=template&id=9018c79c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blog/replies/CommentReplies.vue?vue&type=script&lang=js&
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
/* harmony default export */ var CommentRepliesvue_type_script_lang_js_ = ({
  components: {
    SingleReply: () => __webpack_require__.e(/* import() */ 97).then(__webpack_require__.bind(null, 657))
  },
  props: {
    replies: {
      type: [Array],
      default: () => []
    }
  },

  data() {
    return {
      limit: this.$store.state.settings.settings.blog.comments.repliesLimit
    };
  },

  computed: {
    getRepliesLength() {
      return this.$store.state.settings.settings.blog.comments.repliesLimit;
    },

    getReplies() {
      return this.replies.slice(0, this.limit);
    }

  }
});
// CONCATENATED MODULE: ./components/blog/replies/CommentReplies.vue?vue&type=script&lang=js&
 /* harmony default export */ var replies_CommentRepliesvue_type_script_lang_js_ = (CommentRepliesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(25);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(94);

// CONCATENATED MODULE: ./components/blog/replies/CommentReplies.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  replies_CommentRepliesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "9018c79c",
  "3ab659b2"
  
)

/* harmony default export */ var CommentReplies = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */


installComponents_default()(component, {VBtn: VBtn["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=96.js.map