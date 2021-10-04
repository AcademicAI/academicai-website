import styled from 'styled-components'
import { color, typography } from '../../theme'
import { useRouter } from 'next/router'
import { NavItem } from './NavItem'

import { LangMenu } from './LangMenu'

const Logo = styled.img`
	font-size: ${typography.size.m2}rem;
	font-weight: ${typography.weight.bold};
	color: ${color.primary};
	max-width: 12rem;
	margin-top: 0.5rem;
`

const NavBarStyle = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const NavMenu = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const NavBar = () => {
	const router = useRouter()
	const { locale, pathname } = router

	return (
		<NavBarStyle>
			<NavItem href='/'>
				<Logo src='/logo.png' alt='AcademicAI' />
			</NavItem>
			<NavMenu>
				<NavItem href='/' active={pathname === '/'}>
					{locale == 'pt-BR' ? 'Início' : 'Home'}
				</NavItem>
				<NavItem href='/about' active={pathname === '/about'}>
					{locale == 'pt-BR' ? 'Sobre' : 'About'}
				</NavItem>
				<NavItem href='/projects' active={pathname === '/projects'}>
					{locale == 'pt-BR' ? 'Projetos' : 'Projects'}
				</NavItem>
				<NavItem
					href='/publications'
					active={pathname === '/publications'}
				>
					{locale == 'pt-BR' ? 'Publicações' : 'Publications'}
				</NavItem>
				<NavItem href='/contact' active={pathname === '/contact'}>
					{locale == 'pt-BR' ? 'Contato' : 'Contact Us'}
				</NavItem>
			</NavMenu>
			<LangMenu router={router} />
		</NavBarStyle>
	)
}
