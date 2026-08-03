import { useState } from 'react'
import { createPortal } from 'react-dom'
import { useFetchData, PictureCard, PaginationCustom, Modal } from './index'
import styled from 'styled-components'

const MainContentWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
	width: 100%;
	gap: 20px;
	padding: 20px;
`

export const MainContent = () => {
	const { data, error, isLoading, page, setPage, totalPages } = useFetchData()
	const [selectedCharacter, setSelectedCharacter] = useState(null)

	const modal = createPortal(
		<Modal character={selectedCharacter} onClose={() => setSelectedCharacter(null)}></Modal>,
		document.body,
	)

	return (
		<>
			<MainContentWrapper>
				{console.log('dataAPI', data)}
				{isLoading && <p>Loading...</p>}
				{error && <p>Error fetching data</p>}
				{data &&
					data.data.map(character => (
						<PictureCard
							onSelect={character => {
								setSelectedCharacter(character)
							}}
							id={character._id}
							key={character._id}
							src={character.imageUrl}
							alt={`${character.name} image`}>
							{character.name}
						</PictureCard>
					))}

				{selectedCharacter && modal}
			</MainContentWrapper>
			<PaginationCustom count={totalPages} page={page} onChange={(e, value) => setPage(value)} />
		</>
	)
}
