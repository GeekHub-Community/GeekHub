  import type { Config } from 'tailwindcss'

  const config: Config = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
        colors: {
          // Add your custom colors here
          white: '#FFFAF0',
          black: '#1B1B1B',
          blue: '#190B83',
          AthensGray:'#F4F5F7'
          // Add as many custom colors as you need
        },
      },
    },
    plugins: [],
  }
  export default config
