import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        "n3t-black": "#1A1A1A",
        "n3t-gray": "#2A2A2A",
        "n3t-gold-1": "#FFB848",
        "n3t-gold-2": "#FFDB5F",
        "n3t-gold-3": "#FFB374",
        "n3t-white": "#E5E5E5"
      },
      backgroundImage: {
        "n3t-gradient": "linear-gradient(180deg, #FFB374 0%, #FFB848 48.96%, #FFDB5F 100%)"
      },
      fontFamily: {
        "rubik": "Rubik"
      },
      textColor: {
        "n3t-black": "#1A1A1A",
        "n3t-gray": "#2A2A2A",
        "n3t-gold-1": "#FFB848",
        "n3t-gold-2": "#FFDB5F",
        "n3t-gold-3": "#FFB374",
        "n3t-white": "#E5E5E5"
      },
      borderColor: {
        "n3t-black": "#1A1A1A",
        "n3t-gray": "#2A2A2A",
        "n3t-gold-1": "#FFB848",
        "n3t-gold-2": "#FFDB5F",
        "n3t-gold-3": "#FFB374",
        "n3t-white": "#E5E5E5"
      }
    },
  },
  plugins: [],
}
export default config
