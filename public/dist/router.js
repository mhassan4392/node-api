import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6e839ca7 = () => interopDefault(import('../../../nuxt apps/nuxt-app/pages/about.vue' /* webpackChunkName: "pages/about" */))
const _111f7efe = () => interopDefault(import('../../../nuxt apps/nuxt-app/pages/auth.vue' /* webpackChunkName: "pages/auth" */))
const _28ebf218 = () => interopDefault(import('../../../nuxt apps/nuxt-app/pages/auth/login.vue' /* webpackChunkName: "pages/auth/login" */))
const _41a3596b = () => interopDefault(import('../../../nuxt apps/nuxt-app/pages/auth/logout.vue' /* webpackChunkName: "pages/auth/logout" */))
const _50da6078 = () => interopDefault(import('../../../nuxt apps/nuxt-app/pages/auth/register.vue' /* webpackChunkName: "pages/auth/register" */))
const _1d3b02f6 = () => interopDefault(import('../../../nuxt apps/nuxt-app/pages/auth/forgot/password.vue' /* webpackChunkName: "pages/auth/forgot/password" */))
const _6d29945d = () => interopDefault(import('../../../nuxt apps/nuxt-app/pages/auth/reset/password/_token.vue' /* webpackChunkName: "pages/auth/reset/password/_token" */))
const _d75b7810 = () => interopDefault(import('../../../nuxt apps/nuxt-app/pages/blog.vue' /* webpackChunkName: "pages/blog" */))
const _2329f07b = () => interopDefault(import('../../../nuxt apps/nuxt-app/pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _044ed260 = () => interopDefault(import('../../../nuxt apps/nuxt-app/pages/blog/category/_slug.vue' /* webpackChunkName: "pages/blog/category/_slug" */))
const _4d6229fc = () => interopDefault(import('../../../nuxt apps/nuxt-app/pages/blog/post/_slug.vue' /* webpackChunkName: "pages/blog/post/_slug" */))
const _509a396e = () => interopDefault(import('../../../nuxt apps/nuxt-app/pages/blog/search/_title.vue' /* webpackChunkName: "pages/blog/search/_title" */))
const _2a7a2a7e = () => interopDefault(import('../../../nuxt apps/nuxt-app/pages/blog/tag/_slug.vue' /* webpackChunkName: "pages/blog/tag/_slug" */))
const _42e8398c = () => interopDefault(import('../../../nuxt apps/nuxt-app/pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _5b9a372e = () => interopDefault(import('../../../nuxt apps/nuxt-app/pages/dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _67ffb99e = () => interopDefault(import('../../../nuxt apps/nuxt-app/pages/dashboard/index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _a46fbbf8 = () => interopDefault(import('../../../nuxt apps/nuxt-app/pages/dashboard/inquiries.vue' /* webpackChunkName: "pages/dashboard/inquiries" */))
const _574b26d4 = () => interopDefault(import('../../../nuxt apps/nuxt-app/pages/dashboard/menus/index.vue' /* webpackChunkName: "pages/dashboard/menus/index" */))
const _30c5d32c = () => interopDefault(import('../../../nuxt apps/nuxt-app/pages/dashboard/newsletter.vue' /* webpackChunkName: "pages/dashboard/newsletter" */))
const _04a44572 = () => interopDefault(import('../../../nuxt apps/nuxt-app/pages/dashboard/notifications.vue' /* webpackChunkName: "pages/dashboard/notifications" */))
const _59c60166 = () => interopDefault(import('../../../nuxt apps/nuxt-app/pages/dashboard/pages/index.vue' /* webpackChunkName: "pages/dashboard/pages/index" */))
const _11349b9c = () => interopDefault(import('../../../nuxt apps/nuxt-app/pages/dashboard/roles.vue' /* webpackChunkName: "pages/dashboard/roles" */))
const _1169fd67 = () => interopDefault(import('../../../nuxt apps/nuxt-app/pages/dashboard/users.vue' /* webpackChunkName: "pages/dashboard/users" */))
const _677458c8 = () => interopDefault(import('../../../nuxt apps/nuxt-app/pages/dashboard/blog/categories.vue' /* webpackChunkName: "pages/dashboard/blog/categories" */))
const _66c3eb9a = () => interopDefault(import('../../../nuxt apps/nuxt-app/pages/dashboard/blog/posts/index.vue' /* webpackChunkName: "pages/dashboard/blog/posts/index" */))
const _277b1f45 = () => interopDefault(import('../../../nuxt apps/nuxt-app/pages/dashboard/blog/tags.vue' /* webpackChunkName: "pages/dashboard/blog/tags" */))
const _35dc9656 = () => interopDefault(import('../../../nuxt apps/nuxt-app/pages/dashboard/localization/languages.vue' /* webpackChunkName: "pages/dashboard/localization/languages" */))
const _be11e512 = () => interopDefault(import('../../../nuxt apps/nuxt-app/pages/dashboard/localization/translations.vue' /* webpackChunkName: "pages/dashboard/localization/translations" */))
const _54ead7e5 = () => interopDefault(import('../../../nuxt apps/nuxt-app/pages/dashboard/menus/add.vue' /* webpackChunkName: "pages/dashboard/menus/add" */))
const _aa553e96 = () => interopDefault(import('../../../nuxt apps/nuxt-app/pages/dashboard/pages/add.vue' /* webpackChunkName: "pages/dashboard/pages/add" */))
const _3ca8fa26 = () => interopDefault(import('../../../nuxt apps/nuxt-app/pages/dashboard/settings/add.vue' /* webpackChunkName: "pages/dashboard/settings/add" */))
const _51cc3ba6 = () => interopDefault(import('../../../nuxt apps/nuxt-app/pages/dashboard/settings/app.vue' /* webpackChunkName: "pages/dashboard/settings/app" */))
const _7d51276d = () => interopDefault(import('../../../nuxt apps/nuxt-app/pages/dashboard/settings/blog.vue' /* webpackChunkName: "pages/dashboard/settings/blog" */))
const _137807e4 = () => interopDefault(import('../../../nuxt apps/nuxt-app/pages/dashboard/settings/theme.vue' /* webpackChunkName: "pages/dashboard/settings/theme" */))
const _2a65b22e = () => interopDefault(import('../../../nuxt apps/nuxt-app/pages/dashboard/utilities/contacts.vue' /* webpackChunkName: "pages/dashboard/utilities/contacts" */))
const _210c93f4 = () => interopDefault(import('../../../nuxt apps/nuxt-app/pages/dashboard/utilities/icons.vue' /* webpackChunkName: "pages/dashboard/utilities/icons" */))
const _d34413e4 = () => interopDefault(import('../../../nuxt apps/nuxt-app/pages/dashboard/utilities/images.vue' /* webpackChunkName: "pages/dashboard/utilities/images" */))
const _52f047e9 = () => interopDefault(import('../../../nuxt apps/nuxt-app/pages/dashboard/blog/posts/add.vue' /* webpackChunkName: "pages/dashboard/blog/posts/add" */))
const _3186a42d = () => interopDefault(import('../../../nuxt apps/nuxt-app/pages/dashboard/blog/posts/edit/_slug.vue' /* webpackChunkName: "pages/dashboard/blog/posts/edit/_slug" */))
const _4ccc780b = () => interopDefault(import('../../../nuxt apps/nuxt-app/pages/dashboard/blog/comments/_postId.vue' /* webpackChunkName: "pages/dashboard/blog/comments/_postId" */))
const _0c6add6e = () => interopDefault(import('../../../nuxt apps/nuxt-app/pages/dashboard/blog/replies/_commentId.vue' /* webpackChunkName: "pages/dashboard/blog/replies/_commentId" */))
const _01a64de1 = () => interopDefault(import('../../../nuxt apps/nuxt-app/pages/dashboard/pages/edit/_slug.vue' /* webpackChunkName: "pages/dashboard/pages/edit/_slug" */))
const _5ab86964 = () => interopDefault(import('../../../nuxt apps/nuxt-app/pages/dashboard/menus/_slug.vue' /* webpackChunkName: "pages/dashboard/menus/_slug" */))
const _5599d473 = () => interopDefault(import('../../../nuxt apps/nuxt-app/pages/dashboard/profile/_id.vue' /* webpackChunkName: "pages/dashboard/profile/_id" */))
const _56c70440 = () => interopDefault(import('../../../nuxt apps/nuxt-app/pages/page/_slug.vue' /* webpackChunkName: "pages/page/_slug" */))
const _e3891128 = () => interopDefault(import('../../../nuxt apps/nuxt-app/pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _6e839ca7,
    name: "about"
  }, {
    path: "/auth",
    component: _111f7efe,
    name: "auth",
    children: [{
      path: "login",
      component: _28ebf218,
      name: "auth-login"
    }, {
      path: "logout",
      component: _41a3596b,
      name: "auth-logout"
    }, {
      path: "register",
      component: _50da6078,
      name: "auth-register"
    }, {
      path: "forgot/password",
      component: _1d3b02f6,
      name: "auth-forgot-password"
    }, {
      path: "reset/password/:token?",
      component: _6d29945d,
      name: "auth-reset-password-token"
    }]
  }, {
    path: "/blog",
    component: _d75b7810,
    children: [{
      path: "",
      component: _2329f07b,
      name: "blog"
    }, {
      path: "category/:slug?",
      component: _044ed260,
      name: "blog-category-slug"
    }, {
      path: "post/:slug?",
      component: _4d6229fc,
      name: "blog-post-slug"
    }, {
      path: "search/:title?",
      component: _509a396e,
      name: "blog-search-title"
    }, {
      path: "tag/:slug?",
      component: _2a7a2a7e,
      name: "blog-tag-slug"
    }]
  }, {
    path: "/contact",
    component: _42e8398c,
    name: "contact"
  }, {
    path: "/dashboard",
    component: _5b9a372e,
    children: [{
      path: "",
      component: _67ffb99e,
      name: "dashboard"
    }, {
      path: "inquiries",
      component: _a46fbbf8,
      name: "dashboard-inquiries"
    }, {
      path: "menus",
      component: _574b26d4,
      name: "dashboard-menus"
    }, {
      path: "newsletter",
      component: _30c5d32c,
      name: "dashboard-newsletter"
    }, {
      path: "notifications",
      component: _04a44572,
      name: "dashboard-notifications"
    }, {
      path: "pages",
      component: _59c60166,
      name: "dashboard-pages"
    }, {
      path: "roles",
      component: _11349b9c,
      name: "dashboard-roles"
    }, {
      path: "users",
      component: _1169fd67,
      name: "dashboard-users"
    }, {
      path: "blog/categories",
      component: _677458c8,
      name: "dashboard-blog-categories"
    }, {
      path: "blog/posts",
      component: _66c3eb9a,
      name: "dashboard-blog-posts"
    }, {
      path: "blog/tags",
      component: _277b1f45,
      name: "dashboard-blog-tags"
    }, {
      path: "localization/languages",
      component: _35dc9656,
      name: "dashboard-localization-languages"
    }, {
      path: "localization/translations",
      component: _be11e512,
      name: "dashboard-localization-translations"
    }, {
      path: "menus/add",
      component: _54ead7e5,
      name: "dashboard-menus-add"
    }, {
      path: "pages/add",
      component: _aa553e96,
      name: "dashboard-pages-add"
    }, {
      path: "settings/add",
      component: _3ca8fa26,
      name: "dashboard-settings-add"
    }, {
      path: "settings/app",
      component: _51cc3ba6,
      name: "dashboard-settings-app"
    }, {
      path: "settings/blog",
      component: _7d51276d,
      name: "dashboard-settings-blog"
    }, {
      path: "settings/theme",
      component: _137807e4,
      name: "dashboard-settings-theme"
    }, {
      path: "utilities/contacts",
      component: _2a65b22e,
      name: "dashboard-utilities-contacts"
    }, {
      path: "utilities/icons",
      component: _210c93f4,
      name: "dashboard-utilities-icons"
    }, {
      path: "utilities/images",
      component: _d34413e4,
      name: "dashboard-utilities-images"
    }, {
      path: "blog/posts/add",
      component: _52f047e9,
      name: "dashboard-blog-posts-add"
    }, {
      path: "blog/posts/edit/:slug?",
      component: _3186a42d,
      name: "dashboard-blog-posts-edit-slug"
    }, {
      path: "blog/comments/:postId?",
      component: _4ccc780b,
      name: "dashboard-blog-comments-postId"
    }, {
      path: "blog/replies/:commentId?",
      component: _0c6add6e,
      name: "dashboard-blog-replies-commentId"
    }, {
      path: "pages/edit/:slug?",
      component: _01a64de1,
      name: "dashboard-pages-edit-slug"
    }, {
      path: "menus/:slug",
      component: _5ab86964,
      name: "dashboard-menus-slug"
    }, {
      path: "profile/:id?",
      component: _5599d473,
      name: "dashboard-profile-id"
    }]
  }, {
    path: "/page/:slug?",
    component: _56c70440,
    name: "page-slug"
  }, {
    path: "/",
    component: _e3891128,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
