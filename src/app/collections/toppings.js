'use strict';

var Backbone = require('backbone'),
    Topping = require('../models/topping');

module.exports = Backbone.Collection.extend({
    model: Topping,
    url: 'http://localhost:6543/api/toppings',
    parse: function(resp) {
        return resp.data;
    }
});
