import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Button } from "../Button";
import {
	EmailContainer,
	EmailContent,
	FormWrap
} from './email.elements';

const Email = () => {
	useEffect(() => {
		Aos.init({});
	}, []);

	return (
		<EmailContainer>
			<EmailContent>
				<h1
					data-aos='fade-down'
					data-aos-delay='50'
					data-aos-duration='1000'
				>
					Get Access to Exclusive Offers
				</h1>
				<p
					data-aos='fade-down'
					data-aos-delay='100'
					data-aos-duration='1000'
				>
					Sign up for your newsletter below to get $100 off your first
					trip!
				</p>
				<form action='#'>
					<FormWrap
						data-aos='fade-up'
						data-aos-delay='100'
						data-aos-duration='1000'
					>
						<label htmlFor='email'>
							<input
								type='email'
								placeholder='Enter your Email'
								id='email'
							/>
						</label>
						<Button
							as='button'
							type='submit'
							primary='true'
							round='true'
							css={`
								height: 48px;
								@media screen and (max-width: 768px) {
									width: 100%;
									min-width: 350px;
								}
								@media screen and (max-width: 400px) {
									width: 100%;
									min-width: 250px;
								}
							`}
						>
							Sign Up
						</Button>
					</FormWrap>
				</form>
			</EmailContent>
		</EmailContainer>
	);
};

export default Email;