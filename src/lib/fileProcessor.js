const HTML5Outline = require('h5o');
const { JSDOM } = require('jsdom');
const fileContentHelper = require('./fileContentHelper');
const treeHelper = require('./treeHelper');

function getHTML5Outline(filepath, id) {
  const fileContent = fileContentHelper.getFileContent(filepath, id);

  return HTML5Outline(new JSDOM(fileContent).window.document.body);
}

module.exports.processFile = (filepath, id) => treeHelper.getTree([], getHTML5Outline(filepath, id), id);
