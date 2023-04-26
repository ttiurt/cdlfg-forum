import { Profile } from '../models/profile.js'

function index(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render('profiles/index', {
      profiles,
      title: 'PROFILES'
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function show(req, res) {
  Profile.findById(req.params.postId)
  .then(profile => {
    const isSelf = profile._id.equals(req.user.profile._id)
    res.render("profiles/show", {
      title: `${profile.username}'S PROFILE`,
      profile,
      isSelf,
    })
  })
  .catch((error) => {
    console.log(error)
    res.redirect("/profiles")
  })
}

function edit(req, res){
  Profile.findById(req.params.postId)
  .then(profile => {
    res.render('profiles/edit', {
      profile,
      title: 'EDIT PROFILE'
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/profiles')
  })
}

function update(req, res){
  console.log(req.body)
  Profile.findById(req.params.postId)
  .then(profile => {
    if (profile._id.equals(req.user.profile._id)){
      profile.updateOne(req.body)
      .then(() => {
        console.log(profile)
        res.redirect(`/profiles/${profile._id}`)
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

export {
  index,
  show,
  edit,
  update,
}