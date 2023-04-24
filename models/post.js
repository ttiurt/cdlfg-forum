import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentSchema = new Schema({
  content: String,
  responder: { type: Schema.Types.ObjectId, ref: 'Profile'},
})

const postSchema = new Schema({ 
  title: { type: String, required: true },
  rank: { type: String, enum: ['BRONZE', 'SILVER', 'GOLD', 'PLATINUM', 'DIAMOND', 'CRIMSON', 'IRIDESCENT', 'TOP 250'], required: true },
  gamertag: { type: String, required: true },
  lookingFor: { type: Number, min: 1, max: 3, required: true },
  mic: { type: Boolean, required: true},
  moreInfo: { type: String },
  player: { type: Schema.Types.ObjectId, ref: 'Profile' },
  account: { type: Schema.Types.ObjectId, ref: 'Account'},
  comments: [commentSchema]
}, {
  timestamps: true,
})

const Post = mongoose.model('Post', postSchema)

export {
  Post
}
