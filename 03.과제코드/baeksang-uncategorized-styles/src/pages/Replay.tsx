import { TabList } from '@/components/replay/TabList';
import { VideoList } from '@/components/replay/VideoList';
import { useParams } from 'react-router-dom';

import replays from '@/mocks/replays.json';

const TabInfoList = [
  { title: '59회 백상', pathname: '/replay/59', isDefaultItem: true, id: 'tab_2' },
  { title: '58회 백상', pathname: '/replay/58', isDefaulItem: false, id: 'tab_1' },
];

export const Replay = () => {
  const { awards_id } = useParams();
  const id = Number(awards_id) || 59;
  return (
    <div className="container-wrap sub-page">
      <div className="vod-page">
        <div className="notice-title-wrap sub-title">
          <div className="container-inner">
            <h2>다시보기</h2>
            <div className="button">
              <TabList items={TabInfoList}>
                <a
                  className="box-btn more-btn"
                  href="https://tv.jtbc.co.kr/clip/pr10010312/pm10024332"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>영상 더보기</span>
                  <em className="ico-more"></em>
                </a>
              </TabList>
            </div>
          </div>
        </div>
        <div className="replay-list-wrap">
          <div className="container-inner">
            <div className="nominee-award-sector sector-title">
              <strong className="nominee-award">59회 백상예술대상</strong>
            </div>
            <VideoList
              awardsId={id}
              items={replays}
            />
            <div className="dim-wrap">
              <div className="dim-con">
                <button
                  type="button"
                  className="close-btn"
                >
                  <img
                    src="http://images.jtbc.co.kr/baeksang/btn_close.png"
                    alt="닫기"
                  />
                </button>
                <div className="replay-area"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-inner">
        <a
          href="#"
          className="top-wrap"
        >
          <img
            src="https://images.jtbc.co.kr/baeksang/go_top.png"
            alt="위로"
          />
        </a>
      </div>
      <div className="footer-wrap">
        <div className="container-inner">
          <div className="publisher">
            <div className="logo">제59회 백상예술대상</div>
            <div className="copyright">Copyrightⓒ2023 JTBC All Rights Reserved</div>
          </div>
          <div className="sponsor">
            <dl>
              <dt>방송</dt>
              <dd>
                <span>
                  <img
                    src="https://images.jtbc.co.kr/baeksang/2023/logo/logo_jtbc_wh.png"
                    alt="JTBC"
                  />
                </span>
                <span>
                  <img
                    src="https://images.jtbc.co.kr/baeksang/2023/logo/logo_jtbc2_wh.png"
                    alt="JTBC2"
                  />
                </span>
                <span>
                  <img
                    src="https://images.jtbc.co.kr/baeksang/2023/logo/logo_jtbc4_wh.png"
                    alt="JTBC4"
                  />
                </span>
              </dd>
            </dl>
            <dl>
              <dt>디지털 중계</dt>
              <dd>
                <span>
                  <img
                    src="https://images.jtbc.co.kr/baeksang/2023/logo/logo_tiktok_wh.png"
                    alt="tiktok"
                  />
                </span>
              </dd>
            </dl>
            <dl>
              <dt>협찬</dt>
              <dd>
                <span>
                  <img
                    src="https://images.jtbc.co.kr/baeksang/2023/logo/logo_tiktok_wh.png"
                    alt="tiktok"
                  />
                </span>
                <span>
                  <img
                    src="https://images.jtbc.co.kr/baeksang/2023/logo/logo_paradisecity_wh.png"
                    alt="파라다이스시티"
                  />
                </span>
                <span>
                  <img
                    src="https://images.jtbc.co.kr/baeksang/2023/logo/logo_incheon_wh.png"
                    alt="인천광역시"
                  />
                </span>
                <span>
                  <img
                    src="https://images.jtbc.co.kr/baeksang/2023/logo/logo_incheontour_wh.png"
                    alt="인천관광공사"
                  />
                </span>
                <span>
                  <img
                    src="https://images.jtbc.co.kr/baeksang/2023/logo/logo_prizm_wh.png"
                    alt="프리즘"
                  />
                </span>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};
