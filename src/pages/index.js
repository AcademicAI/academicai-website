import styled from 'styled-components'
import { useRouter } from 'next/router'
import SeoHead from '../components/SeoHead'
import { Nav } from '../components/Nav'
import { Banner } from '../components/Banner'
import { Button } from '../components/Button'
import { typography } from '../theme'
import NexLink from 'next/link'
import { Logo } from '../components/Logo'

const Title = styled.h1`
	font-size: 50px;
	color: red;
`

const HeroContent = styled.section`
	padding: 5rem;
	> p {
		padding: 1rem;
		font-size: ${typography.size.m2}rem;
	}
`

export default function Home() {
	const router = useRouter()
	const { locale } = router
	const title =
		locale == 'pt-BR'
			? 'AcademicAI - Página Inicial'
			: 'AcademicAI - Home Page'

	return (
		<>
			<SeoHead title={title} />
			<Nav />
			<Banner height='60vh'>
				<HeroContent>
					<Logo>
						Academic <span>AI</span>
					</Logo>
					<p>
						{locale === 'pt-BR'
							? 'Inteligência Artificial Aplicada em Dados Acadêmicos'
							: 'Artificial Intelligence Applied to Academic Data'}
					</p>
					<span>
						<NexLink prefetch href='/projects' passHref>
							<Button appearance='primary' size='large' as='a'>
								{locale === 'pt-BR'
									? 'Explore projetos'
									: 'Explore projects'}{' '}
								&raquo;
							</Button>
						</NexLink>
					</span>
				</HeroContent>
			</Banner>
		</>
	)
}
