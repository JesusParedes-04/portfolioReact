module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {

    extend: {
      fontFamily: {
        sofia: ['Sofia Sans Condensed', 'sans-serif'],
        bitter: ['Bitter', 'serif'],
        lato: ['Lato', 'sans-serif'],
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
      },
      colors: {
        light: {
          primary: '#EF4444', // Red-500
          secondary: '#1F2937', // Gray-800
          optional: '#F8FAFC', // Slate-50
        },
        dark: {
          primary: '#EF4444', // Red-500
          secondary: '#1F2937', // Gray-800
          optional: '#F8FAFC', // Slate-50
        },
      },
    },
  },
  plugins: [
  ],
};

