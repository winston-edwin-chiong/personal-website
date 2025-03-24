import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "winston chiong 🤗",
  description: "winston's virtual home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(figtree.className, "antialiased")}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex h-screen flex-col items-center justify-center">
            <Header />
            <div className="flex-grow">{children}</div>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
