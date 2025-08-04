module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        global: {
          1: "var(--global-text-1)",
          2: "var(--global-text-2)",
          3: "var(--global-text-3)",
          4: "var(--global-text-4)",
          5: "var(--global-text-5)",
          6: "var(--global-text-6)",
          7: "var(--global-text-7)",
          8: "var(--global-text-8)",
          9: "var(--global-text-9)",
          10: "var(--global-text-10)",
          background1: "var(--global-bg-1)",
          background2: "var(--global-bg-2)",
          background3: "var(--global-bg-3)",
          background4: "var(--global-bg-4)",
          background5: "var(--global-bg-5)",
          background6: "var(--global-bg-6)",
          text1: "var(--global-text-1)",
          text2: "var(--global-text-2)",
          text3: "var(--global-text-3)",
          text4: "var(--global-text-4)",
          text5: "var(--global-text-5)",
          text6: "var(--global-text-6)",
          text7: "var(--global-text-7)",
          text8: "var(--global-text-8)",
          text9: "var(--global-text-9)",
          text10: "var(--global-text-10)"
        },
        header: {
          text1: "var(--header-text-1)"
        },
        button: {
          background1: "var(--button-bg-1)"
        }
      },
      fontFamily: {
        'pacifico': ['Pacifico', 'cursive'],
        'dm-sans': ['DM Sans', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'heebo': ['Heebo', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
    }
  },
  plugins: []
};