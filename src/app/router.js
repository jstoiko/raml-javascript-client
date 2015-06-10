'use strict';

var $ = require('jquery'),
    Backbone = require('backbone');

Backbone.$ = $;


// this is the backbone way
var CheesesCollection = require('./collections/cheeses'),
    CrustsCollection = require('./collections/crusts'),
    SaucesCollection = require('./collections/sauces'),
    ToppingsCollection = require('./collections/toppings');

// this is the raml way
var PizzaFactoryApi = require('pizza-factory-api'),
    client = new PizzaFactoryApi();


var GridView = require('./views/grid/grid');

var currentView = null,
    $wrapper = $('.wrapper');

module.exports = Backbone.Router.extend({
    routes: {
        '': 'showCheeses',
        'cheeses': 'showCheeses',
        'crusts': 'showCrusts',
        'sauces': 'showSauces',
        'toppings': 'showToppings',
    },
    initialize: function() {
        Backbone.history.start();
    },
    fetchAndRenderTheBackboneWay: function(collection) {

        // this is the backbone way
        collection.fetch({
            success: function() {
                currentView = new GridView({collection: collection});
                $wrapper.append(currentView.render().el);
            }
        });
    },
    fetchAndRenderTheRamlWay: function(collection) {

        // this is the raml way
        collection.get().then(function (resp) {
            currentView = new GridView({collection: new Backbone.Collection(resp.body.data)});
            $wrapper.append(currentView.render().el);
        });
    },
    showCheeses: function() {
        if (currentView) currentView.dispose();

        this.fetchAndRenderTheRamlWay(client.resources.cheeses);
    },
    showCrusts: function() {
        if (currentView) currentView.dispose();

        this.fetchAndRenderTheBackboneWay(new CrustsCollection());
    },
    showSauces: function() {
        if (currentView) currentView.dispose();

        this.fetchAndRenderTheBackboneWay(new SaucesCollection());
    },
    showToppings: function() {
        if (currentView) currentView.dispose();

        this.fetchAndRenderTheBackboneWay(new ToppingsCollection());
    }
});
