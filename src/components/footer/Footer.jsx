import React from 'react';
import './footer.css';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__container container'>
				<h1 className='footer__title'>Mikhail</h1>

				<ul className='footer__list'>
					<li>
						<a href='#about' className='footer__link'>
							About
						</a>
					</li>
					<li>
						<a href='#portfolio' className='footer__link'>
							Portfolio
						</a>
					</li>
					<li>
						<a href='#' className='footer__link'>
							Home
						</a>
					</li>
				</ul>

				<div className='footer__social'>
					<a
						href='https://www.instagram.com/svojest'
						className='home__social-icon'
						target='_blank'
						rel='noreferrer'
					>
						<i className='uil uil-instagram'></i>
					</a>
					<a
						href='https://github.com/Svojest'
						className='home__social-icon'
						target='_blank'
						rel='noreferrer'
					>
						<i className='uil uil-github'></i>
					</a>
					<a
						href='https://github.com/Svojest'
						className='home__social-icon'
						target='_blank'
						rel='noreferrer'
					>
						<i className='uil uil-linkedin'></i>
					</a>
				</div>
				<span className='footer__copy'>&#169; All rigths reserved</span>
			</div>
		</footer>
	);
};

export default Footer;
