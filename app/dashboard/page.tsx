"use client";

import { useSession } from "next-auth/react";

export default function Welcome() {
  const { data: session } = useSession();

  return (
    <h1>
      Johar {session?.user?.name}
    </h1>
  );
}