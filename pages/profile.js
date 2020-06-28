import Head from 'next/head';
import Layout from '../components/Layout';

export default function Profile() {
	return(
		<>
			<Head>
				<title>NiceSNS</title>
				<link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.3.5/antd.css"
        />
			</Head>
			<Layout>
				<div>
					This is Profile
				</div>
			</Layout>
		</>
	);
}