/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: true, // Activa solo en producción
    content: [
      './src/views/**/*.ejs', // Rutas a los archivos .ejs
      './src/public/**/*.js',  // Archivos de scripts públicos
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [],
}