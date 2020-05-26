const pluginSEO = require("eleventy-plugin-seo");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('assets');
    eleventyConfig.addPlugin(pluginSEO, {
        title: "Boyan Doychinov - A web developer from Berlin",
        description: "An aspriring web developer looking to land an entry-level job in the tech-field.",
        author: "Boyan Doychinov",
      });
};

return {
    pathPrefix: "/bdoychinov/"
}