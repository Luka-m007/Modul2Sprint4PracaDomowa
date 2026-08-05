import styled from 'styled-components'
import { useThemeMode, CustomSwitch } from './index'

const HeadTitle = styled.h1`
	font-size: 2.7rem;
`

const HeaderWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 3px solid ${({ theme }) => theme.headerLine};
	padding: 30px 20px;
`

export const HeaderContent = () => {
	const { isDark, setIsDark } = useThemeMode()
	return (
		<>
			<HeaderWrapper>
				<HeadTitle>Disney APP</HeadTitle>
				<CustomSwitch isDark={isDark} onClick={() => setIsDark(!isDark)} />
			</HeaderWrapper>
		</>
	)
}
