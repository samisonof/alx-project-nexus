"use client";

import { Session } from "inspector/promises";
import { DefaultSession } from "next-auth";
import { signOut } from "next-auth/react";
import React from "react";

interface Props {
  session: DefaultSession;
}

const User = ({ session }: Props) => {
  return (
    <div
      onClick={() => {
        signOut({ callbackUrl: `${process.env.NEXT_PUBLIC_URL}/signup` });
      }}
      className="cursor-pointer"
    >
      <img
        src={session?.user?.image || ""}
        alt="User Image"
        className="w-[50px] h-[50px] rounded-full object-cover"
      />
    </div>
  );
};

export default User;
