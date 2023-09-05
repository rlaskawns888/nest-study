import { Injectable, HttpException, HttpStatus } from "@nestjs/common";

@Injectable()
export class ExceptionService {
    
    findOne() {
        throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        // return "Hello World";
    }
}
