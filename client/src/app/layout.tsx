// Tipos de Next.js
import type { Metadata } from "next";

// Estilos globales
import "./globals.css";

// Dependencias externas
import { Suspense } from "react";
import { PrimeReactProvider } from 'primereact/api';

// Componentes locales
import Navbar from "../components/Navbar/Navbar";
import Loading from "../components/Loading/Loading";
import SidePanel from "../components/Sidebar/SidePanel";
import { ToastProvider } from "../context/ToastContext";

export const metadata: Metadata = {
  title: "Dux Challenge",
  description: "Creado con NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen overflow-hidden bg-white">
        <PrimeReactProvider>
          <ToastProvider>
            <div className="fixed w-full z-50">
              <Navbar />
            </div>
            <div className="flex h-full">
              <SidePanel />
              <div className="flex-grow overflow-y-auto pl-64 ml-3 mt-5 w-full">
                <Suspense fallback={<Loading />}>
                  {children}
                </Suspense>
              </div>
            </div>
          </ToastProvider>
        </PrimeReactProvider>
      </body>
    </html>
  );
}
