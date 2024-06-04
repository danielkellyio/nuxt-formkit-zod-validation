import { getValidatedQuery } from "h3";
import { userAlreadyExistsValidator } from "@/validators";

export default defineEventHandler(async (event) => {
  const payload = await getValidatedQuery(
    event,
    userAlreadyExistsValidator.safeParse
  );

  if (!payload.success) {
    throw createError({
      data: payload.error,
      message: "Invalid payload",
      statusCode: 422,
    });
  }

  const existingEmails = ["batman@dc.com", "spiderman@marvel.com"];
  return {
    exists: existingEmails.includes(payload.data.email),
  };
});
