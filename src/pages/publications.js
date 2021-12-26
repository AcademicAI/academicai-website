import SeoHead from '../components/SeoHead'
import { Nav } from '../components/Nav'
import { Banner } from '../components/Banner'
import { useRouter } from 'next/router'
import { Container } from '../components/Container'
import { Button } from '../components/Button'
import styled from 'styled-components'
import { typography } from '../theme'

const Papers = styled.section`
	text-align: justify;
	line-height: 1.8;
	button {
		margin: 0.5rem 0.5rem 0 0;
	}
`

const PubButtons = styled.div`
	margin: 1rem 0;
`

const PaperTitle = styled.h2`
	font-size: ${typography.size.m1}rem;
`
const Abstract = styled.p`
	font-size: ${typography.size.s2}rem;
`

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
			<Container maxWidth='md'>
				<Papers>
					<article>
						<PaperTitle>
							SucupiraBot: An Interactive Question-Answering
							System for the Sucupira Platform
						</PaperTitle>
						<Abstract>
							Conversational user interfaces have been an
							increasingly popular way to obtain quick
							information in natural language, especially with
							advances in the area of natural language processing
							(NLP) fueled by the surge of deep neural networks.
							Real-world cases include IBM Watson and Azure
							Microsoft chatbots, among others. Such examples,
							however, are most present in the commercial
							spectrum, with few being actively used by the
							scientific community. In this work, we develop an
							Interactive Question Answering System (IQA) for the
							Sucupira platform, Brazil&apos;s biggest open
							platform of postgraduate content, deployed as
							conversational interfaces for two popular messaging
							platforms: Telegram and Discord. We also propose
							the use of multilingual embeddings for ordering
							answers by a language-independent measuer of
							semantic similarity. Our IQA was evaluated with an
							study with 16 participants. The results were mostly
							positive, indicating that the use of conversational
							user interfaces, along with NLP techniques, may be
							a valid alternative for retrieving scientific
							information from the Sucupira plataform.
						</Abstract>
						<PubButtons>
							<Button size='small'>PDF</Button>
							<Button size='small'>Slides</Button>
							<Button size='small'>Cite</Button>
							<Button size='small'>Código fonte</Button>
						</PubButtons>
					</article>
				</Papers>
			</Container>
		</>
	)
}
