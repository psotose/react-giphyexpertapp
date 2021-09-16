import {useFetchGifs} from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Testing useFetchGifs', () => {
  test('should return the initial State', async() => {
    // const { data, loading } = useFetchGifs('One Punch');
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Punch') );
    const { data, loading } = result.current;

    await waitForNextUpdate();

    expect ( data ).toEqual([]);
    expect ( loading ).toBe(true);

  });

  test('should return and array of imgs and loading: false', async() => {
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Punch') );
    await waitForNextUpdate();
    const { data, loading } = result.current;
    

    expect ( data.length ).toBe(10);
    expect ( loading ).toBe(false);
  });
});