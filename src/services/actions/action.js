import {ADD_TO_CART} from '../constant';

export const addToCart = (data) => {
    console.warn("action function called", data);
    return {
        type: ADD_TO_CART,
        data: data
    }
}

// export const removeToCart = (data) => {
//     return {
//         type: 'REMOVE_TO_CART',
//         data: data
//     }
// }