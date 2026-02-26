"use client";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

type FormType = "sign-in" | "sign-up";

const authFormSchema = (formType: FormType) => {
  return z.object({
    email: z.string().email({ message: "Geçerli bir e-posta adresi giriniz." }),
    password: z
      .string()
      .min(8, { message: "Şifreniz en az 8 karakter olmalıdır." }),
    fullName:
      formType === "sign-in"
        ? z.string().min(2, { message: "İsminiz en az 2 karakter olmalıdır." })
        : z.string().optional(),
  });
};

export default function AuthForm({ type }: { type: FormType }) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const formSchema = authFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
    },
  });

  return (
    <>
      <Form {...form}>
        <h1 className="form-title">
          {type === "sign-in" ? "Sign In" : "Sign Up"}
        </h1>
        {type === "sign-up" && (
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <div className="shad-form-item">
                  <FormLabel className="shad-form-label">Full Name</FormLabel>

                  <FormControl>
                    <Input
                      placeholder="Enter your full name"
                      className="shad-input"
                      {...field}
                    />
                  </FormControl>
                </div>

                <FormMessage className="shad-form-message" />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <div className="shad-form-item">
                <FormLabel className="shad-form-label">Email</FormLabel>

                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    className="shad-input"
                    {...field}
                  />
                </FormControl>
              </div>

              <FormMessage className="shad-form-message" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="form-submit-button"
          disabled={isLoading}
        >
          {type === "sign-in" ? "Sign In" : "Sign Up"}

          {isLoading && (
            <Image
              src="/assets/icons/loader.svg"
              alt="loader"
              width={24}
              height={24}
              className="ml-2 animate-spin"
            />
          )}
        </Button>

        {errorMessage && <p className="error-message">*{errorMessage}</p>}

        <div className="body-2 flex justify-center">
          <p className="text-light-100">
            {type === "sign-in"
              ? "Don't have an account?"
              : "Already have an account?"}
          </p>
          <Link
            href={type === "sign-in" ? "/sign-up" : "/sign-in"}
            className="ml-1 font-medium text-brand"
          >
            {" "}
            {type === "sign-in" ? "Sign Up" : "Sign In"}
          </Link>
        </div>
      </Form>
    </>
  );
}
