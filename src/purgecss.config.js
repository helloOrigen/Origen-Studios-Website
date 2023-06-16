module.exports = {
    content: ["./src/**/*.jsx", "./public/**/*.html"],
    css: ["./src/Styles/seed.css"],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    output: "./src/Styles/fixedcss/seed.css",
  };
  