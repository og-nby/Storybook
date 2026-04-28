import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(viteConfig) {
    // GitHub Pages では /<repo>/ 配下に配置されるため base を合わせる
    const base = process.env.STORYBOOK_BASE ?? '/';
    return { ...viteConfig, base };
  },
};

export default config;

