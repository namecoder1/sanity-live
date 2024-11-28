import { type SchemaTypeDefinition } from 'sanity'
import { memo } from './memo'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [memo],
}
