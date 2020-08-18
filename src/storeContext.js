import React, {createContext, useState, useContext, useEffect} from 'react';

import jobService from './services/jobService';
 
export const StoreContext = createContext();

const StoreProvider = (props) => {
	const [jobs,setJobs] = useState([]);
	const [cjobs, setCjobs] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect( () => {
		setLoading(true);
		
		jobService.getAll().then(res => {
			setCjobs(res);
			setJobs(res);
			setLoading(false);
		});
	}, []);
	const storeData = {
		jobs, setJobs,
		cjobs, setCjobs,
		loading
	}

	return <StoreContext.Provider value={storeData} {...props}/>
}


const useStoreContext = () => {
	return useContext(StoreContext);
}

export {StoreProvider, useStoreContext};