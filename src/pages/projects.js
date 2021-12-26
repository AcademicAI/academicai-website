import SeoHead from '../components/SeoHead'
import { Nav } from '../components/Nav'
import { Banner } from '../components/Banner'
import { useRouter } from 'next/router'
import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { Row, Column } from '../components/Container'
import styled from 'styled-components'
import Link from 'next/link'
import { maxBreakpoint } from '../utils/media'
import { color, breakpoints } from '../theme'

const ProjectItem = styled(Column)`
	padding: 1rem;

	${maxBreakpoint(
		breakpoints.md,
		`
            &:first-child {
                order: 2;
            }
        `
	)}
`

export const SectionTitle = styled.h1`
	margin-bottom: 1rem;
	&:after {
		background: none repeat scroll 0 0 ${color.primary};
		top: 1px;
		content: '';
		display: block;
		height: 0.5rem;
		position: relative;
		width: 5rem;
	}
`

export const SectionParagraph = styled.p`
	line-height: 1.8;
	padding: 1rem 0;
`

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
			<Container as='section'>
				<Row as='article'>
					<ProjectItem minScreenSize='md'>
						<SectionTitle>SucupiraBot (SuBot)</SectionTitle>
						<div>
							<SectionParagraph>
								Agente conversacional para consulta pública dos
								dados acadêmicos disponibilizados no portal de
								dados abertos da CAPES.
							</SectionParagraph>
							<Link href='/projects/sucupirabot' passHref>
								<Button appearance='primary' as='a'>
									Detalhes
								</Button>
							</Link>
						</div>
					</ProjectItem>
					<ProjectItem minScreenSize='md'>
						<img
							src='/assets/images/undraw_Chat_bot_re_e2gj.svg'
							alt=''
						/>
					</ProjectItem>
				</Row>
				<Row as='article' reverse>
					<ProjectItem minScreenSize='sm'>
						<div>
							<SectionTitle>
								Modelos de Tópicos de Teses
							</SectionTitle>
							<div>
								<SectionParagraph>
									Ferramenta que permite e exploração de
									tópicos construídos a partir do corpus de
									teses e dissertações.
								</SectionParagraph>
								<Link
									href='/projects/graphics#tesesTopics'
									passHref
								>
									<Button appearance='primary' as='a'>
										Detalhes
									</Button>
								</Link>
							</div>
						</div>
					</ProjectItem>
					<ProjectItem minScreenSize='sm'>
						<img src='/assets/images/topics.png' alt='' />
					</ProjectItem>
				</Row>
			</Container>
		</>
	)
}
