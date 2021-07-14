import './add-cell.css';
import { insertCellAfter } from '../features/cells/cellsSlice';

interface AddCellProps {
  previousCellId: string | null;
  forceVisible?: boolean;
}

const AddCell: React.FC<AddCellProps> = ({ forceVisible, previousCellId }) => {
  return (
    <div className={`add-cell ${forceVisible && 'force-visible'}`}>
      <div className='add-buttons'>
        <button
          className='button is-rounded is-primary is-small'
          onClick={() => insertCellAfter({ id: previousCellId, type: 'code' })}
        >
          <span className='icon is-small'>
            <i className='fas fa-plus' />
          </span>
          <span>Code</span>
        </button>
        <button
          className='button is-rounded is-primary is-small'
          onClick={() => insertCellAfter({ id: previousCellId, type: 'text' })}
        >
          <span className='icon is-small'>
            <i className='fas fa-plus' />
          </span>
          <span>Text</span>
        </button>
      </div>
      <div className='divider'></div>
    </div>
  );
};

export default AddCell;
