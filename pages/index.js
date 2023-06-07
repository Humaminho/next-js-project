import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>Hello I'm drani sani, I'm a <b>web developer</b> please don't contact me.</p>
				<p>
					(Check out my blog <Link href="/posts/first-post">here</Link>
					.)
				</p>
			</section>
		</Layout>
	);
}
