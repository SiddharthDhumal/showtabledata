import React,{useReducer} from 'react'
import { Records } from '../../model/Models';
import styles from './Editmodal.module.css';
import Button from '../Button/Button';

interface props{
    data:Records[];
    singleItem:Records;
    setData:React.Dispatch<React.SetStateAction<Records[]>>;
    setEditData:React.Dispatch<React.SetStateAction<boolean>>;
    setSingleItem:React.Dispatch<React.SetStateAction<Records>>;
}

type EditActions = 
    {type:'name'; payload:string}
  | {type:'age'; payload:number}
  | {type:'city';payload:string}
  | {type:'pinCode';payload:number}



// For Updating the edited values

const EditReducer = (state:Records,action:EditActions) =>{
   switch(action.type){
    case 'name':
      return {...state,name: action.payload};
    
    case 'age':
      return {...state,age:action.payload};
    
    case 'city':
      return {...state,city:action.payload};
    
    case 'pinCode':
      return {...state,pinCode:action.payload};
    
    default:
       return state;
   }
} 


const Editmodal:React.FC<props> = ({data,setData,setEditData,singleItem}) => {


//  For Initilizing the state of useReducer

const initialState:Records = {
  name:singleItem.name,
  age:singleItem.age,
  city:singleItem.city,
  pinCode:singleItem.pinCode
}


const [state,dispatch] = useReducer(EditReducer,initialState);

 
// For Cancelling the editted values in modal
  const handleCancelModal=()=>{
    setEditData(false);
  }



  // On Submitting the form
  const handleSave =  (evt:React.FormEvent)=>{
    evt.preventDefault();
     
      setData(
        data.map(item=>item.id===singleItem.id ? {...item,name : state.name,age:state.age,city:state.city,pinCode:state.pinCode}:item)
     )
      setEditData(false);
  }
  

  return(
    <div className={styles.editModal}>
      <h3 className={styles.edit__heading}>Edit the data</h3>
       <form className={styles.edit__form} onSubmit={handleSave}>
        <div className={styles.form__item}>
        <label className={styles.form__itemlabel}>Name:</label> 
        <input className={styles.form__itemInput} autoFocus  value={state.name} onChange={(e)=>dispatch({type:'name',payload:e.target.value})}/>
        </div>
        <div className={styles.form__item}>
        <label  className={styles.form__itemlabel}>Age:</label> 
        <input className={styles.form__itemInput} value={state.age} onChange={(e)=>dispatch({type:'age',payload:Number(e.target.value)})}/>
        </div>
        <div className={styles.form__item}>
        <label  className={styles.form__itemlabel}>City:</label> 
        <input className={styles.form__itemInput}  value={state.city} onChange={(e)=>dispatch({type:'city',payload:e.target.value})}/>
        </div>
        <div className={styles.form__item}>
        <label  className={styles.form__itemlabel}>Pin Code:</label> 
        <input className={styles.form__itemInput} value={state.pinCode} onChange={(e)=>dispatch({type:'pinCode',payload:Number(e.target.value)})}/>
        </div>
         <div className={styles.save__btns}>
           <Button className={styles.edit__saveBtns}>Save</Button>
           <Button className={styles.edit__cancelBtn} onClick={handleCancelModal}>Cancel</Button>
         </div>
       </form>
       
    </div>
  )
}

export default Editmodal;
