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
