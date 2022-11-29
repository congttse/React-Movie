import React from 'react'
import { Section, Tabs, Tab, Row, Col } from 'react-materialize'
import './About.css'
export default function About() {
    return (
        <Section className='aboutSection'>
            <Tabs
                className="tab-demo z-depth-1 tabs-fixed-width design"
                scope="tabs-1"
            >
                <Tab
                    active
                    options={{
                        duration: 300,
                        onShow: null,
                        responsiveThreshold: Infinity,
                        swipeable: true
                    }}
                    title="Foundation"
                >
                    <Row className='center'>
                        <Col m={12} s={12}>
                            <h1>About</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col m={6} s={12}>
                            <p className='a-description'> My name is Tran Thanh Cong and I recently started learning about ReactJS. This is one of the pages I have designed using ReactJS.
                            </p>
                            <p className='a-description'>
                                I have studied for 3 years at FPT University, through many training and learning processes, I have accumulated a bit of knowledge about the web design process. I have applied and created this website.
                            </p>
                        </Col>
                        <Col m={6} s={12} className='a-col-second'>
                            <img src='images/my.jpg' alt='' className='a-image' />
                            <p className='photo-by'>Photo by TTC</p>
                        </Col>
                    </Row>
                </Tab>
                <Tab
                    options={{
                        duration: 300,
                        onShow: null,
                        responsiveThreshold: Infinity,
                        swipeable: false
                    }}
                    title="Achievement"
                    className='tab-2'
                >
                    <Row>
                        <Col m={4} s={12} className='about-col1-tab2'>
                            <h1 className='contentTab2'>10.000.000+</h1>
                            <h4>Customer</h4>
                            <h1>720p/1080p+</h1>
                            <h4>Quality</h4>
                            <h1>6+</h1>
                            <h4>Language</h4>
                        </Col>
                        <Col m={4} s={12} className='about-col2-tab2'>
                            <h1>10.000+</h1>
                            <h4>Comment</h4>
                            <h1>100+</h1>
                            <h4>Movie</h4>
                            <h1>6+</h1>
                            <h4>IMDb</h4>
                        </Col>
                        <Col m={4} s={12}>
                        </Col>
                    </Row>
                </Tab>
            </Tabs>
        </Section>
    )
}
