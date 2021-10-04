import SeoHead from '../components/SeoHead'
import { Nav } from '../components/Nav'
import { Banner } from '../components/Banner'
import { useRouter } from 'next/router'

export default function Contact() {
	const router = useRouter()
	const { locale } = router

	const title =
		locale == 'pt-BR'
			? 'AcademicAI - Contate-nos'
			: 'AcademicAI - Contact Us'

	return (
		<>
			<SeoHead title={title} />
			<Nav />
			<Banner height='20vh'>
				<h1>{locale == 'pt-BR' ? 'Contate-nos' : 'Contact Us'}</h1>
			</Banner>
		</>
	)
}
