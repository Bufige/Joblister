import React, {} from 'react';

import {useStoreContext} from '../../storeContext';

import {Container} from './styles';
import Job from '../Job';


export default function Jobs() {
	const {cjobs} = useStoreContext();
    return cjobs.length > 0 && <Container>
		<thead>
			<tr>
				<th>Title</th>
				<th>Url</th>
				<th>Tags</th>
				<th>Date</th>
			</tr>
		</thead>
		<tbody>
			{cjobs.map((item, index) => <Job key={index} job={item}></Job>)}
		</tbody>
    </Container>
}