import React, {useState, useEffect} from 'react';

import Tag from '../Tag';
import { Container, Box, Input, SearchBar, Tags, Info} from './styles';


import {useStoreContext} from '../../storeContext';

export default function Search() {
	const [tags, setTags] = useState([]);
	const [stags, setStags] = useState([]);

	const [text, setText] = useState();
	const [orderBy, setOrderBy] = useState(true)
	const {jobs, cjobs, setCjobs, setJobs} = useStoreContext();


	useEffect( () => {
		sortBy({text: text, orderBy: orderBy});
	}, []);
	const sortBy = ({text = undefined, tags = [], orderBy = 0} = {}) => {
		if (text === tags && text === orderBy && tags.length === 0) {
			setCjobs([...jobs]);
		} else {
			let data = jobs;
			
			if(text) {
				let words = text.toLowerCase().replace(/\s+/g,' ').trim().split(' ');
				data = data.filter(item => {
					let inTitle = false;
					let inBody = false;
					
					let title = item.title.toLowerCase();
					let body = item.body.toLowerCase();

					for(let word of words) {
						if(title.includes(word)) {
							inTitle = true;
							break;
						}
					}
					for(let word of words) {
						if(body.includes(word)) {
							inBody = true;
							break;
						}
					}
					return inTitle || inBody;
				});
			}
			if (tags.length > 0) {
				data = data.filter(item => {
					let labels = [];
					item.labels.forEach(l => {
						labels.push(l.name.toLowerCase());
					});

					let ok = true;
					for (let label of tags) {
						ok = labels.includes(label);
						if (!ok) {
							break;
						}
					}
					return ok;
				});
			} 
			if(orderBy) {
				data.sort((a,b) => new Date(b.created_at) - new Date(a.created_at) );
			}
			else {
				data.sort((a,b) => new Date(a.created_at) - new Date(b.created_at));
			}
			setCjobs([...data]);
		}
	}
	const onSearch = (e) => {
		sortBy({text: text, orderBy: orderBy});
	}
	const onReset = () => {
		setCjobs(jobs);
		setStags([]);
		setText("");
	}
	const onSelect = (temp) => {
		let data = stags;
		if(data.includes(temp)) {
			data = data.filter(x => x !== temp);
		} else {
			data.push(temp);
		}
		setStags([...data]);
		sortBy({text: text, tags: data, orderBy: orderBy})
	}
	useEffect(() => {
		let labels = [];
		jobs.forEach(item => {
			item.labels.forEach(l => {
				labels.push(l.name.toLowerCase());
			});
		});
		labels = Array.from(new Set(labels));
		labels.sort();
		setTags(labels);
	},[cjobs,jobs]);
    return <Container>
        <Box>
			<SearchBar>
				<Input value={text} onChange={ (e) => setText(e.target.value)}/>
				<i class="fas fa-search fa-lg" onClick={onSearch}></i>
				<i class="fas fa-eraser fa-lg" onClick={onReset}></i>
			</SearchBar>
			<Info>All available tags</Info>

			<Tags>
				{tags && tags.map((item, index) => <Tag key={index} text={item} onSelect={onSelect}/>)}
			</Tags>
			
			
			{stags.length > 0 &&
				<>
				<Info>Selected Tags</Info>
				<Tags>
				{stags && stags.map((item, index) => <Tag text={item} key={index} onSelect={onSelect}/>)}
				</Tags>
				</>
			}
			<Info>Showing {cjobs.length} of {jobs.length}</Info>
        </Box>
    </Container>
}