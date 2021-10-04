import Head from 'next/head'
import GlobalStyles from '../globalStyles'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0, user-scalable=yes'
				/>
			</Head>
			<GlobalStyles />
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
