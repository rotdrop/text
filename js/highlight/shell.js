(self["webpackChunk_nextcloud_text"] = self["webpackChunk_nextcloud_text"] || []).push([["highlight/shell"],{

/***/ "./node_modules/highlight.js/lib/languages/shell.js":
/*!**********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/shell.js ***!
  \**********************************************************/
/***/ ((module) => {

/*
Language: Shell Session
Requires: bash.js
Author: TSUYUSATO Kitsune <make.just.on@gmail.com>
Category: common
Audit: 2020
*/

/** @type LanguageFn */
function shell(hljs) {
  return {
    name: 'Shell Session',
    aliases: [ 'console' ],
    contains: [
      {
        className: 'meta',
        // We cannot add \s (spaces) in the regular expression otherwise it will be too broad and produce unexpected result.
        // For instance, in the following example, it would match "echo /path/to/home >" as a prompt:
        // echo /path/to/home > t.exe
        begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#]/,
        starts: {
          end: /[^\\](?=\s*$)/,
          subLanguage: 'bash'
        }
      }
    ]
  };
}

module.exports = shell;


/***/ })

}]);
//# sourceMappingURL=shell.js.map?v=0fb2dcdaa79e3d51b8d3