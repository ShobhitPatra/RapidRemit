const zod = require("zod");

const signupSchema = zod.object({
  username: zod.string().email(),
  firstname: zod.string().max(50),
  lastname: zod.string().max(50),
  password: zod.string().min(8),
});

const updateSchema = zod.object({
  firstname: zod.string().optional(),
  lastname: zod.string().optional(),
  password: zod.string().optional().min(8),
});

module.exports = {
  signupSchema,
  updateSchema,
};
