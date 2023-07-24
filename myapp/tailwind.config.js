/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
        
        "primary": "#018e4f",
                
        "secondary": "#67eae4",
                
        "accent": "#aeeaf2",
                
        "neutral": "#262d40",
                
        "base-100": "#f3f5f7",
                
        "info": "#4d8adb",
                
        "success": "#105c2b",
                
        "warning": "#926807",
                
        "error": "#e55d85",
                },
              },
            ],
          },
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
    },
  },
  plugins: [require("daisyui")],
}
