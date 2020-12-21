exports.ids = [43];
exports.modules = {

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/localization/translations.vue?vue&type=template&id=afd6d672&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-container',[_c('v-row',[_c('v-col',{attrs:{"cols":"12"}},[_c('crud-data-table',{attrs:{"table":{
            heading: _vm.$t('crud.table.headings.localization.translations'),
            button: {
              text: _vm.$t('crud.table.addNewButtons.localization.translations')
            },
            search: true,
            showSelect: true,
            itemKey: 'key'
          },"add-edit-dialog":{
            addHeading: _vm.$t(
              'addEditDialog.headings.add.localization.translations'
            ),
            editHeading: _vm.$t(
              'addEditDialog.headings.edit.localization.translations'
            )
          },"actions":{
            edit: true,
            delete: true,
            view: true
          },"fetch-data":{
            url: ("/api/langs/translations/crud/" + (_vm.$store.state.lang.locale)),
            data: 'translations'
          },"add-data":{
            url: '/api/langs/translations',
            reload: true
          },"edit-data":{
            url: ("/api/langs/translations/" + (_vm.$store.state.lang.locale)),
            reload: true
          },"delete-data":{
            url: "/api/langs/translations/:param",
            param: 'key',
            reload: true
          },"delete-multiple-data":{
            url: "/api/langs/translations/delete",
            arrayOf: 'key',
            reload: true
          },"headers":_vm.headers,"default-item":_vm.item},on:{"after-edit":function($event){return _vm.fetchTranslation({
              axios: _vm.$axios,
              locale: _vm.$store.state.lang.locale,
              i18n: _vm.$i18n
            })}},scopedSlots:_vm._u([{key:"crud-form",fn:function(ref){
            var translation = ref.item;
            var edit = ref.edit;
return [_c('translation-form',{attrs:{"translation":translation,"edit":edit}})]}},{key:"view-item",fn:function(ref){
            var translation = ref.item;
return [_c('h3',[_vm._v("key: "+_vm._s(translation.key))]),_vm._v(" "),_c('p',[_vm._v("value: "+_vm._s(translation.value))])]}}])})],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/dashboard/localization/translations.vue?vue&type=template&id=afd6d672&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/localization/translations.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var translationsvue_type_script_lang_js_ = ({
  middleware: ['pagePermission'],
  components: {
    CrudDataTable: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 499)),
    TranslationForm: () => __webpack_require__.e(/* import() */ 79).then(__webpack_require__.bind(null, 615))
  },

  data() {
    return {
      headers: [{
        text: this.$t('crud.table.headers.key'),
        value: 'key'
      }, {
        text: this.$t('crud.table.headers.translation'),
        value: 'value'
      }, {
        text: this.$t('crud.table.headers.actions'),
        value: 'actions',
        sortable: false
      }],
      item: {
        key: '',
        value: ''
      }
    };
  }

});
// CONCATENATED MODULE: ./pages/dashboard/localization/translations.vue?vue&type=script&lang=js&
 /* harmony default export */ var localization_translationsvue_type_script_lang_js_ = (translationsvue_type_script_lang_js_); 
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

// CONCATENATED MODULE: ./pages/dashboard/localization/translations.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  localization_translationsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "ae1531d8"
  
)

/* harmony default export */ var translations = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */




installComponents_default()(component, {VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=translations.js.map