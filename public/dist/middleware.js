const middleware = {}

middleware['authenticate'] = require('../../../nuxt apps/nuxt-app/middleware/authenticate.js')
middleware['authenticate'] = middleware['authenticate'].default || middleware['authenticate']

middleware['dashboardAllowed'] = require('../../../nuxt apps/nuxt-app/middleware/dashboardAllowed.js')
middleware['dashboardAllowed'] = middleware['dashboardAllowed'].default || middleware['dashboardAllowed']

middleware['guest'] = require('../../../nuxt apps/nuxt-app/middleware/guest.js')
middleware['guest'] = middleware['guest'].default || middleware['guest']

middleware['i18n'] = require('../../../nuxt apps/nuxt-app/middleware/i18n.js')
middleware['i18n'] = middleware['i18n'].default || middleware['i18n']

middleware['isAdmin'] = require('../../../nuxt apps/nuxt-app/middleware/isAdmin.js')
middleware['isAdmin'] = middleware['isAdmin'].default || middleware['isAdmin']

middleware['pagePermission'] = require('../../../nuxt apps/nuxt-app/middleware/pagePermission.js')
middleware['pagePermission'] = middleware['pagePermission'].default || middleware['pagePermission']

export default middleware
