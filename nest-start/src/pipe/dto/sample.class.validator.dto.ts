import { IsString, IsInt } from 'class-validator';

export class SampleClassValidatorDto {
    @IsString()
    name: string;

    @IsInt()
    age: number;
}