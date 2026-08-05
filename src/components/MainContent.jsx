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

const P = styled.p`
	font-size: 5rem;
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
				{isLoading && <P>Loading...</P>}
				{error && <P>Error fetching data</P>}
				{data &&
					data.data.map(character => (
						<PictureCard
							onSelect={() => {
								setSelectedCharacter(character)
							}}
							character={character}
							key={character._id}
						/>
					))}

				{selectedCharacter && modal}
			</MainContentWrapper>
			<PaginationCustom count={totalPages} page={page} onChange={(e, value) => setPage(value)} />
		</>
	)
}
