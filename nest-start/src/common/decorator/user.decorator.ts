/**
 * custom-decorator 
 * 
 * https://docs.nestjs.com/custom-decorators
 */
import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const User = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();

        const { user } = request.query;
        
        return user;
    },
);