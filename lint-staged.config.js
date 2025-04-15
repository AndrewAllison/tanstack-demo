export default {
  '**/apps/web/**/*.{ts,tsx,js,jsx}': ['pnpm --filter web lint:fix'],
  '**/packages/utils/**/*.{ts,tsx,js,jsx}': ['pnpm --filter utils lint:fix'],
  '**/*.{json,css,scss,md,yml,yaml}': ['prettier --write'],
};
