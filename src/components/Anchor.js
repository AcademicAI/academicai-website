import { darken } from 'polished'
import styled from 'styled-components'

import { color } from '../theme'

export const Anchor = styled.a`
	display: inline-block;
	transition: transform 150ms ease-out, color 150ms ease-out;
	text-decoration: none;
	color: ${color.ocean};
	&:hover,
	&:focus {
		cursor: pointer;
		transform: translateY(-1px);
		color: ${darken(0.07, color.ocean)};
	}
	&:active {
		transform: translateY(0);
		color: ${darken(0.1, color.ocean)};
	}
	${(props) =>
		props.secondary &&
		`
            color: ${color.mediumdark};
            &:hover {
                color: ${color.dark};
            }
            &:active {
                color: ${color.darker};
            }
        `};
	${(props) =>
		props.tertiary &&
		`
            color: ${color.dark};
            &:hover {
                color: ${color.darkest};
            }
            &:active {
                color: ${color.mediumdark};
            }
        `};
	${(props) =>
		props.nochrome &&
		`
            color: inherit;
            &:hover,
            &:active {
                color: inherit;
                text-decoration: underline;
            }
        `};
	${(props) =>
		props.inverse &&
		`
            color: ${color.lightest};
            &:hover {
                color: ${color.lighter};
            }
            &:active {
                color: ${color.light};
            }
        `};
`
