import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common'
import { ExceptionService } from './exception.service';


@Controller("/error/test")
export class ExceptionController {

    constructor(private readonly service: ExceptionService) {}

    @Get()
    findAll() {
        throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }

    @Get("/one")
    findOne() {
        console.log(' --- findone ---- ');
        
        try {
            return this.service.findOne();
        } catch(e) {
            console.log(e);            
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: "This is a custom message",
            }, HttpStatus.FORBIDDEN, {
                cause: e
            })
        }
    }
}

