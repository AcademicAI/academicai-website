import styled from 'styled-components'

export const Banner = styled.div`
	padding: 18px;
	margin-top: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	min-height: ${(props) => (props.height ? props.height : '100vh')};
	background-image: url('/background.jpg');
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`
