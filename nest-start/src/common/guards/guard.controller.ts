import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuards } from './auth.guard';
import { Roles } from './role.decorator';

@Controller("/guard")
export class GuardController {
    
    @Get()
    @UseGuards(AuthGuards)
    @Roles(['admin'])
    findOne() {
        return "guard";
    }
}