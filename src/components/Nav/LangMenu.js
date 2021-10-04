import { Anchor } from '../Anchor'
import { Button } from '../Button'
import styled from 'styled-components'
import { color } from '../../theme'
import { useEffect, useRef, useState } from 'react'

const Menu = styled.ul`
	display: flex;
	justify-content: space-around;
	align-items: center;
`

const Item = styled.li`
	position: relative;
	padding-right: 2.5rem;
`
const LangButton = styled(Button)`
	background: transparent
		url(${(props) => (props.en ? '/icons/usa.png' : '/icons/brasil.png')})
		10px 5px no-repeat;
	background-size: 30px;
	padding-left: 5rem;

	&:hover {
		background: transparent url('/icons/brasil.png') 10px 5px no-repeat;
		background-size: 30px;
		transform: none;
		box-shadow: none;

		${(props) =>
			props.en &&
			`
				background: transparent url('/icons/usa.png') 10px 5px no-repeat;
				background-size: 30px;
        `}
	}
`

const MenuOptions = styled.div`
	width: 20rem;
	position: absolute;
	color: ${color.dark};
	background-color: ${color.lightest};
	border-radius: 1rem;
	right: 4rem;
	top: 6rem;
	box-shadow: 0px 10px 26px -10px rgba(0, 0, 0, 0.53);
	/* z-index: 1; */
	font-size: 1.4rem;

	& p {
		margin: 1rem;
	}
	& ul {
		margin: 1rem;
		list-style: none;
		& :not(:last-of-type) {
			border-bottom: 1px solid ${color.medium};
		}
		& li {
			& :hover {
				background-color: ${color.light};
			}
		}
	}
`

export const LangMenu = ({ router }) => {
	const { locale } = router
	const { pathname, query } = router

	const [isToggleMenuActive, setIsToggleMenuActive] = useState(false)
	const langRef = useRef(null)

	useEffect(() => {
		const handleClick = (event) => {
			if (langRef.current && !langRef.current.contains(event.target)) {
				setIsToggleMenuActive(false)
			}
		}
		if (!isToggleMenuActive) return
		document.addEventListener('click', handleClick, true)
		return () => {
			document.removeEventListener('click', handleClick, true)
		}
	}, [isToggleMenuActive])

	const changeLanguage = (e, lang) => {
		e.preventDefault()
		setIsToggleMenuActive(false)
		router.push({ pathname, query }, router.asPath, {
			locale: lang === 'en-US' ? lang : false,
		})
	}

	return (
		<Menu>
			<Item ref={langRef}>
				{locale === 'pt-BR' ? (
					<LangButton
						onClick={() => setIsToggleMenuActive((prev) => !prev)}
					>
						Idioma <i className='fas fa-caret-down'></i>
					</LangButton>
				) : (
					<LangButton
						en
						onClick={() => setIsToggleMenuActive((prev) => !prev)}
					>
						Language <i className='fas fa-caret-down'></i>
					</LangButton>
				)}
				{isToggleMenuActive && (
					<MenuOptions>
						<p>
							{locale == 'pt-BR'
								? 'Alterar idioma'
								: 'Change language'}
						</p>

						<ul>
							<li>
								<LangButton
									style={{ color: color.darker }}
									onClick={(e) => changeLanguage(e, 'pt-Br')}
								>
									Português - BR
								</LangButton>
							</li>
							<li>
								<LangButton
									en
									style={{ color: color.darker }}
									onClick={(e) => changeLanguage(e, 'en-US')}
								>
									English - US
								</LangButton>
							</li>
						</ul>
					</MenuOptions>
				)}
			</Item>
			<Item>
				<Anchor
					href='https://github.com/academicai'
					target='_blank'
					rel='noreferrer'
					nochrome
				>
					<i className='fab fa-github'></i> Github{' '}
				</Anchor>
			</Item>
		</Menu>
	)
}
