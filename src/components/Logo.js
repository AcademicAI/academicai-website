import styled from 'styled-components'
import { color, typography } from '../theme'

export const Logo = styled.h1`
	font-size: ${typography.size.l3}rem;

	> span {
		color: ${color.primary};
		position: relative;

		& :before {
			content: '';
			background-image: url(/capelo.png);
			background-size: 100% 100%;
			display: inline-block;

			height: 3.5rem;
			width: 4.5rem;

			position: absolute;
			top: 0;
			left: -9px;
			transform: rotate(5deg);
		}
	}
`
