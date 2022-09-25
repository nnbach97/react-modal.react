import React, { useEffect, useRef } from 'react'
import Button from '../Button'
import ModalFooter from './Footer'
import ModalHeader from './Header'
import ModalBody from './Body'
import './Modal.scss'

const Modal = (props) => {
  const modalRef = useRef();
  useEffect(() => {
    const clickOutModal = (e) => {
      if(e.target === modalRef.current) {
        props.setShow(false)
      }
    }
    window.addEventListener('click', clickOutModal);
    return () => {
      window.removeEventListener('click', clickOutModal);
    }
  }, [props])
  return (
    <div className={`modal ${props.show ? 'active' : ''}`} ref={modalRef}>
        <div className="modal__wrap">
          <ModalHeader>Modal Header</ModalHeader>
          <ModalBody>React Modal....</ModalBody>
          <ModalFooter>
            <Button onClick={() => props.setShow(false)}>Close</Button>
          </ModalFooter>
        </div>
      </div>
  )
}

export default Modal
