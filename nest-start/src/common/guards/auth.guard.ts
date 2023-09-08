import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Observable } from 'rxjs';

import { Reflector } from "@nestjs/core";
import { Roles } from "./role.decorator";


@Injectable()
export class AuthGuards implements CanActivate {

    constructor(private reflector: Reflector) {} 

    canActivate(
        context: ExecutionContext
    ): boolean | Promise<boolean> | Observable<boolean> {        
        const roles = this.reflector.get(Roles, context.getHandler());
        if(!roles) {
            return true;
        }

        const { user } = context.switchToHttp().getRequest();        
        if(roles[0] === user) {
            return true;
        }
        
        return false;    
    }
}