import React, { useEffect, useState } from 'react';
import {StoreProvider} from './storeContext';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import Footer from './components/Footer';

import Jobs from './components/Jobs';
import Search from './components/Search';

import Main from './pages/Main';

export default function App() {
	return <StoreProvider>
		<GlobalStyle />
		<Header/>
		<Main/>
		<Footer/>

	</StoreProvider>
}