import Axios from 'axios';

export const get = (url, config = {}) => {
	return Axios.get(url, config);
};
