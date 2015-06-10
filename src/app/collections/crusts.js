'use strict';

var Backbone = require('backbone'),
    Crust = require('../models/crust');

module.exports = Backbone.Collection.extend({
    model: Crust,
    url: 'http://localhost:6543/api/crusts',
    parse: function(resp) {
        return resp.data;
    }
});
