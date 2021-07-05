import { CellProps } from '../interfaces/cellProps';
import CodeCell from './code-cell';
import TextEditor from './text-editor';
import ActionBar from './action-bar';

const CellListItem: React.FC<CellProps> = ({ cell }) => {
  let child: JSX.Element;
  cell.type === 'code'
    ? (child = <CodeCell cell={cell} />)
    : (child = <TextEditor cell={cell} />);
  return (
    <div>
      <ActionBar id={cell.id} />
      {child}
    </div>
  );
};

export default CellListItem;
