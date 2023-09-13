type ContentsProps = {
  contents: string;
};

export const BoardViewContents = ({ contents }: ContentsProps) => {
  return (
    <>
      <div className="tb_view">
        <div className="view_cont">
          <div className="view_cont_txt">
            <div dangerouslySetInnerHTML={{ __html: contents || '' }}></div>
          </div>
        </div>
      </div>
    </>
  );
};
