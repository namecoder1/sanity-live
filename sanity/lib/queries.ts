import { defineQuery } from "next-sanity";

export const MEMOS_QUERY = defineQuery(`
	*[_type == 'memo'] {
		'id': _id,
		title, 
		description,
		expDate,
		priority
	}
`)