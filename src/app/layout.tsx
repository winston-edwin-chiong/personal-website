import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Footer, Header } from "@/components";

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
      className={cn(figtree.className, "antialiased", "cursor-default")}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex min-h-screen flex-col items-center p-5 lg:p-15 xl:p-20">
            <div className="flex h-full w-[80vw] flex-grow flex-col sm:w-[65vw] md:w-[55vw] lg:w-[50vw] xl:w-[40vw]">
              <Header />
              <div className="my-10 flex flex-grow flex-col items-center sm:my-8 md:my-6 md:justify-center">
                {children}
              </div>
              <Footer />
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
