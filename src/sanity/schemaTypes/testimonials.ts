import { defineField, defineType } from "sanity";

export const testimonialSchema = defineType({
  name: "testimonial",
  type: "document",
  title: "Testimonial",
  fields: [
    defineField({
      name: "user",
      type: "string",
      title: "User",
      description: "Name of the person giving the testimonial",
    }),
    defineField({
      name: "userImage",
      type: "image",
      title: "User Image",
      options: {
        hotspot: true,
      },
      description: "Photo of the person giving the testimonial",
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      description: "Testimonial text describing the user's experience",
    }),
  ],
});
