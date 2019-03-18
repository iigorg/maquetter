import React from 'react';
import './Button.scss';

export default function Button({title,btnStyle,onClick,disabled}) {	
	return (
		<button className={btnStyle} onClick={onClick} disabled={disabled}>{title}</button>
	)
}
