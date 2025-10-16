import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateGroupDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    picture: string;

    @IsNotEmpty()
    admins: number[];

    @IsNotEmpty()
    members: number[];

    tasks: number[];

    categories: number[];

    @IsDate()
    created_at: Date;

    @IsDate()
    updated_at: Date;

    @IsDate()
    deleted_at: Date;

    @IsNumber()
    created_by: number;

    @IsNumber()
    updated_by: number;
}
