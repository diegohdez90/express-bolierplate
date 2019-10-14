import mongoose from 'mongoose';

const AddressSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
    trim: true,
  },
  zipCode: {
    type: String,
    trim: true,
    validate: {
      validator: (v) => /\d{5}/.test(v),
      message: (props) => `${props.value} is not a valid zip code`,
    },
    required: [true, 'Zip code is required'],
  },
  city: {
    type: String,
    trim: true,
    required: true,
  },
  state: {
    type: String,
    trim: true,
    required: true,
  },
  country: {
    type: String,
    trim: true,
    required: true,
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


const Address = mongoose.model('Address', AddressSchema);

export { Address, AddressSchema };
