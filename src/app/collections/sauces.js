'use strict';

var Backbone = require('backbone'),
    Sauce = require('../models/sauce');

module.exports = Backbone.Collection.extend({
    model: Sauce,
    url: 'http://localhost:6543/api/sauces',
    parse: function(resp) {
        return resp.data;
    }
});
