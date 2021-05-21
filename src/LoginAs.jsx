import React from 'react';
import {Link,Route,Switch,Redirect} from 'react-router-dom';


import User from './User';
import Error from './Error';
import Admin from './Admin';
import AdminLogin from './AdminLogin';
import {useSelector,useDispatch} from 'react-redux';
import login from './actions/loginAction';
import './index.css';


const LoginAs=()=>{

  const isAdmin=useSelector(state=>state.Login);
  const dispatch=useDispatch();


  const Links=()=>{
    dispatch(login(''));
    return (
    <>
      <h1>Login As</h1>
      <div className="all-links">
      <Link className='link' to='/adminlogin'>Admin</Link>
      <Link className='link' to='/user'>User</Link>
      </div>
    </>)
  }

  return(<>

  <Switch>
    <Route exact path='/' component={Links}/>
    <Route exact path='/user' component={User}/>
    <Route exact path='/adminlogin' component={AdminLogin}/>
    <Route exact path='/error' component={Error}/>
    {isAdmin? <Route exact path='/admin' component={Admin}/>:<Redirect to='/'/>}
    
    
  </Switch>

  </>
  );



  
}

export default LoginAs;