import React , {useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { LoginOutlined } from '@ant-design/icons';
import { UserAddOutlined } from '@ant-design/icons';
import { ContactsOutlined } from '@ant-design/icons';


const { SubMenu } = Menu;

function Navbar() {

	const [current, setCurrent] = useState(localStorage.setNav)
	const [current2, setCurrent2] = useState('')
	const [color1, setColor1] = useState('white');
	const [color2, setColor2] = useState('white');
	const [color3, setColor3] = useState('white');
	const [color4, setColor4] = useState('white');
	const [color5, setColor5] = useState('white');

	useEffect(() => {
		if(localStorage.setNav === 'Home'){
			setColor1('#27363b')
		}
		else if(localStorage.setNav === 'Login'){
			setColor2('#27363b')
		}
		else if(localStorage.setNav === 'Signup'){
			setColor3('#27363b')
		}
		else if(localStorage.setNav === 'Contact'){
			setColor4('#27363b')
		}else{
			handleClick1();
			setCurrent('Home')
		}	
	}, [])

	useEffect(() => {
		if(localStorage.setNav === 'Home'){
			setCurrent('Home');
			handleClick1();
		}
		else if(localStorage.setNav === 'Login'){
			handleClick2();
			setCurrent('Login');
		}
		else if(localStorage.setNav === 'Signup'){
			handleClick3();
			setCurrent('Signup');
		}
		else if(localStorage.setNav === 'Contact'){
			handleClick4();
			setCurrent('Contact');
		}else{
			handleClick1();
			setCurrent('Home');
		}	
	}, [localStorage.setNav])

	const handleClick = e => {
	    setCurrent(e.key);
	};

	const handleCurrent = e => {
	    setCurrent2(e.key);
	};

	const handleClick1 = () => {
	    setColor1('#27363b')
	    setColor2('white')
	    setColor3('white')
	    setColor4('white')
	};

	const handleClick2 = () => {
	    setColor2('#27363b')
	    setColor1('white')
	    setColor3('white')
	    setColor4('white')
	};

	const handleClick3 = () => {
	    setColor3('#27363b')
	    setColor2('white')
	    setColor1('white')
	    setColor4('white')
	};

	const handleClick4 = () => {
	    setColor4('#27363b')
	    setColor2('white')
	    setColor3('white')
	    setColor1('white')
	};

	const handleClick5 = () => {
	    setColor5('#27363b');
	    localStorage.setItem('jwtToken' , '');
	    localStorage.setItem('setNav' , 'Login');
	    setCurrent('Home');
	    handleClick2();
		window.location = '/'
	};

	if(localStorage.setNav !== 'User'){
		return (
			<div>
				<Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" style = {{fontFamily: 'Raleway' ,background : '#75b2ad' , color : '#27363b'}}>
	        		<Menu.Item key="Home" icon={<HomeOutlined />}>
	          			<Link onClick={handleClick1} to = '/' style = {{color : color1}}>Home</Link>
	        		</Menu.Item>
			        <Menu.Item key="Login" icon={<LoginOutlined />}>
	          			<Link to = '/login' onClick={handleClick2} style = {{color : color2}}>Login</Link>
	        		</Menu.Item>
	        		<Menu.Item key="Signup" icon={<UserAddOutlined />}>
	          			<Link to = '/signup' onClick={handleClick3} style = {{color : color3}} >Signup</Link>
	        		</Menu.Item>
	        		<Menu.Item key="Contact" icon={<ContactsOutlined />}>
	          			<Link to = '/contact' onClick={handleClick4} style = {{color : color4}} >Contact</Link>
	        		</Menu.Item>
	      		</Menu>
			</div>
		)
	}else{
		return(
				<div>
					<Menu onClick={handleCurrent} selectedKeys={[current2]} mode="horizontal" style = {{fontFamily: 'Raleway' ,background : '#75b2ad' , color : '#27363b'}}>
			        	<Menu.Item key="Home" icon={<HomeOutlined />}>
			        		<Link onClick={handleClick5} to = '/' style = {{color : color5}}>Logout</Link>
			        	</Menu.Item>
			      	</Menu>
				</div>
			)
	}

}

export default Navbar