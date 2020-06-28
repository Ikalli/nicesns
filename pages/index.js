import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>NiceSNS</title>
        <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.3.5/antd.css"
        />
      </Head>
      <Layout>
        <p>Helloworld!</p>
      </Layout>
    </>
  );
}
