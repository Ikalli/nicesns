import { createStore, compose, applyMiddleware } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import reducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga'

const initStore = (initialState, options) => {
	const sagaMiddleware = createSagaMiddleware();
	const middlewares = [sagaMiddleware];
	const enhancer = compose(applyMiddleware(...middlewares));
	sagaMiddleware.run(rootSaga);

	return createStore(reducer, initialState, enhancer);
}

export const wrapper = createWrapper(initStore);