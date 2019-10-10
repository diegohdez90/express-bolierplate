import mongoose from 'mongoose';

const RequestSchema = new mongoose.Schema({
  requestName: {
    type: String,
    required: true,
    trim: true,
  },
  hotel: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    required: true,
    trim: true,
  },
  hotelContactPhone: {
    type: String,
    validate: {
      validator: function(v) {
        return /\d{10}/.test(v);
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

const Request = mongoose.model('Request', RequestSchema);

export { Request, RequestSchema };
