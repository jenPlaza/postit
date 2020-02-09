// JavaScript Document
import React, {Component} from 'react';

const Consts = props => {
		return(
		<form onSubmit={props.addName}>
		<p>Current Student: {props.displayName}</p>
		<input value={props.currentName}
				onchange={props.changeName}
				name="mName"
				placeholder="Name..." />
			</form>
		)
}
export default Consts;