import { configureStore } from '@reduxjs/toolkit';
import bundlesSlice from './bundles/bundlesSlice';
import cellsSlice from './cells/cellsSlice';

export const store = configureStore({
  reducer: {
    cells: cellsSlice,
    bundles: bundlesSlice
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
