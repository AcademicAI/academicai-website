import NextHead from 'next/head'

const SeoHead = (props) => {
	const {
		title = 'AcademicAI',
		description = 'Inteligência Artificial Aplicada em Dados Acadêmicos.',
		image = '/icons/icon-512.png',
		children,
		url = '',
	} = props

	return (
		<NextHead>
			<title>{title}</title>

			<meta name='description' content={description} />

			{/* Open Graph */}
			<link itemProp='url' href='https://academicai.vercel.app/' />
			<meta itemProp='name' content={title} />
			<meta itemProp='description' content={description} />
			<meta itemProp='image' content='/favicon.png' />

			<meta property='og:locale' content='pt_BR' />
			<meta property='og:type' content='website' />
			<meta property='og:title' content={title} />
			<meta property='og:url' content={url} />
			<meta property='og:image' content={image} />
			<meta property='og:image:height' content='652' />
			<meta property='og:image:width' content='652' />
			<meta property='og:description' content={description} />
			<meta property='og:site_name' content='AcademicAI' />

			{children}

			<link rel='shortcut icon' href='/favicon.png' />
			<link rel='icon' href='/favicon.png' />
		</NextHead>
	)
}

export default SeoHead
