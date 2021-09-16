import { getGifs } from '../../helpers/getGifs';

describe('Testing getGifs Fetch', () => {

  test('should bring 10 elements', async() => {
    
    const gifs = await getGifs('One Punch');

    expect( gifs.length ).toBe(10);

  }); 
  test('should not bring elements', async() => {
    
    const gifs = await getGifs('');
    // console.log( gifs );
    expect( gifs.length ).toBe( 0 );

  });  
});
