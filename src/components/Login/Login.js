import React, { useEffect } from 'react'
import GoogleButton from 'react-google-button'
import { Card, Container, Section, TextInput } from 'react-materialize'
import { Link } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'
import './Login.css'
import { useNavigate } from 'react-router-dom'
export default function Login() {
    const { googleSignIn, user } = UserAuth();
    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (user != null) {
            navigate('/')
        }
    }, [user])

    return (
        <Section>
            <Container className='containerLogin'>
                <Card className='cardLogin'>
                    <form>
                        <h5 className='headingLogin'>Netflix</h5>
                        <h4 className='textLogin'>Log in</h4>
                        <div className='inputLogin'>
                            <TextInput placeholder='UserName' label='UserName' className='userNameLogin' />
                            <TextInput placeholder='Password' type='Password' label='Password' />
                        </div>
                        <Link to='#' className='forgotPassword'>Forgot Password?</Link>
                        <div className='googleButton'>
                            <GoogleButton onClick={handleGoogleSignIn} />
                        </div>
                    </form>
                </Card>
            </Container>
        </Section>
    )
}
