/**
 * npm zod
 * 
 */
import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from "@nestjs/common";
import { ZodObject } from 'zod';

@Injectable()
export class ZodPipeCustom implements PipeTransform {

    constructor(private schema: ZodObject<any>) {}

    transform(value: any, metadata: ArgumentMetadata) {
        try {
            this.schema.parse(value);
        } catch(e) {
            throw new BadRequestException("Validation failed");
        }

        return value;
    }
}