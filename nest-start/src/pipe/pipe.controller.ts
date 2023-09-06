import { Body, Controller, Get, Post, HttpStatus, Param, ParseIntPipe, Query, UsePipes, ValidationPipe} from "@nestjs/common";

import { ZodPipeCustom } from "src/common/pipes/zod.pipe";

/**
 * npm zod 모듈 사용
 */
import { sampleDtoSchema, SampleDto } from "./dto/sample.zod.dto";
import { SampleClassValidatorDto } from "./dto/sample.class.validator.dto";


/**
 * https://docs.nestjs.com/pipes
 */

@Controller("/pipe")
export class PipeController {

    @Post("/custom/2")
    pipeCustom2(@Body(new ValidationPipe()) dto: SampleClassValidatorDto) {
        console.log("dto: ", dto);

        return "pipe custom success";
    }

    @Post("/custom/1")
    @UsePipes(new ZodPipeCustom(sampleDtoSchema))
    pipeCustom(@Body() dto: SampleDto) {
        console.log("dto: ", dto);

        return "pipe custom success";
    }

    //http://localhost:3000/pipe/a/123
    @Get("/a/:id")
    pipeA(@Param("id", ParseIntPipe) id: number ) {
        console.log('id: ', id);
        console.log('id: ', typeof id);
        
        return "pipe test";
    }

    //http://localhost:3000/pipe/b/123
    @Get("/b/:id")
    pipeB(@Param("id", new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number ) {
        console.log('id: ', id);
        console.log('id: ', typeof id);
        
        return "pipe test";
    }

    //http://localhost:3000/pipe/c?id=123
    @Get("/c")
    pipeC(@Query("id", new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number ) {
        console.log('id: ', id);
        console.log('id: ', typeof id);
        
        return "pipe test";
    }

}