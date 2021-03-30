import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { StatsData } from "../../data/StatsData";
import {
	Description, Heading,
	Icon, StatsBox, StatsContainer,
	Title, Wrapper
} from './stats.elements';

const Stats = () => {
	useEffect(() => {
		Aos.init({});
	}, []);

	return (
		<StatsContainer>
			<Heading
				data-aos='fade-right'
				data-aos-delay='50'
				data-aos-duration='1000'
			>
				Why Choose Us?
			</Heading>
			<Wrapper>
				{StatsData.map((item, index) => {
					return (
						<StatsBox
							key={index}
							data-aos='fade-right'
							data-aos-delay='150'
							data-aos-duration='1000'
						>
							<Icon>{item.icon}</Icon>
							<Title>{item.title}</Title>
							<Description>{item.desc}</Description>
						</StatsBox>
					);
				})}
			</Wrapper>
		</StatsContainer>
	);
};

export default Stats;