import { Request } from '../../models/Request';

class RequestController {

  // eslint-disable-next-line no-unused-vars
  static get(req, res, next) {
    res.render('home', {
      message: 'Home Page',
    });
  }

  // eslint-disable-next-line no-unused-vars
  static post(req, res, next) {
    new Request(req.body)
      .save()
      .then((doc) => {
        res.json({
          doc,
          message: 'Peticion enviado exitosamente',
        });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }
}

export default RequestController;
