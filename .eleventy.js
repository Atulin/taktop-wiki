const markdownItMultimdTable = require('markdown-it-multimd-table');

module.exports = function (eleventyConfig) {
    eleventyConfig.amendLibrary('md', mdLib => mdLib.use(markdownItMultimdTable));
}