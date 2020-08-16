module.exports = {
  plugins: [
    //- https://github.com/WDS-T/postcss-grid-kiss
    require("postcss-grid-kiss")({ 
      fallback: false,
      optimize: false,
    }),
  ],
};
