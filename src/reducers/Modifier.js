let list=[];

const Modifier=(state=list,action)=>{

    switch(action.type){
        case 'Add':
            return [...state,action.payload];
        case 'Delete':
            return (
               state.filter((val,index)=>{
                return index!==action.payload;
               })
            ); 
        case 'Edit': 
        return (
            state.filter((val,index)=>{
             return index!==action.payload;
            })
         ); 
        default: return state;    
    }

}

export default Modifier;