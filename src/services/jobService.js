import axios from 'axios';

const URLS = [
	'https://api.github.com/repos/frontendbr/vagas/issues',
	'https://api.github.com/repos/backend-br/vagas/issues'
];

const api = axios.create({});

const jobService = {
    getAll: async () => {
        let data = [];
        for(let url of URLS) {
            await api.get(url).then( (res) => {
                for(let item of res.data) {
                    data.push(item);
                }
            });
		}
		return data;
    }
};

export default jobService;