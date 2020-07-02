import Head from 'next/head';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import withRedux from 'next-redux-wrapper';
import { createStore } from 'redux';
import reducer from '../reducers';


function NiceSns({ Component }) {
	return(
		<>
			<Head>
				<title>NiceSNS</title>
				<link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.3.5/antd.css"
        />
      </Head>
      <Layout>
      	<Component />
    	</Layout>
  	</>
	);
};

NiceSns.PropTypes = {
	Component: PropTypes.elementType,
	store: PropTypes.object,
};

export default withRedux((initialState, options) => {
	const store = createStore(reducer, initialState);
	return store;
})(NiceSns);