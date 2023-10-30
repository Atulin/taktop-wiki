const markdownItMultimdTable = require('markdown-it-multimd-table');
const eleventySass = require('@11tyrocks/eleventy-plugin-sass-lightningcss');

module.exports = function (eleventyConfig) {
    eleventyConfig.amendLibrary('md', mdLib => mdLib.use(markdownItMultimdTable));
    eleventyConfig.addPlugin(eleventySass);
    eleventyConfig.addPassthroughCopy('fonts');
}