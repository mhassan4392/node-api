exports.ids = [12];
exports.modules = {

/***/ 527:
/***/ (function(module, exports) {

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function installDirectives (component, directives) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.directives = component.exports.options.directives
  }

  options.directives = options.directives || {}

  for (var i in directives) {
    options.directives[i] = options.directives[i] || directives[i]
  }
}


/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/layouts/AppNavbar.vue?vue&type=template&id=3f182362&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-app-bar',{directives:[{name:"scroll",rawName:"v-scroll",value:(_vm.onScroll),expression:"onScroll"}],staticClass:"px-6",attrs:{"fixed":"","tag":"nav","dense":_vm.isScrolling,"elevate-on-scroll":"","light":""}},[_c('v-toolbar-title',{},[_c('div',{staticClass:"d-flex"},[_c('div',{staticClass:"mr-2 align-self-start"},[(_vm.app.logo)?_c('v-img',{attrs:{"width":"100px","src":'/uploads/app/' + _vm.app.logo},scopedSlots:_vm._u([{key:"placeholder",fn:function(){return [_c('v-row',{staticClass:"fill-height ma-0",attrs:{"align":"center","justify":"center"}},[_c('v-progress-circular',{attrs:{"indeterminate":"","color":"primary"}})],1)]},proxy:true}],null,false,3042438443)}):_vm._e()],1),_vm._v(" "),(_vm.app.title)?_c('div',{staticClass:"align-self-center"},[_vm._v("\n          "+_vm._s(_vm.app.title)+"\n        ")]):_vm._e()])]),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('v-app-bar-nav-icon',{staticClass:"hidden-md-and-up",on:{"click":function($event){_vm.drawer = true}}}),_vm._v(" "),(_vm.$store.state.loading.menu.menus)?_c('div',{staticClass:"hidden-sm-and-down"},_vm._l((5),function(i){return _c('v-skeleton-loader',{key:i,attrs:{"type":"list-item"}})}),1):_c('div',{staticClass:"hidden-sm-and-down",staticStyle:{"height":"100%"}},[_c('div',{staticClass:"d-flex",staticStyle:{"height":"100%"}},[_vm._l((_vm.getMenu('home', _vm.$auth)),function(item){return _c('div',{key:item._id,staticClass:"align-self-stretch"},[_c('v-btn',{attrs:{"height":"100%","exact-active-class":"primary--text","to":item.route,"link":"","text":"","exact":""}},[_vm._v("\n            "+_vm._s(item.translation ? _vm.$t(item.translation) : item.title)+"\n          ")])],1)}),_vm._v(" "),_c('div',{staticClass:"ml-2 align-self-stretch d-flex",staticStyle:{"width":"150px"}},[_c('v-select',{staticClass:"align-self-center",attrs:{"height":"100%","items":_vm.$store.state.lang.langs,"item-text":"name","item-value":"locale","prepend-inner-icon":"mdi-flag","outlined":"","color":"primary","dense":"","single-line":"","hide-details":""},on:{"change":_vm.changeLang},model:{value:(_vm.lang.locale),callback:function ($$v) {_vm.$set(_vm.lang, "locale", $$v)},expression:"lang.locale"}})],1)],2)])],1),_vm._ssrNode(" "),(_vm.drawer)?_c('v-navigation-drawer',{staticClass:"d-lg-none",attrs:{"floating":"","app":"","light":"","overflow":""},model:{value:(_vm.drawer),callback:function ($$v) {_vm.drawer=$$v},expression:"drawer"}},[_c('v-toolbar-title',[_c('div',{staticClass:"d-flex my-2 text-center justify-center"},[(_vm.app.logo)?_c('div',{staticClass:"mr-2"},[_c('v-img',{attrs:{"width":"100px","src":'/uploads/app/' + _vm.app.logo},scopedSlots:_vm._u([{key:"placeholder",fn:function(){return [_c('v-row',{staticClass:"fill-height ma-0",attrs:{"align":"center","justify":"center"}},[_c('v-progress-circular',{attrs:{"indeterminate":"","color":"primary"}})],1)]},proxy:true}],null,false,3042438443)})],1):_vm._e(),_vm._v(" "),(_vm.app.title)?_c('div',{staticClass:"align-self-center black--text"},[_vm._v("\n          "+_vm._s(_vm.app.title)+"\n        ")]):_vm._e()])]),_vm._v(" "),_c('v-list',[_c('v-divider'),_vm._v(" "),(_vm.$store.state.loading.menu.menus)?_c('div',_vm._l((5),function(i){return _c('v-skeleton-loader',{key:i,attrs:{"type":"list-item"}})}),1):_c('div',_vm._l((_vm.getMenu('home', _vm.$auth)),function(item){return _c('div',{key:item._id},[(item.children.length === 0)?_c('v-list-item',{attrs:{"link":"","exact":"","to":item.route}},[_c('v-list-item-action',[_c('v-icon',[_vm._v(_vm._s(item.icon))])],1),_vm._v(" "),_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(_vm._s(item.translation ? _vm.$t(item.translation) : item.title))])],1)],1):_vm._e(),_vm._v(" "),(item.children.length > 0)?_c('v-list-group',{attrs:{"prepend-icon":item.icon,"no-action":""},scopedSlots:_vm._u([{key:"activator",fn:function(){return [_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(_vm._s(item.translation ? _vm.$t(item.translation) : item.title))])],1)]},proxy:true}],null,true),model:{value:(item.active),callback:function ($$v) {_vm.$set(item, "active", $$v)},expression:"item.active"}},[_vm._v(" "),_vm._l((item.children),function(subItem,i){return _c('v-list-item',{key:i,attrs:{"link":"","exact":"","to":subItem.route}},[_c('v-list-item-action',[_c('v-icon',[_vm._v(_vm._s(subItem.icon))])],1),_vm._v(" "),_c('v-list-item-content',[_c('v-list-item-title',[_vm._v("\n                  "+_vm._s(subItem.translation
                      ? _vm.$t(subItem.translation)
                      : subItem.title)+"\n                ")])],1)],1)})],2):_vm._e()],1)}),0)],1)],1):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/layouts/AppNavbar.vue?vue&type=template&id=3f182362&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/layouts/AppNavbar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var AppNavbarvue_type_script_lang_js_ = ({
  data() {
    return {
      drawer: false,
      isScrolling: false
    };
  },

  computed: { ...Object(external_vuex_["mapState"])(['lang']),
    ...Object(external_vuex_["mapState"])('settings', {
      app: state => state.settings.app.app
    }),
    ...Object(external_vuex_["mapGetters"])({
      locales: 'lang/locales'
    }),
    ...Object(external_vuex_["mapGetters"])('menu', ['getMenu']),

    locale() {
      return this.$store.state.lang.locale;
    }

  },
  methods: { ...Object(external_vuex_["mapActions"])('lang', ['fetchLangs', 'fetchTranslation']),

    onScroll() {
      const offset = window.pageYOffset;
      this.isScrolling = offset > 50;
    },

    changeLang() {
      localStorage.setItem('lang', this.locale);
      location.reload();
    }

  }
});
// CONCATENATED MODULE: ./components/layouts/AppNavbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_AppNavbarvue_type_script_lang_js_ = (AppNavbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(25);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAppBar/VAppBar.js
var VAppBar = __webpack_require__(163);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAppBar/VAppBarNavIcon.js
var VAppBarNavIcon = __webpack_require__(164);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(94);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(165);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js
var VImg = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(166);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListGroup.js
var VListGroup = __webpack_require__(167);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(96);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemAction.js
var VListItemAction = __webpack_require__(168);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 1 modules
var components_VList = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VNavigationDrawer/VNavigationDrawer.js
var VNavigationDrawer = __webpack_require__(171);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js
var VProgressCircular = __webpack_require__(95);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(162);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js + 2 modules
var VSelect = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSkeletonLoader/VSkeletonLoader.js
var VSkeletonLoader = __webpack_require__(173);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(174);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/index.js
var VToolbar = __webpack_require__(114);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installDirectives.js
var installDirectives = __webpack_require__(527);
var installDirectives_default = /*#__PURE__*/__webpack_require__.n(installDirectives);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/scroll/index.js
var directives_scroll = __webpack_require__(64);

