import Head from 'next/head';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import withRedux from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../reducers';


function NiceSns({ Component, store }) {
	return(
		<Provider store={store}>
			<Head>
				<title>NiceSNS</title>
				<link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.3.5/antd.css"
        />
      </Head>
      <Layout>
      	<Component />
    	</Layout>
  	</Provider>
	);
};

NiceSns.PropTypes = {
	Component: PropTypes.elementType,
	store: PropTypes.object,
};

const configureStore = (initialState, options) => {
	const middlewares = [];
	
	const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    process.env.NODE_ENV !== 'production'
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose;

  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares),
    // other store enhancers if any
  );

	const store = createStore(reducers, initialState, enhancer);
	return store;
}

export default withRedux(configureStore)(NiceSns);