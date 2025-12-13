const jwt = require("jsonwebtoken")

exports.adminAuth = async (req, res, next) => {
    try {
        const { token } = req.headers
        if (!token) {
            res.status(400).json({ success: false, message: "Not Authorized Login Again" });
        }
        const decodeToken = jwt.verify(token, process.env.JWT_SECRET)
        if (decodeToken !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            res.status(400).json({ success: false, message: "Not Authorized Login Again" });
        }
        next()
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}