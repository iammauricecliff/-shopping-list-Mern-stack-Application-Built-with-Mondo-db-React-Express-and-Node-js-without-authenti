import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from '../actions/types';

const initialState = {
    //for the redux static value(our local state)
    // items: [
    //     {id:Math.random(), name: "television"},
    //     {id:Math.random(), name: "laptops"},
    //     {id:Math.random(), name: "phones"},
    //     {id:Math.random(), name: "destops"},
    //     {id:Math.random(), name: "gass cooker"},
    // ]

    items: [],
    loading: false,
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading: false
            }
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            }
        case ADD_ITEM:
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
        case ITEMS_LOADING:
            return {
                ...state,
                loading: true,
            }


        default:
            return state
    }
}