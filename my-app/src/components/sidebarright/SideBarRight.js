// JavaScript Document
import React from 'react'
import whyBlog from '../../images/whyBlog.jpeg'
import socialMedia from '../../images/socialMedia.jpg'

class SideBarRight extends React.Component {
  render() {
    return (
      <section>
		<ul>
		<li style={styles.li}><button href="#" style={styles.btn}><img src={whyBlog} alt="img of a light bulb with red font" className="App-div" style={styles.img}/></button></li>
		
		<li style={styles.li}><button href="#" style={styles.btn}><img src={socialMedia} alt="img of 7 people thinking of something" className="App-div" style={styles.img}/></button></li>
		</ul>

      </section>
    );
  }
}
 
export default SideBarRight;

const styles ={
	li:{
	display:'block',
		listStyleType:'none',
		paddingBottom:'5%',
},
		btn:{
		border:'none',
		backgroundColor:'transparent',
},
		img:{
		display:'block',
		width:'100%',
		marginLeft:'-4%',
},
}
