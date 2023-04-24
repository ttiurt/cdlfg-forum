import mongoose from 'mongoose'

const Schema = mongoose.Schema

const accountSchema = new Schema({ 
  username: { type: String, required: true },
  bio: String,
  actid: { type: String, required: true},
  battlenet: String,
  steam: String,
  xbox: String,
  psn: String,
}, {
  timestamps: true,
})

const Account = mongoose.model('Account', accountSchema)

export {
  Account
}