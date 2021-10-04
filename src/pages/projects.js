import SeoHead from '../components/SeoHead'
import { Nav } from '../components/Nav'
import { Banner } from '../components/Banner'
import { useRouter } from 'next/router'

export default function Projects() {
	const router = useRouter()
	const { locale } = router

	const title =
		locale == 'pt-BR' ? 'AcademicAI - Projetos' : 'AcademicAI - Projects'

	return (
		<>
			<SeoHead title={title} />
			<Nav />
			<Banner height='20vh'>
				<h1>{locale == 'pt-BR' ? 'Projetos' : 'Projects'}</h1>
			</Banner>
		</>
	)
}
