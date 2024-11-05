import { defineQuery } from "next-sanity";

export const TESTIMONIALS_QUERY = defineQuery(`*[_type == "testimonial"]{
  _id,
  user,
  userImage {
    asset->{
      _id,
      url
    }
  },
  description
}`);

export const SONAUI_COMPONENTS_QUERY =
  defineQuery(`*[_type == "sonauiComponent"] | order(name asc){
    _id,
    name,
    pageLink,
    status,
    category,
    tags
  }`);

export const SONAUI_BASIC_COMPONENTS_QUERY =
  defineQuery(`*[_type == "sonauiComponent"  && category == "basicComponent"] | order(name asc){
    _id,
    name,
    pageLink,
    status,
    category,
    tags
  }`);
export const SONAUI_MAGIC_COMPONENTS_QUERY =
  defineQuery(`*[_type == "sonauiComponent"  && category == "magicComponent"] | order(name asc){
    _id,
    name,
    pageLink,
    status,
    category,
    tags
  }`);

export const SITE_METADATA_QUERY = defineQuery(`*[_type == "siteMetaData"][0]{
  siteTitle,
  siteDescription,
  "logoUrl": logo.asset->url,
  "faviconUrl": favicon.asset->url,
  socialLinks[]{
    platform,
    url
  },
}`);
