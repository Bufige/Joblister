import styled, { css } from 'styled-components'

export const Container = styled.table`
    display: table;
	table-layout: auto;
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
	tfoot {
		display: table-header-group;
    	vertical-align: middle;
    	border-color: inherit;
		justify-content: center;
		td {
			justify-content: center;
			padding: 0;
			background: inherit;
			border-bottom: 0;
			margin-top: 30px;
		}
	}
`;
