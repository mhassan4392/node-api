exports.ids = [60];
exports.modules = {

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/utilities/icons.vue?vue&type=template&id=0d293324&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-container',[_c('v-row',[_c('v-col',{attrs:{"cols":"12"}},[_c('crud-data-table',{attrs:{"table":{
            heading: _vm.$t('crud.table.headings.utilities.icons'),
            showSelect: true,
            search: true,
            button: {
              text: _vm.$t('crud.table.addNewButtons.utilities.icons')
            }
          },"add-edit-dialog":{
            addHeading: _vm.$t('addEditDialog.headings.add.utilities.icons'),
            editHeading: _vm.$t('addEditDialog.headings.edit.utilities.icons')
          },"headers":_vm.headers,"table-heading":"Icons","default-item":_vm.item,"actions":{
            edit: true,
            delete: true
          },"fetch-data":{
            url: '/api/icons',
            data: 'icons'
          },"add-data":{
            url: '/api/icons',
            reload: true
          },"edit-data":{
            url: '/api/icons/:param',
            param: '_id',
            reload: true
          },"delete-data":{
            url: '/api/icons/:param',
            param: '_id',
            reload: true
          },"delete-multiple-data":{
            url: '/api/icons/delete',
            arrayOf: '_id',
            reload: true
          }},on:{"after-add":function($event){return _vm.$store.dispatch('icons/fetchIcons', { axios: _vm.$axios })},"after-edit":function($event){return _vm.$store.dispatch('icons/fetchIcons', { axios: _vm.$axios })},"after-delete":function($event){return _vm.$store.dispatch('icons/fetchIcons', { axios: _vm.$axios })}},scopedSlots:_vm._u([{key:"item.icon",fn:function(ref){
          var icon = ref.item;
return [_c('v-icon',[_vm._v(_vm._s(icon.icon))])]}},{key:"crud-form",fn:function(ref){
          var icon = ref.item;
return [_c('icon-form',{attrs:{"icon":icon}})]}}],null,true)})],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/dashboard/utilities/icons.vue?vue&type=template&id=0d293324&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/utilities/icons.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var iconsvue_type_script_lang_js_ = ({
  components: {
    CrudDataTable: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 499)),
    IconForm: () => __webpack_require__.e(/* import() */ 88).then(__webpack_require__.bind(null, 624))
  },
  middleware: ['pagePermission'],

  data() {
    return {
      headers: [{
        text: this.$t('crud.table.headers.title'),
        value: 'title'
      }, {
        text: this.$t('crud.table.headers.slug'),
        value: 'slug'
      }, {
        text: this.$t('crud.table.headers.icon'),
        value: 'icon'
      }, {
        text: this.$t('crud.table.headers.actions'),
        value: 'actions',
        sortable: false
      }],
      item: {
        title: ''
      }
    };
  }

});
// CONCATENATED MODULE: ./pages/dashboard/utilities/icons.vue?vue&type=script&lang=js&
 /* harmony default export */ var utilities_iconsvue_type_script_lang_js_ = (iconsvue_type_script_lang_js_); 
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

// CONCATENATED MODULE: ./pages/dashboard/utilities/icons.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  utilities_iconsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "ad38445e"
  
)

/* harmony default export */ var icons = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */





installComponents_default()(component, {VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VIcon: VIcon["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=icons.js.map