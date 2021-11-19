import { React, useState } from 'react'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/button'
import { Form, Card, Row, Col } from 'react-bootstrap'
import MethodModal from './Modal/Modal'
import './index.css'

const Payment = () => {
  const [ModalOpened, setModalOpened] = useState(true)
  const [usingMethod, setusingMethod] = useState(null)
  const setMethod = (value) => {
    setusingMethod(value)
    setModalOpened(false)
  }

  return (
    <div>
      {ModalOpened ? (
        <MethodModal isOpened={ModalOpened} onChooseMethod={setMethod} />
      ) : usingMethod === 'direct' ? (
        <Form>
          <Row>
            <Col xs={3}></Col>
            <Col xs={6}>
              <Form.Group controlId='exampleForm.ControlInput1'>
                <Form.Label>Tên</Form.Label>
                <Form.Control type='text' placeholder='Nguyễn Văn A' />
              </Form.Group>
              <Form.Group controlId='exampleForm.ControlTextarea1'>
                <Form.Label>Số bàn</Form.Label>
                <Form.Control as='select'>
                  <option>Open this select menu</option>
                  <option value='1'>01</option>
                  <option value='2'>02</option>
                  <option value='3'>03</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={3}></Col>
          </Row>
        </Form>
      ) : usingMethod === 'away' ? (
        <Form className='mt-5'>
          <Row>
            <Col xs={3}></Col>
            <Col xs={6}>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlInput1'
              >
                <Form.Label>Tên</Form.Label>
                <Form.Control type='text' placeholder='Nguyễn Văn A' />
              </Form.Group>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlTextarea1'
              >
                <Form.Label>Địa chỉ</Form.Label>
                <Form.Control type='text' placeholder='165 Baker Street' />
              </Form.Group>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlTextarea1'
              >
                <Form.Label>Số điện thoại</Form.Label>
                <Form.Control type='text' placeholder='0123456789' />
              </Form.Group>
            </Col>
            <Col xs={3}></Col>
          </Row>
        </Form>
      ) : null}
    </div>
  )
}

export default Payment
