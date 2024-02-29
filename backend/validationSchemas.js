const zod = require("zod");

const signupSchema = zod.object({
  username: zod.string().email(),
  firstname: zod.string().max(50),
  lastname: zod.string().max(50),
  password: zod.string().min(8),
});

module.exports = {
  signupSchema,
};
