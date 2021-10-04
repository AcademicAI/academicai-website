import styled from 'styled-components'
import { color, spacing } from '../../theme'
import { NavBar } from './NavBar'

const Header = styled.header`
	position: fixed;
	width: 100%;
	background-color: ${color.lightest};
	border-bottom: ${spacing.borderWidth.default}rem solid ${color.primary};
`

export const Nav = () => {
	return (
		<Header>
			<NavBar />
		</Header>
	)
}
