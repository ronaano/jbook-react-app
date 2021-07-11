import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { persistMiddleware } from './middlewares/persist-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(persistMiddleware, thunk))
);
