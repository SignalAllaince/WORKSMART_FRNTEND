/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "20px",
        xl: "24px",
        "2xl": "1.75rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
        "5xl": "3rem",
        "6xl": "3.5rem",
        "7xl": "64px",
      },
      colors: {
        primary: {
          light: "#E0BFC0",
          bold: "#9C3233",
          extrabold: "#FF0000",
          hover: "#F0E0E0",
        },
        grey:{
          100:"#D5D5D5",
          200:"#4B4B4D",
          300:"#E4E4E4",
          400:"#EDEDED",
          500:"#8A8A8A"
        },
        purple:{
          bold:"#7F56D9"
        }
      },
    },
  },
  plugins: [],
}