import styled from 'styled-components'
import { color, spacing } from '../../theme'
import { NavBar } from './NavBar'

const Header = styled.header`
	position: fixed;
	width: 100%;
	background-color: ${color.lightest};
	border-bottom: ${spacing.borderWidth.default}rem solid ${color.primary};
	z-index: 1;
	top: 0%;
`

export const Nav = () => {
	return (
		<Header>
			<NavBar />
		</Header>
	)
}
