import React from "react";
import Email from "../components/Email";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import Trips from "../components/Trips";

const IndexPage = () => (
	<Layout>
		<SEO title='Home' />
		<Hero />
		<Trips heading='Our Favourite Destinations' />
		<Testimonials />
		<Stats />
		<Email />
	</Layout>
);

export default IndexPage;