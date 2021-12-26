import SeoHead from '../components/SeoHead'
import { Nav } from '../components/Nav'
import { Banner } from '../components/Banner'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { Button } from '../components/Button'
import { Column, Container, Row } from '../components/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { color } from '../theme'
import {
	faDiscord,
	faGithub,
	faTelegram,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { getPostBySlug } from '../lib/api'

const Social = styled(Row)`
	padding: 1rem;
`

const SocialButton = styled(Button)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	color: ${color.primary};
	background-color: transparent;
	${(props) =>
		props.discord &&
		`
        color: #7289da;
    `}
	${(props) =>
		props.telegram &&
		`
        color: #0088cc;
    `}
     ${(props) =>
		props.github &&
		`
        color: #1d202d;
    `}
   
    & svg {
		font-size: 5rem;
		margin-bottom: 1rem;
	}
	& :hover {
		background-color: transparent;
		box-shadow: none;
	}
`

const ContactDescription = styled.p`
	line-height: 1.8;
	margin-bottom: 1rem;
`

export default function Contact({ content }) {
	const router = useRouter()
	const { locale } = router

	const title =
		locale == 'pt-BR'
			? 'AcademicAI - Contate-nos'
			: 'AcademicAI - Contact Us'

	const pageContent = content[locale]

	return (
		<>
			<SeoHead title={title} />
			<Nav />
			<Banner height='20vh'>
				<h1>{locale == 'pt-BR' ? 'Contate-nos' : 'Contact Us'}</h1>
			</Banner>
			<Container maxWidth='md' as='main'>
				<ContactDescription>{pageContent}</ContactDescription>
				<Social>
					<Column>
						<SocialButton
							discord
							as='a'
							href='https://discord.gg/hDYa8rAf9G'
							rel='noreferrer'
							target='_blank'
						>
							<FontAwesomeIcon icon={faDiscord} />
							<small>Discord</small>
						</SocialButton>
					</Column>
					<Column>
						<SocialButton
							github
							as='a'
							href='https://github.com/academicai'
							rel='noreferrer'
							target='_blank'
						>
							<FontAwesomeIcon icon={faGithub} />
							<small>Github</small>
						</SocialButton>
					</Column>
					<Column>
						<SocialButton
							telegram
							as='a'
							href='https://t.me/academicai'
							rel='noreferrer'
							target='_blank'
						>
							<FontAwesomeIcon icon={faTelegram} />
							<small>Telegram</small>
						</SocialButton>
					</Column>
					<Column>
						<SocialButton
							as='a'
							href='mailto:ivan@telemidia.puc-rio.br'
						>
							<FontAwesomeIcon icon={faEnvelope} />
							<small>Email</small>
						</SocialButton>
					</Column>
				</Social>
			</Container>
		</>
	)
}

export async function getStaticProps() {
	const content = getPostBySlug('contact-us')
	return {
		props: {
			content: content,
		},
	}
}
