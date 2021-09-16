import react from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import { AddCategory } from "../../components/AddCategory";

describe('Testing AddCategory', () =>{

  const setCategories = jest.fn();
  let wrapper = shallow(< AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(< AddCategory setCategories={setCategories} />);
  });

  test('should be shown correctly', () =>{

    expect ( wrapper ).toMatchSnapshot();

  });

  test('should change the text box ', () =>{

    const input = wrapper.find('input');
    const value = "hola mundo";

    input.simulate('change', { target: { value } });
    expect( wrapper.find('p').text().trim() ).toBe( value );

  });

  test('should not post the info on submit', () => {

    wrapper.find('form').simulate('submit', { preventDefault(){} });
    expect( setCategories ).not.toHaveBeenCalled();
  });

  test('should call setCategories and clean out the text box', () => {
    const value = "hola mundo";
    wrapper.find('input').simulate('change', { target: { value } });
    wrapper.find('form').simulate('submit', { preventDefault(){} });
    expect ( setCategories ).toHaveBeenCalled();
    expect ( wrapper.find('input').prop('value') ).toBe('');
  });

});
