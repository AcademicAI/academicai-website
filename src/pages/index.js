import styled from 'styled-components'
import SeoHead from '../components/SeoHead'
import { Nav } from '../components/Nav'

const Title = styled.h1`
	font-size: 50px;
	color: red;
`

export default function Home() {
	return (
		<>
			<SeoHead title='AcademicAI - Página Inicial' />
			<Nav />
			<Title>1</Title>
		</>
	)
}
