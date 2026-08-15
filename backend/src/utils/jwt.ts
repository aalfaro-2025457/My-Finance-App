import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "default_secret_key";

export const generateToken = (email: string): string => {
  return jwt.sign({ email }, JWT_SECRET, { expiresIn: "1d" });
};