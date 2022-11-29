import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-materialize'
import { Link } from 'react-router-dom';
import './PresentationFilms.css'
import Intro from '../Intro/Intro';
import { UserAuth } from '../Context/AuthContext';
import axios from 'axios';

export default function PresentationFilms() {
    const [APIData, setAPIData] = useState([]);
    const [id, setID] = useState(null);
    const baseURL = `https://635dce5ced25a0b5fe3a2e30.mockapi.io/Films`
    const { user } = UserAuth();

    useEffect(() => {
        axios.get(baseURL)
            .then(res => setAPIData(res.data));
    }, [])

    const onDelete = (id) => {
        axios.delete(`${baseURL}/${id}`)
            .then(() => {
                getData();
            })
    }

    const getData = () => {
        axios.get(baseURL)
            .then(res => {
                setAPIData(res.data);
            })
    }
    // useEffect(() => {
    //     dispatch(getFilm());
    // }, [])
    // const { list } = useSelector((state) => state.films)


    return (
        <div>
            <Intro />
            <div className='container-PF'>
                <h5 className='heading-PF'>Marvel Series</h5>
                <div className='filmOverview'>
                    <Row>
                        {
                            APIData.map((data) => {
                                return (
                                    <Col m={4} s={12} key={data.id}>
                                        <div className='filmItem'>
                                            <Link to={`/detail/${data.id}`}
                                                onClick={() => {
                                                    localStorage.setItem('ID', data.id);
                                                    localStorage.setItem('Image', data.image);
                                                    localStorage.setItem('Title', data.title);
                                                    localStorage.setItem('Type', data.type);
                                                    localStorage.setItem('Duration', data.duration);
                                                    localStorage.setItem('Year', data.year);
                                                    localStorage.setItem('Nation', data.nation);
                                                    localStorage.setItem('Director', data.director);
                                                    localStorage.setItem('Info', data.info);
                                                    localStorage.setItem('Trailer', data.trailer);
                                                    localStorage.setItem('Hot', data.hot);
                                                }}>
                                                <img src={data.image} className='image-PF' alt='' />
                                            </Link>
                                            <p className='filmName'>{data.title}</p>
                                            {
                                                user ?
                                                    (
                                                        <>
                                                            <Link to={`/update/${data.id}`}>
                                                                <button className='btnUpdate'
                                                                    onClick={() => {
                                                                        localStorage.setItem('updateID', data.id);
                                                                        localStorage.setItem('updateImage', data.image);
                                                                        localStorage.setItem('updateTitle', data.title);
                                                                        localStorage.setItem('updateType', data.type);
                                                                        localStorage.setItem('updateDuration', data.duration);
                                                                        localStorage.setItem('updateYear', data.year);
                                                                        localStorage.setItem('updateNation', data.nation);
                                                                        localStorage.setItem('updateDirector', data.director);
                                                                        localStorage.setItem('updateInfo', data.info);
                                                                        localStorage.setItem('updateTrailer', data.trailer);
                                                                        localStorage.setItem('updateHot', data.hot);
                                                                    }}>
                                                                    Update
                                                                </button>
                                                            </Link>
                                                            <button className='btnDelete'
                                                                onClick={() => setID(data.id)}>
                                                                <a href='#modal2'>Delete</a>
                                                            </button>
                                                        </>
                                                    )
                                                    :
                                                    <div></div>
                                            }
                                        </div>

                                    </Col>
                                )
                            })
                        }
                    </Row>
                </div>
            </div>
            <div className='modal2' id='modal2'>
                <div className='deleteContentModal'>
                    <a href='#' className='deleteCloseModal'>&times;</a>
                    <p className='deleteHeadingModal'>Are you sure you want to create a movie?</p>
                    <button type='button' className='deleteYesButton'
                    >
                        <a href='#' className='deleteYesLink'
                            onClick={() => { onDelete(id) }}>
                            Yes
                        </a>
                    </button>
                    <button className='deleteNoButton'>
                        <a href='#' className='deleteNoLink'>No</a>
                    </button>
                </div>
            </div>
        </div>
    )
}

