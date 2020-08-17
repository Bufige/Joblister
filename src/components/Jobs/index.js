import React, {} from 'react';

import {useStoreContext} from '../../storeContext';

import {Container} from './styles';
import Job from '../Job';


export default function Jobs() {
	const {cjobs} = useStoreContext();
    return <Container>
		{cjobs && cjobs.map((item, index) => <Job key={index} job={item}></Job>)}
    </Container>
}