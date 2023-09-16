import "./globals.css";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "777 Sense Lab",
  description: "Developed by Tuna Boşdurmaz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
