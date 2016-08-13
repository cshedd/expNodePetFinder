var express = require('express');
var profileRouter = express.Router();

var router = function(nav) {
    var Upets = [{
        'name': 'Organa',
        'age': '1',
        'type': 'Dog',
        'img': 'http://placehold.it/350x150',
        'description': 'Bacon ipsum dolor amet filet mignon turducken sirloin pork prosciutto, porchetta frankfurter pork belly pig ball tip drumstick.'
    }, {
        'name': 'Kevin',
        'age': '5',
        'type': 'Cat',
        'img': 'http://placehold.it/350x150',
        'description': 'Bacon ipsum dolor amet filet mignon turducken sirloin pork prosciutto, porchetta frankfurter pork belly pig ball tip drumstick.'
    }, {
        'name': 'Max',
        'age': '14',
        'type': 'Dog',
        'img': 'http://placehold.it/350x150',
        'description': 'Bacon ipsum dolor amet filet mignon turducken sirloin pork prosciutto, porchetta frankfurter pork belly pig ball tip drumstick.'
    }, {
        'name': 'Otto',
        'age': '2',
        'type': 'Dog',
        'img': 'http://placehold.it/350x150',
        'description': 'Bacon ipsum dolor amet filet mignon turducken sirloin pork prosciutto, porchetta frankfurter pork belly pig ball tip drumstick.'
    }];

    profileRouter.route('/')
        .get(function(req, res) {
            res.render('profile', {
                title: 'Profile',
                nav: nav,
                pets: Upets
            });
        });

    return profileRouter;
};

module.exports = router;