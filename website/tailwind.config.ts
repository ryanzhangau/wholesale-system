import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{tstsx}',
    './src/app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
    },
  },
  plugins: [],
}
export default config
