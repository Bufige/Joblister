import styled from 'styled-components'

export const Container = styled.div`
	position: relative;
    padding: 8px 5px;
    background-color: #313131;
    color: #999;
    border-width: 1px 1px 2px 1px;
    border-style: solid;
    border-color: #222;
    border-radius: 5px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: .75em;
    line-height: 1em;
    box-shadow: 1px 1px 0 rgba(0,0,0,0.5);

	margin: 5px 5px;
	.close {
		position: absolute;
		top: 0;
		right: 0;
	}
	:hover {
		cursor: pointer;
	}
	user-select: none
`;