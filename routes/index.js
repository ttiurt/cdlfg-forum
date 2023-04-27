import { Router } from 'express'

const router = Router()

router.get('/home', function (req, res) {
  res.render('index', { title: 'Home Page' })
})

router.get('/', function(req, res){
  res.redirect('/home')
})

export {
  router
}
