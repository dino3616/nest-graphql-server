import { Injectable } from '@nestjs/common';
import { Post, Prisma } from '@prisma/client';
import PrismaService from '../../libs/prisma/prisma.service';

@Injectable()
export default class PostService {
  constructor(private prisma: PrismaService) {}

  async findUnique(id: string): Promise<Post | null> {
    return this.prisma.post.findUnique({
      where: { id },
    });
  }

  async findMany(
    where?: Prisma.PostWhereInput,
    skip?: number,
    take?: number,
    cursor?: Prisma.PostWhereUniqueInput,
    orderBy?: Prisma.PostOrderByWithAggregationInput,
  ): Promise<Post[]> {
    return this.prisma.post.findMany({
      where,
      skip,
      take,
      cursor,
      orderBy,
    });
  }

  async create(data: Prisma.PostCreateInput): Promise<Post> {
    return this.prisma.post.create({
      data,
    });
  }

  async update(id: string, data: Prisma.PostUpdateInput): Promise<Post> {
    return this.prisma.post.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<Post> {
    return this.prisma.post.delete({
      where: { id },
    });
  }
}
