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
    HttpStatus,
    Optional
} from '@nestjs/common';
import { Response } from 'express'

import { CreateCatsDto } from './dto/create-dto.dto';
import { CatsService } from './cats.service';
import { Cats } from './interfaces/cats.interface';

@Controller("/cats")
export class CatsController {

    // constructor(@Optional() private catsService: CatsService) {}
    // : CatsService가 존재할수도 있고 없고, 선택적인 결과 도출

    constructor(private catsService: CatsService) {}

    @Post()
    create(@Body() dto: CreateCatsDto) {        
        this.catsService.create(dto);
    } 
    
    // ex) /cats?test=123
    @Get()
    findAll(@Query() query: string) {
        return this.catsService.findAll();
    }

    /**
     * Response
     *  
     */

    // @Post()
    // create(@Res() res:Response) {
    //     res.status(HttpStatus.CREATED).send();
    // }

    // @Get()
    // findAll(@Res() res: Response) {
    //     res.status(HttpStatus.OK).json([]);
    // }
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
    update(@Param("id") id: string, cat: Cats) {
        return `PUT(), ID: ${id}`;
    }

    @Delete(":id")
    delete(@Param("id") id:string) {
        return `DELETE(), ID: ${id}`
    }
}