import { User } from '../../models/User';

class UserController {
  static post(req, res, next) {
    new User({
      ...req.body,
    })
      .save()
      .then((doc) => {
        res.json({
          document: doc,
          message: 'User created successsfully',
        });
      })
      .catch((err) => next(err));
  }

  static get(req, res, next) {
    User
      .find()
      .sort('name')
      .select('-__v')
      .then((docs) => {
        res.json({
          docs,
        });
      })
      .catch((err) => next(err));
  }

}

export default UserController;
