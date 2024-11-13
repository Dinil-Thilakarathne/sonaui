import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { SITE_METADATA_QUERY } from "@/sanity/lib/queries";
import { VercelToolbar } from "@vercel/toolbar/next";

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "SonaUI | Modern UI Library with Essential & Animated Components",
  },
  description:
    "SonaUI is an open-source React UI library featuring a blend of essential and animated components, built with Tailwind CSS and Framer Motion. Effortlessly create modern, responsive UIs with both basic and 'magic' components—designed to bring animations and interactivity to your web projects. Perfect for developers seeking a flexible, visually appealing solution for web application design.",
  metadataBase: new URL("https://sonaui.vercel.app/"),

  twitter: {
    card: "summary_large_image",
    site: "https://sonaui.vercel.app/",
    title: "SonaUI | Modern UI Library with Essential & Animated Components",
    description:
      "SonaUI is an open-source React UI library featuring a blend of essential and animated components, built with Tailwind CSS and Framer Motion. Effortlessly create modern, responsive UIs with both basic and 'magic' components—designed to bring animations and interactivity to your web projects. Perfect for developers seeking a flexible, visually appealing solution for web application design.",
    images: ["/social-media-image.png"],
    creator: "@codybydinil",
  },

  openGraph: {
    type: "website",
    url: "https://sonaui.vercel.app/",
    title: "SonaUI | Modern UI Library with Essential & Animated Components",
    description:
      "SonaUI is an open-source React UI library featuring a blend of essential and animated components, built with Tailwind CSS and Framer Motion. Effortlessly create modern, responsive UIs with both basic and 'magic' components—designed to bring animations and interactivity to your web projects. Perfect for developers seeking a flexible, visually appealing solution for web application design.",
    images: ["/social-media-image.png"],
    locale: "en_US",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: siteMetaData } = await sanityFetch({
    query: SITE_METADATA_QUERY,
  });

  const shouldInjectToolbar = process.env.NODE_ENV === "development";

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
        {shouldInjectToolbar && <VercelToolbar />}
      </body>
    </html>
  );
}
