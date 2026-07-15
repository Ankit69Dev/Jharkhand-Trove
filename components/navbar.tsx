"use client";

import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import UnauthNavbar from "@/components/UnauthNavbar";
import AuthNavbar from "@/components/AuthNavbar";

export default function ConditionalHeader() {
  const { data: session, status } = useSession();
  const pathname = usePathname();

  if (status === "loading") {
    return null;
  }

  const isDashboardRoute = pathname.startsWith("/dashboard");
  const isExploreRoute = pathname.startsWith("/dashboard/explore");
  // const isPilgrimageRoute = pathname.startsWith("/pilgrimage");
  // const isExploreRoute = pathname.startsWith("/explore");
  
  if (session && isDashboardRoute) {
    return <AuthNavbar />;
  }

 if(session && isExploreRoute) {
   return <AuthNavbar/>;
   }

  // if(session && isPilgrimageRoute){
  //   return <AuthNavbar/>;
  // }

  // if(session && isExploreRoute){
  //   return <AuthNavbar/>;
  // }

  if(!isDashboardRoute) {
    return <UnauthNavbar />;
  }

  return null;
}