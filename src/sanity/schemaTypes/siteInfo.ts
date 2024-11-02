import { defineType, defineField } from "sanity";

export const siteMetaData = defineType({
  name: "siteMetaData",
  type: "document",
  title: "SonaUI Site Meta Data",
  fields: [
    defineField({
      name: "siteTitle",
      type: "string",
      title: "Site Title",
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: "siteDescription",
      type: "text",
      title: "Site Description",
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: "logo",
      type: "image",
      title: "Logo",
      options: { hotspot: true },
    }),
    defineField({
      name: "favicon",
      type: "image",
      title: "Favicon",
      options: { hotspot: true },
    }),
    defineField({
      name: "socialLinks",
      type: "array",
      title: "Social Media Links",
      of: [
        {
          type: "object",
          fields: [
            { name: "platform", type: "string", title: "Platform" },
            { name: "url", type: "url", title: "URL" },
          ],
        },
      ],
    }),
    defineField({
      name: "footerText",
      type: "text",
      title: "Footer Text",
      validation: (Rule) => Rule.max(200),
    }),
  ],
});
