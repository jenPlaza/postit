// JavaScript Document
import React from 'react'
 
const SearchInput = props =>{
	return(
		<form>
		<input type='text' onChange={props.searchStudents} placeholder={props.placeholder} />
		</form>
	)
}

export default SearchInput