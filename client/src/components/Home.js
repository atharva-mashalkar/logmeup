import React ,{useEffect} from 'react'
import { Layout } from 'antd';

const {  Content } = Layout;

function Home() {

	useEffect(() => {
  		localStorage.setItem('setNav' , 'Home');
  	}, [])

	return (
		  <Layout className="layout" >
		    <Content >
		      <div className="site-layout-content" style={{ paddingTop:'8rem', background: '#f5f5f5', textAlign: 'center'  }} >
		      	<h1 style = {{ color : '#27363b' , fontWeight : 'bolder'}}><span style = {{fontFamily: 'Josefin Sans', fontStyle : 'sans-serif', fontSize : '8rem' , color : '#0D232A'}}>Welcome</span> to my website</h1>
		      	<div style = {{marginTop : '4rem'}}>
		      	 <h3 style = {{fontFamily: 'Raleway' , fontWeight : 'bolder' , color : '#27363b'}} >Please  
		      	 	<span style = {{fontFamily: 'Josefin Sans', fontStyle : 'sans-serif', fontSize : '2rem' , color : '#0D232A'}}> Signup </span> and 
		      	 	<span style = {{fontFamily: 'Josefin Sans', fontStyle : 'sans-serif', fontSize : '2rem' , color : '#0D232A'}}> Login </span>
		      	 	 to proceed further
		      	 </h3>
		      	</div>
		      </div>
		    </Content>
		  </Layout>
	)
}

export default Home