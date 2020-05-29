import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";


const burger = (props) => {
    console.log(props)
    // transform object to array, keys return a array
    // for example contain a string salad, bacon and so on.
    //values are not part of the array
    let transformedIngredients = Object.keys(props.ingredients)
        // transform this string value into an array with as many elements as we have
        // ingredients for a given ingredient.
        .map(igKey => {
            //it should have a length of two for example cheese: 2 ，
            //the length should be the amount of the given ingredient
            // console.log([...Array(props.ingredients[igKey])]);
            return[...Array(props.ingredients[igKey])]
                //underscore as an argument name to indicate that it's blank
                //i is index
                .map((_, i) => {
                 // idKey is like salad i is like 1,2,3 and so on
                    // so this create a unique key for each ingredient
                    // console.log(igKey+i);
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        })
        //allows us to transform an array into something else
        // arr is previous value, el is current value
        //[] is an initial value
        .reduce((arr,el) => {
            // it will loop through all the elements and
            // simply add them to the initial values step by step
            //return the updated values starting with the initial one is then
            //stored in the first argument
            return arr.concat(el)
        },[]);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients !</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default burger;
