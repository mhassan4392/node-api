exports.ids = [55];
exports.modules = {

/***/ 580:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/settings/app.vue?vue&type=template&id=5aa45f07&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',[_c('v-row',[_c('v-col',{attrs:{"cols":"12","justify":"center"}},[_c('v-tabs',{attrs:{"next-icon":"mdi-arrow-right-bold-box-outline","prev-icon":"mdi-arrow-left-bold-box-outline","show-arrows":""}},[_c('v-tabs-slider'),_vm._v(" "),_vm._l((_vm.items),function(item,i){return _c('v-tab',{key:i,attrs:{"href":item.href}},[_vm._v("\n          "+_vm._s(item.title)+"\n        ")])}),_vm._v(" "),_c('v-tab-item',{attrs:{"value":"app"}},[_c('app-app',{attrs:{"app":_vm.settings.app.app}})],1),_vm._v(" "),_c('v-tab-item',{attrs:{"value":"smtp"}},[_c('app-smtp',{attrs:{"smtp":_vm.settings.app.smtp}})],1)],2)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/dashboard/settings/app.vue?vue&type=template&id=5aa45f07&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/settings/app.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var appvue_type_script_lang_js_ = ({
  middleware: ['pagePermission'],
  components: {
    AppApp: () => __webpack_require__.e(/* import() */ 101).then(__webpack_require__.bind(null, 617)),
    AppSmtp: () => __webpack_require__.e(/* import() */ 102).then(__webpack_require__.bind(null, 618))
  },

  data() {
    return {
      items: [{
        title: this.$t('tabs.dashboard.settings.app'),
        href: '#app'
      }, {
        title: this.$t('tabs.dashboard.settings.smtp'),
        href: '#smtp'
      }]
    };
  },

  computed: { ...Object(external_vuex_["mapState"])('settings', {
      settings: state => state.settings
    })
  },
  methods: {}
});
// CONCATENATED MODULE: ./pages/dashboard/settings/app.vue?vue&type=script&lang=js&
 /* harmony default export */ var settings_appvue_type_script_lang_js_ = (appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(25);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(186);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(176);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(162);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTabs/VTab.js
var VTab = __webpack_require__(191);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTabs/VTabItem.js
var VTabItem = __webpack_require__(192);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTabs/VTabs.js + 1 modules
var VTabs = __webpack_require__(196);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTabs/VTabsSlider.js
var VTabsSlider = __webpack_require__(105);

// CONCATENATED MODULE: ./pages/dashboard/settings/app.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  settings_appvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "f168f22e"
  
)

/* harmony default export */ var app = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */








installComponents_default()(component, {VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */],VTab: VTab["a" /* default */],VTabItem: VTabItem["a" /* default */],VTabs: VTabs["a" /* default */],VTabsSlider: VTabsSlider["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=app.js.map