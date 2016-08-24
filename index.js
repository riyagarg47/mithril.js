"use strict"

var m = require("./hyperscript")
var renderService = require("./render")
var requestService = require("./request")
var redrawService = require("./redraw")
var parseQueryString = require("./querystring/parse")
var buildQueryString = require("./querystring/build")
var Stream = require("./stream")

requestService.setCompletionCallback(redrawService.publish)

m.route = require("./route")
m.mount = require("./mount")
m.withAttr = require("./util/withAttr")
m.prop = Stream
m.render = renderService.render
m.redraw = redrawService.publish
m.request = requestService.request
m.jsonp = requestService.jsonp
m.parseQueryString = parseQueryString
m.buildQueryString = buildQueryString
m.version = "bleeding-edge"

module.exports = m