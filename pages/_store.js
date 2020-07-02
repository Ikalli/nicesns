import { createStore } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import reducer from '../reducers';

const initStore = () => {
	return createStore(reducer);
}

export const wrapper = createWrapper(initStore);