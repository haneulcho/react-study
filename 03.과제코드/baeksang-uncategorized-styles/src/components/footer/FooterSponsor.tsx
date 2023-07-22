import { sponsorItems } from '@/mocks/sponsorItem';
import { FooterSposorItem } from '@/components/footer/FooterSponsorItem';
export const FooterSposor = () => {
  return (
    <div className="sponsor">
      {sponsorItems.map((item, index) => {
        return (
          <dl key={index}>
            <dt>{item.title}</dt>
            <dd>
              {item.child.map((item, index) => {
                return (
                  <FooterSposorItem
                    key={`Footer-${index}`}
                    {...item}
                  />
                );
              })}
            </dd>
          </dl>
        );
      })}
    </div>
  );
};
