import { React, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import MethodModal from './Modal/Modal'
import { Link, useLocation } from 'react-router-dom'
import Cartreview from './CartReview/Cartreview'
import axios from 'axios'
import './index.css'

const Payment = () => {
  const [ModalOpened, setModalOpened] = useState(true)
  const [usingMethod, setusingMethod] = useState(null)

  const [state, setState] = useState(1)
  const [name, setName] = useState('')
  const [table, setTable] = useState('')
  const [number, setNumber] = useState('')
  const [address, setAddress] = useState('')

  const [nameerror, setnameerror] = useState(false)
  const [tableerror, settableerror] = useState(false)
  const [addresserror, setaddresserror] = useState(false)
  const [numbererror, setnumbererror] = useState(false)

  const [totalprice, settotalprice] = useState(0)
  const location = useLocation()
  const { cartcontext } = location.state
  let total = 0
  // eslint-disable-next-line array-callback-return
  cartcontext.map((cartItem, index) => {
    total = total + cartItem.price * cartItem.quantity
  })
  let OrderItems = []
  cartcontext.forEach(function (a) {
    if (!this[a.name]) {
      this[a.name] = {
        name: a.name,
        quantity: a.Soluong,
        price: a.price,
        img: a.image,
      }
      OrderItems.push(this[a.name])
    }
  }, Object.create(null))
  const data = {
    OrderItems: OrderItems,
    userName: name,
    usingMethod: usingMethod,
    totalPrice: total,
  }
  const setMethod = (value) => {
    setusingMethod(value)
    setModalOpened(false)
  }
  const handlenameChange = (event) => {
    console.log(event.target.value)
    if (!event.target.value) {
      setnameerror(true)
    } else {
      setnameerror(false)
      setName(event.target.value)
    }
  }
  const handletableChange = (event) => {
    if (!event.target.value) {
      settableerror(true)
    } else {
      settableerror(false)
      setTable(event.target.value)
    }
  }
  const handleaddressChange = (event) => {
    if (!event.target.value) {
      setaddresserror(true)
    } else {
      setaddresserror(false)
      setAddress(event.target.value)
    }
  }
  const handlenumberChange = (event) => {
    if (!event.target.value) {
      setnumbererror(true)
    } else {
      setnumbererror(false)
      setNumber(event.target.value)
    }
  }

  const updateState = () => {
    if (usingMethod === 'direct') {
      if (name === '' && table === '') {
        settableerror(true)
        setnameerror(true)
      } else {
        console.log(data)
        setState(state + 1)
      }
    } else if (usingMethod === 'away') {
      if (name === '' && address === '' && number === '') {
        setaddresserror(true)
        setnameerror(true)
        setnumbererror(true)
      } else {
        console.log(data)
        setState(state + 1)
      }
    }
  }
  const backState = () => {
    setState(state - 1)
  }
  const handleSubmit = async (event) => {
    console.log('i am here')
    event.preventDefault()
    try {
      await axios
        .post(`http://localhost:5000/api/orders/`, { data })
        .then((res) => {
          console.log(res)
          console.log(res.data)
        })
        .catch((error) => console.log(error))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      {ModalOpened ? (
        <MethodModal isOpened={ModalOpened} onChooseMethod={setMethod} />
      ) : usingMethod === 'direct' && state === 1 ? (
        <Form className='form-holder'>
          <div className='form-content'>
            <div className='form-items'>
              <h3>Payment Check</h3>
              <p>Fill in the data below.</p>
              <Form.Group controlId='exampleForm.ControlInput1'>
                <Form.Label>Tên</Form.Label>
                <Form.Control
                  onChange={handlenameChange}
                  type='text'
                  placeholder='Nguyễn Văn A'
                  value={name}
                />
                {nameerror ? (
                  <div className='invalid-feedback'>
                    This field can not be empty
                  </div>
                ) : null}
              </Form.Group>
              <Form.Group controlId='exampleForm.ControlTextarea1'>
                <Form.Label>Số bàn</Form.Label>
                <Form.Control
                  as='select'
                  value={table}
                  onChange={handletableChange}
                >
                  <option>Select the table</option>
                  <option value='1'>01</option>
                  <option value='2'>02</option>
                  <option value='3'>03</option>
                  <option value='4'>04</option>
                  <option value='5'>05</option>
                  <option value='6'>06</option>
                </Form.Control>
                {tableerror ? (
                  <div className='invalid-feedback'>
                    This field can not be empty
                  </div>
                ) : null}
              </Form.Group>
              <div className='buttons-list'>
                <Link to='/'>
                  <Button className='secondary'>Back to Shop</Button>
                </Link>
                <Button className='primary' onClick={updateState}>
                  Next
                </Button>
              </div>
            </div>
          </div>
        </Form>
      ) : usingMethod === 'away' && state === 1 ? (
        <Form className='form-holder'>
          <div className='form-content'>
            <div className='form-items'>
              <h3>Payment Check</h3>
              <p>Fill in the data below.</p>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlInput1'
              >
                <Form.Label>Tên</Form.Label>
                <Form.Control
                  onChange={handlenameChange}
                  type='text'
                  placeholder='Nguyễn Văn A'
                  value={name}
                />
                {nameerror ? (
                  <div className='invalid-feedback'>
                    This field can not be empty
                  </div>
                ) : null}
              </Form.Group>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlTextarea1'
              >
                <Form.Label>Địa chỉ</Form.Label>
                <Form.Control
                  onChange={handleaddressChange}
                  type='text'
                  placeholder='165 Baker Street'
                  value={address}
                />
                {addresserror ? (
                  <div className='invalid-feedback'>
                    This field can not be empty
                  </div>
                ) : null}
              </Form.Group>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlTextarea1'
              >
                <Form.Label>Số điện thoại</Form.Label>
                <Form.Control
                  onChange={handlenumberChange}
                  type='text'
                  placeholder='0123456789'
                  value={number}
                />
                {numbererror ? (
                  <div className='invalid-feedback'>
                    This field can not be empty
                  </div>
                ) : null}
              </Form.Group>
              <div className='buttons-list'>
                <Link to='/'>
                  <Button className='secondary'>Back to Shop</Button>
                </Link>
                <Button className='primary' onClick={updateState}>
                  Next
                </Button>
              </div>
            </div>
          </div>
        </Form>
      ) : state === 2 ? (
        <Form className='form-holder'>
          <div className='form-content'>
            <div className='form-items'>
              <h3>Review your cart</h3>
              <p>Check all the products below.</p>
              <ul className='cart-list'>
                {cartcontext.map((cartItem, index) => {
                  // settotalprice(totalprice + cartItem.price * cartItem.quantity)
                  return <Cartreview item={cartItem} index={index} />
                })}
              </ul>
              <div className='buttons-list'>
                <Button className='secondary' onClick={backState}>
                  Back
                </Button>
                <Button className='primary' onClick={handleSubmit}>
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </Form>
      ) : null}
    </div>
  )
}

export default Payment
