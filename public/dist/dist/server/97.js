exports.ids = [97];
exports.modules = {

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/blog/replies/SingleReply.vue?vue&type=template&id=06365da6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{staticClass:"mr-3 my-5",attrs:{"light":""}},[_c('v-card-title',[_c('v-avatar',{staticClass:"mr-2 white--text",attrs:{"color":"primary"}},[(_vm.reply.user)?_c('v-img',{attrs:{"alt":"Avatar","src":'/uploads/users/' + _vm.reply.user.avatar},scopedSlots:_vm._u([{key:"placeholder",fn:function(){return [_c('v-row',{staticClass:"fill-height ma-0",attrs:{"align":"center","justify":"center"}},[_c('v-progress-circular',{attrs:{"indeterminate":"","color":"primary"}})],1)]},proxy:true}],null,false,3042438443)}):_c('span',[_vm._v("\n        "+_vm._s(_vm.avatarName)+"\n      ")])],1),_vm._v(" "),_c('small',[_vm._v(_vm._s(_vm.reply.user ? _vm.reply.user.name : _vm.reply.name))])],1),_vm._v(" "),_c('v-card-text',[_vm._v("\n    "+_vm._s(_vm.reply.text)+"\n  ")])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/blog/replies/SingleReply.vue?vue&type=template&id=06365da6&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blog/replies/SingleReply.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SingleReplyvue_type_script_lang_js_ = ({
  props: {
    reply: {
      type: Object,
      required: true
    }
  },
  computed: {
    avatarName() {
      return this.reply.user ? '' : this.reply.name.substr(0, 1);
    }

  }
});
// CONCATENATED MODULE: ./components/blog/replies/SingleReply.vue?vue&type=script&lang=js&
 /* harmony default export */ var replies_SingleReplyvue_type_script_lang_js_ = (SingleReplyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(25);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(170);

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

// CONCATENATED MODULE: ./components/blog/replies/SingleReply.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  replies_SingleReplyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "06365da6",
  "74cb98c9"
  
)

/* harmony default export */ var SingleReply = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */








installComponents_default()(component, {VAvatar: VAvatar["a" /* default */],VCard: VCard["a" /* default */],VCardText: components_VCard["d" /* VCardText */],VCardTitle: components_VCard["e" /* VCardTitle */],VImg: VImg["a" /* default */],VProgressCircular: VProgressCircular["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=97.js.map