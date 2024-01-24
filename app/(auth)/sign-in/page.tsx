import React from "react";
import { SignInForm } from "./_components/form";
import Image from "next/image";
import { Logo } from "@/components/shared/logo";

const SignIn = () => {
  return (
    <div className="flex items-center justify-between gap-x-4">
      <div className="flex flex-col space-y-4">
        <Logo />
        <h1>Sign In</h1>
        <p>Sign in to stay connected</p>

        <SignInForm />
      </div>

      <Image
        alt="Diverse dishes"
        src={"/assets/dishes.svg"}
        width={400}
        height={400}
      />
    </div>
  );
};

export default SignIn;
