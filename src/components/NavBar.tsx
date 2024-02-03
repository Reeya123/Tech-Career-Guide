import { Button } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../store';
import { logout } from './login/login.asyncAction';
import { selectUseraccesstoken } from './login/login.selector';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
	const token = useSelector(selectUseraccesstoken)
	const dispatch = useDispatch<AppDispatch>()
    let navigate = useNavigate()

    const handleLogout=()=>{
        dispatch(logout()).then(()=>{
            navigate('/login')
        })
    }
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		{/* <NavLink to='/about' activeStyle>
			All Roadmaps
		</NavLink> */}
		{(token.length === 0) && (<NavLink to='/register' activeStyle>
			Sign Up
		</NavLink>)}
		</NavMenu>
		<NavBtn>
		{(token.length === 0) ? (<NavBtnLink to='/login'>Sign In</NavBtnLink>) : (<Button ml='10px' bgGradient='linear(to-l, yellow.700, red.600)' p='7px 10px' rounded='4px'
                        _hover={{ textDecoration: 'none', bgGradient: 'linear(to-l, red.800, yellow.700)' }}
                        fontWeight={500} onClick={handleLogout}>Logout</Button>)}
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
