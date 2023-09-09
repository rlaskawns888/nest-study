import { Controller, Get } from "@nestjs/common";
import { User } from "src/common/decorator/user.decorator";
import { DecoratorDto } from "./decortator.dto";

@Controller("/decorator/test")
export class DecoratorController {
    
    @Get()
    async findOne(@User() user: DecoratorDto) {

        console.log('user: ', user);
        
        return "decorator test..";
    }
}