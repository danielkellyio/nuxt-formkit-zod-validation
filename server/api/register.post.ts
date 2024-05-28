import { readValidatedBody } from "h3";
import { registerValidator } from "@/validators";

export default defineEventHandler(async (event) => {
  const payload = await readValidatedBody(event, registerValidator.safeParse);

  if (!payload.success) {
    throw createError({
      data: payload.data,
      message: "Invalid payload",
      statusCode: 422,
    });
  }

  return payload;
});
