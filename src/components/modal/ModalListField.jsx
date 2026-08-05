import styled from 'styled-components'

const Title = styled.h2`
	font-size: 1.5rem;
	margin: 5px 0;
`

const List = styled.ul`
	font-size: 1.3rem;
	padding-left: 20px;
`

export const ModalListField = ({ character, fieldName, children }) => {
	return (
		<div>
			{character[fieldName] && character[fieldName].length > 0 && (
				<>
					<Title>{children}</Title>
					<List>
						{character[fieldName].map(item => (
							<li key={item}>{item}</li>
						))}
					</List>
				</>
			)}
		</div>
	)
}
