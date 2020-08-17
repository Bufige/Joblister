import styled, { css } from 'styled-components'

export const Container = styled.table`
    display: table;
	table-layout: fixed;
	margin: 10px 0;
    width: 100%;

	border-collapse: collapse;
  	border-radius: 1em;
  	overflow: hidden;

	th, td {
  		padding: 1em;
  		background: #ddd;
  		border-bottom: 2px solid white; 
	}
	tr { 
    	display: table-row; 
	}
	td { 
    	display: table-cell;
	}
`;
