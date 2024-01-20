const express = require('express')
const { getHomepage, getABC, checkHTML, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser, postDeleteUser , postConfirmDeleteUser} = require('../controllers/homeController.js')
const router = express.Router()

// router.Method('/route',handler)

// khai bao route
router.get('/', getHomepage)

router.get('/abc', getABC)

router.get('/html', checkHTML)

router.get('/create', getCreatePage)

router.get('/update/:id', getUpdatePage)


router.post('/create-user', postCreateUser)

router.post('/update-user', postUpdateUser)

router.post('/delete-user/:id', postDeleteUser)

router.post('/delete-user', postConfirmDeleteUser)



module.exports = router; //export defaut