import React from 'react';
import './User.scss';

export default function User({name,photo,email,phone,position}) {
	return (
		<div className="user d-block d-lg-flex text-center text-lg-left">
		    <span>
				<img src={photo} alt="user" className="userPhoto" />
			</span>
			<div className="user__info">
			   <h4>{name}</h4>
			   <p className="p3">{position}</p>
		       <p className="p3">{email}</p>
		       <p className="p3">{phone}</p>
		   </div>			
		</div>
	)
}