// middlewares/locale.js
const localeMiddleware = (req, res, next) => {
    req.locale = req.headers['locale']?.toLowerCase() || "en";
    next();
};

module.exports = localeMiddleware;
