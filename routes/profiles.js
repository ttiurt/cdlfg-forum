import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as profilesCtrl from '../controllers/profiles.js'

const router = Router()

router.get('/', isLoggedIn, profilesCtrl.index)

router.get('/:postId', isLoggedIn, profilesCtrl.show)

router.get('/:postId/edit', isLoggedIn, profilesCtrl.edit)

router.put('/:postId', isLoggedIn, profilesCtrl.update)



export {
  router
}