import "./globals.css";

export const metadata = {
  title: "Memory Game",
  description: "A card matching memory game built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
