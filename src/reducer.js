
export const initialState = {
    basket: [
        {
            id: "123131",
            title: "Garmin 010-01614-00 Forerunner 735XT, Black/Gray",
            image: "https://images-fe.ssl-images-amazon.com/images/I/31IucGwsjEL._AC_AA240_FMwebp_QL65_.jpg",
            price: 299.00,
            rating: 5,
        }
    ],
    user: null,
};
export const actionTypes = {
    ADD_TO_BASKET: "ADD_TO_BASKET",
    REMOVE_FROM_BASKET: "REMOVE_FROM_BASKET"
};
export const getBasetketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);
const reducer = (state, action) => {

    switch (action.type) {
        case actionTypes.ADD_TO_BASKET:
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
            break;
        case actionTypes.REMOVE_FROM_BASKET:
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if (index >= 0) {
                newBasket.splice(index, 1);
            }
            else {
                console.warn(`Cant remove product(id:${action.id}) as its not exist`)
            }
            return { ...state, basket: newBasket, }
            break;
        default:
            return state;
    }
};
export default reducer;