import './App.css'
import { MainContent, HeaderContent, ThemeProviderWrapper } from './components/index'

export function App() {
	return (
		<>
			<ThemeProviderWrapper>
				<HeaderContent />
				<MainContent />
			</ThemeProviderWrapper>
		</>
	)
}
