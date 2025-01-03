module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Include .js and .jsx files
  ],
  darkMode: 'class', // Enable dark mode using the "dark" class
  theme: {
    extend: {
      fontFamily: {
        spacemono: ['"__Space_Mono_7dd02c"', '"__Space_Mono_Fallback_7dd02c"', 'monospace'],
        mulish: ['"__Mulish_0365e9"', '"__Mulish_Fallback_0365e9"', 'sans-serif'],
      },
      colors: {
        textcolor: '#d8d5d5',
      },
      backgroundImage: {
        'silver-gradient': 'linear-gradient(135deg, #e0e0e0, #c0c0c0, #f5f5f5)',
      },
    },
  },
  plugins: [],
};
