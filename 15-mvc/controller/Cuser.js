const { getDbUser } = require('../model/User');

exports.getUser = (req, res) => {
    res.render('user', { user: getDbUser() });
}