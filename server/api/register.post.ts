import { readValidatedBody } from "h3";
import { registerValidator } from "@/validators";

export default defineEventHandler(async (event) => {
  const payload = await readValidatedBody(
    event,
    registerValidator.safeParseAsync
  );

  if (!payload.success) {
    throw createError({
      data: payload.error,
      message: "Invalid payload",
      statusCode: 422,
    });
  }

  return payload;
});
