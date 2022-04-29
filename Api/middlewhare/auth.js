var jwt = require('jsonwebtoken');

exports.authenticateToken = (req, res, next) => {
    var authHeader = req.headers['authorization'];
    var token = authHeader && authHeader.split(' ')[1];

    if (!token)
        res.sendStatus(401);

    jwt.verify(token, process.env.TOKEN_SECRET, function (err, user) {
        if (err) {
            res.sendStatus(403);
        }
        else {
            req.user = user;
            next();
        }
    });
}
