import React from 'react';
import styles from './Modal.module.css';
import { HiXMark } from "react-icons/hi2";
import { createPortal } from 'react-dom';

interface props{
    children:any;
    closeModal:boolean
    setCloseModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal:React.FC<props> = ({children,setCloseModal,closeModal}) => {
 
  const  handleCloseModal = (e:React.FormEvent) =>{
    e.preventDefault();
    setCloseModal(false);
    console.log(closeModal);
    console.log('clicked');
  }


  return createPortal(
    
    <div className={styles.overlay}>
        <div className={styles.modal}>
        <button className={styles.close__btn}>
          <HiXMark  onClick={(e)=>handleCloseModal(e)} />
        </button>
        <div>{children}</div>
      </div>
    </div>,
    document.body
    
  )
}

export default Modal;