exports.ids = [92];
exports.modules = {

/***/ 632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/AppFeatures.vue?vue&type=template&id=59f80879&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"py-10 grey darken-3 white--text"},[_c('v-container',[_c('v-row',{attrs:{"justify":"center","align":"center"}},_vm._l((_vm.features),function(feature,i){return _c('v-col',{key:i,staticClass:"text-center py-10",attrs:{"cols":"12","md":"4"}},[_c('v-icon',{attrs:{"size":"50","color":"primary"}},[_vm._v(_vm._s(feature.icon))]),_vm._v(" "),_c('h2',{staticClass:"display-1 mt-3"},[_vm._v(_vm._s(feature.title))]),_vm._v(" "),_c('base-divider',{staticClass:"mb-4 mt-1",attrs:{"width":"40px","center":""}}),_vm._v("\n        "+_vm._s(feature.text)+"\n      ")],1)}),1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/AppFeatures.vue?vue&type=template&id=59f80879&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AppFeatures.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var AppFeaturesvue_type_script_lang_js_ = ({
  data() {
    return {
      features: [{
        title: this.$t('index.features.feature1.heading'),
        icon: this.$store.getters['icons/getIcon']('app-feature-one') ? this.$store.getters['icons/getIcon']('app-feature-one') : 'mdi-pencil',
        text: this.$t('index.features.feature1.text')
      }, {
        title: this.$t('index.features.feature2.heading'),
        icon: this.$store.getters['icons/getIcon']('app-feature-two') ? this.$store.getters['icons/getIcon']('app-feature-two') : 'mdi-newspaper',
        text: this.$t('index.features.feature2.text')
      }, {
        title: this.$t('index.features.feature3.heading'),
        icon: this.$store.getters['icons/getIcon']('app-feature-three') ? this.$store.getters['icons/getIcon']('app-feature-three') : 'mdi-phone',
        text: this.$t('index.features.feature3.text')
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/AppFeatures.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AppFeaturesvue_type_script_lang_js_ = (AppFeaturesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(25);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(186);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(176);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(162);

// CONCATENATED MODULE: ./components/AppFeatures.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AppFeaturesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "59f80879",
  "0b3909d3"
  
)

/* harmony default export */ var AppFeatures = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */





installComponents_default()(component, {VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VIcon: VIcon["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=92.js.map