import { Toaster } from "react-hot-toast";
import "./globals.css";
import Navbar from "@/components/Navbar";

import { TimelineProvider } from "@/context/TimelineContext";

export const metadata = {
  title: "KeenKeeper",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <main>
        <Navbar />

        <TimelineProvider>
          {children}
          
          <Toaster position="top-right" toastOptions={{duration: 2500, }}/>
          
        </TimelineProvider>
        </main>
      </body>
    </html>
  );
}