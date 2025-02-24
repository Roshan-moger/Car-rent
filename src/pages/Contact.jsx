import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { Col, Container, Form, FormGroup, Input, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/contact.css'

const socialLinks=[
    {
        url:'#',
        icon:"ri-facebook-line"
    },
    {
        url:'#',
        icon:"ri-instagram-line"
    },
    {
        url:'#',
        icon:"ri-linkedin-line"
    },
    {
        url:'#',
        icon:"ri-twitter-line"
    }


]


const Contact = () => {
  return (
    <Helmet title='Contact'>
        <CommonSection title='Contact Us'/>

        <section>
            <Container>
                <Row>
                    <Col lg='7' md='7'>
                        <h6 className="fw-bold mb-4"> Get in Touch</h6>
                        <Form>
                            <FormGroup className='contact__form'>
                                <Input placeholder='Your name' type='text'></Input>
                            </FormGroup>
                            <FormGroup>
                                <Input placeholder='Your Email' type='email'></Input>
                            </FormGroup>
                            <FormGroup>
                                <textarea name='' id='' rows='5' placeholder='Message' className='textarea'>

                                </textarea>
                                    </FormGroup>

                                    <button className="btn contact__btn" type='submit'>Send</button>
                        </Form>
                    </Col>
                    <Col lg='5' md='5'>
                        <div className="contact__info">
                            <h6 className="fw-bold"> Contact Information</h6>
                            <p className="section__description mb-0">123 ZindaBazar
                                Banglore city, India
                            </p>
                            
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <h6 className="fs-6 mb-0 "> Email:</h6>
                            <p className="section__description mb-0">example@gmail.com
                                
                            </p>

                            
                        </div>
                        <h6 className="fw-bold">Follow Us</h6>
                        <div className='d-flex align-items-center gap-4 mt-3'>
                            {
                                socialLinks.map((item,index)=>(
                                    <Link to={item.url} key={index} className='social__link-icon'>
                                        <i class={item.icon}></i>
                                    </Link>
                                ))
                            }

                        </div>
                    </Col >
                </Row>
            </Container>
        </section>
    </Helmet>

  )
}

export default Contact