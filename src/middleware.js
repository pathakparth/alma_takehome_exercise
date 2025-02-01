import { NextResponse } from "next/server";

const protectedRoutes = ["/dashboard"];
const publicRoutes = ["/", "/thankyou"];

export default function middleware(req) {
  const path = req.nextUrl.pathname;
  const isProtected = protectedRoutes.includes(path);
  const isPublic = publicRoutes.includes(path);

  // TODO: Work In-Progress - Add authentication
  const user = {
    type: "internal",
    firstName: "Admin",
    lastName: "Admin",
    userId: "123456789",
  };

  if (isProtected && !user.userId) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  if (isPublic && user.userId === "public") {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard", "/thankyou"],
};
