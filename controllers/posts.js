import { Post } from "../models/post.js"

function newPost(req, res){
  res.render('posts/new', {
    title: 'CREATE POST'
  })
}

function create(req, res){
  req.body.player = req.user.profile._id
  req.body.mic = !!req.body.mic
  Post.create(req.body)
  .then(post => {
    res.redirect('/posts')
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

function edit(req, res){
  Post.findById(req.params.postId)
  .then(post => {
    res.render('posts/edit', {
      post,
      title: 'EDIT POST'
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/posts')
  })
}

function update(req, res){
  Post.findById(req.params.postId)
  .then(post => {
    if (post.player.equals(req.user.profile._id)){
      req.body.mic = !!req.body.mic
      post.updateOne(req.body)
      .then(() => {
        res.redirect(`/posts/${post._id}`)
      })
      .catch(error => {
        console.log(error)
        res.redirect('/')
      })
    } else {
      throw new Error('NOT AUTHORIZED TO EDIT')
    }
  })
  .catch(error => {
    console.log(error)
    res.redirect('/posts')
  })
}

function deletePost(req, res){
  Post.findById(req.params.postId)
  .then(post => {
    post.deleteOne()
    .then(() => {
      res.redirect('/posts')
    })
    .catch(error => {
      console.log(error)
      res.redirect('/posts')
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/posts')
  })
}

export {
  newPost as new,
  create,
  index,
  show,
  edit,
  update,
  deletePost as delete,
}