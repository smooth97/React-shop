const cartReducer = (state = 0, action) => {
    switch (action.type) {
        case 'ADD_CART' :
            return {
                ...state,
                productAdd: Object.assign({}, action.payload)
            }
        case 'LOAD_CART' :
            return {
                ...state,
                productAdd: action.payload
            }
        case 'REMOVE_CART' :
            return {
                ...state,
                productRemove: Object.assign({}, action.payload)
            }
        default :
            return state;
    }
}

export default cartReducer;