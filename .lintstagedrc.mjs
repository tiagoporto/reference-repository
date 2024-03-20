export default {
  '*': 'prettier --check --ignore-unknown --write',
  '*.{md,mdx}': 'eslint --ext md,mdx --max-warnings 0',
  '*.{ts,tsx}': () => 'tsc --project tsconfig.json --noEmit',
  '*.{js,jsx,ts,tsx,md,mdx}': [
    'eslint --ext js,jsx,ts,tsx,md,mdx --max-warnings 0',
    'jest --bail --findRelatedTests --passWithNoTests',
  ],
}
