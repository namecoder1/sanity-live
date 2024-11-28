import { defineField, defineType } from "sanity";

export const memo = defineType({
	name: 'memo',
	title: 'Promemoria',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			type: 'string'
		}),
		defineField({
			name: 'description',
			type: 'text'
		}),
		defineField({
			name: 'expDate',
			type: 'date'
		}),
		defineField({
			name: 'priority',
			type: 'string',
			options: {
				list: [
					{ title: '!!!', value: 'Alta Priorità' },
					{ title: '!!', value: 'Media Priorità' },
					{ title: '!', value: 'Bassa Priorità' },
				]
			}
		}),
	]
})