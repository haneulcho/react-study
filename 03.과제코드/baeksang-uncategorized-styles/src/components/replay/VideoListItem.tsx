import type { ReplayItemProps } from '@/models/replay.model';

export const VideoListItem = ({ id, image, duration_display_time, title }: Partial<ReplayItemProps>) => {
  return (
    <li>
      <a>
        <span
          className="list-thumb"
          data-vod={id}
        >
          <img
            src={image}
            alt={id}
          />
          <span className="list-thumb-over">
            <img
              src="https://images.jtbc.co.kr/baeksang/list_thumb_over_default.png"
              alt=""
            />
          </span>
          <span className="play-time">{duration_display_time}</span>
        </span>
        <span className="list-title">{title}</span>
      </a>
    </li>
  );
};
