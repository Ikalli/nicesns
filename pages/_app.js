import Head from 'next/head';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import { Container } from 'next/app';

function NiceSns({ Component }) {
	return(
		<Container>
			<Head>
				<title>NiceSNS</title>
				<link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.3.5/antd.css"
        />
      </Head>
      <Layout>
      	<Component />
    	</Layout>
  	</Container>
	);
};

NiceSns.PropTypes = {
	Component: PropTypes.elementType
};

export default NiceSns;