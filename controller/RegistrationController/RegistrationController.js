import { User } from '../../models/User';
import { Hotel } from '../../models/Hotel';

class RegistrationController {

  // eslint-disable-next-line no-unused-vars
  static signUp(req, res, next) {
    console.log(req.body);
    
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
      .then(async(user) => {
        try {
          const hotel = await Hotel({
            name: req.body.hotelName,
            address: {
              street: req.body.street,
              zipCode: req.body.zipCode,
              city: req.body.city,
              state: req.body.state,
              country: req.body.country,
            },
          }).save((err) => {
            if (err) {
              User.deleteOne({
                _id: user._id,
              })
                .then(() => res.status(400).json(err))
                .catch((error) => next(error));
            }
          });
          return {
            user,
            hotel,
          };
            
        } catch (error) {
          res.status(500).json(error);
        }
      })
      .then((obj) => {
        console.log('Object');
        console.log(obj);
      })
      .catch((err) => res.status(500).json(err));
  }
}

export default RegistrationController;
