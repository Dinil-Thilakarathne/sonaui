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
