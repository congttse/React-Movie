import React from 'react'
import { Icon, Navbar } from 'react-materialize'
import { NavLink } from 'react-router-dom'
import './Header.css'
import { UserAuth } from '../Context/AuthContext'
export default function Header() {
    const { user, logOut } = UserAuth();

    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Navbar>
            <Icon left>menu</Icon>
            <NavLink to='/'>
                Home
            </NavLink>
            <NavLink to='/about' >
                About
            </NavLink>
            <NavLink to='/contact'>
                Contact
            </NavLink>
            {
                user ? (
                    <NavLink to='/add'>
                        Create Movie
                    </NavLink>
                )
                    :
                    <div></div>
            }

            {
                user?.displayName ?
                    (
                        <>
                            <li>
                                <img src={`${user.photoURL}`} className='imageAccount' />
                            </li>
                            <li>
                                <h5 className='usernameAccount'>{user.displayName}</h5>
                            </li>
                            <NavLink to='/' className='logout'
                                onClick={handleSignOut}>
                                Log out
                            </NavLink>
                        </>
                    )
                    :
                    (<NavLink to='/login' className='login'>
                        Log in
                    </NavLink>)
            }
        </Navbar>
    )
}
