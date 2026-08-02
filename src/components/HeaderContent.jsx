import styled from 'styled-components'

const HeaderWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 3px solid #000000;
	padding: 30px 20px;
`

export const HeaderContent = () => {
	return (
		<>
			<HeaderWrapper>
				<h1>Disney APP</h1>
				<div>Tutaj będzie jeszcze motyw Theme</div>
			</HeaderWrapper>
		</>
	)
}
