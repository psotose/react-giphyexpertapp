import React from 'react'
import { shallow } from 'enzyme';
import { GifExpertApp } from "../GifExpertApp";

describe('Testing <GifExpertApp />', () => {

  test('should be render correctly', () => {
    const wrapper =  shallow(<GifExpertApp />);
    expect ( wrapper ).toMatchSnapshot();
  });

  test('should show a category list', () => {

    const categories = ['One Punch', 'DragonBall'];
    const wrapper = shallow(<GifExpertApp defaultCategories={ categories } />);

    expect ( wrapper ).toMatchSnapshot();
    expect ( wrapper.find('GifGrid').length ).toBe( categories.length );
  });

});