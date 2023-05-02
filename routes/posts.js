import { Router } from 'express'
import * as postsCtrl from '../controllers/posts.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

//LFG POSTS

router.get('/', postsCtrl.index)

router.get('/new', postsCtrl.new)

router.get('/:postId', postsCtrl.show)

router.get('/:postId/edit', isLoggedIn, postsCtrl.edit)

router.post('/', isLoggedIn, postsCtrl.create)

router.put('/:postId', isLoggedIn, postsCtrl.update)

router.delete('/:postId', isLoggedIn, postsCtrl.delete)

//LFG REPLIES

router.get('/:postId/comments/:commentId/edit', isLoggedIn, postsCtrl.editComment)

router.post('/:postId/comments', isLoggedIn, postsCtrl.addComment)

router.put('/:postId/comments/:commentId', isLoggedIn, postsCtrl.updateComment)

router.delete('/:postId/comments/:commentId', isLoggedIn, postsCtrl.deleteComment)

export {
  router
}
