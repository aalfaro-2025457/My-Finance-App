import { UserRepository } from "../repositories/user.repository.js";
import { hashPassword, comparePassword } from "../utils/hash.js";
import { generateToken } from "../utils/jwt.js";
import { User } from "@prisma/client";

export class AuthService {
  private userRepository = new UserRepository();

  async register(userData: Omit<User, "createdAt">) {
    const existingUser = await this.userRepository.findByEmail(userData.email);
    if (existingUser) {
      throw new Error("User with this email already exists");
    }

    const hashedPassword = await hashPassword(userData.password);
    const newUser = await this.userRepository.create({
      ...userData,
      password: hashedPassword,
    });

    const token = generateToken(newUser.email);
    const { password, ...userWithoutPassword } = newUser;

    return { user: userWithoutPassword, token };
  }

  async login(email: string, password: string) {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new Error("Invalid credentials");
    }

    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Invalid credentials");
    }

    const token = generateToken(user.email);
    const { password: _, ...userWithoutPassword } = user;

    return { user: userWithoutPassword, token };
  }
}