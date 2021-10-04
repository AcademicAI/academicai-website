import { darken, rgba } from 'polished'
import styled from 'styled-components'

import { color, typography } from '../theme'

const getButtonAppearance = (appearance, loading = false) => {
	const style = appearance.endsWith('outline') ? 'outline' : 'filled'
	const colors = {
		default: color.medium,
		primary: color.primary,
		secondary: color.secondary,
		success: color.success,
		danger: color.danger,
		info: color.info,
		warning: color.warning,
	}

	if (style === 'outline') {
		appearance = appearance.split('-')[0]
		return `
            box-shadow: ${colors[appearance]} 0 0 0 1px inset;
            color: ${colors[appearance]};
            ${
				!loading &&
				`
                &:hover{
                    background: ${colors[appearance]};
                    color: ${color.lightest};
                }
                &:active {
                    background: ${colors[appearance]};
                    box-shadow: ${colors[appearance]} 0 0 0 1px inset;
                    color: ${color.lightest};
                }
                &:focus {
                    box-shadow: ${colors[appearance]} 0 0 0 1px inset, ${rgba(
					colors[appearance],
					0.4
				)} 0 1px 9px 2px;
                }
                &:focus:hover {
                    box-shadow: ${colors[appearance]} 0 0 0 1px inset, ${rgba(
					colors[appearance],
					0.2
				)} 0 8px 18px 0px;
                }
                `
			}
                
                
        }
            
        `
	} else {
		if (!(appearance in colors)) {
			appearance = 'default'
		}
		return `
            background: ${colors[appearance]};
            color: ${
				appearance === 'default' ? color.darkest : color.lightest
			};
            ${
				!loading &&
				` &:hover{
                    background: ${darken(0.07, colors[appearance])};
                }
                &:active {
                    box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
                }
                &:focus {
                    box-shadow: ${rgba(colors[appearance], 0.4)} 0 1px 9px 2px;
                }
                &:focus:hover {
                    box-shadow: ${rgba(
						colors[appearance],
						0.2
					)} 0 8px 18px 0px;
                }
                
                `
			}
        `
	}
}

export const Button = styled.button.attrs((props) => ({
	appearance: props.appearance || 'default',
}))`
	border: 0;
	cursor: pointer;
	display: inline-block;
	overflow: hidden;
	padding: ${(props) =>
		props.size === 'small'
			? '8px 16px'
			: props.size == 'large'
			? '14px 40px'
			: '14px 28px'};
	position: relative;
	text-align: center;
	text-decoration: none;
	transition: all 150ms ease-out;
	transform: translate3d(0, 0, 0);
	vertical-align: top;
	white-space: nowrap;
	opacity: 1;
	margin: 0;
	background: transparent;
	font-size: ${(props) =>
		props.size === 'small'
			? typography.size.s1
			: props.size == 'large'
			? typography.size.s3
			: typography.size.s2}rem;
	font-weight: ${typography.weight.bold};
	line-height: 1;
	font-family: ${typography.type.secondary};
	${(props) =>
		!props.loading &&
		`
        &:hover {
            transform: translate3d(0, -1px, 0);
            box-shadow: rgba(0, 0, 0, 0.2) 0 2px 6px 0;
        }
        &:active {
            transform: translate3d(0, 0, 0);
        }
        `}
	${(props) =>
		props.disabled &&
		`
        cursor: not-allowed;
        opacity: 0.5;
        &:hover {
            transform: none;
        }
    `}
    ${(props) =>
		props.unclickable &&
		`
        cursor: default;
        pointer-events: none;
        &:hover {
            transform: none;
        }
    `}
    ${(props) =>
		props.loading &&
		`
        cursor: progress;
        opacity: 0.7;
        &:hover {
            transform: none;
        }
    `}
     /* Obtem estilo do botão de acordo com a aparência dele */
    ${(props) => getButtonAppearance(props.appearance, props.loading)}
`
