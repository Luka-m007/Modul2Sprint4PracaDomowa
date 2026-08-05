import styled, { keyframes } from 'styled-components'
import { useEffect } from 'react'
import { Btn, ModalListField } from '../index'

const fadeIn = keyframes`
	from { opacity: 0; }
	to { opacity: 1; }
`

const scaleIn = keyframes`
	from {
		opacity: 0;
		transform: scale(0.9);
	}
	to {
		opacity: 1;
		transform: scale(1);
	}
`

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
	animation: ${fadeIn} 0.2s ease-out;
`

const ModalContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 50px;
	background-color: ${({ theme }) => theme.cardBgc};
	border-radius: 8px;
	max-height: 90vh;
	animation: ${scaleIn} 0.25s ease-out;
`

const Title = styled.h2`
	font-size: 1.8rem;
	margin: 20px 0;
`

const ListField = styled.div`
	display: flex;
	flex-direction: column;
	overflow-y: auto;
	margin-bottom: 20px;
`

const Img = styled.img`
	border-radius: 50%;
	width: 300px;
	height: 300px;
	object-fit: cover;
`

const CloseBtn = styled(Btn)`
	width: auto;
`

export const Modal = ({ onClose, character }) => {
	useEffect(() => {
		document.body.style.overflow = 'hidden'
		return () => {
			document.body.style.overflow = ''
		}
	}, [])

	return (
		<Backdrop onClick={onClose}>
			<ModalContent onClick={e => e.stopPropagation()}>
				<Img src={character.imageUrl} alt={character.name} />
				<Title>{character.name}</Title>

				<ListField>
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
				</ListField>
				<CloseBtn onClick={onClose}>Close</CloseBtn>
			</ModalContent>
		</Backdrop>
	)
}
