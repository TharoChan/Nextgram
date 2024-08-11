import { type Metadata } from "next";

import "~/styles/globals.css";

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

function TopNav() {
  return (
    <nav className="flex items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Gallery</div>
      <div>Sign In</div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`flex flex-col gap-4 font-sans`}>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
