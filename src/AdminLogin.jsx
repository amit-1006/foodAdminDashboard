import React, { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import login from './actions/loginAction';
import {Route,Redirect,Link} from 'react-router-dom';
import Admin from './Admin';

const AdminLogin=()=>{

    const isAdmin=useSelector(state=> state.Login);
    const dispatch=useDispatch();

    let code='';

    const [password,setpassword]=useState('');
    const updatePassword=(event)=>{
        setpassword(event.target.value);
        dispatch(login(event.target.value));
    }

    return (
        <>
        <div className="adminlogin-main-div">
            <form className="adminlogin-form">
                <label>Admin Password</label>
                <input type='password' name="password" value={password} onChange={updatePassword}/>
               
                <Link to='/admin' className='enter-btn'>Enter
               </Link>
               
            </form>
            {isAdmin? <Route exact path='/admin' component={Admin}/>:<Redirect to='/adminlogin'/>}
            
            </div>

            
           

        </>
    );

}

export default AdminLogin;