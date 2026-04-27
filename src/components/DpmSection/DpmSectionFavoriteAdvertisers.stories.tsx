import type { Meta, StoryObj } from '@storybook/react';

function FavoriteAdvertisersSection() {
  return (
    <section id="favoriteAdvertisers" className="c-section">
      <header className="c-heading-layout-justify-end">
        <h2 className="c-heading-lv1 u-overflow-reader-1">お気に入りショップ</h2>
        <a className="c-text-link-arrow" href="#" onClick={(e) => e.preventDefault()}>
          もっと見る
        </a>
      </header>

      <div className="u-display-hide-pc-tb">
        <div className="swiper-container c-swiper-standalone">
          <div className="swiper-wrapper">
            {[
              {
                alt: '大丸松坂屋オンラインストア',
                rate: '4.1',
              },
              { alt: 'Klook（クルック）', rate: '6.5' },
              { alt: '資生堂オンラインストア', rate: '5.5' },
              { alt: 'じゃらんnet', rate: '1' },
            ].map((x) => (
              <div className="swiper-slide" key={x.alt}>
                <div className="c-featuredShops">
                  <div className="c-card --compact">
                    <div className="c-card__content">
                      <a className="c-card__thumb is-image-loaded" href="#" onClick={(e) => e.preventDefault()}>
                        <img
                          decoding="async"
                          loading="lazy"
                          alt={x.alt}
                          src="https://c1.dmarket.docomo.ne.jp/assets/img/icon_assets_preload.svg"
                        />
                      </a>
                      <div className="c-card__pointArea">
                        <div className="c-point-card --centering">
                          <div className="c-point-card__returnRate">
                            {x.rate}
                            <span className="c-point-card__returnRateUnit">%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const meta: Meta = {
  title: 'Sections/FavoriteAdvertisers',
  component: FavoriteAdvertisersSection,
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj;

export const Basic: Story = {
  render: () => <FavoriteAdvertisersSection />,
};

