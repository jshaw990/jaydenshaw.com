import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';

import { contactIsOpen } from './redux/contactSlice';
import { isPreviousVisitor } from './redux/cookieSlice';

import Header from './components/header/header.component';
import Hero from './components/hero/hero.component';
import Skills from './components/skills/skills.component';
import Projects from './components/projects/projects.component';
import Experience from './components/experience/experience.component';
import Footer from './components/footer/footer.component';
import ContactForm from './components/contact-form/contactForm.component';
import PreviousVisitorModal from './components/previous-visit/previousVisit.component';

import './App.scss';

function App() {
	const dispatch = useDispatch() 

	const toggleContact = useSelector(contactIsOpen);
	const prevVisitor = useSelector(isPreviousVisitor)

	const [cookies, setCookie] = useCookies(['user']);

	useEffect(() => {
		const getMyCookie = cookies['jaydenshaw.com'];

		const setCookieValues = (visitInt) => {
			const date = new Date();

			const [month, day, year] = [
				date.getUTCMonth() + 1,
				date.getUTCDate(),
				date.getUTCFullYear(),
			];

			const dateString = `${month}/${day}/${year}`;

			const cookieData = {
				lastVisit: dateString,
				numberOfVisits: visitInt,
			};

			const nextYear = new Date() 
			nextYear.setFullYear(date.getUTCFullYear() + 2) 

			console.log(nextYear)

			setCookie('jaydenshaw.com', cookieData, { path: '/', expires: nextYear });
		};

		if (getMyCookie) {
			dispatch(isPreviousVisitor())

			let visitInt = getMyCookie.numberOfVisits;

			setCookieValues(visitInt + 1)
		} else {
			console.log('value is false');

			setCookieValues(1)
		}
	}, [cookies, setCookie, dispatch]);

	return (
		<div className='App'>
			<Header />
			<div className='container'>
				<Hero />
				<Projects />
				<Skills />
				<Experience />
				{toggleContact && <ContactForm />}
				{prevVisitor && <PreviousVisitorModal />}
			</div>
			<Footer />
		</div>
	);
}

export default App;
