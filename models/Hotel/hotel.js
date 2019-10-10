import mongoose from 'mongoose';
import { AddressSchema } from '../Address';

const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  address: AddressSchema,
});

const Hotel = mongoose.model('Hotel', HotelSchema);

export { Hotel, HotelSchema };
