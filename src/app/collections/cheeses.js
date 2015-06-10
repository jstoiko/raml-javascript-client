'use strict';

var Backbone = require('backbone'),
    Cheese = require('../models/cheese');

module.exports = Backbone.Collection.extend({
    model: Cheese,
    url: 'http://localhost:6543/api/cheeses',
    parse: function(resp) {
        return resp.data;
    }
});
