/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#040711",
        light: "#F9FAFB",
        lightSecondary: "#CDD5E0",
        bluePrimary: "#3662E3",
        blueSecondary: "#7CA9F3",
        grayPrimary: "#394150",
        graySecondary: "#4D5562",
        grayTransparentPrimary: "#212936cc",
        grayTransparentSecondary: "#121826cc",
      },
    },
    container: {
      center: true,
    },
    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
    },
  },
  plugins: [],
};
