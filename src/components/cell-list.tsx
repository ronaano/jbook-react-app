import { orderedListCommand } from '@uiw/react-md-editor';
import { domainToASCII } from 'url';
import { useTypedSelector } from '../hooks/used-typed-selector';

const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) =>
    order.map((id) => data[id])
  );
  return <div>Cell List</div>;
};

export default CellList;
