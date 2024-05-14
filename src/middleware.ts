// example middleware

import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  // Extract the token using the next-auth getToken method
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // Check if the user is authenticated
  if (!token) {
    // If not authenticated, redirect to the login page
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Allow the request to proceed if authenticated
  return NextResponse.next();
}

// Define the paths where this middleware should apply
export const config = {
  matcher: ['/dashboard/:path*'],
};
