import { Post } from "../models/post.js"

function newPost(req, res){
  res.render('posts/new', {
    title: 'CREATE POST'
  })
}

function create(req,res){
  req.body.mic = !!req.body.mic
  Post.create(req.body)
  console.log(req.body)
  .then(post => {
    res.redirect(`/posts/${post._id}`)
  })
  .catch(error => {
    console.log(error)
    res.redirect('/posts/new')
  })
}

function index(req, res){
  Post.find({})
  .populate('player')
  .then(posts => {
    console.log(posts)
    res.render('posts/index', {
      posts,
      title: 'ALL POSTS'
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function show(req, res){
  Post.findById(req.params.postId)
  .populate('player')
  .then(post => {
    res.render('posts/show', {
      post,
      title: 'POST DETAILS'
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

export {
  newPost as new,
  create,
  index,
  show,
}