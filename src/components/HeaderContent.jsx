import styled from 'styled-components'
import { useThemeMode, CustomSwitch } from './index'

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
				<h1>Disney APP</h1>
				<CustomSwitch onClick={() => setIsDark(!isDark)} />
			</HeaderWrapper>
		</>
	)
}
