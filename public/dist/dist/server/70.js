exports.ids = [70];
exports.modules = {

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(529);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("41408420", content, true, context)
};

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountDropdown_vue_vue_type_style_index_0_id_1c314861_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(507);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountDropdown_vue_vue_type_style_index_0_id_1c314861_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountDropdown_vue_vue_type_style_index_0_id_1c314861_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountDropdown_vue_vue_type_style_index_0_id_1c314861_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountDropdown_vue_vue_type_style_index_0_id_1c314861_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountDropdown_vue_vue_type_style_index_0_id_1c314861_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".cursor-pointer[data-v-1c314861]{cursor:pointer}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/dashboard/AccountDropdown.vue?vue&type=template&id=1c314861&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-menu',{attrs:{"offset-y":""},scopedSlots:_vm._u([{key:"activator",fn:function(ref){
var on = ref.on;
var attrs = ref.attrs;
return [_c('v-avatar',_vm._g(_vm._b({},'v-avatar',attrs,false),on),[_c('v-img',{attrs:{"aspect-ratio":"1","alt":"Avatar","src":_vm.$auth.user.avatar
              ? 'http://68.183.159.113/uploads/users/' + _vm.$auth.user.avatar
              : '/potrait.jpg'},scopedSlots:_vm._u([{key:"placeholder",fn:function(){return [_c('v-row',{staticClass:"fill-height ma-0",attrs:{"align":"center","justify":"center"}},[_c('v-progress-circular',{attrs:{"indeterminate":"","color":"primary"}})],1)]},proxy:true}],null,true)})],1)]}}])},[_vm._v(" "),_c('v-list',[_vm._l((_vm.items),function(item,index){return _c('v-list-item',{key:index,attrs:{"link":item.link,"exact":"","to":item.link ? _vm.$i18n.path(item.route) : '',"color":"primary"}},[_c('v-icon',{staticClass:"mr-2"},[_vm._v(_vm._s(item.icon))]),_vm._v(" "),_c('v-list-item-title',[_vm._v(_vm._s(item.title))])],1)}),_vm._v(" "),_c('v-list-item',[_c('v-icon',{staticClass:"mr-2"},[_vm._v("mdi-logout")]),_vm._v(" "),_c('v-list-item-title',{staticClass:"cursor-pointer",on:{"click":_vm.logout}},[_vm._v("\n          "+_vm._s(_vm.$t('dashboard.accountDropDown.links.logout'))+"\n        ")])],1)],2)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/dashboard/AccountDropdown.vue?vue&type=template&id=1c314861&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dashboard/AccountDropdown.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var AccountDropdownvue_type_script_lang_js_ = ({
  data() {
    return {
      items: [{
        title: this.$t('dashboard.accountDropDown.links.home'),
        link: true,
        route: '/',
        icon: 'mdi-home'
      }, {
        title: this.$t('dashboard.accountDropDown.links.dashboard'),
        link: true,
        route: '/dashboard',
        icon: 'mdi-cog'
      }, {
        title: this.$t('dashboard.accountDropDown.links.profile'),
        link: true,
        route: '/dashboard/profile/' + this.$auth.user._id,
        icon: 'mdi-account'
      }]
    };
  },

  methods: {
    async logout() {
      await this.$auth.logout();
      this.$router.push('/');
    }

  }
});
// CONCATENATED MODULE: ./components/dashboard/AccountDropdown.vue?vue&type=script&lang=js&
 /* harmony default export */ var dashboard_AccountDropdownvue_type_script_lang_js_ = (AccountDropdownvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(25);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(170);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js
var VImg = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(166);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(96);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 1 modules
var components_VList = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/VMenu.js
var VMenu = __webpack_require__(179);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js
var VProgressCircular = __webpack_require__(95);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(162);

// CONCATENATED MODULE: ./components/dashboard/AccountDropdown.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(528)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dashboard_AccountDropdownvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1c314861",
  "81328a10"
  
)

/* harmony default export */ var AccountDropdown = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */










installComponents_default()(component, {VAvatar: VAvatar["a" /* default */],VIcon: VIcon["a" /* default */],VImg: VImg["a" /* default */],VList: VList["a" /* default */],VListItem: VListItem["a" /* default */],VListItemTitle: components_VList["k" /* VListItemTitle */],VMenu: VMenu["a" /* default */],VProgressCircular: VProgressCircular["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=70.js.map