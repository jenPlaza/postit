// JavaScript Document
import React from 'react'
import './Nav.css'
import Button from '../buttons/Button'


const Nav = () => {
      return (
		  <nav style={styles.container}>
		  <Button btnText='Home' />
		  </nav>
)
}

  export default Nav; 

const styles ={
	container:{
		border:'1px solid red',
	}
}