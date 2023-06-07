import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
import styles from '../../styles/Layout.module.css';

export default function FirstPost() {
	return (
			<Layout>
        <Head>
          <title>First post</title>
        </Head>
        <h1 className={styles.header}>First post</h1>
      </Layout>
	);
}
