import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const result = await this.prisma.user.create({
      data: { ...createUserDto },
    });
    return result;
  }

  async findAll(): Promise<User[]> {
    const result = await this.prisma.user.findMany();
    return result;
  }

  async findOne(id: number) {
    const result = await this.prisma.user.findRaw({ options: { id } });
    return result;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const result = await this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
    return result;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