// CONCATENATED MODULE: ./components/layouts/AppNavbar.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  layouts_AppNavbarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5f54c5a0"
  
)

/* harmony default export */ var AppNavbar = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */




















installComponents_default()(component, {VAppBar: VAppBar["a" /* default */],VAppBarNavIcon: VAppBarNavIcon["a" /* default */],VBtn: VBtn["a" /* default */],VDivider: VDivider["a" /* default */],VIcon: VIcon["a" /* default */],VImg: VImg["a" /* default */],VList: VList["a" /* default */],VListGroup: VListGroup["a" /* default */],VListItem: VListItem["a" /* default */],VListItemAction: VListItemAction["a" /* default */],VListItemContent: components_VList["g" /* VListItemContent */],VListItemTitle: components_VList["k" /* VListItemTitle */],VNavigationDrawer: VNavigationDrawer["a" /* default */],VProgressCircular: VProgressCircular["a" /* default */],VRow: VRow["a" /* default */],VSelect: VSelect["a" /* default */],VSkeletonLoader: VSkeletonLoader["a" /* default */],VSpacer: VSpacer["a" /* default */],VToolbarTitle: VToolbar["c" /* VToolbarTitle */]})


/* vuetify-loader */


installDirectives_default()(component, {Scroll: directives_scroll["b" /* default */]})


/***/ })

};;
//# sourceMappingURL=12.js.map