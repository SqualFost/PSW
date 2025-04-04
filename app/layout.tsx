import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/context/AuthContext";
import LayoutClient from "@/components/layout-client";

const inter = Inter({ subsets: ["latin"] });

// Définition des métadonnées du site (titre et description)
export const metadata = {
  title: "PSW",
  description: "PSW BTS Ciel",
};

// Fonction principale qui gère la structure de la page (le layout)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <AuthProvider>
        <ThemeProvider>
          <body className={inter.className}>
            <LayoutClient>{children}</LayoutClient>
          </body>
        </ThemeProvider>
      </AuthProvider>
    </html>
  );
}
