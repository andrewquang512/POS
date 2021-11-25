import { React } from 'react'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/button'
import Modal from 'react-bootstrap/Modal'
import Card from 'react-bootstrap/Card'

const MethodModal = (props) => {
  const chooseDirectMethod = () => {
    props.onChooseMethod('Directly')
  }
  const chooseAwayMethod = (e) => {
    props.onChooseMethod('Online')
  }
  return (
    <Modal show={props.isOpened}>
      <Modal.Header style={{ margin: '0 auto' }}>
        <Modal.Title>Choosing Using Method</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card className='my-3 method' onClick={chooseDirectMethod}>
          <Card.Title className='my-3 modal-card-title'>
            Dùng tại quán
          </Card.Title>
        </Card>
        <Card className='my-3 method' onClick={chooseAwayMethod}>
          <Card.Title className='my-3 modal-card-title'>Gọi mang về</Card.Title>
        </Card>
      </Modal.Body>
    </Modal>
  )
}

export default MethodModal
