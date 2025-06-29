#!/bin/bash
# Install Tailwind CSS and PostCSS
npm install -D tailwindcss postcss autoprefixer

# (Optional) Build Tailwind immediately
npx tailwindcss -i ./src/input.css -o ./tailwind.build.css --minify || echo "input.css not found, skipping build"

# (Optional) Stylelint
npm install -D stylelint stylelint-config-standard
