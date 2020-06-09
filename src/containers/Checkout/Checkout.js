import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {



    // componentWillMount() {
    //     //parse include the ? and so on but with URL search purpose, I can basically extract that
    //     const query = new URLSearchParams(this.props.location.search)
    //     // console.log(query.entries());
    //     const ingredients = {};
    //     let price = 0;
    //     for (let param of query.entries()){
    //         //for example ['salad', '1']
    //         //0 which is just a name like this 'salad'
    //         //param[0] similar to key, param[1] similar to value
    //         if (param[0] === 'price'){
    //             price = param[1];
    //         }else{
    //             //turn this into this object format
    //             //+ means convert string into a number like '1' to 1
    //             ingredients[param[0]] = +param[1];
    //         }
    //     }
    //     this.setState({ingredients: ingredients, totalPrice: price})
    // }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        let summary = <Redirect to = '/' />
        if (this.props.ings){
            const purchasedRedirect =this.props.purchased ?  <Redirect to = '/' /> : null;
            summary = (
                <div>
                    {purchasedRedirect}
                    <CheckoutSummary
                        ingredients={this.props.ings}
                        checkoutCancelled={this.checkoutCancelledHandler}
                        checkoutContinued={this.checkoutContinuedHandler}/>
                    <Route
                        path={this.props.match.path + '/contact-data'}
                        component={ContactData} />
                </div>
            )
        }
        return summary;
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
};




export default connect(mapStateToProps)(Checkout);
