exports.ids = [53];
exports.modules = {

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/roles.vue?vue&type=template&id=022dbcd8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-container',[_c('v-row',[_c('v-col',{attrs:{"cols":"12"}},[_c('crud-data-table',{attrs:{"default-item":_vm.item,"table":{
            heading: _vm.$t('crud.table.headings.roles'),
            search: true,
            showSelect: true,
            button: {
              text: _vm.$t('crud.table.addNewButtons.roles')
            }
          },"add-edit-dialog":{
            addHeading: _vm.$t('addEditDialog.headings.add.roles'),
            editHeading: _vm.$t('addEditDialog.headings.edit.roles')
          },"headers":_vm.headers,"dialog":{
            heading: 'Role'
          },"actions":{
            edit: true,
            delete: true
          },"fetch-data":{
            url: 'http://localhost:5000/api/roles',
            data: 'roles'
          },"add-data":{
            url: 'http://localhost:5000/api/roles',
            param: '_id',
            reload: true
          },"edit-data":{
            url: '/api/roles/:param',
            param: '_id',
            reload: true
          },"delete-data":{
            url: '/api/roles/:param',
            param: '_id',
            reload: true
          },"delete-multiple-data":{
            url: '/api/roles/delete',
            arrayOf: '_id',
            reload: true
          }},scopedSlots:_vm._u([{key:"crud-form",fn:function(ref){
          var role = ref.item;
          var edit = ref.edit;
return [_c('role-form',{attrs:{"role":role,"edit":edit}})]}}])})],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/dashboard/roles.vue?vue&type=template&id=022dbcd8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/roles.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var rolesvue_type_script_lang_js_ = ({
  middleware: ['pagePermission'],
  components: {
    CrudDataTable: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 499)),
    RoleForm: () => __webpack_require__.e(/* import() */ 75).then(__webpack_require__.bind(null, 611))
  },

  data() {
    return {
      headers: [{
        text: this.$t('crud.table.headers.title'),
        value: 'title'
      }, {
        text: this.$t('crud.table.headers.actions'),
        value: 'actions',
        sortable: false
      }],
      item: {
        title: '',
        pagePermissions: []
      }
    };
  }

});
// CONCATENATED MODULE: ./pages/dashboard/roles.vue?vue&type=script&lang=js&
 /* harmony default export */ var dashboard_rolesvue_type_script_lang_js_ = (rolesvue_type_script_lang_js_); 
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

// CONCATENATED MODULE: ./pages/dashboard/roles.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dashboard_rolesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5f0825b9"
  
)

/* harmony default export */ var roles = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */




installComponents_default()(component, {VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=roles.js.map