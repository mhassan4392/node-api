exports.ids = [4];
exports.modules = {

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      valid: false,
      rules: {
        required: value => !!value || this.$t('errorMessages.form.fieldRequired'),
        confirmPassword: (value, v2) => value === v2 || this.$t('errorMessages.form.confirmPasswordNotMatch'),
        isEmail: value => // eslint-disable-next-line
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) || this.$t('errorMessages.form.addValidEmail'),
        passwordMinLength: value => value && value.length >= 8 || this.$t('errorMessages.form.passwordLength'),
        isImage: value => {
          if (value && value.type) {
            return value.type.startsWith('image') || this.$t('errorMessages.form.plzUploadImage');
          } else {
            return true;
          }
        },
        imageSize: value => {
          if (value && value.size) {
            return value.size < 2048000 || this.$t('errorMessages.form.imageSize');
          } else {
            return true;
          }
        }
      }
    };
  },

  methods: {
    validate() {
      this.$refs.form.validate();
    }

  }
});

/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(539);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("d0a5226a", content, true, context)
};

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuForm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(512);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuForm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuForm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuForm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuForm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuForm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".parent{background:red;margin-bottom:10px}.children{margin-left:50px}.cursor-move{cursor:move}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/forms/MenuForm.vue?vue&type=template&id=f472639c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card-text',[_c('v-container',[_c('v-row',[_c('v-col',[_c('v-text-field',{attrs:{"label":_vm.$t('forms.labels.title'),"outlined":"","rules":[_vm.rules.required]},model:{value:(_vm.menu.title),callback:function ($$v) {_vm.$set(_vm.menu, "title", $$v)},expression:"menu.title"}}),_vm._v(" "),_c('div',{staticClass:"mb-5"},[_c('v-btn',{attrs:{"color":"primary"},on:{"click":_vm.addDialog}},[_c('v-icon',[_vm._v("mdi-plus")]),_vm._v("\n            Add New Link\n          ")],1)],1),_vm._v(" "),(_vm.menu.items.length === 0)?_c('div',[_c('h1',[_vm._v("Please Add Menu Items")])]):_c('div',[_c('draggable',{attrs:{"group":"people"},on:{"start":function($event){_vm.drag = true},"end":function($event){_vm.drag = false}},model:{value:(_vm.menu.items),callback:function ($$v) {_vm.$set(_vm.menu, "items", $$v)},expression:"menu.items"}},_vm._l((_vm.menu.items),function(element,index){return _c('div',{key:element.index,staticClass:"mb-2"},[_c('div',{staticClass:"elevation-2 d-flex primary white--text py-2 px-3 rounded cursor-move"},[_c('div',[_vm._v(_vm._s(element.title))]),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('v-icon',{attrs:{"color":"success"},on:{"click":function($event){return _vm.editDialog(element, index, null, 'item')}}},[_vm._v("mdi-pencil")]),_vm._v(" "),_c('v-icon',{attrs:{"color":"error"},on:{"click":function($event){return _vm.deleteDialog(element, index, null, 'item')}}},[_vm._v("mdi-delete")])],1),_vm._v(" "),_c('div',{staticClass:"ml-10"},[_c('draggable',{staticClass:"pb-5",attrs:{"group":"people"},on:{"start":function($event){_vm.drag = true},"end":function($event){_vm.drag = false}},model:{value:(element.children),callback:function ($$v) {_vm.$set(element, "children", $$v)},expression:"element.children"}},_vm._l((element.children),function(el,i){return _c('div',{key:el.i,staticClass:"mt-2"},[_c('div',{staticClass:"elevation-2 d-flex primary white--text py-2 px-3 rounded cursor-move"},[_c('div',[_vm._v(_vm._s(el.title))]),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('v-icon',{attrs:{"color":"success"},on:{"click":function($event){return _vm.editDialog(el, index, i, 'children')}}},[_vm._v("mdi-pencil")]),_vm._v(" "),_c('v-icon',{attrs:{"color":"error"},on:{"click":function($event){return _vm.deleteDialog(el, index, i, 'children')}}},[_vm._v("mdi-delete")])],1)])}),0)],1)])}),0)],1)],1)],1),_vm._v(" "),_c('v-row',{attrs:{"justify":"center"}},[_c('v-dialog',{attrs:{"persistent":"","max-width":"600px"},model:{value:(_vm.dialog),callback:function ($$v) {_vm.dialog=$$v},expression:"dialog"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v(_vm._s(_vm.remove ? 'Delete Link' : _vm.edit ? 'Edit Link' : 'Add Link'))])]),_vm._v(" "),_c('v-card-text',[_c('v-container',[_c('v-row',[_c('v-col',[_c('v-form',{ref:"menuItemForm",model:{value:(_vm.valid),callback:function ($$v) {_vm.valid=$$v},expression:"valid"}},[_c('v-text-field',{attrs:{"label":_vm.$t('forms.labels.title'),"outlined":"","rules":[_vm.rules.required]},model:{value:(_vm.menuItem.title),callback:function ($$v) {_vm.$set(_vm.menuItem, "title", $$v)},expression:"menuItem.title"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":_vm.$t('forms.labels.translation'),"outlined":""},model:{value:(_vm.menuItem.translation),callback:function ($$v) {_vm.$set(_vm.menuItem, "translation", $$v)},expression:"menuItem.translation"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":_vm.$t('forms.labels.icon'),"outlined":""},model:{value:(_vm.menuItem.icon),callback:function ($$v) {_vm.$set(_vm.menuItem, "icon", $$v)},expression:"menuItem.icon"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":_vm.$t('forms.labels.route'),"outlined":""},model:{value:(_vm.menuItem.route),callback:function ($$v) {_vm.$set(_vm.menuItem, "route", $$v)},expression:"menuItem.route"}}),_vm._v(" "),_c('v-switch',{attrs:{"label":_vm.$t('forms.labels.showWhenLoggedIn')},model:{value:(_vm.menuItem.loggedIn),callback:function ($$v) {_vm.$set(_vm.menuItem, "loggedIn", $$v)},expression:"menuItem.loggedIn"}}),_vm._v(" "),_c('v-switch',{attrs:{"label":_vm.$t('forms.labels.showWhenLoggedOut')},model:{value:(_vm.menuItem.loggedOut),callback:function ($$v) {_vm.$set(_vm.menuItem, "loggedOut", $$v)},expression:"menuItem.loggedOut"}}),_vm._v(" "),_c('v-select',{attrs:{"items":[
                        { title: 'Admin', value: 'admin' },
                        { title: 'Publisher', value: 'publisher' },
                        { title: 'User', value: 'user' }
                      ],"item-text":"title","item-value":"value","label":_vm.$t('forms.labels.selectPermissions'),"multiple":"","chips":"","outlined":"","dense":""},model:{value:(_vm.menuItem.permission),callback:function ($$v) {_vm.$set(_vm.menuItem, "permission", $$v)},expression:"menuItem.permission"}})],1)],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"color":"error"},on:{"click":_vm.closeDialog}},[_vm._v("\n              Close\n            ")]),_vm._v(" "),_c('v-btn',{attrs:{"color":"success"},on:{"click":_vm.save}},[_vm._v("\n              Save\n            ")])],1)],1)],1)],1),_vm._v(" "),_c('v-row',{attrs:{"justify":"center"}},[_c('v-dialog',{attrs:{"persistent":"","max-width":"600px"},model:{value:(_vm.removeDialog),callback:function ($$v) {_vm.removeDialog=$$v},expression:"removeDialog"}},[_c('v-card',[_c('v-card-text',[_c('v-container',[_c('v-row',[_c('v-col',[_c('h2',[_vm._v("Are You Sure?")])])],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"color":"error"},on:{"click":function($event){_vm.removeDialog = false}}},[_vm._v("\n              Close\n            ")]),_vm._v(" "),_c('v-btn',{attrs:{"color":"success"},on:{"click":_vm.save}},[_vm._v("\n              Remove\n            ")])],1)],1)],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/forms/MenuForm.vue?vue&type=template&id=f472639c&

// EXTERNAL MODULE: external "vuedraggable"
var external_vuedraggable_ = __webpack_require__(490);
var external_vuedraggable_default = /*#__PURE__*/__webpack_require__.n(external_vuedraggable_);

// EXTERNAL MODULE: ./mixins/validations.js
var validations = __webpack_require__(493);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/forms/MenuForm.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var MenuFormvue_type_script_lang_js_ = ({
  components: {
    draggable: external_vuedraggable_default.a
  },
  mixins: [validations["a" /* default */]],
  props: {
    menu: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      drag: false,
      dialog: false,
      edit: false,
      remove: false,
      itemIndex: null,
      childrenIndex: null,
      editType: '',
      deleteType: '',
      removeDialog: '',
      menuItem: {
        title: '',
        icon: '',
        route: '',
        children: [],
        loggedIn: true,
        loggedOut: true,
        permission: [],
        translation: ''
      },
      defaultItem: {
        title: '',
        icon: '',
        route: '',
        children: [],
        loggedIn: true,
        loggedOut: true,
        permission: [],
        translation: ''
      }
    };
  },

  methods: {
    addItem() {
      const newItem = Object.assign({}, this.menuItem);
      newItem.children = [];
      this.menu.items.push(newItem);
      this.$refs.menuItemForm.resetValidation(); // this.$refs.menuItemForm.reset()

      this.menuItem = Object.assign({}, this.defaultItem);
      this.dialog = false;
    },

    editItem() {
      if (this.editType === 'item') {
        this.menu.items[this.itemIndex] = Object.assign({}, this.menuItem);
      } else {
        this.menu.items[this.itemIndex].children[this.childrenIndex] = Object.assign({}, this.menuItem);
      }

      this.$refs.menuItemForm.resetValidation(); // this.$refs.menuItemForm.reset()

      this.menuItem = Object.assign({}, this.defaultItem);
      this.dialog = false;
    },

    deleteItem() {
      if (this.deleteType === 'item') {
        this.menu.items.splice(this.itemIndex, 1);
      } else {
        this.menu.items[this.itemIndex].children.splice(this.childrenIndex, 1);
      }

      this.removeDialog = false;
      this.remove = false;
    },

    closeDialog() {
      this.$refs.menuItemForm.resetValidation(); // this.$refs.menuItemForm.reset()

      this.menuItem = Object.assign({}, this.defaultItem);
      this.dialog = false;
    },

    editDialog(item, index, i, editType) {
      this.edit = true;
      this.editType = editType;
      this.itemIndex = index;
      this.childrenIndex = i;
      this.menuItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteDialog(item, index, i, deleteType) {
      this.remove = true;
      this.deleteType = deleteType;
      this.itemIndex = index;
      this.childrenIndex = i;
      this.removeDialog = true;
    },

    addDialog() {
      this.dialog = true;
      this.edit = false;
      this.itemIndex = null;
      this.childrenIndex = null;
    },

    save() {
      if (this.remove) {
        this.deleteItem();
      } else {
        this.$refs.menuItemForm.validate();

        if (this.valid) {
          if (this.edit) {
            this.editItem();
          } else {
            this.addItem();
          }
        }
      }
    }

  }
});
// CONCATENATED MODULE: ./components/forms/MenuForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var forms_MenuFormvue_type_script_lang_js_ = (MenuFormvue_type_script_lang_js_); 
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(176);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(85);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(185);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(162);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js + 2 modules
var VSelect = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(174);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSwitch/VSwitch.js
var VSwitch = __webpack_require__(190);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js
var VTextField = __webpack_require__(23);

// CONCATENATED MODULE: ./components/forms/MenuForm.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(538)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  forms_MenuFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "706f5fde"
  
)

/* harmony default export */ var MenuForm = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */
















installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardActions: components_VCard["b" /* VCardActions */],VCardText: components_VCard["d" /* VCardText */],VCardTitle: components_VCard["e" /* VCardTitle */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VDialog: VDialog["a" /* default */],VForm: VForm["a" /* default */],VIcon: VIcon["a" /* default */],VRow: VRow["a" /* default */],VSelect: VSelect["a" /* default */],VSpacer: VSpacer["a" /* default */],VSwitch: VSwitch["a" /* default */],VTextField: VTextField["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=4.js.map