import { type SchemaTypeDefinition } from "sanity";
import { testimonialSchema } from "./testimonials";
import { sonauiComponent } from "./sonaUIComponent";
import { siteMetaData } from "./siteInfo";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [testimonialSchema, sonauiComponent, siteMetaData],
};
