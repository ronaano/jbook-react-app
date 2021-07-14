import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../features/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useCumulativeCode = (cellId: string) => {
  return useAppSelector((state) => {
    const { data, order } = state.cells;
    const orderedCells = order.map((id) => data[id]);

    const showFunc = `
          var show = (value) => {
      
            import _React from 'react';
            import _ReactDOM from 'react-dom';
            const root = document.querySelector('#root');
            if(typeof value === 'object') {
              if(value.$$typeof && value.props) {
                _ReactDOM.render(value, root);
              } else {
                root.innerHTML = JSON.stringify(value);
            }
            } else{
              root.innerHTML = value;
            }
          }
          `;
    const showFuncNoop = 'var show = () => {}';
    const cumulativeCodeCells = [];
    for (let c of orderedCells) {
      if (c.type === 'code') {
        if (c.id === cellId) {
          cumulativeCodeCells.push(showFunc);
        } else {
          cumulativeCodeCells.push(showFuncNoop);
        }
        cumulativeCodeCells.push(c.content);
      }
      if (c.id === cellId) {
        break;
      }
    }
    return cumulativeCodeCells.join('\n');
  });
};
