const initialState = {
    list: [
        {
            id: 1,
            name: 'Example Item'
        },
        {
            id: 2,
            name: 'Second Item'
        }
    ],
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case 'ADD_TO_DO':
            return {...state, list:[...state.list, action.payload] }

        default:
            return state;
    }
} 