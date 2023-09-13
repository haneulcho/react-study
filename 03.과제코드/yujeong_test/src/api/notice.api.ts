import { createMainClient } from '@/api/client';
import { BoardListModel, BoardListParams, BoardItemModel } from '@/models/board.model';

const httpClient = createMainClient();

// 공지사항 데이터 가져오기.
export const getNoticeList = async (params: BoardListParams) => {
  return await httpClient.get<BoardListModel>('notice', {
    params,
  });
};

export const getNoticeItem = async (id: string) => {
  return await httpClient.get<BoardItemModel>('notice/' + id);
};

// 댓글 데이터 가져오기.
