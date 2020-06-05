import * as actionTypes from '../actions/actionTypes';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false
}

const INGREDIENT_PRICES = {
    salad: 0.6,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const burgerBuilder  = (state = initialState, action) => {
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
        case actionTypes.SET_INGREDIENTS:
            return {
                ...state,
                ingredients: {
                  salad:action.ingredients.salad,
                  bacon: action.ingredients.bacon,
                  cheese: action.ingredients.cheese,
                  meat: action.ingredients.meat
                },
                error: false
            };
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return {
                ...state,
                error: true
            };
        default:
            return state;

    }

}

export default burgerBuilder;
