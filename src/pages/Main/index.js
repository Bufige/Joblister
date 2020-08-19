import React from 'react';


import Search from '../../components/Search';
import Jobs from '../../components/Jobs';

import {Container, Loading} from './styles';
import {useStoreContext} from '../../storeContext';
export default function Tag(props) {
	const {loading} = useStoreContext();
    return loading ? <Loading><i class="fas fa-spinner fa-spin fa-4x"></i></Loading> :  <Container>
		<Search />
		<Jobs/>
    </Container>
}