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
    Optional,
    UseFilters,
    HttpException,
    HttpStatus
} from '@nestjs/common';
import { Response } from 'express'

import { CreateCatsDto } from './dto/create-dto.dto';
import { CatsService } from './cats.service';
import { Cats } from './interfaces/cats.interface';

// 사용자 정의 에러 처리
import { ForbiddenException } from './filters/cats.exception';
import { HttpExceptionFilter } from 'src/common/filter/http.filter';


@Controller("/cats")
export class CatsController {

    // constructor(@Optional() private catsService: CatsService) {}
    // : CatsService가 존재할수도 있고 없고, 선택적인 결과 도출

    constructor(private catsService: CatsService) {}

    @Post()
    @UseFilters(new HttpExceptionFilter()) //filter 공통
    create(@Body() dto: CreateCatsDto) {
        
        throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        // this.catsService.create(dto);
    } 
    
    // ex) /cats?test=123
    @Get()
    findAll(@Query() query: string) {
        return this.catsService.findAll();
    }

    @Get("/error/test")
    errorTest() {
        throw new ForbiddenException();
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