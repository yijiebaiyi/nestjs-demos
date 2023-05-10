import { IsString, MaxLength, IsInt } from "class-validator";
export class DogsCreateDTO {
    name: string;
    age: number;
}

export class DogsValidatorCreateDTO {
    @IsString()
    @MaxLength(10)
    name: string;

    @IsInt()
    age: number;
}