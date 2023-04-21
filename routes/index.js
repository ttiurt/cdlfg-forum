import { Router } from 'express'

const router = Router()

router.get('/home', function (req, res) {
  res.render('index', { title: 'Home Page' })
})

export {
  router
}
