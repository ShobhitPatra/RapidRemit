const zod = require("zod");

const signupSchema = zod.object({
  username: zod.string().email(),
  firstname: zod.string(),
  lastname: zod.string(),
  password: zod.string().min(8),
});

module.exports = signupSchema;
