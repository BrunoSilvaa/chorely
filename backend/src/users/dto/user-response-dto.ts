import { IsOptional, IsString } from 'class-validator';
import { UpdateUserDto } from './update-user.dto';
export class UserResponseDto implements Omit<UpdateUserDto, 'password' | 'createdAt' | 'updatedAt'> {
    id: number;
    @IsString()
    name: string;
    @IsString()
    email: string;
    @IsOptional()
    picture: string | null;
}