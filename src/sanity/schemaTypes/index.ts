import { type SchemaTypeDefinition } from "sanity";
import { testimonialSchema } from "./testimonials";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [testimonialSchema],
};
