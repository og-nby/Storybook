import type { Preview } from '@storybook/react';
import '../src/styles/global.css';
import '../src/styles/dpm-card.css';
import '../src/styles/dpm-section.css';

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
    backgrounds: { disable: true },
    layout: 'centered',
  },
};

export default preview;

