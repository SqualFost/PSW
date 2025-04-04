import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const userCookie = req.cookies.get("user")?.value;
  const { pathname } = req.nextUrl;

  console.log("Middleware exécuté pour :", pathname);
  console.log("Cookie 'user' reçu :", userCookie);

  if (!userCookie) {
    console.log("Cookie 'user' absent, redirection vers /login");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    const user = JSON.parse(userCookie);
    if (!user.id_utilisateur || !user.role) {
      console.log("Cookie 'user' invalide, redirection vers /login");
      return NextResponse.redirect(new URL("/login", req.url));
    }
  } catch (error) {
    console.error("Erreur lors du parsing du cookie 'user' :", error);
    return NextResponse.redirect(new URL("/login", req.url));
  }

  console.log("Cookie 'user' valide, accès autorisé :", pathname);
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/absences", "/reservations"],
};
