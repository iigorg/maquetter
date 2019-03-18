import React from 'react';
import './Requirements.scss';
import imgMan from '../imgs/man-laptop-v1.svg';


export default function Requirements() {
	return (
		<section id="requirements">
			<div className="container">
				<div className="row">
					<h2 className="text-center">General requirements for the test task</h2>
					<div className="col-12 order-2 text-center order-md-1 text-md-left col-md-6">
						<div className="requirements__info">
							<p className="p2">
								Users want to find answers to their questions quickly and data shows that people
								really care about how quickly their pages load. The Search team announced speed
								would be a ranking signal for desktop searches in 2010 and as of this month (July 2018),
								page speed will be a ranking factor for mobile searches too.
							</p>
							<p className="p2">
								If you're a developer working on a site, now is a good time to evalue your performance using
								our speed tools. Think about how performance affects the user experience of your pages and consider
								measuring a variety of real-world
								user centric performance metrics.
							</p>
							<p className="p2">
								Are you shipping too much JavaScript? Too many images? Images and JavaScript
								are the most significant contributors to the page weight that affect page
								load time based on data from HTTP Archive and the Chrome User Experience Report - our
								public dataset for key UX metrics as experienced by Chrome users under real-world conditions.
							</p>
						</div>
					</div>
					<div className="col-12 order-1 text-center col-md-6 order-md-2 text-md-left col-md-6">
						<img src={imgMan} alt="man-laptop" className="img-fluid" />
					</div>									
				</div>				
			</div>
		</section>
	)
}

