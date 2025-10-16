import { StatusTask } from "@prisma/client";
import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    description: string;
    
    @IsString()
    @IsNotEmpty()
    status: StatusTask;

    @IsDate()
    dueDate: Date;

    @IsNumber()
    @IsNotEmpty()
    assignedTo: number;

    @IsNumber()
    @IsNotEmpty()
    group: number;

    @IsNumber()
    @IsNotEmpty()
    category: number;

    @IsDate()
    created_at: Date;

    @IsDate()
    updated_at: Date;

    @IsNumber()
    createdBy: number;
    
    @IsNumber()
    updatedBy: number;
}
