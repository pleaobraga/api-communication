import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@chromatic-com/storybook',
    '@storybook/experimental-addon-test'
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  webpackFinal: async (config: any) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'next/navigation': require.resolve('./mocks/next/navigation.ts')
    }
    return config
  },
  staticDirs: ['../public']
}
export default config
