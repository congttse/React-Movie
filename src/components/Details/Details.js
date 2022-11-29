import React, { useState } from 'react'
import './Details.css'
import { Section, Row, Col, Icon } from 'react-materialize';
import '../ModalCase/ModalCase'
import ModalCase from '../ModalCase/ModalCase';
export default function Details() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Section className='detailSection'>
            <Row>
                <Col m={6} s={12}>
                    <img src={`${localStorage.getItem('Image')}`} alt='' className='detail-image'></img>
                    <a onClick={() => setIsOpen(true)} className='btn-floating waves-effect'><Icon left >ondemand_video</Icon></a>
                </Col>
                <Col m={6} s={12}>
                    <Row>
                        <Col m={12} s={12}>
                            <h2 className='detail-title'>{localStorage.getItem('Title')}</h2>
                        </Col>
                    </Row>
                    <Row className='text'>
                        <Col m={6} s={12}>
                            <h2 className='detail-year'><span style={{ color: 'black' }}>Year: </span>{localStorage.getItem('Year')}</h2>
                            <h2 className='detail-duration'><span style={{ color: 'black' }}>Duration: </span>{localStorage.getItem('Duration')}</h2>
                            <h2 className='detail-director'><span style={{ color: 'black' }}>Director: </span>{localStorage.getItem('Director')}</h2>
                        </Col>
                        <Col m={6} s={12}>
                            <h2 className='detail-nation'><span style={{ color: 'black' }}>Nation: </span>{localStorage.getItem('Nation')}</h2>
                            <h2 className='detail-type'><span style={{ color: 'black' }}>Type: </span>{localStorage.getItem('Type')}</h2>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col className='text-1'>
                    <h2 className='description'>Description:</h2>
                    <p className='detail-info'>{localStorage.getItem('Info')}</p>
                </Col>
            </Row>
            {
                isOpen ?
                    <ModalCase
                        setIsOpen={setIsOpen}
                        titleFilm={localStorage.getItem('Title')}
                        trailerFilm={localStorage.getItem('Trailer')}>
                    </ModalCase>
                    :
                    <div></div>
            }
        </Section>
    )
}
