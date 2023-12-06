import React, { useEffect, useState } from 'react';
import {Records} from '../../model/Models';
import axios from 'axios';
import styles from './Maintable.module.css';
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import Editmodal from '../editModal/Editmodal';
import {v4 as uuidv4} from 'uuid';
import Deletemodal from '../deleteModal/Deletemodal';
import Modal from '../Modal/Modal';

const Maintable = () => {

    const [data,setData] = useState<Records[]>([]);
    const [editData,setEditData] = useState<boolean>(false);
    const [singleItem,setSingleItem] = useState<Records>(data[0]);
    const [deleteItem,setDeleteItem] = useState<boolean>(false);
    const [deleteId,setDeleteId] = useState<any>('');
    const [closeModal,setCloseModal] = useState<boolean>(false);


    useEffect(()=>{ 
       const getData= async()=>{
        try{

          // For fetching data from API
          let record =  await axios.get("https://assets.alippo.com/catalog/static/data.json"); 
            

         // For Generating random Id 
          let newData =  record.data.map((item: any)=>{
                return{
                    ...item,
                    id:uuidv4()
                }
        })

            setData(newData);
          }catch(error){
            throw new Error("Data could not get Fetched from API");
          }
        }

        getData();
      
},[]);



const handleEdit = (item:Records) =>{
    setEditData(true);
    setCloseModal(true);
    setSingleItem(item);
}



const handleDelete = (id:any) =>{
    setDeleteId(id);
    setDeleteItem(true);
    setCloseModal(true);
}



  return (
    <main className={styles.main}>
        <table className={styles.table}>
            <tr className={styles.table__header}>
                <th className={styles.table__head}>Sl. No.</th>
                <th className={styles.table__head}>Name</th>
                <th className={styles.table__head}>Age</th>
                <th className={styles.table__head}>City</th>
                <th className={styles.table__head}>Pin Code</th>
                <th className={styles.table__head}>Actions</th>
            </tr>
            {   
                data.map((item,idx)=>(
                    <tr className={styles.table__rows}>
                        <td className={styles.table__row}>{idx+1}</td>   
                        <td className={styles.table__row}>{item.name || '—'}</td>
                        <td className={styles.table__row}>{item.age || '—'}</td>
                        <td className={styles.table__row}>{item.city || '—'}</td>
                        <td className={styles.table__row}>{item.pinCode || '—'}</td>
                        <td className={styles.table__actions}>
                            <p className={styles.actions__btn} onClick={()=>handleEdit(item)}>
                                <MdEdit />
                            </p> 
                            <p className={styles.actions__btn} onClick={()=>handleDelete(item.id)}>
                                <MdDelete />
                            </p>
                        </td>
                    </tr>
                ))

            }

         {/* IF edit button clicked then EditModal will be shown */}
         {editData && closeModal &&
           <Modal setCloseModal={setCloseModal} closeModal={closeModal}>
             <Editmodal setData={setData} data={data} singleItem={singleItem} setSingleItem={setSingleItem} setEditData={setEditData}/>
            </Modal>}
           

        {/* IF delete button clicked then DeleteModal will be shown */}
        {deleteItem && closeModal &&
            <Modal setCloseModal={setCloseModal} closeModal={closeModal}>
             <Deletemodal deleteId={deleteId} setDeleteItem={setDeleteItem} setData={setData} data={data}/>  
            </Modal>}
        </table>
    </main>
  )
}

export default Maintable;