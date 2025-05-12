// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';

export default withNuxt(
  // Your custom configs here
  {
    rules: {
      'no-console': 'off',
    },
  },
  skipFormatting,
);
