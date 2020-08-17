import styled, { css } from 'styled-components'

export const Container = styled.tr`
	height: 150px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
`;

export const Column = styled.td`
    text-align: center;
    align-items:center;
	.tags {
		display: flex;
		${props => (props.logo && css`text-align: left;`)
        || (props.labels && css`display:flex;flex-wrap: wrap;`)
    }
`;

export const Link = styled.a`
    text-decoration: none;
`;