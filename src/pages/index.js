import styled from 'styled-components'
import { useRouter } from 'next/router'
import SeoHead from '../components/SeoHead'
import { Nav } from '../components/Nav'
import { Banner } from '../components/Banner'
import { Button } from '../components/Button'
import { color, typography } from '../theme'
import {
	faBook,
	faCommentDots,
	faFlask,
	faSearch,
} from '@fortawesome/free-solid-svg-icons'
import NexLink from 'next/link'
import { Logo } from '../components/Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getPostBySlug } from '../lib/api'

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

const Cards = styled.div`
	text-align: center;
	padding: 3em;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
	grid-gap: 3rem;
	max-width: 114rem;
	margin: 0 auto;
`

const IconWrapper = styled.div`
	width: 13rem;
	height: 11rem;
	background: ${color.lightest};
	margin: 0 auto;
	margin-bottom: 3rem;
	border-radius: 4rem;
	position: relative;
	-webkit-box-shadow: 0px 5px 25px -2px rgba(0, 0, 0, 0.05);
	-moz-box-shadow: 0px 5px 25px -2px rgba(0, 0, 0, 0.05);
	box-shadow: 0px 5px 25px -2px rgba(0, 0, 0, 0.05);
	&::after {
		position: absolute;
		bottom: -20px;
		left: 50%;
		-webkit-transform: translateX(-50%);
		-ms-transform: translateX(-50%);
		transform: translateX(-50%);
		content: '';
		border-style: solid;
		border-width: 20px 15px 0 15px;
		border-color: ${color.lightest} transparent transparent transparent;
	}
`
const Icon = styled.span`
	font-size: 5rem;
	color: ${color.primary};
	position: absolute;
	bottom: 20%;
	right: 32%;
`

const icons = {
	faCommentDots: faCommentDots,
	faSearch: faSearch,
	faBook: faBook,
	faFlask: faFlask,
}
export default function Home({ content }) {
	const router = useRouter()
	const { locale } = router
	const title =
		locale == 'pt-BR'
			? 'AcademicAI - Página Inicial'
			: 'AcademicAI - Home Page'

	const pageContent = content[locale]

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
			<section style={{ background: color.lighter }}>
				<Cards title='Objetivos'>
					{pageContent['objectives'].map((element, index) => (
						<article key={`home_objectives_${index}`}>
							<IconWrapper>
								<Icon>
									<FontAwesomeIcon
										icon={icons[element.icon]}
									/>
								</Icon>
							</IconWrapper>
							<h1 className='article-title'>{element.title}</h1>
							<p>{element.description}</p>
						</article>
					))}
				</Cards>
			</section>
		</>
	)
}

export async function getStaticProps() {
	const content = getPostBySlug('home')
	return {
		props: {
			content: content,
		},
	}
}
