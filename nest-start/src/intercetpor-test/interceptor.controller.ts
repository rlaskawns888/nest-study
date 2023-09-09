import { Controller, Get, UseInterceptors } from "@nestjs/common";
import { LoggingInterceptor } from "src/common/interceptor/logging.interceptor";

@Controller("/interceptor/test")
export class InterceptorTestController {

    @UseInterceptors(LoggingInterceptor)
    @Get()
    findOne() {
        console.log('.....');
        return 'interceptor controller test..';        
    }
}