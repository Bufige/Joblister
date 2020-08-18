import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
	height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
	background-color: #adb5bd;
	
    .copyrights {
		font-size: 1.1rem;
		cursor:pointer;
    }
	a {
        text-decoration: none;
        color: inherit;
    }


	outline: 0;
	user-select: none;

  	left: 0;
  	bottom: 0;
`;