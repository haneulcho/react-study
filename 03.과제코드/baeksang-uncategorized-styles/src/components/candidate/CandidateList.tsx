import candidates from '@/mocks/candidates.json';
import { CandidateListItem } from '@/components/candidate/CandidateListItem';

export const CandidateList = () => {
  return candidates.map((item, index) => {
    return (
      <CandidateListItem
        {...item}
        key={index}
        idx={index + 1}
      />
    );
  });
};
