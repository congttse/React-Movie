import React from 'react'
import { Card } from 'react-materialize'
import './ModalCase.css'
export default function ModalCase({ setIsOpen, titleFilm, trailerFilm }) {
    return (
        <div className='modal-show' >
            <div id='modal1' className='modal'>
                <div className='mc-text'>
                    <a href='#' onClick={() => setIsOpen(false)} className='mc-close'>&times;</a>
                </div>
                <div className='modal-content'>
                    <Card>
                        <h4 className='mc-trailer'>Trailer film {titleFilm}</h4>
                        <p><iframe width="100%" height="400px" src={trailerFilm} title={titleFilm} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen /></p>
                    </Card>
                </div>
                <div className='modal-footer'>
                    <a href='#' onClick={() => setIsOpen(false)} className='modal-close waves-effect waves-red btn-flat light green'>Close</a>
                </div>
            </div>
        </div>
    )
}
