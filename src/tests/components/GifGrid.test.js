import react from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe('Testing GifGrid', () => {
  const category = 'alo';
  
  test('should be shown correctly', () => {
    useFetchGifs.mockReturnValue({ 
      data: [], 
      loading: true
    });
    const wrapper = shallow(<GifGrid category={ category } />);
    expect ( wrapper ).toMatchSnapshot();
  });

  test('should show items when useFetchGifs images are loaded', () => {

    const gifs = [{
      id: 'ABC',
      url: 'https://example.jpg',
      title: 'common'
    }];

    useFetchGifs.mockReturnValue({ 
      data: gifs, 
      loading: false
    });
    const wrapper = shallow(<GifGrid category={ category } />);

    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('p').exists() ).toBe(false);
    expect ( wrapper.find('GifGridItem').length ).toBe( gifs.length );
  });

});