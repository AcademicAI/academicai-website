import styled, { css } from 'styled-components'

import { minBreakpoint } from '../utils/media'
import { breakpoints, spacing } from '../theme'

const containerMaxWidths = {
	sm: 540,
	md: 720,
	lg: 1170,
	xl: 1370,
}

const setMaxWidth = (size) => {
	if (size in breakpoints) {
		return minBreakpoint(
			breakpoints[size],
			css`
				max-width: ${Math.max(containerMaxWidths[size])}px;
			`
		)
	}
	return minBreakpoint(
		breakpoints.lg,
		css`
			max-width: ${containerMaxWidths.lg}px;
		`
	)
}

export const Container = styled.div.attrs((props) => ({
	maxWidth: props.maxWidth || 'lg',
}))`
	width: 100%;

	margin-right: auto;
	margin-left: auto;

	${(props) =>
		!props.disableGutters &&
		css`
			padding-left: ${spacing.padding.medium}rem;
			padding-right: ${spacing.padding.medium}rem;

			${minBreakpoint(
				breakpoints.sm,
				`
                    padding-left: ${spacing.padding.large}rem;
                    padding-right: ${spacing.padding.large}rem;
                `
			)}
		`}

	${(props) =>
		props.maxWidth == 'xs'
			? minBreakpoint(
					breakpoints.xs,
					css`
						max-width: ${Math.max(breakpoints.xs, 444)}px;
					`
			  )
			: setMaxWidth(props.maxWidth)}
`

export const Row = styled.div`
	display: flex;
	flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
	flex-wrap: wrap;

	padding-left: -${spacing.padding.small}rem;
	padding-right: -${spacing.padding.small}rem;

	justify-content: center;
	align-items: center;
`

export const Column = styled.div.attrs((props) => ({
	grow: props.grow || '1',
	minScreenSize: props.minScreenSize || 'lg',
	justifyContent: props.justifyContent || 'center',
	alignItems: props.alignItems || 'center',
}))`
	display: flex;
	flex-direction: column;

	padding-left: ${spacing.padding.small}rem;
	padding-right: ${spacing.padding.small}rem;

	${(props) =>
		props.minScreenSize == 'sm' &&
		minBreakpoint(
			breakpoints.sm,
			css`
				flex: ${props.grow} 0;
			`
		)}

	${(props) =>
		props.minScreenSize == 'md' &&
		minBreakpoint(
			breakpoints.md,
			css`
				flex: ${props.grow} 0;
			`
		)}

    ${(props) =>
		props.minScreenSize == 'lg' &&
		minBreakpoint(
			breakpoints.lg,
			css`
				flex: ${props.grow} 0;
			`
		)}


    /* Colocar em uma variável */
    justify-content: ${(props) => props.justifyContent};
	align-items: ${(props) => props.alignItems};
`
