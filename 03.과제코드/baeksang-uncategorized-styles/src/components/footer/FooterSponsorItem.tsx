type Props = {
  image: string;
  alt: string;
};

export const FooterSposorItem = ({ image, alt }: Props) => {
  return (
    <span>
      <img
        src={image}
        alt={alt}
      />
    </span>
  );
};
