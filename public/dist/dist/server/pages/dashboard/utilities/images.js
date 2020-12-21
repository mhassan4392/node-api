exports.ids = [61];
exports.modules = {

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/utilities/images.vue?vue&type=template&id=45249d6e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-container',[_c('v-row',[_c('v-col',{attrs:{"cols":"12"}},[_c('crud-data-table',{attrs:{"table":{
            heading: _vm.$t('crud.table.headings.utilities.images'),
            showSelect: true,
            search: true,
            button: {
              text: _vm.$t('crud.table.addNewButtons.utilities.images')
            }
          },"add-edit-dialog":{
            addHeading: _vm.$t('addEditDialog.headings.add.utilities.images'),
            editHeading: _vm.$t('addEditDialog.headings.edit.utilities.images')
          },"headers":_vm.headers,"default-item":_vm.item,"actions":{
            edit: true,
            delete: true
          },"fetch-data":{
            url: '/api/images',
            data: 'images'
          },"add-data":{
            url: '/api/images',
            formData: true,
            reload: true
          },"edit-data":{
            url: '/api/images/:param',
            param: '_id',
            formData: true,
            reload: true
          },"delete-data":{
            url: '/api/images/:param',
            param: '_id',
            reload: true
          },"delete-multiple-data":{
            url: '/api/images/delete',
            arrayOf: '_id',
            reload: true
          }},on:{"after-add":function($event){return _vm.$store.dispatch('image/fetchImages', { axios: _vm.$axios })},"after-edit":function($event){return _vm.$store.dispatch('image/fetchImages', { axios: _vm.$axios })},"after-delete":function($event){return _vm.$store.dispatch('image/fetchImages', { axios: _vm.$axios })}},scopedSlots:_vm._u([{key:"item.image",fn:function(ref){
          var image = ref.item;
return [_c('v-img',{attrs:{"width":"100px","src":'/uploads/images/' + image.image}})]}},{key:"crud-form",fn:function(ref){
          var image = ref.item;
return [_c('image-form',{attrs:{"image":image}})]}}],null,true)})],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/dashboard/utilities/images.vue?vue&type=template&id=45249d6e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/utilities/images.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var imagesvue_type_script_lang_js_ = ({
  components: {
    CrudDataTable: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 499)),
    ImageForm: () => __webpack_require__.e(/* import() */ 89).then(__webpack_require__.bind(null, 625))
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
        text: this.$t('crud.table.headers.image'),
        value: 'image'
      }, {
        text: this.$t('crud.table.headers.actions'),
        value: 'actions',
        sortable: false
      }],
      item: {
        title: '',
        slug: '',
        image: null
      }
    };
  }

});
// CONCATENATED MODULE: ./pages/dashboard/utilities/images.vue?vue&type=script&lang=js&
 /* harmony default export */ var utilities_imagesvue_type_script_lang_js_ = (imagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(25);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(186);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(176);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js
var VImg = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(162);

// CONCATENATED MODULE: ./pages/dashboard/utilities/images.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  utilities_imagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "18efe7d1"
  
)

/* harmony default export */ var utilities_images = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */





installComponents_default()(component, {VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VImg: VImg["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=images.js.map