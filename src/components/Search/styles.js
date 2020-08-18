import styled, { css } from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
	i {
		cursor: pointer;
		margin-left: 10px;
	}
`;

export const Box = styled.div`
    margin: 0 auto;
	width: 50%;
	margin-bottom: 75px;

	@media(max-width: 800px) {
		width: 85%;
	}
` 
export const SearchBar = styled.div`
	width: 100%;
	height: 25px;
	display: flex;
	align-items: center;
	
`; 
export const Input = styled.input`
    width: 100%;
    height: 100%;
	border: solid 2px grey;
	border-radius: 10px;
	padding-left: 10px;
`;

export const Tags = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

export const Info = styled.h3`
	text-align: center;
	margin: 15px 0;
`;
