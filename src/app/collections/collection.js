'use strict';

var Backbone = require('backbone'),
    Pizza = require('../models/model');

module.exports = Backbone.Collection.extend({
    model: Pizza
});