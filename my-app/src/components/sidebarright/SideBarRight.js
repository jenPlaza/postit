// JavaScript Document
import React from 'react'
/*import '../sidebarright/SideBarRight.css'*/
import whyBlog from '../../images/whyBlog.jpeg'
import socialMedia from '../../images/socialMedia.jpg'

class SideBarRight extends React.Component {
  render() {
    return (
      <section
        /*sidebar={<b>Menu</b>}*/
		style={styles.container}
      >
		<ul>
		<li style={styles.li}><button href="#" style={styles.btn}><img src={whyBlog} alt="img of a l ight bulb with red font" className="App-div" style={styles.img}/></button></li>
		
		<li style={styles.li}><button href="#" style={styles.btn}><img src={socialMedia} alt="img of a l ight bulb with red font" className="App-div" style={styles.img}/></button></li>
		</ul>

      </section>
    );
  }
}
 
export default SideBarRight;

const styles ={
	
	li:{
	display:'block',
		/*border:'1px solid red',*/
		listStyleType:'none',
		marginTop:'-3%',
		paddingBottom:'5%'
},
		btn:{
		border:'none',
		backgroundColor:'grey',
},
		img:{
		display:'block',
		width:'90%',
		padding:'1%'
}
}
