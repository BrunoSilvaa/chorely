import { IsNotEmpty, IsString } from "class-validator";

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    category: string;
}
