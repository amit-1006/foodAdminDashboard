import React from 'react';


const ListItem=(prop)=>{

    const deleteItem=(e)=>{
       
        prop.callbackDelete(prop.id);

    }

    const EditItem=()=>{

        window.scrollTo({
            top:0,
            behavior:"smooth"

        });

        prop.callbackEdit(prop.id);
    }

    return(
        <>
        <div className="list-item-div">
          <ul className='list-item'>
           <li className="item-added">{prop.details.dishName}</li>
           <li className="item-added">{prop.details.dishprotein}</li>
           <li className="item-added">{prop.details.dishcarbs}</li>
           <li className="item-added">{prop.details.dishfat}</li>
           <li className="item-added"> {prop.details.dishCalorie}</li>
           </ul>
          
        
           {(prop.isAdmin===1)
           ?<><button className='delete-btn' onClick={deleteItem}>Delete</button>
          <button className='edit-btn' onClick={EditItem}>Edit</button></>
           :''
           }

           </div>  
  
           
        </>
    );

}

export default ListItem;