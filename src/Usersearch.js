import React, { useState } from 'react';
import {useSelector} from 'react-redux';

const Usersearch=()=>{

    const [dishname,setdishname]=useState('');
    const list=useSelector(state=> state.Modifier);

    const FoundOrNot=(event)=>{

        setdishname(event.target.value);

    }

    const Search=()=>{

        let flag=0;

        list.map((value,index)=>{
            if(value.dishName===dishname || dishname.toLowerCase()===value.dishName.toLowerCase() || dishname.toUpperCase()===value.dishName.toUpperCase()){
                alert(`Item Found! \n Dish : ${value.dishName} \n Protein: ${value.dishprotein}gm \n Carbohydrate: ${value.dishcarbs}gm \n Fat: ${value.dishfat}gm \n Calories: ${value.dishCalorie}kcal`);
                flag=1;
                return;
            }
        })

        if(flag===0)
        alert("No such item found!!");

        
    }

    return(
    <>
    <div className='searchbar'>
    <input className="search-input" type="text" name="dish" autoComplete="off" value={dishname} onChange={FoundOrNot}/>
    <button className='search-btn' onClick={Search}>Search</button>
    </div>
    </>
    );

}

export default Usersearch;