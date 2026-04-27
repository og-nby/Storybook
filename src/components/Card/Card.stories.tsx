import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Button } from '../Button/Button';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  render: () => (
    <Card style={{ width: 360 }}>
      <div style={{ font: 'var(--font-heading)', marginBottom: 8 }}>
        カードタイトル
      </div>
      <div style={{ marginBottom: 12 }}>
        DESIGN.md の Border / Radius / Padding トークンで見た目を統一します。
      </div>
      <div style={{ display: 'flex', gap: 10 }}>
        <Button variant="primary">保存</Button>
        <Button variant="subtle">キャンセル</Button>
      </div>
    </Card>
  ),
};

