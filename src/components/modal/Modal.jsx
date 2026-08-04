import styled from 'styled-components'
import { Btn, ModalListField } from '../index'

const Backdrop = styled.div`
	position: fixed;
	display: flex;
	flex-direction: column;
	align-items: center;

	gap: 30px;
	justify-content: center;
	width: 100%;
	height: 100%;
	backdrop-filter: blur(10px);
	left: 0;
	top: 0;
`

const ModalContent = styled.div`
	padding: 50px;
	background-color: ${({ theme }) => theme.cardBgc};
	border-radius: 8px;
`

const Img = styled.img`
	border-radius: 50%;
	width: 300px;
	height: 300px;
	object-fit: cover;
`

export const Modal = ({ onClose, character }) => {
	console.log('charactrer', character)
	return (
		<Backdrop>
			<ModalContent>
				<Img src={character.imageUrl} alt={character.name} />
				<h2>{character.name}</h2>
				<ModalListField character={character} fieldName='films'>
					Films
				</ModalListField>
				<ModalListField character={character} fieldName='tvShows'>
					TV Shows
				</ModalListField>
				<ModalListField character={character} fieldName='videoGames'>
					Video Games
				</ModalListField>
				<ModalListField character={character} fieldName='allies'>
					Allies
				</ModalListField>
				<ModalListField character={character} fieldName='enemies'>
					Enemies
				</ModalListField>
				<ModalListField character={character} fieldName='parkAttractions'>
					Park Attractions
				</ModalListField>
				<ModalListField character={character} fieldName='shortFilms'>
					Short Films
				</ModalListField>
				<Btn onClick={onClose}>Zamknij</Btn>
			</ModalContent>
		</Backdrop>
	)
}
