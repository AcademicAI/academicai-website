import 'react-ldavis/dist/index.css'

// import Head from 'next/head'
import { LDAvis } from 'react-ldavis'

// import { Column, Row } from '../../../components/Container'
import LDAvisDataList from './ldavis_data.json'
import { useRouter } from 'next/router'
import { Nav } from '../../../components/Nav'
import SeoHead from '../../../components/SeoHead'
import { Column, Row } from '../../../components/Container'
import Link from 'next/link'

const Topics = () => {
	const router = useRouter()
	const { locale } = router
	const title =
		locale == 'pt-BR' ? 'AcademicAI - Tópcios' : 'AcademicAI - Topics'

	return (
		<>
			<SeoHead title={title} />
			<Row style={{ margin: 20 }}>
				<Column>
					<h1>
						{locale == 'pt-BR'
							? 'Modelo de Tópicos de Teses e Dissertações'
							: 'Thesis and Dissertation Topic Model'}
					</h1>
					<div>
						<p>
							{locale == 'pt-BR'
								? 'Modelo de tópicos de teses e dissertações compreendidas entre o período de 2013-2021.'
								: 'Model of topics for theses and dissertations comprised between the period 2013-2021.'}
						</p>

						<p>
							<Link href='/projects' passHref>
								{locale == 'pt-BR'
									? 'Voltar para projetos'
									: 'Back to projects'}
							</Link>
						</p>
					</div>
				</Column>
				<Column>
					<LDAvis
						data={LDAvisDataList[0]}
						modifyHistory={false}
						style={{ textAlign: 'center' }}
					/>
				</Column>
			</Row>
		</>
		// <ProjectsLayout helpPage='sucupirabot'>
		// 	<Head>
		// 		<title>AcademicAI - Gráficos</title>
		// 	</Head>
		// 	<Hero as='section' id='tesesTopics'>
		// 		<Row>
		// 			<Column>
		// 				<HeroTitle>
		// 					Modelo de tópicos de{' '}
		// 					<span>Teses e Dissertações</span>
		// 				</HeroTitle>
		// 				<HeroDescription>
		// 					Modelo de tópicos de teses e dissertações
		// 					compreendidas entre o período de 2013-2021.
		// 				</HeroDescription>
		// 			</Column>
		// 			<Column>
		// 				<LDAvis
		// 					data={LDAvisDataList[0]}
		// 					modifyHistory={false}
		// 					style={{ textAlign: 'center' }}
		// 				/>
		// 			</Column>
		// 		</Row>
		// 	</Hero>
		// </ProjectsLayout>
	)
}

export default Topics
