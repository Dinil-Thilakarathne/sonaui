import AnimatedLink from "@/components/AnimatedLink";
import ComponentCard from "@/components/ComponentCard";
import { sanityFetch } from "@/sanity/lib/live";
import {
  FEATURED_COMPS_QUERY,
  SITE_METADATA_QUERY,
} from "@/sanity/lib/queries";

export default async function Home() {
  const { data: siteData } = await sanityFetch({ query: SITE_METADATA_QUERY });
  const { data: featuredComps } = await sanityFetch({
    query: FEATURED_COMPS_QUERY,
  });

  console.log(featuredComps);

  if (!siteData) return;
  return (
    <div className="flex h-[calc(100%_-10rem)] flex-col justify-between gap-y-4 p-4">
      <div className="flex max-w-[1080px] flex-col gap-y-4">
        <h1 className="border-spacing-1 border-b text-xl lg:text-4xl">
          {siteData.siteTitle}
        </h1>
        <p className="text-balance text-sm md:text-lg">
          {siteData.siteDescription}
        </p>
      </div>
      <div className="grid lg:grid-cols-4 lg:gap-4 border border-lime-500 flex-grow">
        {featuredComps?.map((comp, i) => {
          return <ComponentCard key={i} data={comp} />;
        })}
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
