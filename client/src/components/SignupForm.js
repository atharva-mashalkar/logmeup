import React , { useState , useRef , useEffect}from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { addFirstName, addLastName , addDOB , addEmail , addPassword , signup } from '../redux';
import 'react-datepicker/dist/react-datepicker.css';
import { Form, Input, Button , DatePicker } from 'antd';
import { IoIosPerson } from 'react-icons/io';
import { IoIosKey } from 'react-icons/io'
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { BsPersonBoundingBox } from 'react-icons/bs'
import { UserAddOutlined } from '@ant-design/icons';

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

const tailLayout1 = {
  wrapperCol: {
    offset: 0,
    span: 4,
  },
};

function SignupForm() {

	const FirstName =  useSelector(state => state.signup.FirstName)
	const LastName =  useSelector(state => state.signup.LastName)
	const DOB =  useSelector(state => state.signup.DOB)
	const Email =  useSelector(state => state.signup.Email)
	const Password =  useSelector(state => state.signup.Password)
	const dispatch = useDispatch();
	const inputRef = useRef(null)

	const [selectedDate, setSelectedDate] = useState(null)
	const [loadings, setLoadings] = useState(false)

	const enterLoading = index => {
	    setLoadings(true)
	    setTimeout(() => {
	      setLoadings(false);
	    }, 6000);
  	};

  	useEffect(() => {
  		localStorage.setItem('setNav' , 'Signup');
  	}, [])

	useEffect(() => {
		inputRef.current.focus()
	}, [FirstName])

	const onFinishFailed = errorInfo => {
    	console.log('Failed:', errorInfo);
    	setLoadings(false)
 	}

 	const onFinish = values => {
    	console.log('Success:', values);
    	signup( values.FirstName, values.LastName , selectedDate ,values.Email , values.Password );
    	window.location = '/login';
  	};

  	function onChange(value, dateString) {
  		dispatch(addDOB(dateString));
  		setSelectedDate(dateString);
	}

	
	return (
		<div>
			<Form 
				{...layout}
      			name="basic"
      			initialValues={{ remember: true }}
      			onFinish={onFinish}
      			onFinishFailed={onFinishFailed}
      			style = {{fontFamily: 'Raleway' , fontStyle : 'italic' , fontWeight : 'bolder' , color: '#0D232A'}}
      			>

      				<Form.Item
				        label="First Name"
				        name="FirstName"
				        rules={[{ required: true, message: 'Please input your First Name!' }]}
      					>
        				<Input 
        				ref = {inputRef}
						type = 'text' 
						value = {FirstName} 
						onChange = {(e) => dispatch(addFirstName(e.target.value))} 
						size="large" 
						placeholder="First Name" 
						prefix={<BsFillPersonLinesFill />}
						style = {{borderRadius : '2rem' , color : '#0D232A' , border: '2px solid #D1C7C7'}} 
						/>
      				</Form.Item>

      				<Form.Item
				        label="Last Name"
				        name="LastName"
				        rules={[{ required: true, message: 'Please input your Last Name!' }]}
				      >
			        <Input 
						type = 'text' 
						value = {LastName} 
						onChange = {(e) => dispatch(addLastName(e.target.value))} 
						size="large" 
						placeholder="Last Name" 
						prefix={<BsPersonBoundingBox />}
						style = {{borderRadius : '2rem' , color : '#0D232A', border: '2px solid #D1C7C7'}} 
						/>
			      </Form.Item>

			      <Form.Item
			      		{...tailLayout1}
				        label="Date of Birth"
				        name="DOB"
				        rules={[{ required: true, message: 'Please input your Date Of Birth!' }]}
				      >
			      <DatePicker
			      		size="large" 
			      		showTime 
			      		onChange={onChange}
			      		style = {{borderRadius : '2rem' , color : '#0D232A', border: '2px solid #D1C7C7'}} 
			      		/>
			      </Form.Item>

			      <Form.Item
				        label="Email"
				        name="Email"
				        rules={[{ required: true, message: 'Please input your Email!' }]}
      					>
        				<Input 
						type = 'email' 
						value = {Email} 
						onChange = {(e) => dispatch(addEmail(e.target.value))} 
						size="large" 
						placeholder="Email Address" 
						prefix={<IoIosPerson />}
						style = {{borderRadius : '2rem' , color : '#0D232A', border: '2px solid #D1C7C7'}} 
						/>
      				</Form.Item>

      				<Form.Item
				        label="Password"
				        name="Password"
				        rules={[{ required: true, message: 'Please input your Password!' }]}
				      >
			        <Input.Password 
						type = 'text' 
						value = {Password} 
						onChange = {(e) => dispatch(addPassword(e.target.value))} 
						size="large" 
						placeholder="Password" 
						prefix={<IoIosKey />}
						style = {{borderRadius : '2rem' , color : '#0D232A', border: '2px solid #D1C7C7'}} 
						/>
			      </Form.Item>

			      <Form.Item {...tailLayout}>
			        <Button 
			        	type="primary" 
			        	htmlType="submit" 
			        	icon={<UserAddOutlined />}
          				loading={loadings}
          				onClick={() => enterLoading()}
          				style = {{borderRadius : '2.5rem' , background : '#27363b'}}
          				>
			          Add User
			        </Button>
			      </Form.Item>
			      
			</Form>
		</div>
		
	)
}


export default SignupForm