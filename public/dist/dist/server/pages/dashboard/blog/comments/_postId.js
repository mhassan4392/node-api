exports.ids = [34];
exports.modules = {

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/blog/comments/_postId.vue?vue&type=template&id=b2871e44&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-container',[_c('v-row',[_c('v-col',{attrs:{"cols":"12"}},[_c('crud-data-table',{attrs:{"table":{
            heading: _vm.$t('crud.table.headings.blog.comments'),
            search: true,
            showSelect: true
          },"headers":_vm.headers,"actions":{
            delete: true
          },"fetch-data":{
            url: ("/api/comments/" + (_vm.$route.params.postId)),
            data: 'comments'
          },"delete-data":{
            url: '/api/comments/:param',
            param: '_id',
            reload: true
          },"delete-multiple-data":{
            url: '/api/comments/delete',
            arrayOf: '_id',
            reload: true
          }},scopedSlots:_vm._u([{key:"item.replies",fn:function(ref){
          var i = ref.item;
return [_c('v-btn',{attrs:{"link":"","rounded":"","color":"primary","small":"","to":'/dashboard/blog/replies/' + i._id}},[_vm._v(_vm._s(i.replies.length)+"\n              "+_vm._s(i.replies.length === 1
                  ? _vm.$t('replies.singular')
                  : _vm.$t('replies.plural')))])]}}],null,true)})],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/dashboard/blog/comments/_postId.vue?vue&type=template&id=b2871e44&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/blog/comments/_postId.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var _postIdvue_type_script_lang_js_ = ({
  middleware: ['pagePermission'],
  components: {
    CrudDataTable: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 499))
  },

  data() {
    return {
      headers: [{
        text: this.$t('crud.table.headers.text'),
        value: 'text'
      }, {
        text: this.$t('crud.table.headers.replies'),
        value: 'replies'
      }, {
        text: this.$t('crud.table.headers.actions'),
        value: 'actions',
        sortable: false
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/dashboard/blog/comments/_postId.vue?vue&type=script&lang=js&
 /* harmony default export */ var comments_postIdvue_type_script_lang_js_ = (_postIdvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(25);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(94);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(186);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(176);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(162);

// CONCATENATED MODULE: ./pages/dashboard/blog/comments/_postId.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  comments_postIdvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "498a2828"
  
)

/* harmony default export */ var _postId = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */





installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=_postId.js.map