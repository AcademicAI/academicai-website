import Link from 'next/link'
import styled from 'styled-components'

import { color, typography } from '../../theme'
import { Anchor } from '../Anchor'

const Wrapper = styled.li`
	margin-left: 5rem;
`

const NavLink = styled(Anchor)`
	font-weight: 400;
	color: ${color.darker};
	&:hover {
		color: ${color.primary};
	}
	${(props) =>
		props.active &&
		`
        color: ${color.primary};
        font-weight: ${typography.weight.bold};
    `}
`

export const NavItem = ({ href, active, children }) => (
	<Wrapper>
		<Link href={href ?? 'https://'} passHref>
			<NavLink active={active}> {children}</NavLink>
		</Link>
	</Wrapper>
)
