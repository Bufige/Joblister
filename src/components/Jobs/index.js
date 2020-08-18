import React, { useState, useEffect } from 'react';

import {useStoreContext} from '../../storeContext';

import {Container} from './styles';
import Job from '../Job';
import Pagination from '../Pagination';


let chunkArray = (arr, chunk_sz) => {
	let chunks = [];
	let i = 0;
	while(i < arr.length) {
		chunks.push(arr.slice(i, i += chunk_sz));
	}
	return chunks;
};

export default function Jobs() {
	const {cjobs, setCjobs} = useStoreContext();
	const [cPage, setCPage] = useState(0);
	const perPage = 10;
	const [jobsOnPage, setJobsOnPage] = useState([]);
	let onSelect = (page, data) => {
		setCPage(page);
		setJobsOnPage([...data]);
	}

	useEffect( () => {
		setCPage(x => 0);
		if(cjobs) {
			let data = chunkArray(cjobs, perPage);
			if(data.length) {
				setJobsOnPage([...data[0]]);
			}
		}
	},[cjobs])
    return cjobs.length > 0 && <Container>
		<thead>
			<tr>
				<th>Title</th>
				<th>Tags</th>
				<th>Date</th>
			</tr>
		</thead>
		<tbody>
			{jobsOnPage.map((item, index) => <Job key={index} job={item}></Job>)}
		</tbody>
		<tfoot>
    		<tr>
				<td colSpan="3"><Pagination data={cjobs} onSelect={onSelect} perPage={perPage} currentPage={cPage}/></td>
    		</tr>
		</tfoot>
    </Container>
}