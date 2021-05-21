const Login=(state=false,action)=>{

    if(action.type==='login'){
    switch(action.payload){
        case 'ADMIN' :{ return true;}
        default : {return false;}
    }
}else return state;

}

export default Login;