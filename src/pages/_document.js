import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
	static getInitialProps({ renderPage }) {
		const sheet = new ServerStyleSheet()

		const page = renderPage(
			(Component) => (props) =>
				sheet.collectStyles(<Component {...props} />)
		)

		const styleElements = sheet.getStyleElement()
		return { ...page, styleElements }
	}

	render() {
		const { styleElements } = this.props

		return (
			<Html lang='pt-BR'>
				<Head>
					<link rel='icon' type='image/png' href='/favicon.png' />
					<link rel='manifest' href='/manifest.json' />
					<meta
						httpEquiv='X-UA-Compatible'
						content='IE=edge,chrome=1'
					/>
					<link
						rel='preconnect'
						href='https://fonts.googleapis.com'
					/>
					<link
						rel='preconnect'
						href='https://fonts.gstatic.com'
						crossOrigin='true'
					/>
					<link
						href='https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500;700;900&display=swap'
						rel='stylesheet'
					/>
					<link
						rel='stylesheet'
						href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css'
						referrerPolicy='no-referrer'
					/>

					<meta name='theme-color' content='#fa811b' />
					<meta name='author' content='academic-ai' />

					{styleElements}
				</Head>

				<body>
					<div className='root'>
						<Main />
					</div>

					<NextScript />
				</body>
			</Html>
		)
	}
}
