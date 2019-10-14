import { Schema, model } from 'mongoose';

const { ObjectId } = Schema.Types;

const ProfileSchema = new Schema({
  user: {
    type: ObjectId,
    ref: 'User',
  }, 
  hotel: {
    type: ObjectId,
    ref: 'Hotel',
  },
});

const Profile = model('Profile', ProfileSchema);

export default { Profile, ProfileSchema };
