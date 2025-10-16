import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCategoryDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    description: string;

    @IsString()
    @IsNotEmpty()
    color: string;

    @IsString()
    @IsNotEmpty()
    icon: string;

    subcategories: number[];

    @IsNumber()
    parentCategory: number;

    @IsDate()
    createdAt: Date;

    @IsDate()
    updatedAt: Date;
}
