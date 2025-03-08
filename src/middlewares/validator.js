const { UNPROCESSABLE_ENTITY } = require("../constans/status-codes");

module.exports = (schema, field) => {
  return async (req, res, next) => {
    const result = schema.safeParse(req[field]);

    if (!result.success) {
      const errors = result.error.errors.map((err) => err.message);
      return res.status(UNPROCESSABLE_ENTITY).json({ error: errors.join(", ") });
    }

    next();
  };
};
