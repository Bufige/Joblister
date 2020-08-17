import React, { useEffect, useState } from 'react';
import {StoreProvider, useStoreContext} from './storeContext';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import Jobs from './components/Jobs';
import Search from './components/Search';

export default function App() {
	return <StoreProvider>
		<GlobalStyle />
		<Header />
		<Search />
		<Jobs/>
	</StoreProvider>
}