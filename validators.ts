import { z } from "zod";

export const registerValidator = z.object({
  // TODO: provide rules for email, password, and age
  // as described in the exercise instructions
});

export const userAlreadyExistsValidator = z.object({
  email: z.string().email(),
});
