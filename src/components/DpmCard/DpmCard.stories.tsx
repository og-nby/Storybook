import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { DpmCard } from './DpmCard';

const meta: Meta<typeof DpmCard> = {
  title: 'Components/DpmCard',
  component: DpmCard,
  args: {
    title: 'スカーフクロススマホチェーン',
    priceYen: '2,376',
    imageSrc:
      'https://dpm-affiliate.docomo.ne.jp/api/images?url=https%3A%2F%2Fimage.t-fashion.jp%2Fketty%2Fimages%2Fgoods%2F2502-4114-51297%2Fz-2502-4114-51297_25.jpg&advertiserId=10066&sku=117240143',
    badgeSrc:
      'https://c1.dmarket.docomo.ne.jp/assets/img/icon_assets_sale_20250401.png',
    badgeAlt: 'セール',
    shopName: 'タカシマヤファッションスクエア',
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof DpmCard>;

export const Basic: Story = {};

export const FavoriteToggle: Story = {
  render: (args) => {
    const [fav, setFav] = useState(false);
    return (
      <DpmCard {...args} favorite={fav} onToggleFavorite={() => setFav(!fav)} />
    );
  },
};

