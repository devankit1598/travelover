import "aos/dist/aos.css";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import {
	ColumnOne,
	ColumnTwo,
	ContentWrapper,
	Description,
	Image,
	Testimonial,
	TestimonialsContainer,
	TopLine
} from "./testimonials.elements";

const Testimonials = () => {
	const data = useStaticQuery(graphql`
		query MyQuery {
			allFile(
				filter: {
					ext: { regex: "/(jpg)|(png)|(jpeg)/" }
					name: { in: ["testimonial-1", "testimonial-2"] }
				}
			) {
				edges {
					node {
						childImageSharp {
							fluid {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			}
		}
	`);
	return (
		<TestimonialsContainer>
			<TopLine>Testimonials</TopLine>
			<Description>What People are Saying</Description>
			<ContentWrapper>
				<ColumnOne>
					<Testimonial
						data-sal='slide-down'
						data-sal-delay='100'
						//  data-sal-easing="ease"
					>
						<IoMdCheckmarkCircleOutline
							css={`
								color: #3fffa8;
								font-size: 2rem;
								margin-bottom: 1rem;
							`}
						/>
						<h3>Sean Michels</h3>
						<p>
							"The greatest experience of my life ! It was so much
							fun exploring the mountains and they made it super
							easy to book my trips and accomadation."
						</p>
					</Testimonial>
					<Testimonial data-sal='slide-up' data-sal-delay='100'>
						<FaRegLightbulb
							css={`
								color: #f9b19b;
								font-size: 2rem;
								margin-bottom: 1rem;
							`}
						/>
						<h3>David Alba</h3>
						<p>
							"It was so easy to set up my trips ! They answered
							all my questions right away and gave me the best
							price out of all the companies I researched."
						</p>
					</Testimonial>
				</ColumnOne>
				<ColumnTwo>
					{data.allFile.edges.map((image, key) => (
						<Image
							data-sal='zoom-in'
							data-sal-delay='200'
							data-sal-easing='ease'
							key={key}
							fluid={image.node.childImageSharp.fluid}
						/>
					))}
				</ColumnTwo>
			</ContentWrapper>
		</TestimonialsContainer>
	);
};

export default Testimonials;