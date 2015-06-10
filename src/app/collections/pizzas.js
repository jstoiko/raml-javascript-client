'use strict';

var Backbone = require('backbone'),
    Pizza = require('../models/pizza');

module.exports = Backbone.Collection.extend({
    model: Pizza,
    url: 'http://localhost:6543/api/pizzas',
    parse: function(resp) {
        return resp.data;
    }
});
