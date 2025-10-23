import { BadRequestException, Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { PrismaService } from 'src/common/services/prisma.service';

@Injectable()
export class AuthService {

  constructor(private readonly prisma: PrismaService) {}

  async register(registerDto: RegisterDto) {
    const user = await this.prisma.user.findUnique({ 
      where: { email: registerDto.email } 
    });

    if (user){
      throw new BadRequestException('User already exists');
    }

    await this.prisma.user.create({
      data: registerDto,
    });
  }

  async login(loginDto: LoginDto) {
    const user = await this.prisma.user.findUnique({ 
      where: { email: loginDto.email } 
    });

    if (!user){
      throw new BadRequestException('Incorrect email or password');
    }

    if (user.password !== loginDto.password){
      throw new BadRequestException('Incorrect email or password');
    }
  }
}
