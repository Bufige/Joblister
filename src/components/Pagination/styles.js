import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 25px;
`;

export const Page = styled.div`
	display: flex;
	width: 32px;
	height: 32px;
	border-radius: 50%;
	background-color: #3a7fff;
    text-decoration: none;
    text-align: center;
    line-height: 30px;
    font-size: 14px;
    cursor: pointer;
    user-select: none;
	align-items: center;
	justify-content: center;

	margin-left: 5px;
	transition: transform .2s ease-in-out;
	:hover {
		transform: scale(1.1);
	}
	cursor: pointer;
	color: white;
	&.selected {
		background-color: #f0f0f0;
        color: black;
	}
`; 