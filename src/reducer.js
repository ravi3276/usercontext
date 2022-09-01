export const initialState ={
    user:[],
}

export const reducer =(state,action)=>{

    switch (action.type) {
        case 'ADD_USER':
            return {
                ...state,
                user:[...state.user,action.user] //we can use this  user: state.user.concat(action.user)
            }
        case 'REMOVE_USER':
            console.log(action.userId)
            let remaingUser=state.user.splice(action.userId,1)
            return {
                ...state,
            }
    
        default:
            return state;
    }

}