import Aos from "aos";
import "aos/dist/aos.css";
import { graphql, useStaticQuery } from "gatsby";
import React, { useEffect } from "react";
import { ImLocation } from "react-icons/im";
import { Button } from "../Button";
import {
	ProductCard,
	ProductImg,
	ProductInfo, ProductsContainer,
	ProductsHeading,
	ProductTitle, ProductWrapper,
	TextWrap
} from './trips.elements';

const Trips = ({ heading }) => {
	useEffect(() => {
		Aos.init({});
	}, []);

	const data = useStaticQuery(graphql`
		query TripsQuery {
			allTripsJson {
				edges {
					node {
						img {
							childImageSharp {
								fluid {
									...GatsbyImageSharpFluid
								}
							}
						}
						alt
						button
						name
					}
				}
			}
		}
	`);

	function getTrips(data) {
		const tripsArray = [];
		data.allTripsJson.edges.forEach((item, index) => {
			tripsArray.push(
				<ProductCard
					key={index}
					data-aos='fade-down'
					data-aos-delay='200'
					data-aos-duration='1000'
				>
					<ProductImg
						src={item.node.img.childImageSharp.fluid.src}
						fluid={item.node.img.childImageSharp.fluid} //This is the source path of the image
						alt={item.node.alt}
					/>
					<ProductInfo>
						<TextWrap>
							<ImLocation />
							<ProductTitle>{item.node.name}</ProductTitle>
						</TextWrap>
						<Button
							to='/trips'
							primary='true'
							round='true'
							css={`
								position: absolute;
								top: 420px;
								font-size: 14px;
							`}
						>
							{item.node.button}
						</Button>
					</ProductInfo>
				</ProductCard>
			);
		});
		return tripsArray;
	}
	return (
		<ProductsContainer>
			<ProductsHeading>{heading}</ProductsHeading>
			<ProductWrapper>{getTrips(data)}</ProductWrapper>
		</ProductsContainer>
	);
};

export default Trips;
