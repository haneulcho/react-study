import { AwardListItem } from '@/components/candidate/AwardListItem';
import { CandidateProps } from '@/models/award.model';

export const CandidateListItem = ({ idx, division_name, has_sector_winner, winner, list }: Partial<CandidateProps>) => {
  return (
    <div className={`awards-sector-wrap sector0${idx}`}>
      <div className="award-sector-title">
        <h3>{division_name}</h3>
      </div>
      <div className="awards-con">
        {winner && has_sector_winner && (
          <div className="awards-prize">
            <div className="awards-prize-con">
              <span className="list-thumb">
                <img
                  src={winner?.image}
                  alt={winner?.title}
                />
              </span>
              <span className="title">
                <strong className="title-prize">{winner?.award_name}</strong>
                <em>{winner?.title}</em>
                {winner?.sub_title && <span className="name">{winner?.sub_title}</span>}
              </span>
            </div>
          </div>
        )}
        <div className="awards-awarded">
          <ul className="awarded-list">
            {list?.map((item, index) => {
              return (
                <AwardListItem
                  {...item}
                  key={index}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
