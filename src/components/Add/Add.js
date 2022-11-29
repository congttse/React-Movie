import { useFormik } from 'formik'
import React from 'react'
import { Button, Checkbox, Container, TextInput } from 'react-materialize'
import * as Yup from 'yup'
import './Add.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Add() {
    const baseUrl = `https://635dce5ced25a0b5fe3a2e30.mockapi.io/Films`
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            image: '',
            title: '',
            type: '',
            duration: '',
            year: '',
            nation: '',
            director: '',
            info: '',
            trailer: '',
            hot: false
        },
        onSubmit: (values) => {
            alert('Create a movie successful!')
        },
        validationSchema: Yup.object({
            image: Yup.string().required('Required'),
            title: Yup.string().required('Required'),
            type: Yup.string().required('Required'),
            duration: Yup.string().required('Required'),
            year: Yup.number().required('Required'),
            nation: Yup.string().required('Required'),
            director: Yup.string().required('Required'),
            info: Yup.string().required('Required'),
            trailer: Yup.string().required('Required')
        })
    })

    const checkDisabled = (image, title, type, duration, year, nation, director, info, trailer) => {
        if (image !== '' & title !== '' & type !== '' & duration !== ''
            & year !== '' & nation !== '' & director !== '' & info !== '' & trailer !== '') {
            return false;
        } else {
            return true;
        }
    }

    const postData = () => {
        axios.post(baseUrl, {
            image: formik.values.image,
            title: formik.values.title,
            type: formik.values.type,
            duration: formik.values.duration,
            year: formik.values.year,
            nation: formik.values.nation,
            director: formik.values.director,
            info: formik.values.info,
            trailer: formik.values.trailer,
            hot: formik.values.hot
        })
            .then(() => {
                navigate('/')
            })
    }

    return (
        <Container className='containerAdd'>
            <form onSubmit={formik.handleSubmit}>
                <TextInput name='image' placeholder='URL of image'
                    onChange={formik.handleChange} value={formik.values.image}
                    onBlur={formik.handleBlur} />
                {formik.errors.image && formik.touched.image &&
                    (<p style={{ color: 'red' }}>{formik.errors.image}</p>)}
                <TextInput name='title' placeholder='Title of movie'
                    onChange={formik.handleChange} value={formik.values.title}
                    onBlur={formik.handleBlur} />
                {formik.errors.title && formik.touched.title &&
                    (<p style={{ color: 'red' }}>{formik.errors.title}</p>)}
                <TextInput name='type' placeholder='Type of movie'
                    onChange={formik.handleChange} value={formik.values.type}
                    onBlur={formik.handleBlur} />
                {formik.errors.type && formik.touched.type &&
                    (<p style={{ color: 'red' }}>{formik.errors.type}</p>)}
                <TextInput name='duration' placeholder='Duration of movie'
                    onChange={formik.handleChange} value={formik.values.duration}
                    onBlur={formik.handleBlur} />
                {formik.errors.duration && formik.touched.duration &&
                    (<p style={{ color: 'red' }}>{formik.errors.duration}</p>)}
                <TextInput name='year' placeholder='Year'
                    onChange={formik.handleChange} value={formik.values.year}
                    onBlur={formik.handleBlur} />
                {formik.errors.year && formik.touched.year &&
                    (<p style={{ color: 'red' }}>{formik.errors.year}</p>)}
                <TextInput name='nation' placeholder='Nation'
                    onChange={formik.handleChange} value={formik.values.nation}
                    onBlur={formik.handleBlur} />
                {formik.errors.nation && formik.touched.nation &&
                    (<p style={{ color: 'red' }}>{formik.errors.nation}</p>)}
                <TextInput name='director' placeholder='Director of movie'
                    onChange={formik.handleChange} value={formik.values.director}
                    onBlur={formik.handleBlur} />
                {formik.errors.director && formik.touched.director &&
                    (<p style={{ color: 'red' }}>{formik.errors.director}</p>)}
                <TextInput name='info' placeholder='Info of movie'
                    onChange={formik.handleChange} value={formik.values.info}
                    onBlur={formik.handleBlur} />
                {formik.errors.info && formik.touched.info &&
                    (<p style={{ color: 'red' }}>{formik.errors.info}</p>)}
                <TextInput name='trailer' placeholder='Trailer of movie'
                    onChange={formik.handleChange} value={formik.values.trailer}
                    onBlur={formik.handleBlur} />
                {formik.errors.trailer && formik.touched.trailer &&
                    (<p style={{ color: 'red' }}>{formik.errors.trailer}</p>)}
                <Checkbox name='hot' filledIn label='Hot' checked={formik.values.hot} value='False'
                    onClick={formik.handleChange} />
                <div className='createButton'>
                    <Button type='submit'
                        onClick={postData}
                        disabled={checkDisabled(
                            formik.values.image,
                            formik.values.title,
                            formik.values.type,
                            formik.values.duration,
                            formik.values.year,
                            formik.values.nation,
                            formik.values.director,
                            formik.values.info,
                            formik.values.trailer,
                        )}
                        className='textCreate'>
                        Create
                    </Button>
                </div>
            </form>
        </Container >
    )
}