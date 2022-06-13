import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import PrismaService from '../../libs/prisma/prisma.service';

@Injectable()
export default class PostService {
  constructor(private prisma: PrismaService) {}

  async findPost(args: { where: Prisma.UserWhereUniqueInput }) {
    const { where } = args;

    return this.prisma.post.findUnique({
      where,
      include: { user: { include: { posts: true } } },
    });
  }

  async findPosts(args?: {
    where?: Prisma.PostWhereInput;
    skip?: number;
    take?: number;
    cursor?: Prisma.PostWhereUniqueInput;
    orderBy?: Prisma.PostOrderByWithAggregationInput[];
    distinct?: Prisma.PostScalarFieldEnum[];
  }) {
    const { where, skip, take, cursor, orderBy, distinct } = args || {};

    return this.prisma.post.findMany({
      where,
      skip,
      take,
      cursor,
      orderBy,
      distinct,
      include: { user: { include: { posts: true } } },
    });
  }

  async create(args: { data: Prisma.PostCreateInput }) {
    const { data } = args;

    return this.prisma.post.create({
      data,
      include: { user: { include: { posts: true } } },
    });
  }

  async update(args: { where: Prisma.PostWhereUniqueInput; data: Prisma.PostUpdateInput }) {
    const { where, data } = args;

    return this.prisma.post.update({
      where,
      data,
      include: { user: { include: { posts: true } } },
    });
  }

  async delete(args: { where: Prisma.PostWhereUniqueInput }) {
    const { where } = args;

    return this.prisma.post.delete({
      where,
      include: { user: { include: { posts: true } } },
    });
  }
}
