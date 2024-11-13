import AnimatedLink from "@/components/AnimatedLink";
import { sanityFetch } from "@/sanity/lib/live";
import { SITE_METADATA_QUERY } from "@/sanity/lib/queries";

export default async function Home() {
  const { data: siteData } = await sanityFetch({ query: SITE_METADATA_QUERY });

  if (!siteData) return;
  return (
    <div className="flex flex-col gap-y-4 p-4">
      <div className="flex max-w-[1080px] flex-col gap-y-4">
        <h1 className="border-spacing-1 border-b text-xl lg:text-4xl">
          {siteData.siteTitle}
        </h1>
        <p className="text-balance text-sm md:text-lg">
          {siteData.siteDescription}
        </p>
      </div>
      <div className="flex gap-x-2">
        {siteData.socialLinks?.map((link, i) => {
          return (
            link.platform &&
            link.url && (
              <AnimatedLink
                key={i}
                text={link.platform}
                link={link.url}
                cloneTextColor=" text-yellow-400"
              />
            )
          );
        })}
      </div>
    </div>
  );
}
