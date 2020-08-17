import React, {useEffect} from 'react';

import Tag from '../Tag';

import {Container, Column, Link } from './styles';

export default function Job({job}) {
    return <Container>
		<Column>
			{job.title}
		</Column>
		<Column>
			<Link href={job.html_url} target="_blank">
				Link
			</Link>
		</Column>
		<Column labels>
			{ job.labels.map( (item, index) => 
				<Tag text={item.name} key={index}/>
			)}
		</Column>
		<Column>
		{ new Date(job.created_at).toLocaleString()}
		</Column>
    </Container>
}