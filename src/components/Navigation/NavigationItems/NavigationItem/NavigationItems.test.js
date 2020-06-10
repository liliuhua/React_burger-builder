import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from '../NavigationItems';
import NavigationItem from '../NavigationItem/NavigationItem';

configure({adapter: new Adapter()});

describe('<NavigationItems />', ()=> {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NavigationItems/>);
    })

    it('should render two <NavigationItem /> elements if not authenticated', ()=> {
        // const wrapper = shallow(<NavigationItems />);
        //Allow us to look into the wrapper and see if it contains a certain content
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });

    it('should render three  <NavigationItem /> elements if authenticated', ()=> {
        // const wrapper = shallow(<NavigationItems isAuthenticated/>);
        // wrapper = shallow(<NavigationItems isAuthenticated/>);

        //use enzyme method, enzyme package
        wrapper.setProps({isAuthenticated: true});

        //Allow us to look into the wrapper and see if it contains a certain content
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });


    it('should render three <NavigationItem /> elements if not authenticated', ()=> {
        wrapper.setProps({isAuthenticated: true});
        //toEqual(true) is a jest method
        expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);
    });
})
