const state = require("./state")
const effects = require("./effects")
const reducers = require("./reducers")

module.exports = {
  namespace: 'meta',
  state,
  reducers,
  effects
}
