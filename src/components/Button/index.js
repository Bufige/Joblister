import React from 'react';

import {Container} from './styles';

export default function Tag(props) {
    return <Container onClick={props.onClick}>
        {props.text}
    </Container>
}