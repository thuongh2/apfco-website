/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Thuong } from "@prisma/client";

export class ThuongServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ThuongFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ThuongFindManyArgs>
  ): Promise<number> {
    return this.prisma.thuong.count(args);
  }

  async findMany<T extends Prisma.ThuongFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ThuongFindManyArgs>
  ): Promise<Thuong[]> {
    return this.prisma.thuong.findMany(args);
  }
  async findOne<T extends Prisma.ThuongFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ThuongFindUniqueArgs>
  ): Promise<Thuong | null> {
    return this.prisma.thuong.findUnique(args);
  }
  async create<T extends Prisma.ThuongCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ThuongCreateArgs>
  ): Promise<Thuong> {
    return this.prisma.thuong.create<T>(args);
  }
  async update<T extends Prisma.ThuongUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ThuongUpdateArgs>
  ): Promise<Thuong> {
    return this.prisma.thuong.update<T>(args);
  }
  async delete<T extends Prisma.ThuongDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ThuongDeleteArgs>
  ): Promise<Thuong> {
    return this.prisma.thuong.delete(args);
  }
}