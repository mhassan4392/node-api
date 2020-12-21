exports.ids = [58];
exports.modules = {

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/users.vue?vue&type=template&id=ec005c68&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-container',[_c('v-row',[_c('v-col',{attrs:{"cols":"12"}},[_c('crud-data-table',{attrs:{"table":{
            showSelect: true,
            heading: _vm.$t('crud.table.headings.users')
          },"headers":_vm.headers,"dialog":{
            heading: 'Post'
          },"actions":{
            edit: true,
            delete: true
          },"fetch-data":{
            url: '/api/users',
            data: 'users'
          },"edit-data":{
            redirect: true,
            url: _vm.$i18n.path('/dashboard/profile/:param'),
            param: '_id'
          },"delete-data":{
            url: '/api/users/:param',
            param: '_id',
            reload: true
          },"delete-multiple-data":{
            url: '/api/users/delete',
            arrayOf: '_id',
            reload: true
          }},scopedSlots:_vm._u([{key:"item.name",fn:function(ref){
          var item = ref.item;
return [_c('div',{staticClass:"py-2 d-flex align-center"},[_c('v-avatar',[_c('v-img',{attrs:{"src":'/uploads/users/' + item.avatar}})],1),_vm._v(" "),_c('h4',{staticClass:"ml-3"},[_vm._v(_vm._s(item.name))])],1)]}}],null,true)})],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/dashboard/users.vue?vue&type=template&id=ec005c68&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/users.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var usersvue_type_script_lang_js_ = ({
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
        text: this.$t('crud.table.headers.status'),
        value: 'status'
      }, {
        text: this.$t('crud.table.headers.actions'),
        value: 'actions',
        sortable: false
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/dashboard/users.vue?vue&type=script&lang=js&
 /* harmony default export */ var dashboard_usersvue_type_script_lang_js_ = (usersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(25);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(170);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(186);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(176);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js
var VImg = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(162);

// CONCATENATED MODULE: ./pages/dashboard/users.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dashboard_usersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5f3d8784"
  
)

/* harmony default export */ var users = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */






installComponents_default()(component, {VAvatar: VAvatar["a" /* default */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VImg: VImg["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=users.js.map