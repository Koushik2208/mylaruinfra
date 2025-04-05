"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import {
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { toast } from "sonner";
import { z, ZodType } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ROUTES from "@/constants/routes";

interface AuthFormProps<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
  // formType: "SIGN_IN";
  onSubmit: (data: T) => Promise<ActionResponse>;
}

const AuthForm = <T extends FieldValues>({
  schema,
  defaultValues,
  // formType,
  onSubmit,
}: AuthFormProps<T>) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T> = async (data) => {
    const result = (await onSubmit(data)) as ActionResponse;

    if (result?.success) {
      toast.success("Signed in successfully");
      router.push(ROUTES.ADMIN);
    } else {
      toast.error(result?.error?.message ?? "Something went wrong");
    }
  };

  const buttonText = "Sign In";
  const title = "Welcome Back";
  return (
    <Card className="border-none shadow-none">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-4"
          >
            {Object.keys(defaultValues).map((field) => (
              <FormField
                key={field}
                control={form.control}
                name={field as Path<T>}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {field.name === "email"
                        ? "Email Address"
                        : field.name === "password"
                        ? "Password"
                        : field.name.charAt(0).toUpperCase() +
                          field.name.slice(1)}
                    </FormLabel>
                    <FormControl>
                      <Input
                        required
                        type={field.name === "password" ? "password" : "text"}
                        placeholder={`Enter your ${field.name}`}
                        className="h-11"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}

            <Button
              className="w-full h-11 text-base"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "Signing In..." : buttonText}
            </Button>

            <div className="text-center text-sm text-muted-foreground">
              <p>
                Don&apos;t have an account?{" "}
                {/* You can remove this entire <p> block if you truly don't want a sign-up link */}
                {/* <Link href={ROUTES.SIGN_UP} className="text-primary hover:underline">
                  Sign up
                </Link> */}
                {/* Or, you can replace it with a different message */}
                Contact an administrator to create an account.
              </p>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default AuthForm;
