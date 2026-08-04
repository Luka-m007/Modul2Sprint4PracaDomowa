export const ModalListField = ({ character, fieldName, children }) => {
	console.log(`character3`, character)
	return (
		<div>
			{character[fieldName] && character[fieldName].length > 0 && (
				<>
					<h2>{children}</h2>
					<ul>
						{character[fieldName].map(item => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</>
			)}
		</div>
	)
}
