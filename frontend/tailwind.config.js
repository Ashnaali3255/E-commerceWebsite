// import daisyui from "daisyui";

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [daisyui],
//   daisyui: {
//     themes: [
//       "forest",
//     ],
//   },
// }
// tailwind.config.js
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [daisyui],
  daisyui: {
    themes: ["forest", "coffee", "pastel", "dark", "light"],
  },
};
