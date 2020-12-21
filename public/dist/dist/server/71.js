exports.ids = [71];
exports.modules = {

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(531);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("4eef6897", content, true, context)
};

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountNotifications_vue_vue_type_style_index_0_id_1ef5f6f7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(508);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountNotifications_vue_vue_type_style_index_0_id_1ef5f6f7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountNotifications_vue_vue_type_style_index_0_id_1ef5f6f7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountNotifications_vue_vue_type_style_index_0_id_1ef5f6f7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountNotifications_vue_vue_type_style_index_0_id_1ef5f6f7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountNotifications_vue_vue_type_style_index_0_id_1ef5f6f7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".cursor-pointer[data-v-1ef5f6f7]{cursor:pointer}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/dashboard/AccountNotifications.vue?vue&type=template&id=1ef5f6f7&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-badge',{attrs:{"bordered":"","color":"error","content":_vm.unreadNotificationsLength,"overlap":""}},[_c('v-menu',{attrs:{"offset-y":""},scopedSlots:_vm._u([{key:"activator",fn:function(ref){
var on = ref.on;
var attrs = ref.attrs;
return [_c('v-avatar',_vm._g(_vm._b({attrs:{"size":"40px"},on:{"click":function($event){return _vm.readNotifications(_vm.$axios)}}},'v-avatar',attrs,false),on),[_c('v-icon',[_vm._v("mdi-bell")])],1)]}}])},[_vm._v(" "),_c('v-list',{attrs:{"max-width":"400px"}},[_vm._l((_vm.dropdownNotifications),function(item,index){return _c('div',{key:index},[_c('v-list-item',{attrs:{"exact":"","two-line":"","link":"","to":_vm.route(item)}},[_c('v-icon',{staticClass:"mr-2",attrs:{"color":"primary"}},[_vm._v(_vm._s(_vm.icon(item)))]),_vm._v(" "),_c('v-list-item-title',[_vm._v("\n              "+_vm._s(_vm.message(item))+"\n            ")])],1),_vm._v(" "),_c('v-divider')],1)}),_vm._v(" "),_c('v-list-item',{staticClass:"text-center",attrs:{"link":"","to":"/dashboard/notifications"}},[_c('div',{staticClass:"text-center"},[_vm._v("All Notifications")])])],2)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/dashboard/AccountNotifications.vue?vue&type=template&id=1ef5f6f7&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dashboard/AccountNotifications.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var AccountNotificationsvue_type_script_lang_js_ = ({
  computed: { ...Object(external_vuex_["mapState"])(['notifications']),
    ...Object(external_vuex_["mapGetters"])('notifications', ['dropdownNotifications', 'unreadNotificationsLength'])
  },

  created() {
    this.fetchNotifications(this.$axios);
  },

  methods: { ...Object(external_vuex_["mapActions"])('notifications', ['fetchNotifications', 'readNotifications']),

    message(item) {
      if (item.type === 'newsletter') {
        return 'A new email is subscribed';
      }

      if (item.type === 'inquiry') {
        return 'A new inquiry recieved';
      }

      return '';
    },

    route(item) {
      if (item.type === 'newsletter') {
        return '/dashboard/notifications';
      }

      if (item.type === 'inquiry') {
        return '/dashboard/notifications';
      }

      return '/dashboard/notifications';
    },

    icon(item) {
      if (item.type === 'newsletter') {
        return 'mdi-email';
      }

      if (item.type === 'inquiry') {
        return 'mdi-message';
      }

      return 'mdi-bell';
    }

  }
});
// CONCATENATED MODULE: ./components/dashboard/AccountNotifications.vue?vue&type=script&lang=js&
 /* harmony default export */ var dashboard_AccountNotificationsvue_type_script_lang_js_ = (AccountNotificationsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(25);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(170);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBadge/VBadge.js
var VBadge = __webpack_require__(182);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(165);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(166);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(96);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 1 modules
var components_VList = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/VMenu.js
var VMenu = __webpack_require__(179);

// CONCATENATED MODULE: ./components/dashboard/AccountNotifications.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(530)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dashboard_AccountNotificationsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1ef5f6f7",
  "55fdefde"
  
)

/* harmony default export */ var AccountNotifications = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */









installComponents_default()(component, {VAvatar: VAvatar["a" /* default */],VBadge: VBadge["a" /* default */],VDivider: VDivider["a" /* default */],VIcon: VIcon["a" /* default */],VList: VList["a" /* default */],VListItem: VListItem["a" /* default */],VListItemTitle: components_VList["k" /* VListItemTitle */],VMenu: VMenu["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=71.js.map