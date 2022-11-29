import React from 'react'
import { Col, Row, Section } from 'react-materialize'
import { NavLink } from 'react-router-dom'
import './Footer.css'
export default function Footer() {
    return (
        <Section style={{ background: '#404258', textAlign: 'center' }}>
            <div>
                <h4 className='title-footer'>Lab7: Login by Google and CRUD</h4>
            </div>
            <hr />
            <div>
                <Row>
                    <Col m={3}>
                        <h5 className='head-item-footer'>About Us</h5>
                        <NavLink to='#'>
                            Founder
                        </NavLink>
                        <br />
                        <NavLink to='#'>
                            CO-Founder
                        </NavLink>
                        <br />
                        <NavLink to='#'>
                            CEO
                        </NavLink>
                    </Col>
                    <Col m={3}>
                        <h5 className='head-item-footer'>Services</h5>
                        <NavLink to='#'>
                            Netflix
                        </NavLink>
                        <br />
                        <NavLink to='#'>
                            GalaxyPlay
                        </NavLink>
                        <br />
                        <NavLink to='#'>
                            Apple TV +
                        </NavLink>
                    </Col>
                    <Col m={3}>
                        <h5 className='head-item-footer'>Contact Us</h5>
                        <NavLink to='#'>
                            Send Feedback
                        </NavLink>
                        <br />
                        <NavLink to='#'>
                            Phone: 0393215170
                        </NavLink>
                        <br />
                        <NavLink to='#'>
                            Email: congttse150167@gmail.com
                        </NavLink>
                    </Col>
                    <Col m={3}>
                        <h5 className='head-item-footer'> Social Media</h5>
                        <NavLink to='#'>
                            FaceBook
                        </NavLink>
                        <br />
                        <NavLink to='#'>
                            Instagram
                        </NavLink>
                        <br />
                        <NavLink to='#'>
                            Twitter
                        </NavLink>
                    </Col>
                </Row>
            </div>
        </Section>
    )
}
