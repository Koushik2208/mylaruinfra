"use server";

import { Account } from "@/database";
import action from "../handlers/action";
import handleError from "../handlers/error";
import { SignInSchema } from "../validations";
import { NotFoundError } from "../http-errors";
import bcrypt from "bcryptjs";
import { signIn } from "@/auth";

export async function signInWithCredentials(
  params: AuthCredentials
): Promise<ActionResponse> {
  const validationResult = await action({ params, schema: SignInSchema });

  if (validationResult instanceof Error) {
    return handleError(validationResult) as ErrorResponse;
  }

  const { email, password } = validationResult.params!;

  try {
    const existingAccount = await Account.findOne({
      provider: "credentials",
      providerAccountId: email,
    });

    if (!existingAccount) throw new NotFoundError("Account");

    // If you're only having an admin account, you might want to enforce the role here
    if (existingAccount.role !== "admin") {
      return { success: false, error: { message: "Unauthorized" } };
    }

    const passwordMatch = await bcrypt.compare(
      password,
      existingAccount.password
    );

    if (!passwordMatch) throw new Error("Password does not match");

    await signIn("credentials", { email, password, redirect: false });

    return { success: true };
  } catch (error) {
    return handleError(error) as ErrorResponse;
  }
}
