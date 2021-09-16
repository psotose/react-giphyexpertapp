import React from 'react';
import { shallow } from 'enzyme'; 
import GifGridItem from '../../components/GifGridItem';

describe('Testing GifGridItem', () => {

  const title = 'Un título cualquiera';
  const url = 'https://algo.com/';
  const wrapper = shallow( <GifGridItem title={ title } url={ url }/> );
  
  test('should show the component correctly', () => {  
    expect ( wrapper ).toMatchSnapshot();
  });

  test('should have a paragraph with a title', () => {
    const p = wrapper.find('p');
    expect( p.text().trim() ).toBe( title );
  });

  test('should have the same img as the props url & alt', () => {
    const img = wrapper.find('img');
    // console.log( img.html() ); -> con esto veo todo el objeto, console.log( img.props() ); -> me devuelve el mismo obj xo con props en vez de atributos el
    expect( img.prop('src') ).toBe(url);
    expect( img.prop('alt') ).toBe(title);
  });

  test('should have animate__bounce class', () => {
    const div = wrapper.find('div');
    const className = div.prop('className');
    expect( className.includes('animate__bounce') ).toBe(true);
  });
});