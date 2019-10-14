import { Schema, model } from 'mongoose';
import { AddressSchema } from '../Address';

const HotelSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  address: AddressSchema,
});

const Hotel = model('Hotel', HotelSchema);

export { Hotel, HotelSchema };
