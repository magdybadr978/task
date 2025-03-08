module.exports = (err, req, res, next) => {
    console.log("Error in handler:", err)
    const statusCode = err.status || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({ error: message });
};
