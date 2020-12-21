exports.ids = [52];
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

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(522);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("0e0763ea", content, true, context)
};

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_9b8a5d78_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(504);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_9b8a5d78_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_9b8a5d78_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_9b8a5d78_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_9b8a5d78_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_9b8a5d78_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "p[data-v-9b8a5d78]{margin:0;padding:0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/profile/_id.vue?vue&type=template&id=9b8a5d78&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',[_c('v-row',[_c('v-col',[_c('v-card',[_c('v-row',{staticClass:"py-5",attrs:{"justify":"center","align":"center"}},[_c('v-col',{staticClass:"mx-auto",attrs:{"cols":"10"}},[(
                _vm.$store.state.loading.user.profile ||
                  _vm.$store.state.loading.user.user
              )?_c('v-skeleton-loader',{attrs:{"type":"card-avatar, article, card-actions"}}):_c('v-row',{staticClass:"justify-center jsutify-sm-start align-center"},[_c('v-col',{staticClass:"text-center",attrs:{"cols":"12","md":"6"}},[(_vm.user)?_c('v-img',{attrs:{"src":_vm.user.avatar
                      ? '/uploads/users/' + _vm.user.avatar + '?' + Date.now()
                      : '/potrait.jpg',"aspect-ratio":"1"},scopedSlots:_vm._u([{key:"placeholder",fn:function(){return [_c('v-row',{staticClass:"fill-height ma-0",attrs:{"align":"center","justify":"center"}},[_c('v-progress-circular',{attrs:{"indeterminate":"","color":"primary"}})],1)]},proxy:true}],null,false,3042438443)},[_vm._v(" "),(_vm.user && _vm.$auth.user._id === _vm.user._id)?_c('div',{staticStyle:{"position":"absolute","top":"10px","right":"10px","cursor":"pointer","z-index":"10000"}},[_c('crud-data-table',{attrs:{"default-item":_vm.user,"button":{
                        color: 'primary',
                        text: ' ',
                        icon: 'mdi-camera',
                        type: 'icon',
                        iconSize: '50px',
                        iconColor: 'primary'
                      },"status":"edit","add-edit-dialog":{
                        editHeading: _vm.$t(
                          'addEditDialog.headings.edit.profile.image'
                        )
                      },"edit-data":{
                        url: '/api/users/:param',
                        param: '_id',
                        formData: true
                      }},on:{"after-edit":_vm.editUser},scopedSlots:_vm._u([{key:"crud-form",fn:function(ref){
                      var user = ref.item;
return [_c('edit-profile-picture-form',{attrs:{"user":user}})]}}],null,false,1878730283)})],1):_vm._e()]):_vm._e()],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"6"}},[_c('div',{staticClass:"d-flex my-2 align-center"},[_c('v-icon',{staticClass:"mr-3"},[_vm._v("mdi-account")]),_vm._v(" "),(_vm.user && _vm.user.name)?_c('h3',[_vm._v(_vm._s(_vm.user.name))]):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"d-flex my-2 align-center"},[_c('v-icon',{staticClass:"mr-3"},[_vm._v("mdi-email")]),_vm._v(" "),(_vm.user && _vm.user.email)?_c('p',[_vm._v(_vm._s(_vm.user.email))]):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"d-flex my-2 align-center"},[_c('v-icon',{staticClass:"mr-3"},[_vm._v("mdi-newspaper")]),_vm._v(" "),(_vm.user && _vm.user.role)?_c('p',[_vm._v(_vm._s(_vm.user.role.title))]):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"d-flex my-2 align-center"},[_c('v-icon',{staticClass:"mr-3"},[_vm._v("mdi-account")]),_vm._v(" "),(_vm.user && _vm.user.gender)?_c('p',[_vm._v(_vm._s(_vm.user.gender))]):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"d-flex my-2 align-center"},[_c('v-icon',{staticClass:"mr-3"},[_vm._v("mdi-comment")]),_vm._v(" "),(_vm.user && _vm.user.bio)?_c('p',[_vm._v(_vm._s(_vm.user.bio))]):_vm._e()],1)])],1)],1),_vm._v(" "),_c('v-col',{staticClass:"mx-auto mt-8",attrs:{"cols":"10"}},[_c('div',{staticClass:"d-flex flex-wrap justify-space-around align-center"},[(_vm.user && _vm.$auth.user._id === _vm.user._id)?_c('div',[_c('crud-data-table',{attrs:{"default-item":_vm.user,"button":{
                    text: 'Edit Profile',
                    icon: 'mdi-pencil'
                  },"status":"edit","add-edit-dialog":{
                    editHeading: _vm.$t(
                      'addEditDialog.headings.edit.profile.profile'
                    )
                  },"edit-data":{
                    url: '/api/users/:param',
                    param: '_id'
                  }},on:{"after-edit":_vm.editUser},scopedSlots:_vm._u([{key:"crud-form",fn:function(ref){
                  var item = ref.item;
return [_c('edit-profile-form',{attrs:{"user":item}})]}}],null,false,3867709925)})],1):_vm._e(),_vm._v(" "),(_vm.user && _vm.$auth.user.role.title === 'admin')?_c('div',[_c('crud-data-table',{attrs:{"default-item":_vm.user,"button":{
                    color: 'secondary',
                    text: ' Change Role',
                    icon: 'mdi-account'
                  },"status":"edit","add-edit-dialog":{
                    editHeading: _vm.$t(
                      'addEditDialog.headings.edit.profile.role'
                    )
                  },"edit-data":{
                    url: '/api/users/:param',
                    param: '_id'
                  }},on:{"after-edit":_vm.editUser},scopedSlots:_vm._u([{key:"crud-form",fn:function(ref){
                  var item = ref.item;
return [_c('edit-role-form',{attrs:{"user":item}})]}}],null,false,1697764602)})],1):_vm._e(),_vm._v(" "),(_vm.user && _vm.$auth.user._id === _vm.user._id)?_c('div',[_c('crud-data-table',{attrs:{"default-item":_vm.user,"button":{
                    color: 'error',
                    text: 'Edit Credentials',
                    icon: 'mdi-lock'
                  },"status":"edit","add-edit-dialog":{
                    editHeading: _vm.$t(
                      'addEditDialog.headings.edit.profile.credentials'
                    )
                  },"edit-data":{
                    url: '/api/users/:param',
                    param: '_id'
                  }},on:{"after-edit":_vm.editUser},scopedSlots:_vm._u([{key:"crud-form",fn:function(ref){
                  var item = ref.item;
return [_c('edit-credentials-form',{attrs:{"user":item}})]}}],null,false,1064898198)})],1):_vm._e()])])],1)],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/dashboard/profile/_id.vue?vue&type=template&id=9b8a5d78&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(38);

