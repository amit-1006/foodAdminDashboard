let list=[];
list.push({dishName:'DUMMY DISH1',dishprotein:'0',dishcarbs:'0',dishfat:'0',dishCalorie:0});
list.push({dishName:'DUMMY DISH2',dishprotein:'0',dishcarbs:'0',dishfat:'0',dishCalorie:0});
list.push({dishName:'DUMMY DISH3',dishprotein:'0',dishcarbs:'0',dishfat:'0',dishCalorie:0});


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