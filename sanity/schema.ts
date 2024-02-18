import { type SchemaTypeDefinition } from 'sanity'
import { mentor, year } from './schemas/mentor'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [mentor, year],
}
