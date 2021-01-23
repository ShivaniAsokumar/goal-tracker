import React, { Component } from 'react';
import '../styles/Main.css';
const NavBar = () => {
	return (
		<div className="flex-container">
			<div className="flex-item">Main Menu</div>
			<div className="flex-item">Sleep</div>
			<div className="flex-item">Workout</div>
			<div className="flex-item">Read</div>
			<div className="flex-item">Productivity</div>
		</div>
	);
};

export default NavBar;
