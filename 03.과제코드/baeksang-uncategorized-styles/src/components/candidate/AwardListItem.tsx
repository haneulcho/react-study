import { CandidateListProps } from '@/models/award.model';

export const AwardListItem = ({ image, title, award_name }: CandidateListProps) => {
  return (
    <li>
      <span className="list-thumb">
        <img
          src={image}
          alt={title}
        />
      </span>
      <span className="title">
        <strong className="title-prize">{award_name}</strong>
        <em>{title}</em>
        <span className="name"></span>
      </span>
    </li>
  );
};
