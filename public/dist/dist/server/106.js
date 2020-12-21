exports.ids = [106];
exports.modules = {

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/dashboard/settings/theme/ThemeApp.vue?vue&type=template&id=4cce8da4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-row',{attrs:{"no-gutters":""}},[_c('v-col',[_c('crud-edit',{attrs:{"default-item":_vm.theme,"button":"","edit-data":{
          url: '/api/settings/single/theme/theme'
        }},on:{"after-edit":function($event){return _vm.$store.dispatch('settings/fetchSettings', {
            axios: _vm.$axios,
            vuetify: _vm.$vuetify
          })}},scopedSlots:_vm._u([{key:"crud-form",fn:function(ref){
          var item = ref.item;
return [_c('app-form',{attrs:{"app":item}})]}}])})],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/dashboard/settings/theme/ThemeApp.vue?vue&type=template&id=4cce8da4&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dashboard/settings/theme/ThemeApp.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ThemeAppvue_type_script_lang_js_ = ({
  components: {
    CrudEdit: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 500)),
    AppForm: () => __webpack_require__.e(/* import() */ 86).then(__webpack_require__.bind(null, 654))
  },
  props: {
    theme: {
      type: Object,
      required: true
    }
  },

  data() {
    return {};
  }

});
// CONCATENATED MODULE: ./components/dashboard/settings/theme/ThemeApp.vue?vue&type=script&lang=js&
 /* harmony default export */ var theme_ThemeAppvue_type_script_lang_js_ = (ThemeAppvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(25);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(186);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(162);

// CONCATENATED MODULE: ./components/dashboard/settings/theme/ThemeApp.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  theme_ThemeAppvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4cce8da4",
  "4ac79e64"
  
)

/* harmony default export */ var ThemeApp = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VCol: VCol["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=106.js.map