module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'neon-cyan': '#00ffff',
        'neon-magenta': '#ff00ff',
      },
      boxShadow: {
        'shadow-glow': '0 0 8px var(--neon-cyan)',
      },
    },
  },
  plugins: [],
};
