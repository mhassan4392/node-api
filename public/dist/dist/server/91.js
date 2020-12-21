exports.ids = [91];
exports.modules = {

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/AppFeaturedPosts.vue?vue&type=template&id=212817a4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"py-12"},[_c('v-container',[_c('div',{staticClass:"text-center"},[_c('v-avatar',{attrs:{"size":"70"}},[_c('v-icon',{staticClass:"rounded-full primary white--text",attrs:{"size":"40"}},[_vm._v("\n          "+_vm._s(_vm.$store.getters['icons/getIcon']('app-featured-posts')
              ? _vm.$store.getters['icons/getIcon']('app-featured-posts')
              : 'mdi-newspaper')+"\n        ")])],1),_vm._v(" "),_c('h1',{staticClass:"text-center my-2"},[_vm._v("\n        "+_vm._s(_vm.$t('index.featuredPosts.heading'))+"\n      ")]),_vm._v(" "),_c('base-divider',{staticClass:"mb-6",attrs:{"width":"100px","center":""}})],1),_vm._v(" "),(_vm.$store.state.loading.blog.featuredPosts)?_c('v-row',[_c('v-col',_vm._l((3),function(i){return _c('v-skeleton-loader',{key:i,attrs:{"type":"list-item-avatar, divider"}})}),1)],1):_c('v-row',_vm._l((_vm.post.featuredPosts),function(post,index){return _c('v-col',{key:index,attrs:{"cols":"12","md":"4"}},[_c('v-hover',{scopedSlots:_vm._u([{key:"default",fn:function(ref){
              var hover = ref.hover;
return [_c('v-card',{staticClass:"mx-auto",attrs:{"light":""}},[_c('v-img',{attrs:{"aspect-ratio":"1","src":'/uploads/posts/' + post.avatar},scopedSlots:_vm._u([{key:"placeholder",fn:function(){return [_c('v-row',{staticClass:"fill-height ma-0",attrs:{"align":"center","justify":"center"}},[_c('v-progress-circular',{attrs:{"indeterminate":"","color":"primary"}})],1)]},proxy:true}],null,true)}),_vm._v(" "),_c('v-card-text',[_c('h2',{staticClass:"title primary--text"},[_vm._v("\n                  "+_vm._s(post.title.substr(0, 20) + ' ...')+"\n                ")]),_vm._v("\n                "+_vm._s(post.excerpt.substr(0, 50) + ' ......')+"\n              ")]),_vm._v(" "),_c('v-fade-transition',[(hover)?_c('v-overlay',{attrs:{"absolute":"","color":"#036358"}},[_c('v-btn',{attrs:{"color":"primary","link":"","to":'/blog/post/' + post.slug}},[_vm._v(_vm._s(_vm.$t('post.moreInfo')))])],1):_vm._e()],1)],1)]}}],null,true)})],1)}),1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/AppFeaturedPosts.vue?vue&type=template&id=212817a4&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AppFeaturedPosts.vue?vue&type=script&lang=js&
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
//
//
//
//

/* harmony default export */ var AppFeaturedPostsvue_type_script_lang_js_ = ({
  computed: { ...Object(external_vuex_["mapState"])(['post'])
  },

  created() {
    this.fetchFeaturedPosts({
      axios: this.$axios
    });
  },

  methods: { ...Object(external_vuex_["mapActions"])('post', ['fetchFeaturedPosts'])
  }
});
// CONCATENATED MODULE: ./components/AppFeaturedPosts.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AppFeaturedPostsvue_type_script_lang_js_ = (AppFeaturedPostsvue_type_script_lang_js_); 
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(186);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(176);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/transitions/index.js + 2 modules
var transitions = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VHover/VHover.js
var VHover = __webpack_require__(187);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js
var VImg = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VOverlay/VOverlay.js
var VOverlay = __webpack_require__(172);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js
var VProgressCircular = __webpack_require__(95);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(162);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSkeletonLoader/VSkeletonLoader.js
var VSkeletonLoader = __webpack_require__(173);

// CONCATENATED MODULE: ./components/AppFeaturedPosts.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AppFeaturedPostsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "212817a4",
  "13eb819f"
  
)

/* harmony default export */ var AppFeaturedPosts = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */















installComponents_default()(component, {VAvatar: VAvatar["a" /* default */],VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardText: components_VCard["d" /* VCardText */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VFadeTransition: transitions["h" /* VFadeTransition */],VHover: VHover["a" /* default */],VIcon: VIcon["a" /* default */],VImg: VImg["a" /* default */],VOverlay: VOverlay["a" /* default */],VProgressCircular: VProgressCircular["a" /* default */],VRow: VRow["a" /* default */],VSkeletonLoader: VSkeletonLoader["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=91.js.map