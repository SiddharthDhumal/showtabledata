import React from 'react'
import styles from './Deletemodal.module.css';
import { Records } from '../../model/Models';
import Button from '../Button/Button';

interface props{
  deleteId:any;
  data:Records[];
  setData:React.Dispatch<React.SetStateAction<Records[]>>;
  setDeleteItem:React.Dispatch<React.SetStateAction<boolean>>;
}



const Deletemodal:React.FC<props> = ({deleteId,setDeleteItem,data,setData}) => {


// For Cancelling the deleted value in modal 
 const handleCancel = (e:React.FormEvent) =>{
  e.preventDefault();
  setDeleteItem(false);
 } 

//  For Deleting the selected value in modal
 const handleDelete = (e:React.FormEvent,id:any) =>{
  
  e.preventDefault();
  setData(
    data.filter(item=>item.id !==id)
  )

  setDeleteItem(false);
 
 }


  return(
    <div className={styles.deleteModal}>
       {
        data.map(item=>item.id===deleteId && 
          <div className={styles.delete__confirmation}>
            <h3 className={styles.confirmation__heading}>Are you sure ?</h3>
            <div className={styles.items}>
            <p className={styles.item}><span className={styles.item__types}>Name: </span><span className={styles.item__values}>{item.name || '—'}</span></p>
            <p className={styles.item}><span className={styles.item__types}>Age: </span><span className={styles.item__values}>{item.age || '—'}</span></p>
            <p className={styles.item}><span className={styles.item__types}>City: </span><span className={styles.item__values}>{item.city || '—'}</span></p>
            <p className={styles.item}><span className={styles.item__types}>Pin Code: </span><span className={styles.item__values}>{item.pinCode || '—'}</span></p>
            </div>
            <div className={styles.delete__btns}>
            <Button className={styles.delete__cancel__btns} onClick={(e:React.FormEvent)=>{handleCancel(e)}}>Cancel</Button>
            <Button className={styles.delete__confirm__btns} onClick={(e:React.FormEvent)=>{handleDelete(e,item.id)}}>Confirm</Button>
            </div>
          </div>
          )
       }
    </div>
  )
}

export default Deletemodal;