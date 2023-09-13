export type WinnerProps = {
  image?: string;
  award_name?: string;
  title?: string;
  sub_title?: string;
};

export type CandidateListProps = {
  image: string;
  id: string;
  award_name: string;
  title: string;
};

export type CandidateProps = {
  idx: number;
  division_name: string;
  has_sector_winner: boolean;
  winner: WinnerProps;
  list: CandidateListProps[];
};
