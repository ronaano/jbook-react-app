import { useEffect } from 'react';
import CodeEditor from './code-editor';
import Preview from './preview';
import Resizable from './resizable';
import { Cell } from '../features/cells/cell';
import {
  useCumulativeCode,
  useAppSelector,
  useAppDispatch
} from '../hooks/hooks';
import { updateCell } from '../features/cells/cellsSlice';
import { createBundle } from '../features/bundles/createBundle';
import './code-cell.css';
interface CodeCellProps {
  cell: Cell;
}

const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {
  const bundle = useAppSelector((state) => state.bundles[cell.id]);
  console.log(bundle);
  const cumulativeCode = useCumulativeCode(cell.id);
  console.log(cumulativeCode);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!bundle) {
      console.log('no bundle');
      // TODO: Figure out why the preview window keeps loading even though a bundle appears with code inside of it
      createBundle(cell.id, cumulativeCode);
    }
    const timer = setTimeout(async () => {
      console.log('there is a bundle');
      console.log(cell.id + cumulativeCode);
      createBundle(cell.id, cumulativeCode);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cumulativeCode, cell.id, createBundle]);

  return (
    <Resizable direction='vertical'>
      <div
        style={{
          height: 'calc(100% - 10px)',
          display: 'flex',
          flexDirection: 'row'
        }}
      >
        <Resizable direction='horizontal'>
          <CodeEditor
            initialValue={cell.content}
            // TODO: Figure out how to stop each keypress calling updateCell, maybe using setTimeout
            onChange={(value) =>
              dispatch(updateCell({ id: cell.id, content: value }))
            }
          />
        </Resizable>
        <div className='wrapper'>
          {!bundle || bundle.loading ? (
            <div className='progress-cover'>
              <progress className='progress is-small is-primary' max='100'>
                Loading
              </progress>
            </div>
          ) : (
            <Preview code={bundle.code} bundlingStatus={bundle.err} />
          )}
        </div>
      </div>
    </Resizable>
  );
};

export default CodeCell;
