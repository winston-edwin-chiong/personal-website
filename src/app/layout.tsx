import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components";
import { ThemeProvider } from "@/components/theme-provider";

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
    <html lang="en" suppressHydrationWarning className={figtree.className}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex flex-col min-h-screen justify-center items-center">
            <div>
              <Header />
            </div>
            <div className="flex-grow">{children}</div>
            <div>
              <Footer />
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
