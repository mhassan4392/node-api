exports.ids = [41];
exports.modules = {

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/inquiries.vue?vue&type=template&id=264942ae&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-container',[_c('v-row',[_c('v-col',{attrs:{"cols":"12"}},[_c('crud-data-table',{attrs:{"table":{
            search: true,
            showSelect: true,
            heading: _vm.$t('crud.table.headings.inquiries'),
            search: true
          },"actions":{
            delete: true
          },"headers":_vm.headers,"fetch-data":{
            url: '/api/inquiries',
            data: 'inquiries'
          },"delete-data":{
            url: '/api/inquiries/:param',
            param: '_id',
            reload: true
          },"delete-multiple-data":{
            url: '/api/inquiries/delete',
            arrayOf: '_id',
            reload: true
          }}})],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/dashboard/inquiries.vue?vue&type=template&id=264942ae&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/inquiries.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var inquiriesvue_type_script_lang_js_ = ({
  middleware: ['pagePermission'],
  components: {
    CrudDataTable: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 499))
  },

  data() {
    return {
      headers: [{
        text: this.$t('crud.table.headers.name'),
        value: 'name'
      }, {
        text: this.$t('crud.table.headers.email'),
        value: 'email'
      }, {
        text: this.$t('crud.table.headers.phone'),
        value: 'phone'
      }, {
        text: this.$t('crud.table.headers.message'),
        value: 'message'
      }, {
        text: this.$t('crud.table.headers.actions'),
        value: 'actions',
        sortable: false
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/dashboard/inquiries.vue?vue&type=script&lang=js&
 /* harmony default export */ var dashboard_inquiriesvue_type_script_lang_js_ = (inquiriesvue_type_script_lang_js_); 
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

// CONCATENATED MODULE: ./pages/dashboard/inquiries.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dashboard_inquiriesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "745f55a1"
  
)

/* harmony default export */ var inquiries = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */




installComponents_default()(component, {VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=inquiries.js.map