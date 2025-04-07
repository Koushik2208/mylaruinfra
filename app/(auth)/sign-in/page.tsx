"use client";

import AuthForm from "@/components/forms/AuthForm";
import { signInWithCredentials } from "@/lib/actions/auth.action";
import { SignInSchema } from "@/lib/validations";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20">
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2">
        <div className="relative h-screen overflow-hidden">
          <Image
            src="/images/hero-bg.jpg"
            alt="Construction Site"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <h2 className="text-4xl font-bold text-white mb-4">
              Welcome to Mylaru Infra
            </h2>
            <p className="text-white/90 text-lg">
              Your trusted partner in construction and infrastructure development
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <AuthForm
              schema={SignInSchema}
              defaultValues={{ email: "", password: "" }}
              onSubmit={signInWithCredentials}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
