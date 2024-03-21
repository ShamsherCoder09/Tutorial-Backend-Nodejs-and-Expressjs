import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt  from 'jsonwebtoken';

const verifyToken = asyncHandler(async(req, res, next)=>{
    try {
        const token = req.cookies?.accessToken || req.header("authorization")?.replace("Bearer ","");
        if(!token){
            throw new ApiError(401, "Unauthorized request");
        }

        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        // console.log("decodedT-ken", decodedToken);
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken");
        // console.log("user" , user);
        if(!user){
            throw new ApiError(401, "Invalid access token");
        }

        req.user = req;
        next();
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid access token");
    }
});

export default verifyToken;