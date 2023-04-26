import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  username: { type: String, default: "New User" },
  bio: String,
  actid: { type: String },
  name: String,
  avatar: String,
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
