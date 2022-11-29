import React from 'react'
import { Icon, TextInput, Button, Select, Textarea, Switch } from 'react-materialize';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from '@reduxjs/toolkit';
import { addFeedback } from '../Redux/feedbackSlice'
import './Contact.css'
import { UserAuth } from '../Context/AuthContext';
export default function Contact() {
    const dispatch = useDispatch();
    const { user } = UserAuth();
    // const [testDisable, setTestDisabled] = useState(true);
    const listOfPlace = ['Viet Nam', 'USA', 'England', 'Australia', 'Canada', 'France']
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            place: '',
            subject: '',
            message: '',
            toogle: false,
        }, onSubmit: (values) => {
            // alert(JSON.stringify(formik.values))
            alert('Send message success')
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .required('This field must be required!')
                .min(2, 'At least 2 characters.')
                .max(10, 'The maximum character length is 10 characters'),
            lastName: Yup.string()
                .required('This field must be required!')
                .min(2, 'At least 2 characters')
                .max(10, 'The maximum character length is 10 characters'),
            email: Yup.string()
                .required('This field must be required!')
                .email('Invalid email! Please try again.'),
            phone: Yup.number()
                .required('This field must be required!')
                .integer().typeError('Invalid phone! Please try again.')
                .min(7, 'At least 7 numbers.'),
            place: Yup.string()
                .required('This field must be selected!')
                .oneOf([listOfPlace], 'Invalid place! Please try again.'),
            subject: Yup.string()
                .required('This field must be required!')
                .min(3, 'At least 3 characters.')
                .max(10, 'The maximum character length is 10 characters.'),
            message: Yup.string()
                .required('This field must be required!')
                .min(5, 'At least 5 characters')
                .max(100, 'The maximum character length is 100 characters.'),
            toogle: Yup.boolean()
                .oneOf([true], 'The terms and conditions must be accepted.')
        })
    })
    const checkDisabled = (firstName, lastName, email, phone, place, subject, message, toogle) => {
        if (firstName !== '' && lastName !== '' && email !== '' && phone !== '' && place !== '' && subject !== '' && message !== '' && toogle) {
            return false;
        } else {
            return true;
        }
    }
    return (
        <div className='contact'>
            <div className='contact-left'>
                <div className='contact-address'>
                    <Icon left className='contact-left-icon'>location_on</Icon>
                    <span> Address </span>
                    <p>Nguyen Xien Street, District 9, Ho Chi Minh City</p>
                </div>
                <div className='contact-phone'>
                    <Icon left className='contact-left-icon' >local_phone</Icon>
                    <span>  Phone </span>
                    <p>+84 393215170</p>
                </div>
                <div className='contact-email'>
                    <Icon left className='contact-left-icon' >email</Icon>
                    <span> Email </span>
                    <p>congttse150167@fpt.edu.vn</p>
                </div>
            </div>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <h2 className='form-heading'>Send us the message</h2>
                    <TextInput type='text' className='form-input' name='firstName'
                        placeholder='First Name'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}></TextInput>
                    {formik.errors.firstName && formik.touched.firstName && (
                        <p className='contact-error'>{formik.errors.firstName}</p>
                    )}
                    <TextInput type='text' className='form-input' name='lastName'
                        placeholder='Last Name'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}></TextInput>
                    {formik.errors.lastName && formik.touched.lastName && (
                        <p className='contact-error'>{formik.errors.lastName}</p>
                    )}
                    <TextInput type='text' className='form-input' name='email'
                        placeholder='Your Email'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}></TextInput>
                    {formik.errors.email && formik.touched.email && (
                        <p className='contact-error'>{formik.errors.email}</p>
                    )}
                    <TextInput type='text' className='form-input' name='phone'
                        placeholder='Your Phone'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}></TextInput>
                    {formik.errors.phone && formik.touched.phone && (
                        <p className='contact-error'>{formik.errors.phone}</p>
                    )}
                    <Select label='Choose your place' name='place' className='form-input'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}>
                        <option value={1}>Choose your place</option>
                        <option>Viet Nam</option>
                        <option>USA</option>
                        <option>England</option>
                        <option>Australia</option>
                        <option>Canada</option>
                        <option>France</option>
                    </Select>
                    {formik.errors.place && formik.touched.place && (
                        <p className='contact-error'>{formik.errors.place}</p>
                    )}
                    <TextInput type='text' className='form-input' name='subject'
                        placeholder='Subject'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}></TextInput>
                    {formik.errors.subject && formik.touched.subject && (
                        <p className='contact-error'>{formik.errors.subject}</p>
                    )}
                    <Textarea
                        placeholder='Give us your message' name='message'
                        className='form-input'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}></Textarea>
                    {formik.errors.message && formik.touched.message && (
                        <p className='contact-error'>{formik.errors.message}</p>
                    )}
                    <Switch onLabel='Agree to terms and conditions.' name='toogle'
                        onClick={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    {formik.errors.toogle && formik.touched.toogle && (
                        <p className='contact-error'>{formik.errors.toogle}</p>
                    )}

                    <Button type='submit' className='contact-button-send'
                        disabled={checkDisabled(formik.values.firstName,
                            formik.values.lastName,
                            formik.values.email,
                            formik.values.phone,
                            formik.values.place,
                            formik.values.subject,
                            formik.values.message,
                            formik.values.toogle)}
                        onClick={() => {
                            dispatch(addFeedback({
                                id: nanoid(),
                                firstName: formik.values.firstName,
                                lastName: formik.values.lastName,
                                email: formik.values.email,
                                phone: formik.values.phone,
                                place: formik.values.place,
                                subject: formik.values.subject,
                                message: formik.values.message,
                                switch: formik.values.toogle
                            }));
                        }}
                    >
                        Send message
                    </Button>
                    {
                        user ?
                            (
                                <Link to='/feedback' className='contact-link' >
                                    <Button className='contact-button-view'>
                                        <Icon left>visibility</Icon>
                                        View Feedback
                                    </Button>
                                </Link>
                            )
                            :
                            <div></div>
                    }
                </form>
            </div>
        </div >
    )
}
