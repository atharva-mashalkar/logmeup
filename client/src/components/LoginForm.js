import React , {useState , useRef , useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux';
import {  checkEmail , checkPassword , checkUser } from '../redux';
import { Form, Input, Button } from 'antd';
import { IoIosPerson } from 'react-icons/io';
import { IoIosKey } from 'react-icons/io'
import { LoginOutlined } from '@ant-design/icons';

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 12,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 6,
    span: 12,
  },
};

function LoginForm() {
	const Email =  useSelector(state => state.login.Email)
	const Password =  useSelector(state => state.login.Password)
	const dispatch = useDispatch();
	const inputRef = useRef(null)
	const [loadings, setLoadings] = useState(false)

	const enterLoading = index => {
	    setLoadings(true)
	    setTimeout(() => {
	      setLoadings(false);
	    }, 6000);
  	};

  	useEffect(() => {
  		localStorage.setItem('setNav' , 'Login');
  	}, [])

	useEffect(() => {
		inputRef.current.focus()
	}, [Email])

	const onFinishFailed = errorInfo => {
    	console.log('Failed:', errorInfo);
    	setLoadings(false);
 	}

 	const onFinish = values => {
    	console.log('Success:', values);
    	checkUser( values.Email , values.Password );
  	};

	return (
			<div >

				<Form 
					{...layout}
	      			name="basic"
	      			initialValues={{ remember: true }}
	      			onFinish={onFinish}
	      			onFinishFailed={onFinishFailed}
	      			style = {{fontFamily: 'Raleway' , fontStyle : 'italic' , fontWeight : 'bolder' , color : '#0D232A'}}
	      			>
	      				<Form.Item
					        label="Email"
					        name="Email"
					        rules={[{ required: true, message: 'Please input your username!' }]}
	      					>
	        				<Input 
	        				ref = {inputRef}
							type = 'email' 
							value = {Email} 
							onChange = {(e) => dispatch(checkEmail(e.target.value))} 
							size="large" 
							placeholder="Email Address" 
							prefix={<IoIosPerson />}
							style = {{borderRadius : '2rem' , color : '#0D232A' , border: '2px solid #D1C7C7'}} 
							/>
	      				</Form.Item>

	      				<Form.Item
					        label="Password"
					        name="Password"
					        rules={[{ required: true, message: 'Please input your password!' }]}
					      >
				        <Input.Password 
							type = 'text' 
							value = {Password} 
							onChange = {(e) => dispatch(checkPassword(e.target.value))} 
							size="large" 
							placeholder="Password" 
							prefix={<IoIosKey />}
							style = {{borderRadius : '2rem' , color : '#0D232A' , border: '2px solid #D1C7C7'}} 
							/>
				      </Form.Item>

				      <Form.Item {...tailLayout}>
				        <Button 
				        	type="primary" 
				        	htmlType="submit"
				        	icon={<LoginOutlined />}
	          				loading={loadings}
	          				onClick={() => enterLoading()}
	          				style = {{borderRadius : '3rem' , background : '#27363b'}}
	          				>
				          Login
				        </Button>
				      </Form.Item>
				      
				</Form>				
		</div>		
	)
}

export default LoginForm