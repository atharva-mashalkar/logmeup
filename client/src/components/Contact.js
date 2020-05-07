import React , { useEffect} from 'react'
import { Layout } from 'antd';

const {  Content } = Layout;

function Contact() {

	useEffect(() => {
  		localStorage.setItem('setNav' , 'Contact');
  	}, [])

	return (
		<Layout className="layout" >
		    <Content >
		      <div className="site-layout-content" style={{ paddingTop:'8rem', background: '#f5f5f5', padding: '8rem', textAlign: 'center'}}>
		      	<h1 style = {{fontFamily: 'Josefin Sans', fontStyle : 'sans-serif' , fontSize : '4rem' , color : '#0D232A'}}>You can contact me at below given details</h1>
		      	<div style = {{marginTop : '3rem' , fontFamily: 'Raleway' }} >
		      	 <h3 style = {{color : '#27363b' , fontWeight : 'bolder'}}><span style = {{fontFamily: 'Josefin Sans', fontStyle : 'sans-serif' , fontSize : '2rem' , color : '#0D232A'}}>Email :</span> atharvamashalkar1821@gmail.com</h3>
		      	 <h3><span style = {{fontFamily: 'Josefin Sans', fontStyle : 'sans-serif' , fontSize : '2rem' , color : '#0D232A'}}>Phone :</span> (+91) 7620099155</h3>
		      	</div>
		      </div>
		    </Content>
		  </Layout>
	)
}

export default Contact