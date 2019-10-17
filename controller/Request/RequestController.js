import { __n, __ } from 'i18n';
import { Request } from '../../models/Request';

class RequestController {

  // eslint-disable-next-line no-unused-vars
  static get(req, res, next) {
    res.render('apply', {
      message: __('requestRegister'),
      requestName: __n('requestFields.requestName'),
      hotel: __n('requestFields.hotel'),
      role: __n('requestFields.role'),
      hotelContactPhone: __n('requestFields.hotelContactPhone'),
      email: __n('requestFields.email'),
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
        res.status(500).json(err.errors);
      });
  }
}

export default RequestController;
