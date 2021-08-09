const pluginTailwindCSS = require("eleventy-plugin-tailwindcss");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy('./src/css')
  eleventyConfig.addPassthroughCopy('./src/static')
  // plugins
  eleventyConfig.addPlugin( require('@11ty/eleventy-navigation') );

  // page nav
  eleventyConfig.addShortcode('navlist', require('./lib/shortcodes/navlist.js'));

  //tailwind css
  eleventyConfig.addPlugin(pluginTailwindCSS, {
    src: "src/css/main.css",
    keepFolderStructure: true,
    minify: false
  });

  

  // 11ty defaults
  return {
    
    dir: {
      input: 'src',
      output: '_site'
    },
    passthroughFileCopy: true
    
  };
};

