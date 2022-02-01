const {  component } = require('./settings')

module.exports = function (plop) {
  plop.setDefaultInclude({generators: true})
  plop.setGenerator('component', component)
}
