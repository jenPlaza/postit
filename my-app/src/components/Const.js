// JavaScript Document
//import React, {Component} from 'react';
//Component not needed. You did not use the Component module.
import React from 'react';
//Fix your syntax
const Consts = props => {
		return(
		<form onSubmit={props.addName}>
		<h1>Why Do we use consts?</h1>
		<br/>
		<h3 className="AppResponse">When to use const?</h3>
			<p className="AppResponse">Consts Components/ method components are best used, when the function accepts props/properties and returns a react element, such as a button, a form, a modal, dialog, etc. JS functions allows the code to be concise and reusable, therefore easier to read and test.</p>	
			
			<p>Current Student: {props.displayName}</p>
			<input value={props.currentName}
				onchange={props.changeName}
				name="mName"
				placeholder="Name..." />
			</form>
			
		
		)
}
export default Consts;