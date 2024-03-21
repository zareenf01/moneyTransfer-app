const zod = require("zod");

const createUser = zod.object({
  email: zod.string().email(),
  firstname: zod.string(),
  lastname: zod.string(),
  password: zod.string(),
});

const signIn = zod.object({
  email: zod.string().email(),
  password: zod.string(),
});

const updateUser = zod.object({
  id: zod.string(),
  firstname: zod.string().optional(),
  lastname: zod.string().optional(),
  password: zod.string().optional(),
});

module.exports = {
  createUser,
  signIn,
  updateUser,
};
