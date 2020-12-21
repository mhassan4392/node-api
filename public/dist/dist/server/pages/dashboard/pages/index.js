exports.ids = [51,0,66];
exports.modules = {

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./utils/createFormData.js
function objectToFormData(obj, rootName, ignoreList) {
  const formData = new FormData();

  function appendFormData(data, root) {
    if (!ignore(root)) {
      root = root || '';

      if (data instanceof File) {
        formData.append(root, data);
      } else if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
          formData.append(root, data[i]); // appendFormData(data[i], root + '[' + i + ']')
        }
      } else if (typeof data === 'object' && data) {
        for (const key in data) {
          // eslint-disable-next-line no-prototype-builtins
          if (data.hasOwnProperty(key)) {
            if (root === '') {
              appendFormData(data[key], key);
            } else {
              appendFormData(data[key], root + '.' + key);
            }
          }
        }
      } else if (data !== null && typeof data !== 'undefined') {
        formData.append(root, data);
      }
    }
  }

  function ignore(root) {
    return Array.isArray(ignoreList) && ignoreList.some(function (x) {
      return x === root;
    });
  }

  appendFormData(obj, rootName);
  return formData;
}

/* harmony default export */ var createFormData = (objectToFormData);
// CONCATENATED MODULE: ./mixins/crud.js

