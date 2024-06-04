import { readValidatedBody } from "h3";
import { registerValidator } from "@/validators";

export default defineEventHandler(
  async (
    event
  ) => {
  // prettier-ignore

  // TODO: read the validated body using `readValidatedBody`
  // pass the event as the first argument
  // pass `registerValidator.safeParseAsync` as the second argument to use the zod schema to validate the body
  

  // TODO: throw an error with a status code of 422 if the payload is invalid (use `createError`)


  //TODO: finally return the validated payload
  // (in  a real app you'd use the payload to create a new user)
}
);
