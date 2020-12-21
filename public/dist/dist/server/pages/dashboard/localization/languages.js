exports.ids = [42];
exports.modules = {

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/localization/languages.vue?vue&type=template&id=8d6656be&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-container',[_c('v-row',[_c('v-col',{attrs:{"cols":"12"}},[_c('crud-data-table',{attrs:{"table":{
            heading: _vm.$t('crud.table.headings.localization.languages'),
            showSelect: true,
            search: true,
            button: {
              text: _vm.$t('crud.table.addNewButtons.localization.languages')
            }
          },"add-edit-dialog":{
            addHeading: _vm.$t(
              'addEditDialog.headings.add.localization.languages'
            ),
            editHeading: _vm.$t(
              'addEditDialog.headings.edit.localization.languages'
            )
          },"actions":{
            edit: true,
            delete: true
          },"headers":_vm.headers,"default-item":_vm.item,"fetch-data":{
            url: '/api/langs',
            data: 'languages'
          },"add-data":{
            url: '/api/langs',
            reload: true
          },"edit-data":{
            url: '/api/langs/:param',
            param: '_id',
            reload: true
          },"delete-data":{
            url: '/api/langs/:param',
            param: '_id',
            reload: true
          },"delete-multiple-data":{
            url: '/api/langs/delete',
            arrayOf: '_id',
            reload: true
          }},scopedSlots:_vm._u([{key:"crud-form",fn:function(ref){
          var lang = ref.item;
return [_c('language-form',{attrs:{"lang":lang}})]}}])})],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/dashboard/localization/languages.vue?vue&type=template&id=8d6656be&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/localization/languages.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var languagesvue_type_script_lang_js_ = ({
  middleware: ['pagePermission'],
  components: {
    CrudDataTable: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 499)),
    LanguageForm: () => __webpack_require__.e(/* import() */ 78).then(__webpack_require__.bind(null, 614))
  },

  data() {
    return {
      search: '',
      selected: [],
      headers: [{
        text: this.$t('crud.table.headers.name'),
        value: 'name'
      }, {
        text: this.$t('crud.table.headers.locale'),
        value: 'locale'
      }, {
        text: this.$t('crud.table.headers.actions'),
        value: 'actions',
        sortable: false
      }],
      item: {
        name: '',
        locale: ''
      }
    };
  }

});
// CONCATENATED MODULE: ./pages/dashboard/localization/languages.vue?vue&type=script&lang=js&
 /* harmony default export */ var localization_languagesvue_type_script_lang_js_ = (languagesvue_type_script_lang_js_); 
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

// CONCATENATED MODULE: ./pages/dashboard/localization/languages.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  localization_languagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5e562c4e"
  
)

/* harmony default export */ var languages = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */




installComponents_default()(component, {VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=languages.js.map