import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(["/sign-in(.*)"]);
const isAdminRoute = createRouteMatcher(["/admin/(.*)"]);

export default clerkMiddleware((auth, request) => {
  if (isAdminRoute(request)) {
    auth().protect((has) => {
      return has({ role: "org:admin" });
    });
  }

  if (!isPublicRoute(request)) {
    auth().protect();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
