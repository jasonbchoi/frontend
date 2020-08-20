import React from 'react';
import { Accordion, Card, Jumbotron, CardImg, PageItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

function About() {
	function handleOnClick(e) {
		e.preventDefault();
	}

	return (
		<Jumbotron className='about'>
			<h1>MEET OUR TEAM</h1>
			<p>
				We all are very different. We come from different backgrounds. We were
				born in different cities, at a different time. We have different
				hobbies, and interests. Although we may be different, what connects us
				all is "flickcritic.". The countless hours spent was all worth it to
				make our dreams a reality. Thank you from all of us for visiting our
				app. We hope you enjoyed it as much as we enjoyed making "flickcritic.".
			</p>

			<Accordion defaultActiveKey='1'>
				<Card className='card'>
					<Card.Header className='header'>
						<Accordion.Toggle
							onClick={handleOnClick}
							variant='link'
							eventKey='0'
							className='contactUs'>
							CONTACT US
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey='0'>
						<Card.Body className='body'>
							<CardImg fluid src='/images/groupPic.png' alt='GroupPic' />
							<div class="groupInfo">
								<h3>Alisha Lawani</h3>
								<a href='https://github.com/alishalawani' target='_blank'>
									<h6>Github</h6>
								</a>
								<a
									href='https://www.linkedin.com/in/alishalawani/'
									target='_blank'>
									<h6>LinkedIn</h6>
								</a>
							</div>
							<div class="groupInfo">
								<h3>David Sams</h3>
								<a href='https://github.com/davidedsams' target='_blank'>
									<h6>Github</h6>
								</a>
								<a
									href='https://www.linkedin.com/in/davidedwardsams'
									target='_blank'>
									<h6>LinkedIn</h6>
								</a>
							</div>
							<div class="groupInfo">
								<h3>Roshonia Brooks</h3>
								<a href='https://github.com/RoshoniaB' target='_blank'>
									<h6>Github</h6>
								</a>
								<a
									href='https://www.linkedin.com/in/roshonia-brooks'
									target='_blank'>
									<h6>LinkedIn</h6>
								</a>
							</div>
							<div class="groupInfo">
								<h3>Jason Choi</h3>
								<a href='https://github.com/Choiboi500' target='_blank'>
									<h6>Github</h6>
								</a>
								<a
									href='https://www.linkedin.com/in/jason-choi-347855b4/'
									target='_blank'>
									<h6>LinkedIn</h6>
								</a>
							</div>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
		</Jumbotron>
	);
}

export default About;
