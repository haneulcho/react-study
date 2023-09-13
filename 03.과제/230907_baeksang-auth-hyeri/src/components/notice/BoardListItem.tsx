import { BoardListItemModel } from '@/models/board.model';
import { formatDate } from '@/utils';
import { Link, NavLink } from 'react-router-dom';

export const BoardListItem = ({ id, title, created_at }: BoardListItemModel) => {
  return (
    <tr>
      <td>{id}</td>
      <td className="title">
        <NavLink to={`/notice?id=${id}`}>{title}</NavLink>
      </td>
      <td>{formatDate(created_at, 'YYYY. MM. DD. H:mm')}</td>
    </tr>
  );
};
