// Counter Action

export const increment = () => {
    return {
        type: 'INCREMENT',
    };
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
}

// Cart Action

export const addCart = (products) => {
    return {
        type: 'ADD_CART',
        payload: products
    };
}

export const loadCart = (products) => {
    return {
        type: 'LOAD_CART',
        payload: products
    }
}

export const removeProduct = (products) => {
    return {
        type: 'REMOVE_PRODUCT',
        payload: products
    }
}