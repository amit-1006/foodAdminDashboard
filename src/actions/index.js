const additem=(data)=>{
    return {
        type:'Add',
        payload:data
    }
}

const deleteitem=(id)=>{
    return {
        type:'Delete',
        payload:id
    }
}

const edititem=(id)=>{
    return {
        type:'Delete',
        payload:id
    }
}



export {additem,deleteitem,edititem};