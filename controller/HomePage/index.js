import { __n } from 'i18n';

class HomePageController {
  // eslint-disable-next-line no-unused-vars
  static get(req, res, next) {
    res.render('home', {
      message: __n('welcomeMessage'),
    });
  }
}

export default HomePageController;
