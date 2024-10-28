import { type SchemaTypeDefinition } from "sanity";
import { testimonialSchema } from "./testimonials";
import { sonauiComponent } from "./sonaUIComponent";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [testimonialSchema, sonauiComponent],
};
