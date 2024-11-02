import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { SITE_METADATA_QUERY } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "SonaUI | Modern React Components Powered by Tailwind & Radix",
  description:
    "Explore SonaUI, an open-source React-based UI library built with Tailwind CSS and powered by Radix UI for accessible and customizable components. Streamline your web development with pre-designed, responsive components that ensure consistent, modern designs with minimal effort.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: siteMetaData } = await sanityFetch({
    query: SITE_METADATA_QUERY,
  });

  return (
    <html lang="en">
      <head>
        <title>{siteMetaData?.siteTitle || "SonaUI"}</title>
        <meta
          name="description"
          content={siteMetaData?.siteDescription || "Default description"}
        />
        <link rel="icon" href={siteMetaData?.faviconUrl || "/favicon.ico"} />
        <meta name="keywords" content={"web, UI, SonaUI"} />
      </head>
      <body>
        {children}
        <SanityLive />
        <Analytics />
      </body>
    </html>
  );
}
