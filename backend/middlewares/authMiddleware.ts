import { nextMWType } from "../types/expressMiddleware";
import { default as jwt, JwtPayload } from 'jsonwebtoken';

export const decodeAuthToken: nextMWType = (req, res, next) => {
    if (req.method === 'OPTIONS')
        return next();
    if (!req.get('Authorization'))
        return res.status(401).json({
            message: 'Authentication Headers not provided'
        });

    if (req.get('Authorization')?.split(' ')[0] !== 'Bearer')
        return res.status(400).json({
            message: 'Invalid Token'
        });

    const bearerToken = req.get('Authorization')?.split(' ')[1] as string;
    const decodedPayload = <JwtPayload>jwt.verify(bearerToken, <string>process.env.JWTSECRET);

    req.email = decodedPayload.email;
    return next();
}
