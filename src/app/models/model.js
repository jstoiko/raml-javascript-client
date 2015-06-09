'use strict';

var Backbone = require('backbone');

module.exports = Backbone.model.extend({
    defaults: {
        "name": "",
        "crust": 1
    }
});