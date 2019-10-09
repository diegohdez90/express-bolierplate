class HomePageController {
  // eslint-disable-next-line no-unused-vars
  static get(req, res, next) {
    res.render('home', {
      message: 'Home Page',
    });
  }
}

export default HomePageController;
