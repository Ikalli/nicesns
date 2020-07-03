import { createStore, compose, applyMiddleware } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import reducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga'

const initStore = (initialState, options) => {
	const sagaMiddleware = createSagaMiddleware();
	const middlewares = [sagaMiddleware];
	const enhancer = compose(applyMiddleware(...middlewares));
	const store = createStore(reducer, initialState, enhancer);
	sagaMiddleware.run(rootSaga);
	return store;
}

export const wrapper = createWrapper(initStore);