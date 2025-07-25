import "./globals.css";
import type { Metadata } from "next";
import Sidebar from "@/components/layout/Sidebar/Sidebar";
import Header from "@/components/layout/Header/Header";
import Path from "@/components/layout/Path/Path";
export const metadata: Metadata = {
  title: "Тестовое задание",
  description: "Тестовое задание на Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1">
             <Header />
              <Path/>
            <main>
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}