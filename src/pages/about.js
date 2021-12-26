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

export default function About() {
	const router = useRouter()
	const { locale } = router

	const title =
		locale == 'pt-BR' ? 'AcademicAI - Sobre' : 'AcademicAI - About'

	return (
		<>
			<SeoHead title={title} />
			<Nav />
			<Banner height='20vh'>
				<h1>{locale == 'pt-BR' ? 'Sobre' : 'About'}</h1>
			</Banner>
			<AboutSection style={{ maxWidth: '80rem' }} as='section'>
				<h2 style={{ textAlign: 'center' }}>O que é o AcademicAI?</h2>
				<SectionParagraph>
					É um projeto que visa fornecer todo tipo de dado, modelo e
					ferramentas que sejam voltadas ao domínio acadêmico.
				</SectionParagraph>
				<SectionParagraph>
					Aceitamos a colaboração e contribuição de interessados.
				</SectionParagraph>
				<h2 style={{ marginBottom: 20 }}>Quem somos?</h2>
				<Cards>
					<Card>
						<CardImg
							src='http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K8476434Y1'
							alt='Foto de Ivan'
						/>
						<CardTitle>Ivan Pereira</CardTitle>
						<CardDescription>
							Mestrando em informática, possuo interesse em
							inteligência artificial, mais especificamente na
							área de aprendizado por reforço, sistemas
							multiagente e gameAI.
						</CardDescription>
						<Icons>
							<Icon>
								<Anchor
									href='https://github.com/abcp4'
									target='_blank'
									rel='noreferrer'
								>
									<FontAwesomeIcon icon={faGithub} /> Github
								</Anchor>
							</Icon>
							<Icon>
								<Anchor
									href='https://discordapp.com/users/176048754774769664/'
									target='_blank'
									rel='noreferrer'
								>
									<FontAwesomeIcon icon={faDiscord} />{' '}
									Discord
								</Anchor>
							</Icon>
							<Icon>
								<Anchor href='mailto:navi1921@gmail.com'>
									<FontAwesomeIcon icon={faEnvelope} /> Email
								</Anchor>
							</Icon>
							<Icon>
								<Anchor href='http://lattes.cnpq.br/5229824680871242'>
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
					<Card>
						<CardImg
							src='http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K8105247J7'
							alt='Foto de Jessica'
						/>
						<CardTitle>Jessica Cardoso</CardTitle>
						<CardDescription>
							Graduada em ciência da computação, possui interesse
							em NLP, inteligência artficial e desenvolvimento
							web.
						</CardDescription>
						<Icons>
							<Icon>
								<Anchor
									href='https://github.com/jessicacardoso'
									target='_blank'
									rel='noreferrer'
								>
									<FontAwesomeIcon icon={faGithub} /> Github
								</Anchor>
							</Icon>
							<Icon>
								<Anchor
									href='https://t.me/jessicacardoso'
									target='_blank'
									rel='noreferrer'
								>
									<FontAwesomeIcon icon={faTelegram} />{' '}
									Telegram
								</Anchor>
							</Icon>
							<Icon>
								<Anchor href='mailto:jcardoso@inf.puc-rio.br'>
									<FontAwesomeIcon icon={faEnvelope} /> Email
								</Anchor>
							</Icon>
						</Icons>
					</Card>
				</Cards>
			</AboutSection>
		</>
	)
}
