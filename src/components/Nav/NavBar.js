import styled from 'styled-components'
import { color, typography, spacing } from '../../theme'
import { mobile, phone } from '../../utils/media'
import { useWindowSize } from '../../utils/useWindowSize'
import { useRouter } from 'next/router'
import { NavItem } from './NavItem'

import { LangMenu } from './LangMenu'
import { useRef, useState, useEffect } from 'react'
import { Button } from '../Button'

const Logo = styled.img`
	font-size: ${typography.size.m2}rem;
	font-weight: ${typography.weight.bold};
	color: ${color.primary};
	max-width: 13rem;
	margin-top: 0.5rem;
`

const NavBarStyle = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	${mobile('flex-direction: column;')}
`

const NavMenu = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;
	${phone('flex-direction: column;')}
`

const Hamburger = styled(Button)`
	right: 0;
	top: 0;
	position: absolute;
	background-color: transparent;
	&:hover {
		background-color: transparent;
		box-shadow: none;
	}
`

const Bar = styled.span`
	display: block;
	width: 3rem;
	height: 3px;
	margin: 5px auto;
	-webkit-transition: all 0.3s ease-in-out;
	transition: all 0.3s ease-in-out;
	background-color: ${color.primary};
	${(props) =>
		props.times &&
		`
            &:nth-child(2) {
                opacity: 0;
            }
            &:nth-child(1) {
                transform: translateY(8px) rotate(45deg);
            }
            &:nth-child(3) {
                transform: translateY(-8px) rotate(-45deg);
            }
        
    `}
`

export const NavBar = () => {
	const [isMenuActive, setIsMenuActive] = useState(false)
	const ref = useRef(null)
	const router = useRouter()
	const { width } = useWindowSize()
	const { locale, pathname } = router
	const isSmallScreen = width <= 992

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				setIsMenuActive(false)
			}
		}

		document.addEventListener('click', handleClickOutside, true)
		return () => {
			document.removeEventListener('click', handleClickOutside, true)
		}
	}, [])

	return (
		<NavBarStyle ref={ref}>
			<NavItem href='/'>
				<Logo src='/logo.png' alt='AcademicAI' />
			</NavItem>
			{(!isSmallScreen || isMenuActive) && (
				<>
					<NavMenu>
						<NavItem href='/' active={pathname === '/'}>
							{locale == 'pt-BR' ? 'Início' : 'Home'}
						</NavItem>
						<NavItem href='/about' active={pathname === '/about'}>
							{locale == 'pt-BR' ? 'Sobre' : 'About'}
						</NavItem>
						<NavItem
							href='/projects'
							active={pathname === '/projects'}
						>
							{locale == 'pt-BR' ? 'Projetos' : 'Projects'}
						</NavItem>
						<NavItem
							href='/publications'
							active={pathname === '/publications'}
						>
							{locale == 'pt-BR'
								? 'Publicações'
								: 'Publications'}
						</NavItem>
						<NavItem
							href='/contact'
							active={pathname === '/contact'}
						>
							{locale == 'pt-BR' ? 'Contato' : 'Contact Us'}
						</NavItem>
					</NavMenu>
					<LangMenu router={router} />
				</>
			)}
			{isSmallScreen && (
				<Hamburger onClick={() => setIsMenuActive((prev) => !prev)}>
					<Bar times={isMenuActive} />
					<Bar times={isMenuActive} />
					<Bar times={isMenuActive} />
				</Hamburger>
			)}
		</NavBarStyle>
	)
}
