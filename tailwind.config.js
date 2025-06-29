module.exports = {
  content: ["./index.html", "./js/**/*.js", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'neon-magenta': '#ff00ff',
        'neon-cyan': '#00ffff',
      },
      boxShadow: {
        glow: '0 0 8px var(--neon-cyan)',
      },
    },
  },
  plugins: [],
};
