exports.ids = [94];
exports.modules = {

/***/ 645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/blog/posts/BlogPost.vue?vue&type=template&id=5a5d664c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{attrs:{"light":""}},[_c('v-img',{staticClass:"white--text align-end post-image",attrs:{"src":'/uploads/posts/' + _vm.post.avatar,"gradient":"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)","height":"500px"},on:{"click":function($event){_vm.$router.push(_vm.$i18n.path('/blog/post/' + _vm.post.slug))}},scopedSlots:_vm._u([{key:"placeholder",fn:function(){return [_c('v-row',{staticClass:"fill-height ma-0",attrs:{"align":"center","justify":"center"}},[_c('v-progress-circular',{attrs:{"indeterminate":"","color":"primary"}})],1)]},proxy:true}])},[_c('div',{staticClass:"post-date px-5 py-6 primary white--text"},[_vm._v("\n      "+_vm._s(_vm._f("defaultFormat")(_vm.post.created))+"\n    ")]),_vm._v(" "),_c('v-card-title',{staticClass:"display-1",domProps:{"textContent":_vm._s(_vm.post.title)}})],1),_vm._v(" "),_c('v-card-text',[_c('span',{staticClass:"mr-3"},[_c('v-btn',{attrs:{"text":"","small":""},on:{"click":function($event){return _vm.$router.push('/blog/category/' + _vm.post.category.slug)}}},[_c('v-icon',{staticClass:"primary--text mr-2"},[_vm._v("mdi-shape")]),_vm._v("\n        "+_vm._s(_vm.post.category.title)+"\n      ")],1)],1),_vm._v(" "),(_vm.post.comment)?_c('span',[_c('v-icon',{staticClass:"primary--text"},[_vm._v("mdi-comment")]),_vm._v("\n      "+_vm._s(_vm.post.comments.length)+"\n      "+_vm._s(_vm.post.comments.length === 1
          ? _vm.$t('comments.sigle')
          : _vm.$t('comments.plural'))+"\n    ")],1):_vm._e(),_vm._v(" "),_c('p',{staticClass:"post-text py-4 black--text"},[_vm._v("\n      "+_vm._s(_vm.post.excerpt + '....')+"\n      "),_c('nuxt-link',{attrs:{"to":'/blog/post/' + _vm.post.slug}},[_c('small',[_vm._v(_vm._s(_vm.$t('post.readMore')))])])],1)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/blog/posts/BlogPost.vue?vue&type=template&id=5a5d664c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blog/posts/BlogPost.vue?vue&type=script&lang=js&
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
/* harmony default export */ var BlogPostvue_type_script_lang_js_ = ({
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  }
});
// CONCATENATED MODULE: ./components/blog/posts/BlogPost.vue?vue&type=script&lang=js&
 /* harmony default export */ var posts_BlogPostvue_type_script_lang_js_ = (BlogPostvue_type_script_lang_js_); 
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js
var VImg = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js
var VProgressCircular = __webpack_require__(95);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(162);

// CONCATENATED MODULE: ./components/blog/posts/BlogPost.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  posts_BlogPostvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5a5d664c",
  "e8177d80"
  
)

/* harmony default export */ var BlogPost = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */









installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardText: components_VCard["d" /* VCardText */],VCardTitle: components_VCard["e" /* VCardTitle */],VIcon: VIcon["a" /* default */],VImg: VImg["a" /* default */],VProgressCircular: VProgressCircular["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=94.js.map