"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();

  useEffect(() => {
    router.push("/404"); // Redirect to the 404 page
  }, [router]);

  return null;
}

export default Page;
