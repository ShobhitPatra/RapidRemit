const zod = require("zod");

const updateSchema = zod.object({
  password: zod.string().min().optional(),
  firstname: zod.string().optional(),
  lastname: zod.string().optional(),
});

module.exports = updateSchema;
