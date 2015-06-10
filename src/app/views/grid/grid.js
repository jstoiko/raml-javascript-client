'use strict';

var BaseView = require('../_extend/baseView'),
    template = require('./grid.html');

module.exports = BaseView.extend({
    render: function() {
        this.$el.html(template({data:this.collection.toJSON()}));

        return this;
    }
});
