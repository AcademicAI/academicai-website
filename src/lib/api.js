import translation from '../_i18n/translations.json'

export function getPostBySlug(slug) {
	const items = translation[slug]
	return items
}
