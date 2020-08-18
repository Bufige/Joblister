import React, { useEffect } from 'react';

import {Container, Page} from './styles';

let chunkArray = (arr, chunk_sz) => {
	let chunks = [];
	let i = 0;
	while(i < arr.length) {
		chunks.push(arr.slice(i, i += chunk_sz));
	}
	return chunks;
};

export default function Pagination(props) {
	let perPage = props.perPage || 10;
	let cPage = props.currentPage || 0;
	let data = chunkArray(props.data, perPage);

	let totalPages = data.length;

	let pages = [0];	
	if(cPage - 2 > 0) {
		pages.push(cPage - 2);
	}
	if(cPage - 1 > 0) {
		pages.push(cPage - 1);
	}
	if(cPage > 0) {
		pages.push(cPage);
	}
	if(cPage + 1 < totalPages) {
		pages.push(cPage + 1);
	}
	if(cPage + 2 < totalPages) {
		pages.push(cPage + 2);
	}
	if(cPage + 3 < totalPages) {
		pages.push(totalPages - 1);
	}
	function onSelect(page) {
		if(props.onSelect) {
			props.onSelect(page, data[page]);
		}
	}
	useEffect( () => {
		props.onSelect(cPage, data[cPage]);
	}, []);

	return <Container>
		{pages.map( (item, index) => {
			return <Page className={cPage === item && "selected"} key={index} onClick={() => onSelect(item)}>{item + 1}</Page>
		})}
	</Container>
}