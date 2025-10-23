import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { PrismaService } from 'src/common/services/prisma.service';

@Injectable()
export class AuthService {

  constructor(private readonly prisma: PrismaService) {}

  async register(registerDto: RegisterDto) {
    return await this.prisma.user.create({ data: registerDto });
  }

  async login(loginDto: LoginDto) {
    return await this.prisma.user.findUnique({ 
      where: { email: loginDto.email } 
    });
  }
}
