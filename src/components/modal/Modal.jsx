import { Btn } from '../index'

export const Modal = ({ onClose, character }) => {
	return (
		<div>
			<img src={character.imageUrl} alt={character.name} />
			<h2>{character.name}</h2>
			<p>{character.description}</p>
			<Btn onClick={onClose}>Zamknij</Btn>
		</div>
	)
}
