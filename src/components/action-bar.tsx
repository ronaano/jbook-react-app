import { moveCell, deleteCell } from '../features/cells/cellsSlice';
import ActionButton from './action-button';
import './action-bar.css';

interface ActionBarProps {
  id: string;
}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
  return (
    <div className='action-bar'>
      <ActionButton
        icon={'fas fa-arrow-up'}
        onClick={() => moveCell({ id, direction: 'up' })}
      />
      <ActionButton
        icon={'fas fa-arrow-down'}
        onClick={() => moveCell({ id, direction: 'down' })}
      />
      <ActionButton icon={'fas fa-times'} onClick={() => deleteCell(id)} />
    </div>
  );
};

export default ActionBar;
