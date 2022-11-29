import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Section, Container, Collapsible, CollapsibleItem, Icon, Button, Textarea } from 'react-materialize';
import { updateMessage, deleteFeedback } from '../Redux/feedbackSlice';
import './Feedback.css'
export default function Feedback() {
    const dispatch = useDispatch();
    const listFeedBack = useSelector((state) => state.feedbacks.value)
    const reversed = [...listFeedBack].reverse();
    const [newMessage, setNewMessage] = useState('');
    const [idUpdate, setIdUpdate] = useState('');
    const [messageUpdate, setMessageUpdate] = useState('');
    const [deleteID, setDeleteID] = useState('');
    return (
        <Section className='feedback-section'>
            <Container>
                <Collapsible>
                    {reversed.map(feedBack => (
                        <CollapsibleItem
                            header={`${feedBack.subject} `}
                            node='h5'
                            icon={<Icon left className='feedback-icon'>feed</Icon>} >
                            <div>
                                <h5>{`${feedBack.firstName} ${feedBack.lastName} - ${feedBack.place} `} </h5>
                                <h5>{`${feedBack.email} - ${feedBack.phone} `}</h5>
                                <p className='feedback-message'>{feedBack.message}</p>
                            </div>
                            <Button>
                                Response
                            </Button>
                            <hr />
                            <div>
                                <Textarea value={newMessage} className='textarea-placeholder' placeholder='New content for this message' onChange={(e) => { setNewMessage(e.target.value); }}>
                                </Textarea>
                            </div>
                            <div>
                                <Button className='feedback-button'
                                    onClick={() => {
                                        setIdUpdate(feedBack.id)
                                        setMessageUpdate(newMessage)
                                    }}>
                                    <a href='#modal1' className='feedback-update'>Update</a>
                                    <Icon left>change_circle</Icon>
                                </Button>

                                <Button onClick={() => { setDeleteID(feedBack.id) }} >
                                    <a href='#modal2' className='feedback-delete'>Delete</a>
                                    <Icon left>delete</Icon>
                                </Button>
                            </div>
                        </CollapsibleItem>
                    ))}
                    <div className='modal1' id='modal1'>
                        <div className='modal-content1'>
                            <a href='#' className='feedback-close'>&times;</a>
                            <p className='feedback-text'>Are you sure you want to update this feedback's message</p>
                            <button type='button' className='feedback-modal-button1'
                                onClick={() => {
                                    dispatch(updateMessage({
                                        id: idUpdate,
                                        message: messageUpdate
                                    }))
                                    setNewMessage('')
                                }}>
                                <a href='#' className='feedback-yes'>Yes</a>
                            </button>
                            <button className='feedback-modal-button2'
                                onClick={() => {
                                    setNewMessage('');
                                }}>
                                <a href='#' className='feedback-no'>No</a>
                            </button>
                        </div>
                    </div>
                    <div className='modal2' id='modal2'>
                        <div className='modal-content2'>
                            <a href='#' className='feedback-close'>&times;</a>
                            <p className='feedback-text'>Are you sure you want to delete this feedback?</p>
                            <button type='button' className='feedback-modal-button1'
                                onClick={() => {
                                    dispatch(deleteFeedback({
                                        id: deleteID
                                    }))
                                }}>
                                <a href='#' className='feedback-yes'>Yes</a>
                            </button>
                            <button type='button' className='feedback-modal-button2'>
                                <a href='#' className='feedback-no'>No</a>
                            </button>
                        </div>
                    </div>
                </Collapsible>
            </Container>
        </Section>

    )
}
