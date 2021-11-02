import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { previousVisitor, isPreviousVisitor } from '../../redux/cookieSlice';
import { contactIsSent, toggleIsOpen } from '../../redux/contactSlice';

import './previousVisit.styles.scss';

const PreviousVisitorModal = () => {
	const visitor = useSelector(previousVisitor);
	const isSent = useSelector(contactIsSent,);
	const dispatch = useDispatch();

	return (
		<div>
			{visitor && !isSent && (
				<div className='previous-visitor'>
					<div
						onClick={() => dispatch(isPreviousVisitor())}
						className='close-icon'
					>
						<i className='far fa-times-circle'></i>
					</div>
					<div className='form-title'>Welcome back</div>
					<div className='form-submit' onClick={() => dispatch(toggleIsOpen())}>
						Download Resume
					</div>
				</div>
			)}
		</div>
	);
};

export default PreviousVisitorModal;
