import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        
        const token = req.header('Authorization')?.replace('Bearer ', '');
        console.log('token: ', token);
        
        if (!token) {
            return next(); 
        }

        try {
            const decoded = jwt.verify(token, 'coderdev');
            // const decoded = jwt.verify(token);

            console.log(decoded);
            
            req.user = decoded.user;
            // req['user'] = decoded;

            next(); 
        } catch (error) {        
            return res.status(401).json({ message: '[Middleware] fail..' });
        }
    }
}
