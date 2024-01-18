/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "bounce-one": "bounce 2.5s linear infinite",
        "bounce-two": "bounce 3s ease infinite",
        "bounce-three": "bounce 3s ease-in-out infinite",
        "bounce-four": "bounce 3s ease-in-out infinite",
        "bounce-five": "bounce 2s ease-out infinite",
        "bounce-six": "bounce 2s ease-in infinite",
      },
    },
  },
  plugins: [],
};
