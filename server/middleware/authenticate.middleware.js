import jwt from "jsonwebtoken";
import User from "../models/index.model.js";

export const authenticate = async (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ error: "Unauthorized - no token" });
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.userId);

        if(!user){
            return res.status(401).json({ error: "Unauthorized - Invalid Token" });
        }
        req.user = {userId: user._id, email: user.email, role: user.role }
        next();
    }catch(error){
        return res.status(401).json({ error: "Unauthorized - Invalid Token" });
    }
};

