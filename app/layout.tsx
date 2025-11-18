import "./globals.css";
import { Lato } from "next/font/google";

const lato = Lato({
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
});

export const metadata = {
  title: "My App",
  description: "Next.js app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={lato.className}>
      <body>{children}</body>
    </html>
  );
}
