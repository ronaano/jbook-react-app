import { bundleStart, bundleComplete } from './bundlesSlice';
import bundle from '../../bundler';
import { Dispatch } from 'redux';

export const createBundle = (cellId: string, input: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(bundleStart({ cellId }));
    const result = await bundle(input);
    dispatch(bundleComplete({ cellId, bundle: result }));
  };
};
