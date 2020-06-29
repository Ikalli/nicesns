import Head from 'next/head';
import PropTypes from 'prop-types';
import Layout from '../components/layout';

function NiceSns({ Component }) {
	return(
		<>
			<Head>
				<Title>NiceSNS</Title>
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
	Component: PropTypes.elementType
};

export default NiceSns;