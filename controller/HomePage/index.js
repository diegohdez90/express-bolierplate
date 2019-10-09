class HomePageController {
    static get(req, res, next) {
        res.render('home', {
            message: 'Home Page'
        });
    }
}

export default HomePageController;
