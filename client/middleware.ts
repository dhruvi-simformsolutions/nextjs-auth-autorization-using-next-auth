// Authentication
// export { default } from "next-auth/middleware"; // checks if user is logged in or not, if not logged it redirects to login page

import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export const config = {
  matcher: ["/admin/:path*", "/user/:path*"], // tells to run the middleware for this given paths
};

// Authorization
export default withAuth(
  function middleware(req){
    if(req.nextUrl.pathname.startsWith('/admin') && req.nextauth.token?.role !== 'admin'){
      return NextResponse.rewrite(new URL('/auth/login', req.url))
    }

    if(req.nextUrl.pathname.startsWith('/user') && req.nextauth.token?.role !== 'user'){
      return NextResponse.rewrite(new URL('/auth/login', req.url))
    }
  },
  {
    callbacks:{
      authorized: ({token}) => !!token
    }
  }
)
