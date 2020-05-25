const pluginSEO = require("eleventy-plugin-seo");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('assets');
    eleventyConfig.addPlugin(pluginSEO, require("./src/_data/seo.json"));
};

return {
    pathPrefix: "/bdoychinov/"
}