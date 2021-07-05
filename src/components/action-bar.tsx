import { useActions } from '../hooks/useActions';
import ActionButton from './action-button';

interface ActionBarProps {
  id: string;
}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
  const { moveCell, deleteCell } = useActions();

  return (
    <div>
      <ActionButton
        icon={'fas fa-arrow-up'}
        onClick={() => moveCell(id, 'up')}
      />
      <ActionButton
        icon={'fas fa-arrow-down'}
        onClick={() => moveCell(id, 'down')}
      />
      <ActionButton icon={'fas fa-times'} onClick={() => deleteCell(id)} />
    </div>
  );
};

export default ActionBar;
