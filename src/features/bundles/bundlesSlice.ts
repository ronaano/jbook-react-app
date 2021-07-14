import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BundlesState {
  [key: string]:
    | {
        loading: boolean;
        code: string;
        err: string;
      }
    | undefined;
}

const initialState: BundlesState = {};

export const bundlesSlice = createSlice({
  name: 'bundles',
  initialState,
  reducers: {
    bundleStart(state, action: PayloadAction<{ cellId: string }>) {
      state[action.payload.cellId] = {
        loading: true,
        code: '',
        err: ''
      };
    },
    bundleComplete(
      state,
      action: PayloadAction<{
        cellId: string;
        bundle: {
          code: string;
          err: string;
        };
      }>
    ) {
      state[action.payload.cellId] = {
        loading: false,
        code: action.payload.bundle.code,
        err: action.payload.bundle.err
      };
    }
  }
});

export const { bundleStart, bundleComplete } = bundlesSlice.actions;

export default bundlesSlice.reducer;
