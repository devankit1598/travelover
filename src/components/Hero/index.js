import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Video from "../../assets/videos/travel.mp4";
import { Button } from "../Button";
import {
	HeroBg, HeroContainer,
	HeroContent,
	HeroH1, HeroItems,
	HeroP, VideoBg
} from './hero.elements';

const Hero = () => {
	useEffect(() => {
		Aos.init({});
	}, []);

	return (
		<HeroContainer>
			<HeroBg>
				<VideoBg
					src={Video}
					type='video/mp4'
					autoPlay
					loop
					muted
					playsInline
				/>
			</HeroBg>
			<HeroContent>
				<HeroItems>
					<HeroH1
						data-aos='fade-up'
						data-aos-delay='50'
						data-aos-duration='1000'
					>
						Unreal Destinations
					</HeroH1>
					<HeroP
						data-aos='fade-up'
						data-aos-delay='200'
						data-aos-duration='1000'
					>
						Out of this world!
					</HeroP>
					<Button
						primary='true'
						big='true'
						round='true'
						to='/trips'
						data-aos='fade-up'
						data-aos-delay='350'
						data-aos-duration='1000'
					>
						Travel Now
					</Button>
				</HeroItems>
			</HeroContent>
		</HeroContainer>
	);
};

export default Hero;