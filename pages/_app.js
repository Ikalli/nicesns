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

export default withRedux((initialState, options) => {
	const middlewares = [];
  const enhancer = compose(
    applyMiddleware(...middlewares),
  );

	const store = createStore(reducers, initialState, enhancer);
	return store;
})(NiceSns);