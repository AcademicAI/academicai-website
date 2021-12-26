import { css } from 'styled-components'

export const mobile = (inner) => css`
	@media (max-width: ${1000 / 16}em) {
		${inner};
	}
`

export const phone = (inner) => css`
	@media (max-width: ${650 / 16}em) {
		${inner};
	}
`

export const minBreakpoint = (breakpoint, inner) => css`
	@media (min-width: ${breakpoint / 16}em) {
		${inner};
	}
`

export const maxBreakpoint = (breakpoint, inner) => css`
	@media (max-width: ${breakpoint / 16}em) {
		${inner};
	}
`
