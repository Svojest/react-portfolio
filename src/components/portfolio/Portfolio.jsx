import React from 'react';
import './portfolio.css';

const Portfolio = () => {
	return (
		<section className='portfolio section' id='portfolio'>
			<h2 className='section__title'>Portfolio</h2>
			<span className='section__subtitle'>My cases</span>

			<div className='portfolio__container container grid'>
				<div className='portfolio__content grid'>
					<div className='portfolio__card '>
						<img
							src={require('../../assets/Mesto.jpg')}
							alt='portfolio1'
							className='portfolio__img'
						/>
						<h3 className='portfolio__title'>Mesto - Vanila JS</h3>
						<p className='portfolio__subtitle'>
							Project «Mesto» — SPA social web with using Class Components
						</p>

						<a
							href='https://github.com/Svojest/mesto'
							className='contact__button'
							target='_blank'
							rel='noreferrer'
						>
							Code
							<i className='bx bx-right-arrow-alt contact__button-icon'></i>
						</a>
						<br />
						<a
							href='https://svojest.github.io/mesto/'
							className='contact__button'
							target='_blank'
							rel='noreferrer'
						>
							Demo
							<i className='bx bx-right-arrow-alt contact__button-icon'></i>
						</a>
					</div>

					<div className='portfolio__card '>
						<img
							src={require('../../assets/Mesto + react.jpg')}
							alt='portfolio1'
							className='portfolio__img'
						/>
						<h3 className='portfolio__title'>Mesto - React</h3>
						<p className='portfolio__subtitle'>
							Project «Mesto» — created on React for which the Backend was written on Node.js and used MongoDB.
						</p>

						<a
							href='https://github.com/Svojest/react-mesto-api-full'
							className='contact__button'
							target='_blank'
							rel='noreferrer'
						>
							Code
							<i className='bx bx-right-arrow-alt contact__button-icon'></i>
						</a>
						<br />
						<a
							href='https://svojest.mesto.nomoredomains.icu/'
							className='contact__button'
							target='_blank'
							rel='noreferrer'
						>
							Demo
							<i className='bx bx-right-arrow-alt contact__button-icon'></i>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
