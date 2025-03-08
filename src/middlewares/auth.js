const jwt = require('jsonwebtoken');
const { CustomError } = require('../utils/custom-error');
const User = require('../models/user');
const { FORBIDDEN, UNAUTHORIZED } = require('../constans/status-codes');
const { notAuthorizedMessage } = require('../constans/auth');

module.exports = (_permittedRoles) => {
  const permittedRoles = [..._permittedRoles];
  return async (req, res, next) => {
    try {
      const token = extractTokenBasedOnRequestPlatform(req);
      const decodedToken = verifyAndDecodeToken(token);

      const { isPermitted, user } = await isUserRolePermitted(decodedToken.userId, permittedRoles, req.locale);
      if (isPermitted == true) {
        req.userId = decodedToken.userId;
        req.role = user.role;
        next();
      } else {
        throw new CustomError(`A user with role ${user.role} isn't allowed to access this end point`, FORBIDDEN);
      }
    } catch (err) {
      console.log(err);
      next(err);
    }
  };
};

function extractTokenBasedOnRequestPlatform(req) {
  if (req.headers.authorization) return req.headers.authorization.split(' ')[1];
  return null;
}

function verifyAndDecodeToken(token) {
  try {
    let decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!decodedToken) throw new CustomError('forbidden', FORBIDDEN);
    return decodedToken;
  } catch (err) {
    if (err.name == 'TokenExpiredError') throw new CustomError('Token Expired', UNAUTHORIZED);
    throw new CustomError('forbidden', FORBIDDEN);
  }
}

async function isUserRolePermitted(userId, permittedRoles, locale = 'en') {
  const user = await User.findById(userId);
  if (!user) throw new CustomError(notAuthorizedMessage[locale], UNAUTHORIZED);

  if (permittedRoles.includes(user.role)) {
    return { isPermitted: true, user };
  } else return { isPermitted: false, user }
}
