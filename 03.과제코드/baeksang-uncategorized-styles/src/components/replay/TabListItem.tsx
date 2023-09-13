import { NavLink, useParams } from 'react-router-dom';

import { TabItemProps } from '@/models/replay.model';

export const TabListItem = ({ title, pathname, isDefaultItem }: TabItemProps) => {
  const { awards_id } = useParams();

  return (
    <NavLink
      to={pathname}
      className={({ isActive }) =>
        isActive || (!awards_id && isDefaultItem) ? 'box-btn timeof2 on' : 'box-btn timeof1'
      }
    >
      <span>{title}</span>
    </NavLink>
  );
};
