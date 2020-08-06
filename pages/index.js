import Head from 'next/head';
import Layout from '../components/layout/Layout';
import Work from '../components/home/Work';
import Blog from '../components/home/Blog';
import Hero from '../components/home/Hero';

const Home = () => {
	return (
		<Layout>
			<Hero />
			<Work />
			<Blog />
		</Layout>
	);
};

export default Home;
