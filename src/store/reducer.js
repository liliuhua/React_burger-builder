import * as actionTypes from './actions';

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    totalPrice: 4,
}

const INGREDIENT_PRICES = {
    salad: 0.6,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const reducer  = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: {
                    //ingredients which is object on its own would still point to that old object
                    //fix this by spreading out the properties of that old object into a new object
                    ...state.ingredients,
                    // ES6 dynamically overwrite a property in a given javascript object
                    [action.ingredientName]:state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]

            };
        case actionTypes.REMOVE_INGREDIENTS:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            };
        default:
            return state;

    }

}

export default reducer;
