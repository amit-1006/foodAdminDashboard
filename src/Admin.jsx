import React, { useState } from 'react';
import ListItem from './ListItem';
import {useSelector,useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {additem,deleteitem,edititem} from './actions';


const Admin=()=>{

  const [detail,setdetail]=useState({
     dname:'',
     dprotein:'',
     dcarbs:'',
     dfat:'' 
  }
  );

  const modifier=useSelector((state)=> state.Modifier);
  
  const dispatch=useDispatch();

 // dispatch(login(''));

 

  const update=(event)=>{

    if(event.target.name==="dishname"){
       setdetail({...detail,dname:event.target.value});
    }
    else if(event.target.name==="dishprotein"){
      setdetail({...detail,dprotein:event.target.value});
    }
    else if(event.target.name==="dishcarbs"){
      setdetail({...detail,dcarbs:event.target.value});
    }
    else{
      setdetail({...detail,dfat:event.target.value});
    } 
  }


  const AddDish=(e)=>{

    e.preventDefault();
    let flag=0;

    if(detail.dname===''){
      alert("Dish Name required");
      return;
    }
    if(detail.dprotein==='' || detail.dfat==='' || detail.dcarbs===''){
      alert("No field can be empty");
      return;
    }

    modifier.map((val,index)=>{

      if(val.dishName===detail.dname){
        alert(detail.dname +" has already been added");
        flag=1;
      }

    });

    const proteinVal=parseInt(detail.dprotein);
    const carbsVal=parseInt(detail.dcarbs);
    const fatVal=parseInt(detail.dfat);


    const calorie=4*(proteinVal+carbsVal)+9*fatVal;
    if(isNaN(calorie) || (proteinVal<0 || fatVal<0 || carbsVal<0)){
      alert('Proteins,Carbohydates and Fat content should be non-negative integer');
      return;
    }

    let obj={};

    obj.dishName=detail.dname;
    obj.dishprotein=detail.dprotein;
    obj.dishfat=detail.dfat;
    obj.dishcarbs=detail.dcarbs;
    obj.dishCalorie=calorie;
    
    if(flag===0)
    dispatch(additem(obj));

    setdetail({
      dname:'',
      dprotein:'',
      dfat:'',
      dcarbs:''
    });

    return;

  }

  const deleteDish=(id)=>{

    dispatch(deleteitem(id));

    };

    const editDish=(id)=>{

     setdetail({...detail,dname:modifier[id].dishName,dprotein:modifier[id].dishprotein,dfat:modifier[id].dishfat,dcarbs:modifier[id].dishcarbs});
     
     dispatch(edititem(id));
        
    }


  return (
    <>
  <div className="admin-div">
  <Link className="logout-btn" to='/'>Logout</Link>
    <form className="form-div">
    <div className="form-item">
        <label >Dish Name</label>
        <input type="text" value={detail.dname} name="dishname" autoComplete="off" onChange={update}/>
    </div>    

    <div className="form-item">

        <label >Protein Content(in grams)</label>
        <input type="text" value={detail.dprotein} name="dishprotein" autoComplete="off" onChange={update}/>
     </div>   

     <div className="form-item">
        <label >Carbohydrate Content(in grams)</label>
        <input type="text" value={detail.dcarbs} name="dishcarbs" autoComplete="off" onChange={update}/>
      </div>  

      <div className="form-item">

        <label>Fat Content(in grams)</label>
        <input type="text" value={detail.dfat} name="dishfat" autoComplete="off" onChange={update}/>
        </div>

        <div className="form-item">

        <button className="add-btn" onClick={AddDish}>Add Dish</button>
        </div>

    </form>

    <div className="list-item-div">
      <ul className="list-item">
        <li className="item">Dish Name</li>
        <li className="item">Protein(in gm)</li>
        <li className="item">Carbohydrate(in gm)</li>
        <li className="item">Fat(in gm)</li>
        <li className="item">Calories(in kcal)</li>
      
      </ul>
    </div>

    <div className="table">
      {
        modifier.map((val,index)=>{
           return (<ListItem details={val} key={index} id={index} callbackDelete={deleteDish} callbackEdit={editDish} isAdmin={1}/>);
      })}
    </div>

   

    


    </div>
    
    </>
   
  );

}

export default Admin;