/* harmony default export */ var crud = __webpack_exports__["a"] = ({
  data() {
    return {
      loading: {
        data: false,
        add: false,
        edit: false,
        delete: false
      },
      alert: {
        show: false,
        type: 'success',
        text: '',
        timeout: 5000
      }
    };
  },

  methods: {
    // crud actions
    // fetch item action
    async fetchItem() {
      // replace the url param with actual param
      const fetchUrl = this.fetchData.url;
      const url = fetchUrl.replace(':param', this.fetchData.param);

      try {
        // set loading to true
        this.loading.data = true; // send request to api

        const response = await this.$axios.get(url); // set loading to false

        this.loading.data = false; // set item

        this.item = response.data[this.fetchData.data];
      } catch (e) {
        // set loading to false
        this.loading.data = false;
      }
    },

    // fetch items action
    async fetchItems(firstEmpty = false) {
      try {
        // set items to empty begore fetch
        if (firstEmpty) {
          this.data = [];
        } // set loading to true


        this.loading.data = true; // send request to api

        const response = await this.$axios.get(this.fetchData.url); // set loading to false

        this.loading.data = false; // set data to respose

        this.data = response.data[this.fetchData.data];
      } catch (e) {
        // set loading to false
        this.loading.data = false;
      }
    },

    // add item action
    async addItem(data, form, itemForm) {
      try {
        // remove any alerts if exist
        this.removeAlert(); // set loading to true

        this.loading.add = true; // convert data to formdata

        if (this.addData.formData) {
          data = createFormData(data);
        } // send api request


        const response = await this.$axios.post(this.addData.url, data); // set loading to false

        this.loading.add = false; // reset form validation

        form.resetValidation(); // reset form
        // this.item = Object.assign({}, this.defaultItem)
        // close dialog

        this.showAddEditDialog = false; // display success message

        this.addAlert(true, 'success', response.data.message ? response.data.message : response.message); // emit after add function

        this.$emit('after-add', response, this.item); // reload

        if (this.addData.reload) {
          if (response) {
            await this.fetchItems();
          }
        } // success redirect


        if (this.addData.successRedirect) {
          this.$router.push(this.addData.successRedirect);
        }
      } catch (e) {
        // set loading to false
        this.loading.add = false; // display error message

        this.addAlert(true, 'error', e.response.data.message ? e.response.data.message : e.response.message);
      } // error redirect


      if (this.addData.errorRedirect) {
        this.$router.push(this.addData.errorRedirect);
      }
    },

    // edit item aciotn
    async editItem(data, form) {
      // replace the url param with actual param
      const editUrl = this.editData.url;
      let url = editUrl;

      if (this.editData.param) {
        url = editUrl.replace(':param', this.item[this.editData.param]);
      }

      try {
        // remove any alerts if exist
        this.removeAlert(); // set loading to true

        this.loading.edit = true; // convert data to formdata

        if (this.editData.formData) {
          data = createFormData(data);
        } // send request to api


        const response = await this.$axios.put(url, data); // set loading to false

        this.loading.edit = false; // reset form validation

        form.resetValidation(); // reset form
        // this.item = Object.assign({}, this.defaultItem)
        // close dialog

        this.showAddEditDialog = false; // display success message

        this.addAlert(true, 'success', response.data.message ? response.data.message : response.message); // reload

        if (this.editData.reload) {
          if (response) {
            await this.fetchItems();
          }
        } // emit after edit function


        this.$emit('after-edit', response, this.item); // success redirect

        if (this.editData.successRedirect) {
          this.$router.push(this.editData.successRedirect);
        }
      } catch (e) {
        // set loading to false
        this.loading.edit = false; // display error message

        this.addAlert(true, 'error', e.response.data.message ? e.response.data.message : e.response.message); // error redirect

        if (this.editData.errorRedirect) {
          this.$router.push(this.editData.errorRedirect);
        }
      }
    },

    // delete Item
    async deleteItem() {
      // replace the url param with actual param
      const deleteUrl = this.deleteData.url;
      const url = deleteUrl.replace(':param', this.itemToDel[this.deleteData.param]);

      try {
        // remove any alerts if exist
        this.removeAlert(); // set loadign to true

        this.loading.delete = true; // send request to api

        const response = await this.$axios.delete(url); // set loading to false

        this.loading.delete = false; // display success message

        this.addAlert(true, 'success', response.data.message ? response.data.message : response.message); // close confirm dialog

        this.showDeleteDialog = false; // emit after delete function

        this.$emit('after-delete', response, this.item); // reload

        if (this.deleteData.reload) {
          if (response) {
            await this.fetchItems();
          }
        }
      } catch (e) {
        // set loading to false
        this.loading.delete = false; // display error message

        this.addAlert(true, 'error', e.response.data.message ? e.response.data.message : e.response.message);
      }
    },

    // delete multiple items
    async deleteItems(data) {
      try {
        // remove any alerts if exist
        this.removeAlert(); // set loading to true

        this.loading.delete = true; // if arrayOf given

        if (this.deleteMultipleData.arrayOf) {
          data = data.map(d => d[this.deleteMultipleData.arrayOf]);
        } // send request to api


        const response = await this.$axios.post(this.deleteMultipleData.url, data); // set loading to false

        this.loading.delete = false; // display success message

        this.addAlert(true, 'success', response.data.message ? response.data.message : response.message); // close confirm dialog

        this.showDeleteDialog = false; // emit after delete multiple function

        this.$emit('after-delete-multiple', response, this.item); // reload

        if (this.deleteMultipleData.reload) {
          if (response) {
            await this.fetchItems();
          }
        } // change bulk delete value to default


        this.bulkDeleteValue = '';
      } catch (e) {
        // set laodign to false
        this.loading.delete = false; // display error message

        this.addAlert(true, 'error', e.response.data.message ? e.response.data.message : e.response.message);
      }
    },

    // add alert
    addAlert(show = true, type = 'info', text = '', timeout = 5000) {
      this.alert = {
        show,
        type,
        text,
        timeout
      };
    },

    // remove alert
    removeAlert(show = false, type = 'info', text = '', timeout = 5000) {
      this.alert = {
        show,
        type,
        text,
        timeout
      };
    }

  }
});

/***/ }),

