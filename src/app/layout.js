import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Seidu | Software Developer",
  description: "my portfolio website",
  openGraph: {
    title: "Seidu | Developer Portfolio",
    description: "Explore Seidu's work, skills, and personal journey in tech.",
    url: "https://seidusalam.com",
    siteName: "Seidu.dev",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    // <html lang="en">
    //   <body className={inter.className}>{children}</body>
    // </html>

    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* 👇 This script runs before React mounts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const mode = JSON.parse(localStorage.getItem('darkMode'));
                  if (mode) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
