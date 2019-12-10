
 export default (state = {}, action) =>{
    switch(action.type){
        case 'SELECT':
            return action.select
       default:
            return state;
    }
}