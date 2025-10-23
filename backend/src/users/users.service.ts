import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/common/services/prisma.service';
import { UserResponseDto } from './dto/user-response-dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class UsersService {

  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<UserResponseDto> {
    const user = await this.prisma.user.create({
      data: createUserDto,
      select: {id: true, email: true, name: true, picture: true},
    });
    
    return plainToInstance(UserResponseDto, user);
  }

  async findAll(): Promise<UserResponseDto[]> {
    const users = await this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        picture: true, 
        adminsOfGroups: true, 
        membersOfGroups: true
      },
      where: {
        deletedAt: null,
      },
    });

    return plainToInstance(UserResponseDto, users);
  }

  async findOne(id: number): Promise<UserResponseDto | null> {
    const user = await this.prisma.user.findUnique({
      where: { id, deletedAt: null },
      select: {id: true, email: true, name: true, picture: true, adminsOfGroups: true, membersOfGroups: true},
    });

    return plainToInstance(UserResponseDto, user);
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<UserResponseDto> {
    const user = await this.prisma.user.update({
      where: { id },
      data: updateUserDto,
      select: {id: true, email: true, name: true, picture: true},
    });

    return plainToInstance(UserResponseDto, user);
  }

  async remove(id: number): Promise<UserResponseDto> {
    return await this.prisma.user.delete({
      where: { id },
      select: {id: true, email: true, name: true, picture: true},
    });
  }
}
