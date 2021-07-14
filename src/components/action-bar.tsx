import { moveCell, deleteCell } from '../features/cells/cellsSlice';
import ActionButton from './action-button';
import './action-bar.css';
import { useAppDispatch } from '../hooks/hooks';

interface ActionBarProps {
  id: string;
}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
  const dispatch = useAppDispatch();

  return (
    <div className='action-bar'>
      <ActionButton
        icon={'fas fa-arrow-up'}
        onClick={() => dispatch(moveCell({ id, direction: 'up' }))}
      />
      <ActionButton
        icon={'fas fa-arrow-down'}
        onClick={() => dispatch(moveCell({ id, direction: 'down' }))}
      />
      <ActionButton icon={'fas fa-times'} onClick={() => deleteCell(id)} />
    </div>
  );
};

export default ActionBar;
