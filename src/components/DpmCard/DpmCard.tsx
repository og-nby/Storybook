import type { HTMLAttributes } from 'react';

export type DpmCardProps = HTMLAttributes<HTMLDivElement> & {
  title: string;
  priceYen: number | string;
  imageSrc: string;
  imageAlt?: string;
  badgeSrc?: string;
  badgeAlt?: string;
  shopName: string;
  favorite?: boolean;
  onToggleFavorite?: () => void;
};

export function DpmCard({
  title,
  priceYen,
  imageSrc,
  imageAlt = title,
  badgeSrc,
  badgeAlt = '',
  shopName,
  favorite = false,
  onToggleFavorite,
  ...divProps
}: DpmCardProps) {
  return (
    <div className="c-card" {...divProps}>
      <div className="c-card__grid">
        <div className="c-card__content">
          <div className="c-card__thumb is-image-loaded">
            <img decoding="async" loading="lazy" alt={imageAlt} src={imageSrc} />
          </div>

          <p className="c-card__title --ellipsis-2">{title}</p>

          {badgeSrc ? (
            <div className="c-card__flex">
              <span className="c-card__badge">
                <img
                  decoding="async"
                  loading="lazy"
                  width={36}
                  height={18}
                  src={badgeSrc}
                  alt={badgeAlt}
                />
              </span>
            </div>
          ) : null}

          <p className="c-card__price">{priceYen}</p>
        </div>
      </div>

      <div className="c-card__grid">
        <div className="c-card__flexRow">
          <a className="c-text-shopname-sm" href="#" onClick={(e) => e.preventDefault()}>
            {shopName}
          </a>

          <button
            type="button"
            aria-label={favorite ? 'お気に入り解除' : 'お気に入り追加'}
            className={[
              'c-button-add-favorite',
              favorite ? 'is-favorite-added' : null,
              '--pushRight',
            ]
              .filter(Boolean)
              .join(' ')}
            onClick={onToggleFavorite}
          />
        </div>
      </div>
    </div>
  );
}

