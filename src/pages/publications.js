import SeoHead from '../components/SeoHead'
import { Nav } from '../components/Nav'
import { Banner } from '../components/Banner'
import { useRouter } from 'next/router'

export default function Publications() {
	const router = useRouter()
	const { locale } = router

	const title =
		locale == 'pt-BR'
			? 'AcademicAI - Publicações'
			: 'AcademicAI - Publications'

	return (
		<>
			<SeoHead title={title} />
			<Nav />
			<Banner height='20vh'>
				<h1>{locale == 'pt-BR' ? 'Publicações' : 'Publications'}</h1>
			</Banner>
		</>
	)
}
