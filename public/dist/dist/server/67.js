exports.ids = [67];
exports.modules = {

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(545);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("72cc1982", content, true, context)
};

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleComment_vue_vue_type_style_index_0_id_1f6fc723_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(515);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleComment_vue_vue_type_style_index_0_id_1f6fc723_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleComment_vue_vue_type_style_index_0_id_1f6fc723_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleComment_vue_vue_type_style_index_0_id_1f6fc723_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleComment_vue_vue_type_style_index_0_id_1f6fc723_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleComment_vue_vue_type_style_index_0_id_1f6fc723_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".reply-form[data-v-1f6fc723]{display:none}.delete-comment-btn[data-v-1f6fc723]{position:absolute}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/blog/comments/SingleComment.vue?vue&type=template&id=1f6fc723&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{staticClass:"pb-6"},[_c('v-card-title',[_c('v-avatar',{staticClass:"mr-2 white--text",attrs:{"color":"primary"}},[(_vm.comment.user)?_c('v-img',{attrs:{"alt":"Avatar","src":'/uploads/users/' + _vm.comment.user.avatar,"aspect-ratio":"1"},scopedSlots:_vm._u([{key:"placeholder",fn:function(){return [_c('v-row',{staticClass:"fill-height ma-0",attrs:{"align":"center","justify":"center"}},[_c('v-progress-circular',{attrs:{"indeterminate":"","color":"primary"}})],1)]},proxy:true}],null,false,3042438443)}):_c('span',[_vm._v("\n        "+_vm._s(_vm.avatarName)+"\n      ")])],1),_vm._v(" "),_c('small',[_vm._v(_vm._s(_vm.comment.user ? _vm.comment.user.name : _vm.comment.name))])],1),_vm._v(" "),_c('v-card-text',[_vm._v("\n    "+_vm._s(_vm.comment.text)+"\n  ")]),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"primary--text",attrs:{"text":"","small":""},on:{"click":_vm.toggleForm}},[_vm._v(_vm._s(_vm.$t('replies.heading')))]),_vm._v(" "),_c('v-btn',{staticClass:"primary--text",attrs:{"text":"","small":""}},[_vm._v(_vm._s(_vm.comment.replies.length)+"\n      "+_vm._s(_vm.comment.replies.length === 1
          ? _vm.$t('replies.singular')
          : _vm.$t('replies.plural')))])],1),_vm._v(" "),_c('v-card-text',{staticClass:"reply-form",class:'reply-comment-' + _vm.comment._id},[_c('reply-form',{attrs:{"show-form":_vm.showForm,"comment":_vm.comment}})],1),_vm._v(" "),_c('comment-replies',{attrs:{"replies":_vm.comment.replies}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/blog/comments/SingleComment.vue?vue&type=template&id=1f6fc723&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blog/comments/SingleComment.vue?vue&type=script&lang=js&
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
// import { mapActions, mapState, mapMutations } from 'vuex'
/* harmony default export */ var SingleCommentvue_type_script_lang_js_ = ({
  components: {
    ReplyForm: () => __webpack_require__.e(/* import() */ 74).then(__webpack_require__.bind(null, 655)),
    CommentReplies: () => __webpack_require__.e(/* import() */ 96).then(__webpack_require__.bind(null, 656)) // CrudDeleteDialog: () => import('@/components/crud/CrudDeleteDialog')

  },
  props: {
    comment: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      showForm: false
    };
  },

  computed: {
    // ...mapState('comment', {
    //   showDeleteDialog: (state) => state.showDeleteDialog
    // }),
    // ...mapState('loading', {
    //   loading: (state) => state.comments
    // })
    avatarName() {
      return this.comment.user ? '' : this.comment.name.substr(0, 1);
    }

  },
  methods: {
    // ...mapMutations('comment', ['SET_DELETE_DIALOG']),
    // ...mapActions('comment', ['deleteComment']),
    toggleForm() {
      const forms = document.querySelectorAll('.reply-form');
      forms.forEach(form => {
        form.style.display = 'none';
      });
      const replyForm = document.querySelector('.reply-comment-' + this.comment._id);

      if (replyForm) {
        replyForm.style.display = 'block';
      }
    },

    success(commentId) {// console.log(commentId)
      // await this.deleteComment({ axios: this.$axios, commentId })
    }

  }
});
// CONCATENATED MODULE: ./components/blog/comments/SingleComment.vue?vue&type=script&lang=js&
 /* harmony default export */ var comments_SingleCommentvue_type_script_lang_js_ = (SingleCommentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(25);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(170);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(94);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(183);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(200);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js
var VImg = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js
var VProgressCircular = __webpack_require__(95);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(162);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(174);

// CONCATENATED MODULE: ./components/blog/comments/SingleComment.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(544)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  comments_SingleCommentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1f6fc723",
  "507b5dfe"
  
)

/* harmony default export */ var SingleComment = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */











installComponents_default()(component, {VAvatar: VAvatar["a" /* default */],VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardActions: components_VCard["b" /* VCardActions */],VCardText: components_VCard["d" /* VCardText */],VCardTitle: components_VCard["e" /* VCardTitle */],VImg: VImg["a" /* default */],VProgressCircular: VProgressCircular["a" /* default */],VRow: VRow["a" /* default */],VSpacer: VSpacer["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=67.js.map