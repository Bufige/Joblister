import React, {createContext, useState, useContext, useEffect} from 'react';

import jobService from './services/jobService';
 
export const StoreContext = createContext();

const StoreProvider = (props) => {
	const [jobs,setJobs] = useState([]);
	const [cjobs, setCjobs] = useState([]);

	useEffect( () => {
		jobService.getAll().then(res => {
			setCjobs(res);
			setJobs(res);
		});
	}, []);
	const storeData = {
		jobs, setJobs,
		cjobs, setCjobs
	}

	return <StoreContext.Provider value={storeData} {...props}/>
}


const useStoreContext = () => {
	return useContext(StoreContext);
}

export {StoreProvider, useStoreContext};