import React, {useEffect} from 'react';

import Tag from '../Tag';

import {Container, Column, Link } from './styles';

export default function Job({job}) {
    return <Container>
		<Column>
			<h3>{job.title}</h3>
		</Column>
		<Column>
			<Link href={job.html_url} target="_blank">
				Link
			</Link>
		</Column>
		<Column labels>
			<div className="tags">
			{ job.labels.map( (item, index) => 
				<Tag text={item.name} key={index}/>
			)}
			</div>
		</Column>
		<Column>
		{ new Date(job.created_at).toLocaleString()}
		</Column>
    </Container>
}