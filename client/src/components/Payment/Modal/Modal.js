import { React, useState } from 'react'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/button'
import Modal from 'react-bootstrap/Modal'
import Card from 'react-bootstrap/Card'
import { Col, Row } from 'react-bootstrap'

const MethodModal = (props) => {
  const chooseDirectMethod = () => {
    props.onChooseMethod('direct')
  }
  const chooseAwayMethod = (e) => {
    props.onChooseMethod('away')
  }
  return (
    <Modal show={props.isOpened}>
      <Modal.Header style={{ margin: '0 auto' }}>
        <Modal.Title>Choosing Using Method</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <Card className='my-3 method' onClick={chooseDirectMethod}>
              <Card.Body>
                <Card.Title className='my-3'>Dùng tại quán</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='my-3 method' onClick={chooseAwayMethod}>
              <Card.Body>
                <Card.Title className='my-3'>Gọi mang về</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  )
}

export default MethodModal
