import React from 'react';

import {Container} from './styles';

export default function Tag(props) {
    return <Container onClick={() => props.onSelect && props.onSelect(props.text)}>
        {props.text}
		{props.onClose &&
			<div class="close" onClick={props.onClose}>X</div>
		}
    </Container>
}