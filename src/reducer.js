
export const initialState = {
    basket: [],
};
export const actionTypes = {
    ADD_TO_BASKET: "ADD_TO_BASKET",
    REMOVE_FROM_BASKET: "REMOVE_FROM_BASKET"
};

const reducer = (state, action) => {

    switch (action.type) {
        case actionTypes.ADD_TO_BASKET:
            break;
        case actionTypes.REMOVE_FROM_BASKET:
            break;
        default:
            return state;
    }
};
export default reducer;