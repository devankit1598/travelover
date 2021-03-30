import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";

const About = () => (
	<Layout>
		<SEO title='About Us' />

		<Testimonials />
		<Stats />
	</Layout>
);

export default About;
