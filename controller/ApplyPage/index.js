import Twight from 'twig';


class ApplyController {
  // eslint-disable-next-line no-unused-vars
  static get(req, res, next) {
    res.render(
      'apply',
      {
        title: 'Home Page',
      });
    
  }
}

export default ApplyController;