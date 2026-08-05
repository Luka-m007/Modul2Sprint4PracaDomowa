import styled from 'styled-components'

const Button = styled.button`
	border-radius: 8px;
	border: 1px solid transparent;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	width: 100%;
	background-color: rgb(0, 147, 210);
	text-align: center;
	padding: 0.5em;
	font-size: 1.3rem;
	text-transform: uppercase;
	cursor: pointer;
	color: ${({ theme }) => theme.text};
	transition:
		background-color 0.3s,
		color 0.3s;
	&:hover {
		background-color: rgb(0, 120, 180);
	}
`

export const Btn = ({ children, ...rest }) => {
	return <Button {...rest}>{children}</Button>
}
