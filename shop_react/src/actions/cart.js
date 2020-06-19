export const addToCard = obj => ({
    type: 'ADD_TO_CART',
    payload: obj
});

export const removeFromCard = id => ({
    type: "REMOVE_FROM_CART",
    payload: id
})