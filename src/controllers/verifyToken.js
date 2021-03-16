const jwt = require('jsonwebtoken');
const config = require('./confgtoken');

async function verifyToken( req, res, next ){
    const token = req.headers['x-acess-token'];
    if (!token) {
        return res.status(401).send(
            {
                auth: false,
                message: 'No token provided'
            }
        );

    }

    const decoded = await jwt.verify( toke, config.secret );
    req.userId = decoded.id;

    next();
}

module.exports = verifyToken;