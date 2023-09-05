/**
 * 사용자 정의 에러 처리
 * https://docs.nestjs.com/exception-filters
 */

import { HttpException, HttpStatus } from '@nestjs/common';

export class ForbiddenException extends HttpException{
    constructor() {
        super("Forbidden", HttpStatus.FORBIDDEN);
    }
}