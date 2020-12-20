const express = require('express')
const router = express.Router()

const { isAuthenticated } = require('../middlewares/auth')

const { fetchTags, fetchTag, addTag, updateTag, deleteTag, deleteTags } = require('../controllers/tags')

router.route('/')
  .get(fetchTags)
  .post(isAuthenticated, addTag)
router.route('/delete')
  .post(isAuthenticated, deleteTags)
router.route('/:id')
  .get(fetchTag)

router.route('/:id')
  .put(isAuthenticated, updateTag)
  .delete(isAuthenticated, deleteTag)

module.exports = router
