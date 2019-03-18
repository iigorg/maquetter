import React from 'react';
import './Footer.scss';
import { ReactComponent as Logo } from '../logo.svg';
import { ReactComponent as Facebook } from '../icons/facebook.svg';
import { ReactComponent as Linkedin } from '../icons/linkedin.svg';
import { ReactComponent as Instagram } from '../icons/instagram.svg';
import { ReactComponent as Twitter } from '../icons/twitter.svg';
import { ReactComponent as Pinterest } from '../icons/pinterest.svg';
import { ReactComponent as Mail } from '../icons/mail.svg';
import { ReactComponent as Phone } from '../icons/phone.svg';
import { ReactComponent as Cellphone } from '../icons/cellphone.svg';

export default function Footer() {	
	return (
	<footer>			
			<div className="container">		
				<div className="row">		
			        <div className="col-12 text-center col-md-3 text-md-left">
			        	<Logo width={133} height={55} className="logoFooter" />						  
			        </div>	
			        <div className="col-12 text-center col-md-9 text-md-left mb-3 mb-md-0">			        	
						  <ul className="footer-links flex-column flex-md-row">
							  <li>
								<a href="#about" className="nav-footer">About me</a>
							  </li>
							  <li>
								<a href="#relationships" className="nav-footer">Relationships</a>
							  </li>
							  <li>
								<a href="#requirements" className="nav-footer">Requirements</a>
							  </li>
							  <li>
								<a href="#users" className="nav-footer">Users</a>
							  </li>
							  <li>
								<a href="#sign" className="nav-footer">Sign Up</a>
							  </li>
						</ul>	
			        </div>							
				</div>				
			    <span className="borderFooter"></span>
			
				<div className="row">						
					<div className="col-12 text-center col-md-5 col-lg-4 text-md-left">
						<ul className="footer-info__about">
						  <li>
							<Mail className="d-none d-md-inline-flex" /><span>work.of.future@gmail.com</span>
						  </li>
						  <li>
							<Phone className="d-none d-md-inline-flex" /><span>+38 (050) 789 24 98</span>
						  </li>
						  <li>
							<Cellphone className="d-none d-md-inline-flex" /><span>+38 (095) 556 08 45</span>
						  </li>							  
					    </ul>	
					</div>					 	
				  <div className="col-8 col-md-4 col-lg-8 d-none d-md-flex">
				  	<div className="footer-info">
						<ul className="footer-info__other">
							  <li>
								<a href="#" className="footer-link">News</a>
							  </li>
							  <li>
								<a href="#" className="footer-link">Blog</a>
							  </li>
							  <li>
								<a href="#" className="footer-link">Partners</a>
							  </li>
							  <li>
								<a href="#" className="footer-link">Shop</a>
							  </li>							  
						</ul>
						<ul className="footer-info__other">
							  <li>
								<a href="#" className="footer-link">Overview</a>
							  </li>
							  <li>
								<a href="#" className="footer-link">Design</a>
							  </li>
							  <li>
								<a href="#" className="footer-link">Code</a>
							  </li>
							  <li>
								<a href="#" className="footer-link">Collaborate</a>
							  </li>							  
						</ul>
						<ul className="footer-info__other">
							  <li>
								<a href="#" className="footer-link">Tutorials</a>
							  </li>
							  <li>
								<a href="#" className="footer-link">Resources</a>
							  </li>
							  <li>
								<a href="#" className="footer-link">Guides</a>
							  </li>
							  <li>
								<a href="#" className="footer-link">Exaples</a>
							  </li>							  
						</ul>
						<ul className="footer-info__other">
							  <li>
								<a href="#" className="footer-link">FAQ</a>
							  </li>
							  <li>
								<a href="#" className="footer-link">Terms</a>
							  </li>
							  <li>
								<a href="#" className="footer-link">Conditions</a>
							  </li>
							  <li>
								<a href="#" className="footer-link">Help</a>
							  </li>							  
						</ul>	
				 	 </div>
				  </div>
			    </div>
							  
			
				<div className="row">
					<div className="col-12">
						<div className="social flex-column-reverse text-center flex-md-row">
						<p>&#169; abz.agency specially for the test task</p>
						<ul className="social-links justify-content-center mb-2 mb-md-0">
							  <li>
								<a href="#">
									<Facebook />									
								</a>
							  </li>
							  <li>
								<a href="#">
									<Linkedin />									
								</a>
							  </li>
							  <li>
								<a href="#">
									<Instagram />									
								</a>
							  </li>
							  <li>
								<a href="#">
									<Twitter />									
								</a>
							  </li>
							  <li>
								<a href="#">
									<Pinterest />									
								</a>
							  </li>						 
						</ul>	
				    </div>	
					</div>			
			    </div>
			</div>	
			
		</footer>		
	)
}