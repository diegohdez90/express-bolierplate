import { User } from '../../models/User';
import { Hotel } from '../../models/Hotel';
import { Profile } from '../../models/Profile';

class RegistrationController {

  // eslint-disable-next-line no-unused-vars
  static signUp(req, res, next) {
    new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      password: req.body.password,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      accountType: req.body.accountType,
    })
      .save()
      .then((user) => new Hotel({
        name: req.body.hotelName,
        address: {
          location: req.body.location,
          zipCode: req.body.zipCode,
          city: req.body.city,
          state: req.body.state,
          country: req.body.country,
        },
      })
        .save()
        .then((hotel) => ({
          user,
          hotel,
        }))
        .catch(async(err) => {
          await User.deleteOne({
            _id: user._id,
          });
          return err;
        }))
      .then(async(data) => {
        if ('user' in data && 'hotel' in data) {
          const { user, hotel } = data;
          return await new Profile({
            user,
            hotel,
          })
            .save()
            .then((profile) => profile)
            .catch(async(err) => {
              await User.deleteOne({
                _id: user._id,
              });
              await Hotel.deleteOne({
                _id: hotel._id,
              });
              return err;
            });
        } else {
          console.log('data');
          
          console.log(data);
          
          return data;
        }
      })
      .then((result) => {
        console.log(result);
        
        if ('user' in result && 'hotel' in result) {
          res.status(200).json({
            message: 'Profile saved successfully',
          });
        } else {
          res.status(500).send(result);
        }
      })
      .catch((err) => res.status(500).send(err));
  }
}

export default RegistrationController;
