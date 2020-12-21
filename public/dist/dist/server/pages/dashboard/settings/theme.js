exports.ids = [57];
exports.modules = {

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/settings/theme.vue?vue&type=template&id=ad4847a2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',[_c('v-row',[_c('v-col',{attrs:{"cols":"12","justify":"center"}},[_c('v-tabs',{attrs:{"next-icon":"mdi-arrow-right-bold-box-outline","prev-icon":"mdi-arrow-left-bold-box-outline","show-arrows":""}},[_c('v-tabs-slider'),_vm._v(" "),_vm._l((_vm.items),function(item,i){return _c('v-tab',{key:i,attrs:{"href":item.href}},[_vm._v("\n          "+_vm._s(item.title)+"\n        ")])}),_vm._v(" "),_c('v-tab-item',{attrs:{"value":"colors"}},[_c('theme-colors',{attrs:{"colors":_vm.settings.theme.colors}})],1),_vm._v(" "),_c('v-tab-item',{attrs:{"value":"app"}},[_c('theme-app',{attrs:{"theme":_vm.settings.theme.theme}})],1)],2)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/dashboard/settings/theme.vue?vue&type=template&id=ad4847a2&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/settings/theme.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var themevue_type_script_lang_js_ = ({
  middleware: ['pagePermission'],
  components: {
    ThemeColors: () => __webpack_require__.e(/* import() */ 64).then(__webpack_require__.bind(null, 549)),
    ThemeApp: () => __webpack_require__.e(/* import() */ 106).then(__webpack_require__.bind(null, 622))
  },

  data() {
    return {
      items: [{
        title: this.$t('tabs.dashboard.settings.colors'),
        href: '#colors'
      }, {
        title: this.$t('tabs.dashboard.settings.app'),
        href: '#app'
      }]
    };
  },

  computed: { ...Object(external_vuex_["mapState"])('settings', {
      settings: state => state.settings
    })
  }
});
// CONCATENATED MODULE: ./pages/dashboard/settings/theme.vue?vue&type=script&lang=js&
 /* harmony default export */ var settings_themevue_type_script_lang_js_ = (themevue_type_script_lang_js_); 
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

// CONCATENATED MODULE: ./pages/dashboard/settings/theme.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  settings_themevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6dc4fade"
  
)

/* harmony default export */ var theme = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */








installComponents_default()(component, {VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */],VTab: VTab["a" /* default */],VTabItem: VTabItem["a" /* default */],VTabs: VTabs["a" /* default */],VTabsSlider: VTabsSlider["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=theme.js.map