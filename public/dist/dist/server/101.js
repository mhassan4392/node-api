exports.ids = [101];
exports.modules = {

/***/ 617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/dashboard/settings/app/AppApp.vue?vue&type=template&id=638b8bc8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-row',{attrs:{"no-gutters":""}},[_c('v-col',[_c('crud-edit',{attrs:{"default-item":_vm.app,"button":"","edit-data":{
          formData: true,
          url: '/api/settings/single/app/app'
        }},on:{"after-edit":function($event){return _vm.$store.dispatch('settings/fetchSettings', {
            axios: _vm.$axios,
            vuetify: _vm.$vuetify
          })}},scopedSlots:_vm._u([{key:"crud-form",fn:function(ref){
          var item = ref.item;
return [_c('v-container',[_c('v-row',[_c('v-col',[_c('app-form',{attrs:{"app":item}})],1)],1)],1)]}}])})],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/dashboard/settings/app/AppApp.vue?vue&type=template&id=638b8bc8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dashboard/settings/app/AppApp.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var AppAppvue_type_script_lang_js_ = ({
  components: {
    CrudEdit: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 500)),
    AppForm: () => __webpack_require__.e(/* import() */ 84).then(__webpack_require__.bind(null, 649))
  },
  props: {
    app: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/dashboard/settings/app/AppApp.vue?vue&type=script&lang=js&
 /* harmony default export */ var app_AppAppvue_type_script_lang_js_ = (AppAppvue_type_script_lang_js_); 
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

// CONCATENATED MODULE: ./components/dashboard/settings/app/AppApp.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  app_AppAppvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "638b8bc8",
  "2d894434"
  
)

/* harmony default export */ var AppApp = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */




installComponents_default()(component, {VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=101.js.map