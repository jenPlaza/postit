// JavaScript Document
import React from 'react';
 
const SearchInput = props =>{
	return(
		<form>
		<input type='text' style={styles.searchBox} onChange={props.searchInfo} placeholder={props.placeholder} />
		</form>
	)
}

export default SearchInput

const styles ={
	searchBox:{
		width:'95%',
		border:'none',
		height:'30px',
		backgroundColor:'rgba(231, 231, 231, 0.4)',
	},
}