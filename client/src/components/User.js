import React , { useEffect }from 'react'
import { fetchUser } from '../redux';
import { connect , useDispatch } from 'react-redux'
import { Layout , Spin, Space } from 'antd';

const {  Content } = Layout;

function User(props) {
	
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUser())
		localStorage.setItem('setNav' , 'User');
	}, [])

	if(props.ErrMsg !== ''){
			localStorage.setItem('setNav' , 'Home');
			localStorage.setItem('jwtToken' , '');
			window.location = '/'
	}

	return(
		props.Loading ?
			<Layout className="layout" >
					    <Content >
					      <div className="site-layout-content" style={{ padding: '8rem', textAlign: 'center'}}>
					      		<Space size="middle">
								    <Spin size="large" />
								</Space>
					      </div>
					    </Content>
					  </Layout>
		 : props.FirstName !== '' ?
				<div>
					<Layout className="layout" >
					    <Content >
					      <div className="site-layout-content" style={{ paddingTop:'8rem', background: '#f5f5f5', padding: '8rem', textAlign: 'center'}}>
					      	<div style = {{marginTop : '3rem' , fontFamily: 'Raleway' }} >
					      	 <h1 style = {{color : '#27363b' , fontWeight : 'bolder'}}>Hi <span style = {{fontFamily: 'Josefin Sans', fontStyle : 'sans-serif' , fontSize : '4rem' , color : '#0D232A'}}>{props.FirstName} {props.LastName}</span>!!</h1>
					      	</div>
					      </div>
					    </Content>
					  </Layout>
				</div>
			: null
		
	)

}

const mapStateToProps = state => {
	return {
		Loading : state.user.Loading,
		FirstName :  state.user.FirstName,
		LastName : state.user.LastName,
		ErrMsg : state.user.ErrMsg
	}
}


export default connect(mapStateToProps)(User)