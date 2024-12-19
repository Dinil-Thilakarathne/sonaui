import { defineField, defineType } from "sanity";

export const sonauiComponent = defineType({
  name: "sonauiComponent",
  type: "document",
  title: "Sonaui Component",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Component Name",
      description: "Name of the component",
    }),
    defineField({
      name: "pageLink",
      type: "string",
      title: "Page Link",
      description: "Link to the component's page or documentation",
    }),
    defineField({
      name: "status",
      type: "string",
      title: "Status",
      description:
        "Current status of the component (e.g., in development, completed)",
      options: {
        list: [
          { title: "In Development", value: "inDevelopment" },
          { title: "Completed", value: "completed" },
          { title: "Deprecated", value: "deprecated" },
        ],
      },
    }),
    defineField({
      name: "category",
      type: "string",
      title: "Category",
      description: "Category to which the component belongs",
      options: {
        list: [
          { title: "Text Effect", value: "textEffect" },
          { title: "Basic Components", value: "basicComponent" },
          { title: "Magic Components", value: "magicComponent" },
        ],
      },
    }),
    defineField({
      name: "tags",
      type: "string",
      title: "Tags",
      description: "Tags related to the component (e.g., new, updated, soon)",
      options: {
        list: [
          { title: "new", value: "new" },
          { title: "updated", value: "updated" },
          { title: "soon", value: "soon" },
        ],
      },
    }),
    defineField({
      name: "isFeatureComponent",
      type: "boolean",
      title: "Feature Component",
      description: "Mark this component as a feature component",
    }),
  ],
});
