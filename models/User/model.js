import mongoose from 'mongoose';

/**
 * 0: Basic
 * 1: Plus
 * 2: Premium
 */

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    select: false,
  },
  phoneNumber: {
    type: String,
    validate: {
      validator: function(v) {
        return /\d{3}-\d{3}-\d{4}/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
    required: [true, 'User phone number required'],
  },
  email: {
    type: String,
    validate: {
      validator: function(v) {
        // eslint-disable-next-line no-useless-escape
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email account!`,
    },
    required: [true, 'Email contact is required'],
  },
  accountType: {
    type: Number,
    default: 2,
  },
}, {
  id: false,
  strict: 'throw',
  useNestedStrict: true,
  timestamps: true,
  toObject: {
    virtuals: true,
  },
  toJSON: {
    virtuals: true,
  },
});

const User = mongoose.model('User', UserSchema);

export { User, UserSchema };
