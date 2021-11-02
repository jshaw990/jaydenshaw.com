import React, { useState } from 'react';
import { send } from 'emailjs-com';
import { useSelector, useDispatch } from 'react-redux';

import {
	toggleIsOpen,
	toggleIsSent,
	contactIsOpen,
	contactIsSent,
} from '../../redux/contactSlice';

import './contactForm.styles.scss';

import PDF from '../../assets/Jayden_Shaw_Resume.pdf';

const ContactForm = () => {
	const isOpen = useSelector(contactIsOpen);
	const isSent = useSelector(contactIsSent);
	const dispatch = useDispatch();

	const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
	const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
	const USER_ID = process.env.REACT_APP_USER_ID;

	const [toSend, setToSend] = useState({
		name: '',
		company: '',
		email: '',
		phone: '',
		time: '',
	});

	const handleSubmit = (event) => {
		event.preventDefault();

		window.grecaptcha.ready(() => {
			window.grecaptcha
				.execute('6Le-4wsdAAAAAGcRHKsgc1--nJYfWcdZJTEVubny', {
					action: 'submit',
				})
				.then((token) => {
					const currentTime = Date().toLocaleString();
					console.log(currentTime);
					setToSend({ ...toSend, time: currentTime });
					send(SERVICE_ID, TEMPLATE_ID, toSend, USER_ID)
						.then((response) => {
							console.log('SENT MESSAGE:', response.status, response.text);
							dispatch(toggleIsSent());
						})
						.catch((error) => {
							console.log('ERROR: ', error);
						});
				});
		});
	};

	const handleChange = (event) => {
		setToSend({ ...toSend, [event.target.name]: event.target.value });
	};

	return (
		<div>
			{isOpen && (
				<div className='contact-form'>
					{isSent ? (
						<div className='contact-me'>
							<div
								onClick={() => dispatch(toggleIsOpen())}
								className='close-icon'
							>
								<i className='far fa-times-circle'></i>
							</div>
							Thank you for your interest!
							<br />
							Click the button below to download my resume.
							<a
								href={PDF}
								target='_blank'
								download
								rel='noreferrer'
								className='form-submit'
							>
								Download Resume
							</a>
						</div>
					) : (
						<div>
							<div
								onClick={() => dispatch(toggleIsOpen())}
								className='close-icon'
							>
								<i className='far fa-times-circle'></i>
							</div>
							<form method='POST' onSubmit={handleSubmit}>
								<div className='form-title'>Download Resume</div>
								<div className='field-set'>
									<label>Name:</label>
									<input
										type='text'
										name='name'
										value={toSend.name}
										onChange={handleChange}
										required
									/>
								</div>
								<div className='field-set'>
									<label>Company:</label>
									<input
										type='text'
										name='company'
										value={toSend.company}
										onChange={handleChange}
									/>
								</div>
								<div className='field-set'>
									<label>Email:</label>
									<input
										type='email'
										name='email'
										value={toSend.email}
										onChange={handleChange}
										required
									/>
								</div>
								<div className='field-set'>
									<label>Phone:</label>
									<input
										type='tel'
										name='phone'
										value={toSend.phone}
										onChange={handleChange}
									/>
								</div>
								<div className='field-set contact-me'>
									<div className='form-button-cont'>
										<input
											type='submit'
											value='Download Resume'
											className='form-submit'
										/>
									</div>
								</div>
							</form>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default ContactForm;