// EXTERNAL MODULE: ./mixins/crud.js + 1 modules
var crud = __webpack_require__(494);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/profile/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  middleware: ['pagePermission'],
  components: {
    CrudDataTable: () => __webpack_require__.e(/* import() */ 66).then(__webpack_require__.bind(null, 499)),
    EditProfileForm: () => __webpack_require__.e(/* import() */ 81).then(__webpack_require__.bind(null, 627)),
    EditRoleForm: () => __webpack_require__.e(/* import() */ 83).then(__webpack_require__.bind(null, 628)),
    EditProfilePictureForm: () => __webpack_require__.e(/* import() */ 82).then(__webpack_require__.bind(null, 629)),
    EditCredentialsForm: () => __webpack_require__.e(/* import() */ 80).then(__webpack_require__.bind(null, 630))
  },
  mixins: [crud["a" /* default */]],

  data() {
    return {};
  },

  computed: { ...Object(external_vuex_["mapState"])({
      user: state => state.user.user
    })
  },
  watch: {
    $route() {
      if (this.$auth.user._id === this.$route.params.id) {
        this.$store.commit('user/SET_USER', this.$auth.user);
      } else {
        this.setUser({
          auth: this.$auth,
          axios: this.$axios,
          userId: this.$route.params.id
        });
      }
    }

  },

  mounted() {
    if (this.$auth.user._id === this.$route.params.id) {
      this.$store.commit('user/SET_USER', this.$auth.user);
    } else {
      this.setUser({
        auth: this.$auth,
        axios: this.$axios,
        userId: this.$route.params.id
      });
    }
  },

  methods: { ...Object(external_vuex_["mapActions"])('user', ['updateUser', 'setUser']),

    editUser(response) {
      this.updateUser({
        user: response.data.user,
        auth: this.$auth
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/dashboard/profile/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var profile_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(25);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(183);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(186);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(176);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js
var VImg = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js
var VProgressCircular = __webpack_require__(95);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(162);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSkeletonLoader/VSkeletonLoader.js
var VSkeletonLoader = __webpack_require__(173);

// CONCATENATED MODULE: ./pages/dashboard/profile/_id.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(521)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  profile_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "9b8a5d78",
  "599ad660"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */









installComponents_default()(component, {VCard: VCard["a" /* default */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VIcon: VIcon["a" /* default */],VImg: VImg["a" /* default */],VProgressCircular: VProgressCircular["a" /* default */],VRow: VRow["a" /* default */],VSkeletonLoader: VSkeletonLoader["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=_id.js.map