/***/ 495:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(498);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("71e2e93b", content, true, context)
};

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CrudDataTable_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(495);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CrudDataTable_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CrudDataTable_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CrudDataTable_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CrudDataTable_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CrudDataTable_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 498:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".dialog-btn{position:fixed;right:20px;bottom:50px;z-index:100}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/crud/CrudDataTable.vue?vue&type=template&id=4ea00e57&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.button)?_vm._ssrNode("<div>","</div>",[_c('v-btn',{attrs:{"color":_vm.button.color ? _vm.button.color : 'primary',"icon":_vm.button.type === 'icon'},on:{"click":function($event){return _vm.openDialog(_vm.defaultItem)}}},[_c('v-icon',{attrs:{"color":_vm.button.iconColor ? _vm.button.iconColor : '',"size":_vm.button.iconSize ? _vm.button.iconSize : ''}},[_vm._v("\n        "+_vm._s(_vm.button.icon ? _vm.button.icon : 'mdi-plus')+"\n      ")]),_vm._v("\n      "+_vm._s(_vm.button.text ? _vm.button.text : _vm.$t('crud.button.text'))+"\n    ")],1)],1):_vm._e(),_vm._ssrNode(" "),(_vm.table)?_c('v-row',{staticClass:"d-flex my-2"},[_c('v-col',{attrs:{"cols":"6"}},[(_vm.table.showSelect)?_c('v-select',{attrs:{"disabled":_vm.selected.length === 0,"label":_vm.$t('crud.table.bulkActions.label'),"outlined":"","dense":"","hide-details":"","items":[
          {
            text: _vm.$t('crud.table.bulkActions.deleteSelected'),
            value: 'Delete Selected'
          }
        ],"item-text":"text","item-value":"value"},on:{"change":_vm.bulkDelete},model:{value:(_vm.bulkDeleteValue),callback:function ($$v) {_vm.bulkDeleteValue=$$v},expression:"bulkDeleteValue"}}):_vm._e()],1),_vm._v(" "),(_vm.table.button)?_c('v-col',{staticClass:"text-right",attrs:{"cols":"6"}},[_c('v-btn',{attrs:{"color":_vm.table.button.color ? _vm.table.button.color : 'primary',"icon":_vm.table.button.type === 'icon'},on:{"click":function($event){return _vm.openDialog(_vm.defaultItem)}}},[_c('v-icon',{attrs:{"color":_vm.table.button.iconColor ? _vm.table.button.iconColor : '',"size":_vm.table.button.iconSize ? _vm.table.button.iconSize : ''}},[_vm._v(_vm._s(_vm.table.button.icon ? _vm.table.button.icon : 'mdi-plus'))]),_vm._v("\n        "+_vm._s(_vm.table.button.text ? _vm.table.button.text : _vm.$t('crud.table.button.text'))+"\n      ")],1)],1):_vm._e()],1):_vm._e(),_vm._ssrNode(" "),(_vm.table)?_c('v-card',[_c('v-row',{staticClass:"px-5",attrs:{"align-content":"center","justify":"center"}},[_c('v-col',{attrs:{"sm":"6","cols":"12"}},[(_vm.table.heading)?_c('v-card-title',[_vm._v("\n          "+_vm._s(_vm.table.heading)+"\n        ")]):_vm._e()],1),_vm._v(" "),_c('v-col',{attrs:{"align-self":"center","sm":"6","cols":"12"}},[(_vm.table.search)?_c('v-text-field',{attrs:{"outlined":"","hide-details":"","dense":"","append-icon":_vm.table.search.icon ? _vm.table.search.icon : 'mdi-magnify',"label":_vm.table.search.label
              ? _vm.table.search.label
              : _vm.$t('crud.table.search.label')},model:{value:(_vm.search),callback:function ($$v) {_vm.search=$$v},expression:"search"}}):_vm._e()],1)],1),_vm._v(" "),_c('v-data-table',{staticClass:"elevation-1",attrs:{"headers":_vm.headers,"items":_vm.data,"item-key":_vm.table.itemKey ? _vm.table.itemKey : '_id',"multi-sort":"","show-select":_vm.table.showSelect,"search":_vm.search,"loading-text":_vm.table.loadingText ? _vm.table.loadingText : 'data is loading ...',"no-data-text":_vm.table.noDataText ? _vm.table.noDataText : 'no data found',"no-results-text":_vm.table.noResultsText ? _vm.table.noResultsText : 'no results found',"loading":_vm.loading.data},scopedSlots:_vm._u([_vm._l((_vm.$scopedSlots),function(x,slotName){return {key:slotName,fn:function(context){return [_vm._t(slotName,null,null,context)]}}}),(_vm.actions)?{key:"item.actions",fn:function(ref){
              var i = ref.item;
return [(_vm.actions.view && _vm.viewData.redirect)?_c('v-icon',{staticClass:"mr-2",attrs:{"color":"info"},on:{"click":function($event){_vm.$router.push(_vm.viewRedirect(_vm.viewData.url, i))}}},[_vm._v("\n          mdi-eye\n        ")]):_vm._e(),_vm._v(" "),(_vm.actions.view && !_vm.viewData.redirect)?_c('v-icon',{staticClass:"mr-2",attrs:{"color":"info"},on:{"click":function($event){return _vm.openViewDialog(i)}}},[_vm._v("\n          mdi-eye\n        ")]):_vm._e(),_vm._v(" "),(_vm.actions.edit && _vm.editData.redirect)?_c('v-icon',{staticClass:"mr-2",attrs:{"color":"success"},on:{"click":function($event){_vm.$router.push(_vm.editRedirect(_vm.editData.url, i))}}},[_vm._v("\n          mdi-pencil\n        ")]):_vm._e(),_vm._v(" "),(_vm.actions.edit && !_vm.editData.redirect)?_c('v-icon',{staticClass:"mr-2",attrs:{"color":"success"},on:{"click":function($event){return _vm.editDialog(i)}}},[_vm._v("\n          mdi-pencil\n        ")]):_vm._e(),_vm._v(" "),(_vm.actions.delete)?_c('v-icon',{attrs:{"color":"error"},on:{"click":function($event){return _vm.itemDelete(i)}}},[_vm._v("\n          mdi-delete\n        ")]):_vm._e()]}}:null],null,true),model:{value:(_vm.selected),callback:function ($$v) {_vm.selected=$$v},expression:"selected"}})],1):_vm._e(),_vm._ssrNode(" "),_c('crud-add-edit-dialog',{attrs:{"show":_vm.showAddEditDialog,"dialog":_vm.addEditDialog,"edit":_vm.edit,"loading":_vm.loading},on:{"editItem":_vm.itemEdit,"saveItem":_vm.itemSave,"close":_vm.closeAddEditDialog}},[_c('template',{slot:"form"},[_vm._t("crud-form",null,{"item":_vm.item,"edit":_vm.edit})],2)],2),_vm._ssrNode(" "),_c('crud-delete-dialog',{attrs:{"dialog":_vm.deleteDialog,"show":_vm.showDeleteDialog,"loading":_vm.loading},on:{"success":_vm.success,"close":_vm.closeDeleteDialog}}),_vm._ssrNode(" "),_c('crud-view-dialog',{attrs:{"dialog":_vm.viewDialog,"show":_vm.showViewDialog},on:{"close":_vm.closeViewDialog}},[_c('template',{slot:"view"},[_vm._t("view-item",null,{"item":_vm.item})],2)],2),_vm._ssrNode(" "),_c('crud-snackbar',{attrs:{"alert":_vm.alert}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/crud/CrudDataTable.vue?vue&type=template&id=4ea00e57&

// EXTERNAL MODULE: ./mixins/crud.js + 1 modules
var crud = __webpack_require__(494);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/crud/CrudDataTable.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var CrudDataTablevue_type_script_lang_js_ = ({
  components: {
    CrudAddEditDialog: () => __webpack_require__.e(/* import() */ 69).then(__webpack_require__.bind(null, 636)),
    CrudDeleteDialog: () => __webpack_require__.e(/* import() */ 98).then(__webpack_require__.bind(null, 637)),
    CrudViewDialog: () => __webpack_require__.e(/* import() */ 100).then(__webpack_require__.bind(null, 638)),
    CrudSnackbar: () => __webpack_require__.e(/* import() */ 99).then(__webpack_require__.bind(null, 496))
  },
  mixins: [crud["a" /* default */]],
  props: {
    crudId: {
      type: [String, Boolean],
      default: false
    },
    table: {
      type: [Boolean, Object],
      default: false
    },
    addEditDialog: {
      type: [Boolean, Object],
      default: false
    },
    deleteDialog: {
      type: [Boolean, Object],
      default: false
    },
    viewDialog: {
      type: [Boolean, Object],
      default: false
    },
    status: {
      type: [String],
      default: 'add'
    },
    button: {
      type: [Boolean, Object],
      default: false
    },
    headers: {
      type: Array,
      default: () => []
    },
    items: {
      type: [Boolean, Array],
      default: () => {
        return [];
      }
    },
    defaultItem: {
      type: Object,
      default: () => {
        return {};
      }
    },
    fetchData: {
      type: [Boolean, Object],
      default: false
    },
    addData: {
      type: [Boolean, Object],
      default: false
    },
    editData: {
      type: [Boolean, Object],
      default: false
    },
    viewData: {
      type: [Boolean, Object],
      default: false
    },
    deleteData: {
      type: [Boolean, Object],
      default: false
    },
    deleteMultipleData: {
      type: [Boolean, Object],
      default: false
    },
    actions: {
      type: [Boolean, Object],
      default: false
    }
  },

  data() {
    return {
      bulkDeleteValue: '',
      selected: [],
      search: '',
      itemToDel: null,
      deleteType: '',
      showAddEditDialog: false,
      item: Object.assign({}, this.defaultItem),
      edit: this.status === 'edit',
      data: this.items,
      showDeleteDialog: false,
      showViewDialog: false
    };
  },

  // fetch items if fetch data
  async created() {
    if (this.fetchData) {
      await this.fetchItems(false);
    }
  },

  methods: {
    getEditItem(item) {
      const editItem = Object.assign({}, item);
      return editItem;
    },

    closeAddEditDialog() {
      this.showAddEditDialog = false;
      this.item = Object.assign({}, this.defaultItem);
    },

    closeDeleteDialog() {
      this.showDeleteDialog = false; // change bulk delete value to default

      this.bulkDeleteValue = '';
    },

    closeViewDialog() {
      this.showViewDialog = false;
    },

    // open dialog
    openDialog(item) {
      if (this.addData.redirect) {
        return this.$router.push(this.addData.url);
      }

      this.showAddEditDialog = true;
      this.edit = this.status === 'edit'; // if (this.status === 'edit') {

      this.item = Object.assign({}, item); // } else {
      // }
    },

    // edit dialog
    editDialog(item) {
      this.edit = true;
      this.showAddEditDialog = true;
      this.item = Object.assign({}, item);
    },

    openViewDialog(item) {
      this.showViewDialog = true;
      this.item = Object.assign({}, item);
    },

    // item save
    async itemSave(form, itemForm) {
      if (!this.addData) {
        this.$emit('saveItem', this.item, form);
      } else {
        await this.addItem(this.item, form, itemForm);
      }
    },

    // item edit
    async itemEdit(form) {
      if (!this.editData) {
        this.$emit('editItem', this.item, form);
      } else {
        await this.editItem(this.item, form);
      }
    },

    // delete confirm success
    async success() {
      if (this.deleteType === 'single') {
        if (!this.deleteData) {
          this.$emit('deleteItem', this.itemToDel);
        } else {
          await this.deleteItem();
        }
      } else if (this.deleteType === 'multiple') {
        if (!this.deleteData) {
          this.$emit('deleteItems', this.selected);
        } else {
          await this.deleteItems(this.selected);
        }
      }
    },

    // delete single item click func
    itemDelete(item) {
      this.deleteType = 'single';
      this.itemToDel = item;
      this.showDeleteDialog = true;
    },

    // delete multiple items click func
    itemsDelete() {
      this.deleteType = 'multiple';
      this.showDeleteDialog = true;
    },

    // edit data redirect url
    editRedirect(url, item) {
      const newUrl = url.replace(':param', item[this.editData.param]);
      return newUrl;
    },

    viewRedirect(url, item) {
      const newUrl = url.replace(':param', item[this.viewData.param]);
      return newUrl;
    },

    // bulk delete funcs
    bulkDelete() {
      if (this.bulkDeleteValue === 'Delete Selected') {
        this.itemsDelete(this.selected);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/crud/CrudDataTable.vue?vue&type=script&lang=js&
 /* harmony default export */ var crud_CrudDataTablevue_type_script_lang_js_ = (CrudDataTablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(25);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(94);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(183);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(200);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(186);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/VDataTable.js + 3 modules
var VDataTable = __webpack_require__(194);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(162);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js + 2 modules
var VSelect = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js
var VTextField = __webpack_require__(23);

// CONCATENATED MODULE: ./components/crud/CrudDataTable.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(497)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  crud_CrudDataTablevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4fd3dc10"
  
)

/* harmony default export */ var CrudDataTable = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */










installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardTitle: components_VCard["e" /* VCardTitle */],VCol: VCol["a" /* default */],VDataTable: VDataTable["a" /* default */],VIcon: VIcon["a" /* default */],VRow: VRow["a" /* default */],VSelect: VSelect["a" /* default */],VTextField: VTextField["a" /* default */]})


/***/ }),

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/pages/index.vue?vue&type=template&id=9d8a1962&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-container',[_c('v-row',[_c('v-col',{attrs:{"cols":"12"}},[_c('crud-data-table',{attrs:{"table":{
            showSelect: true,
            heading: _vm.$t('crud.table.headings.pages'),
            button: {
              text: _vm.$t('crud.table.addNewButtons.pages')
            }
          },"add-edit-dialog":{
            addHeading: _vm.$t('addEditDialog.headings.add.pages'),
            editHeading: _vm.$t('addEditDialog.headings.edit.pages')
          },"headers":_vm.headers,"dialog":{
            heading: 'Pages'
          },"actions":{
            edit: true,
            delete: true
          },"fetch-data":{
            url: '/api/pages',
            data: 'pages'
          },"add-data":{
            redirect: true,
            url: '/dashboard/pages/add'
          },"edit-data":{
            redirect: true,
            url: '/dashboard/pages/edit/:param',
            param: 'slug'
          },"delete-data":{
            url: '/api/pages/:param',
            param: '_id',
            reload: true
          },"delete-multiple-data":{
            url: '/api/pages/delete',
            arrayOf: '_id',
            reload: true
          }}})],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/dashboard/pages/index.vue?vue&type=template&id=9d8a1962&

// EXTERNAL MODULE: ./components/crud/CrudDataTable.vue + 4 modules
var CrudDataTable = __webpack_require__(499);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var pagesvue_type_script_lang_js_ = ({
  middleware: ['pagePermission'],
  components: {
    CrudDataTable: CrudDataTable["default"]
  },

  data() {
    return {
      headers: [{
        text: this.$t('crud.table.headers.title'),
        value: 'title'
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
// CONCATENATED MODULE: ./pages/dashboard/pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var dashboard_pagesvue_type_script_lang_js_ = (pagesvue_type_script_lang_js_); 
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

// CONCATENATED MODULE: ./pages/dashboard/pages/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dashboard_pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "51427c7a"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */




installComponents_default()(component, {VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=index.js.map