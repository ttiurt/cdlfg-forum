import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  username: { type: String, default: "New User" },
  bio: String,
  actid: { type: String, default: 'N/A'},
  battlenet: { type: String, default: 'N/A' },
  steam: { type: String, default: 'N/A' },
  xbox: { type: String, default: 'N/A' },
  psn: { type: String, default: 'N/A' },
  name: String,
  avatar: String,
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
