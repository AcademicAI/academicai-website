import SeoHead from '../../components/SeoHead'
import { Nav } from '../../components/Nav'
import { Banner } from '../../components/Banner'
import { useRouter } from 'next/router'
import { Button } from '../../components/Button'
import { Container } from '../../components/Container'
import { Row, Column } from '../../components/Container'
import styled from 'styled-components'
import Link from 'next/link'
import { maxBreakpoint } from '../../utils/media'
import { color, breakpoints } from '../../theme'
import { getPostBySlug } from '../../lib/api'

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

export default function Projects({ content }) {
	const router = useRouter()
	const { locale } = router

	const title =
		locale == 'pt-BR' ? 'AcademicAI - Projetos' : 'AcademicAI - Projects'

	const pageContent = content[locale]

	return (
		<>
			<SeoHead title={title} />
			<Nav />
			<Banner height='20vh'>
				<h1>{locale == 'pt-BR' ? 'Projetos' : 'Projects'}</h1>
			</Banner>
			<Container as='section'>
				{pageContent.map((content, index) => (
					<Row as='article' key={index} reverse={index % 2}>
						<ProjectItem minScreenSize='md'>
							<SectionTitle>{content.title}</SectionTitle>
							<div>
								<SectionParagraph>
									{content.description}
								</SectionParagraph>
								<Link href={content.url} passHref>
									<Button appearance='primary' as='a'>
										{locale == 'pt-BR'
											? 'Detalhes'
											: 'Explore'}
									</Button>
								</Link>
							</div>
						</ProjectItem>
						<ProjectItem minScreenSize='md'>
							<img src={content.picture} alt='image' />
						</ProjectItem>
					</Row>
				))}
			</Container>
		</>
	)
}

export async function getStaticProps() {
	const content = getPostBySlug('projects')
	return {
		props: {
			content: content,
		},
	}
}
