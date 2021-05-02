import {ADD_TO_CART} from '../constant';

const initialState = {
    cardData: []
}

const cardItems = (state = [], action) => {

    switch (action.type){
        case ADD_TO_CART :
            console.log("reducer", action.data);
            return [
                ...state,
                {cardData : action.data}
            ]
        default:
            return state;
    }  
}

export default cardItems;