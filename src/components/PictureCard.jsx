import { Btn } from './index.js'
import styled from 'styled-components'

const CardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	/* align-items: center; */
	/* justify-content: center; */
	width: 230px;
    height: 300px;
	border-radius: 5px;
	background-color: #e4e4e4;
	border: 2px solid black;
	box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
	flex: 1 1 auto;
`
const Image = styled.img`
	width: 100%;
	height: 50%;
`

const TitleAndButtonWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex: 1 1 auto;
	padding: 10px;
`
const Title = styled.h2`
    font-size: 1.4rem;
    margin: .5rem 0 0;
`

export const PictureCard = ({ src, alt, children }) => {
	return (
		<CardWrapper>
			<Image src={src} alt={alt} />
			<TitleAndButtonWrapper>
				<Title>{children}</Title>
				<Btn>Learn More</Btn>
			</TitleAndButtonWrapper>
		</CardWrapper>
	)
}
