import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
    state = {
        ingredients: null,
        price:0
    }

    componentWillMount() {
        //parse include the ? and so on but with URL search purpose, I can basically extract that
        const query = new URLSearchParams(this.props.location.search)
        // console.log(query.entries());
        const ingredients = {};
        let price = 0;
        for (let param of query.entries()){
            //for example ['salad', '1']
            //0 which is just a name like this 'salad'
            //param[0] similar to key, param[1] similar to value
            if (param[0] === 'price'){
                price = param[1];
            }else{
                //turn this into this object format
                //+ means convert string into a number like '1' to 1
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState({ingredients: ingredients, totalPrice: price})
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}/>
                 <Route
                     path={this.props.match.path + '/contact-data'}
                     // {...props} pass all information
                     render={ (props) => (<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props} />)}/>
            </div>
        )
    }
}

export default Checkout;
