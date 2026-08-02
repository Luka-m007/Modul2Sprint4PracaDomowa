import { useFetchData, PictureCard } from './index'
import styled from 'styled-components'

const MainContentWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
	padding: 20px;
	/* margin: 5px; */
`

export const MainContext = () => {
	const { data, error, isLoading } = useFetchData()

	return (
		<MainContentWrapper>
			{console.log('dataAPI', data)}
			{isLoading && <p>Loading...</p>}
			{error && <p>Error fetching data</p>}
			{data &&
				data.data.map(character => (
					<PictureCard key={character._id} src={character.imageUrl} alt={`${character.name} image`}>
						{character.name}
					</PictureCard>
				))}
		</MainContentWrapper>
	)
}
