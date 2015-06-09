'use strict';

var $ = require('jquery'),
    Backbone = require('backbone');

Backbone.$ = $;

var ModuleView = require('./views/module/module'),
    PizzaFactoryApi = require('pizza-factory-api'),
    client = new PizzaFactoryApi();

var currentView = null,
    $wrapper = $('.wrapper');

module.exports = Backbone.Router.extend({
    routes: {
        '': 'default',
        'index': 'default'
    },
    initialize: function() {
        Backbone.history.start();
    },
    default: function() {
        if (currentView) currentView.dispose();
        currentView = new ModuleView();
        var resource = client.resources.toppings;
        resource.get().then(function (res) { console.log(res.body) });
        $wrapper.append(currentView.render().el);
    }
});
