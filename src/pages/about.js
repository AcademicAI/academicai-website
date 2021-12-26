import {
	faDiscord,
	faGithub,
	faTelegram,
} from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SeoHead from '../components/SeoHead'
import { Nav } from '../components/Nav'
import { Container } from '../components/Container'
import { Banner } from '../components/Banner'
import { useRouter } from 'next/router'
import { color, spacing } from '../theme'
import { Anchor } from '../components/Anchor'
import { getPostBySlug } from '../lib/api'

const AboutSection = styled(Container)`
	text-align: justify;
	line-height: 1.8;
`

const SectionParagraph = styled.p`
	margin-bottom: 2rem;
`

const Cards = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-wrap: wrap;
`

const Card = styled.div`
	margin: 1rem;
	border-radius: ${spacing.borderRadius.small}rem;
	padding: 2.5rem;
	max-width: 35rem;
	color: ${color.dark};
	box-shadow: 0px 5px 8px 1px ${color.medium};
	flex: 1;
	&:hover {
		transform: translateY(-1%);
	}
`

const CardTitle = styled.h3`
	text-align: center;
	color: ${color.darker};
`

const CardImg = styled.img`
	margin: 0 auto;
	height: 16rem;
	width: 16rem;
	border-radius: 50%;
`

const CardDescription = styled.p`
	font-size: 1.4rem;
`

const Icons = styled.ul`
	font-size: 1.4rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	list-style-type: none;
`
const Icon = styled.li`
	padding: 1rem;
	text-align: center;
`

export default function About({ content }) {
	const router = useRouter()
	const { locale } = router

	const title =
		locale == 'pt-BR' ? 'AcademicAI - Sobre' : 'AcademicAI - About'

	const pageContent = content[locale]
	return (
		<>
			<SeoHead title={title} />
			<Nav />
			<Banner height='20vh'>
				<h1>{locale == 'pt-BR' ? 'Sobre' : 'About'}</h1>
			</Banner>
			<AboutSection style={{ maxWidth: '80rem' }} as='section'>
				<h2 style={{ textAlign: 'center' }}>
					{pageContent['main'].title}
				</h2>
				{pageContent['main'].description.map((element, index) => (
					<SectionParagraph key={index}>{element}</SectionParagraph>
				))}
				<h2 style={{ marginBottom: 20 }}>
					{pageContent['about-us'].title}
				</h2>
				<Cards>
					{pageContent['about-us'].members.map((element, index) => (
						<Card key={`member_${index}`}>
							<CardImg
								src={element.picture}
								alt='Foto de Ivan'
							/>
							<CardTitle>{element.name}</CardTitle>
							<CardDescription>
								{element.description}
							</CardDescription>
							<Icons>
								<Icon>
									<Anchor
										href={element.github}
										target='_blank'
										rel='noreferrer'
									>
										<FontAwesomeIcon icon={faGithub} />{' '}
										Github
									</Anchor>
								</Icon>
								<Icon>
									<Anchor
										href={element.discord}
										target='_blank'
										rel='noreferrer'
									>
										<FontAwesomeIcon icon={faDiscord} />{' '}
										Discord
									</Anchor>
								</Icon>
								<Icon>
									<Anchor href={element.mail}>
										<FontAwesomeIcon icon={faEnvelope} />{' '}
										Email
									</Anchor>
								</Icon>
								<Icon>
									<Anchor href={element.lattes}>
										<img
											src='/icons/lattes.jpg'
											alt='Logo Lattes'
											style={{
												height: 15,
												width: 15,
												margin: 'auto',
												marginBottom: 5,
												marginTop: 5,
											}}
										/>{' '}
										Lattes
									</Anchor>
								</Icon>
							</Icons>
						</Card>
					))}
				</Cards>
			</AboutSection>
		</>
	)
}

export async function getStaticProps() {
	const content = getPostBySlug('about')
	return {
		props: {
			content: content,
		},
	}
}
