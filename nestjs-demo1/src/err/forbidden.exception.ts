import { HttpException, HttpStatus } from '@nestjs/common';
export class ForbiddenException extends HttpException {
    constructor() {
        super("Forbidden:禁止访问", HttpStatus.FORBIDDEN)
    }
}