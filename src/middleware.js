import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server";

export default withAuth(
    function middleware(req) {
        if (!req.nextauth.token) {
            return NextResponse.redirect(req.nextUrl.origin + "/auth/login");
        }

        if (req.nextUrl.pathname.startsWith("/admin")) {
            const roles = req.nextauth.token.roles || [];
            if (!roles.includes("admin")) {
                return NextResponse.redirect(req.nextUrl.origin + "/");
            }
        }
    },
)

export const config = { matcher: ["/admin(.*)","/canchas(.*)"] }
