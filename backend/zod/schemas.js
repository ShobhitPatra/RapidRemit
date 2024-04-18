import zod from "zod";

export const signupSchema = zod.object({
  username: zod.string().email(),
  firstname: zod.string(),
  lastname: zod.string(),
  password: zod.string().min(8),
});

export const loginSchema = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});
