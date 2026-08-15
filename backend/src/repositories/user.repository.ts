import { prisma } from "../config/prisma.js";
// When you execute pnpm dlx prisma generate, this generate the interface
// User in the shema.prisma
import { User } from "@prisma/client";

export class UserRepository {
  async findByEmail(email: string): Promise<User | null> {
    return await prisma.user.findUnique({
      where: { email },
    });
  }

  async create(userData: Omit<User, "createdAt">): Promise<User> {
    return await prisma.user.create({
      data: userData,
    });
  }
}