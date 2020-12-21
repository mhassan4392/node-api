exports.ids = [49,72,99];
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

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/crud/CrudSnackbar.vue?vue&type=template&id=597197aa&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-snackbar',{attrs:{"color":_vm.alert.type,"timeout":_vm.alert.timeout},scopedSlots:_vm._u([{key:"action",fn:function(ref){
var attrs = ref.attrs;
return [_c('v-btn',_vm._b({attrs:{"icon":"","text":""},on:{"click":function($event){_vm.alert.show = false}}},'v-btn',attrs,false),[_c('v-icon',[_vm._v("mdi-close")])],1)]}}]),model:{value:(_vm.alert.show),callback:function ($$v) {_vm.$set(_vm.alert, "show", $$v)},expression:"alert.show"}},[_c('div',[_vm._v(_vm._s(_vm.$t(_vm.alert.text)))])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/crud/CrudSnackbar.vue?vue&type=template&id=597197aa&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/crud/CrudSnackbar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CrudSnackbarvue_type_script_lang_js_ = ({
  props: {
    alert: {
      type: Object,
      default: () => {
        return {};
      }
    }
  }
});
// CONCATENATED MODULE: ./components/crud/CrudSnackbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var crud_CrudSnackbarvue_type_script_lang_js_ = (CrudSnackbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(25);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(94);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSnackbar/VSnackbar.js
var VSnackbar = __webpack_require__(189);

// CONCATENATED MODULE: ./components/crud/CrudSnackbar.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  crud_CrudSnackbarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3a80c569"
  
)

/* harmony default export */ var CrudSnackbar = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */




installComponents_default()(component, {VBtn: VBtn["a" /* default */],VIcon: VIcon["a" /* default */],VSnackbar: VSnackbar["a" /* default */]})


/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/crud/CrudAdd.vue?vue&type=template&id=af875afc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-card',[(_vm.heading)?_c('v-card-title',[_vm._v("\n      "+_vm._s(_vm.heading)+"\n      "),_c('v-spacer')],1):_vm._e(),_vm._v(" "),_c('v-card-text',[_c('v-form',{ref:"form",attrs:{"id":"itemForm","enctype":"multipart/form-data"},model:{value:(_vm.valid),callback:function ($$v) {_vm.valid=$$v},expression:"valid"}},[_vm._t("crud-form",null,{"item":_vm.item})],2)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),(_vm.goBackButton)?_c('v-btn',{attrs:{"color":_vm.goBackButton.color ? _vm.goBackButton.color : 'error'},on:{"click":_vm.goBack}},[_vm._v("\n        "+_vm._s(_vm.goBackButton.text
            ? _vm.goBackButton.text
            : _vm.$t('crudAdd.goBackButton.text'))+"\n      ")]):_vm._e(),_vm._v(" "),(_vm.button)?_c('v-btn',{attrs:{"loading":_vm.loading.add,"color":_vm.button.color ? _vm.button.color : 'success'},on:{"click":_vm.saveForm}},[_vm._v("\n        "+_vm._s(_vm.button.text ? _vm.button.text : _vm.$t('crudAdd.addButton.text'))+"\n      ")]):_vm._e()],1)],1),_vm._ssrNode(" "),_c('CrudSnackbar',{attrs:{"alert":_vm.alert}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/crud/CrudAdd.vue?vue&type=template&id=af875afc&

// EXTERNAL MODULE: ./mixins/crud.js + 1 modules
var crud = __webpack_require__(494);

// EXTERNAL MODULE: ./components/crud/CrudSnackbar.vue + 4 modules
var CrudSnackbar = __webpack_require__(496);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/crud/CrudAdd.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var CrudAddvue_type_script_lang_js_ = ({
  components: {
    CrudSnackbar: CrudSnackbar["default"]
  },
  mixins: [crud["a" /* default */]],
  props: {
    heading: {
      type: String,
      default: ''
    },
    defaultItem: {
      type: Object,
      default: () => {
        return {};
      }
    },
    button: {
      type: [Boolean, Object],
      default: false
    },
    goBackButton: {
      type: [Boolean, Object],
      default: false
    },
    fetchData: {
      type: [Boolean, Object],
      default: false
    },
    addData: {
      type: [Boolean, Object],
      default: false
    }
  },

  data() {
    return {
      valid: false,
      item: Object.assign({}, this.defaultItem)
    };
  },

  // fetch item if fetch data
  async created() {
    if (this.fetchData) {
      await this.fetchItem();
    }
  },

  methods: {
    // save form
    saveForm() {
      this.$refs.form.validate();

      if (this.valid) {
        this.itemSave(this.$refs.form);
      }
    },

    goBack() {
      if (this.goBackButton.redirect) {
        this.$router.push({
          path: this.goBackButton.url
        });
      } else {
        this.$router.go(-1);
      }
    },

    // item save
    async itemSave(form) {
      if (!this.addData) {
        this.$emit('saveItem', this.item, form);
      } else {
        await this.addItem(this.item, form);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/crud/CrudAdd.vue?vue&type=script&lang=js&
 /* harmony default export */ var crud_CrudAddvue_type_script_lang_js_ = (CrudAddvue_type_script_lang_js_); 
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(185);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(174);

// CONCATENATED MODULE: ./components/crud/CrudAdd.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  crud_CrudAddvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "31643eed"
  
)

/* harmony default export */ var CrudAdd = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */








installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardActions: components_VCard["b" /* VCardActions */],VCardText: components_VCard["d" /* VCardText */],VCardTitle: components_VCard["e" /* VCardTitle */],VForm: VForm["a" /* default */],VSpacer: VSpacer["a" /* default */]})


/***/ }),

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/pages/add.vue?vue&type=template&id=29072f90&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('crud-add',{attrs:{"button":"","default-item":_vm.page,"add-data":{
      url: '/api/pages',
      successRedirect: '/dashboard/pages'
    }},scopedSlots:_vm._u([{key:"crud-form",fn:function(ref){
    var item = ref.item;
return [_c('PageForm',{attrs:{"page":item}})]}}])})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/dashboard/pages/add.vue?vue&type=template&id=29072f90&scoped=true&

// EXTERNAL MODULE: ./components/crud/CrudAdd.vue + 4 modules
var CrudAdd = __webpack_require__(501);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/pages/add.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var addvue_type_script_lang_js_ = ({
  middleware: ['pagePermission'],
  components: {
    CrudAdd: CrudAdd["default"],
    PageForm: () => __webpack_require__.e(/* import() */ 10).then(__webpack_require__.bind(null, 616))
  },

  data() {
    return {
      page: {
        title: '',
        body: '',
        excerpt: '',
        status: '',
        showHeader: true,
        showSidebar: true,
        keywords: '',
        description: ''
      }
    };
  }

});
// CONCATENATED MODULE: ./pages/dashboard/pages/add.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_addvue_type_script_lang_js_ = (addvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(21);

// CONCATENATED MODULE: ./pages/dashboard/pages/add.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_addvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "29072f90",
  "716c9452"
  
)

/* harmony default export */ var add = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=add.js.map