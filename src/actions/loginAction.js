
const login=(adminOrUser)=>{
    return{
        type:'login',
        payload:adminOrUser
    }
}

export default login;