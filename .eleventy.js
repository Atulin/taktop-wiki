const pluginSass = require('@11tyrocks/eleventy-plugin-sass-lightningcss');
const pluginNavigation = require('@11ty/eleventy-navigation');
const pluginAncestry = require("@tigersway/eleventy-plugin-ancestry");
const pluginTOC = require('eleventy-plugin-toc')

const markdownItMultimdTable = require('markdown-it-multimd-table');
const markdownItAnchor = require('markdown-it-anchor');

module.exports = function (cfg) {
    cfg.addPlugin(pluginSass);
    cfg.addPlugin(pluginNavigation);
    cfg.addPlugin(pluginAncestry);
    cfg.addPlugin(pluginTOC);

    cfg.amendLibrary('md', md => {
        md.use(markdownItMultimdTable);
        md.use(markdownItAnchor);
    });

    cfg.addShortcode("year", () => `${new Date().getFullYear()}`);

    cfg.addPassthroughCopy('fonts');
}