exports.ids = [39];
exports.modules = {

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/blog/tags.vue?vue&type=template&id=4905176c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-container',[_c('v-row',[_c('v-col',{attrs:{"cols":"12"}},[_c('crud-data-table',{attrs:{"table":{
            heading: _vm.$t('crud.table.headings.blog.tags'),
            search: true,
            showSelect: true,
            button: {
              text: _vm.$t('crud.table.addNewButtons.blog.tags')
            }
          },"add-edit-dialog":{
            addHeading: _vm.$t('addEditDialog.headings.add.blog.tags'),
            editHeading: _vm.$t('addEditDialog.headings.edit.blog.tags')
          },"headers":_vm.headers,"table-heading":"Tags","default-item":_vm.item,"actions":{
            edit: true,
            delete: true
          },"fetch-data":{
            url: '/api/tags',
            data: 'tags'
          },"add-data":{
            url: '/api/tags',
            reload: true
          },"edit-data":{
            url: '/api/tags/:param',
            param: '_id',
            reload: true
          },"delete-data":{
            url: '/api/tags/:param',
            param: '_id',
            reload: true
          },"delete-multiple-data":{
            url: '/api/tags/delete',
            arrayOf: '_id',
            reload: true
          }},scopedSlots:_vm._u([{key:"crud-form",fn:function(ref){
          var tag = ref.item;
return [_c('TagForm',{attrs:{"tag":tag}})]}}])})],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/dashboard/blog/tags.vue?vue&type=template&id=4905176c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/blog/tags.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var tagsvue_type_script_lang_js_ = ({
  middleware: ['pagePermission'],
  components: {
    CrudDataTable: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 499)),
    TagForm: () => __webpack_require__.e(/* import() */ 77).then(__webpack_require__.bind(null, 613))
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
        title: ''
      }
    };
  }

});
// CONCATENATED MODULE: ./pages/dashboard/blog/tags.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_tagsvue_type_script_lang_js_ = (tagsvue_type_script_lang_js_); 
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

// CONCATENATED MODULE: ./pages/dashboard/blog/tags.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_tagsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "23db5a3c"
  
)

/* harmony default export */ var tags = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */




installComponents_default()(component, {VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=tags.js.map