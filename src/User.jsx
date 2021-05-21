import React from 'react';
import ListItem from './ListItem';
import {useSelector} from 'react-redux';
import {Link,Switch,Route} from 'react-router-dom';
import LoginAs from './LoginAs';
import Error from './Error';
import Usersearch from './Usersearch';

const User=()=>{

const modifier=useSelector((state)=> state.Modifier);
  
  return (
    <>

    <Usersearch/>

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
           return (<ListItem details={val} key={index} id={index} isAdmin={0}/>);
      })}
    </div>

    <Link className="logout-btn" to='/'>Logout</Link>

<Switch>
  <Route exact path='/' component={LoginAs}/>
  <Route exact path='/user' component={()=>{return '';}}/>
  <Route component={Error}/>
</Switch>



    </>
   
  );

 

}

export default User;