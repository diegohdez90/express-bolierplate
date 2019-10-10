class ApplyController {
  // eslint-disable-next-line no-unused-vars
  static get(req, res, next) {
    res.render(
      'apply',
      {
        title: 'Apply to get more Information',
      });
  }
}

export default ApplyController;