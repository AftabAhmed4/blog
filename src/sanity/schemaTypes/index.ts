import { type SchemaTypeDefinition } from 'sanity'
import { eventType } from './homepage'
import { blogSchema } from './blogschema'



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
eventType,
blogSchema
  ],
}
