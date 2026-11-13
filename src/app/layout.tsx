import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Himanshu Trivedi | AI/ML & Full-Stack Engineer",
  description:
    "Portfolio of Himanshu Trivedi — building intelligent products with AI, Generative AI, and full-stack engineering.",
  metadataBase: new URL("https://himanshu-trivedi9026.github.io"),
  openGraph: {
    title: "Himanshu Trivedi | AI/ML & Full-Stack Engineer",
    description: "AI/ML, Generative AI, and full-stack engineering portfolio.",
    url: "https://himanshu-trivedi9026.github.io/portfolio-website/",
    siteName: "Himanshu Trivedi",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}