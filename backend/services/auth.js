const jwt = require('jsonwebtoken');

function autherticationMiddleware(req, res, next) {
    const bearerToken = req.header('Authorization');
    if(!bearerToken) {
        res.status(401).json({
            message: "Unauthorized access",
        })
    }
    const jwtToken = bearerToken.split(' ')[1];
    const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    req.user = decoded;
    next();
}

function generateToken(body) {
    return jwt.sign(body, process.env.JWT_SECRET_KEY, { expiresIn: '7d' });
}


module.exports = {
    autherticationMiddleware,
    generateToken,
}