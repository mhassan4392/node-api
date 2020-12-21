exports.ids = [37];
exports.modules = {

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/blog/posts/index.vue?vue&type=template&id=c8b2607a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-container',[_c('v-row',[_c('v-col',{attrs:{"cols":"12"}},[_c('crud-data-table',{attrs:{"default-item":_vm.item,"table":{
            showSelect: true,
            heading: _vm.$t('crud.table.headings.blog.posts'),
            button: {
              text: _vm.$t('crud.table.addNewButtons.blog.posts')
            }
          },"headers":_vm.headers,"add-edit-dialog":{
            addHeading: _vm.$t('addEditDialog.headings.add.blog.posts'),
            editHeading: _vm.$t('addEditDialog.headings.edit.blog.posts')
          },"actions":{
            edit: true,
            delete: true
          },"fetch-data":{
            url: '/api/posts?page=1&limit=1000',
            data: 'posts'
          },"add-data":{
            redirect: true,
            url: '/dashboard/blog/posts/add'
          },"edit-data":{
            redirect: true,
            url: '/dashboard/blog/posts/edit/:param',
            param: 'slug'
          },"delete-data":{
            url: '/api/posts/:param',
            param: '_id',
            reload: true
          },"delete-multiple-data":{
            url: '/api/posts/delete',
            arrayOf: '_id',
            reload: true
          }},scopedSlots:_vm._u([{key:"item.avatar",fn:function(ref){
          var i = ref.item;
return [_c('v-avatar',{staticClass:"my-2",attrs:{"size":"100","rounded":""}},[_c('v-img',{attrs:{"src":'/uploads/posts/' + i.avatar}})],1)]}},{key:"item.comments",fn:function(ref){
          var i = ref.item;
return [_c('v-btn',{attrs:{"link":"","rounded":"","color":"primary","small":"","to":'/dashboard/blog/comments/' + i._id}},[_vm._v(_vm._s(i.comments.length)+"\n              "+_vm._s(i.comments.length === 1
                  ? _vm.$t('comments.singular')
                  : _vm.$t('comments.plural')))])]}}],null,true)})],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/dashboard/blog/posts/index.vue?vue&type=template&id=c8b2607a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/blog/posts/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var postsvue_type_script_lang_js_ = ({
  middleware: ['pagePermission'],
  components: {
    CrudDataTable: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 499))
  },

  data() {
    return {
      headers: [{
        text: this.$t('crud.table.headers.title'),
        value: 'title'
      }, {
        text: this.$t('crud.table.headers.avatar'),
        value: 'avatar'
      }, {
        text: this.$t('crud.table.headers.views'),
        value: 'views'
      }, {
        text: this.$t('crud.table.headers.status'),
        value: 'status'
      }, {
        text: this.$t('crud.table.headers.comments'),
        value: 'comments'
      }, {
        text: this.$t('crud.table.headers.actions'),
        value: 'actions',
        sortable: false
      }],
      item: {
        title: '',
        avatar: null,
        category: '',
        body: '',
        excerpt: '',
        tags: [],
        status: '',
        featured: false,
        comment: true,
        keywords: '',
        description: ''
      }
    };
  }

});
// CONCATENATED MODULE: ./pages/dashboard/blog/posts/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_postsvue_type_script_lang_js_ = (postsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(25);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(170);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(94);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(186);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(176);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js
var VImg = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(162);

// CONCATENATED MODULE: ./pages/dashboard/blog/posts/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_postsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2d544546"
  
)

/* harmony default export */ var posts = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */







installComponents_default()(component, {VAvatar: VAvatar["a" /* default */],VBtn: VBtn["a" /* default */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VImg: VImg["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=index.js.map