/**
 * @param  {object} xdc - add, remove, _userConfig and config
 * @param  {*} options - custom option
 */
module.exports = function (xdc, options) {
  xdc.config.postcss = (xdc.config.postcss || []).concat([require('autoprefixer')(options || {})])
  xdc.add('vue.autoprefixer', false)
}
