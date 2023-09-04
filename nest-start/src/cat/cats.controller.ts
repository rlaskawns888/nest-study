import { 
    Controller,
    Post,
    Get,
    Put,
    Delete,
    Query,
    Body,
    Param,
    Res,
    HttpStatus
} from '@nestjs/common';
import { Response } from 'express'
import { Cat } from './interfaces/cat.interface';

@Controller("/cats")
export class CatsController {

    // @Post()
    // create(@Body() cat: Cat) {
    //     return 'This actions adds a new cat';
    // } 
    
    // ex) /cats?test=123
    // @Get()
    // findAll(@Query() query: string) {
    //     return "GET() findAll()";
    // }

    @Post()
    create(@Res() res:Response) {
        res.status(HttpStatus.CREATED).send();
    }

    @Get()
    findAll(@Res() res: Response) {
        res.status(HttpStatus.OK).json([]);
    }

    // @Get()
    // findAll(@Res({ passthrough: true }) res: Response) {
    //     res.status(HttpStatus.OK);
    //     return [];
    // }
    //인터셉터 및 @HttpCode()/ @Header()데코레이터와 
    //같은 Nest 표준 응답 처리에 의존하는 Nest 기능과의 호환성이 손실됨을 방지


    // ex) /cats/123
    @Get(":id")
    findOne(@Param("id") id: string) {
        return "GET() findOne()";
    }

    @Put(":id")
    update(@Param("id") id: string, cat: Cat) {
        return `PUT(), ID: ${id}`;
    }

    @Delete(":id")
    delete(@Param("id") id:string) {
        return `DELETE(), ID: ${id}`
    }
}